;; CSC-151-NN (2026Fa)
;; Lab: List composition and decomposition
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

;; +-----------------------+------------------------------------------
;; | Requirements and such |
;; +-----------------------+

(import image)
(import test)

;; +-------------+----------------------------------------------------
;; | Preparation |
;; +-------------+

;; There are five exercises; here's the division of labor.

;; Exercise 1: A-Side
;; Exercise 2: B-Side
;; Exercise 3: B-Side
;; Exercise 4: A-Side
;; Exericse 5: B-Side

;; The partner closest to the board is the A partner. The partner
;; further from the board is the B partner.

;; The person with the problem description should drive and their
;; partner should navigate.  Again, make sure to be good partners and
;; focus completely on solving the current problem together rather
;; than working ahead on your own.

;; a. Don't forget our "start of session" steps.  Introduce yourself
;; to your partner. Chat with your partner about working habits and
;; strengths.  Perhaps share something interesting about yourself.

;; b. If you haven't done so yet, make sure to open tabs in your browser
;; for the lab and the recent readings.

;; c. Don't forget to fill in the top of the file!

;; +-------------------------------+----------------------------------
;; | Exercise 1: Some simple lists |
;; +-------------------------------+

;; Driver: A

;; a. Using the `cons` procedure, build a one-element list that contains the 
;; value "red". The result of your call should be (list "red").

(define ex1a "???")

(test-case "ex1a" equal? (list "red") (lambda () ex1a))

;; b. Use the `cons` procedure to build a list of the value 5 followed
;; by the value "red". The result of your call should be (list 5 "red").
;; Note that you will need to call `cons` twice to build this list.

(define ex1b "???")

(test-case "ex1b" equal? (list 5 "red") (lambda () ex1b))

;; c. Call the `cons` procedure to build a list of the value 2, followed
;; by the value 5, followed by "red". The result of your call should
;; be (list 2 5 "red"). Note that you will need to call `cons` three times
;; to build this list.

(define ex1c "???")

(test-case "ex1c" equal? (list 2 5 "red") (lambda () ex1c))

;; d. Build the same list as in step c, using `list` rather than `cons`.

(define ex1d "???")

(test-case "ex1d" equal? (list 2 5 "red") (lambda () ex1d))

;; +-----------------------------------------------+------------------
;; | Exercise 2: Extracting information from lists |
;; +-----------------------------------------------+

;; Driver: B

;; Consider the following list definition. 

(define letters (list "a" "b" "c" "d" "e" "f" "g" "h" "i"))

;; a. What do you expect the result of `(car letters)` to be? Check your
;; answer experimentally.

;; > (car letters)
;; ???

;; b. What do you expect the result of `(cdr letters)` to be? Check your
;; answer experimentally.

;; > (cdr letters)
;; ???

;; c. What do you expect the result of `(car (cdr letters))` to be? Check
;; your answer experimentally.

;; > (car (cdr letters))
;; ???

;; d. What do you expect the result of `(cdr (cdr letters))` to be?
;; Check your answer experimentally.

;; > (cdr (cdr letters))
;; ???

;; e. What do you expect the result of `(cdr (car letters))` to be? Check
;; your answer experimentally.

;; > (cdr (car letters))
;; ???

;; f. Write an expression using `car` and `cdr` that extracts element 5
;; of letters. (That is, your expression should extract the "f".) You may
;; not use `list-ref`.

(define ex2f "???")

(test-case "ex2f" equal? "f" (lambda () ex2f))

;; +--------------------------+---------------------------------------
;; | Exercise 3: Nested lists |
;; +--------------------------+

;; Driver: B

;; Consider the following lists.

;; (define ex3 (list "a" (list "b" "c") "d" (list "e" (list "f" "g"))))

;; a. What value do you expect to see for `ex3`?

;; ???

;; Check your answer experimentally.

;; > ex3
;; ???

;; b. What is the length of `ex3`?

;; ???

;; Check your answer experimentally.

;; > (length ex3)
;; ???

;; c. What do you expect to get if you reverse `ex3`?

;; ???

;; Check your answer experimentally.

