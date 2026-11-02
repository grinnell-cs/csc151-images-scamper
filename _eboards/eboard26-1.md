---
title: "EBoard 26: Numeric recursion, continued (Section 1)"
number: 26
section: eboards
held: 2026-11-04
link: false
---
# {{ page.title }}

_Please follow the standard start-of-class routine._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrivia
* Q&A
* Pop quiz
* Lab

Administrative stuff
--------------------

### Introductory Notes

* I have been asked to remind you that Friday is the deadline for (a)
  class withdrawals and (b) converting to/from S/D/F grading (Grinnell's
  version of Pass/Fail).
* Don't forget to consider CSC-161 next semester.
* If you want to subject yourself to more Sam teaching, I'm also running
  a guided reading on board game design Tuesday/Thursday 8:00--10:00 a.m.

### Upcoming work

* Due Thursday, 2026-11-05
    * Wednesday's lab: [Numeric recursion](../labs/numeric-recursion)
        * Starts today! (Perhaps)
        * [Submit numeric recursion lab on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8983167)
    * Reading: [Pairs and pair structures](../readings/pairs)
        * _This reading is not yet updated for Scamper._
        * [Submit reading on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8983358)
    * [Mini-project 1](../mps/mp01) second redo
        * [Submit redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8882970/)
        * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
* On Friday, 2026-11-06
    * NEW Quiz/LA on numeric recursion (today and Wednesday)
    * NEW Quiz/LA on tail recursion 
    * Makeup Quiz/LA on list recursion 
    * Makeup Quiz/LA on testing
    * Makeup Quiz/LA on local bindings
    * Makeup Quiz/LA on collaboration 
    * Makeup Quiz/LA on lists and list operations
    * Makeup Quiz/LA on conditionals
    * Makeup Quiz/LA on compose, cut, and section
    * Makeup Quiz/LA on tracing
    * Makeup Quiz/LA on decomposition
    * Makeup Quiz/LA on procedures

### Upcoming activities

Scholarly

* Tuesday, 3 October 2026, Noon--1:00 p.m., CS Commons (I think).
  _CS Table_
* Thursday, 5 October 2026, 11:00 a.m.--Noon, JRC 101.
  _Scholars’ Convocation: More Humanities_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.

Multicultural

* Friday, 6 November 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere ()_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Monday, 2 November 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 3 November 2026, 12:15--12:45 p.m., GCMoA.
  _Yoga in the Museum_
* Tuesday, 3 November 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Tuesday, 10 November 2026, 5:00--8:00 p.m., HSSC North Auditorium.
  _Therapy Dogs_

Misc

* Wednesday, 4 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 5 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

### Check in on the "Sam talks less" experiment

* Do you want me to go over the upcoming work?
    * Yes: 7
    * No: 8
    * Abstain: 1
* Do you want me to go over the token events?
    * Yes: 6
    * No: 7
    * Abstain: 5
* Do you want Q&A time?
    * Yes: 13
    * No: 1
    * Abstain: 5
* Do you want me to go over problems from the previous lab that people 
  struggled on?
    * Yes: 16
    * No: 1
    * Abstain: 3
* Would you prefer that I send out notes about problems from the previous
  lab that people struggled on or talk about them in class or both?
    * Email: 6
    * In-class: 3
    * Both: 8
    * I don't care: 2
* Do you want me to record class?
    * Yes: 8
    * No: 0
    * Abstain: 12
* Do you want to discuss any of the issues above?

Q&A
---

### MP4

Could you explain more about similar colors?

> Bad decision on Sam's part?

> Bad writing on Sam's part?

> Go through the list. For each color, remove any remaining elements that
  are similar to it.

### Administrative

Pop quiz
--------

* What is your favorite kind of (soda) pop?
* Strings: What are the two forms of `substring` and what do they do?
* Colors: How do you extract the blue component from an RGB color?
* Anonymous functions: Rewrite `(l-s - 3)` with `lambda`.
* Drawings: List three functions that make shapes.

Lab
---

* There are two labs today. You'll start the second one after you finish
  the first (assuming you finish the first).
* You will continue partners on Wednesday.
* First lab: `tail-recursion.scm`.
    * Exercise 1 on today's first lab should be "Tallying strings"
    * Refresh if it's not
    * Rename the previous `tail-recursion.scm` lab to `recursion-patterns.scm`

### Exercise 1: Tallying strings

;;         tally-so-far                    remaining
;;         ------------                    ---------
;;         0                               (list 5 "a" "b" 1 "c" 2 3 "b" 4)
;;         0                               (list "a" "b" 1 "c" 2 3 "b" 4)
;;         1                               (list "b" 1 "c" 2 3 "b" 4)
;;         2                               (list 1 "c" 2 3 "b" 4)
;;         2                               (list "c" 2 3 "b" 4)
;;         3                               (list 2 3 "b" 4)
;;         3                               (list 3 "b" 4)
;;         3                               (list "b" 4)
;;         4                               (list 4)
;;         4                               null
```

* When should we stop? When we have a null list.
* What should we return when we are done? `tally-so-far`
* How do we "simplify" `remaining`? `(cdr remaining)`
* What should the recursive call look like?
    * What should we do to `tally-so-far`? If the car of remaining
      is a string, add 1 to `tally-so-far`. If not, add 0.
    * We already know that we take `(cdr remaining)`
    * `(tally-strings/helper ??? (cdr remaining))`

```
(define tally-strings/helper
  (lambda (tally-so-far remaining)
    (if (null? remaining)
        tally-so-far
        (tally-strings/helper 
          (+ (if (string? (car remaining)) 1 0) tally-so-far)
          (cdr remaining)))))

    0))

(define tally-strings
  (lambda (lst)
    (tally-strings/helper 0 lst)))
```

* Second lab: `numeric-recursion.scm`

### Notes during lab
