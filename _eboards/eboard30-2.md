---
title: "EBoard 30: Vectors, continued (Section 2)"
number: 30
section: eboards
held: 2026-11-13
link: true
---
# {{ page.title }}

_New places, new partners, grab whiteboards._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

**Warning!** Friday the 13th falls on a Friday this month!

_Approximate overview_

* Administrivia (9:30)
* Q&A (9:40)
* Some vector review (9:45)
* Discuss Monday's lab on Vectors (10:00)
* Quizzes (10:20)

Administrative stuff
--------------------

### Introductory Notes

* As I noted in the email, I've rearranged the schedule a bit to 
  accommodate my absence.
* The graders should finish with the remaining MP redos this weekend.
* Reminder: You can use the evening tutors to help you go through any
  of the labs, LAs, or MPs you are having difficulty with.
    * Since there seems to be a lack of clarity: We have *two* kinds
      of evening support.
    * **Mentors** run review sessions on Wednesday and Thursday evenings.
      You earn tokens for attending mentor sessions.
    * **Tutors** are available 7-10pm Sunday through Thursday. They are
      mostly there for homework help, but they can go over missed quizzes
      and such with you. You do not earn tokens for meeting with tutors.

### Upcoming work

* Due Sunday, 2026-11-15
    * Reading for Monday:  [Randomness](../readings/randomness)
* Due Tuesday, 2026-11-17
    * [Mini-project 5](../mps/mp05)
        * [Submit MP5 on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9035604)
* On Friday, 2026-11-20
    * NO Quiz/LA on dictionaries
    * New Quiz/LA on randomness (Monday)
    * Makeup Quiz/LA on pairs 
    * Makeup Quiz/LA on vectors 
    * Makeup Quizzes/LAs on appropriate previous topics
* Due Tuesday, 2026-11-24
    * [Mini-project 1](../mps/mp01) third redo
        * [Submit MP1 redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9046469)
        * Please include a `CHANGES.txt` file when it's ready to be graded.
    * [Mini-project 2](../mps/mp02) second redo
        * [Submit MP2 redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9043680)
        * Please include a `CHANGES.txt` file when it's ready to be graded.
    * [Mini-project 4](../mps/mp04) first redo
        * [Submit MP4 redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9043688)
        * Please include a `CHANGES.txt` file when it's ready to be graded.

### Upcoming activities

Scholarly

* Tuesday, 19 October 2026, Noon--1:00 p.m., CS Commons (I think).
  _CS Table_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Friday, 13 November 2026, 7:30--9:30, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Saturday, 14 November 2026, 2:00--4:00, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Sunday, 15 November 2026, 4:00--5:30 p.m., Sebring-Lewis.
  _Family Folk Machine: Rising Like a Flame_

Multicultural

* Friday, 13 November 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Japan)_
* Friday, 20 November 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (???)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 14 November 2026, 1:00--4:00 p.m., Rosenbloom Field.
  _Football vs. Luther College_
* Saturday, 14 November 2026, 2:00--3:30 p.m., Sebring-Lewis.
  _Grinnell Symphony Orchestra_

Wellness

* Fill out the wellness survey that you received last week.
* Monday, 16 November 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 17 November 2026, 12:15--12:45 p.m., GCMoA.
  _Yoga in the Museum_
* Tuesday, 17 November 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Tuesday, 24 November 2026, 5:00--8:00 p.m., HSSC North Auditorium.
  _Therapy Dogs_

Misc

* Wednesday, 18 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 19 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

### Friday PSA

* Be well
* Take care of yourselves and others.
* Consent is essential. Consent is insufficient. Consent is impossible 
  when impaired.

Q&A
---

### Administrative

### MP5

### Vectors

Can we go over check 3?

> Sure! See below.

Vector review (TPS)
-------------------

_We'll be looking at vector problems today. It may be helpful to consider 
some central issues._

Like lists, vectors collect elements. How do vectors differ from lists?

* Vectors are mutable; you can change what elements are stored in any
  position of the vector.
* Both lists and vectors are indexed, however, it's slow to get the element
  at a particular index in the list (you have to `cdr` through the list), but
  fast in a vector.
* You can't easily change the length of a vector, no `cdr` nor `cons` for
  vectors.
* Because we can mutate vectors, analysis is a lot harder (changing a vector
  in one place may have unexpected effects elsewhere).
* We may need to sequence operations (e.g., change the vector and then recurse),
  which we can't necessarily do with nesting, so we need the `begin`
  structure to sequence operations.

