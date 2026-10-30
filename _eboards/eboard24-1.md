---
title: "EBoard 24: Tail recursion (Section 1)"
number: 24
section: eboards
held: 2026-10-30
link: true
---
# {{ page.title }}

_Please follow the standard start-of-class routine._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Quiz (7:30)
* Administrivia (8:00)
* Lab (8:10)
* Quiz (8:50)

Administrative stuff
--------------------

### Introductory Notes

* Happy (almost) Halloween! There's candy at the back of the room. 
    * Obligatory Sam Halloween joke.
* We're still on the "Sam talks less" experiment.
    * We'll check in about it on Monday.
    * I won't record today since the "Sam talks less" doesn't seem to
      require recording.
* Today's lab is likely too long, even with "Sam talks less".
* Don't forget that clocks stop for one hour at 2:00 a.m. Sunday 
    * That is, we "fall back" to move from Daylight Savings Time to
      Standard Time.
* Observation: It is good practice to have a list of procedures you've
  written or seen so that when you get a similar problem, you can base
  your solution to the new problem on your solution to the earlier problem.
    * `product` is a lot like `sum`
    * `tally-odd` is a lot like `tally-value`
    * `alphabetically-first` is a lot like `largest`.

### Upcoming work

* Due Sunday, 2026-11-01
    * Lab writeup
    * New reading
* On Friday, 2026-11-06
    * NEW Quiz/LA on tail recursion (today)
    * NEW Quiz/LA on numeric recursion (Monday)
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
* Due Tuesday, 2026-11-03
    * [Mini-project 4](../mps/mp04)
        * [Submit MP4 on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8956645/)
        * Don't forget to send in questions!
* Due Thursday, 2026-11-05
    * [Mini-project 1](../mps/mp01) second redo
       * [Submit redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8882970/)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.

### Upcoming activities

Scholarly

* Tuesday, 3 October 2026, Noon--1:00 p.m., JRC 224C (I think).
  _CS Table_
* Thursday, 5 October 2026, 11:00 a.m.--Noon, JRC 101.
  _Scholars’ Convocation: More Humanities_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.

Multicultural

* Friday, 30 October 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Chinese Ghosts)_

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

* Fill out the College AI survey at <https://bit.ly/ACM-AI-Survey>.
  There's no need to submit evidence; just a reflection. 
    * Friday deadline.
* Friday, 30 October 2026, 11:00 a.m.--1:00 p.m. Noyce.
  _Noyce Trick or Treat Day_. Reflection: Best three faculty costumes.
* Wednesday, 4 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 5 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Friday, 30 October 2026, 7:00--9:00 p.m. Darby Gym.
  _Volleyball vs. Beloit_
* Saturday, 31 October 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Men's Soccer vs. Cornell College_ (last home meet of the season)
* Saturday, 31 October 2026, 1:00--3:00 p.m. Darby Gym.
  _Volleyball vs. Lake Forest_ (senior day)
* Saturday, 31 October 2026, 1:30--3:30 p.m., Springer Field.
  _Women's Soccer vs. Cornell College_ (last home meet of the season)

### Friday PSA

* You are awesome! Please take care of yourselves!
* Decide what is right for you in advance; don't succumb to pressure
  or expectations.
* Moderation!
    * I don't care that it's the last Saturday Halloween for a decade; I
      still expect you to be moderate.
* Consent is essential. Consent is insufficient. Consent is impossible
  when impaired (no matter what NY law says).

Lab
---

Quiz
----
