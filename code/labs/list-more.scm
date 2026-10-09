;; CSC-151-NN (SEMESTER)
;; Lab: More fun with lists
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

;; +-----------------------+------------------------------------------
;; | Requirements and such |
;; +-----------------------+

(import test)
(import image)

;; +-------------+----------------------------------------------------
;; | Preparation |
;; +-------------+

;; In this lab, you and your partner will practice manipulating lists
;; using the big-three higher-order functions---map, filter, and
;; reduce---as well as some other useful functions.

;; There are five exercises; here's the division.

;; Exercise 1: A-Side
;; Exercise 2: B-Side
;; Exercise 3: B-Side
;; Exercise 4: A-Side
;; Exericse 5: Both sides

;; The person with the problem description should drive and their
;; partner should navigate.  Again, make sure to be good partners and
;; focus completely on solving the current problem together rather than
;; working ahead on your own.

;; a. Don't forget our "start of session" steps.  Chat with your partner
;; about working habits and strengths.  Maybe share something interesting
;; about yourself.

;; c. If you haven't done so yet, make sure to open tabs in your browser
;; for the lab and the recent readings.

;; d. Don't forget to put your names at the top of the file!

;; +---------------+--------------------------------------------------
;; | Supplied code |
;; +---------------+

;;; (thunk val) -> procedure?
;;;   val : any
;;; Turn a value into a zero-parameter procedure that returns the
;;; value. Useful mostly for testing.
(define thunk
  (lambda (val)
    (lambda ()
      val)))

;;; ??? -> string?
;;; A quick way to say "We haven't defined this yet."
(define ??? "???")

;; +---------------------------------+--------------------------------
;; | Exercise 1: Manipulating a list |
;; +---------------------------------+

;; Driver: A

;; Complete each of the definitions that manipulate ex1-list in various
;; sorts of ways using one or more of the primary list functions.  You
;; may also use other standard library functions for lists (e.g.,
;; length) when appropriate.

;; Please write expressions that compute the result, rather than computing
;; the result by hand.

(define ex1-list (list 25 25 23 5 21 20 20 18 10 1 22 21))

;; a. Increments the value of each element of the list `ex1-list` by 5
(define ex1-list-adjusted ???)

;(test-case "Adjusting the list"
;           equal?
;           (list 30 30 28 10 26 25 25 23 15 6 27 26)
;           (thunk ex1-list-adjusted))

;; b. Keeps only the elements of the list that are greater than 10.
(define ex1-list-filtered ???)

;(test-case "Filtering the list"
;           equal?
;           (list 25 25 23 21 20 20 18 22 21)
;           (thunk ex1-list-filtered))

;; c. Computes the average of the list (Hint: this computation is more
;; than just a single call to reduce!)
(define ex1-list-average ???)

;(test-case "Averaging the list" 
;           =
;           (/ 211 12)
;           (thunk ex1-list-average))

; d. Counts the odd values.

(define ex1-odd-count ???)

;(test-case "odd count"
;           =
;           7
;           (thunk ex1-odd-count))

; e. Puts them in inceasing order, from smallest to largest

(define ex1-increasing ???)

;(test-case "increasing order"
;           equal?
;           (list 1 5 10 18 20 20 21 21 22 23 25 25)
;           (thunk ex1-increasing))

; f. Puts them in decreasing order, from largest to smallest

(define ex1-decreasing ???)

;(test-case "decreasing order"
;           equal?
;           (list 25 25 23 22 21 21 20 20 18 10 5 1)
;           (thunk ex1-decreasing))

;; +----------------------------------+-------------------------------
;; | Exercise 2: Higher-order corners |
;; +----------------------------------+

;; Driver: B

;; Suppose we want to add 5 to every element of a list.  Some of you
;; may have tried the following.

;; > (define numbers (list 3 1 4 1 5 9 2 6))
;; > (define numbers-plus-5a (map + numbers 5))

;; a. Why doesn't that work?

;; REPLACE THIS TEXT WITH YOUR ANSWER

;; b. As we hope you've learned, you can use `l-s` or `r-s` to help with 
;; this problem.  Write an expression using either `l-s` or `r-s` that adds 
;; five to each element of `numbers`.

(define numbers (list 3 1 4 1 5 9 2 6))
(define numbers-plus-five-b ???)

;(test-case "numbers-plus-5-b"
;           equal?
;           (list 8 6 9 6 10 14 7 11)
;           (thunk numbers-plus-five-b))

;; c. Suppose you had not learned `l-s` or `r-s`.  There are still at least
;; three other ways to to add five to each element of a list, perhaps by
;; taking advantage of `add1`.  Come up with two, at least one of which uses 
;; the three-parameter `map`.

