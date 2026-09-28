---
title: "EBoard 14: Lists, continued (Section 1)"
number: 14
section: eboards
held: 2026-09-30
link: false
---
# {{ page.title }}

_Please follow the standard start-of-class routine._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrative stuff
* Q&A
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Note that Scamper is now at 4.6.0. 

### Monday's lab

Many of you wrote 

```
(define char->digit
  (lambda (char)
    (- (char->integer char) 48)))
```

I'd prefer that you write

```
(define char->digit
  (lambda (char)
    (- (char->integer char) (char->integer #\0))))
```

Can you tell why?

I might even prefer

```
(define char->digit
  (o (r-s - (char->integer #\0)) 
     char->integer))
```

### Attendance

* Practice for Friday's quiz.

### Upcoming activities

Scholarly

* Wednesday, 30 September 2026, 8:00--9:30 p.m., HSSC A2231.
  _Reading as a Way of Life_ 
* Thursday, 1 October 2026, 11:00 a.m.--Noon, JRC 101.
  _Scholars' Convocation: Christian Flemm: Medium Intimacy_ 
* Friday, 2 October 2026, 4:15--4:45 p.m., HSSC A1231 (the Kernel).
  _Cory McCarten '19: What Math and Data Can (and Cannot) Tell us about
   Gerymandering and Voting Rights_ 
* Friday, 2 October 2026, 5:30--7:30 p.m., Weingart Pavilion.
  _Pioneer Weekend Kickoff_ 
* Tuesday, 6 October 2026, Noon--1:00 p.m., JRC 224C (I think).
  _CS Table: ???_ 

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Thursday, 1 October 2026, 4:00--5:30 p.m., HSSC S1325. 
  _Writers@Grinnell presents a conversation with Poet Maggie Millner_ 
* Thursday, 1 October 2026, 4:15--5:30 p.m., GCMOA.
  _Johnnie Chatman: The Artist as Researcher_ 
* Thursday, 1 October 2026, 4:00--5:30 p.m., HSSC A2231. 
  _Writers@Grinnell presents a reading by Poet Maggie Millner_ 
* Friday, 2 October 2026, 7:00 p.m., Wall Theatre.
  _Neverland Players_ 
* Saturday, 3 October 2026, 2:30 p.m., Wall Theatre.
  _Neverland Players_ 
* Saturday, 3 October 2026, 7:00 p.m., Wall Theatre.
  _Neverland Players_ 
* Sunday, 4 October 2026, 2:30 p.m., Wall Theatre.
  _Neverland Players_ 

Multicultural

* Friday, 2 October 2026, 4:10--5:00 p.m., HSSC N1170
  _Middle of Everywhere (Somewhere)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 3 October 2026, 1:00--4:00 p.m., Rosenbloom Field.
  _Football vs. Knox_

Wellness

* Monday, 28 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 28 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 29 September 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Wednesday, 30 September 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_
* Wednesday, 30 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Saturday, 10 October 2026, All Day, Somewhere.
  _Mental Health Training_.
    * Sign up on Handshake.
    * It's all day, so you will earn 3 tokens.

Misc

* Wednesday, 30 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 1 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 1 October 2026, 4:00--5:30 p.m., CS Commons.
  _Matcha and Milk Study Break_ 

### Other good things

_These do not earn tokens, but are worth your consideration._

* Tuesday, 29 September 2026, 4:00--6:00 p.m., Springer Field.
  _Women's Soccer vs. Luther College_ 
* Wednesday, 30 September 2026, 4:00--6:00 p.m., Springer Field.
  _Men's Soccer vs. Luther College_ 
* Saturday, 3 October 2026, 1:00--3:00 p.m., Springer Field.
  _Men's Soccer vs. U. Dubuque_. **New**
* Saturday, 3 October 2026, 3:30--5:30 p.m., Springer Field.
  _Women's Soccer vs. U. Dubuque_. **New**

### Upcoming work

* Due Tuesday, 2026-09-29
    * Today's lab: [List basics](../labs/list-basics)
        * [Submit lab writeup on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8750145)
    * Readings:
        * Reading: [The "big three" list operations](../readings/list-big-tree)
        * Reading: [More list operations](../readings/list-more)
        * [Submit reading responses on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8750018)
    * [Mini-project 2](../mps/mp02)
        * [Submit on gradescope](https://www.gradescope.com/courses/1370413/assignments/8749564/)
* On Friday, 2026-09-02
    * NEW Quiz/LA on collaboration (identify your classmates; just first name)
    * NEW Quiz/LA on lists
    * MAKEUP Quiz/LA on conditionals.
    * MAKEUP Quiz/LA on compose, cut, and section.
    * MAKEUP Quiz/LA on tracing.
    * MAKEUP Quiz/LA on decomposition.
    * MAKEUP Quiz/LA on procedures.
* Due Tuesday, 2026-10-06
    * [Mini-project 1 redo](https://www.gradescope.com/courses/1370413/assignments/8707061)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.

Questions
---------

### Administrative questions

When else can I take a quiz?

> Section 1 takes quizzes on Friday from 7:30--8:30.

> Section 2 takes quizzes on Fridays from 10:30--11:30.

> Section 3 takes quizzes on Fridays from 3:30--4:30.

What do I do if I'm missing a lot of quizzes?

> Try coming at some of the other times. Each quiz should take no more
  than fifteen minutes, so you should be able to try four during a
  typical class plus extra session.

> Get help! Sign up for times with Sam, visit with the evening tutors,
  go to mentor sessions, etc.

### MP2 questions

### Reading questions

_Sam didn't get to these._

Lab
---

Don't forget to reload Scamper.

Remember: If you're asked to load a Racket file, you probably have the
old version of the lab.
