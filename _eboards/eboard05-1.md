---
title: "EBoard 05: Mental Models (Section 1)"
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
* Quizzes were returned on Gradescope.

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
* Saturday, 12 October 2026, All Day, Somewhere.
  _Mental Health Training_.
    * Sign up on handshake.
    * It's all day, so you will earn 3.
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
    * [Reading response](https://www.gradescope.com/courses/1370413/assignments/8593785)
        * [Anonymous procedures](../readings/anonymous-procedures.html)
        * [Transforming RGB colors](../readings/transforming-rgb.html)
        * [Transforming images](..//readings/transforming-images.html)
* On Friday, 2026-09-11:
    * Quiz/LA on tracing (quite similar to the end of today's lab)
    * REDO Quiz/LA on decomposition.
    * REDO Quiz/LA on procedures.
* Due Tuesday, 2026-09-15:
    * [Mini-project 1](../mps/mp01)

## Administrative Q&A

How do I turn in a report for a token?

> Go to the Tokens Submit assignment on Gradescope. Enter details.

How long does the paragraph have to be?

> A few sentences. Reflect, don't just report.

What happens if I don't finish a lab?

> You should submit what you finish in class at the end of class.

> I'd recommend that you read the rest of the lab and then attempt any
  questions that seem difficult to you.

When can I make up an LA?

> There are makeups every Friday. There are also extra makeup times
  available. 7:30--8:00, 11:00--11:30, 4:00--4:30.

Do I have to write reflections to get a token for mentor sessions?

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

* It makes it much easier to read and understand (at least if we choose
  good names). [+2]
    * It's easier to understand smaller chunks of code separately.
    * The names also help.
* It could be more efficient. [+1]
* It's easier to change the code.
* It's generally helpful.
* There's an opportunity for reuse. [+1]
* Clarifies things for ourselves.
* Easier to find bugs.
* Avoid duplicated code. **

### Demo solution

_Not included in eboard._

### Grading notes

* If you did not avoid repeated code, you likely got an Not-yet-satisfactory.
* Many of you neglected to put the person back together. I considered
  calling that Not-yet-satisfactory, but then reread the instructions, which
  did not make it clear that you had to do so.
* If you did not choose good names, it was not-yet-satisfactory.

### Questions

Can we bring another sheet of paper to the retake?

> One per quiz. It can be the same sheet of paper. It can be the same sheet
  of paper with additional notes (if there's room). It can be a brand new
  sheet.

Why did Sam write "Not a procedure"?

> One reason: You wrote `(define something (lambda (param) ...))`, and
  the instructions explicitly said "Do not write a procedure".

> Another reason: You wrote something like `(head)`, which is syntactically
  incorrect because you cannot put parentheses around a value. This did
  not lose you credit; it was just a simple syntactic issue that I wanted
  to remind you about.

Quiz: Procedures
----------------

Key idea: Name and parameterize sets of code.

Why? (TPS)

* Naming things helps us know what they do
* Lets us generalize behavior [+1]
   * You don't have to write the same thing for similar actions
     (e.g., making different size people, or people with different
     color ties).
   * If we write the procedure, we can call it with different parameters
     to get different effects.
* Naming the parameters can also clarify things: It tells you what
  the different values represent.
* Makes the code more readable to other people.

### Demo solution

_Not included in eboard._

### Grading notes

* Sorry, that was a bad quiz. 
* If you wrote a procedure for the building and one for the window, you
  probably got credit. Otherwise, try again this week; it will be better
  (but different).
* Don't forget to use lambdas to define procedures!
* You can't nest defines. Sorry!

### Questions

Will the mentors go over practice problems in the mentor sessions?

> Definitely! That's the main purpose of mentor sessions.

Lab
---

Do the lab on Gradescope.

I'd encourage you to finish the lab on your own to prepare for Friday's quiz.
