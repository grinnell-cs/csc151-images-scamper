---
title: Random language generation
summary: |
  We explore Scheme's `random` procedure and ways to use that procedure
  and a variety of associated procedures to generate language.  We 
  consider the implications of having a procedure that does not behave
  consistently.  We also simulate some games of chance.
link: true
todo: 
  - It's generally the right level of difficulty and the right length.
  - Consider using some of the infamous lac language generating procs.
---

## Important procedures

* `(random n)`: given a positive integer, generate a difficult-to-predict integer value between 0 (inclusive) and `n` (exclusive).

## Preparation

<!--
a. Decide who is side A and who is side B.  

A side: [random-language-a.rkt](../code/labs/random-language-a.rkt)

B side: [random-language-b.rkt](../code/labs/random-language-b.rkt)

b. Decide who will submit the lab.
-->

a. Introduce yourself to your partner, discuss strengths and weaknesses, decide how you wll approach the lab.

b. Download the lab.

* [random-language.scm](../code/labs/random-language.scm)

c. Review the procedures included in the lab to make sure you
understand what they are intended to do.

## Acknowledgements

This laboratory is closely based on [an earlier lab on randomness from Spring 2025](https://rebelsky.cs.grinnell.edu/Courses/CSC151/2026Fa/labs/random-language.html). That laboratory was inspired by [an earlier lab on randomness from the spring 2018 version of CSC 151](https://www.cs.grinnell.edu/~rebelsky/Courses/CSC151/2018S/readings/randomness).  That lab was, itself, based on a sequence of earlier labs on randomness and simulation.

The laboratory was updated in Fall 2026 to accommodate the switch from DrRacket to Scamper, which included the need to simulate a side-effecting "print" procedure. It may still have some infelicities. 

For those who care, the punny `pair-a-dice` first appeared in [an
exercise in spring
2001](https://www.cs.grinnell.edu/~rebelsky/Courses/CSC151/2001S/Labs/simulation.html).
It then resurfaced (with a definition) in [a Web-game exercise in
fall
2002](https://www.cs.grinnell.edu/~rebelsky/Courses/CSC151/2002F/Labs/simulation.html).
