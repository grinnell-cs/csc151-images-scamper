---
title: Mini-Project 3
subtitle: Exploring lists of shapes (and lists of lists of shapes)
summary: |
  As the subtitle suggests, in this assignment we will consider
  techniques for building complex images based on lists of shapes.
  Along the way, we will explore uses of "the big three" list
  functions.
collaboration: |
  Each student should submit their own responses to this project. You may
  consult other students in the class as you develop your solution.  If you
  receive help from anyone, make sure to cite or acknowledge them in your 
  responses. 
link: true
preimg: true
notes: Increase the number of tests for color-variants-1x and require edge.
---
Please start with the [template code](../code/mps/shape-lists.scm).

Please save all of your work as `shape-lists.scm`.

## Introduction

By this point, you've considered a variety of functions for making and manipulating some basic shapes, such as circles and squares (or, more generally, ellipses and rectangles). 

We're doing to start by representing the characters of an unknown shape as a list of three values: the width, the height, and the color (in RGB form). For example, we might represent a 100x50 solid-blue shape as `(list 100 50 (rgb 0 0 255))`. 

That's fairly abstract, isn't it? Let's write a few functions to help us work with this notation.

```
;;; (ushape width height color) -> ushape?
;;;   width : positive-integer?
;;;   height : positive-integer?
;;;   color : color?
;;; Create an under-specified shape. We know its characteristics, but
;;; not what type of shape it is.
(define ushape
  (lambda (width height color)
    (list width height (color->rgb color))))

;;; (ushape? val) -> boolean?
;;;   val : any
;;; Determine if `val` is a ushape (an unknown shape).
(define ushape?
  (lambda (val)
    (and (list? val)
         (= 3 (length val))
         (and (integer? (list-ref val 0)) (positive? (list-ref val 0)))
         (and (integer? (list-ref val 1)) (positive? (list-ref val 1)))
         (rgb? (list-ref val 2)))))

;;; (ushape-width us) -> positive-integer?
;;;   us : ushape?
;;; Get the width of a ushape (an unknown shape).
(define ushape-width
  (r-s list-ref 0))

;;; (ushape-height us) -> positive-integer?
;;;   us : ushape?
;;; Get the height of a ushape (an unknown shape).
(define ushape-height
  (r-s list-ref 1))

;;; (ushape-color us) -> rgb?
;;;   us : ushape?
;;; Get the color of a ushape (an unknown shape).
(define ushape-color
  (r-s list-ref 2))
```

Now, let's write a function that converts a ushape to an ellipse.

```
;;; (ushape->ellipse us) -> ellipse?
;;;   us : ushape?
;;; Convert shape to a solid ellipse.
(define ushape->ellipse
 (lambda (us)
    (solid-ellipse (ushape-width us)
                   (ushape-height us)
                   (ushape-color us))))
```

Note, however, that a ushape is just a list of width, height, and color,
so we could just as easily write the following.

```
(define ushape->ellipse
  (lambda (us)
    (apply solid-ellipse us)))
```

And, since we're filling in one parameter of a two-parameter function (`apply`) with a constant value (`solid-ellipse`), we could just as easily write the following.

```
(define ushape->ellipse
  (l-s apply solid-ellipse))
```

We can define `ushape->rectangle` similarly.

```
;;; (ushape->rectangle us) -> rectangle?
;;;   us : ushape?
;;; Convert shape to a solid rectangle.
(define ushape->rectangle
  (l-s apply solid-rectangle))
```

We can now use those functions to build some shapes from generic shape descriptions.

```
;;; red-narrow : ushape?
;;; A narrow red shape
(define red-narrow
  (ushape 10 20 "red"))

;;; red-medium : ushape?
;;; A not-too-narrow and not-too-wide red shape.
(define red-medium
  (ushape 20 20 "red"))

;;; red-wide : ushape?
;;; A wide red shape.
(define red-wide
  (ushape 30 20 "red"))

;;; red-shapes : (list-of ushape?)
;;; A list of red shapes
(define red-shapes (list red-narrow red-medium red-wide))

;;; blue-narrow : ushape?
;;; A narrow blue shape
(define blue-narrow
  (ushape (ushape-width red-narrow) (ushape-height red-narrow) "blue"))

;;; blue-medium : ushape?
;;; A not-too-narrow and not-too-wide blue shape.
(define blue-medium
  (ushape (ushape-width red-medium) (ushape-height red-medium) "blue"))

;;; blue-wide : ushape?
;;; A wide blue shape.
(define blue-wide
  (ushape (ushape-width red-wide) (ushape-height red-wide) "blue"))

;;; purple-narrow : ushape?
;;; A narrow purple shape
(define purple-narrow
  (ushape (ushape-width red-narrow) (ushape-height red-narrow) "purple"))

;;; purple-medium : ushape?
;;; A not-too-narrow and not-too-wide purple shape.
(define purple-medium
  (ushape (ushape-width red-medium) (ushape-height red-medium) "purple"))

;;; purple-wide : ushape?
;;; A wide purple shape.
(define purple-wide
  (ushape (ushape-width red-wide) (ushape-height red-wide) "purple"))

;;; narrow-shapes : (list-of ushape?)
;;; A list of narrow shapes.
(define narrow-shapes (list red-narrow blue-narrow purple-narrow))
```

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
(import image)
(define ushape
  (lambda (width height color)
    (list width height (color->rgb color))))
