
;; CSC 151-NN (2026Fa)
;; Lab: Tail and helper recursion
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import image)
(import test)

;; +-------------------------+----------------------------------------
;; | Exercise 0: Preparation |
;; +-------------------------+

;; a. Have the normal start-of-lab discussion.  Consider strengths,
;; weaknesses, working styles, etc.

;; b. Save this file as `tail-recursion.scm`.

;; c. Discuss the self checks with your partner.

;; +--------------------------------------------+---------------------
;; | Exercise 1: Alphabetically first, explored |
;; +--------------------------------------------+

;; Driver: A

;; As you may recall, in the previous lab you documented, wrote
;; tests for, and implemented a function, `alphabetically-first`
;; that takes a nonempty list of strings as input and returns the 
;; alphabetically first string in the list.

;; Here is a standard solution to that problem (you can look
;; below for the tests).

;;; (alphabetically-first words) -> string?
;;;   words : (all-of (list-of string?) nonempty?)
;;; Find the alphabetically first string in a list of strings.
(define alphabetically-first
  (lambda (words)
    (if (null? (cdr words))
        (car words)
        (if (string-ci<=? (car words)
                          (alphabetically-first (cdr words)))
            (car words)
            (alphabetically-first (cdr words))))))

;; a. Review the code for `alphabetically-first` to see if it looks like
;; it should work correctly. If not, summarize any concerns you have.

;; Concerns:

;; b. Uncomment the tests below exercise 3 and click "Run" to see if 
;; `alphabetically-first` appears to work correctly. If not, summarize
;; the issues you discover and then correct the code.

;; Issues:

;; c. Find out how many steps are in the traces of each of the following.

; (alphabetically-first (list "a"))
;; Steps: 
; (alphabetically-first (list "a" "b"))
;; Steps: 
; (alphabetically-first (list "a" "b" "c"))
;; Steps: 
; (alphabetically-first (list "a" "b" "c" "d"))
;; Steps: 
; (alphabetically-first (list "a" "b" "c" "d" "e"))
;; Steps: 

;; d. Predict how many steps will be in the trace of the following.

; (alphabetically-first (list "a" "b" "c" "d" "e" "f" "g" "h" "i" "j"))
;; Steps: 

;; e. Check your answer experimentally.

;; Steps: 

;; f. Check how many steps are in the traces of each of the following.

; (alphabetically-first (list "a"))
;; Steps: 
; (alphabetically-first (list "b" "a"))
;; Steps: 
; (alphabetically-first (list "c" "b" "a"))
;; Steps: 
; (alphabetically-first (list "d" "c" "b" "a"))
;; Steps: 
; (alphabetically-first (list "e" "d" "c" "b" "a"))
;; Steps: 

;; g. Predict approximately how many steps will be in the trace of the following.

; (alphabetically-first (reverse (list "a" "b" "c" "d" "e" "f" "g" "h" "i" "j")))
;; Steps: 

;; h. Check your answer experimentally.

;; Steps: 

;; i. Step through the traces of (alphabetically-first (list "a" "b" "c"))
;; and (alphabetically-first (list "c" "b" "a")) and, to the best of your ability
;; explain why they don't take the same number of steps.

;; Explanation:

;; +---------------------------------------------+--------------------
;; | Exercise 2: Alphabetically first, revisited |
;; +---------------------------------------------+

;; Driver: B

;; As you may have discovered, that definition of `alphabetically-first`
;; is not ideal. Why? Well, we hope you figured that out. How should we
;; address the problem?

;; a. You may recall that we solved a similar problem in one of the readings
;; on recursion (other than the reading on tail recursion). Find that
;; solution and rewrite `alphabetically-first` using the strategy from
;; that reading. (Comment out the old version.)

;; If you can't figure out what the similar problem is after a few minutes,
;; consult one of the course staff.

;; YOUR NEW IMPLEMENTATION OF `alphabetically-first` belongs here.

;; b. Check how many steps are in the traces of each of the following.

; (alphabetically-first (list "a" "b" "c" "d" "e"))
;; Steps: 
; (alphabetically-first (list "e" "d" "c" "b" "a"))
;; Steps: 
; (alphabetically-first (list "e" "a" "c" "d" "b"))
;; Steps: 
; (alphabetically-first (list "d" "e" "c" "a" "b"))
;; Steps: 

;; c. What have you learned from writing this solution?

;; Answer: 

;; +------------------------------------------------+-----------------
;; | Exercise 3: Alphabetically first, re-revisited |
;; +------------------------------------------------+

;; Driver: A

;; Here's another implementation of `alphabetically-first` that also
;; attempts to address the issues of the version in exercise 1.

; (define alphabetically-first
;   (lambda (words)
;     (if (null? (cdr words))
;         (car words)
;         (let ([recursive-result (alphabetically-first (cdr words))])
;           (if (string-ci<=? (car words) recursive-result)
;               (car words)
;               recursive-result)))))

