---
title: "EBoard 06: Transforming colors (Section 3)"
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
* Please reload the schedule page before beginning the lab.

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
* Saturday, 10 October 2026, All Day, Somewhere.
  _Mental Health Training_.
    * Sign up on Handshake.
    * It's all day, so you will earn 3 tokens.

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
    * Monday's Lab
    * Wednesday's Reading Responses
* On Friday, 2026-09-18:
    * REDO of Quiz/LA on tracing
    * REDO of Quiz/LA on decomposition.
    * REDO of Quiz/LA on procedures.
    * New Quiz/LA
    * New Quiz/LA

### Administrative Q&A

Where do I submit mini-project 1?

> I should have a location on Gradescope ready by Sunday night.

Can I take a makeup for last week's quizzes?

> The one labeled "Decomposition" makes up for the face quiz.

> The one labled "Procedures" makes up for the evil building quiz.

### Friday PSA

* You seem to be awesome. Please stay that way.
* Also stay that way for people who care about you.
* Be moderate over the weekend.
* Don't succumb to (often imagined) peer pressure; do what is right 
  for you.
* Consent is essential (also not quite sufficient); it is hard to
  give or receive consent if you are intoxicated.

Mini-Project 1
--------------

Goals: Explore. Practice writing functions. Practice generalizing.

Reading questions
-----------------

Which version of `sub3` did people prefer?

> It varied. (I also didn't keep careful count.)

Is there a difference between `#(rgb-darker %1)` and `rgb-darker`?

> Nope. The first as a longer way to write the second. You should only
  use cut when you're filling in some parameters in an expression in
  order to create a procedure.

Can you go over Check 4 from the Transforming RGB colors reading
in more depth? I'd like a clearer explanation of why we use composition
here instead of lambda, and how the order of the procedures inside
`o` affects the result.

> Sure. Here's the question again. 

> > a. Without using `lambda`, write a procedure, `(rgb-purpler c)`, 
    that makes `c` redder and bluer.

> > b. Without using `lambda`, write a procedure, `(rgb-much-darker c)`, 
   that applies `rgb-darker` three times in sequence to `c`.

> Using lambda, we'd solve the first as
  `(define rgb-purpler (lambda (c) (rgb-bluer (rgb-redder c))))`

> Using `o`, we'd solve the first as
  `(define rgb-purpler (o rgb-bluer rgb-redder))`

> The composition solution to the first problem does not explictly name the
  parameter. That can be confusing at first. (You'll get used to it.)

> However, it's much more concise.

> It's also a different way of thinking. We're building new functions
  from old without worrying about a lot of cruft.

Don't forget to explain how the order of procedures affects the result.

> It depends on the procedures you're using. Let's look at this one from
  the self checks.

> `(define rgb-dl (o rgb-darker rgb-lighter))`

> Compare that to

> `(define rgb-ld (o rgb-lighter rgb-darker))`

> `rgb-dl` makes the color lighter and then darker. 

> If we started with white, we can't make it any lighter, so the color
  stays the same, and then we make it darker, giving a very light gray.

> `rgb-ld` makes the color darker and then lighter, so white gets a
  bit darker and then goes back to white.

Since `rgb-redder` decreases the blue component and `rgb-bluer` decreases the
red component, won't this have no effect on the components?

> The decrease in blue in `rgb-redder` is smaller than the increase in blue
  in `rgb-bluer`.

Did the `rgb-purpler` and `rgb-much-darker` procedures need to
specifically include parameter `c`?

> Nope. One of the key ideas of composition is that you don't explicitly
  mention the parameters.

Can you explain in more details about the color transformations
that are not that easy to build?

> Some transformations are not naturally built from the existing
  procedures, such as "add two to red, subtract three from green, and
  double blue". 

Why doesn't this work?  `#(o sub1 (o sub1(o sub1 %1)))`

> Because ...

> There are multiple `o` calls; we should be able to get by with one.

> However, `(o sub1 (o sub1 sub1))` would work.

> We'd prefer `(o sub1 sub1 sub1)`

> The `%1` will get filled in. We then try to compose `sub1` and the thing
  that is filled in. We compose only _functions_. The intent was to 
  fill in a number. You can't compose a function and a number.

I still dont quite understand cutting method.

_skipped_

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

Please reload the schedule page before begining the lab.

Make sure that you're doing "Transforming RGB colors". If not, reload
the schedule page and try again.

Whoops! Not a lot of time. We'll cope.

Don't turn anything in today. Plan to do meet with the same partner on
Monday to finish this lab and do the next one. (Same place, same partner.)

Quiz
----

We will distribute the tracing quiz.

When you are done, give it to Sam and take any makeup quizzes you want.

When you are done, give them to Sam and leave.

Sam will be here until about 4:30 p.m.

Have a great weekend!
