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
;;;   this header, the "provided code" section below, and a bit of
;;;   other material.
;;; * ...

(import image)
(import test)

;; +---------------+--------------------------------------------------
;; | Provided code |
;; +---------------+

;;; (rgb-brightness c) -> real? (between 0 and 100)
;;;   c : rgb?
;;; Find the approximate perceived brightness of c.
(define rgb-brightness
  (lambda (c)
    (round (* 100/255
              (+ (* .30 (rgb-red c))
                 (* .59 (rgb-green c))
                 (* .11 (rgb-blue c)))))))

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
          (apply beside (map shape colors))))))

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
(define rgb-lists-similar?
  (lambda (colors1 colors2)
    (andmap rgb-similar? colors1 colors2)))

;; +---------------------------+--------------------------------------
;; | Part one: Expanding lists |
;; +---------------------------+

;; a. insert-average

;;; (insert-average colors) -> ???
;;;   colors : ???
;;; ???
(define insert-average
  (lambda (colors)
    null)) ; PLACEHOLDER


