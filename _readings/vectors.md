---
title: Vectors
summary: |
  Vectors are data structures that are very similar to lists
  in that they arrange data in linear fashion. Vectors differ from lists
  in two significant ways: Unlike lists, vectors are *indexed* and vectors
  are *mutable*.
---

## Introduction: Deficiencies of Lists

As you've seen in many of the procedures and programs we've written so
far, there are many problems in which we have to deal with collections
of information. We have several techniques for representing collections
of data:

* We can represent the collection as a list.
* We can represent the collection as a nested list.
* We can store the collection in a file.

Representing a collection as a list has some problems. In particular, it
is relatively expensive to *get* a particular element and it is equally
expensive to *change* a particular element. Why is it expensive to get
an element (say, the tenth element)? In the case of a list, we need
to follow the cdr of each pair through the list until we reach the
element. In the case of a tree, we need to figure out how many values
are in the left subtree to decide where to look. Changing an element
may be even worse, because once we've reached the position, we need to
build the structure back to a new form.

Does this mean that lists and other similar structures are inappropriate
ways to represent collections? Certainly not. Rather, they work very well
for some purposes (e.g., it is easy to extend a list) and less well for
other purposes (e.g., extracting and changing).

To resolve these deficiencies, Scheme provides an alternate mechanism
for representing collections, the *vector*.

## Indexing, a key feature of vectors

You may have noted that when we use lists to group data (e.g., the tallies
for the words in a book), we need to use `list-ref` or repeated calls
to `cdr` to get later elements of the list. Unfortunately, `list-ref`
works by cdr'ing down the list. Hence, it takes about five steps to
get to the fifth element of the list and about one hundred steps to
get to the one hundredth element of a list. Similarly, to get to the
fifth element of a file, we'll need to read the preceding elements and
to get to the hundredth element, we'll also need to read through the
preceding elements. It would be nicer if we could access any element of
the group of data in the same amount of time (preferably a small amount
of time). 

Vectors address this problem. Vectors contain a fixed number of elements
and provide *indexed access* (also called *random access*) to those
elements, in the sense that each element, regardless of its position in
the vector, can be recovered in the same amount of time. In this respect,
a vector differs from a list or a file: The initial element of a list
is immediately accessible, but subsequent elements are increasingly
difficult and time-consuming to access.

## Mutation, another key feature of vectors

You may have also noted that we occasionally want to change an element
of a group of data (e.g., to change a student's grade in the structure
we use to represent that student; to update a tally). When we use lists,
we essentially need to build a new list to change one element. When we
use files, we often have to build a new file, copying both preceding
and subsequent values.

Vectors are *mutable* data structures: It is possible to replace an
element of a vector with a different value, just as one can take out the
contents of a container and put in something else instead. It's still
the same vector after the replacement, just as the container retains
its identity no matter how often its contents are changed.

The particular values that a vector contains at some particular moment
constitute its *state*. One could summarize the preceding paragraph by
saying that the state of a vector can change and that state changes do
not affect the underlying identity of the vector.

## A practical detail: How DrRacket displays vectors

When showing a vector, Scamper follows a format much like the list,
using `vector` instead of `list`.  For instance, here's how Scamper
shows a vector containing the strings `"alpha"`, `"beta"`, and
`"gamma"`, in that order:

```
(vector "alpha" "beta" "gamma")
```

Note that this is not the same approach that other Scheme variants
use. The Scamper designers felt that this model was easier for students to
read and understand.

## Vector procedures

Standard Scheme provides the following fundamental procedures for creating
vectors and selecting and replacing their elements.  You'll find that many
of them correspond to similar list procedures.

### `vector`

The constructor `vector` takes any number of arguments and assembles
them into a vector, which it returns.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(vector "alpha" "beta" "gamma")
(vector)  ; the empty vector -- no elements!
(define beta 2)
(vector "alpha" beta (list "gamma" 3) (vector "delta" 4) (vector "epsilon"))
</pre>

As the last example shows, Scheme vectors, like Scheme lists, can be
*heterogeneous*, containing elements of various types.

### `make-vector`

