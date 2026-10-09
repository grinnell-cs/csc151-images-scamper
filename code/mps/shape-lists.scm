;;; shape-lists.rkt
;;;   A variety of procedures that transform images, created for MP5 in
;;;   CSC-151-XX SEMESTER.
;;;
;;; Author: YOUR NAME HERE
;;; Date submitted: YYYY-MM-DD
;;;
;;; Acknowledgements:
;;; 
;;; * Starter code provided by SamR and Leah.  That code includes 
;;;   this header, the "provided code" section below, and a bit of
;;;   other material.
;;; * ...

(import image)
(import test)

;; +---------------+--------------------------------------------------
;; | Provided code |
;; +---------------+

;;; (ushape width height color) -> ushape?
;;;   width : positive-integer?
;;;   height : positive-integer?
;;;   color : color?
;;; Create an under-specified shape. We know its characteristics, but
;;; not what type of shape it is.
(define ushape
  (lambda (width height color)
    (list width height (color->rgb color))))

;;; (ushape? val) -> boolean?
;;;   val : any
;;; Determine if `val` is a ushape (an unknown shape).
(define ushape? 
  (lambda (val)
    (and (list? val)
         (= 3 (length val))
         (and (integer? (list-ref val 0)) (positive? (list-ref val 0)))
         (and (integer? (list-ref val 1)) (positive? (list-ref val 1)))
         (rgb? (list-ref val 2)))))

;;; (ushape-width us) -> positive-integer?
;;;   us : ushape?
;;; Get the width of a ushape (an unknown shape).
(define ushape-width
  (r-s list-ref 0))

;;; (ushape-height us) -> positive-integer?
;;;   us : ushape?
;;; Get the height of a ushape (an unknown shape).
(define ushape-height
  (r-s list-ref 1))

;;; (ushape-color us) -> rgb?
;;;   us : ushape?
;;; Get the color of a ushape (an unknown shape).
(define ushape-color
  (r-s list-ref 2))

;;; (ushape->ellipse shape) -> ellipse?
;;;   shape : ushape?
;;; Convert `shape` to an ellipse of the same width, height, and color.
(define ushape->ellipse
  (l-s apply solid-ellipse))

;;; (ushape->rectangle us) -> rectangle?
;;;   us : ushape?
;;; Convert shape to a solid rectangle.
(define ushape->rectangle
  (l-s apply solid-rectangle))

;;; (ushape->triangle us) -> triangle?
;;;   us : ushape?
;;; Convert `us` to a solid triangle.
(define ushape->triangle
  (l-s apply solid-isosceles-triangle))

;;; (thickly-outlined-ellipse width height color) -> drawing?
;;;   width : positive-integer?
;;;   height : positive-integer?
;;;   color : color?
;;; Make an ellipse with a thick outline.
(define thickly-outlined-ellipse
  (lambda (width height color)
    (overlay (outlined-ellipse width height "black" 5)
             (solid-ellipse width height color))))

;;; (ushape->thickly-outlined-ellipse us) -> drawing?
;;;   us : ushape?
;;; Make an ellipse with a thick outline using the info in `us`.
(define ushape->thickly-outlined-ellipse
  (l-s apply thickly-outlined-ellipse))

;;; (five-variants us) -> (list-of ushape?)
;;;   us : ushape?
;;; Create a list of five shapes based on the original shape.
;;;
;;; * The first shape is 1/3 the width and much darker.
;;; * The second shape is 2/3 the width and slightly darker.
;;; * The third shape is the same.
;;; * The fourth shape is 4/3 the width and slightly lighter.
;;; * The fifth shape is 5/3 the width and much lighter.
(define five-variants
  (lambda (us)
    (apply five-variants/helper us)))

;;; (five-variants/helper width height color) -> (list-of ushape?)
;;;   width : nonnegative-integer?
;;;   height : nonnegative-integer?
;;;   color : rgb?
;;; Create a list of five shapes based on `width`, `height`, and
;;; `color`. See `five-variants` for the details.
(define five-variants/helper
  (lambda (width height color)
    (list (ushape (round (* (/ 1 3) width)) height (rgb-darker (rgb-darker color)))
          (ushape (round (* (/ 2 3) width)) height (rgb-darker color))
          (ushape width height color)
          (ushape (round (* (/ 4 3) width)) height (rgb-lighter color))
          (ushape (round (* (/ 5 3) width)) height (rgb-lighter (rgb-lighter color))))))

