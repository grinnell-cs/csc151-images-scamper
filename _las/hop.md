---
title: "Sample LA: Use higher-order procedures"
---
# {{ page.title }}

**This is also "lambda-free anonymous procedures".**

_Use sectioning, cut, and/or composition to simplify computation._

## An image problem

Consider the following procedures.

```
(define shade-of-red
  #(rgb %1 0 0))

(define shade-of-grey
  #(rgb %1 %1 %1))

(define darken-by
  (lambda (n)
    (r-s rgb-subtract (rgb n n n))))

(define something
  (o (r-s pixel-map (image-load "kitten.jpg"))
     darken-by))
```

a. What does `shade-of-red` do?

b. What does `shade-of-grey` do?

c. What does `(darken-by 16)` return? That is, what kind of thing does it
create and how should we think of its value.

d. What does `darken-by` do? That is, what kind of thing does it
create and how should we think of its value.

e. What does `(r-s image-map (image-load "kitten.jpg"))` produce? That is
what type of thing does it create and how should we think of its value?

f. What does `something` do?

## A list problem

_This problem requires that you've seen lists, including the filter procedure._

Consider the following procedures

```drracket
;;; (vowel? char) -> boolean
;;;   char : char?
;;; Determine if char is a vowel.
(define vowel?
  (let ([vowels (string->list "aeiou")])
    (lambda (ch)
      (integer? (index-of vowels (char-downcase ch))))))

;;; (count-vowels str) -> integer?
;;;   str : string?
;;; Count the number of vowels in str
(define count-vowels
  (lambda (str)
    (tally vowel? (string->list str))))

;;; (select-special-words words) -> list-of string?
;;;   words : list-of string?
;;; Selects all the special words in words using the ALTV criterion.
(define select-special-words
  (lambda (words)
    (filter (o (r-s > 2) count-vowels) words)))
```

a. What kinds of words does `select-special-words` select?

b. Explain how `(o (r-s > 2) count-vowels)` works as a
predicate for such words.

c. Rewrite `vowel?` using section and composition but no `lambda`.

## Use higher-order procedures (extra)

_This is a particularly evil problem.  You are unlikely to receive one
this hard._

_This problem requires that you've seen lists, including the filter and map procedures._

Consider the following procedure.

```drracket
(define silly
  (lambda (lst)
    (map (lambda (x) (sqr (+ 1 x)))
         (filter odd? lst))))
```

Rewrite the procedure using `o` and `cut` so that it has *no* lambdas.

Notes:

* Use `o` when you want to sequence actions. (Do *this* to the parameter,
  then *this* to the result, then *this* to the next result, and so on and
  so forth.)
* Use `cut` when you want to fill in one or more parameters to a procedure,
  thereby creating a new procedure.
* This is a case in which the lambda-free version is likely much harder to
  read.

