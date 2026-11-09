---
title: Dictionaries, maps, and hash tables
summary: |
  We consider the _dictionary_ data type, which provides a way to
  associate information with words.  We then explore Racket's _hash
  tables_, which provide one implementation of dictionaries.
---

## Introduction

As you've seen, we often find it useful to collect data into structures.  We've collected values in _lists_, which are useful for processing sequentially. We've explored _vectors_, an alternative to lists for linear data. We will soon explore _trees_, which are useful for processing hierarchically.  Since different structures might support different kinds of operations, the design of structured types like lists and trees is a core part of algorithm design. Computer scientists have defined a wide range of data types designed to collect data.

Consider, for example, the problem of representing a simple phone book.  A phone book associates phone numbers with names.  When you look up a name in a phone book, you should either get the corresponding phone number or a warning that no phone number is available for that name.  There are many other instances in which you want to associate information with a "name" or something equivalent.  For example, a physical dictionary associates definitions with words.

In referring to these kinds of structures, computer scientists often call the thing used to look up information the _key_ and the associated information the _value_.  In a phone book, the name is the key and the phone number is a value.  In a traditional dictionary, the word is the key and the definition is the value. 

Computer scientists use a variety of names for structures that associate keys and values, including _Dictionary_, _Map_, _Keyed Table_, and even _Hash_ (no, not the `#` symbol).  Generally, you can think of these structures as collections of key/value pairs that make it easy to reference values by key.  What operations would you expect such structures to provide?  It should be easy to _create_ a new structure, to _add_ or _update_ a key/value pair, and to _look up_ a value by key.   It might also be useful to _remove_ a key/value pair and to _check_ whether a key is in the structure.

Over the years, computer scientists have come up with a large number of ways to represent dictionaries, including association lists, binary search trees, skip lists, and hash tables.  Don't worry; you don't need to know the underlying details of any of them, at least not at this stage of your career.  You do, however, need to understand how and why to use such structures.

For now, we will focus on how you use one of the most common implementations of dictionaries, known as _Hash Tables_.  In many situations, hash tables are one of the most efficient implementations of dictionaries.  Most modern languages include hash tables as a basic type.  And, because hash tables are so popular, many programmers don't distinguish hash tables from the broader concept of dictionaries.  (That's why some people refer to the general concept as a "hash".) But you should remember that hash tables are just one way to implement dictionaries.  We may explore others this semester.

## Getting started with hash tables

We're exploring a new type.  Some of us make it a point to ask five or so questions when we encounter a new type: What is its _name_?  What is its _purpose_?  How do I _express_ values in the type?  How does Scamper _display_ values in the type?  What _procedures_ are available for working with the type?

We've already answered the first two questions: The type is named "hash table" and its purpose is to store key/value pairs.  We rarely write hash tables directly and we rarely ask Scamper to display them (they are often fairly large), so we'll leave those questions to after our coverage of the procedures associated with hash tables.

You may recall that we said that there are three basic operations we use
with hash tables: we create them, we add key/value pairs, and we look up
values by keys.

You create a new hash table with `{ }`. (Yes, you use two braces, rather than a Scheme command.)  You look up a value in
a hash table with `(hash-ref` `table` `key)`.  You add a key/value pair
to the table with `(hash-set!` `table` `key` `value)`. Note that
`hash-set!` ends with an exclamation point.  That reminds us that the
procedure modifies the underlying hash table.  As is the case with
`vector-set!`,  `hash-set!` returns nothing.

Let's explore those basic operations, creating a map of book titles to
authors.  For now, we'll assume that each book has a single author; in a
subsequent section, we'll consider how to deal with multiple authors.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(define book-authors {})
(hash-set! book-authors "The Princess Bride" "William Goldman")
(hash-set! book-authors "Homegoing" "Yaa Gasi")
(hash-set! book-authors "Moo" "Jane Smiley")
(hash-set! book-authors "Moo, Baa, La La La!" "Sanda Boynton")
(hash-ref book-authors "Homegoing")
(hash-ref book-authors "Moo")
</pre>

