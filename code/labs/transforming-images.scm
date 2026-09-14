;; CSC 151-NN (TERM)
;; Lab: Transforming Images
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import image)

;; +-------------+----------------------------------------------------
;; | Preparation |
;; +-------------+

;; a. Introduce yourself to your partner.
;; 
;; b. Discuss any issues that will contribute to a more successful 
;;    partnership.
;; 
;; c. Load the lab and readings pages in your Web browser so that you
;;    have them available for reference.
;; 
;; d. Fill in the section number, date, and your names in the document header.
;; 
;; e. Reload Scamper.
;; 
;; f. The person closer to the board is A.  The person further from the 
;;    board is B.

;; +---------------+--------------------------------------------------
;; | Provided code |
;; +---------------+

;; These should eventually end up in Scamper. They are not in 4.4.0.

;;; (l-s fun left) -> procedure?
;;;   fun : procedure?
;;;   left : any
;;; Produce a new function that takes one parameter, `right`, and 
;;; applies `fun` to `left` and `right`.
(define l-s
  (lambda (fun left)
    (lambda (right)
      (fun left right))))

;;; (r-s fun right) -> procedure?
;;;   fun : procedure?
;;;   right : any
;;; Produce a new function that takes one parameter, `left`, and
;;; applies `fun` to `left` and `right`.
(define r-s 
  (lambda (fun right)
    (lambda (left)
      (fun left right))))

;; +--------------------------------------------+---------------------
;; | Exercise 1: Cutting arithmetic expressions |
;; +--------------------------------------------+

;; DRIVER: B

;; As you may recall from the reading, the cut operation creates a
;; new procedure from an existing procedure by filling in some of the
;; arguments.

;; In this lab, we will first consider the effect of cut on some basic 
;; arithmetic operations.

;; Consider each of the following definitions.