The `make-vector` procedure takes two arguments, a natural number `k`
and a Scheme value `obj`, and returns a `k`-element vector in which each
position is occupied by `obj`.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(make-vector 12 "foo")
(make-vector 4 0)
(make-vector 0 4)
</pre>

### `vector?`

The type predicate `vector?` takes any Scheme value as argument and
determines whether it is a vector.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(vector? (vector "alpha" "beta" "gamma"))
(vector? (list "alpha" "beta" "gamma"))  ; a list, not a vector
(vector? "alpha beta gamma")  ; a string, not a vector
</pre>

### `vector-length`

The `vector-length` procedure takes one argument, which must be a vector,
and returns the number of elements in the vector.  Unlike the `length`
procedure for lists, which must look through the whole list to find the
length, `vector-length` can immediately determine the length of a vector.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(vector-length (vector 3 1 4 1 5 9))
(vector-length (vector "alpha" "beta" "gamma"))
(vector-length (vector))
</pre>

### `vector-ref`

The selector `vector-ref` is much like `list-ref` or `string-ref`. It takes two arguments -- a vector `vec` and a natural number `k` (which must be less than the length of `vec`). It returns the element of `vec` that is preceded by exactly `k` other elements. In other words, if `k` is 0, you get the element that begins the vector; if `k` is 1, you get the element after that; and so on.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(vector-ref (vector 3 1 4 1 5 9) 4)
(vector-ref (vector "alpha" "beta" "gamma") 0)
(vector-ref (vector "alpha" "beta" "gamma") 3)
</pre>

### `vector-set!`

All of the previous procedures look a lot like list procedures, except
that many are more efficient (e.g., `vector?` and `vector-length` take a
constant number of steps; `list?` takes a number of steps proportional
to the the length of the list and `list-ref` takes a number of steps
proportional to the index). Now let's see a procedure that's much
different. We can use procedures to change vectors.

The mutator `vector-set!` takes three arguments -- a vector `vec`,
a natural number `k` (which must be less than the length of `vec`),
and a Scheme value `obj` -- and replaces the element of `vec` that is
currently in the position indicated by `k` with `obj`. This changes the
state of the vector irreversibly; there is no way to find out what used
to be in that position after it has been replaced.

It is a Scheme convention to place an exclamation mark at the end of the name of any procedure that makes such an irreversible change in the state of an object. One of our colleagues suggests that the exclamation mark signifies "proceed with caution".

The value returned by `vector-set!` is unspecified; one calls
`vector-set!` only for its side effect on the state of its first argument.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(define sample-vector (vector "alpha" "beta" "gamma" "delta" "epsilon"))
sample-vector 
(vector-set! sample-vector 2 "zeta")
sample-vector 
(vector-set! sample-vector 0 "foo")
sample-vector 
(vector-set! sample-vector 2 -38.72)
sample-vector 
</pre>

Some versions of Scheme distinguish "mutable" vectors, which you can change with `vector-set!`, from "immutable" vectors, which cannot be changed. Scamper does not appear to include immutable vectors.

### `vector->list` and `list->vector`