;;; (drawing-list? val) -> boolean?
;;;   val : any?
;;; Determines whether `val` is a list of drawings.
(define drawing-list?
 (list-of drawing?))

;;; (slightly-nested-drawing-list? val) -> boolean?
;;;   val : any? 
;;; Determines whether `val` is a slightly-nested drawing list. That is,
;;; a list of values that are either drawings or drawing lists.
(define slightly-nested-drawing-list?
  (list-of (any-of drawing? (list-of drawing?))))

;;; (doubly-nested-drawing-list? val) -> boolean?
;;;   val : any? 
;;; Determines whether `val` is a doubly-nested drawing list. That is,
;;; a list of values that either drawings, drawing lists, or slightly-nested
;;; drawing lists.
(define doubly-nested-drawing-list?
  (list-of (any-of drawing?
                   slightly-nested-drawing-list?)))

;; +-----------------+------------------------------------------------
;; | Provided shapes |
;; +-----------------+

;;; red-narrow : ushape?
;;; A narrow red shape
(define red-narrow
  (ushape 10 20 "red"))

;;; red-medium : ushape?
;;; A not-too-narrow and not-too-wide red shape.
(define red-medium
  (ushape 20 20 "red"))

;;; red-wide : ushape?
;;; A wide red shape.
(define red-wide
  (ushape 30 20 "red"))

;;; red-shapes : (list-of ushape?)
;;; A list of red shapes
(define red-shapes (list red-narrow red-medium red-wide))

;;; blue-narrow : ushape?
;;; A narrow blue shape
(define blue-narrow
  (ushape (ushape-width red-narrow) (ushape-height red-narrow) "blue"))

;;; blue-medium : ushape?
;;; A not-too-narrow and not-too-wide blue shape.
(define blue-medium
  (ushape (ushape-width red-medium) (ushape-height red-medium) "blue"))

;;; blue-wide : ushape?
;;; A wide blue shape.
(define blue-wide
  (ushape (ushape-width red-wide) (ushape-height red-wide) "blue"))

;;; purple-narrow : ushape?
;;; A narrow purple shape
(define purple-narrow
  (ushape (ushape-width red-narrow) (ushape-height red-narrow) "purple"))

;;; purple-medium : ushape?
;;; A not-too-narrow and not-too-wide purple shape.
(define purple-medium
  (ushape (ushape-width red-medium) (ushape-height red-medium) "purple"))

;;; purple-wide : ushape?
;;; A wide purple shape.
(define purple-wide
  (ushape (ushape-width red-wide) (ushape-height red-wide) "purple"))

;;; narrow-shapes : (list-of ushape?)
;;; A list of narrow shapes.
(define narrow-shapes (list red-narrow blue-narrow purple-narrow))

;; +----------------------------------------------+-------------------
;; | Part 1: Transforming nested lists of ushapes |
;; +----------------------------------------------+

;; a. ushapes->ellipses

;;; (ushapes->ellipses ushapes) -> ???
;;;   ushapes : ???
;;; ???

;; b. ushapex->ellipses

;; c. ushapes1x->ellipses

;; d. ushapes1->ellipses

;; e. ushapes1->rectangles and ushapes1->triangles

;; f. ushapes2->ellipses shapes

;; g. ushapes2->rectangles and ushapes1->triangles

;; +---------------------------------+--------------------------------
;; | Part 2: Making lists of ushapes |
;; +---------------------------------+

;; a. color-variants-0

;;; (color-variants-0 us) -> ???
;;;    us : ushape?
;;; ???

;; b. color-variants-1

;; c. color-variants-1x

;; d. color-variants-2

;; +----------------------------+-------------------------------------
;; | Part 3: Combining Drawings |
;; +----------------------------+

;; a. stack

;;; (stack drawings) -> drawing?
;;;   drawings : (list-of image?)
;;; ???

;; b. sequence

;;; (sequence drawings) -> ???
;;;   drawings : ???
;;; ???

;; c. stack-then-sequence

;;; (stack-then-sequence drawings) -> ???
;;;   drawings : ???
;;; ???

;; d. sequence-then-stack

;; e. sequence-then-stack-then-sequence OPTIONAL

;; f. stack-then-sequence-then-stack OPTIONAL

;; +-------------------+----------------------------------------------
;; | Part 4: Freestyle |
;; +-------------------+

;;; freestyle : drawing?
;;; A fascinating image created by applying functions I wrote to deal
;;; with nested lists of shapes.
(define freestyle (solid-square 10 "blue"))
