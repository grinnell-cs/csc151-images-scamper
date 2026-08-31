---
title: An introduction to Scheme and Scamper
summary: |
  In this laboratory, you will begin to type Scheme/Scamper expressions, using the Scamper Integrated Development Enviornment (IDE).  Scheme is the language in which we will express many of our algorithms this semester.  Scamper is a particular implementation of Scheme (which varies a bit from the Scheme standard).  Scamper is also the environment in which we will write those programs.
---
## Introduction

Many of the fundamental ideas of computer science are best learned by reading, writing, and executing small computer programs that illustrate those ideas.
One of our most important tools for this course, therefore, is a *program-development environment*, a computer program designed specifically to make it easier to read, write, and execute other computer programs.

In this class, we will be using the Scamper programming language and interactive development environment. Scamper is a dialect of a language called [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)), which is itself a dialect of a language called [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)).  Although Scamper is a dialect of Scheme, we will often refer to our language of choice as either "Scamper" or "Scheme."

In this lab, we explore the Scamper language and the Scamper program development environment.

## Preparation

Start by comparing your answers on the self-check from [the reading on Scheme](../readings/intro-scamper) with your partner's answers.  After you've done the comparison and discussed any differences in your responses, you are ready to begin the computer work.

Start your Web browser of choice (Firefox or Chrome).

Navigate to the Scamper Website at <https://scamper.us.reclaim.cloud/>.

Log in. 

Make sure you turn off the "Auto Run" feature as described in [the reding on Scamper](../readings/scamper).

Click on "Create a new program" to create a new source file and name it `intro.scm`.  `.scm` is the filename extension traditionally associated with Scheme program files.

Click on `intro.scm` in the left pane.

## Exercises

For many of our in-class lab activities, you will work with a partner. To help you manage the work between yourself and your partner, the lab instructions will specify how you should work with your partner for each exercise.

*   When working collaboratively, make sure to actively engage your partner.
    Ask questions, share thoughts, and come to a common consensus on the problem.
    We will have more to share about productive collaborative work in future labs.
    For now, keep in mind the golden rules of collaborative learning:

    > **Create an environment where your partner feels comfortable sharing, failing, and ultimately learning.**
    > **You will find that you will also learn better in this environment, even if you think you know the answers already!**

The technique we use in this class is a variant of "pair programming", a commonly used technique for programming and for learning computer science.  In pair programming, we designate the person at the keyboard as the "driver" and the person working with them as the "navigator".  As in most driver/navigator situations, both driver and navigator play important roles.  You should designate one of the two of you "A" and one of you as "B".  Each problem will designate whether A or B drives.

You should plan to spend about five minutes on each exercise, perhaps a little less. If you find yourself exceeding this estimated time for an exercise, grab your instructor or class mentor and ask for help.

In this lab, you will work in a Scamper source file that you create and save called intro.scm. When turning in your work for this lab, you only need to turn in one copy of this file to Gradescope. However, you should make sure to include both your name and your partner’s name in the Gradescope submission!

### Exercise 1: Discovering Scamper's interactions pane

**Driver: A**

In Scamper, programs exist as text written in a source file, _i.e._, a program.
The Scamper IDE let's you create and manage source files entirely within the web browser.

Next, let's write a few examples. We've created a source file, in part, because we need one to open the REPL.

Click on the `>_` button to start the REPL.

Type each of the following code snippets, called _expressions_, into the REPL.

After you type each expression, run your program by clicking on the run button in the toolbar.  

_Note_: Make sure to _type_ these snippets rather than copy-pasting them in.
It is important to get a programming language, literally speaking, _in_ you fingertips rather than just in your head!

```
(sqrt 144)
(+ 3 4)
(+ 3 (* 4 5))
(* (+ 3 4) 5)
(string-append "Hello" " " "World!")
(string-split "Twas brillig and the slithy toves" " ")
(length (string-split "Twas brillig and the slithy toves" " "))
```

Of course, one should not just thoughtlessly type expressions and see what value they get.
Particularly as you learn Scheme, it is worthwhile to think a bit about the expressions and the values you expect.
The self-check in the reading asked you to predict some values.
Determine whether your prediction matches what Scmper computes.

```
> (* (+ 4 2) 2)
?
> (- 1 (/ 1 2))
?
> (string-length "Snicker snack")
?
> (string-split "Snicker snack" "ck")
?
> (solid-circle 20 "teal")
?
```

If you get an unexpected error message in one or more cases, that may be part of the intent of this exercise!
Feel free to go on to the next exercise, but if you are confused by any of the output that you get, ask the instructor!

### Exercise 2: Libraries

**Driver: A**

As you may have noted, you get an error when you try to make a circle.

```
> (solid-circle 20 "teal")
Error! solid-circle: undefined;
Error!  cannot reference an identifier before its definition
```

