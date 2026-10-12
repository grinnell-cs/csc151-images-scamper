---
title: Naming values with local bindings
summary: |
  Algorithm designers regularly find it useful to *name* the
  values their algorithms process. We consider why and how to name new
  values that are only available within a procedure.
---

## Introduction

When writing programs and algorithms, it is useful to *name* values
we compute along the way. For example, in an algorithm that, given a
list of numbers, sorts that list of numbers, it may be useful to name
the sorted list along the way.  When we associate a name with a value,
we say that we *bind* that name to the value.

So far we've seen three ways in which names are bound to values in Scheme.

* The names of built-in procedures, such as `+` and `quotient`, are
  *predefined*.  There are also some predefined values, such as `pi`.
  When the Scheme interpreter starts up, these names are already bound to
  the procedures they denote.
* The programmer can introduce a new binding by means of a *definition*. A
  definition may introduce a new equivalent for an old name, or it may
  give a name to a newly computed value.
* When a programmer-defined procedure is called, the *parameters* of the
  procedure are bound to the values of the corresponding arguments in the
  procedure call. Unlike the other two kinds of bindings, parameter bindings
  are *local* -- they apply only within the body of the procedure. Scheme
  discards these bindings when it leaves the procedure and returns to the
  point at which the procedure was called.

As you develop more and longer procedures, you will find that there
are many times you want to create local names for values that are not
parameters. We will consider such names in this reading.

## Redundant work

