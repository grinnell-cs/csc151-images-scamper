;; CSC-151-NN (SEMESTER)
;; Lab: Unit Testing (unit-testing.scm)
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import test)
(import image)

;; +-------------+----------------------------------------------------
;; | Preparation |
;; +-------------+

;; Make sure to fill in the information at the top.

; +-------------------------------------+----------------------------
; | Exercise 1: Unit testing roundtable |
; +-------------------------------------+

;; Driver: A

;; Define a series of tests using test-case for this function.

;;; (range1 n) -> (list-of integer?)
;;;   n : integer?
;;; Returns the list of numbers from 1 to n, inclusive.  If
;;; n is non-positive, then returns the empty list.
(define range1
  (lambda (n)
    (map (lambda (n) (+ n 1)) (range n))))

;; We have given you one test case to get started.

(test-case "A very small range" 
           equal? (list 1)
           #(range1 1))

;; TODO: write your additional tests here

;; This is a good practice as you are developing your program so you can quickly
;; know if your code meets the current set of tests.

;; To develop the tests, you should alternate volunteering test cases
;; which the driver then adds to the file. Continue identifying test
;; cases until your group is satisfied with the set of tests. You
;; should agree on when you feel that you have reasonably validated
;; the function’s behavior. Make sure that the function passes all
;; the tests that you write!

;; +-----------------------------------------+------------------------
;; | Exercise 2: Positive and negative cases |
;; +-----------------------------------------+

;; Driver: B

;; One way to organize our tests is by exploring positive and negative
;; test cases. A positive test case for a predicate is one in which 
;; the predicate returns true. A negative test case for a predicate
;; is one in which the predicate returns false.

;; Follow the same process as in the prior exercise for this function:

;;; (palindrome? str) -> boolean?
;;;   str : string?
;;; Returns true iff the string s is a palindrome, i.e., str is
;;; equal to its reversal.
(define palindrome?
  (lambda (str)
    (and (string? str)
         (string=? str (list->string (reverse (string->list str)))))))

;; As in the previous exercise, collaboratively develop a set of tests
;; for this function. For this exercise, make sure to keep in mind the
;; idea of positive and negative test cases.

;; When you are done, the driver should make sure that the completed
;; function and its test suite are in the file and then comment out
;; the code.

;; TODO: write your tests here

;; +------------------------------------+-----------------------------
;; | Exercise 3: Types and corner cases |
;; +------------------------------------+

;; Driver: A

;; Another way to organize our tests is by exploring the range of
;; possible inputs. If the type of the input admits a finite set of
;; values, we ought to test all those values directly. However, if an
;; infinite set of values is possible, we need to be more judicious
;; in what values we examine.

;; One way to do this is to identify corner and non-corner case values.
;; Think of a corner case as an example input that exercises the
;; “boundaries” of how the function ought to work. For example, if you
;; are operating over a certain range of numbers, a corner case might
;; be an input at the lower or upper end of that range. In contrast,
;; the values in the middle of the range are non-corner case values.
;; We expect that the function will likely operate in the same way
;; over these non-corner values, so we would then surmise that we don’t
;; have to test all of these non-corner values; a few of them will
;; suffice!

;; Note: dedup-adjacent, below, relies on aspects of Scheme you do not
;; yet know.  That’s okay. You should focus on the documentation docs
;; and the testing that might be appropriate given that documentation.

;;; (dedup-adjacent l) -> (list-of any)
;;;   l : (list-of any)
;;; Returns the original list l but with all duplicates found
;;; adjacent to each other removed from the list.  For example:
;;;   > (dedup-adjacent (list 3 4 7 8 1 1 0 9 9 9 6 5 5 2 4))
;;;   (list 3 4 7 8 1 0 9 6 5 2 4)
(define dedup-adjacent
  (lambda (l)
    (cond 
      [(null? l)
       null]
      [(null? (cdr l)) 
       l]
      [else
       (let ([c1 (car l)]
             [c2 (car (cdr l))]
             [rest (cdr (cdr l))])
         (if (equal? c1 c2)
             (dedup-adjacent (cons c2 rest))
             (cons c1 (dedup-adjacent (cons c2 rest)))))])))

;; As in the previous exercises, collaboratively develop a set of tests for 
;; this function. For this exercise, keep in mind the idea of types and 
;; corner cases/edge cases.

;; TODO: write your tests here

;; +-----------------------------------+------------------------------
;; | Exercise 4: Edge cases, continued |
;; +-----------------------------------+

;; Driver: B

;; Below is a not-quite-correct version of `dedup-adjacent`. To test
;; this version, comment out the previous version of  `dedup-adjacent`,
;; uncomment this version, and move the tests from above below the
;; updated version.

;; Do your tests identify the error? If not, add more tests until you
;; find the error or errors!

;(define dedup-adjacent
;  (lambda (l)
;    (cond
;      [(null? l)
;       null]
;      [(null? (cdr l))
;       l]
;      [else
;       (let ([c1 (car l)]
;             [c2 (car (cdr l))]
;             [rest (cdr (cdr l))])
;         (if (equal? c1 c2)
;             (dedup-adjacent (cons c2 rest))
;             (cons c1 (cons c2 (dedup-adjacent rest)))))]))) 

;; TODO: write your tests here

;; +-------------------------------------+----------------------------
;; | Exercise 5: Test-driven development |
;; +-------------------------------------+

;; Tests don’t have to be created after you write your function! Because
;; we frequently implement a function with examples in mind to begin
;; with, it is useful to codify these examples as tests first and then
;; use those tests to guide development. Such a development methodology
;; is called test-driven development where the tests drive the design
;; of the code.

;; Consider the following function documentation:

;;; (describe-triangle side1 side2 side3) -> string? or #f
;;;   side1 : number?
;;;   side2 : number?
;;;   side3 : number?
;;; Describe the triangle whose three sides are as given.
;;; * If all three sides are equal, the description is "equilateral".
;;; * If exactly two sides are equal, the description is "isosceles".
;;; * If no two sides are equal, description is "scalene".
;;; * If the sides do not describe a triangle, return #f.  
;;;
;;; Note: Degenerate triangles (ones in which the sum of two edge lengths
;;; equal the length of the other side) are not real triangles, so
;;; parameters that describe a degenerate triangle will normally result
;;; in a return value of false (#f).

;; Here's an incorrect implementation of the function:

(define describe-triangle
  (lambda (side1 side2 side3)
    #f))

;; This incorrect implementation is enough to get us started writing tests.

;; a. Write a set of tests for this function BEFORE trying to
;;    implement it.

;; TODO: Enter your tests here.

;; b. After writing your tests, implement `describe-triangle` above ensuring 
;;    that it passes your tests. That is, you should comment out the version
;;    above and put your version below it.

;; c. Here’s an incorrect implementation of the function. Comment out your
;;    version, move this version below your version, and uncomment it. How
;;    many errors do your tests find? If your tests don't find any errors,
;;    think about others you might need to write.

;(define describe-triangle
;  (lambda (side1 side2 side3)
;    (cond
;      [(or (<= side1 0) (<= side2 0) (<= side3 0))
;       #f]
;      [(or (< (+ side1 side2) side3) 
;           (< (+ side1 side3) side2)
;           (< (+ side2 side3) side1))
;       #f]
;      [(and (equal? side1 side2)
;            (equal? side2 side3))
;       "equilateral"]
;      [(or (equal? side1 side2)
;           (equal? side2 side3)
;           (equal? side1 side3))
;       "isosceles"]
;      [else
;       "scalene"])))

;; d. Ask a nearby group for their tests and run them on your function.

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; Please submit your work on Gradescope.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find you have extra time, please attempt the following.

;; +--------------------------+---------------------------------------
;; | Extra 1: What's up, Doc? |
;; +--------------------------+

;; A and B sides switch driver-navigator roles for each function.

;; Consider each of the following function definitions that are
;; undocumented and poorly named. Note that these functions use
;; techniques and libraries that we may not have introduced or used
;; yet; that is fine! The purpose of this exercise is to get us to
;; think about the _contract_ of these functions rather than how they
;; work precisely.

; For each function:
;
; (a) Explore how the function works by experimenting with a variety
;    of inputs.  You can determine what types of inputs the program
;    expects by inspecting the code or by trying out different
;    values to see if they work.

; (b) Based on your results, write down a doc comment for each function
;     as described in the reading. Make sure to include a function
;     signature describing any preconditions on the function's parameters
;     (e.g., their types) as well as postconditions on the output of
;     the function.

;;; (func-1 s n) -> ???
;;;   s : ???
;;;   n : ???
;;; ???
(define func-1
  (lambda (s n)
    (string-append (substring s n (string-length s))
                   (substring s 0 n))))

;;; (func-2 s k) -> ???
;;;   s : ???
;;;   k : ???
;;; ???
(define func-2
  (lambda (s k)
    (string-map (lambda (c)
                  (if (char-numeric? c) k c))
                s)))

;;; (func-3 l) -> ???
;;;   l : ???
;;; ???
(define func-3
  (lambda (l)
    (if (< (length l) 2)
        l
        (let ([h1 (car l)]
              [h2 (car (cdr l))]
              [t (cdr (cdr l))])
          (cons h2 (cons h1 (func-4 t)))))))

;;; (func-4 n r e x y) -> ???
;;;   n : (any-of zero? positive-integer?)
;;;   r : ???
;;;   e : ???
;;;   x : ???
;;;   y : ???
;;; ???
(define func-4
  (lambda (n r e x y)
    (if (zero? n)
        (outlined-square 0 "black")
        (overlay 
          (func-4 (- n 1) r e x y)
          (outlined-square (* n r) (rgb e x y) 2)))))