Why do you get an error?
Because the `solid-circle` function is not built-in to basic Scamper.
Instead, `circle` and other image-drawing functions are part of the `image` library.
We need to tell Scamper that we would like to *import* this module with an `import` statement.
At the top of your `.intro.scm` file (after the introductory note), add the following line. 

```
(import image)
```

Click the REPL button and try making the circle again. If you still get an error message, make sure to ask for help.

### Exercise 3: Experimenting with images

**Driver: B**

Now that we've configured Scamper to load the image library, let's
check the image examples from [the reading]({{ "/readings/racket-intro.html" | relative_url}}).
Enter each of the following in the interactions pane and determine what output you get. (As we noted in the reading, Scamper currently lacks the "pen size" parameter.)

```drracket
> (outlined-circle 40 "blue")
?
> (outlined-circle 20 "red")
?
> (above (outlined-circle 20 "blue")
         (outlined-circle 40 "red"))
?
> (beside (solid-circle 40 "blue")
          (outlined-circle 30 "blue"))
?
> (above (solid-rectangle 15 10 "red")
         (beside (solid-rectangle 15 10 "blue")
                 (solid-rectangle 15 10 "black")))
?
```

Why did we have you check these examples, given that they already appear in the reading?
For a few reasons:

1.  To remind you that you should not always trust what you read.
    (We will generally not intentionally deceive you, but there may be times in which we make a mistake.)
2.  The same program may not behave the same for all users, depending on how their system is configured.
3.  You learn a bit by typing the text by hand and reminding yourself of what you expect.
    Part of learning how to program is getting the language "under your fingers" in a very tactile, physical sense.

### Exercise 4: Reflection: How do you know a result is correct?

**Driver: B**

Of course, the computer is using some algorithm to compute values for the expressions you enter.
How do you know that the algorithm is correct?
One reason that you might expect it to be correct is that we've asked you to use Scamper.
However, Sciamper is  locally developed application, and there are bugs even in widely-used programs.
You may recall a controversy a few years back in which it was discovered that a common computer chip computed a few specific values incorrectly, and no one had noticed.
More recently, it was found that the output routine in Microsoft Excel produced the wrong output for a few values.
You may also have some evidence that your faculty like to trick you.
And, well, the main developer of Scamper uses Claude.
Hence, you might be a bit suspicious.

Each time you do a computation, particularly a computation for which you have designed the algorithm, you should consider how you might verify the result.
(You need not verify every result, but you should have an idea of how you might do so.)
When writing an algorithm, you can then also use the verification process to see if your algorithm is right.

Let's start with a relatively simple example.
Suppose we ask you to ask Scamper to compute the square root of 137641.
You should be able to do so by entering an appropriate Scheme expression:

```
> (sqrt 137641)
```

Scamper will give you an answer.
How can you test the correctness of this answer?
What if you don't trust Scamper's multiplication function?

Discuss this question with your partner and come up with common definition of how to test your answer in this context.
Once you have a common definition, check your answer with a member of the course staff.

### Exercise 5: Scamper's definitions pane

**Driver: B**

(*Note*: In the labs and reading, code intended to be entered in the interactions window (REPL) will generally be written with greater-than sign prompts (`>`).
If you don't see such prompts and we don't tell you otherwise, assume that code belongs in the definitions pane.)

As you may recall from the reading, the central text area in the Scamper window, which is called the _definitions pane_, is used when you want to prepare a program "off-line", that is, without immediately executing each step.
Instead of processing what you type line by line, Scamper waits for you to click on the button labeled *Run* (the second button from the right, in the row just below the menu bar) before starting to execute the program in the definitions pane.
If you never click on that button, your program is never executed!

Let's try using the definitions pane instead.

{:type="a"}
1.  Enter the following definitions into that pane. In this case, it's fine to copy and paste.

    ```drracket
    #lang racket

    (define trial01 11.2)
    (define trial02 12.5)
    (define trialO3 8.5)
    (define trial04 10.6)
    ```

2.  Try computing the average of the four trials in the REPL.

    ```
    > (* 1/4 (+ trial01 trial02 trial03 trial04))
    ```

3.  It is likely that you got an error message.
    Discuss with your partner why this might be the case.

4.  As you've likely hypothesized, the definition for `trial03` was mistakenly typed as `trialO3`.
    (That is, it contains the letter "`O`" rather than the numeral "`0`".)
    Correct the definition and click `>_` again.
    Then try entering the expression again.

5.  Congratulations, you've successfully computed the average trial score!  (At least you should have.)
    If not, review the error and try to fix it on your own with your partner's help.
    If you get stuck, hail down an instructor or mentor!