You will find that there are many times when you are designing algorithms
that you end up telling the computer to do the same thing again and
again and again.  For example, here's a bit of code that determines
the ratio of vowels to consonants.

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel?
  (lambda (ch)
    (or (char=? (char-downcase ch) #\a)
        (char=? (char-downcase ch) #\e)
        (char=? (char-downcase ch) #\i)
        (char=? (char-downcase ch) #\o)
        (char=? (char-downcase ch) #\u))))

;;; (consonant? ch) -> boolean?
;;;   ch : char
;;; Determine if ch is a consonant
(define consonant?
  (lambda (ch)
    (and (char-alphabetic? ch) (not (vowel? ch)))))

;;; (v2c-ratio str) -> rational?
;;;   str : string
;;; Determine the ratio of vowels to consonants in str
(define v2c-ratio
  (lambda (str)
    (/ (tally (string->list str) vowel?)
       (tally (string->list str) consonant?))))
```

Let's see how well it works.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define vowel?
  (lambda (ch)
    (or (char=? (char-downcase ch) #\a)
        (char=? (char-downcase ch) #\e)
        (char=? (char-downcase ch) #\i)
        (char=? (char-downcase ch) #\o)
        (char=? (char-downcase ch) #\u))))
(define consonant?
  (lambda (ch)
    (and (char-alphabetic? ch) (not (vowel? ch)))))
(define v2c-ratio
  (lambda (str)
    (/ (tally (string->list str) vowel?)
       (tally (string->list str) consonant?))))
</script>
(v2c-ratio "Hello")
(v2c-ratio "Aaargh!")
(v2c-ratio "aeiouxy")
(v2c-ratio "a")
</pre>

'Eh.  It's good enough for now.

But there's a problem with the design.  We're repeating some work.

Please identify some points at which we repeat work.

We mean it.

That is, stop here and ask yourself, "Where does the code duplicate
work?"

Are you done?

Are you sick of these pauses?  If more students paused when we asked
questions, we wouldn't have to insert these kinds of notes.

Anyway, work is being repeated in at least three ways.

* First, we call `(char-downcase ch)` as many as five times.  It feels
  like we should be able to do it once.
* Second, we call `(string->list str)` twice.  It feels like we should
  be able to do it once.  This may even have a bigger effect than the
  five calls to `char-downcase` because building lists can be "expensive".
* Third, we ask if many letters are a vowel twice, once when counting
  the vowels and once when counting the consonants.

That last problem is going to be hard to deal with, particularly as we
try to keep our code readable.  So let's focus on the first two.  Can
we avoid calling `(char-downcase ch)` so many times?

_Yes, you can fill in the annoying delay now._

Here's one approach: We can decompose the task into two tasks.  We'll
write one procedure that determines if a character is a lowercase vowel.

```scamper
;;; (lower-case-vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a lowercase vowel.
(define lower-case-vowel?
  (lambda (ch)
    (or (char=? ch #\a)
        (char=? ch #\e)
        (char=? ch #\i)
        (char=? ch #\o)
        (char=? ch #\u))))
```

That seems straightforward enough, doesn't it?  Our `vowel?` procedure
can then call that other procedure using a letter converted to lowercase.

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel?
  (lambda (ch)
    (lower-case-vowel? (char-downcase ch))))
```

as easy to read as before.  A little more typing on our part.
And we've saved some computation.  In fact, this kind of decomposition
is a strategy programmers use fairly frequently: Rewrite procedures
that do a sequence of steps by using one procedure for each step.

In fact, now that we've phrased it as a sequence of steps, we can
take advantage of composition.

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel? (o lower-case-vowel? char-downcase))
```

_Detour:_ Why are we repeating the documentation each time we show
you a new imlementation of the `vowel?` predicate?  Mostly to
remind you that there's a value to writing documentation, even
when our procedures are short and simple.

Will anyone ever use `lower-case-vowel?` by itself?  Possibly.
But if not, we should try something else.  Is there something
else?

## Scamper's `let` Expressions

There is.  Scamper provides `let` expressions as a way to bind values
to names.  A `let`-expression contains a *binding list* and a *body*.
The body can be any expression to be evaluated with the help of the
local name bindings.  The binding list takes the form of a parentheses
enclosing zero or more *binding expressions* of the form `[name
value]`.

That precise definition may have been a bit confusing, so here's the
general form of a `let` expression in Scamper.

```scamper
(let ([name1 exp1]
      [name2 exp2]
      ...
      [namen expn])
  body)
```

As shorthand, we call each of the name-expression pairs of a `let`-expression a *binding*.

When the Scamper evaluator encounters a `let`-expression, it evaluates each expression in turn and binds the result to the corresponding name. When it encounters the name in further expressions or the body, it uses the value associated with the name. At the end of the expression, it forgets all of the bindings. In effect, `let` provides a version of `define` that (a) you can use in expressions and (b) has a more limited scope.

_Warning! Scamper's `let` expressions behave a bit differently than the standard Scheme `let` expressions. If you use other versions of Scheme, you should use `let*` rather than `let` to achieve similar behavior._

Here's one way to write `vowel?` with `let` and without helpers.

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel?
  (lambda (ch)
    (let ([lc (char-downcase ch)])
      (or (char=? lc #\a)
          (char=? lc #\e)
          (char=? lc #\i)
          (char=? lc #\o)
          (char=? lc #\u)))))
```

*Important!*  Note that even though binding lists and binding specifications start with parentheses, they are *not* procedure calls; their role in a `let`-expression simply to give names to certain values while the body of the expression is being evaluated.  The outer parentheses in a binding list are structural -- they are there to group the pieces of the binding list together.

As we've seen, using a `let`-expression often simplifies an expression that contains two or more occurrences of the same subexpression.  The programmer can compute the value of the subexpression just once, bind a name to it, and then use that name whenever the value is needed again. Sometimes this speeds things up by avoiding such redundancies as the recomputation of values. In other cases, there is little difference in speed, but the code may be a little clearer.

## Comparing `let` and `define`

You may have missed it, but there are a few subtle and important issues with the use of `let` rather than `define` to name values and procedures. One difference has to do with the availability (or scope) of the name. Values named by `define` are available essentially *everywhere* in your program. In contrast, values named by `let` are available only within the let expression. (In case you were wondering, the term scope has nothing to do with the mouthwash.)

In addition, local variables (given by `let`) and global variables (given by our standard use of `define`) affect previous uses of the name differently (or at least appear to). When we do a new top-level `define`, we permanently replace the old value associated with the name. That value is no longer accessible. In contrast, when we use `let` to override the value associated with a name, as soon as the `let` binding is finished, the previous association is restored.

Finally, there's a benefit to using `let` instead of `define` according to the principle of information hiding. Evidence suggests that programs work better if the various pieces do not access values relevant primarily to the internal workings of other pieces. If you use `define` for your names, they are accessible (and therefore modifiable) everywhere. Hence, you enforce this separation by policy or obscurity. In contrast, if you use `let` to define your local names, these names are completely inaccessible to other pieces of code. We return to this issue in our discussion of the ordering of `let` and `lambda` below.

## Our mental model of computation and `let`

For our mental model of how Scamper evaluates expressions, it's better to think about `let` as behaving slightly differently. After evaluating the expression in each `[name exp]` pair, it replaces each copy of `name` with the corresponding value. When it runs out of pairs, it evaluates and returns the body.

Here's a short example.

```
    (let ([a (+ 2 3)]
          [b (* a 2)]
          [c (+ a b)])
      (list (* 2 a) (* 3 b) (* 4 c)))
    ; Evaluate the first bound expression
--> (let ([a 5]
          [b (* a 2)]
          [c (+ a b)])
      (list (* 2 a) (* 3 b) (* 4 c)))
    ; Replace all instances of a with 5
--> (let ([b (* 5 2)]
          [c (+ 5 b)])
      (list (* 2 5) (* 3 b) (* 4 c)))
    ; Evaluate the first bound expression
--> (let ([b 10]
          [c (+ 5 b)])
      (list (* 2 5) (* 3 b) (* 4 c)))
    ; Replace all instances of b with 10
--> (let ([c (+ 5 10)])
      (list (* 2 5) (* 3 10) (* 4 c)))
    ; Evaluate the first bound expression
--> (let ([c 15])
      (list (* 2 5) (* 3 10) (* 4 c)))
    ; Replace all instances of c with 15
--> (let ()
    ; No bindings left, move on to the body.
--> (list (* 2 5) (* 3 10) (* 4 15)))
--> (list 10 (* 3 10) (* 4 15)))
--> (list 10 30 (* 4 15)))
--> (list 10 30 60)
```

## Positioning `let` relative to `lambda`

In the examples above, we've tended to do the naming within the body of
the procedure. That is, we write

```scamper
(define proc
  (lambda (params)
    (let (...)
      exp)))
```

However, Scheme also lets us choose an alternate ordering. We can instead
put the `let` before (outside of) the `lambda`.

```scamper
(define proc
  (let (...)
    (lambda (params)
      exp)))
```

Why would we ever choose to do so? Let us consider an example. Suppose
that we regularly need to convert years to seconds. (Many years
ago, SamR said, "When you have sons between the ages of 5 and 12,
you'll understand.")  You might begin with

```scamper
(define years-to-seconds
  (lambda (years)
    (* years 365.24 24 60 60)))
```

This produce does correctly compute the desired result. However, it is a bit hard to read. For clarity, you might want to name some of the values.

```scamper
(define years-to-seconds
  (lambda (years)
    (let* ([days-per-year 365.24]
           [hours-per-day 24]
           [minutes-per-hour 60]
           [seconds-per-minute 60]
           [seconds-per-year (* days-per-year hours-per-day
                                minutes-per-hour seconds-per-minute)])
      (* years seconds-per-year))))
```

```scamper
> (years-to-seconds 10)
315567360.0
```

We have clarified the code, although we have also lengthened it a
bit. However, as we noted before, a second goal of naming is to avoid
recomputation of values. Unfortunately, even though the number of seconds
per year never changes, we compute it *every* time that someone calls
`years-to-seconds`. How can we avoid this recomputation? One strategy
is to move the bindings to `define` statements.

```scamper
(define days-per-year 365.24)
(define hours-per-day 24)
(define minutes-per-hour 60)
(define seconds-per-minute 60)
(define seconds-per-year 
  (* days-per-year hours-per-day minutes-per-hour seconds-per-minute))
(define years-to-seconds
  (lambda (years)
    (* years seconds-per-year)))
```

However, such a strategy is a bit dangerous. After all, there is nothing
to prevent someone else from changing the values here.

```scamper
(define days-per-year 360) ; Some strange calendar, perhaps in Indiana.
...
> (years-to-seconds 10)
311040000
```

What we'd like to do is to declare the values once, but keep them local
to `years-to-seconds`. The strategy is to move the `let` outside the
`lambda`.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(define years-to-seconds
  (let ([days-per-year 365.24]
        [hours-per-day 24]
        [minutes-per-hour 60]
        [seconds-per-minute 60]
        [seconds-per-year (* days-per-year hours-per-day
                             minutes-per-hour seconds-per-minute)])
    (lambda (years)
      (* years seconds-per-year))))
(years-to-seconds 10)
</pre>

As you will see in the lab, it is possible to empirically verify that
the bindings occur only once in this case, and each time the procedure
is called in the prior case.

One moral of this story is *whenever possible, move your bindings
outside the `lambda`*.   Let's return to the `vowel?`
procedure we wrote above.

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel?
  (lambda (ch)
    (let ([lc (char-downcase ch)])
      (or (char=? lc #\a)
          (char=? lc #\e)
          (char=? lc #\i)
          (char=? lc #\o)
          (char=? lc #\u)))))
```

That code is still somewhat repetitious.  After all, we're doing the
same thing for each of each of the cases: comparing.  We can take
advantage of our friends `any` and `cut` to help out.

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel?
  (lambda (ch)
    (let ([lc (char-downcase ch)]
          [vowels (string->list "aeiou")])
      (ormap (l-s char=? lc) vowels))))
```

But that definition requires Scamper to build the list every time
we call the `vowel?` procedure.  It may not
matter if we do that once, or twice, or even a hundred times.  But
when we're tallying a list of 42,000 elements (e.g., comparing vowels
to consonants in _The Wizard of Oz_, that's a lot of
extra work.  Hence, we might more sensibly write the following.

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel?
  (let ([vowels (string->list "aeiou")])
    (lambda (ch)
      (let ([lc (char-downcase ch)])
        (ormap (cut (char=? lc <>)) vowels)))))
```

Unfortunately, it is not always possible to move the bindings outside of
the `lambda`. In particular, if your let-bindings use parameters, then you
need to keep them within the body of the lambda. 

```scamper
;;; (vowel? ch) -> boolean?
;;;   ch : char?
;;; Determine whether ch is a vowel.
(define vowel-INCORRECT?
  (let ([vowels (string->list "aeiou")]
        [lc (char-downcase ch)])
    (lambda (ch)
      (ormap (cut (char=? lc <>)) vowels))))
```

If you try to run this, it will complain that it doesn't know what `ch`
is.  (Or, worse yet, it will use some other `ch` that bears no relation
to the input to the procedure.

## Local procedures

As you may have noted, `let` behaves somewhat like `define` in that
programmers can use it to name values. But we've used `define` to name
more than values; we've also used it to name procedures. Can we also use
`let` for procedures?

Yes, one can use a `let`- or `let*`-expression to create a local name
for a procedure. And we name procedures locally for the same reason that
we name values, because it speeds and clarifies the code.

```scamper
(define hypotenuse-of-right-triangle
  (let ([square (lambda (n) (* n n))])
    (lambda (first-leg second-leg)
      (sqrt (+ (square first-leg) (square second-leg))))))
```

Regardless of whether `square` is also defined outside this definition
(e.g., as a procedure that draws squares), the local binding gives
it the appropriate meaning within the lambda-expression that describes
what `hypotenuse-of-right-triangle` does.

Note, once again, that there are two places one might define `square`
locally. We can define it before the lambda (as above) or after the lambda
(as below). In the first case, the definition is done only once. In the
second case, it is done *every time* the procedure is executed.

```scamper
(define hypotenuse-of-right-triangle
  (lambda (first-leg second-leg)
    (let ([square (lambda (n) (* n n))])
      (sqrt (+ (square first-leg) (square second-leg))))))
```

So, which we should you do it? If the helper procedure you're defining
uses any of the parameters of the main procedure, it needs to come after
the `lambda`. Otherwise, it is generally a better idea to do it before
the lambda. As you practice more with `let`, you'll find times that each
choice is appropriate.  It may be difficult at first, but it will become
clearer as time goes on.

## Self checks

### Check 1: Exploring `let` (‡)

What are the values of the following `let`-expressions? You may use
Scamper to help you answer these questions, but be sure you can
explain how it arrived at its answers.

a.

```scamper
(let ([tone "fa"]
      [call-me "al"])
  (string-append call-me tone "l" tone))
```

b.

```scamper
(let ([total (+ 8 3 4 2 7)])
  (let ([mean (/ total 5)])
    (* mean mean)))
```

c.

```scamper
(let ([total (+ 8 3 4 2 7)]
      [mean (/ total 5)])
   (* mean mean))
```

d.

```scamper
(let ([inches-per-foot 12.0]
      [feet-per-mile 5280])
  (let ([inches-per-mile (* inches-per-foot feet-per-mile)])
    (* inches-per-mile inches-per-mile)))
```


### Check 2: Ratios, revisited (‡)

a. Rewrite `v2c-ratio` using a helper procedure to avoid the
redundant call to `string->list`.

b. Rewrite `v2c-ratio` using `let` to avoid the redundant call
to `string->list`.

Questions and Answers
---------------------

Why do we care about avoiding the redundant call to `string->list`?

> `string->list` is a comparatively "expensive" procedure (in terms
of computing resources).  So we'd rather not do it twice.

What do you mean by "helper procedure"?

> We tend to use "helper" generically for "any procedure we write to use 
  specifically in another procedure".