The `vector->list` procedure takes any vector as argument and returns a
list containing the same elements in the same order; the `list->vector`
procedure performs the converse operation.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(vector->list (vector 31 27 16))
(vector->list (vector))
(list->vector (list #\a #\b #\c))
(list->vector (list 31 27 16))
</pre>

### `vector-fill!`

The `vector-fill!` procedure takes two arguments, the first of which
must be a vector. It changes the state of that vector, replacing each
of the elements it formerly contained with the second argument.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
</script>
(define sample-vector (vector "rho" "sigma" "tau" "upsilon"))
sample-vector 
(vector-fill! sample-vector "kappa")
sample-vector
</pre>

The `vector-fill!` procedure is invoked only for its side effect and
returns an unspecified value.

While some older implementations of Scheme may lack the `list->vector`,
`vector->list`, and `vector-fill!` procedures, it is straightforward to
define them in terms of the others. We may challenge you to do so at
some point.

## Detour: Sequencing operations

You should have noted that procedures like `vector-set!` and `vector-fill!` create a potential problem: Since they don't return any value, if we're writing a procedure that needs to continue using the vector, we need to put more than one expression in the place we normally put the expression. Let's see what happens if we try to write a procedure that takes a vector as input, sets the first value to null, and returns the modified vector.

```
(define nullify-first!
  (lambda (vec)
    (vector-set! vec 0 null)
    vec))
Parser error [2:3-4:8]: Malformed lambda expression (a list of parameters and a body).
```

Whoops! In Scamper, a lambda expression can only have _one_ expression in its body. We've given it two. What should we do?

Fortunately, Scamper provides an extra control structure for times in which we want to execute multiple expressions in sequence. `(begin exp1 exp2 ...)` evaluates each expression in turn and returns the value of the last expression.


<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(begin 3 4 5)
(define vec (vector 1 2 3))
(begin (vector-set! vec 0 null) vec)
</pre>

We can take advantage of this in writing our strange `nullify-first!` procedure.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(define nullify-first!
  (lambda (vec)
    (begin
      (vector-set! vec 0 null)
      vec)))
(nullify-first! (vector 1 2 3 4 5))
</pre>

We will need the `begin` syntax in many of the procedures we write that process vectors.

<!--
## Selecting random elements from vectors

You may recall that we recently defined a procedure, `random-elt`,
that randomly selects an element from a list.  

```
;;; Procedure:
;;;   random-elt
;;; Parameters:
;;;   lst, a non-empty list 
;;; Purpose:
;;;   Unpredictably pick an element of lst.
;;; Produces:
;;;   val, a value
;;; Preconditions:
;;;   [No additional]
;;; Postconditions:
;;;   * val is an element of lst.
;;;   * If lst contains more than one element, it is difficult to predict 
;;;     which element val is.
(define random-elt
  (lambda (lst)
    (list-ref lst (random (length lst)))))
```

The procedure is simple and straightforward.  But it's slow.  Since we
have to find the length of the list each time we look for a random element,
we'll spend time and effort stepping through the elements of the list 
with `cdr`.  

Fortunately, it's straightforward to write a similar procedure using
vectors.  We just change the list procedures to their corresponding
vector versions.

```
;;; Procedure:
;;;   random-vector-elt
;;; Parameters:
;;;   vec, a non-empty vector
;;; Purpose:
;;;   Unpredictably pick an element of vec.
;;; Produces:
;;;   val, a value
;;; Preconditions:
;;;   [No additional]
;;; Postconditions:
;;;   * val is an element of vec.
;;;   * If vec contains more than one element, it is difficult to predict 
;;;     which element val is.
(define random-vector-elt
  (lambda (vec)
    (vector-ref vec (random (vector-length vec)))))
```

Let's check it.

```
> (define words (vector "alpha" "beta" "gamma" "delta" "epsilon"))
> (random-vector-elt words)
"beta"
> (random-vector-elt words)
"epsilon"
> (random-vector-elt words)
"alpha"
> (random-vector-elt words)
"alpha"
> (random-vector-elt words)
"beta"
```

We'll see in the lab just how much difference this makes.
-->

## Implementing number vectors

We frequently store only one type in a collection. For example, just as
we might restrict a list or pair structure to contain only numbers, we
might restrict the numbers in a vector to store only integers.  Those
integers might, for example, represent tallies of letters or words.

Say we had such a vector of numbers--how could we increment the tally
in one of the positions? After some reflection, it seems We need three
steps, one to get the current value in the vector, another to increment
that value, and the last step to make that value the new entry in the
given position. We put these steps together as follows.

```
;;; (number-vector-increment-at! vec index) -> void?
;;;   vec : vectorof number?
;;;   index : integer? (an index)
;;; Increment the value in a vector at a particular index.
(define number-vector-increment-at!
  (lambda (vec index)
    (vector-set! vec 
                 index 
                 (increment (vector-ref vec index)))))
```

The fact that vectors allow mutation makes the increment straightforward.

But what if we wanted to increment every value in a vector? With
lists we might think about using basic list recursion to pass over
the list and add one to each item. (And then we might think better
of it and use `map`). There is no analog for `car`/`cdr` that we
might use to process lists, neither is there an analog for `map`.

Fortunately, indexing is fast in vectors, so we can use numeric recursion
to iterate over all the positions in a vector, applying our increment
function along the way. Thus, we might track *`pos`*, the current position
to modify in the vector, starting at zero and ending when we reach the
length of the vector. We can encapsulate this repeated mutation with
tail recursion. (We're writing a separate kernel here, rather than defining
it with a `let` expression, to clarify how the procedure works.)

```
;;; (number-vector-increment-all! vec) -> void?
;;;   vec : vectorof number?
;;; Increment the value at all vector positions
(define number-vector-increment-all!
  (lambda (vec)
    (number-vector-increment-all!/kernel vec 0 (vector-length vec))))

;;; (number-vector-increment-all!/kernel vec pos len) -> void?
;;;   vec : vectorof? number
;;;   pos : integer? (index)
;;;   len : integer
;;; Increment all the elements at positions `pos` (inclusive)
;;; through `len` (exclusive)
(define number-vector-increment-all!/kernel
  (lambda (vec pos len)
    (if (< pos len)   ; When the position is valid
        (begin
          ; Increment at the current position
          (number-vector-increment-at! vec pos)
          ; Continue from the next position
          (number-vector-increment-all!/kernel vec (+ pos 1) len))
        void)))
```

You'll note that we've used `void` in the consequent position of the `if`. `void` is the way we say "nothing" in Scamper. This `void` indicates that we're returning nothing.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(define number-vector-increment-at!
  (lambda (vec index)
    (vector-set! vec 
                 index 
                 (increment (vector-ref vec index)))))
(define number-vector-increment-all!
  (lambda (vec)
    (number-vector-increment-all!/kernel vec 0 (vector-length vec))))
(define number-vector-increment-all!/kernel
  (lambda (vec pos len)
    (if (< pos len)   ; When the position is valid
        (begin
          ; Increment at the current position
          (number-vector-increment-at! vec pos)
          ; Continue from the next position
          (number-vector-increment-all!/kernel vec (+ pos 1) len))
        void)))
(define wp (vector 6 3 4 5 7 8 9))
wp
(number-vector-increment-all! wp)
wp
(number-vector-increment-all! wp)
wp
</pre>

There are various ways to mutate all vector elements; the lab will
suggest some alternatives. Unfortunately, we do not always have a special
helper function like `number-vector-increment-at!` that allows us to
write such streamlined code. Instead we must combine the indexing and
mutation steps directly in the recursion.

As an example, suppose we wished to convert the tallies to percentages by
dividing each number by the sum of all the numbers in the vector. Assuming
you have a means of totalling these numbers (a procedure you will write
in the lab), we still need to iterate over all vector positions, just as
we did in `number-vector-increment-all!` only this time we use the position
variable *`pos`* directly to index the vector with `vector-ref`, rather
than with a helper. Putting this together, we might write the following
procedure.

```
;;; (number-vector-scale! vec divisor) -> void?
;;;   vec : vectorof number?
;;;   divisor : number?
;;; Scale all the elements in the vector by dividing by the given
;;; divisor.
(define number-vector-scale!
  (lambda (vec divisor)
    (number-vector-scale!/helper vec divisor 0 (vector-length vec))))

;;; (number-vector-scale!/helper vec divisor pos len) -> void?
;;;   vec : vectorof number?
;;;   divisor : number?
;;;   pos : integer? (index)
;;;   len : integer? (length of vec)
;;; Scale all the elements in the vector from pos (inclusive) to
;;; len (exclusive) by dividing by the given divisor.
(define number-vector-scale!/helper
  (lambda (vec divisor pos len)
     (if (< pos len)         ; If the position is valid,
       (begin
         (vector-set! vec      ; Set the new value in the vector
                      pos      ; at the current position
                      (/ (vector-ref vec pos) divisor)) ; to the quotient
           (number-vector-scale!/helper vec ; And process the rest
                                        divisor
                                        (+ pos 1)
                                        len))
       void)))
```

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define number-vector-scale!
  (lambda (vec divisor)
    (number-vector-scale!/helper vec divisor 0 (vector-length vec))))
