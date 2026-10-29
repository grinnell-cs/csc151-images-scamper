---
title: Mini-Project 4
subtitle: Processing lists of colors
summary: |
  We consider ways to process lists of colors through recursive techniques,
  reflecting on what recursion does and does not add to what we can do
  with "the big three" and other standard list functions.
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

As we've seen, the "big three" list operations---`map`, `filter`, and `reduce` (plus `apply`)---provide us with many ways to manipulate lists of values. However, there are some things that are difficult to do with only those operations. For example, it is difficult to use `map` to work with neighboring elements, but `reduce` shrinks our list to a single value. None of these functions expand lists. In such cases, and many others, we can use recursion to process lists.

### A note on provided code

* The `(palette colors)` function turns a list of colors into an image,
  useful for exploring and demonstrating the results of the various functions
  you will implement..
* The `(rgb-brightness color)` function determines the perceived brightness
  of an RGB color on a 0..100 scale. You'll use this function to select,
  remove, or otherwise use bright (or comparatively bright) colors.
* The `(rgb-brighter? c1 c2)` predicate determines whether `c1` appears
  brighter than `c2`. We'll be using it for similar circstances.
* The `(rgb-average-2 c1 c2)` function averages two RGB colors.
* The `(rgb-average-3 c1 c2 c3)` function averages three RGB colors.
* The `(rgb-similar? c1 c2)` function determines whether two colors are
  similar. We'll use this function for removing duplicates (or near
  duplicates) from al ist. We may also use this function for testing.
* The `(rgb-lists-similar? colors1 color2)` function determines whether
  two lists of RGB colors are similar. We'll use this function mostly for 
  testing.

Part one: Expanding lists
-------------------------

As we noted, one of the things we don't know how to do (or perhaps don't now how to _easily_ do) is to _expand_ the lists we have. In these problems, you will write functions that make lists bigger, often by inserting elements or replacing individual elements with new elements.

a. Document, write tests for, and implement a recursive function, `(insert-average colors)`, that takes a nonempty list of colors as input and returns a new list in which the average of each pair of neighboring colors is inserted between the neighboring colors.

```
(test-case "insert-average black-white"
           rgb-lists-similar? 
           (list (rgb 0 0 0) (rgb 127 127 127) (rgb 255 255 255))
           #(insert-average (list (rgb 0 0 0) (rgb 255 255 255))))
```

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
(import image)
(import test)

(define palette
  (let ([shape
          (lambda (color)
            (solid-rectangle 20 40 color))])
    (lambda (colors)
      (if (null? colors)
          (solid-square 0 (rgb 255 255 255 0))
          (overlay (apply beside (map shape colors))
                   (outlined-rectangle (* 20 (length colors)) 40 "white" 4)
                   (outlined-rectangle (* 20 (length colors)) 40 "black" 8))))))

(define rgb-average-2
  (lambda (c1 c2)
    (rgb (round (/ (+ (rgb-red c1) (rgb-red c2)) 2))
         (round (/ (+ (rgb-green c1) (rgb-green c2)) 2))
         (round (/ (+ (rgb-blue c1) (rgb-blue c2)) 2))
         (round (/ (+ (rgb-alpha c1) (rgb-alpha c2)) 2)))))

(define rgb-average-3
  (lambda (c1 c2)
    (rgb (round (/ (+ (rgb-red c1) (rgb-red c2) (rgb-red c3)) 3))
         (round (/ (+ (rgb-green c1) (rgb-green c2) (rgb-green c3)) 3))
         (round (/ (+ (rgb-blue c1) (rgb-blue c2) (rgb-blue c3)) 3))
         (round (/ (+ (rgb-alpha c1) (rgb-alpha c2) (rgb-alpha c3)) 3)))))

(define rgb-brightness
  (lambda (c) 
    (round (* (/ 100 255)
              (+ (* .30 (rgb-red c))
                 (* .59 (rgb-green c))
                 (* .11 (rgb-blue c)))))))

(define rgb-brighter?
  (lambda (c1 c2)
    (> (rgb-brightness c1) (rgb-brightness c2))))

(define insert-average
  (lambda (colors)
    (if (null? (cdr colors))
        colors
        (cons (car colors)
              (cons (rgb-average-2 (car colors) (cadr colors))
                    (insert-average (cdr colors)))))))
</script>
(palette (list (rgb 0 0 0) (rgb 255 255 255)))
(palette (insert-average (list (rgb 0 0 0) (rgb 255 255 255))))
(palette (list (rgb 255 0 0) (rgb 0 0 255) (rgb 128 128 128)))
(palette 
  (insert-average 
    (list (rgb 255 0 0) (rgb 0 0 255) (rgb 128 128 128) (rgb 0 255 0))))
