---
title: "EBoard 19: Software engineering basics (Section 3)"
number: 19
section: eboards
held: 2026-10-12
link: true
---
# {{ page.title }}

_Please follow the standard start-of-class routine._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrative stuff
* Lab

Administrative stuff
--------------------

### Introductory Notes

* I hope you had a good and healthy weekend.
* If you struggled on tracing, we could try doing a tracing quiz together
  in my office. For many students, that seems to be the thing that gets
  them through.
* It looks like few of you are reviewing the comments on your readings
  and such. Please take a moment or two to check.
* I'm going to try an experiment today. Rather than going through all of
  the administrative stuff, I'm going to trust you to read most of it on 
  your own.  (Use Teams if you have questions.)

### On mid-semester assessments / Getting help

* I entered mid-semester assessments over the weekend. 
    * If you have completed five or more LAs, I entered a mid-semester
      assessment of S ("Solid Performance")
    * If you have only completed four LAs, I entered a mid-semester
      assessment of M ("Marginal Performance").
    * If you have completed three or fewer LAs, I entered a mid-semester
      assessment of R ("Risk of Failure").
* If you received an R, I have also contacted you and entered an
  Academic Alert. If you received an M, I will be contacting you and
  entering an academic alert. In both cases, please plan to meet with 
  me this week or immediately after break.
* I will be unavailable most of Thursday. Tuesday is my primary day 
  for regular office hours, but I found some times between classes
  on Monday, Wednesday, and Friday.  Email me to claim them:
  Tuesday 8:00-10:45, Wednesday 2:00-2:30, and Thursday 9:00-11:00

If you feel like you are struggling, even if you have an M or S, you
might consider the following questions.

* Are you taking advantage of the mentor sessions and, if so, are those 
  helpful?
* Would it help to meet with me regularly to talk about topics?
* Would it be helpful to go over quizzes and labs with the evening tutors?
* Would it be helpful to meet with someone in Academic Success to consider 
  study skills?
* Would it be helpful to set up a study group for the class where you and 
  other students can meet to discuss questions?
* What else might help?

### Upcoming work

* Due Tuesday, 2026-10-13
    * Readings:
        * [Local bindings](../readings/local-bindings)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8850337/submissions)
* Due Thursday, 2026-10-15
    * Readings:
        * [List composition and decomposition](../readings/list-composition)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8789469)
        * The reading is not yet updated for Scamper.
    * [Mini-project 3](../mps/mp03)
        * Gradescope not yet ready
* On Friday, 2026-09-16
    * NEW Quiz/LA on testing (one of today's topics)
    * NEW Quiz/LA on local bindings (Wednesday's topic)
    * Makeup Quiz/LA on collaboration (hopefully not)
    * Makeup Quiz/LA on lists and list operations
    * Makeup Quiz/LA on conditionals
    * Makeup Quiz/LA on compose, cut, and section
    * Makeup Quiz/LA on tracing
    * Makeup Quiz/LA on decomposition (hopefully not)
    * Makeup Quiz/LA on procedures (hopefully not)
* Due Tuesday, 2026-10-27
    * [Mini-project 2](../mps/mp02) redo
       * Submit redo on Gradescope (forthcoming)
       * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
       * Please add the following line to the top of your file.
         `(export ...)`.

### Upcoming activities

Scholarly

* Tuesday, 13 October 2026, Noon--1:00 p.m., CS Commons.
  _CS Table: The Complexity of Songs_
* Thursday, 15 October 2026, 11:00 a.m.--noon, JRC 101.
  _Scholars' Convocation: Unknown Topic_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.

Multicultural

* Friday, 30 October 2026, 4:10--5:00 p.m., HSSC N1170
  _Middle of Everywhere (Somewhere)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 24 October 2026, 1:00 p.m.--4:00 p.m., Rosenbloom Field.
  _Football vs. Cornell College_

Wellness

* Monday, 12 October 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 13 October 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Wednesday, 14 October 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_

Misc

* Wednesday, 14 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 15 October 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Tuesday, 13 October 2026, 4:00--6:00 p.m., Springer Field.
  _Women's Soccer vs. UW La Crosse_
* Friday, 16 October 2026, 6:00--8:00 p.m., RKO Natatorium.
  _Swimming and Diving vs. Augustana_
* Saturday, 17 October 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Men's Soccer vs. Lawrence University_
* Saturday, 17 October 2026, 1:30--3:30 p.m., Springer Field.
  _Women's Soccer vs. Lawrence University_
* Sunday, 18 October 2026, 2:00--4:00 p.m., Springer Field.
  _Men's Soccer vs. Gustavas Adolphus College_ 

Lab
---

Make sure the Scheme file has the semester in it (2026Fa). Reload if 
it doesn't.

On testing palindromes (and testing in general).

* Even length palindromes
* Odd length palindromes
* Even length non-palindromes
* Odd length non-palindromes
* Empty string (#t)
* Single-character string (#t)
* Non-letters
* Mixed lower and upper case.
