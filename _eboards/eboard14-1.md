---
title: "EBoard 14: Lists, continued (Section 1)"
number: 14
section: eboards
held: 2026-09-30
link: false
---
# {{ page.title }}

_Please follow the standard start-of-class routine._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrative stuff
* Some notes on Monday's lab
* Some notes on MP redos
* Q&A
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Note that Scamper is now at 4.7.0! Please reload before starting the lab.
* When the readings rely on Scamper updates, they may sometimes show errors
  for unknown reasons. Try Shift-Reload.
* Time on readings continues to vary significantly. Here are the results
  from the first 25 readings.
  15min, 20min, ~20min, 30min, 30min, 30min, 30min, 30min, 30min, ~30min, ~30min, ~30min, 35min, 40min, ~40min, 42min, 45min, 45--60min, 1hr, 1hr, 1hr, 1.25hrs, 1.5hrs, 1.5hrs, 2hrs

### Attendance

* More practice for Friday's quiz.

### Upcoming activities

Scholarly

* Wednesday, 30 September 2026, 8:00--9:30 p.m., HSSC A2231.
  _Reading as a Way of Life_ 
* Thursday, 1 October 2026, 11:00 a.m.--Noon, JRC 101.
  _Scholars' Convocation: Christian Flemm: Medium Intimacy_ 
* Friday, 2 October 2026, 4:15--4:45 p.m., HSSC A1231 (the Kernel).
  _Cory McCarten '19: What Math and Data Can (and Cannot) Tell us about
   Gerymandering and Voting Rights_ 
* Friday, 2 October 2026, 5:30--7:30 p.m., Weingart Pavilion.
  _Pioneer Weekend Kickoff_ 
* Tuesday, 6 October 2026, Noon--1:00 p.m., JRC 224C (I think).
  _CS Table: ???_ 

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Thursday, 1 October 2026, 4:00--5:30 p.m., HSSC S1325. 
  _Writers@Grinnell presents a conversation with Poet Maggie Millner_ 
* Thursday, 1 October 2026, 4:15--5:30 p.m., GCMOA.
  _Johnnie Chatman: The Artist as Researcher_ 
* Thursday, 1 October 2026, 4:00--5:30 p.m., HSSC A2231. 
  _Writers@Grinnell presents a reading by Poet Maggie Millner_ 
* Friday, 2 October 2026, 7:00 p.m., Wall Theatre.
  _Neverland Players_ 
* Saturday, 3 October 2026, 2:30 p.m., Wall Theatre.
  _Neverland Players_ 
* Saturday, 3 October 2026, 7:00 p.m., Wall Theatre.
  _Neverland Players_ 
* Sunday, 4 October 2026, 2:30 p.m., Wall Theatre.
  _Neverland Players_ 

Multicultural

* Friday, 2 October 2026, 4:10--5:00 p.m., HSSC N1170
  _Middle of Everywhere (Turkiye)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 3 October 2026, 1:00--4:00 p.m., Rosenbloom Field.
  _Football vs. Knox_

Wellness

* Wednesday, 30 September 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_
* Wednesday, 30 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 5 October 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 6 October 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Saturday, 10 October 2026, All Day, Somewhere.
  _Mental Health Training_
    * Sign up on Handshake.
    * It's all day, so you will earn 3 tokens.

Misc

* Wednesday, 30 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 1 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 1 October 2026, 4:00--5:30 p.m., CS Commons.
  _Matcha and Milk Study Break_ 

### Other good things

_These do not earn tokens, but are worth your consideration._

* Wednesday, 30 September 2026, 4:00--6:00 p.m., Springer Field.
  _Men's Soccer vs. Luther College_ 
* Saturday, 3 October 2026, 1:00--3:00 p.m., Springer Field.
  _Men's Soccer vs. U. Dubuque_
* Saturday, 3 October 2026, 3:30--5:30 p.m., Springer Field.
  _Women's Soccer vs. U. Dubuque_

### Upcoming work

