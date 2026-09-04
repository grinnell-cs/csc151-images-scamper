;; CSC 151-NN (TERM)
;; Lab: Reading and writing functions
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import image)

; +---------------+--------------------------------------------------
; | Helper values |
; +---------------+

; ??? : image?
; A placeholder for "not yet defined"
(define ??? (solid-circle 10 "white"))

; red-square : image?
; A small red square, useful for extra exercises in this lab.
(define red-square (solid-square 20 "red"))

; black-square : image?
; A small black square, useful for extra exercises in this lab.
(define black-square (solid-square 20 "black"))

; +--------------------+---------------------------------------------
; | Exercise 1: Houses |
; +--------------------+

; DRIVER: A

; Our reading on procedures contained a procedure to make a simple house,
; which we have reproduced below for your use.

; Copied from the CSC-151 reading "Writing your own procedures"
(define simple-house
  (lambda (size)
    (above (solid-isosceles-triangle size (* 0.6 size) "red")
           (solid-rectangle (* 0.8 size) size "black"))))

; a.  Use the Interactions Pane (i.e., the REPL) to verify that you
; can create houses of different sizes.  You may choose to do the
; same examples as in the reading or you may choose to do a few of
; your own.

; You need not submit anything for this part of the exercise.

; b.  The original simple-house procedure does not color the house.
; Write a new procedure, `(painted-house size color)`, in the space
; below.  The procedure should take takes both the size and color as
; parameters and makes a house of that specified size whose main body
; is in the specified color.  (The roof should remain red.)

; Make sure to add a comment to painted-house that indicates you
; adapted this code from the reading.  We always credit our sources!

(define painted-house
  (lambda (size color)
    ???))

; c.  In addition to this simple-house procedure, the reading also
; included a definition for a more complex house with a door and
; doorknob.  Use this as the basis of a new function, fancy-house,
; that makes a house of a given size and color, including a brown
; door and yellow doorknob.  Make sure that the size of the door
; scales with the size of the house.

(define fancy-house
  (lambda (size color)
    ???))


; +--------------------------+---------------------------------------
; | Exercise 2: Party people |
; +--------------------------+

; DRIVER: B

; The lab page has a picture of something we often call a "party person".
; It's a stick figure with a purple triangular party hat and a red bow-tie.
; Write a procedure, `(party-person hat-color tie-color)`, that makes a 
; similar figure, but with a hat and tie of the specified colors.

; Note that you do not have to match our figure exactly.

(define party-person
  (lambda (hat-color tie-color)
    ???))

; +------------------------+-----------------------------------------
; | Exercise 3: Snowpeople |
; +------------------------+

; DRIVER: A

; The reading on images contained an image that looked a bit
; like a snowperson.

; a. Complete the definition of the procedure, (snowperson size),
; that creates a simple snowperson with three white circles with thin
; black outlines, where the size parameter is used for the size of
; the largest part of the snowperson, the base.

(define snowperson
  (lambda (size)
    ???))

; b. Complete the definition of (snowperson-revisited height) that
; creates a simple snowperson with three white circles with black
; outlines.  Unlike snowperson, this function's parameter controls
; the *total height* of the snowperson rather than just the base.
; (It should be as close to the height parameter as you can get it.)

; Use `(beside (solid-rectangle 5 100 "black") (snowperson-revisited 100))`
; to see if your snowperson is the right height.

(define snowperson-revisited
  (lambda (height)
    ???))

; +----------------------+-------------------------------------------
; | Exercise 4: Top hats |
; +----------------------+

; DRIVER: B

; a. Write a procedure, `(top-hat width height)`, that makes a black
; top hat of the given width and height.

(define top-hat
  (lambda (width height)
    ???))

; b.  Complete the following definition of `(snowperson-with-hat height)`
; that behaves like snowperson-revisited but adds a black top hat to
; the top of the snowperson.  

; **Note that the total height should include the top hat.**

; Once again, make sure to compare your snowperson to a rectangle to
; ensure you computed the height correctly.

(define snowperson-with-hat
  (lambda (height)
    ???))

; c.  From the prior sub-exercise, you might have realized that top
; hats are universal and should be applicable to any image you can
; think of.  Define a function (add-top-hat width height image) that
; places a top hat on the given size above the provided image.

