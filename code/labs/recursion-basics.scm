;; CSC 151 (2026Fa)
;; Lab: Recursion basics (recursion-basics.scm)
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import test)
(import image)

;; +---------------+--------------------------------------------------
;; | Supplied code |
;; +---------------+

;;; (sum numbers) -> number?
;;;   numbers : (list-of number?)
;;; Add all the numbers in a list together.
(define sum
  (lambda (numbers)
    (if (null? numbers)
        0
        (+ (car numbers) (sum (cdr numbers))))))

;;; (select-numbers values) -> (list-of number?)
;;;   values : list?
;;; Select all the numbers in values, putting them into a new list.
(define select-numbers
  (lambda (values)
    (cond
      [(null? values)
       null]
      [(not (number? (car values)))
       (select-numbers (cdr values))]
      [else
       (cons (car values) (select-numbers (cdr values)))])))

;;; (count-value value values) -> integer?
;;;   value : any
;;;   values : list?
;;; Count how many times `value` appears in `values`.
(define count-value
  (lambda (value values)
    (cond
      [(null? values)
       0]
      [(equal? value (car values))
       (+ 1 (count-value value (cdr values)))]
      [else
       (count-value value (cdr values))])))

;;; (largest numbers) -> integer?
;;;   numbers : (all-of (list-of integer?) non-empty?)
;;; Finds the largest number in a nonempty list.
(define largest
  (lambda (numbers)
    (if (null? (cdr numbers))
        (car numbers)
        (max (car numbers) (largest (cdr numbers))))))

;; +-------------+----------------------------------------------------
;; | Preparation |
;; +-------------+

;; a. Introduce yourself to your partner, discuss strengths and weaknesses,
;; decide upon work procedures, etc.

;; b. Save this file as `recursion-practice.scm`.  And don't forget that
;; when we write recursive procedures, we may accidentally write procedures
;; that recurse forever.  Save early and often!

;; c. Review the procedures above to make sure that you know what they are
;; intended to do; you can go back and look at the details when you write
;; variants.

;; +---------------------------------------------+--------------------
;; | Exercise 1: Exploring recursive definitions |
;; +---------------------------------------------+

;; Driver: A

;; As you may have determined in your initial explorations with
;; recursion, a typical recursive procedure has three parts: (1) a
;; *base case*, in which we use a *base case test* to determine whether
;; the input is simple enough and, if so, return an appropriate *base
;; case value*; (2) a *recursive call*, in which we call the same
;; procedure again, albeit on parameters we have *simplified*, and,
;; in most cases, a (3) *post-recursion step*, in which we do something
;; with the recursive result.

;; Some procedures may have different recursive calls or post-recursion
;; steps.  For example, we might do something different for even-length
;; and odd-length lists.

;; Review the procedures above and, for each, note the various parts.
;; If a procedure has multiple recursive calls, separate them out in
;; the explanation.

;; a. sum

;; base-case-test: ENTER YOUR ANSWER
;;
;; base-case-value: ENTER YOUR ANSWER
;;
;; parameter simplification: ENTER YOUR ANSWER
;;
;; recursive call: ENTER YOUR ANSWER
;;
;; post-recursion step: ENTER YOUR ANSWER

;; b. select-numbers

;; base-case-test: ENTER YOUR ANSWER
;;
;; base-case-value: ENTER YOUR ANSWER
;;
;; parameter simplification: ENTER YOUR ANSWER
;;
;; recursive call: ENTER YOUR ANSWER
;;
;; post-recursion step: ENTER YOUR ANSWER

;; c. count-value

;; base-case-test: ENTER YOUR ANSWER
;;
;; base-case-value: ENTER YOUR ANSWER
;;
;; parameter simplification: ENTER YOUR ANSWER
;;
;; recursive call: ENTER YOUR ANSWER
;;
;; post-recursion step: ENTER YOUR ANSWER

;; d. largest

;; base-case-test: ENTER YOUR ANSWER
;;
;; base-case-value: ENTER YOUR ANSWER
;;
;; parameter simplification: ENTER YOUR ANSWER
;;
;; recursive call: ENTER YOUR ANSWER
;;
;; post-recursion step: ENTER YOUR ANSWER

;; +------------------------------------+-----------------------------
;; | Exercise 2: Counting list elements |
;; +------------------------------------+

;; Driver: B

;; Consider the following attempt at a recursive definition of a function
;; that computes the length of a list.

(define my-length
  (lambda (lst)
    (if (null? lst)
        1st
        (my-length (cdr lst)))))

;; a. Build a small test suite for this function in the space below.
;;   What tests do you need to ensure that you "cover all the cases" of 
;;   this program's execution?

