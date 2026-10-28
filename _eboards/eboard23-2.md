---
title: "EBoard 23: Recursion (Section 2)"
number: 23
section: eboards
held: 2026-10-28
link: true
---
# {{ page.title }}

_Please follow the standard start-of-class routine. 

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrivia
* Pop quiz
* Lab

Administrative stuff
--------------------

### Introductory Notes

* If you haven't done so already, feel free to grab a halloween duck from 
  the back of the room
* We're back to the "Sam talks less" experiment.
* I'm also continuing the "pop quiz" experiment.
* Today's lab is likely too long, even with "Sam talks less".
* The second redo of MP1 is now due a week from tomorrow. The first redo
  should be returned by Sunday.
* MP4 will be ready tonight. It involves writing lots and lots of recursive
  functions that process lists of colors. (Getting all the details right
  is taking a bit more time than I'd been able to allocate.)

### Upcoming work

* Due Thursday, 2026-10-27
    * Read [Tail recursion](../readings/tail-recursion)
       * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8956364)
    * [Submit lab writeup on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8956670)
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
* Due Tuesday, 2026-11-03
    * [Mini-project 4](../mps/mp04)
        * [Submit MP4 on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8956645/)
* Due Thursday, 2026-11-05
    * [Mini-project 1](../mps/mp01) second redo
       * [Submit redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8882970/)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.

### Upcoming activities

Scholarly

* Thursday, 29 October 2026, 11:00 a.m.--Noon, JRC 101.
  _Scholars’ Convocation: Dan Reynolds on
   Are We There Yet? The Humanities as a Journey_
* Thursday, 29 October 2026, 4:15--5:15 p.m., Noyce 3821.
  _CS Extras: Student presentations_
* Tuesday, 3 October 2026, Noon--1:00 p.m., JRC 224C (I think).
  _CS Table_

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

* Friday, 30 October 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Chinese Ghosts)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 31 October 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Men's Soccer vs. Cornell College_ (last home match of the season)

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

* Fill out the College AI survey at <https://bit.ly/ACM-AI-Survey>.
  There's no need to submit evidence; just a reflection. 
    * Friday deadline.
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
  _Volleyball vs. Lake Forest_ (senior day)
* Saturday, 31 October 2026, 1:30--3:30 p.m., Springer Field.
  _Women's Soccer vs. Cornell College_ (last home match of the season)

Pop quiz
--------

* Strings: What are the parameters to `string-split`?
* Lists: How do you determine if a list is empty?
* Characters: How do we determine the collating sequence of a character?
* Strings: What are three functions that make strings?
* Anonymous functions: Rewrite `(lambda (x) (string-append "X" x))` 
  with `l-s` or `r-s`.

Lab
---

When it says "Document, write tests for, and implement", we'd prefer that
you do things in that order. 

* Documenting helps you make sure you know what the function should do.
* Writing tests helps you think even more carefully about such issues.
* Evidence suggests we are more likely to write correct code if we've
  thought about what the procedure should do before we implement the 
  procedure. (Overall, we're more efficient.)

Note: `my-length` should use `lst` not `1st`.