(palette (insert-average (insert-average (list (rgb 0 0 0) (rgb 255 255 255)))))
</pre>

b. Document, write tests for, and implement a recursive function, `(split-colors colors)`, that takes a potentially empty list of RGB colors as input and returs a new list in which each color is "split" into three colors, one of the form `(rgb RED 128 128)`, one of the form `(rgb 128 GREEN 128)`, and one of the form `(RGB 128 128 BLUE)`, where `RED`, `GREEN`, and `BLUE` are the corresponding components of the original color.

```
(test-case "(split-colors (rgb 128 192 64))"
           rgb-lists-similar? 
           (list (rgb 128 128 128) (rgb 128 192 128) (rgb 128 128 64))
           #(split-colors (rgb 128 192 64)))
```

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define split-colors
  (lambda (colors)
    (if (null? colors)
        null
        (let ([color (car colors)])
          (append (list (rgb (rgb-red color) 128 128)
                        (rgb 128 (rgb-green color) 128)
                        (rgb 128 128 (rgb-blue color)))
                  (split-colors (cdr colors)))))))
</script>
(palette (split-colors (list (rgb 128 192 64))))
(palette (split-colors (list (rgb 255 0 255) (rgb 128 0 128) (rgb 0 0 0))))
</pre>

c. Document, write tests for, and implement a recursive function, `(double-bright colors amt)`, that takes a potentially empty list of RGB colors as input and makes two copies whose brightness is greater than `amt`.

d. Document, write tests for, and implement a recursive function, `(double-brighter colors)`, that takes a nonempty list of RGB colors as input and makes two copies of any color that is brighter than the next color in the list. You will not duplicate the last color in the list because it has no next color.

```
(test-case "double-brighter: two elements, first is brighter"
           rgb-lists-similar?
           (list (rgb 255 0 0) (rgb 255 0 0) (rgb 0 0 255))
           #(double-bright (list (rgb 255 0 0) (rgb 0 0 255))))
(test-case "double-brighter: two elements, first is darker"
           rgb-lists-similar?
           (list (rgb 255 0 0) (rgb 0 255 0))
           #(double-bright (list (rgb 255 0 0) (rgb 0 255 0))))
```

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define double-bright
  (lambda (lst)
    (if (null? (cdr lst))
        lst
        (if (rgb-brighter? (car lst) (cadr lst))
            (cons (car lst)
                  (cons (car lst)
                        (double-bright (cdr lst))))
            (cons (car lst)
                  (double-bright (cdr lst)))))))
</script>
(palette (double-bright (list (rgb 255 0 0) (rgb 0 0 255))))
(palette (double-bright (list (rgb 0 0 255) (rgb 255 0 0))))
(palette (double-bright (list (rgb 0 255 0) (rgb 255 0 0) (rgb 0 0 255))))
</pre>

Part two: Removing elements
---------------------------

Although the `filter` function permits us to remove elements from a list, it only does so based on analysis of a single element in the list. In these problems, we explore mechanisms for removing elements

a. Document, write tests for, and implement a recursive function, `(remove-every-other lst)` that removes every-other element from the list, starting with the second element.

```
(test-case "remove-every-other: one-element list"
           equal?
           (list 1)
           #(remove-every-other (list 1)))
(test-case "remove-every-other: two-element list"
           equal?
           (list 1)
           #(remove-every-other (list 1 2)))
(test-case "remove-every-other: three-element list"
           equal?
           (list 1 3)
           #(remove-every-other (list 1 2 3)))
```

b. Document, write tests for, and implement a recursive function, `(remove-brighter-than-next colors)`, that takes a potentially empty list of colors as input and removes every color that is brighter than the next color in the list.

c. Document, write tests for, and implement a recursive function, `(remove-similar-neighbors colors)`, that takes a potentially empty list of colors as an input and removes any color that is similar to the next color. You will use `rgb-similar?` to determine if two colors are similar.

d. Document, write tests for, and implement a recursive function `(remove-similar color colors)`, that removes a colors similar to `color` from `colors`.

e. Document, write tests for, and implement a recursive function, `(remove-similar-colors colors)`, that keeps all but the first copy of a collection of similar colors.

Part three: Extended mapping
----------------------------

As you know, `map` can be used to apply the same function to each element of a list. What if we want to apply different functions to different elements? We can use recursion to achieve that goal.

a. Document, write tests for, and implement two recursive functions, `(alternate-darker-lighter colors)` and `(alternate-lighter-darker colors)`, each of which takes a potentially empty list of RGB colors as an input and alternately makes the colors darker and lighter (`alternate-darker-lighter`) or lighter and darker (`alternate-lighter-darker`).

b. Document, write tests for, and implement a recursive function`(rgbify colors)`, that takes a potentially empty list of colors as input, and makes the first color redder, the second color greener, the third color bluer, the fourth color redder, the fifth color greener, and so on and so forth.