(define ushape?
  (lambda (val)
    (and (list? val)
         (= 3 (length val))
         (and (integer? (list-ref val 0)) (positive? (list-ref val 0)))
         (and (integer? (list-ref val 1)) (positive? (list-ref val 1)))
         (rgb? (list-ref val 2)))))
(define ushape-width
  (r-s list-ref 0))
(define ushape-height
  (r-s list-ref 1))
(define ushape-color
  (r-s list-ref 2))
(define ushape->ellipse
  (l-s apply solid-ellipse))
(define ushape->rectangle
  (l-s apply solid-rectangle))
(define red-narrow
  (ushape 10 20 "red"))
(define red-medium
  (ushape 20 20 "red"))
(define red-wide
  (ushape 30 20 "red"))
(define blue-narrow
  (ushape (ushape-width red-narrow) (ushape-height red-narrow) "blue"))
(define blue-medium
  (ushape (ushape-width red-medium) (ushape-height red-medium) "blue"))
(define blue-wide
  (ushape (ushape-width red-wide) (ushape-height red-wide) "blue"))
(define purple-narrow
  (ushape (ushape-width red-narrow) (ushape-height red-narrow) "purple"))
(define purple-medium
  (ushape (ushape-width red-medium) (ushape-height red-medium) "purple"))
(define purple-wide
  (ushape (ushape-width red-wide) (ushape-height red-wide) "purple"))
(define red-shapes (list red-narrow red-medium red-wide))
(define narrow-shapes (list red-narrow blue-narrow purple-narrow))
</script>
(ushape->ellipse red-narrow)
(ushape->ellipse red-medium)
(ushape->ellipse red-wide)
(ushape->rectangle red-wide)
</pre>


Using `map`, we can make lists of different kinds of shapes and quickly combine them.

<pre class="scamper-transcript" data-continues>
(map ushape->ellipse red-shapes)
(apply above (map ushape->ellipse red-shapes))
(apply beside (map ushape->rectangle narrow-shapes))
</pre>

We can even make somewhat slightly more complex shapes using that information.

```
;;; (thickly-outlined-ellipse width height color) -> drawing?
;;;   width : positive-integer?
;;;   height : positive-integer?
;;;   color : color?
;;; Make an ellipse with a thick outline.
(define thickly-outlined-ellipse
  (lambda (width height color)
    (overlay (outlined-ellipse width height "black" 5)
             (solid-ellipse width height color))))

;;; (ushape->thickly-outlined-ellipse us) -> drawing?
;;;   us : ushape?
;;; Make an ellipse with a thick outline using the info in `us`.
(define ushape->thickly-outlined-ellipse
  (l-s apply thickly-outlined-ellipse))
```

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define thickly-outlined-ellipse
  (lambda (width height color)
    (overlay (outlined-ellipse width height "black" 5)
             (solid-ellipse width height color))))
(define ushape->thickly-outlined-ellipse
  (l-s apply thickly-outlined-ellipse))
</script>
(apply beside (map ushape->thickly-outlined-ellipse red-shapes))
</pre>

Of course, rather than creating lists like these on our own, we can write functions that do so.  Here's one that takes a shape and creates five variants of varying widths and "shades". 

```
;;; (five-variants us) -> (list-of drawing?)
;;;   us : ushape?
;;; Create a list of five shapes based on the original shape.
;;;
;;; * The first shape is 1/3 the width and much darker.
;;; * The second shape is 1/3 the width and slightly darker.
;;; * The third shape is the same.
;;; * The fourth shape is 4/3 the width and slightly lighter.
;;; * The fifth shape is 5/3 the width and much lighter.
(define five-variants
  (lambda (us)
    (apply five-variants/helper us)))

;;; (five-variants/helper width height color) -> (list-of shape?)
;;;   width : nonnegative-integer?
;;;   height : nonnegative-integer?
;;;   color : rgb?
;;; Create a list of five shapes based on `width`, `height`, and
;;; `color`. See `five-variants` for the details.
(define five-variants/helper
  (lambda (width height color)
    (list (ushape (round (* (/ 1 3) width)) height (rgb-darker (rgb-darker color)))
          (ushape (round (* (/ 2 3) width)) height (rgb-darker color))
          (ushape width height color)
          (ushape (round (* (/ 4 3) width)) height (rgb-lighter color))
          (ushape (round (* (/ 5 3) width)) height (rgb-lighter (rgb-lighter color))))))
```

