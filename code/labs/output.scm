;; output.scm
;; Some simple output functions
;;
;; Samuel A. Rebelsky
;; Version of 25 November 2026

(import canvas)
(import reactive)

(export _output_ screen reset! print! newline! screen-text!)

;;; (stringify val) -> (any-of string? boolean?)
;;;   val : any
;;; Attempts to convert val to a string.
(define stringify
  (lambda (val)
    (cond
      [(string? val)
       val]
      [(number? val)
       (number->string val)]
      [else
       #f])))

;;; _output_ : (vector-of (list-of string?))
;;; The "output" from our program, stored as a list
;;; of strings. 
(define _output_
  (vector (list "")))

(define _text-color_
  (vector "black"))

;;; (reset!) -> void?
;;; Reset the output.
(define reset!
  (lambda ()
    (vector-set! _output_ 0 (list ""))))

;;; (print! str) -> void?
;;;   str : string?
;;; Print some output
(define print!
  (lambda (str)
    (let ([lines (vector-ref _output_ 0)]
          [s (stringify str)])
      (if (equal? s #f)
          (error "Received unprintable value")
          (vector-set! _output_ 0
                       (cons (string-append (car lines) s)
                             (cdr lines)))))))

;;; (newline!) -> void?
;;; Add a newline
(define newline!
  (lambda ()
    (vector-set! _output_ 0 (cons "" (vector-ref _output_ 0)))))

;;; (screen-text! color) -> void?
;;;   color : color?
;;; Set the screen text color
(define screen-text!
  (lambda (color)
    (if (color? color)
        (vector-set! _text-color_ 0 color)
        (error "Not a valid color"))))

;;; (screen cols rows) -> canvas?
;;;   cols : integer?
;;;   rows : integer?
;;; Create a new reactive canvas used to display output.
;;; A reactive canvas used to display output
(define screen
  (lambda (cols rows)
    (let ([width (* cols 7)]
          [height (* rows 10)])
      (reactive-canvas
        width height
        _output_
        ; view
        (lambda (tmp canv)
          (let ([kernel
                 (lambda (row remaining)
                   (if (null? remaining)
                       void
                       (begin 
                         (canvas-text! 
                           canv
                           10 (+ 5 (* 10 row))
                           (car remaining)
                           11 "solid" (vector-ref _text-color_ 0))
                         (kernel (+ 1 row) (cdr remaining)))))])
            (begin
              (canvas-rectangle! canv 0 0 width height "outline" 
                                 (vector-ref _text-color_ 0))
              (kernel 1 (reverse (vector-ref _output_ 0))))))
        ; update
        (lambda (msg tmp)
          tmp)
        ; Events
        (on-timer 30)))))