What are some important vector procedures?

* `(vector-ref vec pos)` - Grab the element at the given position
* `(vector-set! vec pos val)` - Set the element at the given position
* `(vector? val)` - Determine if something is a vector.
* `(vector-fill! vec val)` - Replace all the elements with the same value
* `(vector-copy vec)` - Make a copy of the vector. (May not be in Scamper.)
* `(vector->list vec)` and `(list->vector lst)` - Convert. 
* `(vector a b c d)` - Make a vector
* `(make-vector size val)` - Make a vector of identical elements

We will need to process vectors. What is the "normal" mechanism for doing so?
(English-language answers are appropriate.)

* We create a helper function
* We keep track of the position, adding 1 or subtracting 1

Check #3 from the vectors reading
---------------------------------

### The prompt

Rewrite the second `number-vector-largest` using a local kernel that keeps track of the largest so far. Can you write the kernel so that it does not need the vector as a parameter?

### The second `number-vector-largest`

```
;;; (number-vector-largest vec) -> real?
;;;   vec : (vector-of real?)
;;; Find the largest number in a vector
(define number-vector-largest
  (lambda (vec)
    (number-vector-largest/helper vec (- (vector-length vec) 1))))

;;; (number-vector-largest vec pos) -> real?
;;;   vec : (vector-of? real)
;;;   pos : nonnegative-integer? 
;;; Finds the largest value in the subvector from 0 to pos.
;;; (inclusive).
(define number-vector-largest/helper
  (lambda (vec pos)
    ; Grab the current element from the vector
    (let ([current (vector-ref vec pos)])
      (if (zero? pos)
          current
          (max current
               (number-vector-largest/helper vec (- pos 1)))))))
```

### Tasks

* Use a local kernel.
* Avoid making the vector explicit
* Keep track of the largest so far

We'll do these step by step.

### Our solution

Step one: Make the helper local.

```
(define number-vector-largest
  (lambda (vec)
    (let ([helper 
            (lambda (vec pos)
              ; Grab the current element from the vector
              (let ([current (vector-ref vec pos)])
                (if (zero? pos)
                    current
                    (max current
                         (helper vec (- pos 1))))))])
      (helper vec (- (vector-length vec) 1)))))
```

Step two: Can we remove `vec` from the helper?

```
(define number-vector-largest
  (lambda (vec)
    (let ([helper 
            (lambda (pos)
              ; Grab the current element from the vector
              (let ([current (vector-ref vec pos)])
                (if (zero? pos)
                    current
                    (max current
                         (helper (- pos 1))))))])
      (helper (- (vector-length vec) 1)))))
```

Step two: Can we remove `vec` from the helper?

```
(define number-vector-largest
  (lambda (vec)
    (let ([helper 
            (lambda (pos largest-so-far)
              ; Grab the current element from the vector
              (let ([current (vector-ref vec pos)])
                (if (zero? pos)
                    largest-so-far
                    (helper (- pos 1)
                            (max current
                                 largest-so-far )))))]) 
      (helper (- (vector-length vec) 1)
              (vector-ref vec (- (vector-length vec) 1)))))) 
```

* How does the addition of `largest-so-far` to the helper change the initial call?
* How does the addition of `largest-so-far` to the helper change the recursive call?
* How does the addition of `largest-so-far` to the helper change our base-case value?
  _We might return `largest-so-far` instead of `current`._
* Does the addition of `largest-so-far` to the helper change anything else?

### A concern

```
(define number-vector-largest
  (lambda (vec)
    (let ([len (vector-length vec)])
      (let kernel ([pos (- len 1)]
                   [largest-so-far (vector-ref vec 0)])
        (if (zero? pos)
            largest-so-far
            (kernel (- pos 1)
                    (max largest-so-far (vector-ref vec (- pos 1)))))))))
```

Notes from Monday's lab on vectors
----------------------------------

### Exercise 2: Vector-based palettes 

It is possible to represent a collection of colors (a "palette")
as a vector. Why would we do so? Well, once we’ve chosen a palette,
we can represent an image as a collection of indices into that
palette. Such a representation is typically much more compact than
representing each color with the full RGB triplet.

For example, here is a palette that represents the colors in the
rainbow.

```
;;; rainbow-palette : (vector-of rgb?)
;;; A vector of RGB colors.
(define rainbow-palette
  (list->vector
    (map color-name->rgb
         (list "red" "orange" "yellow" "green" "blue" "indigo" "violet"))))
```