;; Here's one to get you started.  Uncomment it when you're ready.

; (test-case "sample test" equal? 3 #(my-length (list 1 2 3)))

;; <TODO: write your additional tests for my-length here>

;; b. In your testing, you should have noted that the function doesn't
;;    behave as expected! Using the debugging techniques we've developed
;;    as well as your mental model of computation, determine the cause
;;    of the problem and FIX IT IN THE CODE ABOVE. Ensure that your
;;    modified function passes all of your tests. Describe the problem
;;    and your fix in the space below.  (Note, your goal is to define
;;    `my-length` in such a way that it mimics the behavior of `length`.
;;    Hence, you should not call `length` in your definition.)

;; Explanation: ...

;; Solution: ...

;; +---------------------------------------+--------------------------
;; | Exercise 3: The joy of multiplication |
;; +---------------------------------------+

;; Driver: A

;; Consider the following attempt at a recursive definition of a function
;; that computes the product of the elements of a list.  (The product is
;; the result of multiplying them together.)

;;; (my-product lst) -> number?
;;;   lst : (list-of number?)
;;; Compute the product of all the values in `lst`.
(define my-product
  (lambda (lst)
    (if (null? lst)
        0
        (my-product (cdr lst)))))

;; a. Build a small test suite for this function using `rackunit` in the
;;    space below. What tests do you need to ensure that you "cover all
;;    the cases" of this program's execution?

;; Here are two tests to get you started.  Uncomment them when you're ready.

; (test-case "sample test" = 24 #(my-product (list 2 3 4)))
; (test-case "special case of empty list" = 1 #(my-product null))

;; Write your additional tests for my-product here.

;; b. In your testing, you should have noted that the function doesn't
;;    behave as expected! Using the debugging techniques we've developed
;;    as well as your mental model of computation, determine the cause
;;    of the problem and FIX IT IN THE CODE ABOVE. Ensure that your modified
;;    function passes all of your tests. Describe the problem and your
;;    fix in the space below.

;; Explanation:

;; Solution:


;; +--------------------------------------+---------------------------
;; | Exercise 4: Counting with predicates |
;; +--------------------------------------+

;; Driver: B

;; The `length` procedure counts all the values in a list.  The `count-value`
;; procedure counts how many time a supplied value appears in a list.  What
;; if we want something in between the two: Rather than counting all the values,
;; we only want to count some of them, and rather than counting a single value,
;; we want to count all values matching a particular criterion?  (You may
;; think of this as `tally`.)

;; Document, write tests for, and implement a RECURSIVE procedure,
;; `(tally-odd numbers)` that, given a list of integers, counts how
;; many are odd.

;; Note: You should not call `list-length`, `length`, `filter`, `tally`, 
;; `count-value`, `map`, `apply`, or any other fancy list procedure in 
;; your solution. Instead, use the ideas behind some or all of these 
;; functions in crafting your own recursive solution.

;;; (tally-odd numbers) -> ???
;;;   numbers : ???
;;; ????
(define tally-odd
  (lambda (numbers)
    -1))

;; +-------------------------------+----------------------------------
;; | Exercise 5: What comes first? |
;; +-------------------------------+

;; Driver: A

;; Document, write tests for, and implement a RECURSIVE procedure,
;; `(alphabetically-first words)`, that finds the alphabetically first
;; string in a nonempty list of strings.

;; You can use `string-ci<=?` to compare any two strings for alphabetical
;; order.

;; You may not use `sort` to solve this problem.

;; Note: Since the list is nonempty, you should not use the empty list as
;; the base case.

;;; (alphabetically-first words) -> ???
;;;   words : ???
;;; ???
(define alphabetically-first
  (lambda (words)
    ""))

;; +--------------------------------------+---------------------------
;; | Exercise 6: Finding the last element |
;; +--------------------------------------+

;; Driver: B

;; Write a RECURSIVE procedure, `(last lst)`, that takes a non-empty
;; list as input and returns the last element of the list. You may not
;; use `reverse`, `length`, or other such procedures. Focus on using
;; `car`, `cdr`, and `null` (plus recursion).

;;; (last lst) -> any
;;;   lst : list?
;;; Find the last element of lst
(define last
  (lambda (lst)
    "???"))

; (test-case "singleton list" equal? "a" #(last (list "a")))
; (test-case "long list" equal? 99 #(last (range 100)))
; (test-case "mixed list" equal? 7 #(last (list "seven" #\7 7)))

;; +-------------------------------+----------------------------------
;; | Exercise 7: Removing elements |
;; +-------------------------------+

;; Driver: A

;; Write a RECURSIVE procedure, `(start-at val lst)`, that removes
;; all the values in `lst` up to but not including the first occurence of
;; `val`. If `val` does not appear, you should remove everything.

;;; (start-at val lst) -> list?
;;;   val : any
;;;   lst : list?
;;; Remove all elements up to but not including the first occurence of `val`.
;;; If `val` does not appear, remove everything.
(define start-at
  (lambda (val lst)
    null))

; (test-case "start-at, val appears at the front" 
;            equal? (list "a" "b" "c") 
;            #(start-at "a" (list "a" "b" "c")))
; (test-case "start-at, val appears in the middle"
;            equal? (list "c" "d" "e") 
;            #(start-at "c" (list "a" "b" "c" "d" "e")))
; (test-case "start-at, val appears at the end"
;            equal? (list "e")
;            #(start-at "e" (list "a" "b" "c" "d" "e")))
; (test-case "start-at, val does not appear"
;            equal? null
;            #(start-at "f" (list "a" "b" "c" "d" "e")))
; (test-case "start-at, val appears multiple times"
;            equal? (list "c" "a" "c" "a" "c")
;            #(start-at "c" (list "a" "b" "c" "a" "c" "a" "c")))

;; +------------------------------------------+-----------------------
;; | Exercise 8: Removing elements, revisited |
;; +------------------------------------------+

;; Driver: B

;; Write a RECURSIVE procedure, `(end-at val lst)`, that removes
;; all the values in `lst` starting at and including the first occurence 
;; of `val`.  If `val` does not appear, you should keep everything.

;;; (end-at val lst) -> list?
;;;   val : any
;;;   lst : list?
;;; Remove all elements starting at (and including) the first occurence
;;; of `val`.
;;; If no elements appear, remove everything.
(define end-at
  (lambda (val lst)
    null))

; (test-case "end-at, val appears at the front" 
;            equal? null
;            #(end-at "a" (list "a" "b" "c")))
; (test-case "end-at, val appears in the middle"
;            equal? (list "a" "b")
;            #(end-at "c" (list "a" "b" "c" "d" "e")))
; (test-case "end-at, val appears at the end"
;            equal? (list "a" "b" "c" "d")
;            #(end-at "e" (list "a" "b" "c" "d" "e")))
; (test-case "end-at, val does not appear"
;            equal? (list "a" "b" "c" "d" "e")
;            #(end-at "f" (list "a" "b" "c" "d" "e")))
; (test-case "end-at, val appears multiple times"
;            equal? (list "a" "b")
;            #(end-at "c" (list "a" "b" "c" "a" "c" "a" "c")))

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; You should know the drill by this point.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time and want to further explore some
;; of these issues, consider implementing any of the following procedures.

;; +--------------------------+---------------------------------------
;; | Extra 1: Skipping values |
;; +--------------------------+

;; Document, write tests for, and write a procedure, `(find-first-skip lst)`
;; that takes a list of symbols as a parameter and returns the index
;; of the first instance of the symbol `'skip` in `lst`, if `skip` appears
;; in `lst`, and -1 otherwise.

;; > (find-first-skip (list 'hop 'skip 'and 'jump))
;; 1
;; > (find-first-skip (list 'skip 'hop 'jump 'skip 'and 'skip 'again))
;; 0
;; > (find-first-skip (list 'hop 'to 'work 'jump 'to 'school 'but 'never 'skip 'class))
;; 8

(define find-first-skip
  (lambda (lst)
    -1))

;; +--------------------------+---------------------------------------
;; | Extra 2: Finding indices |
;; +--------------------------+

;; Document, write tests for, and implement a recursive procedure,
;; `(find-index val lst)`, that takes a value and a list of values as
;; its parameters and returns the index of the first instance of val
;; in lst, if the value appears in the list. If the value does not
;; appear, find-index should return -1.

(define find-index
  (lambda (val lst)
    -1))

;; +-------------------------+----------------------------------------
;; | Extra 3: Riffling lists |
;; +-------------------------+

;; Document, write tests for, and implement a recursive procedure,
;; `(riffle first second)` that produces a new list containing alternating
;; elements from the lists `first` and `second`. If one list runs out
;; before the other, then the remaining elements should appear at the
;; end of the new list.

;; > (riffle (list 'a 'b 'c) (list 'x 'y 'z))
;; (a x b y c z)
;; > (riffle (list 'a 'b 'c) (range 0 10))
;; (a 0 b 1 c 2 3 4 5 6 7 8 9)

(define riffle
  (lambda (first second)
    null))
