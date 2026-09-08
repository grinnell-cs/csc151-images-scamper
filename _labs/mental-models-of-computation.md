---
title: Mental models of Scheme programs
summary: |
  In this laboratory, we will further develop our mental model of computation of Scheme programs by considering how `define` statements introduce identifiers into our programs.
---

In the reading, we developed an initial mental model of computation for Scheme programs by examining how expressions compute.
In today's lab, we'll gain practice using that model to predict the behavior of simple Scheme programs.
We'll then enhance that model with the `define` construct that we have seen throughout our readings.

## Logistics

You will do most labs on the computer.  You will submit those labs on Gradescope.  In most cases, we will ask you to upload a file or to copy a procedure you've written.  _It is fine if the code does not work perfectly (or at all).  Just let us know that you're aware of the problems._  Most of the time, you will only turn in a few of the exercises.

Other labs, such as this one, you will do some/most of your work on paper and submit the paper at the end of class.

While we would prefer that you finish the lab with your partner, if you decide to finish the lab separately, you may do so.  Please make sure to cite your partner when submitting the lab.

In most labs, we will have distinguished driver/navigator roles where:

+   The driver is the person "at the keyboard."
    In the context of a paper-based assignment, they should be the one writing down a final solution.
+   The navigator is the person guiding the navigator and checking their work.

Each exercise will designate person A or person B to be the driver.  Person A should be the person closest to the board.

## Preparation

a. Introduce yourself to your partner.

b. Log into the computer.

c. Log into Gradescope and open the entry associated with this lab.

d. Start Scamper.

e. If you were already logged in to Scamper, reload the page so that you get the most recent version of Scamper.

## Notes

As you may recall from [the reading](../readings/mental-models), in our mental model of computation, we trace simple expressions by evaluating all the arguments to each function and then applying the function to them. Here's an example from the reading.

```
    (* (+ 1 2) (+ 4 1))
--> (* 3 (+ 4 1))
--> (* 3 5)
--> 15
```

## Exercises

### Exercise 1: Tracing Scheme expressions

**Driver: _A_**

Consider the following Scheme expression.

```
(* (+ 1 2) (- (* 3 4) (* 2 (+ 1 1 1))))
```

a. Enter a step-by-step evaluation of this expression (we call this a _trace_ or _evaluation trace_) like the one above, assuming that we evaluate arguments from left to right.  If you're not sure what we're asking for, grab one of the course staff (professor or mentors).

b. Scamper includes a tool that permits you to trace some kinds of code. (Warning: It may have some bugs.)  Let's try it. 

i. Enter that expression in the definitions pane.

ii. Click somewhere within the expression.

iii. Click on the footsteps between the Run button and the REPL button. You should see a new pane appear, something like the following.

![A window pane labeled 'Step'. The expression '(* (+ 1 2) (- (* 3 4) (* 2 (+ 1 1 1))))' appears highlighed at the top of the pane, along with another copy immediately below it. At the bottom of the pane are controls for rewind, back, forward, and fast forward. There is also a progress bar that reports 1/7.](../images/step-pane.png).

iv. As you might expect, you can use the controls at the bottom of the pane to step through the evaluation. Do so now, verifying that your steps matched those that Scamper shows.

### Exercise 2: From Math to Scheme 

**Driver: _B_**

Consider the following arithmetic expression.

$$1 + (-2 + (3 + (4 + -5)))$$. (Driver B)

a. Translate the expression into an equivalent Scheme expression.

b. Give the step-by-step evaluation of that Scheme expression to a final value.  (Do this by hand; do not use the Scamper tracing tool.)

c. Check your work in Scamper.

### Exercise 3: Making a statement

**Driver: _A_**

