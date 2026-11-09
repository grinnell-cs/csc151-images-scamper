---
title: "EBoard 28: Vectors (Section 2)"
number: 28
section: eboards
held: 2026-11-09
link: true
---
# {{ page.title }}

_New places, new partners, grab whiteboards._

**Warning! You are being recorded** (and transcribed) (provided the technology
is working correctly).

_Approximate overview_

* Administrivia
* _No pop quiz!_
* Q&A
* Discuss Friday's lab
* Lab

Administrative stuff
--------------------

### Introductory Notes

* Be careful! Friday the 13th falls on a Friday this month!
* Congratulations to Men's Soccer for becoming Midwest Conference Champions.
* Reminder: You can use the evening tutors to help you go through any
  of the labs, LAs, or MPs you are having difficulty with.
* Reminder: You might consider signing up for CPUs.

### Upcoming work

* Due Tuesday, 2026-11-10
    * Today's lab: [Vectors](../labs/vectors)
        * [Submit lab on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9023854)
    * Reading for Wednesday: [Dictionaries and such](../readings/dictionaries)
        * [Submit reading on Gradescope](https://www.gradescope.com/courses/1370413/assignments/9025693)
        * Ready by noonish.
    * [Mini-project 1](../mps/mp01) second redo
        * [Submit redo on Gradescope](https://www.gradescope.com/courses/1370413/assignments/8882970/)
        * When submitting a mini-project redo, please include a file
         called `CHANGES.txt` that describes what you've changed.
* On Friday, 2026-11-13
    * NEW Quiz/LA on Pairs (Friday and today)
    * NEW Quiz/LA on Vectors (today and Wednesday)
    * Makeup Quiz/LA on numeric recursion 
    * Makeup Quiz/LA on list recursion 
    * Makeup Quiz/LA on testing
    * Makeup Quiz/LA on local bindings
    * Makeup Quiz/LA on collaboration
    * Makeup Quiz/LA on lists and list operations
    * Makeup Quiz/LA on conditionals
    * Makeup Quiz/LA on compose, cut, and section
    * Makeup Quiz/LA on tracing
    * Makeup Quiz/LA on decomposition
    * Makeup Quiz/LA on procedures
* Due Tuesday, 2026-11-17
    * [Mini-project 5](../mps/mp05)
        * Not yet tested in Scamper!
        * Not yet posted to Gradescope

### Upcoming activities

Scholarly

* Monday, 9 October 2026, Noon--1:00 p.m., JRC 209.
  _Hana Hashimoto '27 leads a discussion of constitutions._
    * Sign up form in campus memo.
* Tuesday, 10 October 2026, Noon--1:00 p.m., CS Commons (I think).
  _CS Table_
* Tuesday, 10 October 2026, 4:15--5:15 p.m., Noyce 2021 (?).
  _Tuesday Extras_
* Thursday, 12 October 2026, 11:00 a.m.--Noon, JRC 101.
  _Scholars’ Convocation: Caleb Elfenbein:
   How I Went From Professional to Amateur and Learned to Love the Humanities_
* Thursday, 12 October 2026, 4:15--5:15 p.m., Noyce 2021 (?).
  _Thursday Extras_

Artistic/Cultural

* Any day. Visit the GCMOA for at least 30 minutes.
* Thursday, 12 November 2026, 7:30--9:30, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Friday, 13 November 2026, 7:30--9:30, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Saturday, 14 November 2026, 2:00--4:00, Roberts.
  _Mainstage Performance: Cassandra Listens_
* Sunday, 15 November 2026, 4:00--5:30 p.m., Sebring-Lewis.
  _Family Folk Machine: Rising Like a Flame_

Multicultural

* Friday, 13 2026, 4:10--5:00 p.m., HSSC N1170.
  _Middle of Everywhere (Japan)_

Peer

_Musical, theatric, sporting, academic, and similar events involving this 
section's students are welcome._

* Saturday, 14 November 2026, 1:00--4:00 p.m., Rosenbloom Field.
  _Football vs. Luther College_
* Saturday, 14 November 2026, 2:00--3:30 p.m., Sebring-Lewis.
  _Grinnell Symphony Orchestra_

Wellness

* Fill out the wellness survey that you received last week.
* Monday, 9 November 2026, 8:00--9:00 p.m., Prayer Garage in the CRSSJ.
  _Meditation Group_
* Tuesday, 10 November 2026, 12:15--12:45 p.m., GCMoA.
  _Yoga in the Museum_
* Tuesday, 10 November 2026, 4:30--6:00 p.m., Bear P103.
  _Wellness Yoga_
* Tuesday, 10 November 2026, 5:00--8:00 p.m., HSSC North Auditorium.
  _Therapy Dogs_
* Tuesday, 10 November 2026, 8:00--10:30 p.m., Harris Cinema.
  _The Muppet Movie_

Misc

* Tuesday, 10 November 2026, 7:00--9:00 p.m., Darby.
  _Volleyball vs. Lake Forest, Revisited_ (Quarterfinals)
* Wednesday, 11 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_
* Thursday, 12 November 2026, 8:00--9:00 p.m., Science 3820.
  _Mentor Session_

### Other good things

_These do not earn tokens, but are worth your consideration._

* Wednesday, 11 November 2026, 6:00--8:00 p.m., Darby.
  _Men's Basketball vs. Principia_

### Pop quizzes

Note

* No pop quiz today to give time for this discussion.

Context

* Intended as an incentive to memorize vocabulary
* Also intended to give me a check on how folks are doing
* I'm struggling to get them graded in a timely fashion

Commentary?

Survey (Sam's eyes closed, students' eyes closed). Should I resume the pop 
quizzes?

* Yes: 7
* No: 3
* Abstain / no strong opinion: 5

### Email greetings

Should I continue with the special greetings in my class emails?

* Yes: 4
* No: 0
* You use special greetings?: 7
* Abstain / no strong opinion: 3

Q&A
---

### Administrative

Can I ask the mentors for help on MPs?

> We'd prefer not. Their work is primarily on topical matters.

> The evening tutors should be helpful.

### MP4

### Vectors

Friday's lab
------------

### Exercise 2: Pair structures 

As you saw in the reading, we can build nested structures using the
`pair` operation. One such structure is a "number tree", which we 
defined self-referentially (perhaps recursively) as follows:

* any number is a number tree
* `(pair N T)` is a number tree if an only iff `N` and `T`
  are number trees.

Using that definition, which contains an implicit base case and
recursive case, write a procedure, `(number-tree? val)`, that 
determines whether `val` is a number tree.

#### Notes

* Base case
   * Just a number, return true
   * Neither a number nor a pair, return false
* Recursive case(s)
    * `(car val)`, `(cdr val)`

#### A solution

```
(define number-tree?
  (lambda (val)
    (cond
      [(number? val)
       #t]
      [(pair? val)
       (and (number-tree? (car val))
                (number-tree? (cdr val)))]
      [else
       #f])))
```

#### Another solution

```
(define number-tree?
  (lambda (val)
    (or (number? val)
        (and (pair? val)
             (number-tree? (car val))
             (number-tree? (cdr val))))))
```

#### Thinking about the solution.

* What should this return if given a number?
* What should this return if given neither a pair nor a number?
* What should this return if given a pair in which both parts are
  number trees?
* What should this return if given a pair in which one part is not a
  number tree?

### Exercise 3: Pair structures, continued

Write a procedure `(number-tree-sum nt)`, that takes a number tree
as an input and adds up all the values in that tree.

#### Notes

* This appears in the reading.

#### A solution

```
(define number-tree-sum
  (lambda (nt)
    (cond
      [(number? nt)
       nt]
      [(pair? nt)
       (+ (number-tree-sum (car nt))
          (number-tree-sum (cdr nt)))]
      [else
       0])))
```

#### Another solution

```
(define number-tree-sum
  (lambda (nt)
    (if (number? nt)
        nt
        (+ (number-tree-sum (car nt))
           (number-tree-sum (cdr nt))))))
```

### Exercise 4: Nested lists 

As you may have seen in a recent assignment, it can be useful to
work with lists that themselves contain lists.

A "nested number list" can be defined similarly to a number tree.

* `null` is a nested number list
* `(cons N L)` is a nested number list if N is a number or a
  nested number list and L is a nested number list.

Note that this definition differs slightly from that of number
trees because lists must end with null. (Also because we use
`cons` rather than `pair`.)

Write a procedure, `(nnl? val)`, that determines whether `val` is a 
nested number list.

Note that you cannot use `pair?` or `cons?` to determine whether
a value is a cons cell. Hence, you will need to use `list?` (along
with knowledge that something isn't null) to determine whether a
value is a cons cell.

#### Notes

* `null` is a nested number list
* `(cons N L)` is a nested number list if N is a number or a
  nested number list and L is a nested number list.

Thinknig through it

* Base case
    * null!
* Recursive case(s)
    * We need to check something about the car (`N`): Is it a number or a nnl?
    * We need to check something about the cdr (`L`): Is it a nested number list?

What approach do we take?

* `if` / `cond`?
* `and` / `or`?

#### A solution

```
(define nnl?
  (lambda (val)
    (or (null? val)
        (and (list? val)
             (or (number? (car val))
                 (nnl? (car val)))
             (nnl? (cdr val))))))
```

### Exercise 5: Nested lists, continued

Write a procedure, `(nnl-sum nnl)` that computes the sum of all
the values in a nested number list.

#### Notes

* Probably need an if

#### A solution

```
(define nnl-sum
  (lambda (nnl)
    (if (null? nnl)
        0
        (+ (if (number? (car nnl))
               (car nnl)
               (nnl-sum (car nnl)))
           (nnl-sum (cdr nnl))))))
```

Lab
---

Do [the vectors lab](../labs/vectors).

Make sure the lab has `vector-copy` at the top. (It should.)

### Notes


