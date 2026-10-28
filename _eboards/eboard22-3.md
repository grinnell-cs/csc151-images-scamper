---
title: "EBoard 22: Recursion (Section 3)"
number: 22
section: eboards
held: 2026-10-26
link: true
---
# {{ page.title }}

_Please follow the standard start-of-class routine. 

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrivia
* Pop quiz
* Recursion basics
* Examples!
* Converting to Scheme

Administrative stuff
--------------------

### Introductory Notes

* Don't forget to grab a quiz sheet.
* You may also grab an optional halloween ducks.
* There's no lab today, so I'm going to announce all the token events
  today. I will return to the "Sam talks less" experiment on Wednesday.
* I'm also continuing the "pop quiz" experiment.
* Congratulations to our football team for another two victories!
    * We have one more home game, on November 14.
* You will soon be registering for courses for the spring. I hope you'll
  consider taking CSC-161.
* I sent out answers to most of the October 16 quizzes over the weekend.
  Let me know if you didn't receive them.
* One of you wrote the following on your MP1 redo.
  "ChatGPT helped revise the code and documentation using the assignment 
   instructions and grader feedback."
     * **You may not use AI-based programming tools in this course!**
     * If you did, make an appointment to chat with me.
* "I'm not going to make our 8am class. Can I show up at 9:30 or 2:40?"
     * I'd prefer that you were not awake at 2am. You need sleep!
     * I'd prefer that you made it to the section you are registered for,
       but I understand needing sleep.
     * It's better to make it to one section than none.
* Don't forget to use the cards to figure out where you sit each day.

### Upcoming work

* Due Tuesday, 2026-10-27
    * Readings
       * Read [Recursion basics](../readings/recursion-basics)
       * Read [Recursion magic](../readings/recursion-magic)
       * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8939707)
    * [Mini-project 2](../mps/mp02) redo
       * [Submit redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8868136)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
       * If you don't submit the `CHANGES.txt` file, they won't grade it.
* Due Thursday, 2026-10-29
    * Readings (forthcoming)
    * Lab writeup (forthcoming)
    * [Mini-project 1](../mps/mp01) second redo
       * [Submit redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8882970/)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
* On Friday, 2026-10-30
    * NEW Quiz/LA on list recursion (today, Wednesday, and Friday)
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

* Tuesday, 27 October 2026, Noon--1:00 p.m., JRC 224C.
  _CS Table_
* Tuesday, 27 October 2026, 6:00--8:00 p.m., JRC 101.
  _Hold the Line: Defending Free, Fair, and Safe Elections_
* Thursday, 29 October 2025, 11:00 a.m.--Noon, JRC 101.
  _Scholars’ Convocation: Dan Reynolds on
   Are We There Yet? The Humanities as a Journey_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Thursday, 29 October 2026, Noon--1:00 p.m. Bucksbaum 263 - Fitzgibbons Music Seminar.
  _Total Immolation: Gamelan Towards the Collapse of the Sun_.
* Thursday, 29 October 2026, 4:00--5:30 p.m., Wall Theatre.
  _Acting Through Musical Song Workshop with Rachel Kelsey_
* Saturday, 31 October 2026, 7:30--10:30 p.m., Harris Cinema.
  _RHPS_
* Saturday, 31 October 2026, 8:00--9:00 p.m., Gardner.
  _James Ivy and Band_
* Saturday, 31 October 2026, 8:00--9:30 p.m., Herrick.
  _Halloween "Spooktacular" Organ Concert_ (I'm not sure which
  organs they are playing; perhaps hearts and lungs.)

Multicultural

* Tuesday, 27 October 2026, 11:30 a.m.--1:00 p.m. The Kernel (HSSC A1231).
  _Filipino Heritage Month Panel_
* Friday, 30 October 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Chinese Ghosts)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Monday, 26 October 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 27 October 2026, 12:15--12:45 p.m., GCMoA.
  _Yoga in the Museum_
* Tuesday, 27 October 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Tuesday, 27 October 2026, 5:00--8:00 p.m., HSSC North Auditorium.
  _Therapy Dogs_
* Wednesday, 28 October 2026, 4:15--5:45 p.m., It's a secret.
  _Forest Bathing_

Misc

* Fill out the College AI survey at <https://bit.ly/ACM-AI-Survey>.
  There's no need to submit evidence; just a reflection. 
    * **It would be nice if more of you did this!**
* Wednesday, 28 October 2026, 4:30--6:30 p.m., Burling.
  _Open Education Trick or Treat_
* Wednesday, 28 October 2026, 4:30--6:30 p.m., Harris Concert Hall.
  _Grinnell Gathers: Volunteer Fair_
