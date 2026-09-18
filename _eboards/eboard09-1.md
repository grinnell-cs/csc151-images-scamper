---
title: "EBoard 09: Strings (Section 1)"
number: 9
section: eboards
held: 2026-09-18
link: false
---
# {{ page.title }}

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Please follow the traditional start-of-class approach._

_Approximate overview_

* Quiz
* Administrative stuff
* Q&A
* Lab

Administrative stuff
--------------------

### Introductory Notes

* I sent out email on Wednesday and Thursday evenings. If you did not 
  receive that email, please let me know.
* Don't forget to turn in reading responses! I've responded to all of the
  ones that I received on strings, but seem to be missing about 15.

### Upcoming activities

Scholarly

* Friday, 18 September 2026, 4:10--5:00 p.m., Noyce 3830 (ELBICA).
  _AI Coffee Chat: Spring MAPs_ **Today**
* Tuesday, 22 September 2026, Noon--1:00 p.m., Unknown location.
  _CS Table_ 
* Thursday, 24 September 2026, 11:00 a.m.--noon, Herrick Chapel.
  _Scholars' Convocation: The Story of Our Founding: America at 250 with Annette Gordon-Reed_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Friday, 25 September 2026, 7:30--9:00 p.m., Sebring Lewis.
  _Jazz Ensemble: Terry Riley's "In C"_

Multicultural

* Friday, 18 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Philippines)_ **Today**
* Friday, 25 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Somewhere)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Friday, 18 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Saturday, 19 September 2026, Noon--2:00 p.m., Younker Hammocks.
  Picnic and Craft. 
* Monday, 21 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 21 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 22 September 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Wednesday, 23 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Wednesday, 30 September 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_
* Saturday, 10 October 2026, All Day, Somewhere.
  _Mental Health Training_.
    * Sign up on Handshake.
    * It's all day, so you will earn 3 tokens.

Misc

* Wednesday, 23 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 24 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Friday, 25 September 2026, 5:00 p.m.--???, Merrill Park East.
  _CS Picnic_ **New**

### Other good things

_These do not earn tokens, but are worth your consideration._

* Saturday, 19 September 2026, 8:00 a.m--4:00 p.m., Mac and Ward Fields.
  _Grinnelleanore Roosevelts Ultimate Tournament_
* Saturday, 19 September 2026, 9:00 a.m.--Noon, Tennis Courts.
  _Women's Tennis vs. Ripon_
* Saturday, 19 September 2026, 3:00--6:00 p.m., Tennis Courts.
  _Women's Tennis vs. Luther_ 

## Upcoming work

* Due Sunday, 2026-09-20
    * [Today's Lab](../labs/strings)
        * [Submit lab on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8673399)
        * Please submit at the end of class.
    * Readings
        * [Boolean values and predicate procedures](../readings/booleans)
        * [Conditional values in Scheme](../readings/conditionals)
        * [Submit reading responses on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8673396)
* On Friday, 2026-09-25:
    * New Quiz/LA on conditionals.
    * MAKEUP Quiz/LA on compose, cut, and section.
    * MAKEUP Quiz/LA on tracing
    * MAKEUP Quiz/LA on decomposition.
    * MAKEUP Quiz/LA on procedures.
* Due Tuesday, 2026-09-29
    * [Mini-project 2](../mps/mp02)
        * Not yet on Gradescope

### Administrative Q&A

There are *so many* procedures in the reading. How important is it that 
we learn all of them?

> I don't expect you to memorize them, but you should know that "there's
  a procedure that does _this_", even if you can't recall the name.

> I do expect you to be able to read their use.

> Don't forget that we have flashcards (and that you have notebooks and
  cheat sheets).

### Friday PSA

Questions on the readings
-------------------------

_I will not go over these explicitly. You may want to look at them with
your partner._

Why is the space character positioned at 32?

> Computer scientists like powers of 2. This serves as a nice breaking
  point between characters that do something a bit atypical from those
  that print.

Why do we have to put `\#` in front of a character in order for `char->integer` to work?

> The `\#` tell the computer to treat the character as a character, rather than, say, an identifier (variable).

Why does `char-lower-case?` turn characters into diffferent characters? 

> `char-lower-case?` checks whether or not a character is lowercase. It returns either true (`#t`) or false (`#f`). That will make more sense once you read Monday's readings.

You mention there is a way to implement alphabetic to the letter characters, but how? Is it the `#/a #/n #/z` example that became `#t`?

> Yes, it's that example.

Was #f being placed in the "more character predicates" section also mean it was false?

> Yes.

What do the special chars represent?

> It depends on the character. The ones less than 32 often represent special information we'd use in transferring data from computer to computer or keys on old-fashioned keyboards (like "bell").

> The ones over 128 are "unamerican" characters.

Why would we need to use this code?

> To build and understand functions that work with text.

I would like to request, if possible, a demonstration or more clear example on how and why you would use these functions like `char<`

> Next week

