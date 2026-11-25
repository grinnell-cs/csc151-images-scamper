---
title: "EBoard 36: Tree recursion (Section 1)"
number: 36
section: eboards
held: 2026-11-30
link: false
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

* Welcome back! I hope you had a great break!

### Grade computation

```
;;; (letter-grade las mps tokens missing) -> string?
;;;   las : positive-integer?
;;;   mps : positive-integer?
;;;   tokens : integer?
;;;   missing : integer?
;;; Compute a letter grade based on
;;; * the number of LAs successfully completed
;;; * the number of MPs successfully completed (MP3 doesn't count)
;;; * the number of tokens remaining (negative is bad)
;;; * the number of missing reading responses and lab writeups (6 free)
(define letter-grade
  (let ([cgrade 10]
        [dgrade 8]
        [letters (vector "F" "F" "F" "F" "F" "F" "F" "F"
                         "D" "D" "C" "C+" "B-" "B" "B+" "A-" "A" "A+")])
    (lambda (las mps tokens missing)
      (let ([mp-charge (* 3 (min 0 (- mps 5)))]
            [token-charge (min 0 (floor (/ tokens 2)))]
            [missing-charge (min 0 (floor (/ (- 6 missing) 2)))]
            [grade (+ las mp-charge token-charge missing-charge)]
            [final-grade
             (cond 
               [(>= las cgrade)
                (max grade cgrade)]
               [(>= las dgrade)
                (max grade dgrade)]
               [else
                grade])])
        (vector-ref letters final-grade)))))
```

### Quiz policies

* Once you've looked at a quiz during one class period, you may not take
  the quiz in another class period. (I thought this one was self-evident.)
* I will continue to allow you to take quizzes during any of the sections.
* I will continue to allow you to bring cheat sheets.
* Please respect my trust.

### Upcoming work

* Due Tuesday, 2026-12-01
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
        * Grading is effort-based.
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

* Tuesday, 1 Decemmer 2026, Noon--1:00 p.m., JRC
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

### Miscellaneous

Pop Quiz Answers
----------------

Why do we need to add a helper procedure when doing vector recursion?

> We need to recurse over the position in the vector. Most typically,
  the primary procedure does not take the position as a parameter. We
  need a helper to make the position a parameter.

What should we get if we call `(car (vector 1 2 3))`?

> `car` does not work on vectors. `car` only works on lists and pairs.

Lists: List four procedures (other than the big three) that you can 
use with lists.

> `list-ref`, `list-take`, `list-drop`, `car`, `cdr`, `cons`, ...

Lists: What function do you use to get the first `n` elements of a list?

> `list-take`

Testing: What are the parameters to `test-case`? (You need not get them 
the correct order.)

> `(test-case DESCRIPTION EQUALS? EXPECTED THUNK-TO-EXECUTE)`

> A thunk is a zero-parameter procedure.

Pop Quiz
--------

1. Lists: How do you determine if a list contains only one element without
using `length`?

2. Strings: What function groups a bunch of strings together?

3. Lists: How would you find the largest number in a list called `numbers`
without using explicit recursion?

4. Types: What are four types we've learned?

5. What does `bt/l` stand for?

Lab
---

Note: If the link to `output.scm` gives you `trees.scm`, change the URL 
manually.