;; > (reverse ex3)
;; ???

;; +--------------------------------------+---------------------------
;; | Exercise 4: Extracting list elements |
;; +--------------------------------------+

;; Driver: A

;; We currently use the `list-ref` procedure to extract elements. But
;; what if we didn't have that procedure? We might have to write our own
;; procedures to extract elements. We'll write a few such procedures in
;; this exercise.

;; a. Here's a sample procedure that purports to find the third element
;; of a list (the element at index 2).

(define element-two
  (lambda (lst)
    (car (cdr (cdr lst)))))

;; As you might expect, this procedure generally works fine.

;; > (element-two (list "a" "b" "c" "d" "e"))
;; "c"
;; > (element-two (list "d" "e" "f"))
;; "f"

;; Unfortunately, if the list has fewer than three elements, `element-two`
;; crashes.

;;    > (element-two (list "a" "b"))
;;    ⚠ expected pair or nonempty-list as the first argument, received null
;;    > (element-two (list "eh"))
;;    ⚠ expected pair or nonempty-list as the first argument, received null
;;    > (element-two null)
;;    ⚠ expected pair or nonempty-list as the first argument, received null

;; Write a procedure, `element-2`, that returns the element at index
;; 2 of a list with at least three elements and returns false `#f` if
;; the list has fewer than three elements. You may not use `length`
;; or `list-ref` in writing `element-2`.

