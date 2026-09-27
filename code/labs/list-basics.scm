;; CSC 151-NN (SEMESTER)
;; Lab: List Basics
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import test)
(import image)

;; +-------------+----------------------------------------------------
;; | Preparation |
;; +-------------+

;; a. Save this file as `list-basics.scm`.

;; b. Fill in your name and other info at the top of this file.

;; c. Introduce yourself to your partner.  Make sure to discuss work 
;; preferences and what you bring to the partnership.

;; d. If you haven't done so already, review the list of procedures
;; in the lab page, making sure that each of you understands the 
;; parameters and purpose of each procedure.  Experiment with the
;; procedures as appropriate.

;; e. Remember that partner A is the person closer to the board and
;; partner B is the one further than the board. This lab uses the
;; following pattern.

;; 1: A
;; 2: B
;; 3: B
;; 4: A

;; [Feel free to fill in your own joke about Swedish pop groups.]

;; +---------+--------------------------------------------------------
;; | Warning |
;; +---------+

;; This lab includes tests using `test-case`. Although you haven't learned
;; the details of testing yet, you should still experiment with what test
;; results look like by uncommenting lines.

;; +---------------+--------------------------------------------------
;; | Supplied code |
;; +---------------+

(define ??? "UNDEFINED")

;; +--------------------------------------+---------------------------
;; | Exercise 1: Reviewing the self-check |
;; +--------------------------------------+

;; Driver: A

;; a. Predict the results of evaluating each of the following expressions.
;; You may find it helpful to check each one in Scamper after making our
;; prediction.

;; > (list 2 1)
;; REPLACE THIS TEXT WITH YOUR ANSWER
;; > (make-list 1 2)
;; REPLACE THIS TEXT WITH YOUR ANSWER
;; > (make-list -1 2)
;; REPLACE THIS TEXT WITH YOUR ANSWER
;; > (range 3)
;; REPLACE THIS TEXT WITH YOUR ANSWER
;; > (map - (range 3))
;; REPLACE THIS TEXT WITH YOUR ANSWER
;; > (map - (range 3) (list 2 1 2))
;; REPLACE THIS TEXT WITH YOUR ANSWER
;; > (map range (list 2 1))
;; REPLACE THIS TEXT WITH YOUR ANSWER

;; b. If you haven't done so already, check your predictions with DrRacket.
;; (Do the checks in the interactions pane, not here.)

;; c. Predict the results of each of the following.  You may find it easiest
;; to check the result of each before going on to the next.

;; > (range 5 10)
;; 
;; > (range -4 3)
;; 
;; > (apply + (range 10))
;; 
;; > (range 10 -5)
;; 
;; > (range -5 -10)
;; 
;; > (range -10 -5)
;; 
;; > (range 1 9 2)
;; 
;; > (apply + (range 1 10 2))
;; 
;; > (range 10 -2 -5)
;; 

;; d. If you haven't done so already, check your answers in the interactions 
;; pane.

;; e. Why do you think we had you try so many different inputs to `range`?
;; REPLACE THIS TEXT WITH YOUR ANSWER

;; +-----------------------------------+------------------------------
;; | Exercise 2: Other list procedures |
;; +-----------------------------------+

;; Driver: B

;; The list of procedures in the lab description is not comprehensive.
;; Spend *no more than three minutes* coming up with a few other procedures
;; you've encountered that generate or process lists.  Here are some
;; hints that may help.  (You don't have to answer these particular
;; questions; just try to think about when you've encountered lists
;; before.)

;; What procedures do you know (other than those listed) that create a
;; list of strings?

;; What procedures do you know (other than those listed) that create a
;; list of characters?

;; 1.

;; 2.

;; 3.

;; 4.

; +---------------------------------+--------------------------------
; | Exercise 3: Translating numbers |
; +---------------------------------+

;; Driver: B

;; Consider the problem of turning a string, like "123" into the
;; corresponding integer.  While `string->number` could help with
;; such a task, let us assume that it does not exist and we have
;; to write it on our own.

;; a. Write or sketch an algorithm, in English, that explains the steps
;; in converting such strings to integers.  (You can assume that the
;;strings consist only of digits.) 

;; *Spend no more than three minutes on this part of the exercise.*

;; REPLACE WITH YOUR ANSWER

;; b. One of the things we'll need to do is convert each character in
;; the string to its corresponding decimal number.  Write a procedure,
;; `(char->digit char)` that takes as input a digit character
;; (`#\0`, `#\1`, ...) and converts it to the corresponding digit
;; (`0`, `1`, ...). You may assume that the input character is a digit.

