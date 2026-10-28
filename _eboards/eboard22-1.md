---
title: "EBoard 22: Recursion (Section 1)"
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

* There's no lab today, so I'm going to announce all the token events
  today. I will return to the "Sam talks less" experiment.
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
       * Read [Recursion magic](./readings/recursion-magic)
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
  _Middle of Everywhere (Somewhere)_

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

* What is decomposition?
* Numbers: What does `remainder` do?
* Drawings: List three functions to make shapes.
* Strings: How do we convert all the characters in a string to uppercase?
* Drawings: What function puts one drawing vertically over another?

```
  +-----+
  | One |
  +-----+
+---------+
|   Two   |
+---------+
```

Recursion basics
----------------

* Recursion is one of the core mechanisms for achieving repetition.
* Has some similarity to decomposition.
     * Decomposition: Break a complex problem down into smaller problems
       and combine the solutions to the smaller problems into the solution
       to the big problem.
     * Recursion: Solve a complex problem by solving a simpler version
       of **the same problem** and then using that solution to solve
       our more complex.
* At some point, we have a problem so simple that we can solve it directly.

Examples!
---------

Yay! Role playing.

Assumptions:

* The president wants to do as little work as possible.
* However, our contract with the UGSDW suggests that the no person at
  Grinnell can delegate the same task they received, they must make it
  "simpler"

Problem one: Count the cards

* Remove one, pass the rest to your assistant
* Ask your assistant to count the rest
* Add 1 to that result

In solving problems this way, we have to think about a few things

* "How do we simplify the problem?" For lists, it's almost always
  "Take the cdr"
* When is the problem simple enough that we can solve it without additional
  help? For lists, "If the list is empty ..."; "If the list has one
  element ..."
* What do we do with the solution to the simpler problem. Varies
  significantly.

Problem two: Sum the cards

* Make the problem simpler: Take one out
* Ask the assistant to sum the dollar amounts
* Add the assistant's answer to your number, return the result
* Note: When there's only one card, you can just read the number on the card.
* Note: If you get no cards, you could return zero. [Sam likes this, 
  when possible]

Problem three: Find the largest card

* Make the problem simpler: Take away one card
* Ask your problem to find the largest card in the rest
* This time, we stop with one card left, rather than zero
* In that case the largest card is that one card.
* When you hear the result, you take the larger of your card and the
  other person's card.

How would you change this to find the name on the largest card.

* You need to pass back the value and the name.

Scheme thoughts

* How do we find the larger of two cards? `max`
* How do we decide if there's only one card?
* How do we pass back two values? 

Converting our solutions to Scheme
----------------------------------

```
;;; (count lst) -> integer?
;;;   lst : list?
;;; Counts how many elements are in the list.
(define count
  (lambda (lst)
    (if (null? lst)
        0
        (+ 1 (count (cdr lst)))))) ; remove 1, count the rest, add 1 to the result
```

```
;;; (sum lst) -> real?
;;;   lst : (list-of real?)
;;; Add up all the elements in the list.
(define sum
  (lambda (lst)
    (if (null? lst)
        0
        (+ (car lst) (sum (cdr lst))))))
        ; remove an element, sum the rest; add the one we removed
```

```
    (sum (list 5 1 2 6))
--> (+ (car (list 5 1 2 6)) (sum (cdr (list 5 1 2 6))))
--> (+ 5 (sum (cdr (list 5 1 2 6))))
--> (+ 5 (sum (list 1 2 6)))
--> (+ 5 (+ (car (list 1 2 6)) (sum (cdr (list 1 2 6)))))
--> (+ 5 (+ 1 (sum (cdr (list 1 2 6)))))
--> (+ 5 (+ 1 (sum (list 2 6))))
--> (+ 5 (+ 1 (+ (car (list 2 6)) (sum (cdr (list 2 6))))))
--> (+ 5 (+ 1 (+ 2 (sum (cdr (list 2 6))))))
--> (+ 5 (+ 1 (+ 2 (sum (list 6)))))
--> (+ 5 (+ 1 (+ 2 (+ (car (list 6)) (sum (cdr (list 6)))))))
--> (+ 5 (+ 1 (+ 2 (+ 6 (sum (cdr (list 6)))))))
--> (+ 5 (+ 1 (+ 2 (+ 6 (sum null)))))
--> (+ 5 (+ 1 (+ 2 (+ 6 0))))
--> (+ 5 (+ 1 8))
--> (+ 5 9)
--> 14
```