In our initial Scheme work, we learned that `define` is a construct that allowed us to introduce _identifiers_ or _named values_ into our programs.  Each identifier/name is associated with ("bound to") a value.  (Some people call these "variables"; since they don't vary, we will try to avoid that name.)

```racket
> (define x 10) ; binds the identifier/name x to the value 10
> (+ x 1)
11
```

Let's go through the process of trying to understanding how `define` in Scheme programs.
Along the way we'll update our mental model of computation to account for what we observe in our experimentation.
Note that this problem is a microcosm of the language-learning experience.
As you learn new constructs and techniques, you'll find that your current understanding of how program works does not account for these things, and you will evolve your learning.
Usually this evolution amounts to _abstracting_ your understanding so that it applies to more scenarios than before!

At first glance the `define` construct above looks similar to _function call_ form of expressions:

```racket
(<identifier> <expr1> ... <exprk>)
```

If a `define` construct is an expression, we should be able to use use `define` anywhere an expression is accepted.
For example, perhaps we can get the same effect as the code above by _inlining_ the `define` into the addition:

```racket
> (+ (define x 10) 1)
```

Try this example out in Scamper.  What is the output that you receive or what errors are produced if the code is invalid? (Enter your answers to these questions on Gradescope.)

After you've finished, read [the notes on definitions](notes-on-definitions) at the end of the lab.

### Exercise 4: Sequencing definitions

**Driver: _B_**

Does order of definition matter? Let's try some experiments to see.

a. Consider the following sequence of definitions, which we might enter in the definitions pane.

```
(define x 10)
(define y (* 3 x))
(list x y)
```

i. What output do you expect to see when we click "Run"? (Enter your answer on Gradescope.)

ii. Check your answer experimentally and record the results.

b. Does the order matter? That is, can we define `y` in terms of `x` without first defining `x`? Let's see. Consider this modification to the sequence.

```
(define y (* 3 x))
(define x 10)
(list x y)
```

i. What do you expect to happen when we click "Run"? (Enter your answer on Gradescope.)

ii. Check your answer experimentally and record your results.

c. What happens if we attempt to redefine a variable? Let's check that expermenally, too.

```
(define x 10)
(define y (* 3 x))
(list x y)
(define x 5)
(list x y)
```

i. What do you expect to happen when we click "Run"? (Enter your answer on Gradescope.)

ii. Check your answer experimentally and record your results.

### Exercise 5: Tracing procedure calls

**Driver: _A_**

As you may recall from the reading, we can also trace function calls, at least for functions we define. Here's the standard tracing strategy for function calls.

i. Evaluate all the argument expressions from left to right.

ii. In the body of the function, replace all the named parameters with the corresponding argument.

iii. Substitute this new expression for the function call.

Consider the following definition.

```
(define sqr
  (lambda (x)
    (* x x)))
```

Here's a simple trace of a call to `(sqr (+ 1 1))`.

```
    (sqr (+ 1 1))
--> (sqr 2)
--> (* 2 2)
--> 4
```

a. Trace the following expression.

```
(sqr (* 2 (+ 1 3)))
```

b. Confirm your trace with Scamper.

c. Trace the following expression.

```
(sqr (sqr (sqr 2)))
```

d. Confirm your trace with Scamper.

### Exercise 6: Tracing procedure calls, revisited

**Driver: _B_**

Consider the following definitions.

```
(define x 5)
(define y (+ 1 9))
(define fun
  (lambda (x y)
    (+ (* 2 x) (* 3 y))))
```

a. Trace the call `(f 2 3)`.

b. Check your answer in Scamper. If Scamper gives a different sequence, take some notes as to why.

c. Trace the call`(f y x)`

d. Check your answer in Scamper. If Scamper gives a different sequence, take some notes as to why.

Submitting your work
--------------------

Make sure to add your partner!

Notes on definitions
--------------------

As you may have noted, Scamper does not permit you to use a `define` structure as an expression. Hence, we should conclude that that `define` is _not_ a function and that a `define` structure is _not_ an expression, even though it looks exactly like one.  Consequently, we must ask ourselves: what syntactic category is a `define` and how does it relate to expressions?

It turns out that `define` is an example of a syntactic category distinct from expressions; it is a _statement_!

> A _statement_ is a construct that produces an _effect_ in our program.

We'll have more to say about "effects" in our programs later in the course.  For now, we'll say that the "effect" of a `define` statement is simple: it binds a value to an identifier.  In the example that started this problem, we bound `10` to the identifier `x`.  Consequently, whenever we mention `x` in our program, we really mean the value that is bound to that identifier, `10` in this case.

We will eventually encounter other things that can appear immediately after an open parenthesis that are not quite functions, but that behave somewhat like functions.
