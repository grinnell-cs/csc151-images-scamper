---
title: "EBoard 02: Getting Started with Scheme and Scamper (Section 1)"
number: 2
section: eboards
held: 2026-08-31
link: true
---
# {{ page.title }}

_The start-of-class algorithm_

* Grab instructions, tent, pen, eraser
* Grab one of the small cards by the jar.
    * Determine which computer you'll be at and where it is.
    * Put the card in the jar.
    * Navigate to the computer.
* If you're the first to arrive, log in.
* When both of you arrive, say hello.
* Write your name on both sides of the tent and put it on the computer

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
* Meet Mina, our mentor

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
  _Middle of Everywhere_

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

* Learn how to code without relying on AI sludge
* Cats! So many cats!
* Double majoring!
* 8am classes
* Guitar
* Classes [x2]
* Learn a new programming language
* Passing
* Inflatable bed
* A new semester (because old semesters are <something>)
* Club fair
* [Things Sam forgot to write down.]
* Orchestra
* Attending College in the US.
* End-of-semester performance.
* Going to Chicago.
* Leaving Iowa for Christmas break.
* American Football.
* Learning Chinese.
* Fall break.
* Traveling in the US. 
* Lying in class.

### Q&A

Ooh? Can you come back to me later?

> Sure. You should always feel free to say "I don't have an answer right now"
  and to ask questions at other times.

Why does Sam type eboards?

> So that there is a record in case you forget.

> To support those who aren't here.

> Why not?

Does Sam always write eboards?

> Yes.

Which Linux distribution does the CS department use?

> Debian. I don't know why.

What are the names of these workstations?

> Dead computer scientists.

Will Sam invest in an AI startup?

> Maybe. We can chat.

What was the first thing Sam did when he graduated?

> Hugged my mom.

> Taught at Dartmouth.

Why does Sam teach?

> It's fun! I get to see students learn. I find designing classes intellectually
  stimulating.

> "I get to make a difference in the lives of awesome young people."

Debrief
-------

How could you have been faster about getting together in the card groups?

* Someone could have said "fives go _here_, sixes go _here_, etc."  [+1]
* Lots of shouting.
* Use the first seven people to say their number, others join them.

Q&A from Readings
-----------------

How many types of values (e.g. numbers, strings, lists) are there in Scheme? And what are they?

> There are a lot. And programmers can design new ones. For example, while "standard" Scheme does not include images or sounds, we've designed and implemented those types.

Do numbers type in Scheme only include integers, or integers and reals, or just any number in existence?

> It depends on the variant of Scheme. Racket separates integers and real numbers, as well as exact (arbitrary precision) and inexact (approximated, like in most languages) languages. Racket also supports complex numbers. Scamper treats everything as a real number, but can tell when the real is an integer (at least it usually can).

Can you go over the questions from the Scheme reading?

> We're going to have you go over the questions with your partner, try them on the computer, and then you can ask us questions.

Can you further explain what does this mean: "As we noted, the `string-split` operation returned a _list_, an ordered collection of values. Note that, like expressions, lists are surrounded by parentheses. Scheme distinguishes lists, which should not be evaluated, from expressions, which should be evaluated, by putting the word `list` at the start of the parenthesized expression.

> Parentheses can mean two different things in Scheme: Usually, they mean "Please apply this function to these inputs". However, in the case of lists, they also mean "These are the elements of the list." Does that clarify it?

> `(+ 2 3)` vs. `(list 1 2 3)`.

Is a list of strings one parameter or several parameters?

> One list is just one thing.

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

Do you have a favorite project?

> Yes.

Can I suggest homework assignments?

> Maybe. Not today.

Lab One
-------

Lab Two
-------