Now, we can quickly make lists of variants.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define five-variants
  (lambda (us)
    (apply five-variants/helper us)))
(define five-variants/helper
  (lambda (width height color)
    (list (ushape (round (* (/ 1 3) width)) height (rgb-darker (rgb-darker color)))
          (ushape (round (* (/ 2 3) width)) height (rgb-darker color))
          (ushape width height color)
          (ushape (round (* (/ 4 3) width)) height (rgb-lighter color))
          (ushape (round (* (/ 5 3) width)) height (rgb-lighter (rgb-lighter color))))))
</script>
(map ushape->rectangle (five-variants (ushape 10 20 "orange")))
(apply overlay (map ushape->ellipse (five-variants (ushape 10 20 "orange"))))
</pre>

As we've already learned, there's power in repeating actions.  So we could turn those five shapes descriptions into twenty-five with a call to map.

<pre class="scamper-transcript" data-continues>
(define twenty-five-things (map five-variants (five-variants (ushape 20 20 (rgb 128 64 192)))))
twenty-five-things
</pre>

That wasn't much fun to read, was it? Sometimes Scamper is a pain.

When we had a single list, rather than a list of lists, it was easy to build lists of shapes and them combine them. Unfortunately, we can't convert those to images quite as easily.

<pre class="scamper-transcript" data-continues>
(map ushape->ellipse twenty-five-things)
</pre>`

Our goal in this assignment is to write functions that will help us deal with these nested (perhaps deeply nested) lists of shapes.

<!--
### Detour: Tests and testing

Up until this point, we have asked you to experiment with the functions that you write in the interactions window to check for correctness.  This has the upside of being fast, but if you change your code, you need manually type in all those tests again which is tedious (which in turn makes it less likely you'll recheck the correctness of your code).  A better solution is to *codify* your tests in your code so that you can rerun the tests at will.

During our unit on software engineering fundamentals, we'll introduce you to a library, `rackunit`, that makes test authoring and execution a breeze.  

When we are developing functions, Scamper provides an important function to help us make that list of inputs/outputs and automatically check it for us: `(test-case DESCRIPTION EQUAL? EXPECTED THUNK)`, which evaluates `THUNK` (a zero-parameter function ), compares it to `EXPECTED` using `EQUAL?`, and prints either an error message or a success message. We'll usually write our thunks using the `#`-based cut notation.

For example,

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(import test)
</script>
(test-case "the square root of 3 squared is 3" = 3 #(sqrt (sqr 3)))
(test-case "the square root of 4 squared is 4" = 4 #(sqrt (sqr 4)))
(test-case "the square of the square root of 4 is 4" = 4 #(sqr (sqrt 4)))
(test-case "the square of the square root of 3 is 3" = 3 #(sqr (sqrt 3)))
</pre>

As this example suggests, we should put our tests immediately after our code in the definitions pane.  Then, when we click "Run", we'll quickly determine if there are any problems (and what those problems are).  If we see no reports, we can be sure that the code passed all of our tests.

Now, on to the problems!
-->

## Part 1: Transforming nested lists of ushapes

As we noted above, we can't directly apply `ushape->ellipse`---or any of our ushape conversion functions---to the list of lists we got by mapping `five-variants` over a list of ushapes. Let's explore how we might do that.

---

a. **Document and write a function, `(ushapes->ellipses ushapes)`, that takes a _list_ of ushapes as an input and turns each ushape in the list to an ellipse.**


<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define ushapes->ellipses
  (l-s map ushape->ellipse))
</script>
(ushapes->ellipses red-shapes)
(ushapes->ellipses (five-variants red-medium))
</pre>

_Hint: Consider how we converted a list above to ellipses._

---

b. **Document and write a function, `(ushapex->ellipses thing)`, that takes either a ushape or a list of ushapes as a parameter. If it receives a ushape as its input, it should convert it to a single ellipse using `ushape->ellipse`. If it receives a list of ushapes as its input, it should convert all of them to ellipses using `ushapes->ellipses`.**

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define ushapex->ellipses
  (lambda (thing)
    (if (ushape? thing)
        (ushape->ellipse thing)
        (ushapes->ellipses thing))))
</script>
(ushapex->ellipses (ushape 20 20 "orange"))
(ushapex->ellipses (list (ushape 10 10 "red") 
                         (ushape 20 20 "orange")
                         (ushape 30 30 "yellow")))
</pre>

Recall that the `ushape?` predicate lets you determine if a value is a ushape.

---

c. **Document and write a function, `(ushapes1x->ellipses ushapes)`, that takes a _list of lists_ of ushapes as an input and turns each ushape in the list to an ellipse.**

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define ushapes1x->ellipses
  (l-s map ushapes->ellipses))
</script>
(ushapes1x->ellipses (list (list red-narrow red-medium) 
                           (list purple-narrow purple-medium)))
(ushapes1x->ellipses twenty-five-things)
(map (l-s apply beside) (ushapes1x->ellipses twenty-five-things))
(apply above (map (l-s apply beside) (ushapes1x->ellipses twenty-five-things)))
</pre>

As that last example suggests, we can achieve some interesting images fairly quickly using this approach.

---

Sometimes, we may find that we want to work with lists that contain both ushapes and lists of ushapes. We'll call such lists "slightly nested ushape lists".

Here's a predicate that determines if a value is a slightly nested ushape list. 

```
;;; (slightly-nested-ushape-list? val) -> boolean?
;;;   val : any?
;;; Determines whether `val` is a slightly-nested ushape list. That is,
;;; a list of values that are either shapes or ushape lists.
(define slightly-nested-ushape-list?
  (list-of (any-of ushape? (list-of ushape?))))
```

Don't worry if you don't understand the definition. You just have to be able to understand how it works.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define slightly-nested-ushape-list?
  (list-of (any-of ushape? (list-of ushape?))))