```
(test-case "rgbify: three whites, three grays, three blacks"
           rgb-lists-similar?
           (list (rgb-redder (rgb 255 255 255))
                 (rgb-greener (rgb 255 255 255))
                 (rgb-bluer (rgb 255 255 255))
                 (rgb-redder (rgb 128 128 128))
                 (rgb-greener (rgb 128 128 128))
                 (rgb-bluer (rgb 128 128 128))
                 (rgb-redder (rgb 0 0 0))
                 (rgb-greener (rgb 0 0 0))
                 (rgb-bluer (rgb 0 0 0)))
           #(rgbify (list (rgb 255 255 255) (rgb 255 255 255) (rgb 255 255 255)
                          (rgb 128 128 128) (rgb 128 128 128) (rgb 128 128 128)
                          (rgb 0 0 0) (rgb 0 0 0) (rgb 0 0 0))))
```

c. Document, write tests for, and implement a recursive function, `(average-pairs colors)`, that takes a list of colors as input and makes a list of the averages of neighboring pairs. If the list has zero or one elements, return the empty list.

```
(test-case "average-pairs: red green blue"
           rgb-lists-similar?
           (list (rgb-average-2 (rgb 255 0 0) (rgb 0 255 0))
                 (rgb-average-2 (rgb 0 255 0) (rgb 0 0 255)))
           #(average-pairs (list (rgb 255 0 0) (rgb 0 255 0) (rgb 0 0 255))))
```

d. Document, write tests for, and implement a recursive function, `(average-triplets colors)`, that takes a list of colors as input and makes a list of the average of neighboring triplets. If the list has zero, one, or two elements, return the empty list.

```
(test-case "average-triplets: black red green blue white"
           rgb-lists-similar?
           (list (rgb-average-3 (rgb 0 0 0) (rgb 255 0 0) (rgb 0 255 0))
                 (rgb-average-3 (rgb 255 0 0) (rgb 0 255 0) (rgb 0 0 255))
                 (rgb-average-3 (rgb 0 255 0) (rgb 0 0 255) (rgb 255 255 255)))
           #(average-triplets (list (rgb 0 0 0)
                                    (rgb 255 0 0)
                                    (rgb 0 255 0)
                                    (rgb 0 0 255)
                                    (rgb 255 255 255))))
```

Part four: Rearranging lists
----------------------------

Finally, we have very few function (perhaps only `sort`) that permit us to rearrange the elements of alist. In this section, we'll consider some methods for rearranging lists.

a. Document, write tests for, and implement a function, `(brightest-to-end colors)`, that rearranges `colors` by swapping neighboring pairs in which the first color is brighter than the second.  For `brightest-to-end`, you should swap out-of-order elements before recursing.

b. Document, write test tests for, and implement a function, `(brightest-to-front colors)`, that rearranges `colors` by swapping neighboring pairs in which the first color is darker than the second. For `brightest-to-front`, you should recurse on the `cdr` before swapping.

Part five: A return to the basics
---------------------------------

Pick at least two of the functions you've written above and rewrite them without explicit recursion, using the standard list functions (`map`, `filter`, `reduce`, `apply`, `reverse`, `make-list`, `range`, and such). Add `/alt` to the end of the function name so that we know that you've built an alternative version.

Note: The two functions must come from different parts of the assignment (e.g., one from part one and one from part two).

If you are particularly ambitious, you can write more.

Grading rubric
--------------

### The basics

```
[ ] Includes the specified file, `color-lists.scm`.
[ ] Includes an appropriate header on the file that indicates the
    course, author, etc.
[ ] Acknowledges appropriately.
[ ] Code runs in Scamper.
[ ] Most functions are documented in some form.
[ ] Code has been reformatted with Ctrl-I before submitting.
```

### Core requirements

```
[ ] Passes all of the core autograder tests.  
[ ] Code is well-formatted with appropriate names and indentation.
[ ] Code generally follows style guidelines.
[ ] Documentation for all core functions is correct / has the correct form.
[ ] Includes at least one edge case test for each procedure.
[ ] Includes at least one normal case test for each procedure.
[ ] Part five: Includes one function from part 1, 2, 3, or 4 implemented 
    without explicit recursion.
[ ] Part five: Includes another function from a different part implemented 
    without explicit recursion.
```

### Above and beyond

```
[ ] Avoids repeated work.
[ ] Part five: Includes additional procedures implemented without explicit 
    recursion.
```

Q&A
---

### General

Are you likely to provide examples and tests for the functions that lack examples and tests?

> I hope so.

Should we write test-cases for all questions in MP-4?

> Yes, you should write tests cases for all of the questions and
  you should leave them in the file.

### Part one

### Part two

### Part three

### Part four

### Part five

