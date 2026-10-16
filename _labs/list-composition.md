---
title: Composing and decomposing lists
summary: |
  We continue our exploration of Scheme's *list* structures, focusing
  on lists as ways to collect *heterogeneous* data.  We explore new 
  procedures that we can use with lists, such as `cons`, `car`, and `cdr`
---

## Useful procedures and notation

### Standard list notation

`(list val1 val2 ... valn)` - another way that Racket sometimes shows lists.

### Core list values and operations

`'null` - the empty list.

`(cons value lst)` - add `value` to the front of `lst`.

`(cdr lst)` - get a list containing all but the first element of `lst`.

`(car lst)` - get the first element of `lst`.

`(null? val)` - determine if a value is the empty list.

`(list? val)` - determine if a value is a list.

### Combinations of `car` and `cdr`

`(cadr lst)` - get the second element of `lst`. (Drop one element and then access the first remaining element.)

`(cddr lst)` - drop the first two elements of `lst`.

`(caddr lst)` - get the third element (element 2) of `lst`.

`(caar lst)` - get the first element of the first element of `lst`. Only useful for nested lists.

### Creating lists

`(list exp1 exp2 ... expn)` - create a list by evaluating each of the
expressions and then joining together their values.

`(make-list n val)` - make a list of `n` copies of `val`.

`(range n)` - create a list of all the natural numbers strictly less
than `n` (starting with `0`).

`(range s n)` - create a list of all the natural numbers between `m`
(inclusive) and `n` (exclusive).

`(range s n i)` - create a list of all the natural numbers between `m`
(inclusive) and `n` (exclusive), incrementing by `i` each time.

### Manipulating lists

`(apply fun lst)` - apply the function to all the elements of the
list, _en masse_.

`(filter pred? lst)` - Select only the elements of the list for
which the predicate holds.

`(map fun lst)` - apply the function to each element of the list.
`(map fun (list val1 val2 ... valn))` gives you
`(list (fun val1) (fun val2) ... (fun valn))`.

`(map fun lst1 lst2)` - create a new list by applying the function to
corresponding pairs of elements from the two lists.  You can also use
`map` with more than two lists.

`(reduce binproc lst)` - reduce a list to a single value

`(sort lst compare?)` - sort a list. 

`(tally lst predicate?)` - count how many values meet the predicate.

### Other list operations

`(length lst)` - Determine how many elements are in a list.

`(reverse lst)` - Create a new list with the elements in the opposite
order.

`(append lst1 lst2)` - Join two lists together.

`(list-take lst n)` - Build a new list consisting of the first `n` elements
of `lst`.

`(list-drop lst n)` - Build a new list consisting of all but the first `n` 
elements of `lst`.

`(list-ref lst n)` - Extract element `n` of the list.  (Remember that
lists start with element 0.)

`(index-of val lst)` - Determine the position of `val` in `lst`.  (It
turns out the position is how many values need to be dropped
from `lst` to reach `val`.)

## Preparation

a. If you have not done so already, you may want to open a separate tab or window in your browser for the various readings.

b. Introduce yourself to your partner. Describe your strengths and approaches to work.

c. The person closer to the board is Side A.  The other is Side B.

d. Load the lab: [list-composition.scm](../code/labs/list-composition.scm).

e. Get started.