</script>
(slightly-nested-ushape-list? red-narrow)
(slightly-nested-ushape-list? (list red-narrow red-narrow))
(slightly-nested-ushape-list? (list (list red-narrow red-narrow)
                                    blue-narrow))
(slightly-nested-ushape-list? (list purple-narrow
                                    (list red-narrow red-narrow)
                                    blue-narrow))
(slightly-nested-ushape-list? (list (list red-narrow red-narrow)
                                    (list blue-narrow blue-narrow)))
(slightly-nested-ushape-list? (list (list red-narrow red-narrow)
                                    (list (list blue-narrow blue-narrow)
                                          purple-narrow)))
</pre>

d. **Document and write a function, `(ushapes1->ellipses shapes)`, that takes a slightly nested ushape list as a parameter and converts all of the ushapes in the list to ellipses.**

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define ushapes1->ellipses/helper
  (lambda (thing) 
    (if (ushape? thing)
        (ushape->ellipse thing)
        (ushapes->ellipses thing))))
(define ushapes1->ellipses
  (l-s map ushapes1->ellipses/helper))
</script>
(ushapes1->ellipses (list red-narrow red-narrow))
(ushapes1->ellipses (list (list red-narrow red-narrow)
                          blue-narrow))
(ushapes1->ellipses (list purple-narrow
                          (list red-narrow red-narrow)
                          blue-narrow))
(ushapes1->ellipses (list (list red-narrow red-narrow)
                          (list blue-narrow blue-narrow)))
</pre>

Note that you know that every `shapes` is a list and that every element of `shapes` is either (a) a ushape or (b) a list of ushapes. Hence, anything in `shapes` that is not a ushape must be a list of ushapes.

_Hint_: Think about using some of the previous procedures you've defined.

---

It would be nice to be able to play with other shapes, too.  

e. **Document and write functions, `(ushapes1->rectangles shapes)` and `(ushapes1->triangles shapes)`, that take a slightly nested ushape list as a parameter and convert all of the ushapes in the list to either rectangles or triangles, as appropriate.**

---

What next? Just because it may be useful, we're going to add one more level of nesting. A "doubly nested ushape list" is a list in which each element is either

* A ushape or
* A slightly-nested ushape list.

As you might expect, we've provided a `doubly-nested-ushape-list` predicate.

```
;;; (doubly-nested-ushape-list? val) -> boolean?
;;;   val : any?
;;; Determines whether `val` is a doubly-nested ushape list. That is,
;;; a list of values that either ushapes, ushape lists, or slightly-nested
;;; ushape lists. 
(define doubly-nested-shape-list?
  (list-of (any-of shape?
                   slightly-nested-shape-list)))
```

However, you are unlikely to need this predicate.

f. **Document and write a function, `(ushapes2->ellipses shapes)`, that takes a doubly nested ushape list as a parameter and converts all of the ushapes in the list to ellipses.** 

Just in case you weren't sure, the `2` here represents "up to two levels of nesting" and the `1` in `ushapes1->ellipses` represented "up to one level of nesting".

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define ushapes2->ellipses/helper
  (lambda (thing) 
    (if (ushape? thing)
        (ushape->ellipse thing)
        (ushapes1->ellipses thing))))
(define ushapes2->ellipses
  (l-s map ushapes2->ellipses/helper))
