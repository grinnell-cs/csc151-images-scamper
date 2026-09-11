;; CSC 151-NN (TERM)
;; Lab: Transforming Images
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import image)

; +-------------+----------------------------------------------------
; | Preparation |
; +-------------+

; a. Introduce yourself to your partner.
; 
; b. Discuss any issues that will contribute to a more successful 
;    partnership.
; 
; c. Load the lab and readings pages in your Web browser so that you
;    have them available for reference.
; 
; d. Fill in the section number, date, and your names in the document header.
; 
; e. Reload Scamper.
; 
; f. The person closer to the board is A.  The person further from the 
;    board is B.

; +---------------+--------------------------------------------------
; | Provided code |
; +---------------+


; +--------------------------------------------+---------------------
; | Exercise 1: Cutting arithmetic expressions |
; +--------------------------------------------+

; DRIVER: B

; As you may recall from the reading, the cut operation creates a
; new procedure from an existing procedure by filling in some of the
; arguments.

; In this lab, we will first consider the effect of cut on some basic 
; arithmetic operations.

; Consider each of the following definitions.

(define add10 #(+ 10 %1))
(define add11 #(+ %1 11))
(define sub5 #(- 5 %1))
(define sub6 #(- %1 6))
(define rem7a #(remainder %1 7))
(define rem7b #(remainder 7 %1))

; a. What value do you expect to get if you apply each of these procedures
; to the value 12? What about the value 5?

; > (add10 12)
; 
; > (add10 5)
; 
; > (add11 12)
; 
; > (add11 5)
; 
; > (sub5 12)
; 
; > (sub5 5)
; 
; > (sub6 12)
; 
; > (sub6 5)
; 
; > (rem7a 12)
; 
; > (rem7a 5)
; 
; > (rem7b 12)
; 
; > (rem7b 5)
;

; b. Check your answers experimentally, adding notes to yourself where
; appropriate.

; add10:
; 
; add11:
; 
; sub5:
; 
; sub6:
; 
; rem7a:
; 
; rem7b:

; c. Summarize what your results suggest about the cut operation.

; Your answer:
;
;
;

; +--------------------------------------+---------------------------
; | Exercise 2: Composing cut procedures |
; +--------------------------------------+

; DRIVER: A

; Consider the following procedure.

(define fun2
  (o #(* 5 %1) #(- %1 2)))

; a. In your own words, what should `fun2` do?
;
; Answer:
; 

; b. What values do you expect to get when you apply `fun2` to the
; inputs 1, 2, 3, 4, and 5?

; > (fun2 1)
; 
; > (fun2 2)
; 
; > (fun2 3)
; 
; > (fun2 4)
; 
; > (fun2 5)
; 

; c. Check your answers experimentally.

; > (fun2 1)
; 
; > (fun2 2)
; 
; > (fun2 3)
; 
; > (fun2 4)
; 
; > (fun2 5)
; 

; d. What does `fun2` do?

; Answer:
; 

; e. In your own words, explain how the definition achieves that result.

; Answer:
; 

; +------------------------------+-----------------------------------
; | Exercise 3: Combining colors |
; +------------------------------+

; DRIVER: B

; Determine what each of the following procedures does. You may want to
; read documentation (such as it is) and conduct experiments.

; a. `(rgb-add c1 c2)`
; 
; Answer:
; 

; b. `(rgb-subtract c1 c2)`
; 
; Answer:
; 

; c. `(rgb-average c1 c2)`
; 
; Answer:
; 

; +----------------------------------------------+-------------------
; | Exercise 4: Image transformations, revisited |
; +----------------------------------------------+

; DRIVER: A

; What does each of the following procedures do? (First hypothesize,
; then check in Scamper.)

(define transform-image-4a
  (lambda (img)
    (pixel-map (lambda (c)
                 (rgb (rgb-red c) 0 (rgb-blue c)))
               img)))

; a. Answer for `transform-image-4a` (see above).
; Hypothesis: 
; Check: 

(define transform-image-4b
  (lambda (img)
    (pixel-map (o rgb-bluer rgb-redder) img)))

; b. Answer for `transform-image-4b` (see above).
; Hypothesis: 
; Check: 

(define transform-image-4c
  (lambda (img)
    (pixel-map (o rgb-pseudo-complement rgb-greener rgb-pseudo-complement) img)))

; c. Answer for `transform-image-4c` (see above).
; Hypothesis: 
; Check: 

(define transform-image-4d
  (lambda (img)
    (pixel-map #(image-subtract %1 (rgb 100 0 100))) img)))

; d. Answer for `transform-image-4d` (see above).
; Hypothesis: 
; Check: 

(define transform-image-4e
  (lambda (img)
    (pixel-map #(image-subtract (rgb 255 255 255) %1)) img)))

; e. Answer for `transform-image-4e` (see above).
; Hypothesis: 
; Check: 

; +----------------------------------------------+-------------------
; | Exercise 5: Image transformations, revisited |
; +----------------------------------------------+

; DRIVER: A

; What does each of the following procedures do? (First hypothesize,
; then check in Scamper.)

(define transform-image-5a
  #(pixel-map rgb-bluer %1))

; a. Answer for `transform-image05a` (see above).
; Hypothesis: 
; Check: 

(define transform-image-5b
  #(pixel-map (o rgb-darker rgb-darker rgb-darker) %1))

; b. Answer for `transform-image-5b` (see above).
; Hypothesis: 
; Check: 

(define transform-image-5c
  (cut (pixel-map (cut (rgb-add (rgb 64 0 64) <>)) <>)))

; c. Answer for `transform-image-5c` (see above).
; Hypothesis: 
; Check: 

(define transform-image-5d
  (cut (pixel-map (o rgb-darker
                     rgb-darker
                     (cut (rgb-add (rgb 64 0 64) <>)))
                  <>)))

; d. Answer for `transform-image-5d` (see above).
; Hypothesis: 
; Check: 


; e. Summarize what you've learned from these definitions.
;
;

; +----------------+-------------------------------------------------
; | Submit the lab |
; +----------------+

; You're done.  Congratulations!  It's time to submit your lab.

; To turn in your work:

; a. Ensure that your file runs properly.  (E.g., when we click "Run", it should
; not produce errors.)
;
; b. Make sure that this file is named `transforming-images.scm`.
;
; c. If at all possible, make sure that you have no calls to `image-load` in
; your definitions pane.
;
; d. Save your file to disk.
;
; e. Submit this final file to Gradescope.
;
; f. Make sure to submit your work as a group submission and include your 
; partner in the submission.
;
; g. Wait for the autograder results to make sure that you met the
; basic goals.

; If you have time remaining, try a few more experiments with
; cut and compose to ensure that you understand them fully.