; For example, `(add-top-hat 20 10 (circle 20 'solid 'blue))` will
; add a top hat that is twenty units wide and ten units high to a
; circle of diameter 20 and `(addtop-hat 20 30 (snowperson-revisited 50))`
; will had a top had that is 20 units wide and 30 units high to the
; top of a 50-unit-high snowperson.

(define add-top-hat
  (lambda (width height image)
    ???))

; +----------------+-------------------------------------------------
; | Submit the lab |
; +----------------+

; DRIVER: Anyone

; You're done.  Congratulations!  It's time to submit your lab.  After
; doing so, you should review the extra problems below and, as
; appropriate, pick one or more to attempt.  We'd suggest that you
; start with the first extra problem.

; To turn in your work:

; a. If you haven't done so already, add your names, the section
; number, and the date at the top of the file.

; b. Ensure that your file runs properly.  (E.g., when we click "Run",
; it should work not produce errors.)

; c. Make sure that this file is named `procedures.scm`.

; d. Download the file from Scamper by clicking on the stack of three
; dots next to the file name and selecting "Download".

; e. Submit this final file to Gradescope.  Make sure to submit your
; work as a group submission and include your partner in the submission.

; f. Wait for the autograder results to make sure that you met the
; basic goals.

; g. Email the file to your partner in case they need it later.

; +---------------------------+--------------------------------------
; | For those with extra time |
; +---------------------------+

; If you find that you have extra time, you should try one or more of
; the following exercises.  We would recommend that you start with
; Extra 1, which reveals some important ideas.


; +----------------------------+-------------------------------------
; | Extra 1: Grids and circles |
; +----------------------------+

; a.  Complete the procedure (grid image) below that takes an image and
;     makes a 2-by-2 grid with that image.  For example, 
;       (grid (solid-circle ...))
;     should make something like the this.
; 
;        o o
;        o o
; 
;     Similarly,
;       (grid (house ...)) 
;     should make something like this.
; 
;       /\  /\
;       ||  ||

;       /\  /\
;       ||  ||

(define grid
  (lambda (image)
    ???))

; b.  Using grid and the definition of a 2 × 2 checkerboard given below
; define an image called `checkerboard` that looks like a standard
; checkerboard.  That is, it should havce 8 squares per row and 8 squares 
; per column (i.e., it is an 8 × 8 board) with alternating red and black 
; squares.  

; **Use as little code as possible in your definition.**

(define two-by-two
  (above
    (beside red-square black-square)
    (beside black-square red-square)))

; Note: checkerboard is a value, not a procedure.  No lambda should
; be necessary.
(define checkerboard
  ???)

; c.  As you may know, some modern artists, like Andy Warhol, achieved
; interesting conceptual pieces by creating grids of the same (or
; similar) thing.  Using grid, complete the procedure
; (sixteen-circles color) that makes a grid of sixteen equal-size
; solid circles of the given color.

(define sixteen-circles
  (lambda (color)
    ???))

; +-----------------------+------------------------------------------
; | Extra 2: Snowcone-men |
; +-----------------------+

; It gets a bit boring to see our snowpeople in white.  Of course, snowcones
; can be almost any color (depending on what type of syrup you add).

; Write a procedure, `(snowconeperson height color)`, that draws a snowperson 
; in the given color with every circle outlined in black.

(define snowconeperson
  (lambda (height color)
    ???))

; +-----------------------------------+------------------------------
; | Extra 3: Smiling faces, sometimes |
; +-----------------------------------+

; In the reading on images, we challenged you to create a smiley face.
; Complete the procedure, `(smiley-face size)`, that creates a smiley face
; of a specified size.

; TODO: fill in the definition of smiley-face

(define smiley-face
  (lambda (size)
    (solid-circle 100 "yellow")))

; +-------------------------+----------------------------------------
; | Extra 4: Counting words |
; +-------------------------+

; As you may recall, we used the following code to count the number
; of words in a string.

;;; (count-words str) -> integer?
;;;    str : string
;;; Determine approximately how many "words" appear in the
;;; given string.
(define count-words
  (lambda (str)
    (length (string-split str " "))))

; a.  Check the behavior of count-words on a few inputs.  Copy and paste
; your experiments here, using a semicolon to "comment out" the outputs.
; We've included one example.

(count-words "hello world")
; 2

; b. In your own words, explain how count-words works. Make sure to
; start the lines of your explanation with semicolons.

; ...


