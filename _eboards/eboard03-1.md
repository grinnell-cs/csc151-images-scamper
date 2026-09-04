---
title: "EBoard 03: Writing Functions (Section 1)"
number: 3
section: eboards
held: 2026-09-02
link: true
---
# {{ page.title }}

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_The start-of-class algorithm_

* Grab: Whiteboard, pen, eraser
* Do the blue card algorithm.

_The blue card algorithm_

* Grab one of the small cards by the jar.
    * Determine which computer you'll be at and where it is.
    * Put the card in the jar.
    * Navigate to the computer.
* If you're the first to arrive, log in.
* When both of you arrive, say hello and chat.

_Approximate overview_

* Administration
* Q&A from readings
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Don't forget that reading responses are due the night before class!
* A reminder: If you have questions that might be of general interest,
  please ask them on the Teams Q&A channel. 
    * _Sam demos.
* As many of you discovered, Scamper has a different password than your
  other Grinnell accounts. Please use the one I sent you via email. If
  you'd like to change your password, let me know and I can do so.
* As long as we're discussing passwords: I strongly suggest that you
  register on <https://passwordreset.grinnell.edu>.
    * _Sam demos_
* We've added mentor sessions at 8pm on Wednesday and Thursday nights.
  Check in this room for where they are.
* We're short a bunch of international students today. We wish them
  luck on their travels to Des Moines. They should collaborate (in pairs
  or triplets) on the lab, preferably in this room from 7--10 p.m. tonight.

### Upcoming activities

Scholarly

* Thursday, 3 September 2026, 11:00 a.m.--noon, JRC 101.
  _Scholars' Convocation: Anne Harris_
    * Insert Sam's Convo schpiel

Artistic/Cultural

Multicultural

* Friday, 4 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 5 September 2026, 1:00 p.m.--4:00 p.m., Rosenbloom Field
  _Men's American Football vs. Mount Mercy_

Wellness

* Wednesday, 2 September 2026, 11:00 a.m.--1:00 p.m. JRC Lobby, Table 3.
  _Free Mom Hugs_
* Wednesday, 2 September 2026, 4:00--5:00 p.m., Burling 1st.
  _Speed Friending_
* Monday, 7 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 8 September 2026, 4:30--6:00 p.m., Bear P103.
 _Wellness Yoga_

Misc

* Wednesday, 2 September 2026, 8:00 p.m.--9:00 p.m., Noyce 3rd.
  _Mentor Session_
* Thursday, 3 September 2026, 8:00 p.m.--9:00 p.m., Noyce 3rd.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Friday, 4 September 2026, 7:00--9:00 p.m., Darby.
  _Volleyball vs St. Benedict_ (UPDATED)
* Saturday, 5 September 2026, 11:00 a.m.--1:00 p.m., Darby.
  _Volleyball vs. St. Catherine_
* Saturday, 5 September 2026, 1:00--3:00 p.m., Springer Field.
  _Men's Unamerican Football vs. Hamline_
* Saturday, 5 September 2026, 3:00--5:00 p.m., Darby.
  _Volleyball vs. Simpson College_
* Sunday, 6 September 2026, 11:00 a.m.--1:00 p.m., Spring Field.
  _Women's Unamerican Football vs. St. Mary's_

## Upcoming work

* Due Thursday, 2026-09-03:
    * [Today's lab writeup](../labs/procedures.html)
    * Read [Design and Color](../readings/design-and-color.html)
    * Read [RGB Colors](../readings/rgb-colors.html)
    * Submit [reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8547909).
* On Friday, 2026-09-04:
    * Quiz/LA on decomposition.
    * Quiz/LA on procedures.

## About the quizzes/LAs

* Short questions on the topics.
    * Decomposition: "Here's a compound image; rewrite it to describe 
      component parts and avoid repetition."
    * Functions: "Here's some code we might want to parameterized. Do so."
* You can (should) bring a "cheat sheet": Handwritten notes for the quiz.
* Code need not be perfect, but should be close.
* Running from 8:00--8:30 a.m. on Friday.
* If you are permitted (or just want) extra time, I'll be here at 7:30 a.m.
    * You can also take one during our normal time and take the other
      at 11:00 a.m. or 4:00 p.m.
* Treat the first quiz as a learning experience; it will give you a sense
  as to what quizzes are like. Since we use mastery grading, there's no
  real penalty if you have difficulty.

## Administrative Q&A

When I use the `#lang racket` and `(require csc151)`, I get weird 
error messages.

> I'm sorry. Those were the commands from DrRacket. Now we just use
  `(import image)`.

Why didn't I get anything when I typed the following in the definitions
pane and clicked "Run"? (Note that I also didn't get anything when I
typed it in the REPL.)

```
(import image)
(define circles
  (above (beside (outlined-circle 100 "red")
                 (solid-circle 150 "blue"))
         (beside (outlined-circle 150 "blue")
                 (solid-circle 100 "red"))))
```

> A `define` statement associates a value with an identifer, but doesn't show
  it. To show the value, you have to type the identifier. E.g.,

> `circles`

> `(beside circles circles)`

Is there a way to get the code to indent nicely?

> Yes. Hit Ctrl-I. We'll use the code below as an example.

> ```
(import image)
(define squares
(above (beside (outlined-square 100 "red" 10)
(solid-square 150 "blue"))
(beside (outlined-square 150 "blue")
(solid-square 100 "red" 10))))
```

If we want to keep something in the interactions pane, can we save it?

> Unfortunately, no. You'll need to copy it to the definitions pane
  (or retype it there).

How many questions are on the quizzes?

> Usually one per quiz.

If we don't finish the lab, should we turn in what we have at the end
of class or wait until we finish?

> Turn in what you have at the end of class.

Can I redefine something that's in the definitions pane?

> I don't know. Let's see.

> You can't define it twice in the definitions pane, but you can redefine
  it in the interactions pane.

Q&A from Readings
-----------------

What is the instructions for making a simple smiley face? 

> You'll get to try in lab.

How should I have written the procedures?

> The standard form of a procedure is something like

> ```
(define NAME
  (lambda (INPUTS)
    EXPRESSION))
```

> For `sub2`, the `NAME` is `sup2`, the `INPUTS` are just `val` (or whatever
  you want to call the input), and the expression to subtract 2 is
  `(- val 2).

> Putting it all together, we get

> ```
(define sub2
  (lambda (val)
    (- val 2)))
```

> For the secondone, the `NAME` is `block`, the `INPUTS` are just `color`,
  and the expression to build the rectangle is `(solid-rectangle 40 20 color)`.

> Putting it all together, we get

> ```
(define block
  (lambda (color)
    (solid-rectangle 40 20 color)))
```

Does the name matter?

> Just for clarity.

What can we use as an identifier (name)?

> Letters, numbers, underscores, dashes, many other symbols, some unicode
  characters ...

Where do we use parentheses?

> Whenever we want to use a function. We write an open paren, the name
  of the function, the arguments, and a close paren.
  `(solid-square 10 20 "blue")`

> We also follow parenthesization rules for writing definitions and
  lambdas. `(lambda (PARAMS) BODY)`


Lab
---

If you finish early, do some of the extra problems.

It's also okay if you don't finish!

At the end, follow the "end of lab" algorithm.

* Save the file to disk.
* Upload it to Gradescope
* Wait for the autograder. (Today's just says it ran; future ones will
  say more.)
* Email it to your partner.
