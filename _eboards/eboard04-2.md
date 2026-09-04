---
title: "EBoard 04: RGB Colors (Section 2)"
number: 4
section: eboards
held: 2026-09-04
link: true
---
# {{ page.title }}

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_You should know the start-of-class algorithm_

_Approximate overview_

* Administration
* Q&A from readings
* Lab
* Quiz

Administrative stuff
--------------------

### Introductory Notes

* Scamper is now on version 4.3.0. Make sure that's the version you're
  running. If not, reload.
* We're all getting used to the Scamper environment (including me).
    * There will be some unexpected infelicities.
    * Don't worry, it will get smoother and more natural.
    * The developers are happy to make changes, so let me know what changes
      you'd like to see.
* Some of you struggled to figure out how to rotate one of the triangles.
  Note that there's a help system in scamper.
    * _Sam demos_
* I finally remembered to release the grades on reading responses 
  (for today's reading; the others are forthcoming).
* When you book meetings, I'd prefer that you book 15-minute sessions
  rather than 30-minute session.

### Upcoming activities

Scholarly

* Thursday, 10 September 2026, 11:00 a.m.--noon, JRC 101.
  _Scholar's Convocation: Ruth Feingold_
* Thursday, 10 September 2026, 4:00--5:00 p.m., JRC 101.
  _The Department of Revenge_ (NY Times Reporter)

Artistic/Cultural

Multicultural

* Friday, 4 September 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Algeria)_
* Tuesday, 8 September 2026, Black Cultural Center (10th and Park).
  _BCC Bridge: First Year Connections_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 5 September 2026, 1:00 p.m.--4:00 p.m., Rosenbloom Field
  _Men's American Football vs. Mount Mercy_
* Saturday, 5 September 2026, 1:00--3:00 p.m., Springer Field.
  _Men's Unamerican Football vs. Hamline_
* Saturday, 12 September 2026, Grinnell Track.
  _Les Duke Invitational (Cross Country)_

Wellness

* Monday, 7 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_
* Monday, 7 September 2026, 8:00--9:00 p.m., Prayer Garage.
  _Meditation Group_
* Tuesday, 8 September 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Tuesday, 8 September 2026, 5:00--8:00 p.m., HSSC North Atrium.
  _Therapy Dogs_
* Wednesday, 9 September 2026, 6:30--8:00 p.m., Bear Dance Studio.
  _Brazilian Jiu-Jitsu_

Misc

* Wednesday, 9 September 2026, 8:00 p.m.--9:00 p.m., Noyce 3rd.
  _Mentor Session_
* Thursday, 10 September 2026, 8:00 p.m.--9:00 p.m., Noyce 3rd.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Friday, 4 September 2026, 7:00--9:00 p.m., Darby.
  _Volleyball vs St. Benedict_ (UPDATED)
* Saturday, 5 September 2026, 11:00 a.m.--1:00 p.m., Darby.
  _Volleyball vs. St. Catherine_
* Saturday, 5 September 2026, 3:00--5:00 p.m., Darby.
  _Volleyball vs. Simpson College_
* Sunday, 6 September 2026, 11:00 a.m.--1:00 p.m., Springer Field.
  _Women's Unamerican Football vs. St. Mary's_
* Wednesday, 9 September 2026, 4:30--6:00 p.m., Springer Field.
  _Women's Unamerican Football vs. Coe_

## Upcoming work

* Due Tuesday, 2026-09-08:
    * [Today's lab](https://www.gradescope.com/courses/1370413/assignments/8567363)
        * [RGB colors](../labs/rgb-colors.html)
        * Submit what you have at the end of class.
    * [Reading responses](https://www.gradescope.com/courses/1370413/assignments/8567378)
        * [Computation via expressions](../readings/computation-via-expressions.html)
	* [Mental models of computation](../readings/mental-models.html)
* On Friday, 2026-09-11:
    * Quiz/LA on tracing (next Wednesday's class).
    * REDO Quiz/LA on decomposition.
    * REDO Quiz/LA on procedures.

## Administrative Q&A

Can I get a token for attending _event_?

> Tokens are only available for the events I mention in class (or on Teams).

> If you think an event falls within the broad guidelines, suggest it to
  me (preferably before class) and I'll add it if I agree.

Friday PSA

* Choose what is right for you, not what you think others expect of you
  (or what you need to do to "fit in").
* Moderation!
* Please take of yourselves, if not for you, then for the people who care
  about you (or will care about you).
* Consent is essential! (Consent is also nearly impossible if either party
  is impaired.)

Q&A from Readings
-----------------

Will we be tested on the terminology in the reading Design & Color?

> No.

What would LAs look like for problems related to color?

> Color is not an explicit LA topic. Colors will only be used as part of other topics.

Can we go over `remove-blue`?

> Sure.

What is an alpha value?

> The alpha value is transparency/opacity.

> We'll explore this by overlaying different opacities of red on blue.

        (overlay (solid-circle 100 (rgb 255 0 0 255))
                 (solid-square 100 (rgb 0 0 255)))
        (overlay (solid-circle 100 (rgb 255 0 0 192))
                 (solid-square 100 (rgb 0 0 255)))
        (overlay (solid-circle 100 (rgb 255 0 0 128))
                 (solid-square 100 (rgb 0 0 255)))
        (overlay (solid-circle 100 (rgb 255 0 0 64))
                 (solid-square 100 (rgb 0 0 255)))
        (overlay (solid-circle 100 (rgb 255 0 0 0))
                 (solid-square 100 (rgb 0 0 255)))

What happens if we go above 255?

> It complains that it's not a valid RGB component.

Lab
---

If you finish early, do some of the extra problems.

It's also okay if you don't finish! Since today is a short class, you 
probably won't finish.

At the end, follow the "end of lab" algorithm.

* Save the file to disk.
* Upload it to Gradescope
* Wait for the autograder. (Today's just says it ran; future ones will
  say more.)
* Email it to your partner.

Quiz
----

If you finish early, you can leave. Have a great day!

I would recommend that you stop at 10:50, unless you are close.
"Cut your losses", as it were.
