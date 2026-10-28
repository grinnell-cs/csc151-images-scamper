---
title: Mini-Project 4
subtitle: Processing lists of colors
summary: |
  We consider ways to process lists of colors through recursive techniques,
  reflecting on what recursion does and does not add to what we can do
  with "the big three" and other standard list procedures.
  functions.
collaboration: |
  Each student should submit their own responses to this project. You may
  consult other students in the class as you develop your solution.  If you
  receive help from anyone, make sure to cite or acknowledge them in your 
  responses. 
link: true
preimg: true
---
**Warning!** This mini-project is new this semester. It may have some infelicities. Ask questions if things don't make sense!

**Warning!** This mini-project will not be ready until the evening of October 28, 2026. Stay tuned for an email message from Sam.

---

Please start with the [template code](../code/mps/color-lists.scm). You'll note that the code has many sets of question marks. You should replace those with text or code, as appropriate. 

Please save all of your work as `color-lists.scm`.

Introduction
------------

As we've seen, the "big three" list operations---`map`, `filter`, and `reduce` (plus `apply`)---provide us with many ways to manipulate lists of values. However, there are some things that are difficult to do with only those operations. For example, it is difficult to use `map` to work with neighboring elements, but `reduce` shrinks our list to a single value. None of these procedures expand lists. In such cases, and many others, we can use recursion to process lists.

Part one: Expanding lists
-------------------------

a. Document, write tests for, and implement a recursive procedure, `(insert-averge colors)`, that takes a nonempty list of colors as input and returns a new list in which the average of each pair of neighboring colors is inserted between the neighboring colors.

```
(test-case "insert-average black-white"
           rgb-lists-similar? 
           (list (rgb 0 0 0) (list 127 127 127) (rgb 255 255 255))
           #(insert-average (list (rgb 0 0 0) (rgb 255 255 255))))
```

b. Document, write tests for, and implement a recursive procedure, `(split-colors colors)`, that takes a potentially empty list of RGB colors as input and returs a new list in which each color is "split" into three colors, one of the form ``(rgb RED 128 128 128)`, one of the form `(rgb 128 GREEN 128)`, and one of the form `(RGB 128 128 BLUE)`, where `RED`, `GREEN`, and `BLUE` are the corresponding components of the original color.

c. Document, write tests for, and implement a recursive procedure, `(double-bright colors)`, that takes a potentially empty list of RGB colors as input and makes two copies of any color that is brighter than the next color in the lists.

Part two: Removing elements
---------------------------

Although the `filter` procedure permits us to remove elements from a list, it only does so when we can

a. `remove-every-other`

b. `remove-brighter-than-next-a`

c. `remove-brighter-than-next-b`

d. `remove-nearby-neighbors`

e. `remove-similar-neighbors`

Part three: Extended mapping
----------------------------

a. `alternate-darker-lighter` and `alternate-lighter-darker`

b. `alternate-rgber`, `alternate-gbrer`, `alternate-brger`

c. `average-neighbors`

Part four: Rearranging lists
----------------------------

a. `brightest-to-end`

b. `brightest-to-front`

Part five: Returning to the basics
----------------------------------

Pick at least three of the procedures (or, in some cases, sets of procedures) you've written above and rewrite them without explicit recursion, using the standard list procedures (`map`, `filter`, `reduce`, `apply`, `reverse`, `make-list`, `range`, and such). Add a `/alt` to the end of the procedure name so that we know that you've built an alternative version.
