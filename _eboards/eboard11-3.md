---
title: "EBoard 11: Conditionals, Part 2 (Section 3)"
number: 11
section: eboards
held: 2026-09-23
link: true
---
# {{ page.title }}

_Please sit with your partner from Monday's class._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrative stuff
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Warning! Computers hate me! I hate them, too.
* Grade reports were distributed last night.
    * Let's take a look at one.
* As I mentioned in the course syllabus and email, I will be turning 
  in academic alerts for anyone who has fewer than two LAs completed 
  or a missing MP1. I may also turn one in for those of you who are 
  missing many reading responses.
    * AAs are intended to ensure that you get appropriate support.
    * If you have fewer than two LAs completed, you should probably set up
      an appointment with me to get help and/or look at ways to move forward
      successfully. <https://bit.ly/book-samr> or drop me an email/TM to find
      another time.
    * If you have fewer than two LAs completed, you should also be making
      sure to use mentor sessions and/or asking evening tutors for help.
* Additional times available for meetings this week.
    * Thursday: 8:00--9:30 a.m. and 4:30--5:00 p.m.
* I have one unnamed procedures quiz. Please let me know.

### Notes on Mini-Project 1

* Mini-project 1 is now available on Gradescope.
* I'll demo how you might look at your graded work.
* There were a lot of "close, but still missing a few things" submissions.
  Hopefully, those will be easy to fix.
* You can submit redos on [Gradescope](https://www.gradescope.com/courses/1370413/assignments/8707061)
* Some students turned in nearly-identical solutions.
    * You should feel free to consult each other, but YOU MUST CITE/ACKNOWLEDGE.
    * I'll treat this first instance as a failure to understand that policy.
    * In the future, I'll need to report apparent collaboration that lacks
      citation.

### Strange answers

From the latest reading responses:

```
(define (shorter? str1 str2)
  (< (string-length str1) (string-length str2)))
```

While this is valid Scheme, it is not valid Scamper. That makes me question
how someone would come up with this answer. (The obvious reason is "AI".)

* You may not use AI in this class. 
* If you ask others for help, YOU MUST CITE them.
* It's okay to get problems wrong on reading responses please rely
  primarily on your understanding.
* Please try your answers in Scamper (unless the problem suggests otherwise).

### Upcoming activities

Scholarly

* Thursday, 24 September 2026, 11:00 a.m.--noon, Herrick Chapel.
  _Scholars' Convocation: 
  The Story of Our Founding: America at 250 with Annette Gordon-Reed_
* Tuesday, 29 September 2026, Noon--1:00 p.m., JRC 224C (I think).
  _CS Table_  **New**
    * Topic TBD

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Thursday, 24 September 2026, 7:00--9:00 p.m., The Wall.
  _Broadway Musical Karaoke_ **New**
    * I'm not certain about this one; check the signs.
* Friday, 25 September 2026, 7:30--9:00 p.m., Sebring-Lewis.
  _Jazz Ensemble: Terry Riley's "In C"_
* Saturday, 25 September 2026, 2:00--3:30 p.m., Sebring-Lewis.
  _Grinnell Symphony Orchestra Concert_ **New**
* Saturday, 26 September 2026, 7:30--9:00 p.m., Sebring-Lewis.
  _Grinnell Singers: My Heart Be Brave_ **New**

_About "In C"_

> When Terry Riley brought 10 musicians into a New York City studio in 1968 to record an album-length version of his composition "In C", he couldn't have known how profoundly he was about to affect the course of contemporary music, both popular and experimental. Minimalist music was around before In C, but this was the album that really put that approach on the map. Influenced by everything from Indian music to John Cage's chance-oriented pieces, this modal marvel is a cyclical composition consisting of short, repetitive phrases that each player chooses spontaneously from the score, creating a hypnotic interlocking of lines based around a central idea. Piano, vibes, marimba, woodwinds, horns, and viola meld together in a slowly shifting, pointillist landscape. When the album was released, composers like Steve Reich and Philip Glass were following minimalist paths as well, but they were still pretty far underground. In C not only broke through to avant-garde ears, it proved profoundly influential to adventurous rock and jazz artists.

Multicultural

* Friday, 25 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Singapore)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 26 September 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Soccer vs. Ripon_
* Saturday, 26 September 2026, 1:00--4:00 p.m., Rosenbloom Field.
  _Football vs. Beloit_

Wellness

* Wednesday, 23 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Friday, 25 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 28 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 28 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 29 September 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
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
* Friday, 25 September 2026, 5:00 p.m.--???, Merrill Park West
  _CS Picnic_ 

