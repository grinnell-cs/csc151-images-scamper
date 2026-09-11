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

; +---------------------------------------+--------------------------
; | Exercise 1: Exploring transformations |
; +---------------------------------------+

; DRIVER: B

; Remind yourself of what some of the basic RGB transformers do by applying 
; them to `(rgb 127 128 129)` and any other colors you think will be useful. 
; Copy and paste your results from the interactions pane into the comments
; below.

; Include notes to yourselves as appropriate.

; Please use the steps in `rgb-darker` as an example.

; a. Preparation

; > (rgb 127 128 129)
; ???
; > (rgb->string (rgb 127 128 129))
; ???

; b. `rgb-darker`

; Experiments:

; > (rgb-darker (rgb 127 128 129))
; ???
; > (rgb->string (rgb-darker (rgb 127 128 129)))
; ???
; > (rgb-darker ...) ; fill in some other color
; ???
; > (rgb->string (rgb-darker ...)
; ???
; > (rgb-darker ...) ; fill in some other color
; ???
; > (rgb->string (rgb-darker ...)
; ???

; Notes:
;
;
;

; c. `rgb-lighter

; Experiments:

; Notes:

;
;
;

; d. `rgb-redder`

; Experiments:

; Notes:
;
;
;

; e. `rgb-greener`

; Experiments:

; Notes:
;
;
;

; f. `rgb-bluer`

; Experiments:

; Notes:
;
;
;

; g. `rgb-pseudo-complement`

; Experiments:

; Notes:
;
;
;

; h. `rgb-greyscale`

; Experiments:

; Notes:
;
;
;


; i. `rgb-phaseshift`

; Experiments:

; Notes:
;
;
;

; +--------------------------------------+---------------------------
; | Exercise 2: Composed transformations |
; +--------------------------------------+

; DRIVER B

; As you may recall, the compose procedure, `o`, joins together multiple
; procedures, applying each in sequence from right to left.

; a. Consider the following definition.

(define rgb-transform-2a 
  (o rgb-redder rgb-pseudo-complement))

; i. What color (RGB components) do you expect to get for each of the following?

; > (rgb->string (rgb-transform-2a (rgb 127 127 127)))
; Your guess:

; > (rgb->string (rgb-transform-2a (rgb 255 0 0)))
; Your guess:

; > (rgb->string (rgb-transform-2a (rgb 0 255 0)))
; Your guess:

; > (rgb->string (rgb-transform-2a (rgb-transform-2a (rgb 127 127 127))))
; Your guess:

; ii. Check your answers experimentally.

; > (rgb->string (rgb-transform-2a (rgb 127 127 127)))

; > (rgb->string (rgb-transform-2a (rgb 255 0 0)))

; > (rgb->string (rgb-transform-2a (rgb 0 255 0)))

; b. Consider the following definition.

(define rgb-transform-2b
  (o rgb-pseudo-complement rgb-redder))

; i. What color (RGB components) do you expect to get for each of the following?

; > (rgb->string (rgb-transform-2b (rgb 127 127 127)))
; Your guess:

; > (rgb->string (rgb-transform-2b (rgb 255 0 0)))
; Your guess:

; > (rgb->string (rgb-transform-2b (rgb 0 255 0)))
; Your guess:

; > (rgb->string (rgb-transform-2b (rgb-transform-2b (rgb 127 127 127))))
; Your guess:

; ii. Check your answers experimentally.

; > (rgb->string (rgb-transform-2b (rgb 127 127 127)))

; > (rgb->string (rgb-transform-2b (rgb 255 0 0)))

; > (rgb->string (rgb-transform-2b (rgb 0 255 0)))

; > (rgb->string (rgb-transform-2b (rgb-transform-2b (rgb 127 127 127))))

; c. Consider the following definition.

(define rgb-transform-2c
  (o rgb-redder rgb-redder rgb-bluer rgb-bluer))

; i. What color (RGB components) do you expect to get for each of the following?

; > (rgb->string (rgb-transform-2c (rgb 127 127 127)))
; Your guess:

; > (rgb->string (rgb-transform-2c (rgb 255 0 0)))
; Your guess:

; > (rgb->string (rgb-transform-2c (rgb 0 255 0)))
; Your guess:

; ii. Check your answers experimentally.

; > (rgb->string (rgb-transform-2c (rgb 127 127 127)))
;
; > (rgb->string (rgb-transform-2c (rgb 255 0 0)))
;
; > (rgb->string (rgb-transform-2c (rgb 0 255 0)))
; 

; d. Using `pixel-map`, apply `rgb-transform-2a` and `rgb-transform-2b`
; to the kitten image. Then summarize the differences as best you can.

; Your answer:
;
;

; e. Using `pixel-map`, `rgb-transform-2c` to the kitten image 
; and summarize the differences as best you can.

; Your answer: 
;

; f. Using the composition operation, `o`, and the basic rgb transformations,
; write a procedure, `rgb-less-red`, that makes its parameter less red.

; (define rgb-less-red
;  (o ???))

; g. In the interactions pane, apply your procedure to the kitten image
; using a command like the following.
;
;   > (pixel-map rgb-less-red (image-load "kitten.jpg"))

; h. Consider the following transformation.

(define rgb-transform-2h
  (o rgb-darker rgb-darker rgb-lighter rgb-lighter))

; At first glance, `rgb-transform-2h` seems to return its input value.

; > (rgb->string (rgb-transform-2h (rgb 128 128 128)))
; "128/128/128"
; > (rgb->string (rgb-transform-2h (rgb 60 70 80)))
; "60/70/80"

; i. Are there any colors for which `rgb-transform-2h` does *not* return
; the same color?

; Your answer:
;

; ii. What effect, if any, do you expect `rgb-transform-2h` to have
; on an image?  (That is, what do you expect for something like

; `(pixel-map rgb-transform-2h img)`.

; Your answer:
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

; You're done.  Congratulations!  It's time to submit your lab.

; To turn in your work:

; a. Ensure that your file runs properly.  (E.g., when we click "Run", it should
; not produce errors.)
;
; b. Make sure that this file is named `transforming-rgb.scm`.
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