(define add10 #(+ 10 %1))
(define add11 #(+ %1 11))
(define sub5 #(- 5 %1))
(define sub6 #(- %1 6))
(define rem7a #(remainder %1 7))
(define rem7b #(remainder 7 %1))

;; a. What value do you expect to get if you apply each of these procedures
;; to the value 12? What about the value 5?

;; > (add10 12)
;; 
;; > (add10 5)
;; 
;; > (add11 12)
;; 
;; > (add11 5)
;; 
;; > (sub5 12)
;; 
;; > (sub5 5)
;; 
;; > (sub6 12)
;; 
;; > (sub6 5)
;; 
;; > (rem7a 12)
;; 
;; > (rem7a 5)
;; 
;; > (rem7b 12)
;; 
;; > (rem7b 5)
;

;; b. Check your answers experimentally, adding notes to yourself where
;; appropriate.

;; add10:
;; 
;; add11:
;; 
;; sub5:
;; 
;; sub6:
;; 
;; rem7a:
;; 
;; rem7b:

;; c. Summarize what your results suggest about the cut operation.

;; Your answer:
;
;
;

;; +--------------------------------------+---------------------------
;; | Exercise 2: Composing cut procedures |
;; +--------------------------------------+

;; DRIVER: A

;; Consider the following procedure.

(define fun2
  (o #(* 5 %1) #(- %1 2)))

;; a. In your own words, what should `fun2` do?
;
;; Answer:
;; 

;; b. What values do you expect to get when you apply `fun2` to the
;; inputs 1, 2, 3, 4, and 5?

;; > (fun2 1)
;; 
;; > (fun2 2)
;; 
;; > (fun2 3)
;; 
;; > (fun2 4)
;; 
;; > (fun2 5)
;; 

;; c. Check your answers experimentally.

;; > (fun2 1)
;; 
;; > (fun2 2)
;; 
;; > (fun2 3)
;; 
;; > (fun2 4)
;; 
;; > (fun2 5)
;; 

;; d. What does `fun2` do?

;; Answer:
;; 

;; e. In your own words, explain how the definition achieves that result.

;; Answer:
;; 

;; +------------------------------+-----------------------------------
;; | Exercise 3: Combining colors |
;; +------------------------------+

;; DRIVER: B

;; Determine what each of the following procedures does. You may want to
;; read documentation (such as it is) and conduct experiments.

;; a. `(rgb-add c1 c2)`
;; 
;; Answer:
;; 

;; b. `(rgb-subtract c1 c2)`
;; 
;; Answer:
;; 

;; c. `(rgb-average c1 c2)`
;; 
;; Answer:
;; 

;; +-----------------------------------+------------------------------
;; | Exercise 4: Image transformations |
;; +-----------------------------------+

;; DRIVER: A

;; What does each of the following procedures do? First hypothesize,
;; then check in Scamper. In some cases, you may need to think a bit
;; about what the input to the procedure is.

(define transform-image-4a
  (lambda (img)
    (pixel-map (lambda (c)
                 (rgb (rgb-red c) 0 (rgb-blue c)))
               img)))

;; a. Answer for `transform-image-4a`
;; Hypothesis: 
;; Check: 

(define transform-image-4b
  (lambda (img)
    (pixel-map (o rgb-bluer rgb-redder) img)))

;; b. Answer for `transform-image-4b`
;; Hypothesis: 
;; Check: 

(define transform-image-4c
  (lambda (img)
    (pixel-map (o rgb-pseudo-complement rgb-greener rgb-pseudo-complement) img)))

;; c. Answer for `transform-image-4c`
;; Hypothesis: 
;; Check: 

(define transform-image-4d
  (lambda (img)
    (pixel-map #(rgb-subtract %1 (rgb 100 0 100)) img)))

;; d. Answer for `transform-image-4d`
;; Hypothesis: 
;; Check: 

(define transform-image-4e
  (lambda (img)
    (pixel-map #(rgb-subtract (rgb 255 255 255) %1) img)))

;; e. Answer for `transform-image-4e`
;; Hypothesis: 
;; Check: 

;; +--------------------+---------------------------------------------
;; | Detour: Sectioning |
;; +--------------------+

;; The cut operation has a somewhat strange syntax. It is also very
;; powerful. Many functional programmers prefer a simpler version,
;; which we'll call "sectioning". Like cutting, sectioning fills in
;; some parameters of a function. Unlike cutting, sectioning does not
;; have a special syntax; it looks like any function call. (Later in
;; the semester, we'll even learn how to write the section functions.)
;; Andunlike cutting but like composition, sectioning leaves the
;; parameter unspecified.
;; 
;; The left-section function, written `l-s`, takes two parameters: a
;; two-parameter function, `f`, and a value, `left` (or an expression
;; that produces a value). It returns a new function that takes one
;; parameter. `l-s` then returns a new function of one parameter. When
;; you call the new function to a value, `x`, it applies `f` to `left`
;; and `x`: `(f left x)`. Alternately, you can think of `(l-s f left)`
;; as another way to write `#(f left %1)`. That is, `(l-s f left)`
;; fills in the _left_ parameter of `f`.
;; 
;;     > (define add1 (l-s + 1)) ; f is +, left is 1
;;     > (add1 5) ; x is 5
;;     6 ; (+ 1 5)
;;     > (add1 0) ; x is 0
;;     1 ; (+ 1 0)
;;     > (add1 1.5) ; x is 1.5
;;     2.5 ; (+ 1 1.5)
;;     > (add1 -2) ; r is -2
;;     -1  (+ 1 -2)
;; 
;; Wasn't that exciting?
;; 
;; As you might guess, right-section (`r-s`) is much like left-section
;; except that it fills in the second (right) parameter of `f`. Once
;; again, we get back a one-parameter function that takes one input.
;; That is, `(r-s f right)` returns a new function that corresponds
;; to `#(f %1 right)`. When we apply the new function to a value, `x`,
;; it applies the original function to `x` and `right`, computing `(f
;; x right)`.
;; 
;;     > (define sub1 (r-s - 1) ; f is -, right is 1.
;;     > (sub1 5) ; x is 5
;;     4 ; (- 5 1)
;;     > (sub1 0) ; x is 0
;;     -1 ; (- 0 1)
;; 
;; If both `l-s` and `r-s` build a new, one-parameter, procedure, does it matter which we use? Yes! Well, sometimes. As you've seen, many binary operations behave differently depending on what's on the left and what's on the right. `(- 1 4)` is not the same as `(- 4 1)`.
;; 
;;     > (define subfrom1 (l-s - 1)) ; (f is -, left is 1)
;;     > (subfrom1 5)
;;     > -4 ; (- 1 5)

;; +----------------------------------------------+-------------------
;; | Exercise 5: Image transformations, revisited |
;; +----------------------------------------------+

;; DRIVER: A

;; What does each of the following procedures do? First hypothesize,
;; then check in Scamper. In some cases, you may need to think a bit
;; about what the input to the procedure is.

(define transform-image-5a
  (lambda (img)
    (pixel-map #(rgb-subtract %1 (rgb 100 0 100)) img)))

;; d. Answer for `transform-image-5a`
;; Hypothesis: 
;; Check: 

(define transform-image-4e
  (lambda (img)
    (pixel-map #(rgb-subtract (rgb 255 255 255) %1) img)))

;; e. Answer for `transform-image-4e`
;; Hypothesis: 
;; Check: 

;; +-------------------------------------------------+----------------
;; | Exercise 6: Image transformations, re-revisited |
;; +-------------------------------------------------+

;; DRIVER: B

;; What does each of the following procedures do? First hypothesize,
;; then check in Scamper. Note that you'll likely want to think about
;; the input type as a starting point.

(define transform-image-6a
  (l-s pixel-map rgb-bluer))

;; a. Answer for `transform-image-6a`
;; Hypothesis: 
;; Check: 

(define transform-image-6b
  (l-s pixel-map (o rgb-darker rgb-darker rgb-darker)))

;; b. Answer for `transform-image-6b`
;; Hypothesis: 
;; Check: 

(define transform-image-6c
  (l-s pixel-map (l-s rgb-add (rgb 64 0 64))))

;; c. Answer for `transform-image-5c`
;; Hypothesis: 
;; Check: 

(define transform-image-6d
  (l-s pixel-map (o rgb-darker
                    rgb-darker
                    (l-s rgb-add (rgb 64 0 64)))))

;; d. Answer for `transform-image-5d`
;; Hypothesis: 
;; Check: 

;; e. Summarize what you've learned from these definitions.
;
;

;; +----------------+-------------------------------------------------
;; | Submit the lab |
;; +----------------+

;; You're done.  Congratulations!  It's time to submit your lab.

;; To turn in your work:

;; a. Ensure that your file runs properly.  (E.g., when we click "Run", it 
;; should not produce errors.)
;
;; b. Make sure that this file is named `transforming-images.scm`.
;
;; c. If at all possible, make sure that you have no calls to `image-load` in
;; your definitions pane.
;
;; d. Save your file to disk.
;
;; e. Submit this final file to Gradescope.
;
;; f. Make sure to submit your work as a group submission and include your 
;; partner in the submission.
;
;; g. Wait for the autograder results to make sure that you met the
;; basic goals.

;; If you have time remaining, try a few more experiments with
;; compose, cut, and section to ensure that you understand them 
;; fully.