### Other good things

_These do not earn tokens, but are worth your consideration._

## Upcoming work

* Due Thursday, 2026-09-24
    * [Today's Lab](../labs/conditionals)
        * [Submit lab on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8700850)
        * Please submit at the end of today's class.
    * Readings (see schedule)
* On Friday, 2026-09-25:
    * New Quiz/LA on conditionals.
    * MAKEUP Quiz/LA on compose, cut, and section.
    * MAKEUP Quiz/LA on tracing.
    * MAKEUP Quiz/LA on decomposition.
    * MAKEUP Quiz/LA on procedures.
* Due Tuesday, 2026-09-29
    * [Mini-project 2](../mps/mp02)
        * [Submit on gradescope]()
* Due Tuesday, 2026-10-06
    * [Mini-project 1 redo](https://www.gradescope.com/courses/1370413/assignments/8707061)

Questions
---------

_It's a "bribe for asking questions" day._

### Administrative questions

What happens if I fail to indent my code on a mini-project?

> You will get a not-yet-satisfactory grade.

Can I submit a lab writeup or reading response that is missing?

> You may not submit lab writeups or reading responses more than
  48 hours after they are due. The "the first six don't count"
  rule is intended to accommodate missing ones.

> If you are already missing six or more, we should talk.

Does it cost a token to submit a reading response up to 48 hours late?

> Yes. Also a lab or mini-project.

How many chances to I get to make up MP1?

> First redo is free. (For all mini-projects.)

> Second redo costs a token.

> I hope we won't need a third redo. It will cost you a token.

How many tokens do we start with?

> Three.

How much do I have to get done on a lab to get credit?

> You must change the header to include your name and your partner's
  name, as well as the date.

> Of course, doing more will help you learn and better prepare you for
  the LAs and MPs and other two-letter abbreviations.

Which labs are not completed graded?

> 5, 6, and 9.

How much should I do if I'm making up a lab because I blew off class?

> Spend about an hour.

What if my partner doesn't add me until after a lab is due?

> I don't think it shows up as late. If it does, let me know.

Do we need to let you know if we submit something late?

> No!

How many times should I click submit for a reading reflection?

> As many times as you'd like; I'll look at the time of the last submission.

Can I do such a bad job on a reading reflection that I get no credit?

> You can do the wrong reading reflection.

> You can leave it blank.

If I write badly in the token reflection will I still get the token?

> Probably. 

How do I sign up for the CS picnic?

> Deadline was Monday. We provide the food. (There's probably enough if
  a few of you show up without having RSVP'd.)

Is there a separate place to submit MP1 redo?

> Yes.

Do I get tokens for supporting myself (e.g., by singing at singers
or catching a ball / blocking well at football)?

> No.

How long do I have to submit a reflection?

> I would prefer that you submit a reflection with 72 hours.

Do we have to submit reflections for mentor sessions?

> Yes.

Will we consider user input?

> Only if we can convince Peter-Michael to implement user input in Scamper.

Are we your favorite section for asking such good questions?

> Almost certainly.

### Questions on MP2

I tried running the code in part 1c of the mini project following
the rounding procedure given in the instructions but kept getting
an error that said "expected rgb component, received number". How
do I fix this?

> It's a problem with how the `rgb` function works in some versions of 
  Scamper. You may have to use `(min 255 (* 32 (round (/ 255 32))))`> 

The starter code has `cut`. What should I do about that?

> Option 1: Grab new starter code.

> Option 2: Let me know where the problem is and I'll send you the
  replacement code.

_Post additional questions on Teams._

### Questions on conditionals

Can we nest `cond` expressions within `if`, `or`, and `and`? (And can we
nest those within each other?)

> Yes. However, it can become hard to read if you do too much nesting.

Can we still use cut operation and composition with conditionals?

> You cannot use composition or the section operations (`l-s` and
  `r-s`) with conditionals, since the conditional operations aren't
  functions. However, you can use the cut operation (with `#` and `%`)
  with conditionals. I'd prefer that you didn't.

Why does `(and)` with no arguments give `#t`, and `(or)` with no arguments
give `#f`?

> Answer 1 :`and` returns `#f` if any of its arguments are `#f`. In
  `(and)`, none of the arguments are `#f`. Similarly, `or` returns `#t`
  if all of its parameters are `#t`. None of its parameters are `#t`.

> Answer 2: Computer scientists are weird.

> Answer 3: It's easier to implement them that way.

Lab
---

_If you finish early, please do the extra problems._

_If you finish those, too, split up and start working on MP2._
