---
title: "EBoard 25: Numeric recursion (Section 3)"
number: 25
section: eboards
held: 2026-11-02
link: true
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

### Announcement about Computing Peers United (CPU) Buddies Program

* A mentorship program that pairs less experienced students ("mentees")
  with more experienced students ("mentors").
    * As 151 students, you are considered less experienced. 
* Lots of advice: Conferences, hack-a-thons, courses, internships,
  CS in general, grad school, navigating the major, friendship,
  how to deal with snarky faculty.
* Get connected with the broader CS community.
* Posters are up soon with QR codes and URLs. Fill out sooner rather
  than later.
* November 10 at 8pm kickoff event in HSSC Atrium. More dead trees!
    * They will supply ice and something to break it with.
    * And you will get a bribe to meet again!
* Spam from earlier today, too.

### Introductory Notes

* I had a non-productive weekend, so I'm a bit behind on grading. Stay
  tuned! 
* Thank you to all the folks who asked and answered questions on MP4.
* We had a problem in class on Friday: A student was observed taking
  pictures of a quiz on their phone. Hence, I am imposing stricter guidelines
  on phone usage during quizzes.
    * Your phone must be in your bag during quizzes.
    * Your phone must be turned off (or at least silenced) during quizzes.
    * If we see your phone out during a quiz,
        * I will void all of your LA grades. (You can still make them up
          in subsequent weeks.)
        * Your final grade in the class will be reduced by one letter grade.
        * I will report you for an academic honesty violation.

### Upcoming work

* Due Tuesday, 2026-11-03
    * No reading!
    * Today's lab: [Tail recursion](../labs/tail-recursion) [new version]
        * [Submit today's lab on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8983165)
    * [Mini-project 4](../mps/mp04)
        * [Submit MP4 on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8956645/)
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
    * Yes: 16
    * No: 2
    * Abstain: 1
* Do you want me to go over the token events?
    * Yes: 14
    * No: 2
    * Abstain: 3
* Do you want Q&A time?
    * Yes: 10
    * No: 2
    * Abstain: 6
* Would you prefer that I send out notes about problems from the previous
  lab that people struggled on or talk about them in class or both?
    * Email: 3
    * In-class: 2
    * Both: 11
    * I don't care: 3
* Do you want me to record class?
    * Yes:  12
    * No: 0
    * Abstain: 7
* Do you want to discuss any of the issues above?

Q&A
---

### MP4

Could you explain more about similar colors (problem 2e)?

> Go through the list. For each color, remove any remaining elements that
  are similar to it.

How do we know whether two colors are similar?

> `(rgb-similar? c1 c2)`.

### Administrative

Pop quiz
--------

* What is your favorite kind of (soda) pop?
* Strings: What are three functions you can use to compare two strings?
* Numbers: What does `remainder` do?
* Lists: How would you find the largest number in a list called `numbers`?
* Anonymous functions: Rewrite `(lambda (x) (string-append x "X"))` 
  with `l-s` or `r-s`.

Lab
---

* There are two labs today. You'll start the second one after you finish
  the first (assuming you finish the first).
* You will continue partners on Wednesday.
* First lab: `tail-recursion.scm`.
    * Exercise 1 on today's first lab should be "Tallying strings"
    * Refresh if it's not
    * Rename the previous `tail-recursion.scm` lab to `recursion-patterns.scm`
* Second lab: `numeric-recursion.scm`

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
;;         4                               (list)
```

* When should we stop? When the list is empty? `(null? remaining)`
* What should we return when we are done? `tally-so-far`
* How do we "simplify" `remaining`? Remove the first element with 
  `(cdr remaining)
* What should the recursive call look like?
    * We already know that we take `(cdr remaining)`
    * `(tally-strings/helper ??? (cdr remaining))`
    * What should we do to `tally-so-far`? Add 1 (when the car
      of `remaining` is a string) or 0 (otherwise).
* Note: In tail recursion, there is generally no "post recursive call"
  step.

```
(define tally-strings/helper
  (lambda (tally-so-far remaining)
    (if (null? remaining)
        tally-so-far ; fixed!
        (tally-strings/helper 
          (if (string? (car remaining)) 
              (+ 1 tally-so-far)
              tally-so-far)
          (cdr remaining)))))

(define tally-strings
  (lambda (lst)
    (tally-strings/helper ??? ???)))
```

### Other notes during lab
