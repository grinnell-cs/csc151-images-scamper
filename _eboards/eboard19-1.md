---
title: "EBoard 19: Software engineering basics (Section 1)"
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
* If you received an M or R, I have also contacted you and entered an
  Academic Alert. Please plan to meet with me this week or immediately 
  after break.
* I will be most of Thursday. Tuesday is my primary day for office hours, 
  but I found some times between classes on Monday, Wednesday, and Friday.
  Email me to claim them: Monday 1:30-2:30, Tuesday, 8:00-10:00, 
  Wednesday 1:30-2:30, and Thursday 9:00-11:00

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
       * I'm working on an autograder for the redo, so the Gradescope
         won't be available until over the weekend.

### Upcoming activities

Scholarly

* Tuesday, 13 October 2026, Noon--1:00 p.m., CS Commons.
  _CS Table_
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

* Saturday, 24 October 2026, 1Z:00 p.m.--4:00 p.m., Rosenbloom Field.
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

Questions
---------

I have credit for all seven LAs. What should I do during LA time?

> You can choose to leave or to work on MP3.

Do we have new work to do over break?

> No. 

> There's not even a reading due at the end of break.

> However, you may find that you want to use break to catch up.
  For example, you might work on redos, you might try to memorize
  some "vocabulary", you might complete some of the labs that you
  didn't complete.

I wish we had more time in class to complete labs. Would that be
possible?

> I try to balance talking with lab time. Some folks need a bit more
  talking, some need a bit more doing. If you want more lab time, you
  can always do labs here with a friend and the evening tutors. (Sorry, 
  I know that's not the best answer.)

I'd like to leave early for fall break. Do I have to show up next Friday?

> You will miss the opportunity to take LAs.

> You must let me know that you won't be here.

> We'll all miss you.

> But it's up to you.

About MP3
---------

Central themes

* Working with lists
    * To create and process collections of things
    * To put data together to represent one thing
* Building non-representational images by combining lots and lots and lots
  of shapes that we build "systematically"

A question from MP2
-------------------

I've written `gamma-correct-color`, but I struggled to write
`gamma-correct-half` and `gamma-correct-double`. The evening tutor
"helped" me write a complicated solution. Can we talk about it? I
think it will help me better understand section and compose.

```
;;; (gamma-correct-color color gamma) -> color?
;;;   color : rgb?
;;;   gamma : number?
;;; Gamma correct the color by the given amount. You can read
;;; "the literature" for the details.

;;; (gamma-correct-half canvas) -> canvas?
;;;   canvas : canvas?
;;; Gamma correct each of the pixels in `canvas` by 1/2

;;; (gamma-correct-double canvas) -> canvas?
;;;   canvas : canvas?
;;; Gamma correct each of the pixels in `canvas` by 2
```

* Hmmm. `pixel-map` needs a one-parameter function as its first
  parameter, but `gamma-correct` expects two.
* I know! I'll write a one-parameter variant that gamma corrects by 1/2

```
(define gch
  (lambda (color)
    (gamma-correct color 0.5)))

(define gamma-correct-half
  (lambda (image)
    (pixel-map gch image)))
```

This is not much different than defining `rgb-bluer` ourselves and then
using it with `pixel-map`.

```
(define image-bluer
  (lambda (image)
    (pixel-map rgb-bluer image)))
```

```
(define gcdouble
  (lambda (color)
    (gamma-correct color 2)))

(define gamma-correct-double
  (lambda (image)
    (pixel-map gcdouble image)))
```

At some point, you get used to using `l-s` and `r-s` (not necessarily
on this assignment).

`gch` is taking a two-parameter procedure (`gamma-correct`) and filling in one of the parameters (the second/right) with a constant (`0.5`). We can use `r-s` to do the same thing.

```
(define gch
  (r-s gamma-correct 0.5))
```

We know that Scamper often just does substitution for defined values.

```
(define gamma-correct-half
  (lambda (image)
    (pixel-map (r-s gamma-correct 0.5) image)))
```

If we prefer `lambda`, we cold also write.

```
(define gamma-correct-half
  (lambda (image)
    (pixel-map (lambda (color) (gamma-correct color 0.5)) image)))
```

We can write `gamma-correct-double` similarly.

```
(define gamma-correct-double
  (lambda (image)
    (pixel-map (r-s gamma-correct 2.0) image)))
```

Wow. I have two nearly identical procedures. I want to "factor out" the
commonality.

```
(define gamma-correct-image
  (lambda (image amt)
    (pixel-map (r-s gamma-correct amt) image)))
```

```
(define gamma-correct-half
  (lambda (image)
    (gamma-correct-image image 0.5)))

(define gamma-correct-double
  (lambda (image)
    (gamma-correct-image image 2.0)))
```

Taking one more step ...

```
(define gamma-correct-half
  (r-s gamma-correct-image 0.5))
(define gamma-correct-double
  (r-s gamma-correct-image 2.0))
```

Lists, "the big three", and anonymous procedures
------------------------------------------------

Time to work on MP3
-------------------

LAs and Quizzes
---------------
