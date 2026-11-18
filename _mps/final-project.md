---
title: (Mini-)Project 6
subtitle: Radical bricolage
summary: |
  At this point in your career, you've learned a variety of techniques
  for writing algorithms and for working with text images. This project
  provides an opportunity for you to push yourself in new directions.
collaboration: |
  Each group should submit their responses to this project together. You may
  consult other students in the class as you develop your solution.  If you
  receive help or advice from anyone, make sure to cite them in your responses.
link: true
---
The starter code for this project is [final-project.scm](../code/mps/final-project.scm).

Preliminaries
-------------

While the primary focus of this course is on learning how to write, describe, test, and analyze algorithms, our secondary focus is on writing algorithms that generate "interesting" images. We've created images with basic shapes, transformed existing images using color transformations, designed images as functions from positions to colors, and even wrote procedures that work with individual pixels.

At the same time, you've learned a variety of techniques for doing complex computations, particularly a variety of kinds of recursion (over lists, arbitrarily nested lists, pair structures, vectors, and numbers). You've also considered a variety of ways to store compound/complex data, including lists, vectors, pairs and pair structures, nested lists, and hash tables.

We also hope that you've learned a bit about working with other people as well as the different kinds of strengths that people bring to problem solving.

It is now time for you to bring your skills and knowledge together to in a new way. We are going to use our knowledge of CS in the service of a task both creative and analytic. In particular, we are going to explore a process called "Radical Bricolage". 

Coding as analysis
------------------

As you may know, a multitude of (mostly) hidden design decisions go into each work an artist makes. As the audience for the work, we might develop better appreciation of the work as we "tease out" some of those design decisions. One way that both artists and art historians sometimes analyze works and their design decisions is to make variants of the work. "What happens if I move this one thing?" "What happens if I use a slightly different color?" "A different aspect ratio?" Poets and other writers make similar kinds of decisions.

One of the nice things about computers is that they can let us write procedures that make systematic variants of something. For example, rather than drawing one variant of an image by hand, we can write a proram that makes dozens or even hundreds of variants. The ability to generate variants helps us better understand the original image. At the same time, it lets us "create" in that we can now make a Warholesque trove of variants.

How many is enough? We'd like you to write a procedure that can make at least 1,000 different (but related) work, all based on a single starting image. Why "at least 1,000"? In the original version of this project, it was so that we could term it "a procedure is worth a thousand pictures", a play on the aphorism "a picture is worth a thousand words".

Project specification
---------------------

Our computational image-making skills are not yet at the level that we can use them to make realistic representational art. Hence, in this project, we will focus on abstract art, particularly somewhat geometic abstract art. In part, such art matches our knowledge and skill sets. In part, analyzing such art may help us better understand what makes a particular work compelling.

In recent semesters, we've applied the "code as analysis" technique to the works of Hilma af Klint.  As Wikipedia tells us, "Hilma af Klint was a Swedish artist and mystic whose paintings are considered among the first abstract works known in Western art history. A considerable body of her work predates the first purely abstract compositions by Kandinsky, Malevich and Mondrian." You can find a copy of her _Catalogue Raisonné_ in the back of the room. 

This semester, we're allowing you to explore a bit more broadly. Pick some creative work or sets of creative work (e.g., a painting or a few paintings by an abstract artist, a collection of Haiku or other poetry) that you would like to use as the starting point for your exploration. Your goal is to write a procedure that can generate a variety of variants of the work. In part, your goal is to be able to make individualized versions of the wwork. In part, your goal is to be able to better understand the underlying ideas in the work.

Write a procedure, `(variants n _other-params_)`, that takes a non-negative integer and any additional parameters you choose as input and generates something based on your original work(s). Different values of `n` should give observably different images. The same set of parameters should always give the same result.  You should support values of `n` between 0 and 999, inclusive. (You may also support other values of `n`.) 

You should find ways to use the following in your project.

* Data abstraction
* Vectors
* At least two useful recursive procedures. (You can use any kind of recursion: list, numeric, vector, hash, tree, ...).

Additional requirements
-----------------------

### Design plans

Rather than just building whatever comes to mind, you should begin by coming up with a "design document" in which you sketch the goals of your project. Your document will have two parts: A textual description of what you are trying to achieve and how you anticipate doing so as well as a hand-drawn or hand-written sketch (or sketches) of the original work(s) and what you will vary.

### Presentation

Your group will give a 5-minute presentation to the class on your project on Mondy, 7 December 2026. In your presentation, you should plan to discuss the original work, your design plans, show some images you geneated, and highlight one or more pieces of code you are most proud of. You should also be prepared to answer questions.

You must submit the slide deck for your presentation (PDF or Powerpoint) along with your project file.

### Time log

This project is scheduled for slightly more than a week of class. We ask you to spend about three hours of out-of-class time plus about two hours of in-class time per team member, which includes planning, writing, development, and presentation preparation. No one should spend less than four hours. No one should spend more than ten hours. Please keep track of your time as you go in a time log that includes start time, stop time, elapsed time, and activity . Here's an example.

