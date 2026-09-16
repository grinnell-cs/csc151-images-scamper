---
title: "EBoard 08: Numbers (Section 3)"
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

* Thursday, 17 September 2026, 11:00 a.m., Herrick Chapel.
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

> Perhaps. Lolipops and gummi-bears.

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

> To encourage us to learn about these procedures through exploration,
  rather than just reading.

> The ordering may have been carefully structured because darker and
  lighter modify all three components in the same way, but redder,
  greener, and bluer modify the components in different ways

> Model: "Don't just type stuff in, think about it." You will likely learn
  the functions better if you try them thoughtfully (hypothesize then
  run) rather than just running them. [+2]

> Practicing with moderately simple Scheme expressions better prepares
  you for the more complex things we'll soon get to.

> UM - Use math

> Permitted us to think in a bit more detail about the likely processes.

> Also encouraged us to think about the relationship between the RGB
  values and the colors we see on the screen.

> We learn the vocabulary well enough to use the functions in the 
  future. (Hint: They should be in your notes and/or on your cheat
  sheets and/or flash cards.)

> Knowing the functions early helped us better understand composition
  and octothorpe-percent cutting. `#(rgb-average (rgb 255 255 255) %1)`
  
> Side note: `#hashtag` is a hashtag, `#` is a hash (or mesh, or pound,
  or number sign, or octothorpe)

> As in every lab, it's an opportunity to put what you've read about
  in practice. (Part of the theory of the course: You learn better by
  doing than (just) reading or listening to lecture.)

> Model: Trying different different colors gave us a deeper understanding of
  what the functions did. Generally: When you're exploring a new procedure,
  you should try it on more than one or two inputs, and you should think
  about "difficult" inputs. For example, what happens when we make white
  or black lighter?

> Reminds us that there are a _lot_ of functions.

> Learned about manipulating colors and images.

> Learned about making functions in different ways.

> Identified patterns in output. Identifying patterns is one of the
  important skills in computational thinking.

Numbers
-------

Four important functions for converting decimal (real) numbers to integers.
`round`, `floor`, `ceiling`, `truncate`.

What do they do?

> `round` - takes a real number and returns the closest integer.
  At .5, it will return the larger of the two equally close integers.

> `floor` - take a real number and returns the closest integer that
  is less than or equal to that number. (rounds down)

> `ceiling` - opposite of floor: returns the closest integer that's
  larger or equal to than it

> `truncate` - removes everything after the decimal point

What is the difference between `truncate` and `floor`? Is there a number,
`x`, for which `(truncate x)` and `(floor x)` are different?

> Yes, negative numbers.

Back to Monday's lab
--------------------

```
(define transform-image-4a
  (lambda (img)
    (pixel-map (lambda (c)
                 (rgb (rgb-red c) 0 (rgb-blue c)))
               img)))
```

Why are there two lambdas in this function? (TPS)

> `transform-image` is supposed to take an image as input. The
  `lambda (img)` is our normal starting point for things that
  take an image as input.

> The `(lambda (c) (rgb ...))` transforms a color by removing
  the green.

> `transform-image` needs a function that converts a color to another
  color (more precisely, and RGB to another RGB), and we build functions
  with `lambda`.

> The color transformation is "anonymous" (unknown) not named

```
(define transform-image-4b
  (lambda (img)
    (pixel-map (o rgb-bluer rgb-redder) img)))
```

> This is a procedure that takes image as input and makes each pixel
  redder and then bluer.

Does it matter whether we do `(o rgb-bluer rgb-redder)` or
`(o rgb-redder rgb-bluer)`?

> Most of the time, no, but if the red or blue component was large or
  small, there would be a small difference (which we might or might
  not see).

```
(define transform-image-4c
  (lambda (img)
    (pixel-map (o rgb-pseudo-complement rgb-greener rgb-pseudo-complement) img)))
```

What does this do?

> `transform-image-4c` takes an image as input and for each pixel,
  computes the pseudo-complement, makes it greener, and computes the
  pseudocomplement again.

> Because we're complementing it twice, this makes it less green /
  more purple.

```
(define transform-image-4d
  (lambda (img)
    (pixel-map #(rgb-subtract %1 (rgb 100 0 100)) img)))

(define transform-image-4e
  (lambda (img)
    (pixel-map #(rgb-subtract (rgb 255 255 255) %1) img)))
```

> `4d` takes an image as input and subtracts 100 from the red compoent
  of each pixel and 100 from the blue component of each pixel

> This will make it appear more green.

> `4e` takes an image as input and subtracts each component from 255

> This computes the pseudo complement

```
(define transform-image-4f
  (lambda (img)
    (pixel-map #(rgb-subtract %1 (rgb 255 255 255)) img)))
```

> This subtracts 255 from each component, making all the components 0, 
`(rgb 0 0 0)` is black.

Detour: Section
---------------

Not everyone likes the new #% syntax, so we're also providing an alternative
for the most common uses: Filling in one parameter of a two parameter function.

`(l-s FUN LEFT)` is the same as `#(FUN LEFT %1)`

`(r-s FUN RIGHT)` is the same as `#(FUN %1 RIGHT)`

Problem 5
---------

```
(define transform-image-5a
  (lambda (img)
    (pixel-map (r-s rgb-subtract (rgb 100 0 100)) img)))
```

> A different way to write "take an image and subtract 100 from the red
  and blue components of each pixel"

```
(define transform-image-5b
  (lambda (img)
    (pixel-map (l-s rgb-subtract (rgb 255 255 255)) img)))
```

> A different wa to write `image-pseudo-complement`
