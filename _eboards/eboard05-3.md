---
title: "EBoard 05: Mental Models (Section 3)"
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
* We hve lots of computers down because of the network problems. Start
  at the dead computers and then move to a working one once the lab starts.
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

Do I have to write reflections to earn a token for mentor sessions?

> Yes.

What happens if I turn in a reflection more than 72 hours after the event?

> I'll be slower in grading it.

Did my lab partner turn in the lab and include me?

> You can check on Gradescope. If you see an entry for your name, they did.
  If not, they either didn't turn it in or forgot to include you.

> Note that the two of you should turn in the lab together at the end of
  class.

Did Sam grade the quizzes?

> Whoops! Yes. They are on Gradescope.

Quiz notes: Decomposition
-------------------------

Key idea: Break a complex set of instructions into smaller parts and
name the parts (perhaps with a clear name).

Why? (TPS)

* It can be easier to figure what went wrong because we can try each
  component separately.
* Readability: The names can make things easier to understand, not only 
  for you, but also for others. [+1]
* We tend to be better at remembering smaller things, and this lets
  us build smaller things.
* When we need multiple copies of the same thing, we can refer to the
  same name again and again, rather than writing long pieces of code
  again and again. (Reuse) (Condense the code) [+1]
* Also makes you easier to change things. For example, if you're unsatisfied
  with how an eye looks, you can change only one definition.

### Demo solution

_Not included in eboard._

### Grading notes

* If you left the eye unnamed: Not-yet-satisfactory because you should
  be eliminating repeated code.
* If you left the bow unnamed: Could still be satisfactory.
* If you chose bad names, like "black-square", Not-yet-satisfactory
* If you put parenthesis around a named value, like `(eye)`, I wrote something
  on your quiz, but it did not affect your grade.
* If you wrote your own procedures, you got a Not-yet-satisfactory because
  it explicitly said not to write procedures.

### Questions

When can we make it up?

> The quiz time for this class starts at 3:30 p.m. and runs until the
  end of class at 4:00. You can also stay until 4:30 p.m.

Will the questions be the same?

> Nope. Different questions about the same topics.

Quiz: Procedures
----------------

Key idea: Name and parameterize sets of code.

Why? (TPS)

* Can make our code shorter because we can call upon the procedure again
  and again.
* It generalizes our code, which lets us use it in more situations.
* It lets you build variants of the original computation without copying
  and pasting large amounts of code.
* It makes it easier to change things. Rather than worrying "Which of
  these colors should I change", you can just change one paramter.
* UM: It helps you use math
* Naming things adds clarity/resolves ambiguity.
    * Naming the function
    * Naming the various parameters/values

### Demo solution

_Not included in eboard._

### Grading notes

* Three procedures is more than I should ask for. I gave you credit for
  a decent window procedure plus a decent building procedure.
* Don't forget to write the lambda when creating a procedure.
* You can't nest `define` statements. (Sorry.)

### Questions

Lab
---

Do the lab on Gradescope.

I'd encourage you to finish the lab on your own to prepare for Friday's quiz.
