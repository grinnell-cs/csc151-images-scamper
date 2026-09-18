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
* Discussion part one
* Discussion part two

Administrative stuff
--------------------

### Introductory Notes

* Today is a "talk day". We'll go over lab-like questions, but via a
  combination of a recitation variant ("cold calling") and think-pair-share.
* Note that it is generally a good idea to start mini-projects early
  so that you can ask questions.
* Warning: `#(fun value %1)` notation is new this semester, so the evening
  tutors may be a bit confused by it.

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
  _Middle of Everywhere (Philippines)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Wednesday, 16 September 2026, 7:00--9:00 p.m., Bob's.
  _Open Mic Night_

Wellness

* Wednesday, 16 September 2026, 3:00--5:00 p.m., Burling.
  _Cider Press Social. **New**
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

* Wednesday, 16 September 2026, 4:30--6:30 p.m., Central Campus (Harris Center).
  _Student Involvement Fair_
* Wednesday, 16 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 17 September 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

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

Discussion one
--------------

_Some meta-analysis of the recent labs and a bit of work on numbers._

Why did Sam ask you to check things like `rgb-lighter` on six different
colors, making a prediction and then checking your answer? (TPS)

> Helps us become more familiar with the color functions (and how to 
  use them). [+1]

> Helps us become more familiar with the relationship between the RGB
  numbers and how the colors appear.

> To give you practice interpreting code ("visualizing code in your
  head")

> To get you to look at patterns and try to understand what the patterns
  suggest. [+1]

Detour: Does `rgb-lighter` add to or subtract from each component?

> Subtract? Add? `(rgb 0 0 0)` is black, `(rgb 255 255 255)` is white,
  so lighter should add.

Back to the former question: Why so much work on each function?

> To become more facile with RGB colors.

> To practice working with partners.

> UM - Use math!

> Things are going to get hard, these are comparatively easy.

> Helps us remember the functions. [+1]

> Gives us a strong foundation for future work. [+1]

> Gets you thinking about note-taking (and flashcards).  "What if Sam
  asks us a question about `rgb-bluer`. Will I be prepared to answer?
  What should on my cheat sheet." (I'm building vocabulary.)

> Model what to do what you encounter a new function. It's good to
  try it out on a variety of values. It's also good to think about
  what it does on "extreme" (atypical?) values.

> Model an approach to learning new functions: Predict and then test.

> UMTMRGB - Use Math To Make Red, Green, Blue

_Let's apply the "check out new functions" model to a few mathematical
functions._

What are functions that eliminate the fractional portion of numbers,
converting, say `3.5` to `4`  or `3`.

> `round`, `floor`, `ceiling`, `truncate`.

What do each of these do?

> `round` turns a decimal number into the closest integer.

What should `(round 3.5)` return?

> 4

What should `(round 2.5)` return?

> 3

Back to "what do each of these do?"

> `floor` turns a decimal number into an integer by "rounding down".

Is there a number for which `round` and `floor` give different values?

> `(round 3.8)` will give 4, but `(floor 3.8)` will give 3.

Back to "what do each of these do?"

> `ceiling` turns a decimal number into an integer by "rounding up".

> `truncate` turns a decimal number into an integer by "rounding down" (No)

> `truncate` turns a decimal number into an integer by "throwing away everying
  after the decimal" (Yes)

Is there a number for which `truncate` and `floor` return different values?

> A negative number.

> `(floor -2)` is -2

> `(truncate -2)` is -2

> A negative number _with a decimal point_.

> `(floor -2.3)` is -3

> `(truncate -2.3)` is -2

Discussion two
--------------

_Wrap up Monday's lab (starting with exercise 3) as a group._

```
(define transform-image-4a
  (lambda (img)
    (pixel-map (lambda (c)
                 (rgb (rgb-red c) 0 (rgb-blue c)))
               img)))
```

Why are there two lambdas in this procedure?

> In the first one, it's the input to `transform-image-4a` (as we
  normally do when writing procedures).

> For the second one, there's a color input. And that's because the
  first argument to `pixel-map` should be a _function_ that transforms
  a color to a color. (Precise: an RGB to an RGB.)

What does this procedure do?

> Get rid of the green.

```
(define transform-image-4b
  (lambda (img)
    (pixel-map (o rgb-bluer rgb-redder) img)))
```

What does this procedure do?

> Gets rid of the green? (Reduces the green / enhances the red and blue)

> For each pixel in the image, makes it redder and then bluer.

```
(define transform-image-4c
  (lambda (img)
    (pixel-map (o rgb-pseudo-complement rgb-greener rgb-pseudo-complement) 
               img)))
```

What does this procedure do?

> Complements each component (subtracting from 255), then makes it greener
  (adding 32 to green component, subtracting 16 from red and blue), 
  complements again.

> Makes it less green

```
(define transform-image-4d
  (lambda (img)
    (pixel-map #(rgb-subtract %1 (rgb 100 0 100)) img)))
```

What does this do?

> Fails miserably. (Correct, if you're using an old version of Scamper.)

What _should_ this do?

> Decrease the red and blue component of each pixel by 100, making
  it less red/blue, seemingly greener.

```
(define transform-image-4e
  (lambda (img)
    (pixel-map #(rgb-subtract (rgb 255 255 255) %1) img)))
```

What does this do?

> Subtract 255 from all the colors - Gives black

> UM: Use math, unusually manipulate.

> Subtract each component from 255. This is the same as `rgb-pseudo-complement`

Left section and right section
------------------------------

* The most common way we cut procedures is to take a two-parameter procedure
  and fill in one of them.
* E.g., `#(+ 2 %1)` or `#(- %1 5)`.
* As an alternate, we can use `(l-s FUNC LEFT)`, which behaves the same
  as `#(FUNC LEFT %1)` and `(r-s FUNC RIGHT)`, which behaves the same as
  `#(FUNC %1 RIGHT)`.
* Easier to remember, easier to read.

Back to question 5
------------------

```
(define transform-image-5a
  (lambda (img)
    (pixel-map (r-s rgb-subtract (rgb 100 0 100)) img)))
```

What does this do? 

> Subtracts 100 from red and blue, as in 4d above.

```
(define transform-image-5b
  (lambda (img)
    (pixel-map (l-s rgb-subtract (rgb 255 255 255)) img)))
```

What does this do?

> Subtracts each pixel from 255, computing the pseudo complement, as in
  4e above.

```
(define transform-image-6a
  (l-s pixel-map rgb-bluer))
```

What does this do? What is this?

> This is a procedure that takes an image as input and makes each pixel
  bluer.

```
(define transform-image-6c
  (l-s pixel-map (l-s rgb-add (rgb 64 0 64))))
```

What is this and what does it do?

> A procedure that takes an image as input (because we're sectioning
  pixel map)

> For each pixel, we add 64 to red and blue (oh, there's a sectioned
  `rgb-add`.

```
(define transform-image-6cprime
  (l-s pixel-map (l-s rgb-subtract (rgb 64 0 64))))
```

What about 6cprime?

> Subtract red and blue from 64


```
(define transform-image-6d
  (l-s pixel-map (o rgb-darker
                    rgb-darker
                    (l-s rgb-add (rgb 64 0 64)))))
```

What is this and what does it do?

> Add 64 to each, then makes darker twice.

Will this be on the quiz on Friday?

> Yes!

Why use this form?

> Concise! Eventually easy to read.

```
(define image-transform-6d
  (lambda (img)
    (pixel-map (lambda (color)
                 (rgb-darker (rgb-darker (rgb-add (rgb 64 0 64) color))))
               img)))
```

Was this a good use of your time?

* Yes
* No
* Abstain
