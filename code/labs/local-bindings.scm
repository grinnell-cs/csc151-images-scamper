;; CSC-151 (2026Fa)
;; Lab: Local Bindings (local-bindings.scm)
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import test)
(import image)

;; In this lab, you and your partner will write some more complicated
;; code than previous labs and manage that complexity with let-bindings.

;; +---------------+--------------------------------------------------
;; | Provided code |
;; +---------------+

;; +-------------------------------------+----------------------------
;; | Exercise 1: Nesting let expressions |
;; +-------------------------------------+

;; Driver: :A

;; a. Write a *nested* `let`-expression that binds a total of five
;; names, `alpha`, `beta`, `gamma`, `delta`, and `epsilon`.  With
;; `alpha` bound to the value 7, and each subsequent value to twice
;; the previous value. That is, `beta` should be 2 times `alpha`, 
;; `gamma` should be two times `beta`, , and so on and so forth.  The
;; body of the innermost `let` should make a list from those values.

;; Your result will look something like this:

;; (let ([___ ___])
;;   (let ([___ ___])
;;     (let ([___ ___])
;;       (let ([___ ___])
;;         (let ([___ ___])
;;           (list alpha beta gamma delta epsilon))))))

;; The final value should be something like

;; (list 7 14 28 56 112)

(define nested-let-7
  "TODO: write the nested let here")

(test-case "nested-let-7"
  equal?
  (list 7 14 28 56 112)
  (lambda () nested-let-7))

;; b. Duplicate `nested-let-7` below but bind `alpha` to `(/ 1 3)`.  The
;; remaining name should still be bound to subsequently doubled versions
;; of `alpha`.  Observe how little of the code you need to change to make
;; this work!

(define nested-let-1/3
  "TODO: write the nested let here")

(test-case "nested-let-1/3"
  equal?
  (list (/ 1 3) (* 2 (/ 1 3)) (* 4 (/ 1 3)) (* 8 (/ 1 3)) (* 16 (/ 1 3)))
  (lambda () nested-let-1/3))

;; c. Create a single `let`-expression equivalent to `nested-let-1/3` above.

;; (let ([___ ___]
;;       [___ ___]
;;       [___ ___]
;;       [___ ___]
;;       [___ ___])
;;   (list alpha beta gamma delta epsilon))

(define nested-let-new
  "TODO: write the nested let* here")

(test-case "nested-let-new"
  equal?
  (list (/ 1 3) (* 2 (/ 1 3)) (* 4 (/ 1 3)) (* 8 (/ 1 3)) (* 16 (/ 1 3)))
  (lambda () nested-let-new))

; d. It is likely that you came up with a solution to part b that
; looks something like the following.

; (let* ([alpha (/ 1 3)]
;        [beta (* 2 alpha)]
;        [gamma (* 2 beta)]
;        ...)
;   (list alpha beta gamma delta epsilon))

; What if you decided that instead of doubling each previous value, you
; wanted to add three to that value?  You'll have four different
; expressions to change, which is annoying to modify in your code.

; Rewrite the expression to use the name `fun` for what needs to be done
; to each element of the list.  Your expression should look something
; like the following.

; (let ([fun (lambda (x) (* 2 x))]
;       [alpha (/ 1 3)]
;       [beta (fun alpha)]
;       ...)
;   ...)

(define nested-let-fun
  "TODO: write the updated let here")

(test-case "nested-let-fun"
  equal?
  (list (/ 1 3) (* 2 (/ 1 3)) (* 4 (/ 1 3)) (* 8 (/ 1 3)) (* 16 (/ 1 3)))
  (lambda () nested-let-fun))

; e. Duplicate and modify nested-let-fun so that `alpha` starts at 1
; and `fun` divides its parameter by 3.  Before running your code,
; predict the result.  Finally, check your answer experimentally.

(define updated-nested-let-fun
  "TODO: write the final let here")

(test-case "updated-nested-let-fun"
  equal?
  (list 1 (/ 1 3) (/ 1 (expt 3 2)) (/ 1 (expt 3 3)) (/ 1 (expt 3 4)))
  (lambda () updated-nested-let-fun))

;; +-------------------------------+----------------------------------
;; | Exercise 2: Ordering bindings |
;; +-------------------------------+

;; Driver: B

;; In the reading, we noted that it is possible to move bindings outside
;; of the lambda in a procedure definition and suggested that there are
;; some benefits to doing so.

;; Consider the two following procedure definitions.

(define add-ten
  (lambda (val)
    (let ([x 10])
      (+ x val))))

(define add-10
  (let ([x 10])
    (lambda (val)
      (+ x val))))

;; a. Confirm that both appear to work correctly. (There's nothing to
;;    record for this problem.)

;; b. Using Scamper's trace feature, trace the execution of the 
;; expression `(+ (add-ten 1) (add-ten 2))`. Record the trace here.

;;     (+ (add-ten 1) (add-ten 2))
;; --> 

;; c. Using Scamper's trace feature, trace the execution of the 
;; expression `(+ (add-10 1) (add-10 2))`. Record the trace here.