</script>
(ushapes2->ellipses (list red-narrow red-narrow))
(ushapes2->ellipses (list (list red-narrow red-narrow)
                          blue-narrow))
(ushapes2->ellipses (list purple-narrow
                          (list red-narrow red-narrow)
                          blue-narrow))
(ushapes2->ellipses (list (list red-narrow red-narrow)
                          (list blue-narrow blue-narrow)))
(ushapes2->ellipses (list (list (list red-narrow blue-narrow)
                                (list blue-narrow red-narrow))
                          (list (list purple-narrow purple-narrow)
                                (list purple-narrow purple-medium))))
(ushapes2->ellipses (list purple-narrow
                          (list purple-narrow purple-narrow)
                          (list (list purple-narrow purple-narrow)
                                (list purple-narrow purple-narrow))))
</pre>

---

g. As you might guess, it would be useful to support other shapes, too. 

**Document and write functions, `(ushapes2->rectangles shapes)` and `(ushapes2->triangles shapes), that takes a doubly nested ushape list as a parameter and converts all of the ushapes in the list to rectangles or isosceles triangles, as appropriate.** 

---

## Part 2: Making lists of ushapes

Now that we have ways to convert our lists of lists (of lists) of ushapes to actual shapes, we can start to consider ways to build such lists.

Our `five-variants` function is nice, but it's a bit cumbersome to apply.  For example, what if we already have a nested list of `ushapes?` and we want to make five variants of each shape?  We can't just call `five-variants`; you may recall that in our example above, we had to use `map` once we had a list.  But if we have nested lists, `map` won't even work.

We'll do this with a sequence of steps.

---

First, let's start with a function that makes a different set of variants.

a. **Document <!--, create at least three tests for,--> and write a function, `(color-variants-0 us)`, that takes a ushape as a parameter and makes a list of four ushapes.**

* The first should be the same width, height, and color as the original shape. 
* The second should be the same width and height as the original shape, but with a redder color. 
* The third should the same width and height as the original shape, but with a greener color. 
* The fourth should be a shape that is the same width and height as the original shape, but with a bluer color. 

You should use `rgb-redder`, `rgb-greener`, and `rgb-bluer` to change the colors. 

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define color-variants-0
  (lambda (ushape)
    (apply color-variants-0/helper ushape)))
(define color-variants-0/helper
  (lambda (width height color)
    (list (ushape width height color)
          (ushape width height (rgb-redder color))
          (ushape width height (rgb-bluer color))
          (ushape width height (rgb-greener color)))))
</script>
(map ushape->rectangle (color-variants-0 (ushape 20 20 (rgb 128 128 128))))
(map ushape->ellipse (color-variants-0 (ushape 20 40 (rgb 64 128 192))))
(ushapes->ellipses (color-variants-0 (ushape 30 30 (rgb 192 128 64))))
</pre>

<!--
What will your tests look like? Here's one example.

<pre class="scamper-transcript" data-continues>
(test-case "color-variants-0: Middle grey"
           equal?
           (list (ushape 40 30 (rgb 128 128 128))
                 (ushape 40 30 (rgb-redder (rgb 128 128 128)))
                 (ushape 40 30 (rgb-greener (rgb 128 128 128)))
                 (ushape 40 30 (rgb-bluer (rgb 128 128 128))))
           #(color-variants-0 (ushape 40 30 (rgb 128 128 128))))
</pre>
-->

---

b. **Document <!--, write one test for,--> and write a function, `(color-variants-1 stuff)`, that takes list of ushapes as a parameter and applies `color-variants-0` to each of them.**

```
;;; (color-variants-1 ushapes) -> (list-of (list-of ushape?))
;;;   shapes : (list-of ushape?)
;;; Apply `color-variants-0` to each element of `shapes`.
```


<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define color-variants-1
  (l-s map color-variants-0))
</script>
(ushapes1->ellipses (color-variants-1 (list (ushape 20 20 (rgb 128 128 128))
                                            (ushape 20 20 (rgb 64 64 64))
                                            (ushape 20 20 (rgb 192 192 192)))))
(define stuff 
  (ushapes1->ellipses
    (color-variants-1
      (color-variants-0
        (ushape 10 30 (rgb 128 128 128))))))
stuff
(map (l-s apply beside) stuff)
(apply above (map (l-s apply beside) stuff))
</pre>

_Hint_: Use `map`.

---

c. **Document <!--, write two tests for,--> and write a function`(color-variants-1x stuff)`, that takes either a ushape or a ushape list as a parameter. If it receives a ushape, it should return the result of applying `color-variants-0` to the shape. If it receives a ushape list, it should apply `color-variants-1` to that list.**

```
;;; (color-variants-1x thing) -> (any-of (list-of ushape?) (list-of (list-of ushape?)))
;;;   thing : (any-of ushape? (list-of ushape?))
;;; Make variants of all the shapes in `stuff`, which is either a single shape 
;;; or a ;;; list of shapes, creating either a list of shapes or a list of lists
;;; of shapes.
```

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define color-variants-1x
  (lambda (thing)
    (if (ushape? thing)
        (color-variants-0 thing)
        (color-variants-1 thing))))
</script>
(ushapes1->ellipses (color-variants-1x (ushape 20 30 "gray")))
(ushapes1->ellipses 
  (color-variants-1x (list (ushape 20 30 (rgb 192 128 128)) 
                           (ushape 30 30 (rgb 128 192 128))
                           (ushape 30 20 (rgb 128 128 192)))))
</pre>

You may assume that `color-variants-1x` receives either a ushape or list of ushapes as a parameter. That is, if its parameter is not a ushape, it must be a ushape list.


---

d. **Document and write a function, `(color-variants-2 ushapes)`, that takes a slightly nested ushape list as a parameter and applies `color-variants-1x` to each element.**

Recall that a slightly nested ushape list is a list that contains either ushapes or lists of ushapes.  As before, since there are only two options for elements of the list, you may assume that anything in the list that isn't a ushape must be a ushape list.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define color-variants-2 
  (l-s map color-variants-1x))
</script>
(ushapes2->ellipses 
  (color-variants-2 
    (list red-narrow)))
(ushapes2->ellipses 
  (color-variants-2 
    (list (list red-narrow purple-narrow)
          (list red-narrow blue-narrow purple-narrow))))
(ushapes2->ellipses
  (color-variants-2
    (list (ushape 30 10 (rgb 128 128 128))
          (list (ushape 10 10 (rgb 128 128 128))
                (ushape 15 15 (rgb 128 128 128))
                (ushape 20 20 (rgb 128 128 128)))
          (ushape 10 30 (rgb 192 128 128))
          (list (ushape 25 25 (rgb 192 128 192))
                (ushape 30 30 (rgb 192 128 192))))))
</pre>

Note that `color-variants-2` returns a "doubly nested ushape list", which is why we use `ushapes2->ellipses` to convert the elements to shapes.

## Part 3: Combining shapes

As you've just seen, we can now build complex nested lists of shapes.  As you might expect, we'd like to be able to convert these nested lists to a single compound drawing. (We use the term "drawing" for "shape or any combination of shapes".)

a. **Document and write a function, `(stack drawings)`, that takes a list of drawings as a parameter and returns a single drawing in which each drawing in the list is placed above the next.  In this case, your input list is not nested; it is the output from a function like `ushapes->ellipses`.**

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define stack
  (l-s apply above))
</script>
(ushapes->ellipses (list blue-narrow purple-medium red-wide))
(stack (ushapes->ellipses (list blue-narrow purple-medium red-wide)))
(ushapes->ellipses (color-variants-0 (ushape 15 15 (rgb 128 128 128))))
(stack (ushapes->ellipses (color-variants-0 (ushape 15 15 (rgb 128 128 128)))))
</pre>

---

b. **Document and write a function, `(sequence drawings)`, that takes a list of drawings as a parameter and returns a single drawing in which each drawing in the list is placed next to the subsequent drawings.  Once again, in this case, your input list is not nested.**

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define sequence
  (l-s apply beside))
</script>
(ushapes->ellipses (list blue-narrow purple-medium red-wide))
(sequence (ushapes->ellipses (list blue-narrow purple-medium red-wide)))
(ushapes->ellipses (color-variants-0 (ushape 15 15 (rgb 128 128 128))))
(sequence (ushapes->ellipses (color-variants-0 (ushape 15 15 (rgb 128 128 128)))))
</pre>

c. **Document and write a procedure, `(stack-then-sequence stuff)`, that takes a slightly nested list of drawings as a parameter and returns an image in which each sublist is stacked and then the stacks are placed next to each other. You should only stack the elements of `stuff` that are themselves lists.**

---

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define stack-then-sequence/helper
  (lambda (val)
    (if (drawing? val)
        val
        (stack val))))
(define stack-then-sequence
  (o sequence (l-s map stack-then-sequence/helper)))
</script>
(stack-then-sequence
  (ushapes1->ellipses
    (list (list red-narrow red-medium red-wide)
          (list purple-wide purple-medium purple-narrow)
          (list blue-narrow blue-medium blue-wide))))
(stack-then-sequence 
  (ushapes1->ellipses
    (list red-narrow (list purple-narrow blue-narrow)
          red-medium (list blue-medium purple-medium)
          red-wide (list purple-wide red-wide))))
(stack-then-sequence 
  (ushapes1->ellipses
    (color-variants-1 
      (color-variants-0 (ushape 30 15 (rgb 128 128 128))))))
</pre>

Note that, as in many of the previous problems, you will likely want to write a helper procedure.  In this case, it should check whether the parameter is a drawing or not with the `drawing?` predicate.  If it's a drawing, you can leave it as is.  If it's a list, you probably want to stack it.  After applying that helper to each element of `stuff`, you can put them beside each other with `sequence`.

---

d. **Document and write a function, `(sequence-then-stack stuff)`, that takes a singly nested list of drawings as a parameter and returns a drawing in which each sublist is sequenced and then the sequences (or individual elements) are placed above each other.**

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define sequence-then-stack/helper
  (lambda (val)
    (if (drawing? val)
        val
        (sequence val))))
(define sequence-then-stack
  (o stack (l-s map sequence-then-stack/helper)))
</script>
(sequence-then-stack
  (ushapes1->ellipses
    (list (list red-narrow red-medium red-wide)
          (list purple-wide purple-medium purple-narrow)
          (list blue-narrow blue-medium blue-wide))))
(sequence-then-stack 
  (ushapes1->ellipses
    (list red-narrow (list purple-narrow blue-narrow)
          red-medium (list blue-medium purple-medium)
          red-wide (list purple-wide red-wide))))
(sequence-then-stack 
  (ushapes1->ellipses
    (color-variants-1 
      (color-variants-0 (ushape 30 15 (rgb 128 128 128))))))
</pre>

Note that, as in many of the previous problems, you will likely want to write a helper procedure.  In this case, it should check whether the parameter is a drawing or not with the `drawing?` predicate.  If it's a drawing, you can leave it as is.  If it's a list, you probably want to stack it.  After applying that helper to each element of `stuff`, you can put them beside each other with `sequence`.

As in the case of `stack-then-sequence`, you'll find a helper procedure useful.

---

We've handled singly nested lists. Should we take a step further and handle doubly nested lists? Sure!

e. **Document and write a function, `(sequence-then-stack-then-sequence stuff)`, that takes a doubly-nested list as input.  You should be able to guess what it should do.** _This problem is optional._

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define e/helper
  (lambda (thing)
    (if (drawing? thing)
        thing
        (sequence-then-stack thing))))
(define sequence-then-stack-then-sequence
  (o sequence (l-s map e/helper)))
</script>
(sequence-then-stack 
  (ushapes1->ellipses
    (list (list red-narrow blue-medium purple-wide)
          (list blue-medium purple-wide red-narrow)
          (list purple-wide red-narrow blue-medium))))
(sequence-then-stack 
  (ushapes1->ellipses
    (list purple-wide
          (list blue-medium red-medium))))
(sequence-then-stack 
  (ushapes1->ellipses
    (list red-narrow blue-narrow purple-narrow blue-narrow red-narrow)))
(sequence-then-stack-then-sequence
  (ushapes2->ellipses
    (list (list (list red-narrow blue-medium purple-wide)
                (list blue-medium purple-wide red-narrow)
                (list purple-wide red-narrow blue-medium))
          (list purple-wide
                (list blue-medium red-medium))
          (list red-narrow blue-narrow purple-narrow blue-narrow red-narrow))))
(sequence-then-stack-then-sequence
  (ushapes2->ellipses
    (list red-narrow
          (list blue-narrow blue-narrow blue-narrow blue-narrow)
          (list (list blue-narrow purple-narrow red-narrow)
                (list red-narrow purple-narrow blue-narrow)))))
(sequence-then-stack-then-sequence
  (ushapes2->ellipses
    (color-variants-2
      (color-variants-1
        (color-variants-0
          (ushape 10 20 (rgb 192 64 128)))))))
</pre>

---

f. **Document and write a procedure, `(stack-then-sequence-then-stack stuff)`, that takes a doubly-nested list as input.  You should be able to guess what it should do.** ) _This problem is optional._

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define f/helper
  (lambda (thing)
    (if (drawing? thing)
        thing
        (stack-then-sequence thing))))
(define stack-then-sequence-then-stack
  (o stack (l-s map f/helper)))
</script>
(stack-then-sequence 
  (ushapes1->ellipses
    (list (list red-narrow blue-medium purple-wide)
          (list blue-medium purple-wide red-narrow)
          (list purple-wide red-narrow blue-medium))))
(stack-then-sequence 
  (ushapes1->ellipses
    (list purple-wide
          (list blue-medium red-medium))))
(stack-then-sequence 
  (ushapes1->ellipses
    (list red-narrow blue-narrow purple-narrow blue-narrow red-narrow)))
(stack-then-sequence-then-stack
  (ushapes2->ellipses
    (list (list (list red-narrow blue-medium purple-wide)
                (list blue-medium purple-wide red-narrow)
                (list purple-wide red-narrow blue-medium))
          (list purple-wide
                (list blue-medium red-medium))
          (list red-narrow blue-narrow purple-narrow blue-narrow red-narrow))))
(stack-then-sequence-then-stack
  (ushapes2->ellipses
    (list red-narrow
          (list blue-narrow blue-narrow blue-narrow blue-narrow)
          (list (list blue-narrow purple-narrow red-narrow)
                (list red-narrow purple-narrow blue-narrow)))))
(stack-then-sequence-then-stack
  (ushapes2->ellipses
    (color-variants-2
      (color-variants-1
        (color-variants-0
          (ushape 10 20 (rgb 192 64 128)))))))
</pre>

## Part 4: Freestyle

Using these procedures and any others you write, create an interesting image which you should call `freestyle`.

```
(define freestyle (stack-then-sequence-then-stack ...))
```

In building this image, you should write your own variants of the procedures in part 1 (convert a doubly nested list of ushapes to some kind of shape), part 2 (given a simply nested list of ushapes, make a doubly nested list of ushapes by varying each one), and part 3 (given a singly or doubly nested list of drawings, combine them into a single drawing).

For your variant of part 1, you might consider some hybrid shape, such as our thickly outlined ovals or rotated versions of the shapes. For your variant of part 2, you might consider changing not just color, but also size. For your variant of part 3, you might consider overlaying or using one of the other ways to put shapes beside or next to each other, such as`beside-align` or `above-align`. You might also consider rotating the shapes as you combine them.

Grading rubric
--------------

### The basics

```
[ ] Passes all of the basic autograder tests.
[ ] Includes the specified file, `shape-lists.rkt`.
[ ] Includes an appropriate header on the file that indicates the
    course, author, etc.
