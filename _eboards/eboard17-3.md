---
title: "EBoard 17: Pause for breath - lots of topics (Section 3)"
number: 17
section: eboards
held: 2026-10-07
link: true
---
# {{ page.title }}

_Please follow the standard start-of-class routine._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrative stuff
* Q&A
* Review
    * Tracing rules
    * Tracing
    * Conditionals
    * Lambda-free procedures
    * Lists
    * Using lambda-free procedures with lists (next class)

Administrative stuff
--------------------

### Introductory Notes

* We will start the day with a minute of silence.
* The project for today is "Music in Scamper", available at
  <https://osera.cs.grinnell.edu/csc151/labs/the-music-library.html>.
* It is taking more time than normal to write/rewrite MP3. It will
  be ready tonight. I'm extending the deadline until next Thursday.
    * Friday's class will probably be "time to get started on MP3"
* Our graders are still working in MP2. Apologies.
* LA times this Friday (across all sections). Feel free to take LAs
  during any of these times. (You may attempt each of this week's LAs 
  only once.)
    * 7:30--8:00, 8:50--9:20, 10:20--11:30, 3:30--4:30.

### Upcoming work

* Due Thursday, 2026-10-06
    * [Mini-project 1 redo](https://www.gradescope.com/courses/1370413/assignments/8707061)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
    * Due date extended because this is a review week.
* On Friday, 2026-09-09
    * Makeup Quiz/LA on collaboration 
    * Makeup Quiz/LA on lists and list operations
    * Makeup Quiz/LA on conditionals
    * Makeup Quiz/LA on compose, cut, and section
    * Makeup Quiz/LA on tracing
    * Makeup Quiz/LA on decomposition
    * Makeup Quiz/LA on procedures
* Due Sunday, 2026-10-11
    * Readings:
        * [Documenting your code](../readings/documenting-your-code.html)
        * [Unit testing](../readings/unit-testing.html)
        * [Hypothesis-driven debugging](../readings/hypothesis-driven-debugging.html)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8789234)
* Due Tuesday, 2026-10-13
    * Readings:
        * [List composition and decomposition](../readings/list-composition)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8789469)
* Due Thursday, 2026-10-15
    * [Mini-project 3](../mps/mp03)
        * Gradescope not yet ready
* Due Tuesday, 2026-10-27
    * [Mini-project 2](../mps/mp02) redo
       * Submit redo on Gradescope (forthcoming)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
       * Please add the following line to the top of your file.
         `(export ...)`.

### Upcoming activities

Scholarly

* Wednesday, 7 October 2026, 4:30--5:30 p.m., GCMoA.
  _Robert Gehorsam: The Transformation of Art and Technology:  How They Feed Each Other’s Creativity_
* Thursday, 8 October 2026, 11:00 a.m.--noon, JRC 101.
  _Scholars' Convocation: Alan Schrift: From the Origins of the Grinnell College Center for the Humanities to the Past and Current Crises of the Humanities_ 
* Tuesday, 13 October 2026, Noon--1:00 p.m., CS Commons.
  _CS Table_
* Thursday, 15 October 2026, 11:00 a.m.--noon, JRC 101.
  _Scholars' Convocation: Unknown Topic_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.

Multicultural

* Friday, 9 October 2026, 4:10--5:00 p.m., HSSC N1170
  _Middle of Everywhere (Uganda)_
* Saturday, 10 October 2026, 3:00--5:00 p.m., JRC 101.
  _Walking Tacos with SOL_ 

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Thursday, 8 October 2026, 11:00 a.m.--3:00 p.m., Goodnow 2nd.
  _Visit the Ombuds for Ombuds Day_ 
    * Get swag.
    * Bring a question for better swag. 
    * Tell Deborah that I sent you.
* Friday, 9 October 2026, 11 a.m.--noon, Kington Plaza or JRC 101.
  _Mental Health & Wellness Resource Fair_ **New**
    * Stop by for as long as you think is appropriate.
* Saturday, 10 October 2026, Evening.
  _Participate in 10/10 with moderation._ **New**
    * Moderation: No more than two normal-size alcoholic drinks. (E.g., one 
      shot, 12 oz of beer, 5 oz of wine.)
* Monday, 12 October 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 13 October 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Wednesday, 14 October 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_

Misc

* Wednesday, 7 October 2026, 4:00--4:45 p.m., JRC 101.
  _Town Hall with Rob Sands_. **New**
     * If Zach Lahn visits campus, I'll also offer a token for attending
       his town hall.
