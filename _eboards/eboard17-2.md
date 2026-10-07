---
title: "EBoard 17: Pause for breath - lots of topics (Section 2)"
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
* Our graders are still working on MP2. Apologies.
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
  _Robert Gehorsam: The Transformation of Art and Technology:  How They Feed Each Other’s Creativity_. 
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

* Wednesday, 7 October 2026, 11:00 a.m.--1:00 p.m., JRC 1st Floor Lobby.
  _The return of Mom Hugs_ 
* Thursday, 8 October 2026, 11:00 a.m.--3:00 p.m., Goodnow 2nd.
  _Visit the Ombuds for Ombuds Day_ 
    * Get swag.
    * Bring a question for better swag. 
    * Tell Deborah that I sent you.
* Friday, 9 October 2026, 11 a.m.--1 p.m., Kington Plaza or JRC 101.
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

Will Sam give us work over break?

> No! But you might want to review stuff.

Tracing rules
-------------

What is tracing?

* Tracing simulates the execution of a Scheme program (evaluation of an
  expression in the context of definitions of values and functions).
  
Why trace?

* To make sure we understand how expressions are evaluated - We can't
  write algorithms that achieve their goal unless we understand how they
  (should) work.
* To help us figure out why things aren't working correctly.
    * As we trace something that is giving the wrong value, we realize why.
    * As we trace something that crashes, we realize why.
    * Or perhaps we compare our trace to Scamper's.

Three Basic Rules

* Start by substituting all of the variables defined by `define` statements.
* Evaluate all the arguments to a procedure before applying the procedure.
    * Usually left-to-right.
    * Some phrase this as "innermost first"
    * Note that in Scheme, **it doesn't matter** which order we evaluate
      the arguments, as long as we evaluate them before applying the function;
      we'll get the same answer each way.
* Apply procedures once their arguments are evaluated.
    * Built-in procedures: Do "the appropriate thing"
    * User-defined procedures (with lambdas): We replace the parameters with
      the corresponding arguments in the body of the procedure.

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

To write algorithms, we need a bunch of tools.