;;     (+ (add-10 1) (add-10 2))
;; --> 

;; d. Describe, in your own words, whaat you see as the difference.

;; REPLACE WITH YOUR ANSWER.

;; +---------------------------+--------------------------------------
;; | Exercise 3: Making change |
;; +---------------------------+

;; Driver: A

;; Write a function `(make-change cents)` that takes a positive integer
;; as input and returns a list of four integers. These integers
;; correspond to the number of quarters (25 cents), dimes (10 cents),
;; nickels (5 cents), and pennies (1 cent) used to make change for
;; `cents`. The amounts returned should reflect the *minimal number
;; of coins* used to make up the desired number of cents. For example:

;; > (make-change 118)
;; (list 4 1 1 3)

;; Note that the `list` function makes a list of values drawn from its
;; arguments.

;; You may have seen this function before in a previous lab! However,
;; please try to write up the solution without referring to that previous
;; lab, so you get practice designing programs with let-bindings!

;; NOte: The standard change-making algorithm is an example of an *greedy
;; algorithm*. You compute the change by first figuring out the number of
;; quarters to use, then the number of dimes, then nickels, and final
;; cents, in-order.  To do this, you will find the functions `quotient`
;; and `remainder` useful.

(define make-change
  (lambda (cents)
    (list 0 0 0 0)))

(test-case "make-change example: 89 cents"
  equal?
  (list 3 1 0 4)
  (lambda () (make-change 89)))

;; Side note: While the greedy "use as many of the highest denomination
;; as possible" works for this set of denominations of coins, it turns
;; out that it doesn't work for all sets.  Suppose, for example, that
;; there were no nickles.  If we wanted to make 30 cents, we should
;; use three dimes.  However, the greedy algorithm says to take a
;; quarter, which would then require five pennies to make thirty cents.

;; In your spare time (not now), consider how you might handle issues 
;; like that.  (If you continue with the CS major, you'll learn an
;; algorithm in either CSC-207 or CSC-301.)

;; +---------------------------------+--------------------------------
;; | Exercise 4: Removing redundancy |
;; +---------------------------------+

;; Driver: B

;; One of the primary uses for `let` bindings is to remove redundancy
;; from code _after_ we have written an initial draft. Remove the
;; redundancy from the following function by rewriting it using a
;; a `let` binding. 

(define trees
  (lambda (sz)
    (beside/align 
      "bottom"
      (above (overlay
               (outlined-equilateral-triangle (* sz 1.5) "black" 2)
               (solid-equilateral-triangle (* sz 1.5) "green"))
             (overlay
               (outlined-rectangle (/ sz 2) (* sz 2) "black" 2)
               (solid-rectangle (/ sz 2) (* sz 2) "brown")))
      (above (overlay
               (outlined-equilateral-triangle (* sz 1.0) "black" 2)
               (solid-equilateral-triangle (* sz 1.0) "green"))
             (overlay
               (outlined-rectangle (/ sz 2) (* sz 1.25) "black" 2)
               (solid-rectangle (/ sz 2) (* sz 1.25) "brown")))
      (above (overlay
               (outlined-equilateral-triangle (* sz 1.5) "black" 2)
               (solid-equilateral-triangle (* sz 1.5) "green"))
             (overlay
               (outlined-rectangle (/ sz 2) (* sz 2) "black" 2)
               (solid-rectangle (/ sz 2) (* sz 2) "brown"))))))

;; +--------------------------------------------+---------------------
;; | Exercise 5: Removing redundancy, revisited |
;; +--------------------------------------------+

;; Driver: A

;; a. Find a procedure you've written in the past (e.g., for a lab or
;; assignment) that includes some redundancy. Copy and paste it here
;; and then comment it out.

;; YOUR PROCEDURE

;; b. Rewrite the procedure to be less redundant using `let` bindings.

;; +-------------+----------------------------------------------------
;; | Wrapping up |
;; +-------------+

;; Make sure to put your names, section, and date at the top of this
;; file.

;; Download and submit.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, attempt one or more of the
;; following exercises.

;; +--------------------------------------------+---------------------
;; | Extra 1: Removing redundancy, re-revisited |
;; +--------------------------------------------+

;; Remove the redundancy in the following procedure.

(define adjusted-diff-of-extremes
  (lambda (lst)
    (- ((o (l-s reduce max)
           (l-s map (lambda (n) (/ n 2))))
        lst)
       ((o (l-s reduce min)
           (l-s map (lambda (n) (/ n 2))))
        lst))))

(test-case "adjusted-diff-of-extremes"
  equal?
  7.5
  (lambda () (adjusted-diff-of-extremes (list -5 4 8 2 6 1 10))))

;; +------------------------------------+-----------------------------
;; | Extra 2: Alternate binding methods |
;; +------------------------------------+

;; As you may have noted, we have other approches than `let` and
;; design for assigning names to values. For example, consider the
;; following pair of procedures.

;; More forthcoming!
