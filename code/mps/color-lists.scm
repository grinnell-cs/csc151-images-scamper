;;; color-lists.rkt
;;;   A variety of procedures that transform lists of colors, created
;;;   for MP4 in CSC-151-XX 2026Fa
;;;
;;; Author: YOUR NAME HERE
;;; Date submitted: YYYY-MM-DD
;;;
;;; Acknowledgements:
;;; 
;;; * Starter code provided by SamR.  That code includes 
;;;   this header, the "provided code" section below, some
;;;   tests, and a bit of other material.
;;; * ...

(import image)
(import test)

;; +---------------+--------------------------------------------------
;; | Provided code |
;; +---------------+

;;; (palette colors) -> drawing?
;;;   colors : (list-of color?)
;;; Make a "palette" from a list of colors.
(define palette
  (let ([shape
          (lambda (color)
            (solid-rectangle 20 40 color))])
    (lambda (colors)
      (if (null? colors)
          (solid-square 0 (rgb 255 255 255 0))
          (overlay (apply beside (map shape colors))
                   (outlined-rectangle (* 20 (length colors)) 40 "white" 4)
                   (outlined-rectangle (* 20 (length colors)) 40 "black" 8))))))

;;; (rgb-brightness c) -> real? (between 0 and 100)
;;;   c : rgb?
;;; Find the approximate perceived brightness of c.
(define rgb-brightness
  (lambda (c)
    (round (* (/ 100 255)
              (+ (* .30 (rgb-red c))
                 (* .59 (rgb-green c))
                 (* .11 (rgb-blue c)))))))

;;; (rgb-brighter? c1 c2) -> boolean?
;;;   c1 : rgb?
;;;   c2 : rgb?
;;; Determine if `c1` appears brighter than `c2` (ignoring transparency).
(define rgb-brighter?
  (lambda (c1 c2)
    (> (rgb-brightness c1) (rgb-brightness c2))))

;;; (rgb-average-2 c1 c2) -> rgb?
;;;   c1 : rgb?
;;;   c2 : rgb?
;;; Average two RGB colors
(define rgb-average-2
  (lambda (c1 c2)
    (rgb (round (/ (+ (rgb-red c1) (rgb-red c2)) 2))
         (round (/ (+ (rgb-green c1) (rgb-green c2)) 2))
         (round (/ (+ (rgb-blue c1) (rgb-blue c2)) 2))
         (round (/ (+ (rgb-alpha c1) (rgb-alpha c2)) 2)))))

;;; (rgb-average-3 c1 c2 c3) -> rgb?
;;;   c1 : rgb?
;;;   c2 : rgb?
;;;   c3 : rgb?
;;; Average two RGB colors
(define rgb-average-3
  (lambda (c1 c2 c3)
    (rgb (round (/ (+ (rgb-red c1) (rgb-red c2) (rgb-red c3)) 3))
         (round (/ (+ (rgb-green c1) (rgb-green c2) (rgb-green c3)) 3))
         (round (/ (+ (rgb-blue c1) (rgb-blue c2) (rgb-blue c3)) 3))
         (round (/ (+ (rgb-alpha c1) (rgb-alpha c2) (rgb-alpha c3)) 3)))))

;;; (rgb-similar? c1 c2) -> boolean?
;;;   c1 : rgb?
;;;   c2 : rgb?
;;; Determine if c1 and c2 are relatively close to each other.
(define rgb-similar?
  (lambda (c1 c2)
    (< (rgb-distance c1 c2) 16)))

;;; (rgb-lists-similar? colors1 colors2) -> boolean?
;;;   colors1 : (list-of rgb?)
;;;   colors2 : (list-of rgb?)
;;; ???
(define rgb-lists-similar?
  (lambda (colors1 colors2)
    (and (= (length colors1) (length colors2))
         (andmap rgb-similar? colors1 colors2))))

;; +---------------------------+--------------------------------------
;; | Part one: Expanding lists |
;; +---------------------------+

;; 1a. insert-average

;;; (insert-average colors) -> ???
;;;   colors : ???
;;; ???
(define insert-average
  (lambda (colors)
    null))

(test-case "insert-average black-white"
           rgb-lists-similar?
           (list (rgb 0 0 0) (rgb 127 127 127) (rgb 255 255 255))
           #(insert-average (list (rgb 0 0 0) (rgb 255 255 255))))

;; 1b. split-colors

;;; (split-colors colors) -> ???
;;;    colors : ???
;;; ???
(define split-colors
  (lambda (colors)
    null))

;; 1c. double-bright

;;; (double-bright colors amt) -> ???
;;;    colors : ???
;;;    amt : ???
;;; ???
(define double-bright
  (lambda (colors amt)
    null))

;; 1d. double-brighter

;;; (double-brighter colors) -> ???
;;;    colors : ???
;;; ???
(define double-brighter
  (lambda (colors)
    null))

;; +-----------------------------+------------------------------------
;; | Part two: Removing elements |
; +-----------------------------+

;; 2a. remove-every-other

;;; (remove-every-other lst) -> ???
;;;   lst : ???
;;; ???
(define remove-every-other
  (lambda (lst)
    null))

;; 2b. remove-brighter-than-next

;;; (remove-brighter-than-next colors) -> ???
;;;    colors : ???
;;; ???
(define remove-brighter-than-next
  (lambda (colors)
    null))

;; 2c. remove-similar-neighbors

;;; (remove-similar-neighbors colors) -> ???
;;;   colors : ???
;;; ???
(define remove-similar-neighbors
  (lambda (colors)
    null))

;; 2d. remove-similar

;;; (remove-similar color colors) -> ???
;;;   color : ???
;;;   colors : ???
;;; ???
(define remove-similar
  (lambda (color colors)
    null))

;; 2e. remove-similar-colors

;;; (remove-similar-colors colors) -> ???
;;;   colors : ???
;;; ???
(define remove-similar-colors
  (lambda (colors)
    null))

;; +------------------------------+-----------------------------------
;; | Part three: Extended mapping |
;; +------------------------------+

;; 3a. altenate-darker-lighter and alternate-lighter-darker

;;; (alternate-darker-lighter colors) -> ???
;;;   colors : ???
;;; ???
(define alternate-darker-lighter
  (lambda (colors)
    null))

;;; (alternate-lighter-darker colors) -> ???
;;;   colors : ???
;;; ???
(define alternate-lighter-darker
  (lambda (colors)
    null))

;; 3b. rgbify

;;; (rgbify colors) -> ???
;;;   colors : ???
;;; ???
(define rgbify
  (lambda (colors)
    null))

;; 3c. average-pairs

;;; (average-pairs colors) -> ???
;;;   colors : ???
;;; ???
(define average-pairs
  (lambda (colors)
    null))

;; 3d. average-triplets

;;; (average-triplets colors) -> ???
;;;   colors : ???
;;; ???
(define average-triplets
  (lambda (colors)
    null))

;; +------------------------------+-----------------------------------
;; | Part four: Rearranging lists |
;; +------------------------------+

;; 4a. brightest-to-end

;;; (brightest-to-end colors) -> ???
;;;   colors : ???
;;; ???
(define brightest-to-end
  (lambda (colors)
    null))

;; 4b. brightest-to-front

;;; (brightest-to-front colors) -> ???
;;;   colors : ???
;;; ???
(define brightest-to-front
  (lambda (colors)
    null))

;; +-----------------------------------+------------------------------
;; | Part five: A return to the basics |
;; +-----------------------------------+
