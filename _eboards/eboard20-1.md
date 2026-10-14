---
title: "EBoard 20: Local bindings (Section 1)"
number: 20
section: eboards
held: 2026-10-13
link: true
---
# {{ page.title }}

_Please follow the standard start-of-class routine. **Make sure to grab a sheet of paper from the back.**_

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrative stuff
* Pop quiz
* Lab

Administrative stuff
--------------------

### Introductory Notes

* I'm continuing the "limited talk" experiment.
* Some folks have asked whether I'll have office hours during break.
  I hadn't intended to, but I was planning to be on campus for some
  of break anyway, so I'll be happy to meet during office hours (and,
  perhaps, other times).
* Quick notes on Friday's new quizzes:
    * Testing: I'll give you the description of a function and ask
      you to write ~3 "normal" tests and ~3 "edge" tests.
    * Local bindings: I'll give you a function with repeated code
      and ask you to rewrite it with local bindings to get less/no
      repetition.
* Sorry about the confusion on the MP2 redo and the MP3 posting.
  I was experimenting with autograders (and failing). They'll be up
  and ready by the end of class.
* To encourage folks to memorize procedures (which you should be doing), 
  I'm going to give a "pop quiz" on each Monday and Wednesday. You'll get
  five questions (e.g., "What are three procedures that make lists?") and
  five minutes to answer the questions. Every ten correct answers earn
  you an extra token.
    * If you didn't grab a sheet from the back of the room, raise your
      hand and the mentor will bring you one.

### Upcoming work

* Due Thursday, 2026-10-15
    * Readings:
        * [List composition and decomposition](../readings/list-composition)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8789469)
    * [Mini-project 3](../mps/mp03)
        * [Submit on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8868131)
* On Friday, 2026-09-16
    * NEW Quiz/LA on testing (Monday's topic)
    * NEW Quiz/LA on local bindings (todays's topic)
    * Makeup Quiz/LA on collaboration 
    * Makeup Quiz/LA on lists and list operations
    * Makeup Quiz/LA on conditionals
    * Makeup Quiz/LA on compose, cut, and section
    * Makeup Quiz/LA on tracing
    * Makeup Quiz/LA on decomposition
    * Makeup Quiz/LA on procedures
* Due Sunday, 2026-10-25
    * _Nothing!_
* Due Tuesday, 2026-10-27
    * [Mini-project 2](../mps/mp02) redo
       * [Submit redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8868136)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
       * If you don't submit the `CHANGES.txt` file, they won't grade it.

### Upcoming activities

Scholarly

* Thursday, 15 October 2026, 11:00 a.m.--noon, JRC 101.
  _Scholars' Convocation: Unknown Topic_
* Tuesday, 27 October 2026, Noon--1:00 p.m., CS Commons.
  _CS Table_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Thursday, 15 October 2026, 4:00--5:00 p.m., HSSC S1325. 
  _Writers@Grinnell presents Maya Binyam_ **New**
* Thursday, 15 October 2026, 8:00--9:00 p.m., JRC 101.
  _Writers@Grinnell presents a reading and Q&A with Maya Binyam_ **New**

Multicultural

* Friday, 30 October 2026, 4:10--5:00 p.m., HSSC N1170
  _Middle of Everywhere (Somewhere)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 24 October 2026, 1:00 p.m.--4:00 p.m., Rosenbloom Field.
  _Football vs. Cornell College_

Wellness

* Wednesday, 14 October 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_ (two tokens) **New**
* Monday, 26 October 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 27 October 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_

Misc

* Fill out the College AI survey at <https://bit.ly/ACM-AI-Survey>.
  There's no need to submit evidence; just a reflection. **New**
* Wednesday, 14 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 15 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Friday, 16 October 2026, 6:00--8:00 p.m., RKO Natatorium.
  _Swimming and Diving vs. Augustana_
* Saturday, 17 October 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Men's Soccer vs. Lawrence University_
* Saturday, 17 October 2026, 1:30--3:30 p.m., Springer Field.
  _Women's Soccer vs. Lawrence University_
* Sunday, 18 October 2026, 2:00--4:00 p.m., Springer Field.
  _Men's Soccer vs. Gustavas Adolphus College_ 

Pop quiz!
---------

Here are today's questions ...

- Anonymous procedures: What does `(o (r-s / 2) (l-s + 2))` do?
- Anonymous procedures: Rewrite `(l-s - 2)` with `lambda`.
- Drawings: What are the parameters to `outlined-rectangle`? (You need not get the order right.)
- Anonymous procedures: Rewrite `(lambda (x) (string-append x "X"))` with `l-s` or `r-s`.
- Strings: What are three procedures that make strings?

Note: Please don't tell your friends in the other sections that we had a
pop quiz today.

Lab
---

Make sure the Scheme file has the semester in it (2026Fa). Reload if 
it doesn't.

If you finish early, please copy the following from the eboard and add it
to your lab.

```
;; +------------------------------------------+-----------------------
;; | Exercise 6: Alternate binding mechanisms |
;; +------------------------------------------+

;; Driver: B

;; As you may have noted, we have other approches than `let` and
;; `define` for assigning names to values. For example, consider the
;; following procedure.

(define rings
  (lambda (size color)
    (above (outlined-circle size color 2)
           (beside (outlined-circle size color 2)
                   (outlined-circle size color 2))
           (beside (outlined-circle size color 2)
                   (outlined-circle size color 2)
                   (outlined-circle size color 2)))))

;; a. Rewrite rings with a `let` to remove redundancy. (Comment out
;; the previous version and put the new version here.)

;; b. Consider the following procedure.

(define rings-new
  (lambda (size color)
    (rings-new/helper (outlined-circle size color 2))))

(define rings-new/helper
  (lambda (shape)
    (above shape
           (beside shape shape)
           (beside shape shape shape))))

;; How does the result of `rings-new` differ from that of `rings`?

;; REPLACE WITH YOUR ANSWER.

;; c. How is `rings-new` similar to your rewritten `rings`?

;; REPLACE WITH YOUR ANSWER.

;; d. How does `rings-new` differ from your rewritten `rings`?

;; REPLACE WITH YOUR ANSWER.

;; e. Why might someone prefer the `let` version?

;; REPLACE WITH YOUR ANSWER.

;; f. Why might someone prefer the `rings-new` version?

;; REPLACE WITH YOUR ANSWER.

```
