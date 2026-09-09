---
title: "EBoard 05: Mental Models (Section 2)"
number: 5
section: eboards
held: 2026-09-09
link: true
---
# {{ page.title }}

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_You should know the start-of-class algorithm_

_Approximate overview_

* Administration
* Quiz notes
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Please remember to return your blue cards to jar immediately after
  determining where you are.
* During class, please work on our workstations, not your laptops.
* Congratulations to our football team for their season-opening victory!

### Upcoming activities

Scholarly

* Thursday, 10 September 2026, 11:00 a.m.--noon, JRC 101.
  _Scholar's Convocation: Ruth Feingold_
* Thursday, 10 September 2026, 4:00--5:00 p.m., JRC 101.
  _The Department of Revenge_ (NY Times Reporter; four-time Pulitzer winner)
* Thursday, 10 September 2026, 4:15--5:00 p.m., Science 3821.
  _Study Away for CS Majors_
    * Refreshments in the CS commons at 4:00 p.m.

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

* Wednesday, 9 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 14 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 14 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 15 September 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_

Misc

* Wednesday, 9 September 2026, 8:00 p.m.--9:00 p.m., Noyce 3rd.
  _Mentor Session_
* Thursday, 10 September 2026, 8:00 p.m.--9:00 p.m., Noyce 3rd.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Wednesday, 9 September 2026, 4:30--6:00 p.m., Springer Field.
  _Women's Soccer vs. Coe_

## Upcoming work

* Due Thursday, 2026-09-10:
    * [Today's lab](../labs/mental-models-of-computing)
        * Today's lab involves a [Gradescope Form](https://www.gradescope.com/courses/1370413/assignments/8584066)
        * Turn it in at the end of class.
    * [Reading response](https://www.gradescope.com/courses/1370413/assignments/8593785)
        * [Anonymous procedures](../readings/anonymous-procedures.html)
        * [Transforming RGB colors](../readings/transforming-rgb.html)
        * [Transforming images](../readings/transforming-images.html)
* On Friday, 2026-09-11:
    * Quiz/LA on tracing (quite similar to the end of today's lab)
    * REDO Quiz/LA on decomposition.
    * REDO Quiz/LA on procedures.
* Due Tuesday, 2026-09-15:
    * [Mini-project 1](../mps/mp01)

## Administrative Q&A

What happens if I don't finish a lab?

> You should submit what you finish in class at the end of class.

> I'd recommend that you read the rest of the lab and then attempt any
  questions that seem difficult to you.

When can I make up an LA?

> There are makeups every Friday. There are also extra makeup times
  available. 7:30--8:00, 11:00--11:30, 4:00--4:30.

Do I have to do the makeup LAs this week if I missed them last week?

> No. You could do them the following Friday. Or the Friday after.

Do I have to write reflections to earn a token for mentor sessions?

> Yes.

What happens if I turn in a reflection more than 72 hours after the event?

> I'll be slower in grading it.

Did my lab partner turn in the lab and include me?

> You can check on Gradescope. If you see an entry for your name, they did.
  If not, they either didn't turn it in or forgot to include you.

> Note that the two of you should turn in the lab together at the end of
  class.

Quiz notes: Decomposition
-------------------------

Key idea: Break a complex set of instructions into smaller parts and
name the parts.

Why? (TPS)

* Easier to understand [+2]
    * For both you and for anyone you share the code with
    * Smaller sections are easier to understand and test
* May help you limit mistakes [+1]
    * You can check the sections one by one
    * Perhaps you can "comment out" parts of them
* Avoids repetition [+1]
* Easier to change code; you can focus on the individual parts.
* May be more efficient; the computer does not need to recompute something
  that use more than once.

### Demo solution

_Not included in eboard._

### Grading notes

* Removing repeated code is important. If you did not remove repeated code
  you likely got a Not-yet-sufficient.
* Good names are important.
* Need to decompose deeply.

### Questions

What did you mean when you wrote "this is not a function"?

> You used functions even though the instructions said not to.
  (Marked Not-yet-satisfactory)

> You treated a value as a function by putting parens around it.
  (Small syntax error; did not affect grade.)

Quiz: Procedures
----------------

Key idea: Parameterize and name sets of code.

Why? (TPS)

* Helps us keep things organized - the names help
* Naming the parameters (and the corresponding vales) clarifies things.
  "Ah, the 10 stands for the width."
* Helps people read
    * The name helps
    * They don't have to delve into the code itself to know what it does.
* Makes it easier to create multiple copies of something by calling on
  it more than once.
    * Avoid repetition
* The (programmer who calls our code) gets to control some of the output
* Lets you easily build variants of the same thing
    * E.g., a larger face, a different color tie

### Demo solution

_Not included in eboard._

### Grading notes

* Whoops! That was way too much. I should have just done windows or
  windows plus floor.
* If you got building plus windows as procedures, you got an S.
* In Scamper, you cannot nest `define` statement.

### Questions

Can we do local variables?

> What's a local variable?

> You will learn eventually. For now, make do with what you have.

Will you post the code to the Web site?

> No. I don't like to keep answers to quizzes on the Web. However, I can
  probably post it to teams.

Lab
---

Do the lab on Gradescope.

I'd encourage you to finish the lab on your own to prepare for Friday's quiz.

For #6, `f` should be `fun`.
