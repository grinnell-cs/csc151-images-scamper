;; CSC-151-NN (2026Fa)
;; Lab: Vectors (vectors.scm)
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import image)
(import test)

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
;; | Exercise 1: Modifying vectors |
;; +-------------------------------+

;; Driver: A

;; Suppose we are considering two names for the same vector and want to
;; try to change the first element. Consider the following code. (That is,
;; *read it, don't enter it*.)

;;    > (define chinchilla (vector "a" "b" "c" "d"))
;;    > (define dingo chinchilla)
;;    > (define emu (vector-copy chinchilla))
;;    > (vector-set! chinchilla 0 "Z")

;; a. What do you expect the output of the following commands to be? (That
;; is, think about the answers and type the results; don't type the commands
;; in the REPL pane.)

;;    > (vector-ref chinchilla 0)
;;    _____
;;    > (vector-ref dingo 0)
;;    _____
;;    > (vector-ref emu 0)
;;    _____

;; b. Check your answer experimentally. That is, type the commands in
;; the interactions pane now.  Then enter your answers.

;;    > (vector-ref chinchilla 0)
;;    _____
;;    > (vector-ref dingo 0)
;;    _____
;;    > (vector-ref emu 0)
;;    _____

;; c. What do you expect the results of the following to be?

;;    > (let* ([gibbon (vector "a" "b" "c" "d")]
;;             [hippo gibbon]
;;             [ibex (vector-copy gibbon)])
;;        (vector-set! gibbon 0 "Z")
;;        (list gibbon hippo ibex))

;; Expected output: 

;; d. Check your answer experimentally.

;; Actual output: 

;; e. What do your results of these experiments suggest about vectors in Scheme?

;; Your answer:

;; +-----------------------------------+------------------------------
;; | Exercise 2: Vector-based palettes |
;; +-----------------------------------+

;; Driver: B

;; It is possible to represent a collection of colors (a "palette")
;; as a vector. Why would we do so? Well, once we’ve chosen a palette,
;; we can represent an image as a collection of indices into that
;; palette. Such a representation is typically much more compact than
;; representing each color with the full RGB triplet.

;; For example, here is a palette that represents the colors in the
;; rainbow.

;;; rainbow-palette : (vector-of rgb?)
;;; A vector of RGB colors.
(define rainbow-palette
  (list->vector
    (map color-name->rgb
         (list "red" "orange" "yellow" "green" "blue" "indigo" "violet"))))

;; Write a procedure, `(palette? val)`, that determines if `val` is
;; a palette (a nonempty vector of RGB colors).

;;; (palette? val) -> boolean?
;;;   val : any
;;; Determine if `val` is a nonempty vector of RGB colors.
(define palette?
  (lambda (val)
    #f))

;; +---------------------------------------------+--------------------
;; | Exercise 3: Darkening vector-based palettes |
;; +---------------------------------------------+

;; Driver: A

;; Write a procedure, (palette-darker! palette), that, given a vector
;; of integer-encoded RGB colors, makes each color in the palette
;; slightly darker (i.e., using color-darker).

;; Note that you will not build a new vector. Rather, you will replace
;; each color in the existing vector by the darker version. You may
;; use the recursion pattern(s) from the reading and number-vector-scale!
;; as a starting point. If you do, be sure to cite your sources
;; appropriately.

;; (palette-darker! palette) -> void?
;;   palette : (vector-of rgb?)
;; Make each color in `palette` darker.
(define palette-darker!
  (lambda (palette)
    void))

;; +---------------------------------+--------------------------------
;; | Exercise 4: The brightest color |
;; +---------------------------------+

;; Driver: B

;; Write a procedure, `(palette-brightest palette)`, that takes one argument,
;; a vector of colors, and returns the brightest color in that vector.
;; You can assume that every position in the vector contains a color.

;; You will likely need the following definitions of `color-brightness`
;; and `color-brighter-of-two`.

;;; (color-brightness color) -> integer?
;;;   color : rgb?
;;; Compute the brightness of a color on a 0 .. 100 range.
(define color-brightness
  (lambda (color)
    (round (* 100 (/ (+ (* .30 (rgb-red color))
                        (* .59 (rgb-green color))
                        (* .11 (rgb-blue color)))
                     255)))))

;;; (color-brighter-of-two color1 color2) -> color?
;;;    color1 : rgb?
;;;    color2 : rgb?
;;; Find the brighter of two colors.
(define color-brighter-of-two
  (lambda (color1 color2)
    (if (>= (color-brightness color1) (color-brightness color2))
        color1
        color2)))

;;; (palette-brightest palette) -> rgb?
;;;   palette : (all-of (vector-of rgb?) nonempty?)
;;; Find the brightest color in `palette`. If multiple colors have
;;; the same brightness (and it's the largest brightness), can return
;;; any of them.
(define palette-brightest
  (lambda (palette)
    (rgb 0 0 0)))

;; +-------------------------------+----------------------------------
;; | Exercise 5: Testing your code |
;; +-------------------------------+

;; Driver: A

;; Write five or more tests for `palette-brightest`, including at
;; least two edge cases.

;; "Normal" cases

;; Edge cases

;; +----------------------------------+-------------------------------
;; | Exercise 6: Searching in vectors |
;; +----------------------------------+

;; Driver: B

;; Write a recursive procedure, `(vector-index-of vec elt)`, that looks
;; for `elt` in vector and returns the index of the first appearance
;; of `elt` if it appears in the vector and 01 otherwise.

;; > (vector-index-of (vector "a" "b" "c") "b")
;; 1
;; > (vector-index-of (vector "a" "b" "c" "c" "d" "b") "c")
;; 2
;; > (vector-index-of (vector "a" "b" "c") "d")
;; -1

;; Once again, you should not convert the vector to a list.

(define vector-index-of
  (lambda (vec elt)
    -1))

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; Yup, it's that time.  You should know the drill.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, you might try one or more 
;; of the following exercises.

;; +--------------------------+---------------------------------------
;; | Extra 1: Summing vectors |
;; +--------------------------+

;; Write a recursive procedure, `(vector-sum numbers)`, that takes one
;; argument, a vector of numbers, and returns the sum of the elements
;; of that vector.

;; You can use the recursion pattern(s) and the model of
;; `number-vector-largest` from the reading as starting points. If you
;; do, be sure to cite your sources appropriately.

;; You may not convert your vector into a list.

;; Note: In case you hadn't noticed it yet, vector recursion is usually
;; a form of numeric recursion, where you are use the index in the
;; vector as the value you recurse over.

;; Note: In case you hadn't noticed it yet, vector recursion generally
;; involves a helper procedure that takes the position as an extra
;; parameter.

(define vector-sum
  (lambda (nums)
    0))

;; +--------------------------+---------------------------------------
;; | Extra 2: Filling vectors |
;; +--------------------------+

;; Write a recursive procedure, `(my-vector-fill! vec val)`, that takes
;; two parameters, a mutable vector and a value, and puts that value
;; in every position of the vector.

;; > (define vec (vector 'a 'b 'c))
;; > vec
;; '#(a b c)
;; > (my-vector-fill! vec 0)
;; > vec
;; '#(0 0 0)
;; > (my-vector-fill! vec 'a)
;; > vec
;; '#(a a a)

;; Some implementations of Scheme come with vector-fill!. You may not
;; use that procedure.

;; Note: `my-vector-fill!` is supposed to modify an existing vector. It
;; is pointless to create a new vector.

;; Note: You may find that you want to do two things for a particular
;; position: fill the value at that position and recur. Remember that
;; in cases in which you want to sequence multiple actions when a test 
;; succeeds, you should use a `cond` or `when` rather than an `if`.

(define my-vector-fill!
  (lambda (vec val)
    void))

;; +----------------------------+-------------------------------------
;; | Extra 3: Reversing vectors |
;; +----------------------------+

;; Write a procedure, `(vector-reverse vec)`, that creates a new
;; vector whose elements appear in the reverse order of the elements
;; in `vec`.

;;  > (define letters (vector "a" "b" "c" "d"))
;;  > letters
;;  (vector "a" "b" "c" "d")
;;  > (define srettel (vector-reverse letters))
;;  > srettel
;;  (vector "d" "c" "b" "a")
;;  > letters
;;  (vector "a" "b" "c" "d")

;; You may not use `list->vector` or `vector->list` in defining
;; `vector-reverse`.

(define vector-reverse
  (lambda (vec)
    vec))

;; +---------------------------------------+--------------------------
;; | Extra 4: Reversing vectors, revisited |
;; +---------------------------------------+

;; Write a procedure, `(vector-reverse! vec)`, that reverses the
;; element in `vec` **in place**, returning nothing.
;; vector whose elements appear in the reverse order of the elements
;; in `vec`.

;;  > (define letters (vector "a" "b" "c" "d"))
;;  > letters
;;  (vector "a" "b" "c" "d")
;;  > (vector-reverse! letters))
;;  > letters
;;  (vector "d" "c" "b" "a")

(define vector-reverse!
  (lambda (vec)
    void))