* We need some predefined values and operations on those values. (You
  can't start with nothing.)
    * The types and the operations on them are often what we start with.
* We need a way to name things.
* We need a way to sequence operations. "Open jar of peanut butter THEN
  remove pb THEN spread it on bread."
* We need a way to make subroutines / functions / procedures / operations.
  "Take some input, do some computations, return a value."
* We need a way to make choices. "If the bread has a twist-tie ..."
* We need a way to repeat actions (do them again and again and again).

How do we name things in Scheme?

* `(define NAME EXPRESSION)`

How do we sequence operations?

* Define expressions are evaluated in sequence.
    * `(define pb-open (open jar-of-pb))` `(define hunk-of-pb (remove-contents pb-open))` `(define half-sandwich (spread hunk-of-pb slice-of-bread))`
* Nest expressions. Evaluate inside-out.
    * `(spread (remove-contents (open jar-of-pb)) slice-of-bread)`
* Use `o`. `(o (r-s spread slice-of-bread) remove-contents open)`
    * Remember `(o f g h)` applies `h` then `g` then `f`.

How do we make functions?

```
(define FUN
  (lambda (PARAMS)
    COMPUTATION))
```

We use conditionals to make choices. 

* `(if TEST CONSEQUENT ALTERNATE)` - a bit like a function with a different
  evaluation strategy. Evaluate `TEST`. If the test is true (`#t`), evaluate
  the `CONSEQUENT` and return its value. If the test is false (`#f`), evaluate
  the `ALTERNATE` and return its value.
* `(cond [TEST1 CONSEQUENT1] [TEST2 CONSEQUENT2] ... [else ALTERNATE])` -
  An extended `if`. Evaluate `TEST1`. If it holds, evaluate `CONSEQUENT1`
  and return its value, ignoring the rest. If `TEST1` does not hold,
  evaluate `TEST2`. If `TEST2` holds, evaluate and return `CONSEQUENT2`.
  If none of the tests hold, evaluate and return the value of `ALTERNATE`.

To make choices, we need to be able to write expressions that return either
`#t` or `#f`. We use the term `predicate` to describe functions that return
`#t` or `#f`. We also usually write these ending in a question mark.

* `even?`, `char-upper-case?`, `square?`, `<=`, `string<=?`, ...

We also combine the results of such expressions in three basic ways.

* `(not EXP)` - Evaluate `EXP` and return "the opposite". If `EXP` is
  true (`#t`) ("`EXP` holds"), return `#f`. If `EXP` is false ("doesn't
  hold"), return `#t`.
* `(and EXP1 EXP2 ...)` - Evaluate each expression in turn. If one of them
  is false, stop immediately and return false. If none of them is false,
  return true.
* `(or EXP1 EXP2 ...)` - Evaluate each expression in turn. If one of them
  is true, stop immediately and return true. If none of them is true,
  return false.

Write a procedure, `(days-in-month month)`, that takes an integer representing
a month as a parameter and returns the number of days in that month.

* For example, `1` is January (31 days), `2` is February (28) days ...
* If `month` is not an integer, do whatever you'd like (return a value,
  likely a nonsensical value, crash and burn, ...)
* If `month` is an integer outside the range 1 .. 12, return false.

We use a `cond` because there are at least four situations to consider.

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

While we usually define procedures with `lambda`, we can also define them
in a variety of other ways, often for concision.

Composition `(o f1 f2 ... fm fn)`: A function that takes one input and
applies `fn`, then `fm`, ..., then `f2`, then `f1`.

* Example `(define make-pb-half (o spread remove-from-jar open-jar))`

More generally,

```
(define fun (o f g h))
(define fun
  (lambda (x)
    (f (g (h x)))))
```

Section: 

`(l-s fun ARG1)` - Creates a function that takes one parameter
(`ARG2`), and computes `(fun ARG1 ARG2)`.

`(r-s fun ARG2)` - Creates a function that takes one parameter
(`ARG1`), and computes `(fun ARG1 ARG2)`.

```
(define prependHello (l-s string-append "Hello "))
(define prependHello (lambda (str) (string-append "Hello " str)))

(define subtract10 (r-s - 10))
(define subtract10 (lambda (num) (- num 10)))
```

We use `o`, `l-s`, and `r-s` primarily when we want to be concise.
We often use them when we don't want to bother naming a function.

We also use them when we're told to do so.

Sam likes `o`, `l-s`, and `r-s` for another reason. They change the way
we think about functions.

* Traditional (lambda): "We build functions by writing expressions and 
  parameterizing those expressions."
* With `o`, `l-s`, and `r-s`, we think about building functions by combining
  other function in a few ways.

We will frequently use these functions with things like `map` or `pixel-map`
or `reduce` or ....

Lists
-----

Oooh! A new type.

* Why do we have lists? To group values together.
* How does the computer represent this type? `(list VAL1 VAL2 ... VALn)`
  or `null`.
* How do we create these values?
    * `(make-list n val)` - Makes a list of `n` copies of `val`.
    * `(list EXP1 EXP2 ... EXPn)` - Evaluate all the expressions and then
      shove them together into a list.
    * `range`
        * `(range n)` - Produces the list `(0 1 2 ... (- n 1))`
        * `(range start finish)` - Produces the list 
          `(start (+ 1 start) (+ 2 start) ... (- finish 1))`
        * `(range start finish inc)` - Produces the list 
          `(start (+ inc start) (+ inc inc start) ... ?)`
    * `(SOMETHING->list SOMETHING)` - Convert some other type (e.g., `string`
      to a list).
* How do we use them?
    * `(map fun lst)`
    * `(filter fun lst)`
    * `(sort may-precede? lst)`
    * ...

Using lambda-free procedures with lists
---------------------------------------

_Next class_
