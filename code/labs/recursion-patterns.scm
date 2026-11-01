
;; CSC 151-NN (2026Fa)
;; Lab: Patterns of recursion (recursion-patterns.scm)
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

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; Submit your work.  Then go on to the extra time activities.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, document the various strategies
;; and patterns ;; you've seen here or elsewhere for writing recursive
;; procedures. 

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
