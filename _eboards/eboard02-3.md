---
title: "EBoard 02: Getting Started with Scheme and Scamper (Section 3)"
number: 2
section: eboards
held: 2026-08-31
link: true
---
# {{ page.title }}

_The start-of-class algorithm_

* Grab the lab instructions.
* Grab one of the small cards by the jar.
   * Determine which computer you'll be at and where it is.
   * Put the card in the jar.
   * Navigate to the computer.
* If you're the first to arrive, log in.
* When both of you arrive, say hello.

_Approximate overview_

* Lots of administrative stuff, including attendance
* Debrief from Friday.
* Q&A from readings.
* Lab one.
* Lab two.

Administrative stuff
--------------------

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

### Introductory Notes

* Sorry that it took so long to get the readings ready.
* We have _two_ labs today. Both of you should do the first lab so that you
  are sure that you can login. You'll do the second lab together.
* On reading responses, you only need to turn in the double-dagger problems.
  The others are generally for you to think about, but not turn in.
* Just so you know, my normal "reading response" process involves looking
  at the reading responses at about 8pm. If you turn it in later, I may
  not answer your questions in a timely fashion, but you can always ask
  in class.
* Links to readings can be found in the schedule.

### Upcoming activities

Guidelines

* You can earn "tokens" (more info in syllabus) for attending designated
  academic events or supporting your classmates in their pursuits.
* Attend (or watch recording within a day or so) and **record a one-paragraph 
  reflection within three days afterwards**.
* Only those activities that I list count.
    * You can suggest others.
* Links might appear in the Announcements channel on MS Teams.
* Unless otherwise specified, each activity earns one token.  

Scholarly

* Thursday, 3 September 2026, 11:00 a.m.--noon, JRC 101.
  _Scholars' Convocation: Anne Harris_

Artistic/Cultural

Multicultural

* Friday, 4 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (from Algeria to America)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Monday, 31 August 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 1 September 2026, 4:30--6:00 p.m., Bear Center Multipurpose Dance Studio (P103).
  _Wellness Yoga_
* Wednesday, 2 September 2026, 11:00 a.m.--1:00 p.m. JRC Lobby, Table 3.
  _Free Mom Hugs_
* Wednesday, 2 September 2026, 4:00--5:00 p.m., Burling 1st.
  _Speed Friending_

Misc

### Other good things

_These do not earn tokens, but are worth your consideration._

* Tuesday, 1 September 2026, 4:30--6:30 p.m., Springer Field.
  _Women's Soccer vs. U. Dubuque_
* Friday, 4 September 2026, 5:00--7:00 p.m., Darby.
  _Volleyball vs St. Benedict vs. Simpson_

## Upcoming work

* [Read the Web site and answer questions](../mps/syllabus) (due Tuesday).
* [Tell me about yourself](../mps/intro-survey) (due Tuesday).
* Read things in preparation for the third day of class and report on those 
  things (due Tuesday).

## Q&A

For the handwritten notes allowed on each Learning Assessment, can we make a one-page reference sheet with whatever information we find helpful, similar to a cheat sheet?

> That's the goal.

Where are the readings?

> Linked on the schedule.

Why wouldn't Scamper let me make circles?

> You have to type some extra things to make circles. We'll cover it in
  lab today.

## Attendance

* Sam will (attempt to) call you by first name.
* You will respond with 
    * Hi, my name is FIRST LAST. (PROPER SURNAME)
    * (Optional pronouns.)
    * I prefer to be called NAME.
    * If you must address me by last name, please call me 
      Mr./Ms./Mx./Srta./Sr./etc. LAST NAME san/etc.
    * What is something you are excited about this semester?
    * _Optionally, ask me a question about the class. You'll also have 
      many more chances in the future._
* Note: For the first few weeks of class, please say your name each time
  you ask or answer a question.

### Excited about

