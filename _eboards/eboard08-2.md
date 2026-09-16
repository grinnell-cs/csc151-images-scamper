---
title: "EBoard 08: Numbers (Section 1)"
number: 8
section: eboards
held: 2026-09-16
link: true
---
# {{ page.title }}

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Please follow the traditional start-of-class approach._

_Approximate overview_

* Administrative stuff
* Lab meta-analysis
* Talk about numbers
* Exercise 4 from Monday
* Detour: Sectioning
* Exercises 5 and 6 from Monday

Administrative stuff
--------------------

### Introductory Notes

* Today is a "talk day". We'll go over lab-like questions, but via a
  combination of a recitation variant ("cold calling") and think-pair-share.
* Note that it is generally a good idea to start mini-projects early
  so that you can ask questions.
* Warning: `#(fun value %1)` notation is new this semester, so the evening
  tutors may be a bit confused by it.
* Start of class: Make sure to have a real conversation with your partner,
  discussing issues like how they prefer to work on labs and any confusion
  they had with the reading.

### Upcoming activities

Scholarly

* Thursday, 17 September 2026, 11:00 a.m., JRC 101.
  _Scholars' Convocation: Melissa Murray_ (Constitution Day Convo)
* Thursday, 17 September 2026, 4:15--5:00 p.m., HSSC A1231.
  _Melissa Murray Constitution Day Discussion_
* Friday, 18 September 2026, 4:10--5:00 p.m., Noyce 3830 (ELBICA).
  _AI Coffee Chat: Spring MAPs_
* Tuesday, 22 September 2026, Noon--1:00 p.m., Unknown location.
  _CS Table_ **New**

Artistic/Cultural

* Thursday, 17 September 2026, 4:00--5:00 p.m., HSSC S1325.
  _Writers@Grinnell Roundtable with Ananda Lina_
* Thursday, 17 September 2026, 5:00--7:00 p.m., GCMOA.
  _Opening Reception: Abstraction Impressionists, the Women_
* Thursday, 17 September 2026, 8:00--9:30 p.m., Herrick Chapel.
  _Writers@Grinnell Ananda Lina Reading_

Multicultural

* Friday, 18 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Phillipines)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

Wellness

* Wednesday, 16 September 2026, 3:00--5:00 p.m., Burling.
  _Cider Press Social_ **New**
* Wednesday, 16 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Wednesday, 16 September 2026, 4:15--5:45 p.m., Undisclosed Location.
  _Forest Bathing_
* Friday, 18 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Saturday, 19 September 2026, Noon--2:00 p.m., Younker Hammocks.
  Picnic and Craft. **New**
* Monday, 21 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 21 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 22 September 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Saturday, 10 October 2026, All Day, Somewhere.
  _Mental Health Training_.
    * Sign up on Handshake.
    * It's all day, so you will earn 3 tokens.

Misc

* Wednesday, 16 September 2026, 4:30--6:30 p.m., Harris Center.
  _Student Involvement Fair_
* Wednesday, 16 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 17 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Wednesday, 16 September 2026, 7:00--9:00 p.m., Bob's.
  _Open Mic Night_
* Saturday, 19 September 2026, 8:00 a.m--4:00 p.m., Mac and Ward Fields.
  _Grinnelleanore Roosevelts Ultimate Tournament_
* Saturday, 19 September 2026, 9:00 a.m.--Noon, Tennis Courts.
  _Women's Tennis vs. Ripon_
* Saturday, 19 September 2026, 3:00--6:00 p.m., Tennis Courts.
  _Women's Tennis vs. Luther_ 

## Upcoming work

* Due Thursday, 2026-09-17
    * Readings
        * [Characters and strings](../readings/strings)
        * [Submit on Gradescope](...)
        * Note that this reading has not yet been updated for Scamper.
          That should happen this afternoon, at which point the
          reading response will also be posted.
* On Friday, 2026-09-18:
    * New Quiz/LA on compose, cut, and section.
    * MAKEUP of Quiz/LA on tracing
    * MAKEUP of Quiz/LA on decomposition.
    * MAKEUP of Quiz/LA on procedures.

### Administrative Q&A

I won't be here on Friday. Can I take the quiz on Thursday?

> Sure. You can take it during office hours.

Why doesn't `solid-polygon` work?

> I'm not sure. I'm doing some experiments and then asking PM to
  fix it.

Can I turn in work at 1:00 a.m. rather than 10:30 p.m.?

> Yes, but it will cost you a token.

> And you should be in bed at 1:00 a.m.

Will you fix the sample LA?

> Yes.

Will MP2 be ready soon?

> Tonight, I hope. Otherwise, tomorrow night.

Will you give us candy if we ask questions?

> Perhaps.

Do we get feedback on our mini-projects?

> A bit. Set up a meeting if you'd like more.

When will we get our mini-projects back?

> Monday.

How often will we get updates on grades and tokens?

> With each mini-project return. 

On "cold calling"
-----------------

* I use cards to call on you randomly.
* This process ensures that everyone has a chance to contribute (and to be 
  challenged).
* I know that not everyone is comfortable being "cold called", as it were.
* Nonetheless, answering questions you're not quite prepared to answer
  is a skill that you should develop. It happens regularly in the workplace
  (and elsewhere).
* Feel free to say "I'm not sure" or "Give me a minute".
* If it is too stressful, talk to me and we'll work out an alternate.

Meta-analysis of recent labs
----------------------------

In Monday's lab, I asked you to try a variety of experiments with
`rgb-darker`, `rgb-complement`, etc., in which you predicted output
for multiple inputs and then checked the output.

Why might I have structured the lab like that? (TPS)