[ ] Acknowledges appropriately.
[ ] Code runs in Scamper.
[ ] Most procedures are documented in some form.
[ ] Code has been reformatted with Ctrl-I before submitting.
```

### Core requirements

```
[ ] Passes all of the core autograder tests.  For example,
    [ ] Correctly implements `ushapes->ellipses`.
    [ ] Correctly implements `ushapex->ellipses`.
    [ ] Correctly implements `ushapes1x->ellipses`.
    [ ] Correctly implements `ushapes1->ellipses`.
    [ ] Correctly implements `ushapes1->rectangles`.
    [ ] Correctly implements `ushapes1->triangles`.
    [ ] Correctly implements `ushapes2->ellipses`.
    [ ] Correctly implements `ushapes2->rectangles`.
    [ ] Correctly implements `ushapes2->triangles`.
    [ ] Correctly implements `color-variants-0`.
    [ ] Correctly implements `color-variants-1`.
    [ ] Correctly implements `color-variants-1x`.
    [ ] Correctly implements `stack`.
    [ ] Correctly implements `sequence`.
    [ ] Correctly implements `sequence-then-stack`.
    [ ] Correctly implements `stack-then-sequence`.
[ ] Code is well-formatted with appropriate names and indentation.
[ ] Code generally follows style guidelines.
[ ] Documentation for all core procedures is correct / has the correct form.
[ ] Creates an image called `freestyle`.
[ ] Adds a new procedure akin to `ushapes2-ellipses`.
[ ] Adds a new procedure akin to `color-variants-2`.  That is, adds a 
    procedure that takes a `slightly-nested-shape-list?` as a parameter 
    and creates a `doubly-nested-shape-list?`.
