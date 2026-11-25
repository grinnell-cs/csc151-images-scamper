---
title: "EBoard 35: Trees (Section 3)"
number: 35
section: eboards
held: 2026-11-25
link: true
---
# {{ page.title }}

_Standard start-of-class procedure_

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrivia
* Q&A
* Pop Quiz
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Rewriting today's lab for Scamper took significantly more time than 
  I'd expected.
    * There may be infelicities.
    * Answers for last week's LAs are still forthcoming.
    * Other things may also be a mess.
* I hope everyone is safe from today's explosion.
* I hope everyone has a good Turkey break.
    * May those of you who are heading off to see family or friends enjoy
      the company of those you care about.
    * May those of you who are staying in Grinnell also enjoy the company of
      others.
    * May all of you enjoy a slight break.

### Upcoming work

* Due Sunday, 2026-11-29
    * Readings
        * [Tree recursion](../tree-recursion)
        * [Binary search trees](../binary-search-trees)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9107442)
    * Lab: [Binary trees](../labs/binary-trees)
        * [Submit lab on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9118214)
        * Submit today (if you're in class)
* Due Thursday, 2026-12-03
    * [Final project](../mps/final-project)
        * [Submit final project on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9080373)
        * No late final projects accepted!
        * Presentation submitted separately.
        * Grading is primarily effort-based.
* Friday, 2026-12-04
    * Last new quiz day!
        * New topic: Tree recursion
        * New topic: Higher-order programming
* Due Sunday, 2026-12-07
    * Project presentation decks
* Due Tuesday, 2026-12-08
    * Mini-Project redos
        * Please include a `CHANGES.txt` file with each redo
        * [Mini-project 2](../mps/mp02) third redo
            * [Submit MP2 third redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9080303)
        * [Mini-project 4](../mps/mp04) second redo
            * [Submit MP4 second redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9080300)
        * [Mini-project 5](../mps/mp05) first redo
            * [Submit MP5 first redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9080295)
* Friday, 2026-12-11
    * Quizzes only available outside of class times.

### Upcoming activities

Scholarly

* Tuesday, 1 December 2026, Noon--1:00 p.m., JRC
  _CS Table: Yash Gupta '20_

Artistic/Cultural

Multicultural

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Monday, 30 November 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 1 December 2026, 12:15--12:45 p.m., GCMoA.
  _Yoga in the Museum_
* Tuesday, 1 December 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_

Misc

* Wednesday, 2 December 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 3 December 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

Q&A
---

### Administrative

### Project

### Trees

### Miscellaneous

Pop Quiz Answers
----------------

Vectors: Why must we add a helper procedure when doing vector recursion?

> In order to do recursion over a vector, we need to keep track of the
  position within the vector. That needs to be a parameter to the procedure.
  Unfortunately, for most vector procedures, the position is not a natural
  parameter, the helper adds the position.

Vectors: What should we get if we call `(cadr (vector 1 2 3))`?

> An error.

Strings: List three procedures that you can use with/on strings.

> `string-length`, `string-ref`, `string-append`, `string-upcase`,
  `substring` ...

Lists: What function do you use to get element `n` of a list?

> `(list-ref lst n)`

Colors: How do you make purple using `rgb`? Your answer should have
the form `(rgb A B C)`. You can choose the shade of purple.

> `(rgb 255 0 255)`

Pop Quiz
--------

1. Trees: What does `bt/t` stand for?

2. Lists: How do you determine if a list contains more than one element
without using `length`?

3. Strings: What function extracts part of a string?

4. Lists: How would you find the largest number in a list called `numbers`
without using explicit recursion?

5. Types: What are four types we've learned (other than strings)?

Lab
---

Note: Use `bt/r`, `bt/l`, and `bt/t`, rather than the unreadable
`bt/trlrll`-style procedures.

Note: Read these "right to left". So `bt/tlr` is "go right, then left,
then take the value at the top."