Write a procedure, `(palette? val)`, that determines if `val` is
a palette (a nonempty vector of RGB colors).

```
;;; (palette? val) -> boolean?
;;;   val : any
;;; Determine if `val` is a nonempty vector of RGB colors.
(define palette?
  (lambda (val)
    (and (vector? val)
         (> (vector-length val) 0)
         (all-rgb? val 0))))

;;; (all-rgb? vec pos) -> boolean?
;;;   vec : vector?
;;;   pos : nonnegative-integer?
;;; Determines if all of the elements of `vec` starting at `pos` are
;;; RGB colors.
(define all-rgb?
  (lambda (vec pos)
    (if (>= pos (vector-length vec))
        #t
        (and (rgb? (vector-ref vec pos))
             (all-rgb? vec (+ pos 1))))))
```

#### Tests

#### Notes

#### A solution

### Exercise 3: Darkening vector-based palettes

Write a procedure, `(palette-darker! palette)`, that, given a vector
of integer-encoded RGB colors, makes each color in the palette
slightly darker (i.e., using color-darker).

Note that you will not build a new vector. Rather, you will replace
each color in the existing vector by the darker version. You may
use the recursion pattern(s) from the reading and number-vector-scale!
as a starting point. If you do, be sure to cite your sources
appropriately.

```
;; (palette-darker! palette) -> void?
;;   palette : (vector-of rgb?)
;; Make each color in `palette` darker.
(define palette-darker!
  (lambda (palette)
    void))
```

#### Notes

* We're going to need a recursive helper.

#### A solution

```
(define palette-darker!
  (lambda (palette)
    (pdhelper palette 0)))

(define pdhelper
  (lambda (palette pos)
    (if (>= pos (vector-length palette))
        void
        (begin
          ; Make the color at `pos` darker
          (vector-set! palette pos (rgb-darker (vector-ref palette pos)))
          ; Recurse
          (pdhelper palette (+ 1 pos))))))
```

### Exercise 4: The brightest color

Write a procedure, `(palette-brightest palette)`, that takes one argument,
a vector of colors, and returns the brightest color in that vector.
You can assume that every position in the vector contains a color.

You will likely need the following definitions of `color-brightness`
and `color-brighter-of-two`.

```
;;; (color-brightness color) -> integer?
;;;   color : rgb?
;;; Compute the brightness of a color on a 0 .. 100 range.
(define color-brightness
  (lambda (color)
    (round (* 100 (/ (+ (* .30 (rgb-red color))
                        (* .59 (rgb-green color))
                        (* .11 (rgb-blue color)))
                     255)))))

;;; (color-brighter-of-two color1 color2) -> color?
;;;    color1 : rgb?
;;;    color2 : rgb?
;;; Find the brighter of two colors.
(define color-brighter-of-two
  (lambda (color1 color2)
    (if (>= (color-brightness color1) (color-brightness color2))
        color1
        color2)))
```

```
;;; (palette-brightest palette) -> rgb?
;;;   palette : (all-of (vector-of rgb?) nonempty?)
;;; Find the brightest color in `palette`. If multiple colors have
;;; the same brightness (and it's the largest brightness), can return
;;; any of them.
(define palette-brightest
  (lambda (palette)
    (rgb 0 0 0)))
```

#### Tests

#### Notes

#### A solution

### Exercise 6: Searching in vectors

Write a recursive procedure, `(vector-index-of vec elt)`, that looks
for `elt` in vector and returns the index of the first appearance
of `elt` if it appears in the vector and 01 otherwise.

```
;; > (vector-index-of (vector "a" "b" "c") "b")
;; 1
;; > (vector-index-of (vector "a" "b" "c" "c" "d" "b") "c")
;; 2
;; > (vector-index-of (vector "a" "b" "c") "d")
;; -1
```

Once again, you should not convert the vector to a list.

```
(define vector-index-of
  (lambda (vec elt)
    -1))
```

#### Tests

#### Notes

#### A solution

Quizzes
-------

Note: Use `(expt x p)` for "`x` to the `p`"

* Please pick up quizzes from the orange sheets on the South table. 
  (Alphabetical order by topic.)
* Please return quizzes face down to the purple sheets on the South table.
  (Alphabetical order by topic.)
* Don't forget to write your name. (You should be able to tell because
  the sheet is face down.)
