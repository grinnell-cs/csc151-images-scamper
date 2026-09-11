---
title: "EBoard 06: Transforming colors (Section 1)"
number: 6
section: eboards
held: 2026-09-11
link: false
---
# {{ page.title }}

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_You should know the start-of-class algorithm_

_Approximate overview_

* Quiz
* Administrative stuff
* MP1
* Reading questions
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Make sure to write both your first name and last name on the back
  of the quiz.
* Please remember to return your blue cards to jar immediately after
  determining where you are.
* During class, please work on our workstations, not your laptops.
* Please ask questions on Teams rather than via email. (That's particularly
  important right now because my email seems to be broken.)
* I do my best to respond promptly to questions. If I don't respond
  to a message within 24 hours, it's been lost. Please ask again.
* We've been asked to remind you that today is the end of add/drop 
  period. If you drop after today, you end up with a "W" on your transcript
  and you can't add another class (except for half-semester classes).
    * No one cares about W's on your transcript.
    * I hope no one drops.
* These readings took many of you much longer than I expected. I'm
  sorry.

### Upcoming activities

Scholarly

* Thursday, 17 September 2026, 11:00 a.m., JRC 101.
  _Scholars' Convocation: Melissa Murray_

Artistic/Cultural

* Saturday, 12 September 2026, 8:00 p.m., Gardner.
  _The Spine Stealers and Babehoven_.

Multicultural

* Friday, 11 September 2026, 4:00--6:00 p.m., Ward Field.
  _DEI Kickback._
* Friday, 11 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Taiwan)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 12 September 2026, Grinnell Track.
  _Les Duke Invitational (Cross Country)_

Wellness

* Friday, 11 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Saturday, 12 September 2026, All Day, Somewhere.
  _Mental Health Training_.
    * Sign up on Handshake.
    * It's all day, so you will earn 3 tokens.
* Monday, 14 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 14 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 15 September 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Wednesday, 16 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Wednesday, 16 September 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_

Misc

* Wednesday, 16 September 2026, 4:30--6:30 p.m., Central Campus.
  _Student Involvement Fair_
* Wednesday, 16 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 17 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Wednesday, 16 September 2026, 5:00--7:00 p.m., Springer Field.
  _Men's Soccer vs. Central_

## Upcoming work

* Due Sunday, 2026-09-13:
    * Submit [today's lab](../labs/transforming-rgb) 
      on [Gradescope](https://www.gradescope.com/courses/1370413/assignments/8614305)
        * Please submit whatever you've completed by the end of class.
    * You may want to reread [Anonymous procedures](../readings/anonymous-procedures.html)
* Due Tuesday, 2026-09-15:
    * [Mini-project 1](../mps/mp01)
    * Lab
    * Readings
* On Friday, 2026-09-18:
    * REDO of Quiz/LA on tracing
    * REDO of Quiz/LA on decomposition.
    * REDO of Quiz/LA on procedures.

### Administrative Q&A

Where do I submit mini-project 1?

> I should have a locatioin on Gradescope ready by Sunday night.

### Friday PSA

Mini-Project 1
--------------

Goals: Explore. Practice writing functions. Practice generalizing.

Reading questions
-----------------

Which version did people prefer?

> It varied. (I also didn't keep careful count.)

Is there a difference between `#(rgb-darker %1)` and `rgb-darker`?

> Nope. The first as a longer way to write the second. You should only
  use cut when you're filling in some parameters to a procedure.

Can you go over Check 4 from the Transforming RGB colors reading
in more depth? I'd like a clearer explanation of why we use composition
here instead of lambda, and how the order of the procedures inside
`o` affects the result.

> Sure. Here's the question again. 

> > a. Without using `lambda`, write a procedure, `(rgb-purpler c)`, 
    that makes `c` redder and bluer.

> > b. Without using `lambda`, write a procedure, `(rgb-much-darker c)`, 
   that applies `rgb-darker` three times in sequence to `c`.

Did the `rgb-purpler` and `rgb-much-darker` procedures need to
specifically include parameter `c`?

> Nope. One of the key ideas of composition is that you don't explicitly
  mention the prameters.

Can you explain in more details about the color transformations
that are not that easy to build?

> Some transformations are not naturally built from the existing
  procedures, such as "add two to red, subtract three from green, and
  double blue". Even cut doesn't do a good job with those.

Why doesn't this work?  `#(o sub1 (o sub1(o sub1 %1)))`

> Because ...

I still dont quite understand cutting method.

> The primary idea is that we are "cutting" some values out of an expression,
  leaving room to fill them in.

> For example `(string-append "this" " " "and" "  " "that")` would give you
  "this and that".

> To cut out the middle value, making it a parameter, we'd write something like
  `(define fun1 #("this" " " %1 " " "that"))`.

> That creates a procedure that fills in the middle word.

> `(fun1 "or")` -> "this or that"

> `(fun1 "but not")` -> "this but not that"

> If we cut out the end values to make them parameters, we'd write something
  like `(define fun2 #(%1 " " %1 " " "that"))`

Lab
---