;; a. Explain how this version differs from the version in exercise 1.

;; Explanation:

;; b. Do you expect this version to work correctly? Why or why not?

;; Answer:

;; c. Comment out your answer from exercise 2 and uncomment this
;; version. Explain any issues you discover and then fix them.

;; Issues:

;; Fixes: 

;; d. Check how many steps are in the traces of each of the following.

; (alphabetically-first (list "a" "b" "c" "d" "e"))
;; Steps: 
; (alphabetically-first (list "e" "d" "c" "b" "a"))
;; Steps: 
; (alphabetically-first (list "e" "a" "c" "d" "b"))
;; Steps: 
; (alphabetically-first (list "d" "e" "c" "a" "b"))
;; Steps: 

;; e. What have you learned from exploring this solution?

;; Answer: 

;; +--------------------------------+---------------------------------
;; | Tests for alphabetically first |
;; +--------------------------------+

; (test-case "singleton list"
;            equal?
;            "singleton"
;            #(alphabetically-first (list "singleton")))

; (test-case "two elements in alphabetical order"
;            equal?
;            "alpha"
;            #(alphabetically-first (list "alpha" "beta")))

; (test-case "two elements in reverse alphabetical order"
;            equal?
;            "delta"
;            #(alphabetically-first (list "gamma" "delta")))

; (test-case "many elements in no particlar order"
;            equal?
;            "elements"
;            #(alphabetically-first 
;               (string-split "many elements in no particular order"
;                             " ")))

; (test-case "many elements with smallest at front"
;            equal?
;            "a"
;            #(alphabetically-first (string-split "amazing" "")))

; (test-case "many elements with smallest at end"
;            equal?
;            "e"
;            #(alphabetically-first (string-split "xylophone" "")))

;; +------------------------------+-----------------------------------
;; | Exercise 4: Tallying strings |
;; +------------------------------+

;; Driver: B

;; Consider the following procedure `(tally-strings` lst)`, that takes
;; as input a list of mixed values (both strings and other types of
;; values) and returns a count of the number of strings in the list.

;;     (define tally-strings
;;       (lambda (lst)
;;         (if (null? lst)
;;             0
;;             (if (string? (car lst))
;;                 (+ 1 (tally-strings (cdr lst)))
;;                 (tally-strings (cdr lst))))))

;; We will be rewriting `tally-strings` using tail recursion.  The
;; helper procedure will likely have two parameters: a count of all
;; the strings you've seen so far and a list of all the values you
;; have left to look at.

;; a.  Complete the following table, which represents what we 
;; expect to see at every step evaluating the helper on the list 
;; `(list 5 "a" "b" 1 "c" 2 3 "b" 4)`.

;;         tally-so-far                    remaining
;;         ------------                    ---------
;;         0                               (list 5 "a" "b" 1 "c" 2 3 "b" 4)
;;         0                               (list "a" "b" 1 "c" 2 3 "b" 4)
;;         1                               (list "b" 1 "c" 2 3 "b" 4)
;;         2                               (list 1 "c" 2 3 "b" 4)
;;         2                               (list "c" 2 3 "b" 4)

;; TODO: Fill in the remaining rows.

;; b. Using the ideas you gained in those steps, implement this new
;; `tally-strings` using a tail-recursive helper.  You'll need to fill
;; in the missing parts of the procedures below.

(define tally-strings/helper
  (lambda (tally-so-far remaining)
    0))

(define tally-strings
  (lambda (lst)
    (tally-strings/helper null null)))

;; c. Check your answers using the following tests.

; (test-case "tally-strings: empty list"
;            equal?
;            0
;            #(tally-strings null))

; (test-case "tally-strings: no strings"
;            equal?
;            0
;            #(tally-strings (list 1 2 3)))

; (test-case "tally-strings: all strings"
;            equal?
;            3
;            #(tally-strings (list "one" "two" "three")))

; (test-case "tally-strings: string at front"
;            equal?
;            1
;            #(tally-strings (list "one" 2 3)))

; (test-case "tally-strings: string at end"
;            equal?
;            1
;            #(tally-strings (list 1 2 "three")))

; (test-case "tally-strings: strings in middle"
;            equal?
;            2
;            #(tally-strings (list 1 "two" "three" 4)))

; (test-case "tally-strings: mixed values"
;            equal?
;            4
;            #(tally-strings (list 1 "two" "three" 4 "five" 6 7 "eight" 9)))

;; +---------------------------------------------------+--------------
;; | Exercise 5: Alphabetically first, re-re-revisited |
;; +---------------------------------------------------+

;; Driver: A

;; Rewrite `alphabetically-first` using helper recursion. This time, 
;; rather than keeping track of the count of strings, you should keep
;; track of the alphabetically-first string you've seen so far.

;; +-------------------------------+----------------------------------
;; | Exercise 6: Selecting numbers |
;; +-------------------------------+

;; Driver: B

;; a. You may recall that in the not-so-distant past, we wrote a function,
;; `select-numbers`, that, given a list of values, returns a list with
;; just the numbers from the original list.

;; Here's an attempt to implement that procedure using helper recursion.

;;; (select-numbers values) -> (list-of number?)
;;;   values : list?
;;; Selects all the numbers in values
(define select-numbers
  (lambda (values)
    (let ([helper 
           (lambda (nums-so-far remaining)
             (cond
               [(null? remaining)
                nums-so-far]
               [(not (number? (car remaining)))
                (helper nums-so-far 
                        (cdr remaining))]
               [else
                (helper (cons (car remaining) nums-so-far)
                        (cdr remaining))]))])
      (helper null values))))

;; b. As you may have observed in a previous problem, it can be 
;; helpful to understand tail recursive procedures by creating
;; a table whose columns are labeled with the parameters and which
;; each row gives the values of those parameters in one call.

;; Here's what we might expect those columns to have after we've done the
;; first few steps of the helper on the list `(list "a" "b" 1 "c" 2 3 "b" 4)`

;;         nums-so-far                      remaining
;;         -----------                      ---------
;;         null                             (list "a" "b" 1 "c" 2 3 "b" 4)
;;         null                             (list "b" 1 "c" 2 3 "b" 4)
;;         null                             (list 1 "c" 2 3 "b" 4)
;;         (list 1)                         (list "c" 2 3 "b" 4)

;; <TODO: Fill in the remaining five or so rows.>

;; c. Given that experiment, what output do you expect to get from 
;; `(list "a" "b" 1 "c" 2 3 "b" 4)`?

;; REPLACE WITH YOUR ANSWER

;; d. Check your answer experimentally.

;; REPLACE WITH THE INFO FROM THE REPL

;; +------------------------------------------+-----------------------
;; | Exercise 7: Selecting numbers, revisited |
;; +------------------------------------------+

;; Driver: B

;; As you may have noted, the prior implementation of `select-numbers`
;; produces the list of values in reverse order that they appear in the
;; original list.  Rewrite the procedure so that it produces the list of
;; values in the same order as they appear in the original list.  You
;; may not use `append` in that implementation.

; (define select-numbers/new
;   (lambda (values)
;     (letrec ([helper 
;               (lambda (nums-so-far remaining)
;                 (cond
;                  [(null? remaining)
;                   nums-so-far]
;                  [(not (number? (car remaining)))
;                   (helper nums-so-far 
;                           (cdr remaining))]
;                  [else
;                   (helper (cons (car remaining) nums-so-far)
;                           (cdr remaining))]))])
;       (helper null values))))

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; Submit your work.  Then go on to the extra time activities.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, you might choose to take
;; on one or more of the following exercises.  (You need not do
;; them in the order presented.)

;; +----------------------------------+-------------------------------
;;; | Extra 1: Tallying multiple types |
;;; +----------------------------------+

;; Write a procedure, `tally-numbers-and-strings`, that takes
;; as input a mixed list and produces a list of tallys of the number
;; of numbers and strings.

;;     > (tally-numbers-and-strings null)
;;     (list 0 0)
;;     > (tally-numbers-and-strings (list "a" "b")
;;     (list 0 2)
;;     > (tally-numbers-and-strings (list 1 2 3))
;;     (list 3 0)
;;     > (tally-numbers-and-strings (list "a" 1 2 "b" 3 "c" "d"))
;;     (list 3 4)

;; You will find it useful to base `tally-numbers-and strings` on
;; the helper-recursive `tally-strings` your wrote earlier in this lab.

;; This time, you may to add more parameters to the recursive helper.

(define tally-numbers-and-strings
  (lambda (lst)
    (list 0 0)))

;;; +-----------------------------------------------+------------------
;;; | Extra 2: Too many ways to find extreme values |
;;; +-----------------------------------------------+

;;; We ask you to find the alphabetically first string, in part, because finding "most extreme"
;; value in a list is a common task.  You've now approached the problem in
;; four ways:

;; * Using direct recursion.
;; * Using helper/tail recursion.
;; * Using direct recursion with a `let` binding.
;; * Using direct recursion with a helper procedure (e.g., `first-string`) to 
;;   choose the more extreme of the values.

;; a. Which of the four ways do you prefer.  Why?

;; Answer: 

;; b. Which of these seems most like what you'd do with `reduce`?

;; Answer:

;;; +--------------------------------------------+---------------------
;;; | Extra 3: Converting to tail-recursive form |
;;; +--------------------------------------------+

;; We will often decide to convert a direct recursive procedure to
;; a tail-recursive procedure.  Give a process for doing so (or
;; at least approximately doing so).

;; Answer:
