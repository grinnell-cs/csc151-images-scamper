;; CSC-151-NN (2026Fa)
;; Lab: Pairs (pairs.scm)
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

;; b. Add the important information to the header. 

;; c. Make sure to save this code as `pairs.scm`.

;; +--------------------------------------+---------------------------
;; | Exercise 1: Box and pointer diagrams |
;; +--------------------------------------+

;; No driver!

;; a. Draw box-and-pointer diagrams (on paper or whiteboard) for the 
;; following expressions.  Each student should draw their own diagrams.

;; i. (list (list "x") "y" "z")
;; ii. (list "x" (list "y" "z"))
;; iii. (list (list "a") "b" (list "c" null))
;; iv. (cons (cons "a" null)
;;           (cons "b"
;;                 (cons (cons "c"
;;                              (cons null null))
;;                       null)))
;; v. (pair (pair "a" "d")
;;          (pair "b"
;;                (pair (pair "c"
;;                             (pair null "e"))
;;                      "f")))

;; b. Compare your answers to reach consensus.

;; c. Make sure you match the following number of pairs in each.

;; i: 4
;; ii: 4
;; iii: 6
;; iv: 6
;; iv: 6

;; d. Please ask the lab staff to review your results.

;; There is nothing to submit for this problem, but make sure you 
;; understand the results.

;; +-----------------------------+------------------------------------
;; | Exercise 2: Pair structures |
;; +-----------------------------+

;; Driver: A

;; As you saw in the reading, we can build nested structures using the
;; pair operation. One such structure is a "number tree", which we 
;; defined self-referentially (perhaps recursively) as follows:

;; * any number is a number tree
;; * `(pair N T)` is a number tree if an only iff `N` and `T`
;;   are number trees.

;; Using that definition, which contains an implicit base case and
;; recursive case, write a procedure, `(number-tree? val)`, that 
;; determines whether `val` is a number tree.

;; +----------------------------------------+-------------------------
;; | Exercise 3: Pair structures, continued |
;; +----------------------------------------+

;; Driver: B

;; Write a procedure `(number-tree-sum nt)`, that takes a number tree
;; as an input and adds up all the values in that tree.

;; +--------------------------+---------------------------------------
;; | Exercise 4: Nested lists |
;; +--------------------------+

;; Driver: B

;; As you may have seen in a recent assignment, it can be useful to
;; work with lists that themselves contain lists.

;; A "nested number list" can be defined similarly to a number tree.

;; * `null` is a nested number list
;; * `(cons N L)` is a nested number list if N is a number or a
;;   nested number list and L is a nested number list.

;; Note that this definition differs slightly from that of number
;; trees because lists must end with null. (Also because we use
;; `cons` rather than `pair`.)

;; Write a procedure, `(nnl? val)`, that determines
;; whether `val` is a nested number list.

;; Note that you cannot use `pair?` or `cons?` to determine whether
;; a value is a cons cell. Hence, you will need to use `list?` (along
;; with knowledge that something isn't null) to determine whether a
;; value is a cons cell.

;; +-------------------------------------+----------------------------
;; | Exercise 5: Nested lists, continued |
;; +-------------------------------------+

;; Driver: A

;; Write a procedure, `(nnl-sum nnl)` that computes the sum of all
;; the values in a nested number list.

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; Please submit your work on Gradescope.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you have extra time, please try the following problem.

;; Write a procedure, `(make-blue-squares nnl)`, that takes a 
;; nested number list as input and converts each value in the list
;; to a blue square of the given edge length.
