;; CSC-151-NN (2026Fa)
;; Lab: Data Abstraction (data-abstraction.scm)
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import test)

; +-------------------------+----------------------------------------
; | Documentation for names |
; +-------------------------+

;;; (name prefix given middle family suffix) -> name?
;;;   prefix : string? or #f
;;;   given : string?
;;;   middle : string? or #f
;;;   family : string? or #f
;;;   suffix : string? or #f

;;; (name? val) -> boolean?
;;;   val : any?
;;; Determine if val is a name.

;;; (name-prefix name) -> string? or #f
;;;   name : name?
;;; Get the prefix of a name.  Returns #f if the name has no prefix.

;;; (name-given name) -> string?
;;;   name : name?
;;; Get the given name from a name.

;;; (name-middle name) -> string? or #f
;;;   name : name?
;;; Get the middle name from a name.  Returns #f if the name does
;;; not contain a middle name.

;;; (name-family name) -> string? or #f
;;;   name : name?
;;; Get the family name from a name.  Returns #f if the name lacks
;;; a family name.

;;; (name-suffix name) -> string? or #f
;;;   name : name?
;;; Get the suffix from a name.  Returns #f if the name lacks a 
;;; suffix.

;; +--------------------------+---------------------------------------
;; | Implementations of names |
;; +--------------------------+

;; Lists
(import "names-as-lists.scm")

;; Vectors
; (import "names-as-vectors.scm")

;; Hash tables
; (import "names-as-hash-tables.scm")

;; Bar-separated strings
; (import "names-as-bar-strings.scm")

;; +--------------+---------------------------------------------------
;; | Sample names |
;; +--------------+

