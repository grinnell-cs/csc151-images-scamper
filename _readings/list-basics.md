---
title: List basics
summary: |
  We consider some basic issues of Racket's _list_ data type, which
  is used to collect multiple values.  We explore the ways to create
  lists and a few operations used to manipulate lists.
prereqs: |
  [An abbreviated introduction to Scheme](../readings/intro-scheme).
  [Data types](../readings/types).
---

## Introduction

In your initial explorations with Scheme you have investigated a variety of basic types of data, including numbers, strings, and images. You can work on many kinds of problems with just these types. However, when you want to address more complex problems you will need to work with collections of data - not just the rating of a movie from one newspaper, but the rating of that movie from many newspapers (or even the ratings of many movies from many newspapers); not just one word, but a sequence of words; not just one color, but many colors.

In Scheme, the simplest mechanism for dealing with collections of data is the _list_ data type. Lists are collections of values that you can process one-by-one or en masse.  In this reading, we will consider Scheme's list data type as well as a few procedures to build and manipulate lists.  

You may recall that there are five basic issues we should consider when we encounter a new type: its _name_, its _purpose_, how one _expresses values_ in the type, how the computer _displays_ values in the type, and what _operations_ are available to you.  (It may seem that we are repeating this list of issues; that's because we want you to accustom yourself to asking about those five issues each time you encounter or design a new type.)

We've already covered the first two: The name of the type is "list" and its primary purpose is to group or collect values.  Let's explore the rest.

## Displaying lists

Because of some early decisions in the design of Lisp, the precursor to
Scheme, lists in Scheme look a lot like procedure calls.  That is, they have an open parenthesis, a bunch of values separated by spaces, and a close parenthesis.  The individual values can also themselves be lists. While some versions of Scheme don't distinguish lists from procedure calls and others use a tick mark to distinguish lists, Scamper adds the word `list` to the start of lists.

<pre class="scamper-transcript">
(+ 2 3)
(list + 2 3)
(string-split "the jaws that bite the claws that catch" " ")
("the" "jaws" "that" "bite" "the" "claws" "that" "catch")
(list 1 2 3)
(1 2 3)
</pre>

## Creating lists

Because lists play a central role in Scheme, Scheme provides a wide variety of ways to create lists.  One common way to create lists is with the `(list exp0 exp1 ...)` procedure, which evaluates all of its parameters and creates a list from those parameters.

<pre class="scamper-transcript">
(list 2 3 5 7)
(list "two" "three" "five" "seven")
(list 1 (+ 2 3) 4)
(list 1 (list + 2 3) 4)
(list)
</pre>

If you need a list of identical values for some reason, you can use the `(make-list n val)` procedure, which takes two parameters: the number of copies of a value to make in the list and the particular value to copy.

<pre class="scamper-transcript">
(make-list 5 "hello")
(make-list 2 4)
(make-list 4 2)
</pre>

Because we often find that we need a sequence of numbers, many implementations of Scheme include a procedure called `(range lower upper)` that takes two integers as parameters and produces a list of all the numbers greater than or equal to the first and less than the second.

<pre class="scamper-transcript">
(range 7 11)
(range 2 9)
(range -2 3)
</pre>

There's also a one-parameter version of `range` that produces all the natural numbers less than the parameter.

<pre class="scamper-transcript">
(range 7)
(range 4)
</pre>

A bit later in the course, we'll learn how to build lists piece by piece.

## Some list operations

Perhaps the simplest list operation is `(length lst)`, which gives you the number of elements in the list.

<pre class="scamper-transcript">
(length (list))
(length (list 3 4 5))
(length (string-split "he took his vorpal sword in hand" " "))
</pre>

You can also extract an element of a list using the `(list-ref list index)` operation.  In Racket, the position of an element is the number of values that appear before that element; hence, the initial element of a list is element 0, not element 1.

<pre class="scamper-transcript">
(define observation (list "Computers" "are" "sentient" "and" "Malicious"))
observation
(list-ref observation 0)
(list-ref observation 2)
(length observation)
(list-ref observation 4)
(list-ref observation 5)
</pre>

The `(index-of val lst)` procedure serves as something like the opposite of `list-ref`: Given a list and an element, it returns the position (index) of the first instance of that element.

<pre class="scamper-transcript">
(define lead-in (list "a" "one" "and" "a" "two" "and" "a" "..."))
(index-of "one" lead-in)
(index-of "and" lead-in)
(list-ref lead-in (index-of "and" lead-in))
</pre>

<!--
The similar `(indexes-of lst val)` (we would have named it `indices-of`) returns a list of all the indices of a value in a list.

<pre class="scamper-transcript">
(indexes-of lead-in "a")
(indexes-of lead-in "and")
</pre>
-->

The `(reverse lst)` procedure creates a new list that consists of the same elements as `lst`, but in the opposite order.

<pre class="scamper-transcript">
(reverse (range 10))
(reverse (list "a" "b" "c" "d" "e"))
</pre>

The `(append lst1 lst2)` procedure creates a new list that consists of all the elements of the first list followed by the elements of the second list.

<pre class="scamper-transcript">
(append (range 5) (range 5))
(append (make-list 3 "hello") (make-list 4 "echo"))
</pre>

The `(list-take lst n)` procedure builds a new list that consists of the first `n` elements of `lst` and the `(list-drop lst n)` procedure builds a list by removing the first `n` elements of `lst`.

<pre class="scamper-transcript">
(define some-ia-counties
  (list "Adair" "Adams" "Alamakee" "Appanoose" "Audobon"))
(list-take some-ia-counties 3)
(list-drop some-ia-counties 3)
(list-take (reverse some-ia-counties) 2)
</pre>

## Self Checks

### Check 1: Checking list procedures

Predict the results of evaluating each of the following expressions.

```drracket
(list 2 1)
(make-list 1 2)
(make-list -1 2)
(append (list 2 1) (list 2 1))
(index-of "a" (list "a" "b"))
(index-of "c" (list "a" "b"))
(range -3 0)
(range 3)
(range 0)
```

### Check 2: Ranges, revisited (‡)

Suppose we only had the one-parameter version of `range`.  How could you make the list `(list 6 5 4 3)`?