(define number-vector-scale!/helper
  (lambda (vec divisor pos len)
     (if (< pos len)
       (begin
         (vector-set! vec
                      pos
                      (/ (vector-ref vec pos) divisor))
           (number-vector-scale!/helper vec
                                        divisor
                                        (+ pos 1)
                                        len))
       void)))
</script>
(define nums (vector 10 5 8 3))
(number-vector-scale! nums 26)
nums
(number-vector-scale! nums (/ 1 26))
nums
</pre>

You'll note that `number-vector-scale!`, like `number-vector-increment-all!` before it, returns nothing (void). Why return nothing, rather than the vector? Tradition. In most cases, operations that mutate their argument return nothing, rather than the mutated argument.

All of these examples change the vector.  Of course, we need not change the vector as we iterate over it. Perhaps we just want to find the largest value in a vector. We still need to iterate over all the positions, except we might now use the standard recursive pattern that requires us to use a combination step to get a complete answer from the partial (recursive) answer.

```
;;; (number-vector-largest vec) -> real?
;;;   vec : (vector-of real?)
;;; Find the largest number in a vector
(define number-vector-largest
  (lambda (vec)
    (number-vector-largest/helper vec 0 (- (vector-length vec) 1))))

;;; (number-vector-largest vec pos last) -> real?
;;;   vec : vectorof? real
;;;   pos : integer? (index)
;;;   last : integer? (index)
;;; Finds the largest value in the subvector from pos (inclusive) to last
;;; (inclusive).
(define number-vector-largest/helper
  (lambda (vec pos last)
    ; Grab the current element from the vector
    (let ([current (vector-ref vec pos)])
      (if (> pos last)
          ; We have finished the vector. Return nothing.
          current
          ; Otherwise, find the largest in the remainder, and then
          ; take the largest of the current element and that element.
          (max current
               (number-vector-largest/helper vec (+ pos 1) last))))))
```

