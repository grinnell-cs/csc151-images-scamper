---
title: "EBoard 30: Vectors, continued (Section 1)"
number: 30
section: eboards
held: 2026-11-13
link: false
---
# {{ page.title }}

_New places, new partners, grab whiteboards._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrivia
* Pop quiz!
* Discuss Wednesday's lab
* Q&A
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Be careful! Friday the 13th falls on a Friday this month!
* Reminder: You can use the evening tutors to help you go through any
  of the labs, LAs, or MPs you are having difficulty with.

### Upcoming work

* Due Thursday, 2026-11-12
    * Today's lab: [Hash tables](../labs/hash-tables)
        * [Submit lab on Gradescope](X)
    * Reading for Friday:  [Dictionaries and hash-tables](../readings/hash-tables)
        * [Submit reading on Gradescope](X)
* On Friday, 2026-11-13
    * NEW Quiz/LA on Pairs (Friday and today)
    * NEW Quiz/LA on Vectors (today)
    * Makeup Quiz/LA on numeric recursion 
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
* Due Tuesday, 2026-11-17
    * [Mini-project 5](../mps/mp05)
        * Not yet tested in Scamper!
        * Not yet posted to Gradescope

### Upcoming activities

Scholarly

* Thursday, 12 October 2026, 11:00 a.m.--Noon, JRC 101.
  _Scholars’ Convocation: Caleb Elfenbein:
   How I Went From Professional to Amateur and Learned to Love the Humanities_
* Thursday, 12 October 2026, 4:15--5:15 p.m., Noyce 2021 (?).
  _Thursday Extras_
* Tuesday, 12 October 2026, Noon--1:00 p.m., CS Commons (I think).
  _CS Table_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Thursday, 12 November 2026, 7:30--9:30, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Friday, 13 November 2026, 7:30--9:30, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Saturday, 14 November 2026, 2:00--4:00, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Sunday, 15 November 2026, 4:00--5:30 p.m., Sebring-Lewis.
  _Family Folk Machine: Rising Like a Flame_

Multicultural

* Friday, 13 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Japan)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 14 November 2026, 1:00--4:00 p.m., Rosenbloom Field.
  _Football vs. Luther College_
* Saturday, 14 November 2026, 2:00--3:30 p.m., Sebring-Lewis.
  _Grinnell Symphony Orchestra_

Wellness

* Fill out the wellness survey that you received last week.
* Monday, 9 November 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 10 November 2026, 12:15--12:45 p.m., GCMoA.
  _Yoga in the Museum_
* Tuesday, 10 November 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Tuesday, 10 November 2026, 5:00--8:00 p.m., HSSC North Auditorium.
  _Therapy Dogs_
* Tuesday, 10 November 2026, 8:00--10:30 p.m., Harris Cinema.
  _The Muppet Movie_

Misc

* Tuesday, 10 November 2026, 7:00--9:00 p.m., Darby.
  _Volleyball vs. Lake Forest, Revisited_ (Quarterfinals)
* Wednesday, 11 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 12 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Wednesday, 11 November 2026, 6:00--8:00 p.m., Darby.
  _Men's Basketball vs. Principia_

### Pop quizzes

Note

* No pop quiz today to give time for this discussion.

Context

* Intended as an incentive to memorize vocabulary
* Also intended to give me a check on how folks are doing
* I'm struggling to get them graded in a timely fashion

Commentary?

Survey (Sam's eyes closed, students' eyes closed). Should I resume the pop 
quizzes?

* Yes: 13
* No: 1
* Abstain / no strong opinion: 3

### Email greetings

Should I continue with the special greetings in my class emails?

* Yes: 14
* No: 0
* You use special greetings?: 4
* Abstain / no strong opinion: 1

Q&A
---

### Administrative

### MP4

### Vectors

Can we go over check 3?

> Sure! See below.

### Hashes

Check #3 from the reading
-------------------------

### A concern

```
(define number-vector-largest
  (lambda (vec)
    (let ([len (vector-length vec)])
      (let kernel ([pos (- len 1)]
                   [largest-so-far (vector-ref vec 0)])
        (if (zero? pos)
            largest-so-far
            (kernel (- pos 1)
                    (max largest-so-far (vector-ref vec (- pos 1)))))))))
```

Wednesday's lab
---------------

Today's lab
-----------
