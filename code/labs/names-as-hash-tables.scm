;;; names-as-hash-tables.scm
;;; A simple implementation of names as hash tables.
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
         (let ([n (make-hash)])
           (begin
             (if (string? prefix)
                 (hash-set! n "prefix" prefix)
                 void)
             (hash-set! n "given" given)
             (if (string? middle)
                 (hash-set! n "middle" middle)
                 void)
             (if (string? family)
                 (hash-set! n "family" family)
                 void)
             (if (string? suffix)
                 (hash-set! n "suffix" suffix)
                 void)
             n))]))))

(define name?
  (let ([ok-key?
         (lambda (key hash)
           (string? (hash-ref-or hash key "")))])
    (lambda (val)
      (and (hash? val)
           (ok-key? "prefix" val)
           (string? (hash-ref val "given"))
           (ok-key? "middle" val)
           (ok-key? "family" val)
           (ok-key? "suffix" val)))))

(define name-prefix #(hash-ref-or %1 "prefix" #f))
(define name-given  #(hash-ref-or %1 "given" #f))
(define name-middle #(hash-ref-or %1 "middle" #f))
(define name-family #(hash-ref-or %1 "family" #f))
(define name-suffix #(hash-ref-or %1 "suffix" #f))

