;; trees.scm
;; A library of tree procedures
;;
;; Samuel A. Rebelsky
;; Last updated 24 November 2026

(export empty-tree? empty-tree
        binary-tree? binary-tree 
        binary-tree-top binary-tree-left binary-tree-right
        leaf? leaf
        bt/t bt/l bt/r)

;; +---------+--------------------------------------------------------
;; | Structs |
;; +---------+

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

;; +-------------+----------------------------------------------------
;; | Empty trees |
;; +-------------+

;;; (empty-tree? val) -> boolean?
;;;   val : any
;;; Determine if val is an empty tree.
(define empty-tree? ◬?)

;;; (empty-tree) -> empty-tree?
;;; Create an empty tree.
(define empty-tree ◬)

;; +--------------+---------------------------------------------------
;; | Binary trees |
;; +--------------+

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
(define binary-tree
  (lambda (top left right)
    (cond
      [(not (binary-tree? left))
       (error "Invalid left binary tree")]
      [(not (binary-tree? right))
       (error "Invalid right binary tree")]
      [else
       (bt top left right)])))

;;; (binary-tree-top btree) -> any
;;;   btree : (all-of binary-tree? (non empty-tree?))
;;; Get the value at the top of a binary tree.
(define binary-tree-top bt-top)

;;; (binary-tree-left btree) -> any
;;;   btree : (all-of binary-tree? (non empty-tree?))
;;; Get the left subtree.
(define binary-tree-left bt-left)

;;; (binary-tree-right btree) -> any
;;;   btree : (all-of binary-tree? (non empty-tree?))
;;; Get the left subtree.
(define binary-tree-right bt-right)

; +--------+---------------------------------------------------------
; | Leaves |
; +--------+

;;; (leaf val) -> binary-tree?
;;;   val : any
;;; Returns a non-empty tree with no children (i.e., a leaf)
;;; with value at the root.
(define leaf
  (lambda (val)
    (binary-tree val (empty-tree) (empty-tree))))

;;; (leaf? val) -> boolean?
;;;   val : any
;;; Returns true iff val is the leaf of a binary search tree.
(define leaf?
  (lambda (val)
    (and (bt val)
         (empty-tree? (binary-tree-left val))
         (empty-tree? (binary-tree-right val)))))

;; +------------+-----------------------------------------------------
;; | Shorthands |
;; +------------+

(define bt/t binary-tree-top)
(define bt/l binary-tree-left)
(define bt/r binary-tree-right)

