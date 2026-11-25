;; CSC-151-NN (2026Fa)
;; Library: Names as Bar Strings (names-as-bar-strings.scm)
;;   A simple implementation of names as bar-separated strings.
;;   Note that the documentation can be found in `data-abstraction.rkt`.
;; Authors: Samuel A. Rebelsky and YOUR NAMES HERE
;; Date: THE DATE HERE
;; Acknowledgements:
;;   ACKNOWLEDGEMENTS HERE

(export name name? 
        name-prefix name-given name-middle name-family name-suffix)

(define name
  (let ([string-or-false?
         (lambda (val)
           (or (string? val) (equal? #f val)))]
        [convert (lambda (str) (if (string? str) str ""))])
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
         (string-append (convert prefix)
                        "|" given
                        "|" (convert middle)
                        "|" (convert family)
                        "|" (convert suffix))]))))

(define name?
  (lambda (val)
    #f))

(define name-prefix 
  (lambda (name)
    "")) 

(define name-given
  (lambda (name)
    ""))

(define name-middle 
  (lambda (name)
    ""))

(define name-family 
  (lambda (name)
    ""))

(define name-suffix
  (lambda (name)
    ""))