* Wednesday, 7 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 8 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 8 October 2026, 4:00--5:15 p.m., Noyce 3821.  
  _CS Major Information Session_
    * We should have snacks beforehand.

### Other good things

_These do not earn tokens, but are worth your consideration._

* Friday, 9 October 2026, 7:00--9:00 p.m., Darby.
  _Volleyball vs. Knox_ 
* Saturday, 10 October 2026, 1:00--3:00 p.m., Darby.
  _Volleyball vs. Illinois_ 

Questions
---------

### Administrative questions

Will you give us work over fall break?

> No. However, you might use some time to review / learn vocabulary.

Tracing rules
-------------

Tracing: Following the steps by which Scamper evaluates the Scheme
expressions you write. (Often done very precisely to make sure we
get it right.)

We trace for a variety of reasons:

* Tracing ensures that we understand how Scheme "works". We can't write
  algorithms unless we know what they mean.
* Tracing helps us figure out why our programs might be failing.
  "Failing" could be "gives us the wrong answer". "Failing" could
  be "issues an unexpected error".
    * A trace may reveal the issue. "Oh, I computed the wrong parameter."
    * Comparing our trace to Scamper's may reveal the issue.

Three main rules for tracing.

* Start by replacing any defined variables with their corresponding values.
* Evaluate arguments before applying a function.
    * We usually evaluate arguments left-to-right.
    * Some say "innermost"; that's a bit ambiguous.
    * In most Scamper programs, it doesn't matter which order you evaluate
      the arguments as long as you evaluate them before you apply the
      function
* After evaluating arguments, apply function
    * For a user-defined function, substitute the arguments for the
      parameters in the body of the function. (And continue.)
    * For a pre-defined function, evaluate "as expected"

Important guidance

* Do things step-by-step, don't skip steps.

The terms "function", "procedure", "subroutine", and "operation" are
often used interchangeably.

Tracing
-------

```
(define sqr (lambda (x) (* x x)))
(define p (lambda (x y) (+ (f x) (g y))))
(define f (lambda (y) (sqr (+ y 1))))
(define g (lambda (a) (+ a a)))
(define a 2)
(define b 3)
    (p (- 10 (* a 4)) (+ (* a b) 2))
--> (p (- 10 (* 2 4)) (+ (* 2 3) 2))
--> (p (- 10 8) (+ (* 2 3) 2))
--> (p 2 (+ (* 2 3) 2))
--> (p 2 (+ 6 2))
--> (p 2 8)
  ;    x y
--> (+ (f 2) (g 8))
  ;       y
--> (+ (sqr (+ 2 1)) (g 8))
--> (+ (sqr 3) (g 8))
  ;         x
--> (+ (* 3 3) (g 8))
--> (+ 9 (g 8))
  ;         a
--> (+ 9 (+ 8 8))
--> (+ 9 16)
--> 25
```

Conditionals
------------

* We need some starting point - Pre-defined functions and values.
  We looked at types last class to think about some of them.
* We need to be able to name things to ease descriptions.
* We need to be able to sequence operations. (You need to remove the
  peanut butter from the jar before spreading the pb on the bread; you
  need to open the jar before you can remove the pb.)
* We need to be able to define subroutines/procedures/functions/operations.
  These take inputs, do some computation, and return an output.
* We need to be able to express choices/decisions. (Conditionals)
* We need to be able to do things again and again and again. (Repetition)

We can do all these in Scheme. In fact, we've done all of them in Scheme.

We can name things with `(define NAME EXP)`

We have at least three ways of sequencing operations.

* We can write a sequence of definitions, and know that they are
  executed in sequence.
    * `(define open-pb-jar (open-jar peanut-butter))`
    * `(define pb (remove-contents open-pb-jar))`
    * `(define half-sandwich (spread pb slice-of-bread))`
* Since we evaluate arguments before we apply procedures, we can nest
  the operations "inside-out".
    * `(spread (remove-contents (open-jar peanut-butter)) slice-of-bread)`
* We can use `o`.
    * `(o (r-s spread slice-of-bread) remove-contents open-jar)`

We have one primary way of writing functions: With `lambda`.

```
(define func
  (lambda (INPUTS)
    COMPUTATION))
```

We can make choices

