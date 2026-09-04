;; CSC 151-NN (TERM)
;; Lab: RGB Colors
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import image)

; +-------------+----------------------------------------------------
; | Lab support |
; +-------------+

;;; ??? : image?
;;; A quick hack to ensure we can use ??? below. Please do not change
;;; the name.
(define ??? (solid-circle 40 (rgb 0 0 0 0)))

;;; (no-less-than-zero n) -> real?
;;;   n : real?
;;; If n is zero or greater, returns n.
;;; otherwise, returns zero.

; +-----------------------------+------------------------------------
; | Procedures from the reading |
; +-----------------------------+

;;; (color-pseudo-complement c) -> rgb?
;;;   c : rgb?
;;; Compute the pseudo-complement of a color
(define color-pseudo-complement
  (lambda (c)
    (rgb (- 255 (rgb-red c))
         (- 255 (rgb-green c))
         (- 255 (rgb-blue c)))))

;;; (color-merge-red-green c) -> rgb?
;;;   c : rgb?
;;; Make both the red and green components closer to the average of the
;;; two components.
(define color-merge-red-green
  (lambda (c)
    (rgb (quotient (+ (rgb-red c) (rgb-red c) (rgb-green c)) 3)
         (quotient (+ (rgb-red c) (rgb-green c) (rgb-green c)) 3)
         (rgb-blue c))))


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
; d. Before beginning this lab, please make sure that Scamper is up to date.
;    (Reload usually suffices.)
; 
; e. The person closer to the board is A.  The person further from the 
;    board is B.
; 
; f. Make sure that you can load the kitten image.  
; 
;      > (define kitten (image-load "kitten.jpg"))
;      > kitten
;      +------+
;      | meow |
;      +------+
;
; g. Make sure that you can complement the kitten image
;
;      > (pixel-map color-pseudo-complement kitten)
;      +------+
;      ; woem ;
;      +------+
;
; WARNING! `pixel-map` is slow. You may see a new prompt and then have
; to wait another thirty seconds or so before you see the result.

; +-----------------------------------------+------------------------
; | Exercise 1: Previewing groups of colors |
; +-----------------------------------------+

; DRIVER: A

; As you've likely noted, when exploring RGB colors, it's helpful to 
; be able to quickly move from the numeric description to a picture
; that shows the colors.

; a. Write a procedure, `(color-palette c1 c2 c3)`, that takes
; three colors as parameters and creates an image with a 20x40
; rectangle for each color and the three rectangles side-by-side
; 
; +---+---+---+
; |c1 |c2 |c3 |
;; +---+---+---+

;;; (color-palette c1 c2 c3) -> image?
;;;   c1 : color?
;;;   c2 : color?
;;;   c3 : color?
;;; Create an image that permits us to preview the three colors.
(define color-palette
  (lambda (c1 c2 c3)
    ???))

; b. Predict the approximate colors you will get for each of the
; following RGB combinations, preview them with `color-palette`,
; and then add any notes you have.

; i. (rgb 200 100 50)
; ii. (rgb 100 50 200)
; iii. (rgb 50 200 100)

; c. Define the value palette-pvr-sb-s as a palette made from the
; colors `"palevioletred"`, `"steelblue"`, and `"salmon"`.

;;; palette-pvr-sb-s : image?
;;; A palette made from palevioletred, steelblue, adn salmon
(define palette-pvr-sb-s ???)

; +-----------------------------+------------------------------------
; | Exercise 2: Choosing colors |
; +-----------------------------+

; DRIVER: A

; a. As you've noted, we regularly suggest colors for you to use.  Of
; course, you should not be limited by our suggestions for possible
; colors.  Write down the names of five of your favorite colors.

; i.

; ii.

; iii.

; iv.

; v.

; b. Check to see if any of them are defined using `(find-colors name)`.
; This procedure returns a list of all color names that contain `name`.

; For example, if one of my favorite colors is a kind of pink (say,
; hot pink), I might write,

;   > (find-colors "pink")
;   '("deeppink" "hotpink" "lightpink" "pink")

; There is nothing to submit for this sub-exercise.

; c. Define `fave1`, `fave2`, and `fave3` to be RGB colors that correspond
; to three colors you've identified.  For example,
; 
;   (define fave0 (color-name->rgb "hotpink"))

(define fave1 ???)

(define fave2 ???)