* Due Thursday, 2026-10-01
    * Today's lab: [More list operations](../labs/lists-more)
        * [Submit lab writeup on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8770203)
        * I'd prefer that you submit what you have done at the end of class.
    * Readings:
        * [The ACM Code of Ethics and Professional Conduct](https://www.acm.org/code-of-ethics)
        * ["Feynman’s Error: On Ethical Thinking and Drifting"](https://www.danmunro.ca/blog/2018/11/29/feynmans-error-on-ethical-thinking-and-drifting-nbsp)
        * [Submit reading responses on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8750028)
* On Friday, 2026-09-02
    * NEW Quiz/LA on collaboration (identify your classmates; just first name)
    * NEW Quiz/LA on lists and list operations.
    * MAKEUP Quiz/LA on conditionals.
    * MAKEUP Quiz/LA on compose, cut, and section.
    * MAKEUP Quiz/LA on tracing.
    * MAKEUP Quiz/LA on decomposition.
    * MAKEUP Quiz/LA on procedures.
* Due Tuesday, 2026-10-06
    * [Mini-project 1 redo](https://www.gradescope.com/courses/1370413/assignments/8707061)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.

Some notes on Monday's lab
--------------------------

### `char->digit`

Many of you wrote 

```
(define char->digit
  (lambda (char)
    (- (char->integer char) 48)))
```

I'd prefer that you write

```
(define char->digit
  (lambda (char)
    (- (char->integer char) (char->integer #\0))))
```

Can you tell why?

I might even prefer

```
(define char->digit
  (o (r-s - (char->integer #\0)) 
     char->integer))
```

### `string->integer`

* I hope this served as a useful example of decomposition and/or
  bottom-up design.

### Sectioning and `map`

"I have to add 2 to each element of a list."

    (map (l-s + 2) lst)

    (define add2
      (lambda (val)
        (+ 2 val)))
    (map add2 lst)

"I have to add 2 to each element of a list and then multiply each element
by 10."

    (map (o (l-s * 10) (l-s + 2)) lst)

    (define something
      (lambda (num)
        (* 10 (+ 2 num))))
    (map something lst)

    (map #(* 10 (+ 2 %1)) lst)

### Making a concentric palette

Some of you asked that we go over the last question from the lab.

> b. Write a procedure, `(concentric-palette colors)`, that takes a list of
  colors as a parameter and makes an image of concentric squares of sizes
  20, 30, 40, ... (* 10 (length colors)).

We should decompose the problem a bit. I'll try to ask the kinds of questions
one might ask in developing a solution to the problem. YMMV.

Notes on MP redos
-----------------

The submission for the first redo deadline is free. Remaining redos are
one token.

If you didn't turn in the assignment for the original deadline, the redo
is free, but you are charged two tokens for failing to turn in the original.
(This policy holds starting with MP2.)

If you don't turn in a redo for the first redo deadline (or up to two days
late with a token), you will be charged a token for each remaining redo
deadline, even though they may be your "first" redo.

Please make sure that your redo is accompanied by a `CHANGES.txt` file that
summarizes the changes you've made. For example,

* I added an `eye` procedure to part 2 because I had neglected to 
  include a procedure for that part. I use it in making my cat.
* `my-image` was a procedure. It is now an image, as the assignment requested.
* I forgot to build images for part four. I now do so.

Questions
---------

### Administrative questions

What determines how many semicolons you use at the start of a line?

> We use three semicolons to mark the documentation for individual procedures
  or values.

> We use two semicolons for broader comments for the reader.

> We use one semicolon either to "comment out" code that is not yet ready
  to run or to insert comments in the middle of a procedure.

### Reading questions

Why is `and` a keyword and not a procedure? I didn't follow along
well with the given example.

> We have a standard approach to evaluating procedure calls (function
  calls): Evaluate all of the arguments and then apply the function.
  `and` doesn't behave that way. It evaluates its parameters one by
  one, making it similar to a function, but different.

Could you please explain further the difference between apply and
reduce?  How do we know which one to use?

> Apply works with any function and a list that contains exactly as many
  values as the number of parameters it expects. It calls the procedure
  on those values.

> Reduce works with a binary procedure and a list of any length. It repeatedly 
  replaces pairs of neighboring elements by the result of applying the procedure
  until we're down to one element.

> Some functions, like `+` and `string-append` behave the same way when
  used with either `reduce` or `apply`. In part, that's because they can
  take a variable number of parameters. In part, that's because their
  semantics are the same either way.

> Other functions, like `list`, may take an arbitrary number of parameters,
  but do not behave the same way if we do things pair-by-pair.

Can you go over self-check 2b from Monday?

> Sure!

> > b. Using `apply` and `map`, make a picture of seven outlined
    circles in darker versions of the rainbow colors (using two calls
    to `rgb-darker`).  Note that you'll need to convert the color names
    to RGB colors with `color-name->rgb` and then make them darker with
    two calls to `rgb-darker`. 

> > Note: You might need three or four calls to `map` (or a particularly 
    good composition of functions).

Lab
---

Don't forget to reload Scamper to ensure that you are using 4.7.0.

The Scheme file should be called `list-more.scm`.
