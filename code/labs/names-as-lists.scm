;;; names-as-lists.scm
;;; A simple implementation of names as lists.
;;; Samuel A. Rebelsky
;;; Version of 2026-11-17
;;; Note that the documentation can be found in `data-abstraction.rkt`.

(export name name? 
        name-prefix name-given name-middle name-family name-suffix)

(define name
  (let ([string-or-false?
         (lambda (val)
           (or (string? val) (equal? #f val)))])
    (lambda (prefix given middle family suffix)
      (cond
        [(not (string-or-false? prefix))
         (error "name: Invalid prefix:" prefix)]
        [(not (string? given))
         (error "name: Invalid given name:" given)]
        [(not (string-or-false? middle))
         (error "name: Invalid middle:" middle)]
        [(not (string-or-false? family))
         (error "name: Invalid family:" family)]
        [(not (string-or-false? suffix))
         (error "name: Invalid suffix:" suffix)]
        [else
         (list prefix given middle family suffix)]))))

(define name?
  (let ([string-or-false?
         (lambda (val)
           (or (string? val) (equal? #f val)))])
    (lambda (val)
      (and (list? val)
           (= 5 (length val))
           (string-or-false? (name-prefix val))
           (string? (name-given val))
           (string-or-false? (name-middle val))
           (string-or-false? (name-family val))
           (string-or-false? (name-suffix val))))))

(define name-prefix (r-s list-ref 0))
(define name-given  (r-s list-ref 1))
(define name-middle (r-s list-ref 2))
(define name-family (r-s list-ref 3))
(define name-suffix (r-s list-ref 4))

