;; CSC-151-NN (2026Fa)
;; Lab: Experiments with timing vectors (vectors-timing.scm)
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE
;; Note:
;;   This is a short set of experiments that should allow students to
;;   explore the different speeds of vectors and lists in Scheme.
;;   A variant of it worked fine in Racket, but it still needs some updates
;;   to handle the computational model of Scheme.

(import image)
(import test)

;; +---------------+--------------------------------------------------
;; | Provided code |
;; +---------------+

;;; (random-list-elt lst) -> any
;;;   lst : list?
;;; Randomly select an element from the list.
(define random-list-elt
  (lambda (lst)
    (list-ref lst (random (length lst)))))

;;; (random-vector-elt vec) -> any
;;;   vec : vector?
;;; Randomly select an element from the vector.
(define random-vector-elt
  (lambda (vec)
    (vector-ref vec (random (vector-length vec)))))

;;; (random-nums len max) -> (list-of ingeger?)
;;;    len : nonnegative-integer?
;;;    max : positive-integer?
;;; Make a list of length `len`, containing unpredictable numbers
;;; from the range [0..max).
(define random-nums
  (lambda (len max)
    (let ([helper
           (lambda (len so-far)
             (if (zero? len)
                 so-far
                 (helper (- len 1) (cons (random max) so-far))))])
      (helper len null))))

;;; (ref-experiment collection rounds) -> void?
;;;   collection : (any (vector-of integer?) (list-of integer?))
;;;   rounds : nonnegative-integer?
;;; Look for integers selected randomly from the range between
;;; 0 and the length of collection.
;;;
;;; Returns nothing.  Used mostly for timing purposes.
(define ref-experiment
  (lambda (collection rounds)
    (let ([ref (if (vector? collection)
                   vector-ref
                   list-ref)]
          [len (if (vector? collection)
                   (vector-length collection)
                   (length collection))]
          [kernel
           (lambda (n)
             (if (> n 0)
                 (begin
                   (ref collection (random len))
                   (kernel (- n 1)))
                 void))])
      (kernel rounds))))

;;; (number-vector-increment-at! vec index) -> (void)
;;;   vec : (vector-of number?)
;;;   index : integer?
;;; Add 1 to the value at the given index.  Requires that the vector
;;; have at least index+1 elements.
(define number-vector-increment-at!
  (lambda (vec index)
    (vector-set! vec 
                 index 
                 (+ 1 (vector-ref vec index)))))

;; +-------------------------+----------------------------------------
;; | Exercise 0: Preparation |
;; +-------------------------+

;; a. If you have not done so, please conduct the normal "start of class
;; algorithm".  Introduce yourself to your partner.  Discuss work habits,
;; strengths, and areas to improve.  

;; b. Review the documentation for the supplied procedures to
;; ensure you understand what they are supposed to do.  If you're
;; not sure, feel free to experiment or to ask the staff.

;; +-------------------------------+----------------------------------
;; | Exercise 1: Vector efficiency |
;; +-------------------------------+

;; We've claimed that vectors are much faster than lists.  Let's
;; conduct an experiment to see how much of a difference we see.

;; Here's a quick experiment that might give us a sense as to how
;; well `list-ref` works on a long list.

(define size 100000)
(define rounds 500000)
(define list-of-values (range size))
(define list-of-probes (random-nums rounds size))

;;    REPL
;;    > (define list-result (map (l-s list-ref list-of-values) list-of-probes))

;; a. Explain what it happening in this experiment.

;; Explanation: 

;; b. Find values for `size` and `rounds` that make the computation
;; of `list-result` take around two seconds.

;; size:
;; rounds:

;; c. What do you expect to happen to the time for the computation of
;; `list-result` if we double the number of rounds (`rounds`)?  What
;; if we triple it?  

;; Expectations:

;; Experiments: 

;; d. What do you expect to happen to the time for the computation if
;; we double the list size (`size`)?  What if we triple it?

;; Check your answer experimentally and update as appropriate.  Make
;; sure to start with the values from b.

;; Expectations:

;; Result:

;; e. Here's a followup experiment for vectors.

(define vector-of-values (list->vector list-of-values))

; > (define vector-result (map (l-s vector-ref vector-of-values) list-of-probes))

;; Will `vector-result` be the same as `list-result`?  Why or why not?

;; Answer :

;; f. Check your answer experimentally

;;    (equal? list-result vector-result)

;; g. Without changing `size`, find a value of `rounds` that makes
;; the computation of `vector-result` take about 1 second.

;; **Make sure that you do not recompute list-result**.  

;; Enter the value you select here: 

;; h. What do you expect to happen to the time for the computation of
;; `vector-result` if we double the number of rounds (`rounds`)?  What
;; if we triple it?

;; Prediction:

;; Experiments: 

;; i. What do you expect to happen to the time for the computation if
;; we double the vector size (given by `size`)?  What if we triple
;; it?

;; Prediction:

;; Experiments: 

;; j. What have you taken from these experiments?

;; Answer: 