You'll note that in this case, we stop when we hit the last index, rather than when we exceed it. Why? Because there's not a sensible base case for "largest thing in an empty subvector".

Let's see how it works.


<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
(define number-vector-largest
  (lambda (vec)
    (number-vector-largest/helper vec 0 (- (vector-length vec) 1))))
(define number-vector-largest/helper
  (lambda (vec pos last)
    (let ([current (vector-ref vec pos)])
      (if (= pos last)
          current
          (max current
               (number-vector-largest/helper vec (+ pos 1) last))))))
</script>
(number-vector-largest (vector 10 1 2 3))
(number-vector-largest (vector -5 -3 -1))
(number-vector-largest (vector 82))
(number-vector-largest (vector 10 -5 18 23 2))
(number-vector-largest (vector))
</pre>

Some folks find it easiest to work from back to front, rather than
front to back.  That also lets us stop when we reach (or pass) zero.

```
;;; (number-vector-largest vec) -> real?
;;;   vec : vectorof real?
;;; Find the largest number in a vector
(define number-vector-largest
  (lambda (vec)
    (number-vector-largest/helper vec (- (vector-length vec) 1))))

;;; (number-vector-largest vec pos) -> real?
;;;   vec : vectorof? real
;;;   pos : integer? (index)
;;;   last : integer? (index)
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

We get the same results.

<pre class="scamper-transcript">
<script type="text/scamper-preamble">
(define number-vector-largest
  (lambda (vec)
    (number-vector-largest/helper vec (- (vector-length vec) 1))))
(define number-vector-largest/helper
  (lambda (vec pos)
    ; Grab the current element from the vector
    (let ([current (vector-ref vec pos)])
      (if (zero? pos)
          current
          (max current
               (number-vector-largest/helper vec (- pos 1)))))))
</script>
(number-vector-largest (vector 10 1 2 3))
(number-vector-largest (vector -5 -3 -1))
(number-vector-largest (vector 82))
(number-vector-largest (vector 10 -5 18 23 2))
(number-vector-largest (vector))
</pre>

In most cases, it doesn't matter whether we process the indices left to right or right to left.

## Patterns of recursion over vectors

Each time we learn a new structure, we learn techniques for recursion
over that structure. As the previous examples suggested, recursion over
vectors is relatively straightforward, but usually requires that we have
a helper procedure that includes additional parameters - the current
position in the vector. (We also typically precompute a stopping point
so that we don't have to recompute it for each pass through the helper.)

The test for the base case is then to check whether the current position
has reached the stopping point and the "simplify" step is to add 1 to
the position. As usual, the "combine" step is problem dependent.

```
(define vector-proc
  (lambda (vec other)
    (vector-proc/helper vec other 0 (vector-length vec))))

