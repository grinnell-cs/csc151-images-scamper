---
title: "EBoard 22: Recursion (Section 2)"
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
* You may also grab an optional halloween duck.
* There's no lab today, so I'm going to announce all the token events
  today. I will return to the "Sam talks less" experiment on Wednesday.
* I'm also continuing the "pop quiz" experiment.
* Congratulations to our football team for another two victories!
    * We have one more home game, on November 14.
* You will soon be registering for courses for the spring. I hope you'll
  consider taking CSC-161. Let me know if you have questions.
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
* Please do not wear alcohol-promoting shirts to class, including
  block party and 10/10 shirts.

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
* Thursday, 29 October 2026, 11:00 a.m.--Noon, JRC 101.
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

* Saturday, 31 October 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Men's Soccer vs. Cornell College_ (Last home game this season)

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
* Saturday, 31 October 2026, 1:00--3:00 p.m. Darby Gym.
  _Volleyball vs. Lake Forest_ (sorry, no bathing)
* Saturday, 31 October 2026, 1:30--3:30 p.m., Springer Field.
  _Women's Soccer vs. Cornell College_

Pop quiz
--------

* What is decomposition?
* Lists: What should `(range 5 -3 -1)` return?
* Types: What are four types we've learned?
* Numbers: What are three functions you can use to compare two numbers?
* Lists: List four procedures (other than the big three) that you can use 
  with lists.

Recursion basics
----------------

* One of our primary tools for doing repetition in Scheme.
    * Reminder: Repetition is one of the key building blocks of algorithms.
* Recursion is our general-purpose tool for repetition.
* Recursion is similar to decomposition
    * Decomposition is the idea that you take a complex problem and break
      it down into smaller problems, then you use the solutions to the
      smaller problems to solve the bigger problem.
      This makes solving the problem easier.
    * Recursion is the idea that you take a complex problem and make a
      simpler version *of the same problem*, solve that simpler version,
      and then use the simpler solution to solve the original.
* With recursion, we also need to identify a situation in which the problem
  is so simple, we can solve it directly.

Examples!
---------

Participatory acting!

Assumptions:

* President Moon is lazy and wants to do as little work as possible. She
  likes to delegate.
* Our contract with the UGSDW suggests that the president cannot delegate
  the work that she receives directly, she must make the problem "smaller".
 
Counting! "Please count these cards."

* Take one card, give the rest to your assistant.
* Ask you assistant to count the remaining cards
* Add 1

Eventually, we reach a state that even Sam can answer the question.

* When there are no cards left, return 0

Sum! Please add the numbers on the cards.

* Take one card, give the rest to your assistant
* Ask your assistant to add up all the remaining cards
* When you are at one card, give the number on that card [NO]
* Or ... when you are at zero cards, give 0
* Add what you have to the number you received

Largest

* Take one card, give the rest to your assistant
* Ask your assistant to find the largest in the remainder
* If you have only one card, return the number on the card
* When our assistant gives you a number, return the largest of the card
  you received and the numer on your card

Largest, revised

* What if you want the name of the person with the largest?
* YOu need to return two things: Name and value

Converting our solutions to Scheme
----------------------------------

```
;;; (count lst) -> integer?
;;;   lst : list?
;;; Count how many values appear in `lst`.
(define count
  (lambda (lst)
    (if (null? lst) ; if there are no elements in the list
        0
        (+ 1 (count (cdr lst))))))
        ; remove one element, ask your assistant to count the rest, add 1
```

For lists:

* "Simplify" - Almost always "take the cdr"
* "Is it simple enough that Sam could solve it?" - null? or "has one element"
* You can remember `car` vs `cdr` by remembering that the `d` stands for
  "drop" or "delete".

```
;;; (sum lst) -> number?
;;;   lst : (list-of number?)
;;; Add all the values in `lst`.
(define sum
  (lambda (lst)
    (if (null? lst)
        0
        (+ (car lst) (sum (cdr lst))))))
        ; remove one value; sum the remaining values; add the value you removed
```

```
    (sum (list 4 2 9 1))
--> (+ (car (list 4 2 9 1)) (sum (cdr (list 4 2 9 1))))
--> (+ 4 (sum (cdr (list 4 2 9 1))))
--> (+ 4 (+ (car (list 2 9 1)) (sum (cdr (list 2 9 1)))))
--> (+ 4 (+ 2 (sum (cdr (list 2 9 1)))))
--> (+ 4 (+ 2 (+ (car (list 9 1)) (sum (cdr (list 9 1))))))
--> (+ 4 (+ 2 (+ 9 (sum (cdr (list 9 1))))))
--> (+ 4 (+ 2 (+ 9 (sum (list 1)))))
--> (+ 4 (+ 2 (+ 9 (+ (car (list 1)) (sum (cdr (list 1))))))
--> (+ 4 (+ 2 (+ 9 (+ 1 (sum (cdr (list 1))))))
--> (+ 4 (+ 2 (+ 9 (+ 1 (sum null)))))
--> (+ 4 (+ 2 (+ 9 (+ 1 0))))
--> (+ 4 (+ 2 (+ 9 1)))
--> (+ 4 (+ 2 10))
--> (+ 4 12)
--> 16
```

To get the mean

```
;;; (mean lst) -> number?
;;;   lst : (list-of number?)
;;; Find the additive mean of `lst`.
(define mean
  (lambda (lst)
    (/ (sum lst) (count lst))))
```

Turning largest into Scheme

* How do we determine if there is only one element in the list?
  We could use `(= (length lst) 1)`. 
  Better would be to use `(null? (cdr lst))`.
* How do we find the largest of two numbers?
  We could use `(if (> one two) one two)`.
  We could use `(max one two)`.
* For the extended version: How do we pass back two values?
  We could use a list.