```
Taylor  2025-04-24 09:00-09:30  30 min  Met with reference librarian 
Taylor  2025-04-24 15:00-15:15  15 min  Found some good images
Taylor  2025-04-26 20:00-21:00  60 min  Discussed project with team
Taylor  2025-04-27 09:00-09:30  30 min  Started designing concentric-circles
Taylor  2025-04-28 11:15-12:00  45 min  Wrote concentric-circles; buggy
...
Toby    2025-04-25 14:00-14:15  15 min  Asked art history friend for ideas
Toby    2025-04-26 20:00-21:00  60 min  Met with team; they chose my idea!
Toby    2025-04-29 09:00-10:00  60 min  Helped Taylor debug concentric-circles
...
```

### Learning summary

Each group member should individually reflect on what they learned in the project.  You might consider what you learned about the work you are studying, programming, teamwork, yourself, etc. The reflection is due on Tuesday, 8 December 2026.

What to submit
--------------

**Your code**, saved as `final-project.scm`. The file should include your _time log_, your _design discussion_, and _any notes you have on "outstanding code"_.

**The original work(s)** that you are using as an inspiration.

**Your sketch or sketches** as you reflect on the original image and how you will generalize it.

**Your presentation** as a PDF or PowerPoint document. Please pick a team name and name it `Team.pdf` or `Team.pptx`, as appropriate.

**Four examples of the results of your work**. If you are producing images, make them at least 600x500 no more than 3000x2000. Please name them after your team, such as `Team01.png`, `Team02.png`, `Team03.png`, and `Team04.png`, substituting the name of your team.

**Learning summary** (submitted separately and individually). In two or three paragraphs, summarize what you learned from doing this project.  You will enter this on the assessment.

Setting project goals
---------------------

As you might expect, it's important that you have working code for this assignment. Hence, we recommend that you build your project gradually. It is not essential that you capture every aspect of the image (e.g., brush strokes, careful blends, even some of the lines).

Start with what people in industry call a "minimum viable product". You should focus on the central design components and make sure that you have a way of varying the work appropriately.

Once you've completed that part, start adding additional aspects. Perhaps you've noticed an interesting blend in one part. Perhaps there's a curve you want to add.

Only if there is time will you try to capture every aspect of the work.

Note that you should make many of these decisions in advance, as you decompose the problem. 

* _What should be the core of our project?_
* What can we add once we've completed that part?
* If everything goes perfectly and we still have time, what else might we add?

Rubric
------

_This rubric is approximate. Our goal is that everyone completes it successfully._

_There are no redos available for this project._

### Required 

```
[ ] Includes all necessary files 
    [ ] `image-series.rkt`
    [ ] The original work
    [ ] The sketch or sketches
    [ ] A PowerPoint deck
    [ ] Four variants in an appropriate form
[ ] Project runs and produces different values for different values of `n`
[ ] Includes design description
[ ] Time log appears reasonable
[ ] Includes two recursive procedures
[ ] All team members document spending at least 4 hours on the project
    (affects individuals, not group)
[ ] Presentation is approximately 5 minutes
[ ] Presentation includes goals and code description
[ ] Answered questions well
[ ] Code correctly formatted (a few mistakes are permissible)
[ ] Post-reflections (affects individuals, not group)
```

Questions and answers
---------------------

Should we use the starter code?

> Yes.

What do you mean by "variants of the original image"?

> You might use different colors (or different combinations of colors), different ratios of shape sizes, manipulations of the pixels (e.g., modifications of the patterns she uses across large areas), and other things like that. Your images should still be recognizably similar to the original image.

Can we use `random` in this assignment?

> No.

What if one of our team members works too few or too many hours?

> They will not receive credit.

How do variants help us understand the initial work? It was written matter-of-factly, however I am still confused on how that is analysis.
  
> Hypothetically, as you build variations, you'll come to better understand the design choices the creator made. For images: do other other pairings of colors seem less compelling, too relaxing, ...? In some sense, we're generating something like the artist's sketchbook for the piece.
  
Does working individually (stated at the beginning of the MP) mean that we can't work with people outside of our group, or does that mean we can't work directly with our team members?

> Working individually means that you choose to form a team of one.

> You can always talk to others provided you cite them.

How would you split up the work?

> I'd suggest that you work as a team to decide upon the "big picture" of the project and how to decompose it. If you've decomposed well, you could have individuals or pairs work on each part.

> However, I'll note that in the past the best teams seemed to work together (or at least nearby) most of the time.

How should the in-class presentation be different from the coding and documentation portion?

> Your professor is the audience from the coding and documentation.  Your classmates (and any visitors) are the audience for the presentation.  In the presentation, make sure to demo your images and something cool about your code.

Should the time log be in a separate file or just somewhere with the rest of the code?

> There's a space in the code for the time log.

How can we work on the same Scamper file from different computers at the same time?

> You can ask me for a group account and cross your fingers. (I don't know what happens.)

> Mostly work together?

Do you have a recommendation for how to make 1000 different versions?

> Choose three things that you can have ten variants of (e.g., a color,
  a size, which texture). Use the ones digit to choose the first variation.
  Use the tens digit to choose the second variation. Use the hundreds
  digit to choose the third variation.

Acknowledgements
----------------

Although "A procedure is worth 1,000 pictures" has long been a part of the image-making versions of CSC-151, a new form of the project was introduced in Spring 2024.  the use of the project as an analysis tool was inspired by the works of James Clayson in his explorations of "Radical Bricolage". The expanded version that lets you choose the artist and choose works other than images was added in Fall 2026.