;;   > (char->digit #\3)
;;   3
;;   > (char->digit #\9)
;;   9
;;   > (char->digit "9")
;;   Boom.  Crash.
;;   > (char->digit #\x)
;;   72 ; or whatever you want, since it's an invalid input

;; Note that you may find the collating sequence values helpful.
;; You can get those with `(char->integer ch)`.

;;; (char->digit char) -> integer?
;;;   char : digit-character?
;;; Convert a digit character to the corresponding digit/integer.
(define char->digit
  (lambda (char)
    ???))

;; You can uncomment the next few lines to have it quickly test
;; all of the options..

;(test-case "zero " = (char->digit #\0) (lambda () 0))
;(test-case "one"   = (char->digit #\1) (lambda () 1))
;(test-case "two"   = (char->digit #\2) (lambda () 2))
;(test-case "three" = (char->digit #\3) (lambda () 3))
;(test-case "four"  = (char->digit #\4) (lambda () 4))
;(test-case "five"  = (char->digit #\5) (lambda () 5))
;(test-case "six"   = (char->digit #\6) (lambda () 6))
;(test-case "seven" = (char->digit #\7) (lambda () 7))
;(test-case "eight" = (char->digit #\8) (lambda () 8))
;(test-case "nine"  = (char->digit #\9) (lambda () 9))

;; c. Write a procedure, `(string->digits str)` that takes a string
;; consisting of only digits as an integer and returns a list of the 
;; corresponding integers.  

;;    > (string->digits "123")
;;    (list 1 2 3)
;;    > (string->digits "42")
;;    (list 4 2)
;;    > (string->digits "0")
;;    (list 0)

;; Note that you will likely need to use `map`, `string->list`, and one of 
;; the procedures you came up with above.

;;; (string->digits str) -> list-of integer?
;;;   digits: string?
;;; Convert a string of digits to a list of integers that represent 
;;; the digits of the string.
(define string->digits
  (lambda (str)
    ???))

;; You could try uncommenting the block of tests to see which succeed
;; and which do not.

;(test-case "Edge case: One digit (0)" equal? (list 0) 
;           (lambda () (string->digits "0")))
;(test-case "Edge case: One digit (9)" equal? (list 9) 
;           (lambda () (string->digits "0")))
;(test-case "Normal case: 123" equal? (list 1 2 3) 
;           (lambda () (string->digits "123")))
;(test-case "Edge case: Leading zeroes" equal?  (list 0 0 1 2 3) 
;           (lambda () (string->digits "00123")))

;; d. One of the other things we'll likely need to do is compute powers
;; of ten.  Write a procedure, `(ten-to-the n)`, that takes as input
;; an integer, `n`, and computes 10 to the nth power.

;;    > (ten-to-the 2)
;;    100
;;    > (ten-to-the 3)
;;    1000
;;    > (ten-to-the 0)
;;    1
;;    > (ten-to-the -1)
;;    0.1

;; Note that you will not be using any list operations in creating this
;; procedure; rather, this is an implicit part of the decomposed larger
;; problem.

;;; (ten-to-the n) -> integer?
;;;   n : integer?
;;; Compute 10^n.
(define ten-to-the
  (lambda (n)
    ???))

;; Once again, you might find it useful to uncomment the tests.

;(test-case "ten to the zero is 1" = (ten-to-the 0) (lambda () 1))
;(test-case "ten to the first is 10" = (ten-to-the 1) (lambda () 10))
;(test-case "ten squared is 100" = (ten-to-the 2) (lambda () 100))
;(test-case "ten cubed is 1000" = (ten-to-the 3) (lambda () 1000))
;(test-case "negative exponent" = (ten-to-the -1) (lambda () (/ 1 10)))

;; d. Write a procedure, `(powers-of-ten n)`, that produces the first
;; `n` powers of ten, starting at ten to the 0 (1).  You will likely
;; need to use `map` and `range` to create this list.

;;    > (powers-of-ten 5)
;;    (list 1 10 100 1000 10000)

;;; (powers-of-ten n) -> list-of integer?
;;;   n : non-negative-integer?
;;; Compute the first `n` powers of 10.
(define powers-of-ten
  (lambda (n)
    ???))

;; f. Reconsider the problem of converting a string to an integer.
;; How will/might the procedures you've just written help you in that
;; activity?  How might `map` and `apply` help you with that that
;; activity?  How might the three-parameter `map` help?  
;;
;; If you're not sure about the three-parameter `map`, it takes a
;; procedure and two lists as parameters. You were asked to make a
;; prediction relative to that procedure in exercise 1. Ask one of the
;; course staff if you need more help understanding it.

;; Sketch an algorithm, based on those tools, that might allow you to
;; do the conversion.  

;; Here's one way to think of it (in terms of a series of values we might
;; produce in converting "8143" into 8143).

;; * "8143"
;; * (list #\8 #\1 #\4 #\3)
;; * (list 8 1 4 3)
;; * (list 8000 100 40 3)
;; * 8143

;; *Once again, spend no more than three minutes on this part of the exercise.*

;; REPLACE THIS TEXT WITH YOUR ALGORITHM

;; g. Write a procedure, `(string->integer str)` that takes a string
;; consisting only of digits as an input and returns the value of
;; the corresponding integer.  Do *not* use `string->number`.

;;   > (string->integer "123")
;;   123
;;   > (string->integer "42")
;;   42
;;   > (string->integer "231667")
;;   231667
;;   > (string->integer "five")
;;   Boom.  Crash.
;;   > (string->integer "-5")
;;   Boom.  Crash.

;; Note that you will likely need all of the procedures you've just
;; written, along with the three-parameter `map` and an `apply`, to
;; complete this problem.

;; Think about how those procedures help, as well as what other decomposition
;; might be necessary.

;; (string->integer str) -> integer?
;;   str: string?
;; Convert a string of digits to the corresponding integer
;; the digits of the string.
(define string->integer
  (lambda (str)
    ???))

;(test-case "three digits" = 123 (lambda () (string->integer "123")))
;(test-case "two digits" = 42 (lambda () (string->integer "42")))
;(test-case "many digits" = 231667 (lambda () (string->integer "231667")))
;(test-case "zero" = 0 (lambda () (string->integer "0")))

; +-------------------------------+----------------------------------
; | Exercise 4: Building palettes |
; +-------------------------------+

;; Driver: A

;; As we've experimented with colors, we've often found ourselves
;; creating "palettes" of a few colors, side by side.  For example,
;; here's a procedure that builds a palette of three colors.

;;; (three-color-palette c1 c2 c3) -> image?
;;;   c1 : rgb?
;;;   c2 : rgb?
;;;   c3 : rgb?
;;; Create a simple palette of c1, c2, and c3 side-by-side.
(define three-color-palette
  (lambda (c1 c2 c3)
    (beside (palette-element c1)
            (palette-element c2)
            (palette-element c3))))

;;; (palette-element c) -> image?
;;;   c : rgb?
;;; Build one element of a typical palette
(define palette-element
  (lambda (c)
    (solid-rectangle 20 40 c)))

;; a. Write a procedure, `(color-palette list-of-colors)`, that takes
;; a list of colors as a parameter and makes a simple palette of those
;; colors.

;;; (color-palette list-of-colors) -> image?
;;;   list-of-colors: (list-of rgb?)
;;; Create a palette with the specified colors in order from
;;; first (leftmost) to last (rightmost).
(define color-palette
  (lambda (list-of-colors)
    ???))

;; b. Write a procedure, `(concentric-palette colors)`, that takes a list of 
;; colors as a parameter and makes an image of concentric squares of sizes
;; 20, 30, 40, ... (* 10 (length colors)).

;; If `colors` is `(c01 c02 c03 c04)`, we'd get something like this.

;;    +---------------------------+
;;    |            c04            |
;;    |   +-------------------+   |
;;    |   |        c03        |   |
;;    |   |   +-----------+   |   |
;;    |   |   |    c02    |   |   |
;;    |   |   |   +---+   |   |   |
;;    |c04|c03|c02|c01|c02|c03|c04|
;;    |   |   |   +---+   |   |   |
;;    |   |   |    c02    |   |   |
;;    |   |   +-----------+   |   |
;;    |   |        c03        |   |
;;    |   +-------------------+   |
;;    |            c04            |
;;    +---------------------------+

;;; (concentric-palette colors) -> image?
;;;   colors : (list-of rgb?)
;;; Create a palette of concentric squares of the given colors.
(define concentric-palette
  (lambda (colors)
    ???))

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; You're done with this lab.  Congratulations!  Submit your work.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you finish the lab early, you should attempt one or more of these
;; problems.

;; +-----------------------------+------------------------------------
;; | Extra 1: Palettes of shades |
;; +-----------------------------+

;; Consider the following procedure that makes a darker shade of a given
;; colors.

;;; (darker c amt) -> rgb?
;;;    c : rgb?
;;;    amt : non-negative-integer?
;;; Make `c` darker by subtracting amt from each component.
(define darker 
  (lambda (c amt)
    (rgb (- (rgb-red c) amt)
         (- (rgb-green c) amt)
         (- (rgb-blue c) amt))))

;; Write a procedure, `(shades c n)`, that makes a palette of `n` shades of `c`.  
;; * The first color will be c [or (darker c 0)].
;; * The next will be (darker c (quotient 255 n))
;; * The next will be (darker c (* 2 (quotient 255 n)))
;; * The next will be (darker c (* 3 (quotient 255 n)))
;; * And so on and so forth.

;;; (shades c n) -> image?
;;;   c : color?
;;;   n : positive-integer?
;;; Make a palette of `n` shades of `c`.
(define shades
  (lambda (c n)
    ???))