* Finishing a major.
* Learning a new programming language.
* Dining hall.
* Tennis.
* Meeting host family.
* Healthy back.
* Passing all classes.
* Football.
* The new Chinese restaurant.
* Serving the community as a board member of the African Carribian Student Union
* Meeting new people.
* Having medical insurance.
* Hang out with friends.
* Programming.
* Getting better in French
* All my classes.
* Volleyball
* Learning new things.
* Coffee.
* The College experience.
* Autumn.
* Later DHall hours.
* Pickleball.

### Q&A

What will the learning assessments look like?

> You will get a problem on a sheet of paper and answer it.

> Examples are posted on the course web site.

Will Sam ever learn to pronounce Drilon's name?

> Odds are against it.

Debrief
-------

Given a bunch of people, each of whom has a playing card, assemble people
with the same playing card value.

How could you do that better? (TPS)

* Choose a place for each number (or set of numbers).
* Use big playing cards so that when you hold them up, others can see.
* Use fingers instead of playing cards.

Q&A from Readings
-----------------

How many types of values (e.g. numbers, strings, lists) are there in Scheme? And what are they?

> There are a lot. And programmers can design new ones. For example, while "standard" Scheme does not include images or sounds, we've designed and implemented those types.

Do numbers type in Scheme only include integers, or integers and real, or just any number in existence?

> It depends on the variant of Scheme. Racket separates integers and real numbers, as well as exact (arbitrary precision) and inexact (approximated, like in most languages). Racket also supports complex numbers. Scamper treats everything as a real number, but can tell when the real is an integer (at least it usually can).

Can you go over the questions from the Scheme reading?

> We're going to have you go over the questions with your partner, try them on the computer, and then you can ask us questions.

Can you further explain what does this mean: "As we noted, the `string-split` operation returned a _list_, an ordered collection of values. Note that, like expressions, lists are surrounded by parentheses. Scheme distinguishes lists, which should not be evaluated, from expressions, which should be evaluated, by putting the word `list` at the start of the parenthesized expression."

> Parentheses can mean two different things in Scheme: Usually, they mean "Please apply this function to these inputs". However, in the case of lists, they also mean "These are the elements of the list." Does that clarify it?

> `(+ 3 2)` - means apply the operation

> `(list 1 2 3)` - means "this is a list"

> `(list (+ 1 2) (+ 3 4))` - means "evalate all the operands and then make a list"

Is a list of strings one parameter or several parameters?

> Just one thing. It's just a list.

How do I write an arithmetic calculation in Scheme involving a negative number?

> Precede the number with a dash (negative sign), as in `(* -2 3)`.

What is the main difference between using the Definitions pane and the Interactions (REPL) pane in Scamper, and when should we use each one?

> I tend to use the definitions pane for things I plan to keep and the interactions pane for quick experiments. YMMV.

I have a question about “string-split”. Could the second argument be a number instead of a string, with the number indicating how many characters to include before splitting the string? For example, could a number specify that the string should be split every 5 characters?

> Nope. I don't recall whether we have a different procedure that does that. If not, we can write one. (Well, I can write one. You'll know how to write such a procedure by the middle of the semester.)

Please elaborate on subroutines. I didn't really understand from the readings. 

> A subroutine (also "procedure" or "function") takes a set of code and puts it together into something we can refer to by name. For example, `string-length` is a subroutine that computes the length of a string. (In this case, we don't know what the underlying instructions are. Starting Wednesday, you'll know how to write your own.)

How useful is it to distinguish procedure/function/parameter/argument especially if going further in CSC? 

> It's useful to distinguish procedure/function from parameter/argument. The first pair are sets of instructions to accomplish a task. The second pair are the inputs to those instructions. Most computer scientists are remarkably casual about the difference between a function and a procedure, as well as between a parameter and an argument, and tend to use the terms interchangeably.

Lab One
-------

Each partner should do lab one.

I apologize for the not-quite-right instructions for setting your default
page.

Ignore the mention of DrRacket in the lab.

Lab Two
-------

You may not finish. That's okay. There's nothing to turn in.

Please try to finish on your own.

On your way out, throw the lab in the recycling bin.