> Hypothesizing before doing helps us think more carefully about Scheme.

> To explore patterns (or to see if we see patterns). For example,
  `rgb-darker` decreases every value by 16 (unless it's below 16).

> To understand the various functions better.

> To have an opportunity to explore functions in which you can more
  readily "see" the results. This also lets us better understand
  the relationship between the RGB (three number) representation
  and the colors we see.

> To be more efficient in how we use this in the future because
  we understand them well.

> UM - An opportunity to use math.

> To get more familiar with using functions and variables.

> Model: Hypothesize then try is a good approach to understanding.
  We learn more when we compare rather than just look at answers.
  That gives you the opportunity to think more about the function
  (and learn it better).

> Model: When experimenting with a function, you should try a variety
  of inputs.

> "Reverse engineering" functions can help you better understand them.

> The particular functions we explored encouraged us to learn that
  "order matters".

> We learned particular functions (vocabulary).

> Since you were learning vocabulary, you may/should have thought about
  taking notes, putting them on your cheat sheat, etc.

Numbers
-------

The reading had four procedures that convert real numbers to integers.

What are they?

> `round`, `ceiling`, `floor`, and `truncate`.

_Please try to understand what they do._

> `round` rounds to the nearest integer. If the decimal portion is
  less than .5, rounds down; if the decimal portion is greater than
  .5 rounds up; if the decimal portion is .5 it seems to round up.

Examples

> `(round 4.3)` -> 4

> `(round 8.7777)` -> 9

> `(round 2.5)` -> 3

> `(round 3.5)` -> 4 ; seems to always round up

> `(round 7.4999999999999999999999)` -> 

> `ceiling` Rounds up to the next integer.

> `floor` Rounds down to the nearest integer

> `truncate` Throws away the decimal portion

Is there a number for which `truncate` and `floor` return different values?

> "I can't think of one."

> Negative integers Nope.

> Negative decimals. Yes.

> `(floor -1.2)` is -2

> `(truncate -1.2)` is -1

Back to Monday's lab
--------------------

```
(define transform-image-4a
  (lambda (img)
    (pixel-map (lambda (c)
                 (rgb (rgb-red c) 0 (rgb-blue c)))
               img)))
```

Why are there two lambdas in this function?

> You're defining a function that takes only one parameter, which
  we get with the `lambda (img)`.

> `pixel-map` takes a function as a parameter. Hence, the next
  thing should be a function. One way to define functions is with
  a `lambda`.

What does this function do?

> Takes an image as input and removes the green component.

```
(define transform-image-4b
  (lambda (img)
    (pixel-map (o rgb-bluer rgb-redder) img)))
```

What does this function do?

> Takes each pixel in the image and makes it redder then bluer.

Does it matter whether we think of it as "redder then bluer" or
"bluer then redder"?

> Yes. (We may not see it here.) When you're near the maximum and
  minimum of blue and red, you'll see an effect.

```
(define transform-image-4c
  (lambda (img)
    (pixel-map (o rgb-pseudo-complement rgb-greener rgb-pseudo-complement) img)))
```

What does this procedure do?

> For each pixel, compute the pseudo complement, make it greener, then
  take the pseudo complement again.

> Conceptually, this will make it less green.

```
(define transform-image-4d
  (lambda (img)
    (pixel-map #(rgb-subtract %1 (rgb 100 0 100)) img)))
```

What does 4d do?

> Make the image greener by subtracting 100 from the red and blue compoennts.


```
(define transform-image-4e
  (lambda (img)
    (pixel-map #(rgb-subtract (rgb 255 255 255) %1) img)))
```

> 4b seems to subtract each component from 255, computing the "inverse".
  `rgb-pseudo-complement`

```
(define transform-image-4f
  (lambda (img)
    (pixel-map #(rgb-subtract %1 (rgb 255 255 255)) img)))
```

> 4b seems to subtract 255 from each component. Note: If we are subtracting
  255 from each component, we will get an all-black picture. 

Detour: Sectioning
------------------

Some of us don't like the octothorpe-percent syntax for cut, so we have
an alternate for the most common case: Filling in one parameter of a
two parameter procedure.

`(l-s PROC LEFT)` is an alternative to `#(PROC LEFT %1)`

`(r-s PROC RIGHT)` is an alternative to `#(PROC %1 RIGHT)`

Back to the lab
---------------

```
(define transform-image-5a
  (lambda (img)
    (pixel-map (r-s rgb-subtract (rgb 100 0 100)) img)))
```

```
(define transform-image-5b
  (lambda (img)
    (pixel-map (l-s rgb-subtract (rgb 255 255 255)) img)))
```

What do these do?

> 5a makes it greener because it subtracts 100 from the red and blue
  components.  5a is the same as 4d, just written slightly differently.

> 5b makes it black or computes the pseudo-complement [p-c]

```
(define transform-image-5c
  (lambda (img)
    (pixel-map (r-s rgb-subtract (rgb 128 128 128)) img)))
```

> 5c subtracts 128 from every component in the image

> Makes the image "somewhat" darker

```
(define transform-image-5d
  (lambda (img)
    (pixel-map (l-s rgb-subtract (rgb 128 128 128)) img)))
```

> 5d subtracts each component from 128. I'm not sure what that will
  look like. Probably darker pseudo-complement


```
(define transform-image-6a
  (l-s pixel-map rgb-bluer))
```

What is `transform-image-6a`?

> function that takes an image as input and outputs an image 
  (a bluer version of the image)

```
(define transform-image-6c
  (l-s pixel-map (l-s rgb-add (rgb 64 0 64))))
```

What is `transform-image-6c`?

