---
title: "EBoard 17: Pause for breath - lots of topics (Section 1)"
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
    * Using lambda-free procedures with lists

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
  during any of these tims. (You may attempt each of this week's LAs 
  only once.)
    * 7:30--8:00, 8:50--9:20, 10:20--11:30, 3:30--4:30.
* For section 1 only: This Friday will approximately follow last Friday's 
  model. That is, you may take LAs from 7:30--8:00, we'll meet at 8:00
  to go over administrative materials. We'll then split up between those
  who are doing review and those who are working on projects. At 8:50,
  we'll break for quizzes.

### Upcoming work

* Due Thursday, 2026-10-06
    * [Mini-project 1 redo](https://www.gradescope.com/courses/1370413/assignments/8707061)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
    * Due date exstended because this is a review week.
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
* Friday, 9 October 2026, 11 a.m.--noon, Kington Plaza or JRC 101.
  _Mental Health & Wellness Resource Fair_ **New**
    * Stop by for as long as you think is appropriate.
* Saturday, 10 October 2026, Evening.
  _Participate in 10/10 with moderation._ **New**
    * Moderation: No more than two normal-size alcoholic drinks. (E.g., one 
      shot, 12/16 oz of beer, 5 oz of wine.)
* Monday, 12 October 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 13 October 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Wednesday, 14 October 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_

Misc

* Wednesday, 7 October 2026, 4:00--4:15 p.m., JRC 101.
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

Tracing rules
-------------

Key idea of tracing: Try to figure out/understand how the computer evaluates
the expressions you give it.

* Helps solidify our understanding of Scheme. We can't write instructions
  for doing things unless we know how the instructions will work.
* When things go wrong, gives you a tool for trying to figure out why.

Three key rules for basic tracing with function calls.

* Before starting the next two rules, make sure to substitute any 
  the value for any variable you've defined with `define`.
* Evaluate arguments to a procedure before you apply the procedure.
  ("Innermost first.") 
    * Given a choice, we normally evaluate arguments left to right.
        * Ideally, we'll get the same answer whether we evaluate
          left to right or right to left or "randomly"
        * This is one of the benefits of the way we write programs
          in Scheme.
    * Do only one argument at a time.
* When applying a user-defined function, substitute each argument in
  the function call for the corresponding parameter in the function
  body.
    * Evaluate predefined functions "as expected"

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

To write programs/algorithms, we need a variety of tools.

* Predefined values and operations. (See our notes on types from Monday.)
* Ways to name things -- `(define NAME EXP)`
* Ways to sequence operations.
    * "Evaluate arguments before applying a function" `(spread bread (remove-contents (open-jar pb)))`
    * We evaluate define statements in order.
        * `(define opened (open-jar pb))`
        * `(define stuff (remove-contents opened))`
        * `(define half-sandwich (spread bread stuff))`
    * We use `o` -- `(o spread-on-bread remove-contents open-jar)`
* Ways to define subroutines (functions, procedures, operations): Take
  some inputs, do some operations, and return a value.
    * `(lambda (INPUTS) OPERATIONS)`
* Ways to make choices. (conditionals)
    * "If the bag has a twisty tie ..."
    * `(if TEST CONSEQUENT ALTERNATE)` 
        * Not quite a function call
        * Evaluate the `TEST`
        * If the `TEST` evaluates to true (`#t`), evaluate the `CONSEQUENT`
        * If the `TEST` evaluates to false (`#f`), evaluate the `ALTERNATE`
    * `(cond [TEST1 CONSEQUENT1] [TEST2 CONSEQUENT2] ... [else ALTERNATE])`
        * Evaluate each `TEST` in sequence. As soon as one holds, evaluate
          the corresponding consequent and return its value, ignoring the
          rest. If no `TEST` holds, evaluate and return the `ALTERNATE`.
    * Associated things
        * Predicates - Functions that return true or false. `char-upcase?`,
          `odd?`, `positive?`, `<=`, `string<=?`, `square?`
        * `not` - "Reverse" a boolean value. (#t -> #f, #f -> #t)
        * `(or EXP1 EXP2 ... EXPn)` - evaluate each expression in turn,
          returning true when it hits one that evaluates to true, returning
          false if none evaluates to true.
        * `(and EXP1 EXP2 ... EXPn)` - evaluate each expression in turn,
          returning false when it hits one that evaluates to false, returning
          true if none evaluates to false.

Example: 

Write a procedure that determines how many days there are in a month
(represented as an integer), assuming it's not a leap year. Have it
return false if given an integer that is not a valid month. Have it
return whatever you wish (or crash) if given a non-integer.

```
(define days-in-month
  (lambda (month)
    (cond
      [(= month 2)
       28]
      [(or (= month 9) (= month 4) (= month 6) (= month 11))
       30]
      [(and (<= 1 month) (<= month 12))
       31]
      [else 
       #f])))
```

We could also use `(<= 1 month 12)`

Returning to the list of things necessary for algorithms: Repetition.
You need to be able to do an action again and again and again, perhaps
a fixed of times, perhaps until some condition is achieved. 
* In Scheme
    * `map` - do someting to the first element, then the second, then
      the third
    * `pixel-map` - do something to the first pixel, then the second, ...
    * We will learn a general techniqure for repetition after break.

Lambda-free functions
---------------------

Functions are one of the key parts of writing algorithms. 

* We started with one way to write functions: `(lambda (INPUTS) COMPUTATION)`
* It can be useful to think about writing functions in other ways, mostly
  for concision.

Composition: `(o FUN1 FUN2 ... FUNn)`: A function that takes one input,
applies `FUNn` ... then `FUN2` then `FUN1`. (Sequencing!)

```
(define F (o f g h))
(define F
  (lambda (x)
    (f (g (h x)))))
```

Sectioning: `(l-s FUN ARG1)`: A function that takes one input (`ARG2`)
computes `(FUN ARG1 ARG2)`.

```
(define add5 (l-s + 5))
(define add5
  (lambda (arg2)
    (+ 5 arg2)))
```

`(r-s FUN ARG2)`: A function that takes one input (`ARG1`) and computes
`(FUN ARG1 ARG2)`.

```
(define appendBang (r-s string-append "!"))
(define appendBang
  (lambda (str)
    (string-append str "!")))
```

We use `o`, `l-s`, and `r-s` when we need a procedure and they seem
like appropriate tools. (Or when we're told to do so.)

* `o` - When we need to apply a sequence of functions to a value.
* `l-s` and `r-s` - When we have a two-input procedure and we want
  to fix one of the two inputs.

There are also times when we want a function and don't want to bother
naming it. These are useful because the are concise.

Sam likes them because they give you a different way of thinking about
functions.

* Lambda makes you think about functions in terms of expressions.
* These make you think about building functions from other functions.
  (This is a powerful way of thinking about building functions.)

_Can we trace using `l-s` with pixel map._ (Next class.)

Lists
-----

Lists are a type. We have a few questions we normally ask about types.

* Why do have this type? We often use lists to collect/group values.
* How does Scheme/Scamper show us values in the type?  `(list val1 val2 ...)`
* How do we create values in the type?
    * `(make-list n val)` - Make a list consisting of `n` copies of `val`.
    * `(list exp1 exp2 ... expn)`
    * `(range start finish)` - Make a list of numbers from `start` (inclusive)
      to `finish` (exclusive).
    * `(range finish)` - Make a list of numbers from 0 to `finish` (exclusive).
    * `(range start finish increment)` - Make a list of numbers from `start` to `finish`, incrementing by `increment` at each step.
    * `(BLAH->list BLAH)`
* What can we do with them? 
    * `(string->list str)`
    * `(map fun lst)`

Using lambda-free procedures with lists
---------------------------------------

_Next class._