[ ] Adds a new procedure akin to `stack-then-sequence` that works
    with a `slightly-nested-shape-list?`
```

### Above and beyond

```
[ ] Passes all of the three-star autograder tests. For example,
    [ ] Correctly implements `sequence-then-stack-then-sequence`.
    [ ] Correctly implements `stack-then-sequence-then-stack`.
[ ] Style is impeccable (or nearly so).
[ ] Avoids repeated work.
[ ] Documentation for all procedures is correct / has the correct form.
```

## Q&A

### General

It says we are unlikely to need to use `doubly-nested-ushape-list?`. Out of curiosity, what would be an example of a situation where it would be helpful?

> Some of your procedures expect a doubly-nested ushape list as a parameter. You might find it useful to verify that the parameter has the correct type.

> I used it in documentation; you might want to, too.

Do we have to verify that the parameters are correct?

> Nope. You can let it crash.

### Part one

When dealing with a singly-nested lists, will we have to use conditionals to decide whether each element is a list or not?

> Yes. However, I'd suggest that you reverse that questsion. You should use a conditional to decide whether the element is a ushape or not. If it's not a ushape, it must be a list.

What should we do for the freestyle?

> Some "interesting" grid-like collection of shapes. Probably abstract.

> It doesn't have to be any more sophisticated than what's in the reading (like the grid o' ellispes or the funkier combinations.)