;;; (element-2 lst) -> any
;;;   lst : list?
;;; Returns the element at index 2 of `lst`, using zero-based indexing.
;;; Returns false (#f) if there is no such element.
(define element-2
  (lambda (lst)
    "???"))

(test-case "element-2: three elements"
           equal? "three"
           #(element-2 (list "one" "two" "three")))
(test-case "element-2: many elements"
           equal? "many"
           #(element-2 (list "just" "how" "many" "elements" "makes" "many")))
(test-case "element-2: only two elements"
           equal? #f
           #(element-2 (list "only" "two")))
(test-case "element-2: only one element"
           equal? #f
           #(element-2 (list "alone")))
(test-case "element-2: empty list"
           equal? #f
           #(element-2 null))

;; b. Write a procedure, `(element-4 lst)`, that grabs the element at index
;; 4 from a list of at least five elements and returns false otherwise.
;; You may not use `length` or `list-ref` in writing `element-4`.

;;; (element-4 lst) -> any
;;;   lst : list?
;;; Returns the element at index 4 of `lst`, using zero-based indexing.
;;; Returns false (#f) if there is no such element.
(define element-4
  (lambda (lst)
    "???"))

;; c. Write at least four tests for `element-4`.

;; +-------------------------+----------------------------------------
;; | Exercise 5: Short lists |
;; +-------------------------+

;; Driver: B

;; You will often find that you have to check whether a list has a certain
;; number of elements, or at least a certain number of elements. Let's write
;; a few predicates to help check that.

;; a. Write a predicate `(singleton? lst)`, that determines whether `lst`
;; contains just one element. You may not use `length` in writing `singleton`.

;;; (singleton? lst) -> boolean?
;;;   lst : list?
;;; Determine if `lst` has only one element.
(define singleton?
  (lambda (lst)
    "???"))

(test-case "singleton: zero-element list"
           equal? #f
           #(singleton? (list)))
(test-case "singleton: one-element list"
           equal? #t
           #(singleton? (list "one")))
(test-case "singleton: two-element list"
           equal? #f
           #(singleton? (list 2 1)))
(test-case "singleton: three-element list"
           equal? #f
           #(singleton? (list "three" 2 1)))

;; b. Write a predicate `(at-least-two? lst)`, that determines whether `lst`
;; contains at least two elements. You may not use `length` in writing 
;; `at-least-two?`.

;;; (at-least-two? lst) -> boolean?
;;;   lst : list?
;;; Determine if `lst` has at least two elements.
(define at-least-two?
  (lambda (lst)
    "???"))

(test-case "at-least-two: zero-element list"
           equal? #f
           #(at-least-two? (list)))
(test-case "at-least-two: one-element list"
           equal? #f
           #(at-least-two? (list "one")))
(test-case "at-least-two: two-element list"
           equal? #t
           #(at-least-two? (list 2 1)))
(test-case "at-least-two: three-element list"
           equal? #t
           #(singleton? (list "three" 2 1)))

;; c. Write a predicate `(dyad? lst)`, that determines whether `lst` contains 
;; exactly two elements. You may not use `length` in writing `dyad`.

;;; (dyad? lst) -> boolean?
;;;   lst : list?
;;; Determine if `lst` has exactly two elements.
(define dyad?
  (lambda (lst)
    "???"))

(test-case "dyad: zero-element list"
           equal? #f
           #(dyad? (list)))
(test-case "dyad: one-element list"
           equal? #f
           #(dyad? (list "one")))
(test-case "dyad: two-element list"
           equal? #t
           #(dyad? (list 2 1)))
(test-case "dyad: three-element list"
           equal? #t
           #(singleton? (list "three" 2 1)))

;; d. Write a predicate `(at-least-three? lst)`, that determines whether 
;; `lst` contains at least three elements. You may not use `length` in 
;; writing `at-least-three?`.

;;; (at-least-three? lst) -> boolean?
;;;   lst : list?
;;; Determine if `lst` has at least three elements.
(define at-least-three?
  (lambda (lst)
    "???"))

(test-case "at-least-three: zero-element list"
           equal? #f
           #(at-least-three? (list)))
(test-case "at-least-three: one-element list"
           equal? #f
           #(at-least-three? (list "one")))
(test-case "at-least-three: two-element list"
           equal? #f
           #(at-least-three? (list 2 1)))
(test-case "at-least-three: three-element list"
           equal? #t
           #(at-least-three? (list "three" 2 1)))
(test-case "at-least-three: four-element list"
           equal? #t
           #(at-least-three? (list "uno" "dos" "tres" "quatro")))
(test-case "at-least-three: stupid song reference"
           equal? #f
           #(at-lest-three? (list "wooly" "bully")))

;; e. Write a predicate `(short? lst)`, that determines whether `lst` 
;; contains fewer than three elements. You may not use `length` in 
;; writing `short?`.

;;; (short? lst) -> boolean?
;;;   lst : list?
;;; Determine if `lst` is short (has fewer than three elements).
(define short?
  (lambda (lst)
    "???"))

(test-case "short: zero-element list"
           equal? #f
           #(short? (list)))
(test-case "short: one-element list"
           equal? #f
           #(short? (list "one")))
(test-case "short: two-element list"
           equal? #f
           #(short? (list 2 1)))
(test-case "short: three-element list"
           equal? #t
           #(short? (list "three" 2 1)))
(test-case "short: four-element list"
           equal? #t
           #(short? (list "uno" "dos" "tres" "quatro")))
(test-case "short: stupid song reference"
           equal? #f
           #(short? (list "wooly" "bully")))

;; +----------------------+-------------------------------------------
;; | Submitting your work |
;; +----------------------+

;; Congratulations on finishing this lab!  To turn in your work:

;; a.  Ensure that your file runs properly.

;; b.  Make sure you save as `list-composition.scm` 

;; c. Submit this final file to Gradescope.  Make sure, if appropriate,
;;    to submit your work as a group submission and include your
;;    partner in the submission.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, you may wish to attempt the
;; following exercise.

;; +-------------------+----------------------------------------------
;; | Extra 1: Sublists |
;; +-------------------+

;; Write a procedure, `(sublist lst n m)`, that extracts the elements from
;; indices `n` (inclusive) to `m` (exclusive) of `lst`.

;; You will likely find `list-take` and `list-drop` useful.

;;; (sublist lst n m) -> list?
;;;   lst : list?
;;;   n : (all-of nonnegative-exact-integer? (less-equal (length lst)))
;;;   m : (all-of nonnegative-exact-integer? (less-equal (length lst)) (greater-equal n))
;;; Extract the elements of `lst` from indices `n` (inclusive) to `m`
;;; (exclusive)
(define sublist
  (lambda (lst)
    "???"))

