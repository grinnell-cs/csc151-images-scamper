;; CSC-151-NN (SEMESTER)
;; Trees (binary-trees.scm)
;; Authors: YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(import canvas)
(import reactive)
(import image)
(import test)
(import "trees.scm")
(import "output.scm")

;; +------------------------------+-----------------------------------
;; | Provide code: Printing trees |
;; +------------------------------+

;;; (print-binary-tree! t) -> void?
;;;   t : binary-tree?
;;; Prints tree t to the console in a well-formatted manner.
(define print-binary-tree!
  (lambda (t)
    (let (; The different levels of bullets
          [bullets (vector "* " "+ " "- " ". ")]
          ; The index of the last bullet
          [last-bullet (- (vector-length bullets) 1)]
          ; Choose the appropriate bullet for a level.
          [bullet
           (lambda (level)
             (vector-ref bullets (min level last-bullet)))]
          ; Display a binary tree at the appropriate indentation
          [helper
            (lambda (t indent)
              (if (empty-tree? t)
                  void
                  (begin
                    (print! (make-string (* indent 4) #\space))
                    (print! (bullet indent))
                    (print! (bt/t t))
                    (newline!)
                    (helper (bt/l t) (+ indent 1))
                    (helper (bt/r t) (+ indent 1)))))])
      (helper t 0))))

;; +---------------------------------------+--------------------------
;; | Provided code: The hideous shorthands |
;; +---------------------------------------+

(define bt/tl (o bt/t bt/l))
(define bt/ll (o bt/l bt/l))
(define bt/rl (o bt/r bt/l))

(define bt/tr (o bt/t bt/r))
(define bt/lr (o bt/l bt/r))
(define bt/rr (o bt/r bt/r))

(define bt/tll (o bt/tl bt/l))
(define bt/lll (o bt/ll bt/l))
(define bt/rll (o bt/rl bt/l))

(define bt/trl (o bt/tr bt/l))
(define bt/lrl (o bt/lr bt/l))
(define bt/rrl (o bt/rr bt/l))

(define bt/tlr (o bt/tl bt/r))
(define bt/llr (o bt/ll bt/r))
(define bt/rlr (o bt/rl bt/r))

(define bt/trr (o bt/tr bt/r))
(define bt/lrr (o bt/lr bt/r))
(define bt/rrr (o bt/rr bt/r))

;; +-----------------------------+------------------------------------
;; | Provided code: Sample trees |
;; +-----------------------------+

;;; management-tree : binary-tree?
;;; A variation of the management tree from the reading.
(define management-tree
  (binary-tree "Board"
               (empty-tree)
               (binary-tree "CEO"
                            (binary-tree "Head of Engineering"
                                         (leaf "Software Developer")
                                         (leaf "Tester"))
                            (binary-tree "Head of Legal"
                                         (empty-tree)
                                         (leaf "Lawyer")))))

;;; digits-tree : binary-tree?
;;; The following tree, taken from an earlier lab
;;;        5
;;;       / \
;;;      2   7
;;;     / \   \
;;;    1   4   9
;;;           /
;;;          8
(define digits-tree
  (binary-tree 5
               (binary-tree 2
                            (leaf 1)
                            (leaf 4))
               (binary-tree 7
                            (empty-tree)
                            (binary-tree 9
                                         (leaf 8)
                                         (empty-tree)))))

;; +-------------+----------------------------------------------------
;; | Preparation |
;; +-------------+

;; a. Have the standard start-of-lab conversation

;; b. Upload this file to Scamper.

;; c. Fill out the info at the top of the file.

;; d. Download and upload `output.scm`, which provides some simple output
;;    functions, and `trees.scm`, which provides the basic tree library.

;; e. Grab a whiteboard and a marker.

;; +------------------------------+-----------------------------------
;; | Exercise 1: Traversing trees |
;; +------------------------------+

;; Driver: A

;; In the code above, you'll see a binary tree of digits and a 
;; "management tree".

;; a. Write instructions to extract the value 4 from `digits-tree`.

(define one-a (bt/t digits-tree)) ; incorrect/fix

;; b. Write instructions to extract the value 9 from `digits-tree`.

(define one-b (bt/t digits-tree)) ; incorrect/fix

;; c. Write instructions to extract the value "CEO" from `management-tree`.

(define one-c (bt/t management-tree)) ; incorrect/fix

;; d. Write instructions to extract the value "Tester" from `management-tree`.

(define one-d (bt/t management-tree)) ; incorrect/fix

;; e. In the REPL, conduct an experiment to see what happens if you
;; "fall off of" the tree by going beyond an empty portion.

;; What happens? Enter your answer: 

;; Copy, paste, and comment-out your experiment.

;; +----------------------------+-------------------------------------
;; | Exercise 2: Building trees |
;; +----------------------------+

;; Driver: B

;; a. `(empty-tree)` is supposed to make an empty tree and 
;; `(empty-tree? val)` is supposed to check if a value is an empty 
;; tree. 

;; Run some quick experiments in the REPL to see if they behave 
;; as expected. 

;; Copy, paste, and comment-out your experiments.

;; b. `(binary-tree top left right)` is supposed to make a tree
;; with the given components and `(binary-tree? val)` is supposed to
;; check if a value is a binary tree.

;; Conduct a few experiments to determine if they behave as expected.

;; Copy, paste, and comment-out your experiments.

;; c. What do you expect to have happen if you call `empty-tree?`
;; on a value created by `binary-tree`.

;; Your answer:

;; Check the question experimentally and report the results.

;; Your answer: 

;; d. What do you expect to have happen if you call `binary-tree?`
;; on a value created by `empty-tree`.

;; Your answer:

;; Check the question experimentally and report the results.

;; Your answer: 

;; Reflect back on lists to explain why `binary-tree?` behaves this
;; way.

;; Your reflection:

;; e. What do you expect to have happen if you try to create a binary
;; tree in which one of the subtrees is not itself a binary tree?

;; Your answer:

;; Check the question experimentally and report your results.

;; Your comment:

;; +--------------------------+---------------------------------------
;; | Exercise 3: Making trees |
;; +--------------------------+

;; Driver: A

;; a. Consider the following trees of numbers drawn with ASCII art:

;; i. tree-i
;;          "b"
;;          / \
;;         /   \
;;       "a"   "c"

;; ii. tree-ii
;;           5
;;          / \
;;         2   7
;;        / \   \
;;       1   4   9
;;              /
;;             8

;; iii. tree-iii
;;            5
;;           /
;;          4
;;         /
;;        3
;;       /
;;      2
;;     /
;;    1
;;   /
;;  0
 ; 
;; For each of these trees, use the tree-making functions from the
;; reading to complete the definitions of `tree-i`, `tree-ii`, and
;; `tree-iii` below. 
;;
;; There tree-making functions are `(binary-tree top left right)` and 
;; `(empty-tree)`.
;; 
;; Make sure to check that each thing you enter is a binary tree with
;; `binary-tree?` and that it has the right form with `print-binary-tree!`.
;;
;;   > (binary-tree? tree-i)
;;   #t
;;   > (screen 40 20) ; makes a screen of approximately 40 columns and 20 lines
;;   > (screen-text! "black") ; Use "white" if you're in dark mode
;;   > (print-binary-tree! tree-i)
;;   * b
;;     + a
;;     + c
;;   > (binary-tree? tree-ii)
;;   #t
;;   > (reset!)
;;   > (print-binary-tree! tree-ii)
;;   * 5
;;     + 2
;;       - 1
;;       - 4
;;     + 7
;;       - 9
;;         . 8
;;   > (binary-tree? tree-iii)
;;   #t
;;   > (reset!)
;;   > (print-binary-tree tree-iii)
;;   * 5
;;     + 4
;;       - 3
;;         . 2
;;           . 1
;;             . 0

;; (define tree-i
;;   (empty-tree)) 
  
;; (define tree-ii
;;   (empty-tree))
   
;; (define tree-iii
;;   (empty-tree))

;; b. Note that tree-iii is a left-leaning tree. That is, all its children are
;; left children. Complete the definition of tree-iv below which is
;; the same as tree-iii except that its leaves grow to the right rather
;; than the left.
;; 
;;     5
;;      \
;;       4
;;        \
;;         3
;;          \ 
;;           2
;;            \ 
;;             1
;;              \
;;               0
;; 
;;     > (binary-tree? tree-iv)
;;     #t
;;     > (print-binary-tree tree-iv)
;;     * 5
;;       + 4
;;         - 3
;;           . 2
;;             . 1
;;               . 0
;; 
(define tree-iv 
  (binary-tree 5
               (empty-tree)
               (binary-tree 4
                            (empty-tree)
                            (binary-tree 3
                                         (empty-tree)
                                         (binary-tree 2
                                                      (empty-tree)
                                                      (empty-tree))))))

;; d. Finally, in the space below describe in a few sentences the
;; differences and similarities between tree-iii and tree-iv. Do you
;; consider these trees to be the same tree or different trees?
;; Why?

;; Enter your analysis here: 
;;

;; +--------------------+---------------------------------------------
;; | Exercise 4: Leaves |
;; +--------------------+

;; Driver: B

;; a. As you may have noted, in the sample code, we create leaves (the
;; values at the ends of trees) with the very verbose.

;;    (binary-tree val (empty-tree) (empty-tree))

;; We can also build that tree with `(leaf val)`.  Write your own version of
;; `leaf`, called `make-leaf`.  Your procedure should take one value and
;; return a valid binary tree.

;;    > (binary-tree? (leaf 1))
;;    #t
;;    > (screen 40 20)
;;    > (screen-text! "black") ; Use "white" if you're in dark mode
;;    > (reset!)
;;    > (print-binary-tree! (leaf 1))
;;    * 1
;;    > (binary-tree? (binary-tree 1 (leaf 2) (leaf 3)))
;;    #t
;;    > (reset!)
;;    > (print-binary-tree (binary-tree 1 (leaf 2) (leaf 3)))
;;    * 1
;;      + 2
;;      + 3

(define make-leaf
  (empty-tree))

;; b. As you know, a leaf is a binary tree node with an empty left subtree
;; and an empty right subtree.  Write the `(is-leaf? tree)` procedure as 
;; described below.

;;; (is-leaf? val) -> boolean?
;;;   val : any?
;;; Returns #t if tree is a leaf in a tree and #f otherwise.
(define is-leaf?
  (lambda (val)
    #f))

;; Look at `trees.scm` to see how `leaf` and `leaf?` are defined.

;; How do your definitions of `make-leaf` and `is-leaf?` differ from the
;; ones in that file?

;; Enter your anwer: 

;; +------------------------------+-----------------------------------
;; | Exercise 5: Exploring output |
;; +------------------------------+

;; Driver: A

;; You may have noticed that the `print-binary-tree!` procedure has a
;; helper procedure, `bullet`, that selects an appropriate bullet.  

;; Here's a tree with more than four levels.

(define taller-tree
  (binary-tree "a"
               (binary-tree "b"
                            (binary-tree "c"
                                         (binary-tree "d"
                                                      (binary-tree "e"
                                                                   (leaf "f")
                                                                   (leaf "g"))
                                                      (leaf "h"))
                                         (leaf "i"))
                            (leaf "j"))
               (leaf "k")))

;; a. What bullet do you expect to get if your tree has more than four levels,
;; as in the case of `taller-tree`?

;; Your answer: 

;; Check your answer experimentally.

;; > (screen 40 20)
;; > (screen-text! "black") ; Use "white" if you're in dark mode
;; > (reset!)
;; > (display-tree! taller-tree)

;; Enter the results of your experiment:

;; b. In your own words, explain how `bullet` works.

;; Answer: 

;; c. As you might guess, you can change the bullets by changing the
;; value of `bullets`.  Create a new version of `bullets` with at least
;; five bullets. You might try using the unicode bullets.

;;  https://en.wikipedia.org/wiki/Bullet_(typography)

;; For example, here's the triangular bullet: ‣

;; Enter your new definition here:

;; Also update the code in `print-binary-tree!`

;; d. In your own words, explain how `print-binary-tree!` seems to work.

;; Your answer:

;; +------------------------------+-----------------------------------
;; | Exercise 6: Traversing trees |
;; +------------------------------+

;; Driver: B

;; You may have observed a few things about the binary tree procedures,
;; such as `bt/lr` or `bt/rrr` that we call "the hideous shorthands".
;; Here are some things we think about them (other than that they are
;; somewhat hideous).

;; * They are hard to read.
;; * There are a lot of them.
;; * Even though there are a lot of them, the ones we need may still be
;;   missing.
;; * They feel a bit "backwards".  That is, the first thing you do is the
;;   last letter in the thing, rather than the first.  For example, 
;;  `bt/trll`  means "go left, go left, go right, take the top element".
;;   Or at least it would if it were defined.

;; We can't necessarily solve the first problem, but we can probably solve
;; the others.

;; a. Finish the definition of the procedure, `(traverse path tree)` that
;; takes a string of r's and l's as its first parameter and a tree as its
;; second parameter, and returns the portion of the tree specified by that
;; string in left-to-right order.  For example, `(traverse "llrl" tree)`
;; means "go left, then left, then right, then left".  We're not going to
;; worry about the top element for now.

;;; (traverse path tree) -> binary-tree?
;;;   path : string? (contains only r's and l's)
;;;   bree : binary-tree?
;;; Follow the path given by the path and return the described
;;; value.
(define traverse
  (lambda (path tree)
    (cond
      [(equal? path "")
       tree]
      [(empty-tree? tree)
       (error "You've run off the end of the tree")]
      [(char=? #\l (string-ref path 0))
       (traverse "";            ; You need to figure out this parameter.
                 (binary-tree-left tree))]
      [(char=? #\r (string-ref path 0))
       void]                    ; You need to figure out this recursive call.
      [else
       (error "Invalid subpath" path)])))

;; b. Try a few examples of `traverse` with the management tree and/or 
;; some of the trees you defined earlier.

;; Examples:
;;
;;

;; +------------------+-----------------------------------------------
;; | Submit your work |
;; +------------------+

;; You know the drill.

;; +---------------------------+--------------------------------------
;; | For those with extra time |
;; +---------------------------+

;; If you find that you have extra time, you should go through the
;; following exercises in order.  We will return to some of the issues 
;; raised by these exercises in the next class.

;; +------------------------------------+-----------------------------
;; | Extra 1 : Exploring tree recursion |
;; +------------------------------------+

;; From the reading, we noted that a binary tree is recursively defined like a
;; list. A binary tree is either:

;; * Empty, or
;; * Non-empty where the tree contains a value and up to two children
;;   (subtrees) that are, themselves, trees.

;; Like lists, our tree operations mirror this recursive decomposition of
;; the list. As a first example, consider the following function which
;; computes the *size* of the input tree, *i.e.*, the number of values it
;; contains.

;;; (binary-tree-size tree) -> integer?
;;;   tree : binary-tree?
;;; Determine how many values are in binary tree tree.
(define binary-tree-size
  (lambda (t)
    (if (empty-tree? t)
        0
        (+ 1
           (binary-tree-size (binary-tree-left t))
           (binary-tree-size (binary-tree-right t))))))

;; Now, use your mental model of computation to give an evaluation trace
;; of the following expression in the space below:

;; For this derivations, you can evaluate the `cond` expression directly
;; to the branch it evaluates to, immediately evaluate the results of the
;; `car` and `cdr` calls, to the sub-trees they evaluate to, as well as
;; elide the contents of the tree's children during evaluation.  You can
;; write the trees as lists or vectors, depending on which is easier for
;; you to think about.

;; Your derivations go below

;;     (binary-tree-size tree-i)
;; --> (binary-tree-size ...)
;; --> ...

;; b. Do the same for tree-ii

;;    (binary-tree-size tree-ii)
;; --> 

;; c. Fill out the following high-level description of `tree-size` in
;; terms of the base and recursive cases of the function above.

;; > The size of a tree is:
;; > *   ... in the base case
;; > *   ... in the recursive case

;; +-------------------------------------+----------------------------
;; | Extra 2: Patterns of tree recursion |
;; +-------------------------------------+

;; You've now seen or written four procedures that recurse over binary trees:

;; * `binary-tree?`, which checks if something is a binary tree.
;; * `print-binary-tree!`, which prints out a binary tree
;; * `traverse`, which traverses a binary tree
;; * `binary-tree-size`, which finds the number of values in the tree

;; Each uses a slightly different form of recursion.

;; As you've likely figured out, it's helpful to generalize the patterns of
;; recursion we see.  For example, we've realized that most list recursion
;; stops with null lists or one element lists (that's our base-case test)
;; and that most list recursion requires us to take the cdr of the list.

;; a. Let's do the same here.  `binary-tree-size` uses one of the more
;; common forms of tree recursion, so we'll focus on that.  Using
;; `binary-tree-size` as a starting point, sketch (using language) a 
;; form of recursion over trees.  Make sure to make it clear what the 
;; base case test is and what the recursive case looks like.

;; Enter your sketch here:
;;

;; b. How is binary tree recursion similar to and dissimilar from
;; list recursion?

;; Enter your answer here:
;; 