What if we try to grab a book that is not yet in the dictionary?

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(hash-ref book-authors "FunDHum")
</pre>

It appears that Scamper issues an error.  That seems like a
reasonable choice.  Scamper needs to signal to the user that the value is
not available. But an error message is not something many of us want to
have happen in the middle of our program.  Hence, the Scamper hash
library also provides a `(hash-has-key?` `table` `key)` procedure that
checks whether the hash table contains a particular key.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(hash-has-key? book-authors "Homegoing")
(hash-has-key? book-authors "MediaScheme")
</pre>

It turns out that there are times in which it is helpful to get back some "default value" if the key isn't there.  For that purpose, there's a variant of `hash-ref` called `hash-ref-or` that takes an extra parameter, representing the default value.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(hash-ref-or book-authors "MediaScheme" "I have no freakin' idea")
</pre>

At times, you may realize that you want to update a key/value pair that
you have stored in the hash table.  You can use the `hash-set!`
operation to update the table.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(hash-ref book-authors "The Princess Bride")
(hash-set! book-authors "The Princess Bride" "S. Morgenstern")
(hash-ref book-authors "The Princess Bride")
"S. Morgenstern"
</pre>

You've learned four basic hash table operations: `make-hash`,
`hash-set!`, `hash-ref`, and `hash-has-key?`.  Or maybe you've 
learned five, if we count the two versions of `hash-ref`.  While
the Racket hash table implementation provides a host of other
operations, those basic operations should be all that you need
at this point.  In the next few sections, we'll explore some other
design issues in making and using hash tables.

## Displaying hash tables

As hash tables exist primarily for you to use to extract information,
You will rarely ask Scamper to display hash tables.  Also, hash tables
are generally large enough that you won't want to see all of the
information on your screen.  But Scamper will display a hash table if
you ask it nicely.

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
book-authors
</pre>

Not very pretty, is it?  But, if we look carefully, it's fairly straightforward. We have a series of key/value pairs in which the key and value are separated by colons, and the pairs are separated by commas.

Can we create a hash in the same way?  Unfortunately, no. We can use the braces, but we can't include the colons and commas. (Why not? Don't ask me.)

<pre class="scamper-transcript" data-continues>
<script type="text/scamper-preamble">
</script>
(define animals { "A" "Aardvark"
                  "B" "Badger"
                  "C" "Chinchilla"
                  "D" "Dingo"
                  "E" "Emu"
                  "F" "Fennec Fox" })
animals
(hash-ref animals "C")
(hash-has-key? animals "Z")
</pre>

## Other hash table functions

You can learn much more about Scamper's hash tables in the Scamper documentation.  For now, we'll mention a few potentially relevant procedures.

`(hash-keys hash)` gives you a list of all of the keys in the
hash table.

`(hash-values hash)` gives you a list of all of the values in the
hash table.  If two keys have the same value, the value will appear
twice in the list.

`(hash->list hash)` gives you the list of key/value pairs in the
hash.

`(hash->list hash)` gives you the list of key/value pairs in the
hash.

## Self Checks

### Check 1: Using hash tables (‡)

We've given a few uses of hash tables: dictionaries, phone books,
and information about books.  Come up with two others.

### Check 2: Your own hash table (‡)

Pick one of those two uses and create a *small* hash table (about
five entries) with the information from the table.

## Acknowledgements

In writing this section, we drew upon [the discussion of hash tables in
the Racket language
documentation](https://docs.racket-lang.org/reference/hashtables.html)
and [the discussion of hash tables in the Racket
Guide](https://docs.racket-lang.org/guide/hash-tables.html).

This section also draws upon [a reading entitled "Association
Lists"](https://www.cs.grinnell.edu/~rebelsky/Courses/CSC151/2018S/readings/association-lists)
from an earlier version of Grinnell College's CSC 151.
