---
title: More fun with lists
summary: |
  We further explore Scheme's *list* structures.  Lists permit us to
  group data and process those data as a group.  We also explore the procedures
  that we can use with lists, such as `range`, `map`, and `apply`
---

## Useful procedures and notation

### Standard list notation

`(list val1 val2 ... valn)` - a list of `n` values.

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

`(reduce binproc lst)` - reduce a list to a single value by repeatedly
replacing neighboring values with the result of applying `binproc` to 
those values.

`(sort lst compare?)` - sort a list. 

`(tally lst predicate?)` - count how many values meet the predicate.

`(tally-value lst val)` - count how many times `val` appears in `lst`.

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

`(index-of val lst)` - Determine the position of `val` in `lst`.  (The 
position is how many values need to be dropped from `lst` to reach `val`.)

`(andmap pred? lst)` - Apply `pred?` to each element of the list in turn,
stopping when you hit a false value, in which case it returns `#f`, or the
end of the list, in which case it returns true.

`(ormap pred? lst)` - Apply `pred?` to each element of the list in turn,
stopping when you hit a true value, in which case it returns `#t`, or the
end of the list, in which case it returns false.

<!--
`(indexes-of lst val)` - Find all the indices of the value in the list.
-->

### Fun higher-order procedures

`(lambda (params) body)` - a procedure in the standard form.  When applied to some values (arguments), substitutes the arguments for the parameters in the body and evaluates the new expression.  For example, `(lambda (x) (+ x 5))` adds 5 to `x`.

`(o f1 f2 f3 ... fn)` - create a procedure that takes one value and applies `fn` to that value, then `fn-1` to that result, ... then ` `f3` to that result, then `f2` to that result, and finally `f1` to the result, returning the output of f1.  For example, `(o add1 square)` is a procedure that squares its parameter and then adds 1.

`(l-s binproc val)` - create a procedure that takes one input and applies `binproc` to `val` and that input.

`(r-s binproc val)` - create a procedure that takes one input and applies `binproc` to that input and `val`.



## Preparation

a. If you have not done so already, you may want to open a separate tab or window in your browser for the various associated readings.

b. Introduce yourself to your partner.  Describe your strengths and approaches to work.

c. Review the double-dagger problems with your partner.

d. The person closer to the board is Side A.  The other is Side B.

e. Load the lab.

* [list-more.scm](../code/labs/list-more.scm)

f. Enter your names, the date, and the section info at the top of the lab.