6.  You've copied code from elsewhere.
    That means that you have a responsibility to insert a "comment" that cites the original authors.
    A comment is a part of a Scheme program that has no effect on the execution of the program.
    We use comments in programs to *explain* our code or *document* different aspects of it, an important part of the software engineering process that we will discuss in more detail later in the semester.

    In Scheme, comments start with a semicolon and extend to the end the line.
    Here's one possible citation.

    ```
    ; The following definitions are taken from
    ;   Autry, E., Curtsinger, C., Davis, J., Eikmeier, N., Hamid, F., Jimenez, P., Johnson, B., Klinge, T., Osera, P.M., Rebelsky, S.A, and Weinman, J. (2026).
    ;   An introduction to Scheme and Scamper. Online document available at
    ;   _URL_.
    ```

    Here's another.

    ```
    ; The following definitions are taken from the CSC-151 2026Fa site
    ;   _URL_.
    ```

    Insert one of those citations, using the appropriate URL for this webpage.

_Note:_ You may encounter different expectations about the appropriate form of citations.
Make it a habit to start by copying and pasting the URL of a document whenever you copy and paste code.
Doing so shows that you have the appropriate intent.
If you are expected to provide a full citation, you can go back later and add it.

### Exercise 6: Definitions, revisited

**Driver: A**

Let's try another definition. Define `name` as your name in quotation marks. For example,

```
(define name "Student")
```

(Replace `Student` with your own name for the proper effect.)
Click **Run** and then find the value of the following expression using the interactions pane.

```
> (string-append "Hello " name)
```

Next, find the number of characters in the string with the following expression.

```
> (string-length name)
```

Note how this definition acts as shorthand: where ever `name` appears in the code, the string `"Student"` is substituted instead.
We'll discuss these definitions---which define *variables*---in detail in a subsequent class!

### Exercise 6: Other notations

**Driver A**

<a name="anchor-starting-scheme-other-notations"></a>

As you've learned, Scheme expects you to use parentheses and prefix notation when writing expressions.
What happens if you use more traditional mathematical notation? Let's explore that question.

Type each of the following expressions at the Scheme prompt and see what reaction you get.

+   `(2 + 3)`
+   `7 * 9`
+   `sqrt(49)`
+   `(+ (87) (23))`

You may wish to read the [notes on this problem](#anchor-starting-scheme-other-notations-notes) for an explanation of the results that you get.


## Turning it in

Turn in the `intro.scm` file to Gradescope under the appropriate lab assignment.
When doing so, please make sure that you submit the assignment as a group assignment and *include your partner's name* in the submission!

## For those with extra time

_If you find that you have finished this laboratory before the end of class, you may try any of the following exercises._

### Extra 1: Definitions, revisited

As you observed in the primary exercises for this laboratory, you can use the definitions pane to name values that you expect to use again (or that you simply find it more convenient to refer to with a mnemonic).  So far, the only numbers we've named are simple values. However, you can also name the results of expressions.

{:type="a"}
1.  In the definitions pane, write a definition that assigns the name `seconds-per-minute` to the value 60.

2.  In the definitions pane, write a definition that assigns the name `minutes-per-hour` to the value 60.

3.  In the definitions pane, write a definition that assigns the name `hours-per-day` to the value 24.

4.  In the definitions pane, write a definition that assigns the name `seconds-per-day` to the product of those three values.
    Note that you should use the following expression to express that product.

    ```drracket
    (* seconds-per-minute minutes-per-hour hours-per-day)
    ```

5.  Confirm in the REPL that `seconds-per-day` is defined correctly.

## Notes on the exercises

<a name="anchor-starting-scheme-other-notations-notes"></a>

### Notes on the Other Notations exercise

```
> (2 + 3)
⚠ Not a function or closure: 2
Runtime error · line 1, column 1```
```

When the Scheme interpreter sees the left parenthesis at the beginning of the expression `(2 + 3)`, it expects the expression to be a function call, and it expects the function to ppear right after the left parenthesis. But `2` does not identify a function; it stands for a number. 

```
> 7 * 9
⚠ A REPL entry is one statement at a time, and this is 3. 
Enter them one by one.
Parser error
```

In the absence of parentheses, the Scheme interpreter sees `7 * 9` as three separate and unrelated expressions -- the numeral `7`; `*`, a name for the primitive multiplication function ; and `9`, another numeral. To avoid confusion, the Scamper IDE only permits one expression per line.

```
> sqrt(49)
⚠ A REPL entry is one statement at a time, and this is 2. Enter them one by one.
Parser error
```

As in the preceding case, Scamper sees `sqrt(49)` as two separate
commands: `sqrt` means "Find out what `sqrt` is!" and `(49)` means
"Call the funcdtion `49`, with no arguments!" 

If we were to type them on separate lines, we'd get somewhat strange results.

```
> sqrt
(lambda (v) ...)
> (49)
⚠ Not a function or closure: 49
Runtime error · line 1, column 1
```

Since `sqrt` names a function, Scamper gives you a generic "this is a function" text. (You'll soon learn why it's written with a `lambda`.)

And, as in our earlier example, if you put a number within parentheses, Scamper thinks you're treating it like a function.

[Return to the problem](#anchor-starting-scheme-notes)

## FAQ

_We do not yet have any questions about this lab._