(define numbers-plus-five-c1 
  ???)

(define numbers-plus-five-c2 
  ???)

;(test-case "numbers-plus-5-c1"
;           equal?
;           (list 8 6 9 6 10 14 7 11)
;           (thunk numbers-plus-five-c1))
;(test-case "numbers-plus-5-c2"
;           equal?
;           (list 8 6 9 6 10 14 7 11)
;           (thunk numbers-plus-five-c2))

;; d. Which of those definitions do you most prefer?  Why?

;; REPLACE THIS TEXT WITH YOUR ANSWER

;; +---------------------------------------+--------------------------
;; | Exercise 3: Manipulating another list |
;; +---------------------------------------+

;; Complete each of the definitions that manipulate ex3-list in various
;; sorts of ways using one or more of list functions.  You may also
;; use other standard library functions for lists (e.g., length) when
;; appropriate. At times, you may find it useful to write helper
;; procedures.

;; Please write expressions that compute the result, rather than computing
;; the result by hand.

(define ex3-list
  (list "someone" "suggests" "that" "something" "may" "be" "smart" "&" "snarky"))

;; a. Uses `string-upcase` to convert each word to title case

(define ex3-title-case ???)

;(test-case "Titlecasing elements"
;           equal?
;           (list "SOMEONE" "SUGGESTS" "THAT" "SOMETHING" "MAY" "BE" "SMART" "&" "SNARKY")
;           (thunk ex3-title-case))

;; b. Keeps only the elements of the list that start with the letter s.

(define ex3-s-words ???)

;(test-case "Selecting s words"
;           equal?
;           (list "someone" "suggests" "something" "smart" "snarky")
;           (thunk ex3-s-words))

;; c. Joins the words together without worrying about spaces

(define ex3-smushed ???)

;(test-case "smushed together"
;           equal?
;           "someonesuggeststhatsomethingmaybesmart&snarky"
;           (thunk ex3-smushed))

;; d. Joins the words together with spaces in between them

(define ex3-spaced ???)

;(test-case "spaced out"
;           equal?
;           "someone suggests that something may be smart & snarky"
;           (thunk ex3-spaced))


;; e. Counts how many words have four or fewer letters

(define ex3-short-count ???)

;(test-case "short count"
;           =
;           4
;           (thunk ex3-short-count))

;; f. Puts them in alphabetical order

(define ex3-alphabetical ???)

;(test-case "alphabetical"
;           equal?
;           (list "&" "be" "may" "smart" "snarky" "someone" "something" "suggests" "that")
;           (thunk ex3-alphabetical))

;; g. Puts them in order from shortest to longest. Note that you may want to
;; write a separate procedure that compares two strings by size.

(define ex3-by-size ???)

;(test-case "by size"
;           equal?
;           (list "&" "be" "may" "that" "smart" "snarky" "someone" "suggests" "something")
;           (thunk ex3-by-size))

; +------------------------------------+-----------------------------
; | Exercise 4: Party people revisited |
; +------------------------------------+

;; Driver: A

;; One of the things that `map` allows us to do is perform repetitive
;; behavior.  We'll demonstrate this by generalizing one of the images
;; we created in our first lab on decomposition and then using our list
;; functions to generate repeated instances of that images.

;; a. Recall in the first exercise of our decomposition lab
;; you created an image that consisted of five people with party hats.
;; Using this code as a base, write a function `(party-person scale)`
;; that draws a single person, *i.e.*, a person with a party hat but
;; scales the person's width and height by a factor of `scale`.  For example:

;; * If `scale` is `1`, then the image is drawn at its original dimensions.
;; * If `scale` is `0.5`, then the image is drawn at half size.
;; * If `scale` is `2`, then the image is drawn at 2x size.

;; Note: You should not use anything new for this part of the exercise.
;; Just return to the days of old, when we were generalizing individual
;; images to procedures.

(define original-party-person
  (above (solid-equilateral-triangle 20 "green")
         (outlined-circle 40 "black" 1)
         (solid-rectangle 10 40 "black")))

(define party-person
  (lambda (scale)
    ???))

;; b. Using `map` and `party-person` define a *list of images* called
;; `party-list` that consists of six party people scaled by the following
;; factors.

;;   1.5, 1, 0.25, 2, 1.75, 0.5

;; Hint: start with a list of these scaling factors as a list of numbers.
;; What functions can we use in combination to transform this list of factors 
;; into a list of images?

(define party-list ???)