(define fave3 ???)

; d. Create a palette of these three colors.

;;; faves : image?
;;; A palette of our three favorite colors
(define faves ???)

; +--------------------------------------+---------------------------
; | Exercise 3: Concentric color circles |
; +--------------------------------------+

; DRIVER: B

; a. Write a procedure, `(ccc c1 c2 c3)`, that takes three colors as
; parameters and creates an image with three concentric circles, each
; on top of the next.  The largest/back circle should be colored
; c3 and have diameter 60.  The middle circle should be colored c2 and
; have diameter 40.  The smallest/front circle should be colored c1 and
; have diameter 20.

;;; (ccc c1 c2 c3) -> image?
;;;   c1 : color?
;;;   c2 : color?
;;;   c3 : color?
;;; Create an image that permits us to preview the three colors as
;;; concentric circles.
(define ccc
  (lambda (c1 c2 c3)
    ???))

; b. Using your procedure, create an image, `concentric-faves`, that
; has three concentric circles, one each from `fave1`, `fave2, and
; `fave3`.

;;; concentric-faves : image?
;;; A drawing containing three of our favorite colors as concentric
;;; circles.
(define concentric-faves ???)

; +-------------------------+----------------------------------------
; | Exercise 4: Secondaries |
; +-------------------------+

; DRIVER: B

; As you may recall from the reading on design and color, in
; subtractive color, the secondary colors are created by combining
; any two primaries.  Let's try the same with RGB colors.  That
; is, we'll create "additive primaries" by setting two of the
; components to 255.

; a. What color do you expect to get if you mix red and blue?
; (That is, what color do you expect for `(rgb 255 0 255)`?)

; ENTER YOUR ANSWER HERE

; b. Check your answer by creating a set of concentric circles
; of red, the red-blue mix, and blue.

;;; red-blue-mix : image?
;;; Concentric circles of red, a red-blue mix, and blue
(define red-blue-mix ???)

; c. What color do you expect to get if you mix red and green?
; (That is, what color do you expect for `(rgb 255 255 0)`?)

; ENTER YOUR ANSWER HERE

; d. Check your answer by creating a set of concentric circles
; of green, the red-green mix, and red.


;;; red-green-mix : image?
;;; Concentric circles of red, a red-green mix, and green.
(define red-green-mix ???)

; e. What color do you expect to get if you mix blue and green?
; (That is, what color do you expect for `(rgb 0 255 255)`?)

; ENTER YOUR ANSWER HERE

; f. Check your answer by creating a set of concentric circles
; of blue, the blue-green mix, and green.


;;; blue-green-mix : image?
;;; Concentric circles of blue, a blue-green mix, and green.
(define blue-green-mix ???)

; +--------------------------------+---------------------------------
; | Exercise 5: Reduced components |
; +--------------------------------+

; DRIVER: A

; a. What colors do you expect for each of the following?

; (rgb 128 0 0): ENTER YOUR ANSWER HERE

; (rgb 0 128 0): ENTER YOUR ANSWER HERE

; (rgb 0 0 128): ENTER YOUR ANSWER HERE

; b. Check your answer experimentally by creating an appropriate
; color palette or set of concentric circles.

;;; half-primaries : image?
;;; An image containing "half primaries"
(define half-primaries ???)

; c. What colors do you expect for each of the following?

; (rgb 128 128 0): ENTER YOUR ANSWER HERE

; (rgb 0 128 128): ENTER YOUR ANSWER HERE

; (rgb 128 0 128): ENTER YOUR ANSWER HERE

; d. Check your answer experimentally by creating an appropriate
; color palette or set of concentric circles.

(define half-secondaries ???)
;;; half-secondaries : image?
;;; An image containing "half secondaries"

; +-----------------------------+------------------------------------
; | Exercise 6: Darker versions |
; +-----------------------------+

; DRIVER: A

; As you learned in the prior exercise (or perhaps the reading), we can
; get a darker version of a color by using lower number for each of the
; components.

; a. Write a procedure, `(color-darker c)`, that produces a darker version
; of `c` by reducing each component by 32, stopping at 0 when subtracting
; 32 would drop the component by 0.  

; Note that `(no-less-then-zero n)` returns zero if `n` is less than
; zero and `n` otherwise.

;;; (color-darker c) -> color?
;;;   c : color?
;;; Create a darker version of 
(define color-darker
  (lambda (c)
    ???))

; b. Verify that it seems to work appropriately by creating a darker
; version of the kitten.
;
;    > (pixel-map color-darker kitten)
;
; WARNING! `pixel-map` is slow. You may see a new prompt and then have
; to wait another thirty seconds or so before you see the result.

; +---------------------------------------+--------------------------
; | Exercise 7: Exploring transformations |
; +---------------------------------------+

; DRIVER: A

; a. Write a procedure, `(darker-versions c)`, that takes a color as
; a parameter and produces an image that contains (a) concentric
; circles of `c`, `(color-darker c)`, and `(color-darker (color-darker c))
; and (b) a color palette of those same three colors, with the circles
; placed above the palette (using `above`, not `overlay`).