* Two primary operations for making choices.
    * `(if TEST CONSEQUENT ALTERNATE)` - Evaluate the `TEST`. If the
      `TEST` evaluates to true (`#t`) ("the test holds"), we evaluate
      the `CONSEQUENT` and return its value.
    * `(cond [TEST1 CONSEQUENT1] [TEST2 CONSEQUENT2] ... [else ALTERNATE])`
      Evaluate `TEST1`. If it holds, we evaluate `CONSEQUENT1` and return
      its value. If `TEST1` does not hold, we evaluate `TEST2`. If `TEST2`
      holds, we evaluate `CONSEQUENT2` and return its value. We continue
      until we return a value or hit the else. At that point, we
      evalute `ALTERNATE`, and return its value.
* In order to make choices, we need to be able to write expressions whose
  value is true or false. We need functions that return true or false.
  We call these predicates. `odd?`, `char-upper-case?`, `number?`, `string?`,
  `square?`, `<=`, `string-<=?`, ....
* We can also combine Boolean expressions
    * `(not EXP)` - Evaluate the expression; if it holds, return `#f`,
      if it doesn't old, return `#t`. (Returns the opposite of the
      expression.)
    * `(or EXP1 EXP2 EXP3 ... EXPn)` - Evaluate each expression in turn.
      If one of them holds, stop evaluating and return true. If none of
      them hold, return false.
    * `(and EXP1 EXP2 EXP3 ... EXPn)` - Evaluate each expression in turn.
      If one of them fails to hold (is false), stop evaluating and return 
      false. If none of them fail, return true.

Let's use our new knowledge of conditionals to solve last week's LA.

Write a procedure that takes a month (represented as an integer) as input
and returns the number of days in that month.

* 1 represents January, 2 represents February, 3 represents March, etc.
* If the input is not an integer, do whatever you'd like. Issue an error
  (implicitly or explicitly). Return some arbitrary value.
* If the input is an integer, but not in the range 1..12, we'll return false
  (`#f`).
* Assume it's not a leap year.

Are we better off using `if` or `cond` for this problem? We'll use `cond`
because there are a lot of options.

```
(define days-in-month
  (lambda (month)
    (cond
      [(= month 2)
       28]
      [(or (= month 9) (= month 4) (= month 6) (= month 11))
       30]
      [(<= 1 month 12)
       31]
      [else
       #f])))
```

Lambda-free procedures
----------------------

We use procedures often enough that we'd sometimes like to be more concise.
We have notation to define certain kinds of procedures more concisely.

Composition: `(o f g h i j)`. Function of one parameter that applies j,
then i, then h, then g, then f.

```
(define fun (o f g h))
(define fun (lambda (x) (f (g (h x)))))
```

The first is shorter and doesn't require us to check so many parens.

Section:

* `(l-s fun arg1)`. Function of one parameter, `arg2`, that computes
  `(fun arg1 arg2)`.
* `(r-s fun arg2)`. Function of one parameter, `arg1`, that computes
  `(fun arg1 arg2)`.
 
```
(define greet (lambda (str) (string-append "Hello, " str)))
(define greet (l-s string-append "Hello, "))
(define interrobang (lambda (str) (string-append str "!?")
(define interrobang (r-s string-append "!?")
```

We use these for two reasons

* They are more concise, which is particularly useful when we're not
  naming function (e.g., when using `map`)
* They change the way we think about functions.
    * With lambda, we think about a function as "write an expression and
      then put a lambda around it with parameters"
    * With `o` and section, we think about building new functions from
      old.

Lists
-----

Lists are a type. We have four questions we ask about types.

* Why do we have the type? Lists are used to collect/combine/group values.
* How does Scamper show us values in the type? `(list val1 val2 val3 ...)`,
  or `null`.
* How do we create values in the type?
    * `(make-list n val)` - Makes a list of `n` copies of `val`
    * `(list exp1 exp2 exp3 ...)` - Evaluates all the expressions and
      shoves them together into a list.
    * `range`
         * `(range n)` - Make the list `(list 0 1 2 ... (- n 1))`
         * `(range n m)` - Make the list `(list n (+ 1 n) (+ 2 n) ... (- m 1))`
         * `(range n m i)` - Make the list
    * `(SOMETHING->list SOMETHING)`, e.g., `string->list`
* What kinds of things can we do with the values in this type?
    * `length`
    * `list-ref`
    * `reverse`
    * `sort`
    * `map`

Using lambda-free procedures with lists
---------------------------------------

_Next class_