;; c. You might notice that the type of `party-list` isn't quite an
;; image. To see this, attempt to rotate `party-list` using the `rotate`
;; function. In the space below, report the error you receive and in a
;; sentence or two explain what the problem is!

;;    > (rotate 90 party-list)

;; REPLACE THIS TEXT WITH A DESCRIPTION OF THE ERROR AND WHY WE GET IT.

;; d. To fix the problem, we need to combine the images of `party-list`
;; into a single image.  To do so, we should use `beside` to place
;; ;; each person beside each other.  However, we can't just use `beside`
;; directly with `party-list`.  Doing so should result in yet another
;; error!  In the space below, report the error and in a sentence or
;; two explain the problem!

;;   > (beside party-list)

;; REPLACE THIS TEXT WITH A DESCRIPTION OF THE ERROR AND AN EXPLANATION.

;; e. As you might expect, it turns out that the fix is to use the
;; `apply` function which takes a function `f` and a list of values
;; as input and returns the result of applying `f` to the values of
;; the list.  Use `apply` to complete the definition of `party` below
;; and verify that it produces what you expect.  

;; Please use `beside` and not `beside/align`.

(define party 
  ???)

;; f. It's also possible to do this with `reduce` rather than `apply`.
;; (At least it should be.)  Try doing so.  Once again, please use
;; `beside` rather than `beside-align`.

(define party-f 
  ???)

;; g. Try using `reduce` with `beside/align` rather than `beside` to align
;; the partygoers along the baseline.

;; Note: You can't just write
;;    (reduce beside/align "baseline" party-list)
;; Remember: `reduce` needs a two-parameter procedure, so you'll need
;; to build one from `beside/align`.

(define party-g 
  ???)

; +------------------------------------+-----------------------------
; | Exercise 5: Exercises in reduction |
; +------------------------------------+

;; Driver: A and B

;; If you do not get to this part of the lab in class, don't worry.
;; You need not do it together.  Each partner should do it on their
;; own and *not* submit it, but be ready to discuss it.

;; a. What does the following procedure do?

(define combine
  (lambda (s1 s2)
    (string-append s1 " and " s2 " and " s1)))

;; REPLACE THIS TEXT WITH YOUR ANSWER

;; b. What value do you expect to get for the following expressions?
;; Check each as you go.

(define combine-2 (reduce combine (list "A" "B")))

;; REPLACE THIS TEXT WITH YOUR ANSWER

(define combine-1 (reduce combine (list "A")))

;; REPLACE THIS TEXT WITH YOUR ANSWER

(define combine-3-left (reduce-left combine (list "A" "B" "C")))

;; REPLACE THIS TEXT WITH YOUR ANSWER

(define combine-3-right (reduce-right combine (list "A" "B" "C")))

;; REPLACE THIS TEXT WITH YOUR ANSWER

(define left-and-right (equal? combine-3-left combine-3-right))

;; REPLACE THIS TEXT WITH YOUR ANSWER

; +----------------------+-------------------------------------------
; | Submitting your work |
; +----------------------+

;; Congratulations on finishing this lab!  To turn in your work:

;; a. Make sure that your names are at the top of the file.

;; b. Ensure that your file runs properly.

;; c. Make sure you save as `list-more.scm`.

;; d. Submit this final file to Gradescope.  Make sure, if appropriate,
;;    to submit your work as a group submission and include your
;;    partner in the submission.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, you may wish to attempt one
;; or more of the following exercises.

;; +----------------------------------+-------------------------------
;; | Extra 1: More tipsy party people |
;; +----------------------------------+

;; Remember those party people from an earlier exercise?  It's time
;; to play with them again.

;; Write a procedure, `(tipsy-party-people list-of-scales)`, that takes
;; as a parameter a list of numbers (e.g., (list 1.5 1 0.25 2 1.75 0.5))
;; makes a list of party people scaled by those numbers, rotates each
; party person by 45 degrees, puts them beside each other, and then
;; rotates the whole group by 45 degrees.

(define tipsy-party-people
  (lambda (list-of-scales)
    ???))

;; +----------------------------------+-------------------------------
;; | Extra 2: More tipsy party people |
;; +----------------------------------+

;; One of the disadvantages of the prior procedure is that the scales
;; can be too large or too small.  Write a new procedure, 
;; `(less-extreme-party-people list-of-scales)`, that takes as a parameter
;; a list of numbers, filters out any number that is greater than 1.5 or
;; less than 0.5, and then makes an image of tipsy party people using
;; the prior approach.

(define less-extreme-party-people
  (lambda (list-of-scales)
    ???))