(define ada (name "Countess" "Ada" "Augusta" "Byron" #f))
(define babbage (name #f "Charles" #f "Babbage" #f))
(define simon (name #f "Simon" #f #f #f))
(define clay (name #f "Roy" #f "Clay" "Sr"))
(define hopper (name #f "Grace" "Murray" "Hopper" #f))
(define qe2 (name "Queen" "Elizabeth" #f #f "II"))

;; +----------------+-------------------------------------------------
;; | Tests of names |
;; +----------------+

(define test-true
  (lambda (description thunk)
    (test-case description equal? #t thunk)))

(define test-false
  (lambda (description thunk)
    (test-case description equal? #f thunk)))


(test-true "Admiral Grace Murray Hopper" #(name? hopper))
(test-true "Charles Babbage" #(name? babbage))
(test-true "Countess Ada Augusta Byron" #(name? ada))
(test-true "QEII" #(name? qe2))
(test-true "Roy Clay Sr." #(name? clay))
(test-true "Simon" #(name? simon))

(test-case "ada/prefix" equal? "Countess" #(name-prefix ada))
(test-case "ada/given" equal? "Ada" #(name-given ada))
(test-case "ada/middle" equal? "Augusta" #(name-middle ada))
(test-case "ada/family" equal? "Byron" #(name-family ada))
(test-false "ada/suffix" #(name-suffix ada))

(test-false "babbage/prefix" #(name-prefix babbage))
(test-case "babbage/given" equal? "Charles" #(name-given babbage))
(test-false "babbage/middle" #(name-middle babbage))
(test-case "babbage/family" equal? "Babbage" #(name-family babbage))
(test-false "babbage/suffix" #(name-suffix babbage))

(test-case "simon/given" equal? "Simon" #(name-given simon))
(test-false "simon/family" #(name-family simon))
(test-false "simon/middle" #(name-middle simon))
(test-false "simon/prefix" #(name-prefix simon))
(test-false "simon/suffix" #(name-suffix simon))

(test-false "clay/prefix" #(name-prefix clay))
(test-case "clay/given" equal? "Roy" #(name-given clay))
(test-false "clay/middle" #(name-middle clay))
(test-case "clay/family" equal? "Clay" #(name-family clay))
(test-case "clay/suffix" equal? "Sr" #(name-suffix clay))

(test-false "hopper/prefix" #(name-prefix hopper))
(test-case "hopper/given" equal? "Grace" #(name-given hopper))
(test-case "hopper/middle" equal? "Murray" #(name-middle hopper))
(test-case "hopper/family" equal? "Hopper" #(name-family hopper))
(test-false "hopper/suffix" #(name-suffix hopper))

(test-case "qe2/prefix" equal? "Queen" #(name-prefix qe2))
(test-case "qe2/given" equal? "Elizabeth" #(name-given qe2))
(test-false "qe2/middle" #(name-middle qe2))
(test-false "qe2/family" #(name-family qe2))
(test-case "qe2/suffix" equal? "II" #(name-suffix qe2))

;; +-------------------------+----------------------------------------
;; | Exercise 0: Preparation |
;; +-------------------------+

;; a. Begin the lab as we always do (or always should): Introduce
;; yourself to your partner, describe your strength and areas to
;; improve, discuss work styles, etc.

;; b. Update the file heder.

;; c. If you haven't done so already, upload the `names-as-???.scm` files.

;; d. Add your information to the header of `names-as-bar-strings.scm`.

;; e. Briefly review the implementations of names in the `names-as-???.scm` 
;; files.

;; f. Quickly review the tests given in this file.

;; +-----------------------------------+------------------------------
;; | Exercise 1: From names to strings |
;; +-----------------------------------+

;; Driver: A

;; a. The practice of presenting your given name before your family
;; name is not universal; other cultures consider it important to
;; start with your family name.

;; Document, write tests for, and implement a procedure, `(name->fg)`.
;; that takes a name as a parameter and returns a string consisting
;; of the family name (if there is a family name) and the given name,
;; separated by spaces.

;;    > (name->fg simon)
;;    "Simon"
;;    > (name->fg clay)
;;    "Clay Roy"

;; In case you couldn't tell, the `fg` is supposed to represent
;; "family-given".

;;; (name->fg name) -> 
;;;   name :
;;;
(define name->fg
  (lambda (name)
    ""))

; (test-case "(name->fg simon)"
;            equal? "Simon"
;            #(name->fg simon))
; (test-case "(name->fg clay)"
;            equal? "Clay Roy"
;            #(name->fg clay))
; (test-case "(name->fg babbage)"
;            equal? "Babbage Charles"
;            #(name->fg babbage))

;; b. Try each of the completed implementation of names to ensure that 
;your process works correctly independently of how names are implemented.
;You can try each implementation by commenting out the require for
;one version and uncommenting another.  Note that `names-as-bar-strings.rkt`
;is not yet completed.  You'll complete that in exercise 4.

;; You do not need to enter anything here; you may just have to fix
;; your code for `name->fg`.

;; +----------------------------------------------+-------------------
;; | Exercise 2: From names to strings, revisited |
;; +----------------------------------------------+

;; Driver: B

;; a. Document, write tests for, and implement a procedure,
;; `name->simple-string`, that takes a name as input and returns it
;; as an appropriate string with the components in order and separated
;; by spaces.  Once again, make sure to rely on the procedures like 
;; `name-prefix` rather than the underyling implementation.

;;    > (name->simple-string qe2)
;;    "Queen Elizabeth II"
;;    > (name->simple-string simon)
;;    "Simon"
;;    > (name->simple-string babbage)
;;    "Charles Babbage"

;;; (name->simple-string name) -> 
;;;   name : 
;;; 
(define name->simple-string
  (lambda (name)
    (string-append (if (name-prefix name)
                       (string-append (name-prefix name) " ")
                       "")
                   (name-given name)
                   (if (name-middle name)
                       (string-append " " (name-middle name))
                       "")
                   "FINISH ME")))

; (test-case "QE2"
;            equal? "Queen Elizabeth II"
;            #(name->simple-string qe2))

;; ADD YOUR OWN TESTS HERE!

;; b. Once again, make sure your procedure works for each of the three
;; completed implementations.

; +------------------------------+-----------------------------------
; | Exercise 3: Ordering strings |
; +------------------------------+

;; Driver: A

;; You may recall from the reading that there are more things we
;; want to do with names than just convert them to strings using some
;; process.  For example, we might want to compare two names so that
;; we can put them in order.  Here's the start of a procedure to
;; do so.

;;; (name<=? name1 name2) -> boolean?
;;;   name1 : name?
;;;   name2 : name?
;;; Determine whether name1 should come before name2 in traditional
;;; alphabetical ordering of names.
(define name<=?
  (lambda (name1 name2)
    (string-ci<=? (name->sortable name1) (name->sortable name2))))

;; a. As you can tell, this relies on `name->sortable`.  Guess what?  It's
;; your job to write it for this exercise.

;;    > (name->sortable babbage)
;;    "Babbage, Charles"
;;    > (name->sortable simon)
;;    "Simon"
;;    > (name->sortable qe2)
;;    "Queen Elizabeth II"
;;    > (name->sortable ada)
;;    "Byron, Ada Augusta Countess"

;; For information on sort order, you should refer to 

;;  <https://rebelsky.cs.grinnell.edu/Courses/CSC151/2026Fa/files/12_Rules_of_Filing.pdf>
;;  which we copied from
;; <https://www.webpages.uidaho.edu/cte492/Modules/M7/12_Rules_of_Filing.pdf>

;; You will likely need pay attention only to the first five rules.

;; And it's okay if your procedure is not perfect.

;;; (name->sortable name) -> string?
;;;   name : name?
;;; Convert a name to a form appropriate for sorting/indexing.  Uses
;;; a variant of the ARMA filing rules borrowed from UIdaho.
(define name->sortable
  (lambda (name)
    ""))

;; b. Write at least three tests for `name->sortable`.  You can rely on the 
;; names we've defined above.

;; c. Using your new version of `name->sortable`, demonstrate what happens
;; when you sort our list of names.

;;   > (map name->simple-string 
;;          (sort (list hopper babbage ada qe2 clay simon) name<=?))

;; +------------------------------------+-----------------------------
;; | Exercise 4: Another implementation |
;; +------------------------------------+

;; Driver: B

;; In a self-check for the corresponding reading, you considered
;; representing names as "bar-separated values".  We've started 
;; that implementation in the file `names-as-bar-strings.scm`.

;; a. Finish the implementation.

;; b. Require that file (rather than any of the other implementations)
;; and ensure that it passes all of our tests.

;; c.  Verify that all of the procedures you've written still work as 
;; expected.

;; +---------------------------+--------------------------------------
;; | Exercise 5: Pointed types |
;; +---------------------------+

;; Driver: A

;; Suppose we want to represent points in two-space, which have an
;; x coordinate and a y corrdinate.  

;; a. Decide on the list of procedures you think it would be useful
;; for someone to have.

;; Constructors 

;; * ...

;; Predicates

;; * ...

;; Extracting fields

;; * ...

;; Other useful procedures

;; ...

;; b. Pick one of the following implementation styles and implement the
;; procedures you just described.

;; * A pair of the x and y coordinates.
;; * A string of the form "x,y".
;; * A list of the x and y coordinates.
;; * A vector of the x and y coordinates.

;; c. Wwrite tests for, and implement a procedure, `(distance point1 point2)`, 
;; that finds the distance between two points.

;; In case you've forgotten, the distance between two points is
;; the square root of the sum of the x offset and the y offset.

;; E.g., given the points p1=(x1,y1) and p2=(x2,y2), the distance
;; between p1 and p2 is (sqrt (+ (sqr (- x2 x1)) (sqr (- y2 y1)))).

;;; (distance point1 point2) -> real?
;;;   point1 : point?
;;;   point2 : point?
;;; Find the distance beween point1 and point2.
(define distance
  (lambda (point1 point2)
    0))

;; ENTER TESTS

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; We have a slightly different approach for submitting this lab.

;; * Make sure that you currently require the `names-as-bar-strings.scm`
;;   library (rather than one of the other `names-as-???.scm` libraries).
;; * Make sure that you've updated the header for `names-as-bar-strings.scm`
;; * Submit both `data-abstraction.scm` and `names-as-bar-strings.scm`.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, you might consider one or more
;; of the following problems.

;; +------------------------------------+-----------------------------
;; | Extra 1: Alternate implementations |
;; +------------------------------------+

;; Sketch how you might approach the other implementations of
;; points.

;; +--------------------------+---------------------------------------
;; | Extra 2: More alternates |
;; +--------------------------+

;; Try writing a second implementation of points.