(define vector-proc/helper 
  (lambda (vec other pos len)
    (if (= pos len)
        (base-case vec other)
        (combine (vector-ref vec pos)
                 (vector-proc/helper vec other (+ pos 1) len)))))
```

At other times, it's better to start at the end of the vector and
work backwards. In this strategy, we get the base case when the
position reaches 0 and we simplify by subtracting 1.

```
(define vector-proc
  (lambda (vec other)
    (vector-proc/helper vec other (- (vector-length vec) 1))))

(define vector-proc/helper
  (lambda (vec other pos)
    (if (< pos 0)
        (base-case vec other)
        (combine (vector-ref vec pos)
                 (vector-proc/helper vec other (- pos 1))))))
```

Because vectors are mutable, we often use an imperative pattern with
(perhaps multiple) operations that have side-effects.

```
(define vector-proc!
  (lambda (vec other)
    (let ([len (vector-length vec)])
      (vector-proc!/helper vec other 0 len))))

(define vector-proc!/helper 
  (lambda (pos)
    (cond
      (if (< pos len)
          (begin
            (operation! vec pos)
            ...
            (vector-proc!/helper vec other (+ pos 1) len))
          (base-case! vec other)))))
```

And, as before, we can count down, rather than up.

```
(define vector-proc!
  (lambda (vec other)
    (vec other (- (vector-length vec) 1))))

(define vector-proc!/helper 
  (lambda (vec other pos)
      (if (>= pos 0)
          (begin
            (operation! vec pos)
             ...
             (vector-proc!/helper vec other (- pos 1)))
          void)))
```

## Summary of important vector procedures

`(list->vector lst)`  
  : Convert a list to a vector.

`(vector val_1 ...  val_n)`  
  : Create a vector with the given elements.

`(vector? val)`  
  : Determine if val is a vector.

`(vector-fill! vec val)`  
  : Fill vec with multiple copies of val.

`(vector-ref vec pos)`  
  : Extract an element from vec.

`(vector-set! vec pos val)`  
  : Set element pos of vec to val.

`(vector->list vec)`  
  : Convert a vector to a list.

## Self checks

### Check 1: Processing numeric vectors

a. Make a copy of `number-vector-increment-at!` from above.

b. Try using `number-vector-increment-at!` on a vector of two numbers.

```
> (define v1 (vector 7 11))
> (number-vector-increment-at! v1 1)
> v1
```

c. Use `number-vector-increment-all!` on the vector to verify it behaves as intended.

```
> (define v2 (make-vector 2 11))
> (vector-set! v2 0 7)
> (number-vector-increment-all! v2)
> v2
```

### Check 2: Design choices (‡)

As you may have noted, we have multiple design choices in writing procedures that visit all (or many) elements of a vector. Here are a few.

* Are we changing the vector or extracting data from it?
* Do we stop when we've run out of positions or when we're at the last position?
* Do we step through the postions starting at 0 and working our way up to the length, or do we stop at the end and work our way down to zero?
* If we're changing the vector, what should we return when we are done?

a. Stopping at the last position, rather than when we exceed the last position, corresponds to stopping when we reach a singleton list, rather than stopping when we hit the empty list. Give three examples procedures in which we wanted to stop when we were at one element in a list.

b. Do you think you'll prefer working upward from 0 to the length, or downward from the length to 0? Why?

### Check 3: Local helpers (‡)

Rewrite the second `number-vector-largest` using a local kernel that keeps track of the largest so far. Can you write the kernel so that it does not need the vector as a parameter?