;;; (darker-versions c) -> image?
;;;   c : color?
;;; Create an image that shows c along with two darker versions of c.
(define darker-versions
  (lambda (c)
    ???))

; b. Write a procedure, `(red-green-merged-versions c)`, that takes a
; color as a parameter and does the same thing as `darker-versions`,
; except that it uses `color-merge-red-green` rather than `color-darker`.

;;; (red-green-merged-versions c) -> image?
;;;   c : color?
;;; Create an image that shows c along with two versions of c in which
;;; the red and green components are somewhat merged.
(define red-green-merged-versions
  ???)

; c. Write a procedure, `(complemented-versions c)`, that takes a
; color as a parameter and does something similar to the last two
; procedures, using `color-pseudo-complement`.

;;; (complemented-versions c) -> image?
;;;   c : color?
;;; Create an image that shows c along with a complemented version of
;;; c and a complemented version of the complemented version of c.
(define complemented-versions
  ???)

; +---------------------------------------+--------------------------
; | Exercise 8: Exploring transformations |
; +---------------------------------------+

; DRIVER: B 

; a. Write a procedure, `(color-restrict c)`, that produces a new version
; of `c` in which each component is restricted to the range [64..192],
; with components above 192 dropped to 192 and components below 64 raised
; to 64.  Note that clever application of `min` and `max` should help 
; you with this. You may also find it useful to write another procedure
; that reduces one component to that range.

;;; (color-restrict c) -> color?
;;;   c : color?
;;; Produce a new color in which the components are like those of c,
;;; but restricted to no more than 192 and no less than 64.
(define color-restrict
  (lambda (c)
    ???))

; b. Verify that it seems to work appropriately by creating a restricted
; version of the kitten.
; 
;   > (define kitten (image-load "kitten.jpg"))
;   > (pixel-map color-restrict kitten)

; +----------------+-------------------------------------------------
; | Submit the lab |
; +----------------+

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
; the following exercises.  

; +---------------------------------------+--------------------------
; | Extra 1: Pseudo-complements revisited |
; +---------------------------------------+

; As you may recall from the discussion of pseudo-complements, there
; are many ways to think about a pseudo-complement for RGB colors.  In
; addition to the way we've used (subtracting each component from 255),
; we might instead subtract each component from the maximum component
; or do some other computation.

; Write a procedure, `(color-pseudo-complement-alt c)`, that computes
; a new color by subtracting each component from the maximum of the
; three components.

;;; (color-pseudo-complement-alt c) -> color?
;;;   c : color?
;;; Yet another pseudo complement procedure.
(define color-pseudo-complement-alt
  (lambda (c)
    ???))

; +------------------------+-----------------------------------------
; | Extra 2: Redder images |
; +------------------------+

; There are (at least) two ways to make a color appear redder: You can
; add to the red component or you can subtract from the green and the
; blue components.  (The latter may not work so well if you have no
; red to start with.)

; a. Write a procedure, `(color-redder-a c)`, that produces a redder
; version of `c` by adding 64 to the red component.

; b. Write a procedure, `(color-redder-b c)`, that produces a redder
; version of `c` by subtracting 64 from the green and blue components.

; c. Write a procedure, `(color-redder-c c)`, that produces a redder
; version of `c` by adding 32 to the red component and subtracting 32
; from each of the green and blue components.

; d. Try each procedure on the kitten to see which version you find
; most successful (or most appropriate).
;
;   > (define kitten (image-load "kitten.jpg"))
;   > (pixel-map color-redder-a kitten)
;   > (pixel-map color-redder-b kitten)
;   > (pixel-map color-redder-c kitten)

