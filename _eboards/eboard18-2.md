---
title: "EBoard 18: Pause for breath - MP3 and MP2 (Section 2)"
number: 18
section: eboards
held: 2026-10-07
link: true
---
# {{ page.title }}

_Please follow the standard start-of-class routine._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrative stuff
* Q&A
* About MP3
* A question from MP2
* LAs

Administrative stuff
--------------------

### Introductory Notes

* Grades distributed last night. Let me know if there are questions.
    * I have not yet updated the tokens and attendance.
    * Our graders are still working on the last two labs and the MP1 redo.
* I will be unavailable next Thursday. Tuesday is my primary day for office
  hours, but I can try to find times between classes on Monday, Wednesday,
  and Friday.

### Upcoming work

* Due Sunday, 2026-10-11
    * Readings:
        * [Documenting your code](../readings/documenting-your-code.html)
        * [Unit testing](../readings/unit-testing.html)
        * [Hypothesis-driven debugging](../readings/hypothesis-driven-debugging.html)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8789234)
* Due Tuesday, 2026-10-13
    * Readings:
        * [Local bindings](../readings/local-bindings)
        * Gradescope not yet ready
        * The reading is not yet updated for Scamper.
* Due Thursday, 2026-10-15
    * Readings:
        * [List composition and decomposition](../readings/list-composition)
        * [Submit reading response on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8789469)
        * The reading is not yet updated for Scamper.
    * [Mini-project 3](../mps/mp03)
        * Gradescope not yet ready
        * We'll talk about it today.
* On Friday, 2026-09-16
    * NEW Quiz/LA on testing (one of Monday's topics)
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

* Friday, 9 October 2026, 4:10--5:00 p.m., HSSC N1170
  _Middle of Everywhere (Uganda)_
* Saturday, 10 October 2026, 3:00--5:00 p.m., JRC 101.
  _Walking Tacos with SOL_ 

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Friday, 9 October 2026, 11 a.m.--1 p.m., Kington Plaza or JRC 101.
  _Mental Health & Wellness Resource Fair_ 
    * Stop by for as long as you think is appropriate.
* Saturday, 10 October 2026, Evening.
  _Participate in 10/10 with moderation._ 
    * Moderation: No more than two normal-size alcoholic drinks. (E.g., one 
      shot, 12/16 oz of beer, 5 oz of wine.)
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

* Friday, 9 October 2026, 7:00--9:00 p.m., Darby.
  _Volleyball vs. Knox_ 
* Saturday, 10 October 2026, 1:00--3:00 p.m., Darby.
  _Volleyball vs. Illinois_ 

### Friday PSA

* Please be moderate in the choices you make.
* Don't give in to STUPID AND UNHEALTHY EXPECTATIONS.
* If you cohabit, consent is essential, insufficient, impossible when
  impaired.

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

* If I'm going to change all of the pixels in an image, I'll need to use
  `pixel-map`. `(pixel-map ??? image)`.
* The first parameter to `pixel-map` must be a one-parameter procedure.
* Whoops ... `gamma-correct-color` is a two-parameter procedure.
* I'll need to build restricted versions of `gamma-correct-color` that
  correct by 1/2 and 2

```
(define gcc-half
  (lambda (color)
    (gamma-correct-color color 0.5)))

(define gamma-correct-half
  (lambda (image)
    (pixel-map gcc-half image)))

(define gcc-double
  (lambda (color)
    (gamma-correct-color color 2.0)))

(define gamma-correct-double
  (lambda (image)
    (pixel-map gcc-double image)))
```

When you encounter a two-parameter procedure with one parameter constant
you can use `l-s` or `r-s`.

```
(define gcc-half
  (r-s gamma-correct-color 0.5))
(define gcc-double
  (r-s gamma-correct-color 2.0))
```

In Scheme, when you have a definition, you can always replace the variable
in future expressions with the corresponding value.

```
(define gamma-correct-half
  (lambda (image)
    (pixel-map (r-s gamma-correct-color 0.5) image)))
(define gamma-correct-double
  (lambda (image)
    (pixel-map (r-s gamma-correct-color 2.0) image)))
```

When you write multiple procedures that look almost identical (e.g.,
copy-paste-change), you should "factor out" the commonalities into
a new procedure.

```
(define gamma-correct-image
  (lambda (image amt)
    (pixel-map (r-s gamma-correct-color amt) image)))
(define gamma-correct-half
  (lambda (image)
    (gamma-correct-image image 0.5)))
(define gamma-correct-double
  (lambda (image)
    (gamma-correct-image image 2.0)))
```

Back to sectioning!

```
(define gamma-correct-half
  (r-s gamma-correct-image 0.5))
(define gamma-correct-double
  (r-s gamma-correct-image 2.0))
```

LAs and Quizzes
---------------

Fun!
