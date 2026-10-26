---
title: "EBoard 22: Recursion (Section 1)"
number: 22
section: eboards
held: 2026-10-26
link: false
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
  today. 
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
    * NEW Quiz/LA on list recursion (today and Wednesday)
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
--------

Recursion basics
----------------

Examples!
---------

Converting our solutions to Scheme
----------------------------------