* Wednesday, 28 October 2026, 5:00--7:00 p.m., JRC 209.
  _QuestBridge Slime Event_
* Wednesday, 28 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 29 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Friday, 30 October 2026, 7:00--9:00 p.m. Darby Gym.
  _Volleyball vs. Beloit_
* Saturday, 31 October 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Men's Soccer vs. Cornell College_
* Saturday, 31 October 2026, 1:00--3:00 p.m. Darby Gym.
  _Volleyball vs. Lake Forest_ (sorry, no bathing)
* Saturday, 31 October 2026, 1:30--3:30 p.m., Springer Field.
  _Women's Soccer vs. Cornell College_

Pop quiz
--------

* What is decomposition?
* Drawings: List three functions to make shapes.
* Numbers: What do you expect to get from `(+)` and why?
* Anonymous functions: Rewrite `(lambda (x) (string-append x "X"))` 
  with `l-s` or `r-s`.
* Anonymous functions: Rewrite `(l-s - 2)` with `lambda`.

Recursion basics
----------------

* Recursion is one of the primary mechanisms for doing repetition in Scheme.
* Recursion bears some resemblance to decomposition
    * Decomposition: Break a complicated problem into smaller parts that
      are simpler to solve, solve them, and then combine results.
    * Recursion: Make a complicated input "a little bit smaller", solve
      the same problem with the same algorithm, and then use the smaller
      solution to build the bigger solution.
* With recursion, we must identify a problem (input) that is so small
  that we can solve it directly.

Examples!
---------

"Act out algorithms"

Assumptions:

* President likes to do as little work as possible, will pass on to
  their assistant.
* UGSDW contract indicates that no one may pass on a task without
  simplifying the task.

Problem 1: Counting: "How many cards are in this list of cards?"

* Take away one card
* Give the remainder to your assistant ask them to count the cards
* Add 1 to what your assistant said
* Note: If you have zero cards, you can't take one away, so you just say "zero"

Sum: Add up the numbers on the list of cards

* If you have zero cards, just say "zero"
* Take away one card
* Give the remainder to your assistant
* Ask your assistant to sum the list of cards you gave them
* Add the card you took away

Largest: Find the largest value in a list of numbers

* If you only one card, say the value on that card.
* Otherwise
    * Take away one card
    * Give the remainder to your assistant
    * Ask your assistant to find the largest in the list they get
    * Choose the larger of your card and the number your assistant gave
      you.

Converting our solutions to Scheme
----------------------------------

```
;;; (count lst) -> integer?
;;;   lst : list?
;;; Count how many values appear in `lst`.
(define count
  (lambda (lst)
    (if (null? lst)
        0
        (+ 1 (count (cdr lst)))))) 
        ; remove one element; count the rest; add 1
```

```
;;; (sum lst) -> number?
;;;   lst : (list-of number?)
;;; Sum all the elements in `lst`
(define sum
  (lambda (lst)
    (if (null? lst)
        0
        (+ (car lst) (sum (cdr lst))))))
        ; remove one element; sum the rest; add the element we removed
```

```
    (sum (list 9 3 4 7))
--> (+ (car (list 9 3 4 7)) (sum (cdr (list 9 3 4 7))))
--> (+ 9 (sum (cdr (list 9 3 4 7))))
--> (+ 9 (sum (list 3 4 7)))
--> (+ 9 (+ (car (list 3 4 7)) (sum (cdr (list 3 4 7)))))
--> (+ 9 (+ 3 (sum (cdr (list 3 4 7)))))
--> (+ 9 (+ 3 (sum (list 4 7))))
--> (+ 9 (+ 3 (+ (car (list 4 7)) (sum (cdr (list 4 7))))))
--> (+ 9 (+ 3 (+ 4 (sum (cdr (list 4 7))))))
--> (+ 9 (+ 3 (+ 4 (sum (list 7)))))
--> (+ 9 (+ 3 (+ 4 (+ (car (list 7)) (sum (cdr (list 7)))))))
--> (+ 9 (+ 3 (+ 4 (+ 7 (sum null)))))
--> (+ 9 (+ 3 (+ 4 (+ 7 0))))
--> (+ 9 (+ 3 (+ 4 7)))
--> (+ 9 (+ 3 11))
--> (+ 9 14)
--> 23
```

When writing recursive procedures for lists

* Use `cdr` to remove an element
* Use null? to check for an empty list? (You may also have some cases
  in which we check for singleton lists or ...)
* Remember to use the same procedure with simpler lists

Turning largest into Scheme

* How do we decide if a number is larger than another? `max`
* How do we decide if a list has only one number? `(= 0 (length lst))`
  `(null? (cdr lst))`
* For the advanced version: How do we return two values?
