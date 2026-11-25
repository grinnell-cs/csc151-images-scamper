;; treelib.scm
;; A library of tree procedures
;;
;; Samuel A. Rebelsky
;; Last updated 24 November 2026


;; +-----------------------------+------------------------------------
;; | Provided code: Binary trees |
;; +-----------------------------+

;;; Empty trees
;;; Note: The struct command creates `(◬)` and `(◬? val)`.
(struct ◬ ())

;;; Binary trees
;;; Note: The struct command creates
;;;   (bt top left right) - the constructor
;;;   (bt? val) - the predicate
;;;   (bt-top tree) - get the top value
;;;   (bt-left tree) - get the left subtree
;;;   (bt-right tree) - get the right subtree
(struct bt (top left right))

;;; (empty-tree? val) -> boolean?
;;;   val : any
;;; Determine if val is an empty tree.
(define empty-tree? ◬?)

;;; (binary-tree? val) -> boolean?
;;;   val : any
;;; Determine if val is a binary tree.
(define binary-tree?
  (lambda (val)
    (or (empty-tree? val)
        (and (bt? val)
             (binary-tree? (bt-left val))
             (binary-tree? (bt-right val))))))

;;; (binary-tree top left right) -> binary-tree?
;;;   top : any
;;;   left : binary-tree?
;;;   right : binary-tree?
;;; Create a new binary tree.
  
