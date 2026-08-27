---
title: Functional Problem Solving
permalink: /syllabus/
---
# Functional Problem Solving

<dl class="dl-horizontal">
  <dt>Instructor</dt>
  <dd>
    <p><a href="{{ site.instructor_homepage }}">{{ site.instructor }}</a></p>
  </dd>

  <dt>Meeting Times</dt>
  <dd>
    <ul class="list-unstyled">
      {% for time in site.meeting_times %}
        <li>{{ time | markdownify | remove: "<p>" | remove: "</p>" }}</li>
      {% endfor %}
    </ul>
  </dd>

  <dt>Office Hours</dt>
  <dd>
    <ul class="list-unstyled">
      <li><b>{{ site.office }}</b></li>
      {% for item in site.office_hours %}
        <li>{{ item | markdownify | remove: "<p>" | remove: "</p>" }}</li>
      {% endfor %}
    </ul>
  </dd>

  {% if site.review_sessions %}
    <dt>Mentor Sessions</dt>
    <dd>
      <ul class="list-unstyled">
        {% for session in site.review_sessions %}
          <li>{{ session }}</li>
        {% endfor %}
      </ul>
    </dd>
  {% endif %}

  {% if site.textbook %}
    <dt>Textbook</dt>
    <dd>
      {{ site.textbook | markdownify | remove: "<p>" | remove: "</p>" }}
    </dd>
  {% endif %}

  {% if site.mentor %}
    <dt>Class Mentor</dt>
    <dd>{{ site.mentor }}</dd>
  {% endif %}

  {% if site.mentors %}
    <dt>Class Mentors</dt>
    <dd>
      <ul class="list-unstyled">
        {% for mentor in site.mentors %}
          <li>{{ mentor }}</li>
        {% endfor %}
      </ul>
    </dd>
  {% endif %}

  {% if site.mentor_sessions %}
    <dt>Mentor Sessions</dt>
    <dd>
      <ul class="list-unstyled">
        {% for session in site.mentor_sessions %}
          <li>{{ session | markdownify | remove: "<p>" | remove: "</p>" }}</li>
        {% endfor %}
      </ul>
    </dd>
  {% endif %}

  {% if site.tutors %}
    <dt>CS Tutors</dt>
    <dd>
      <ul class="list-unstyled">
        {% for tutor in site.tutors %}
          <li>{{ tutor }}</li>
        {% endfor %}
      </ul>
    </dd>
  {% endif %}
</dl>

## Table of Contents (with commentary)

This syllabus, like many modern syllabi, is _long_. _**Very** long_. Hence, we begin it with a table of contents (also long) and a short comment on the topic of each section. You will quickly come to realize that I can be a bit sarcastic in my approach to the syllabus, the class, and life in general.

* **Introductory information**. The basics above. Times of classes, review sessions, and more.

* [**About this course**](#about-this-course). This is an introductory CS course. 
  * [_**Course goals**_](#course-goals). We want to help you develop knowledge and ability in computational thinking (which is **not** thinking like a computer), a bit of programming, and some broader skills, including problem solving.
  * [_**Learning objectives**_](#learning-objectives). We can also consider the course goals in a more finely grained (and individually assessible) form.
  * [_**Problem domain**_](#problem-domain).  We'll be using image making and manipulation as our problem domain.
  * [_**Why take CSC-151?**_](#why-take-csc-151). Our marketing materials! In a world dominated by computing, it's good to know a bit about these topics.

* [**Support resources**](#support-resources). This course can be hard. We try to provide you with a wide variety of human supports.
  * [_**Your instructor**_](#your-instructor). Visit me during office hours or at other times. Send me email or teams messages. I'm here to help.
  * [_**Class mentors**_](#class-mentors). Class mentors are like enhanced teaching assistants. They'll be here for class and will also run regular review sessions.
  * [_**Evening tutors**_](#cs-tutors). We place experienced CS students in our classroom most weeknights so that you can get help. We strongly recommend that you do your work in our labs so that  you have a community to help.
  * [_**Individual tutors**_](#individual-tutors). If things get particularly hard, we can schedule an individual tutor for one hour per week. The tutor is free to you. (The other resources are, too.)
  * [_**Your peers**_](#your-peers). In almost every situation, it's okay to ask other students for help.

* [**Inclusion**](#inclusion). I'm here to support you. The College is, too. Talk to me if you need help.
  * [_**Learning needs**_](#learning-needs). I will make accommodations and adjustments for students with disabilities, whether or not they are documented. Please chat with me about these. Document them if you are willing and able.
  * [_**Religious observances**_](#religious-observances). If there's a conflict between class work and religious obligations, your faith should take precedence. Please chat with me.
  * [_**Community guidelines**_](#community-guidelines). A class is a community. As a community member, you have responsibilities to others in the class.
  * [_**Title IX**_](#title-ix). I hope none of you experience sexual assault. If you do, I will do what I can to support you. You should know that the College requires me (and the mentors and tutors) to report any instances of sexual assualt and related issues you disclose to us.
  * [_**Title IX and pregnancy-related-conditions**_](#title-ix-and-pregnancy). The College requires me to include this paragraph. More importantly (and this is not part of the College's policy), if you need support or accommodations because of your or a partner's pregnancy or parenthood, I will provide that support and those accommodations as best I can. You need not follow official channels.
  * [_**Other accommodations and adjustments**_](#other-accommodations-and-adjustments). Talk to me. I'm here to help.

* [**Evaluation and grading**](#evaluation-and-grading). Part of my job is to assess your work. This is what I assess, how I assess, and how I convert individual grades into a final grade.
  * [_**Mastery grading**_](#mastery-grading). This class uses an approach to grading that emphasizes *that* you get things right, rather than *when* you get them right. In practice, this means you will get regular chances to redo your work.
  * [_**Types of graded work**_](#types-of-graded-work). We have six types of graded work.
    * [_Mini-projects (homework assignments)_](#mini-projects-homework-assignments). Bi-weekly programming exercises, to be completed individually outside of class. You must complete all mini-projects to earn an A.
    * [_Final project_](#final-project).  A somewhat larger project, to be completed individually or in a group. You must complete the final project to pass the class.
    * [_Learning assessments (quizzes)_](#learning-assessments-quizzes). Regular in-class checks on your knowledge and understanding, much like quizzes or exams.
    * [_Lab exercises_](#lab-exercises). Daily work completed in class. You can miss a few lab exercises.
    * [_Reading responses_](#reading-responses). Daily work completed in advance of each class. You can miss a few reading responses.
    * [_Metacognitive reflections_](#metacognitive-reflections). Reflections on how you are approaching various kinds of work, primarily mini-projects.
  * [_**Summary of work policies**_](#summary-of-work-policies). Sometimes tables are easier to read.
  * [_**Computing overall grades**_](#computing-overall-grades). Your grade primarily depends on the number of learning assessments you successfully complete. Missed projects, lab exercises, reading responses, and metacognitve reflections can reduce the grade.
 
* [**More policies and practices**](#more-policies-and-practices). Other things you should know.
  * [_**Status reports**_](#status-reports). I send summaries of your grades.
  * [_**Tokens**_](#tokens). Tokens are the "class currency". You use them to pay for turning in things late, for unexcused absences, and similar things.
    * [_Earning tokens_](#earning-tokens). You earn tokens by attending events.
    * [_Overspending tokens_](#overspending-tokens). If you spend more tokens than you have, it negatively affects your grade.
  * [_**Late work**_](#late-work). You are generally permitted to turn in work up to 48 hours after it is due. However, turning in work late costs you a token.
  * [_**Attendance and absences**_](#attendance-and-absences). You must let me know if you are going to miss class. 
  * [_**Redos**_](#redos). You may redo any mini-project except the final project. You may redo any learning assessment. 
  * [_**Final exams**_](#final-exams). We don't have final exams. However, you can show up during our final exam times to make up any remaining LAs.
  * [_**Final deadline for all work**_](#final-deadline-for-all-work). The College does not permit me to accept work after {{ site.all_work_deadline }}.
  * [_**Academic alerts**_](#academic-alerts). The [Academic Success Center](https://www.grinnell.edu/about/leadership/offices-services/academic-success-center) asks us to keep them informed about students who are falling behind. I do so.
  * [_**Class software**_](#class-software). It's a CS class. We use software. I assume you're not surprised. The software includes Office 365, Teams, Gradescope, and Scamper.
  * [_**Phones**_](#phones). This class has a "no cell phones" policy. Your phones should be silenced and put away.

* [**Academic integrity**](#academic-integrity). Don't cheat. Cite work you build upon. Cite help you get. Talk to me if stress might lead you to cheat.
  * [_**Citing**_](#citing). "NAME helped me with TOPIC." "I used URL for ACTION."
  * [_**Sharing of course materials**_](#sharing-of-course-materials). Please don't post your homework publicly, where others may copy from it (and LLMs may consume it).
  * [_**AI programming assistants**_](#ai-programming-assistants). Don't use them. Cite them if you do.
  * [_**AI writing assistants**_](#ai-writing-assistants). Don't use them. Cite them if you do.
  * [_**Web search**_](#web-search). Try not to do it. Cite your searches if you do.

* [**Disclaimers, advice, and more**](#disclaimers-advice-and-more). Additional thoughts on the course and your experience in the course.
  * [_**Some short notes**_](#some-short notes). Warnings and suggestions.
  * [_**Asking questions**_](#asking-questions). I like it when you ask questions. Our Q&A channel on Teams is a great place to do so.
  * [_**Encountering mastery grading**_](#encountering-mastery-grading). Mastery grading can feel weird. You'll probably come to appreciate it.
  * [_**Multiple sections**_](#multiple-sections). There are three sections of the course. They are similar.
  * [_**Feeling overwhelmed**_](#feeling-overwhelmed). The syllabus covers a lot. **Don't panic**. It's okay; you don't need to memorize everything. It will feel less overwhelming and more familiar as time goes on.

* [**Frequently (and not-so-frequently) asked questions**](#frequently-and-not-so-frequently-asked-questions). Because almost every document needs an FAQ (or is it "a FAQ"?).

## About this course

Welcome to CSC-151, Grinnell College's introductory computer science course.  In this course, we will work to develop your experience with algorithmic problem solving.  While we will be using Scamper (a variant of Scheme, itself a variant of LISP) as our programming language for this course, you will quickly see that the problem solving skills we learn in this class are applicable to other languages and in settings that don't involve programming at all.

This semester, CSC-151 will emphasize image making and manipulation.  We will consider a variety of image models along the way.

CSC-151 requires no prior knowledge of computer science or computer programming.  We'll teach you everything we want you to know. It's okay if you have some experience (although this may sometimes put you at a disadvantage; we do things differently), but it's certainly not necessary. We've found that those with prior experience and those with no experience generally seem to have the same distribution of grades.

*Due to the rapidly changing world that we find ourselves in, the policies of this syllabus are perpetually subject to change. Significant changes to course policies will be announced in class in addition to being reflected in the syllabus online.*

### Course goals

How do we harness the power of modern-day computation to solve problems? Why is computation so pervasive in this information age?  What is this field, computer science, that drives much of this innovation?

To address these questions, we will introduce you to the basics of *computational thinking* and *computational problem solving*: describing and decomposing problems of a computational nature so that we can implement their solutions with a computer. We will demonstrate that computational problem-solving is the essence of computer science and is an essential first step in understanding the discipline and its effects on society.

By the end of this course, you should be able to:

* Describe the fundamentals of computer science: algorithms, data structures, and abstraction.
* Read and write computer programs *in the small* in the Scheme programming language.
* Solve problems using design strategies from functional programming: functional decomposition, computational pipelines, recursive decomposition, and higher-order programming.
* Carry out the basics of the software engineering process: design, documentation, development, testing, and debugging. 

In addition to these primary outcomes, we also expect you will take away more general skills and knowledge related to the discipline:

* Describe the benefits of collaboration in problem-solving and employ best-practices when working in groups.

### Learning objectives

We break these broader course goals into smaller, somewhat more measurable, "learning objectives" (LOs).  Don't worry if you don't understand all of these terms; you will by the end of the semester!

{% for lo in site.data.los %} {% if lo.active %} 1. **{{ lo.outcome}}**. {{ lo.description }} 
{% endif %}{% endfor %}

Each learning objective has a corresponding [learning assessment](learning-assessments-quizzes) which we will cover in approximately the order given above.

Unfortunately, the complexities and limitations of assessment mean that we also have some additional learning objectives that we cover but do not explicitly test, including such important issues as ethics, program efficiency, and sorting.

### Problem domain: Image making and manipulation

Computational thinking and computational techniques can be applied to a wide variety of domains.  At Grinnell, we have a tradition of picking a domain or "theme" for each offering of CSC-151. The theme for this section is *image making and manipulation*. That is, we'll explore how to write programs that create new images (most often, abstract images) or that manipulate existing images to create new images. Along the way, we'll explore a variety of ways to think about images.

**Note**: We have a new image-making library this semester (Fall 2026), one that differs from the library we've used in past semester. 

### Why take CSC-151?

Basic knowledge about solving problems computationally is useful in careers involving *every* major and concentration offered at Grinnell. This course outfits you with some versatile concepts applicable to other programming languages and environments you will encounter in the wild. Many skills, particularly decomposition, are also applicable in a wide variety of other situations. Finally, you have the opportunity to be creative in many ways, from problem solutions to finding new approaches to data. Creativity is highly encouraged!

## Support resources

CSC-151 introduces a new way of thinking, one that many people find difficult. And even those who find it natural sometimes get stuck when trying to write programs. Without help, a subtle error, such as a misplaced parenthesis or a confusion about what numbers mean, can take hours to resolve. For these and other reasons, the CS department provides a rich and robust set of human resources for this course.

### The instructor

In addition to preparing and teaching class, I make myself available to help you at other times and in other ways. 

Like most faculty, I have regular _office hours_. Office hours are times that I'm usually in my office and prioritize student meetings. I prefer that you book office hours, rather than just showing up and waiting. However, you are free to stop by during those times and wait for gaps between those who have scheduled meetings.

You can _schedule a meeting_ at another time. Reach out via Teams or Email, or chat with me after class.

You can _stop by my office at other times_. If I'm not busy with other activities, I'm happy to chat.

I respond to _email_ and _Teams messages_ fairly promptly, including outside of normal business hours. (Don't expect other faculty members to respond outside of normal business hours; I'm an exception.) If I haven't responded in 24 hours, I lost your message and you should contact me again. 

Most students find that email and Teams messages are the most efficient way to reach me, particularly since I'm on my computer too much of the time.

### Class mentors

Grinnell provides class mentors for each CSC-151 class. Class mentors are undergraduates who have completed the class and shown skills at helping others with the work. Your class mentor will attend class to help with lab exercises. We call them "mentors" and not "teaching assistants" because we expect that they will do more than assist with teaching. For example, your class mentors are available to chat about the CS major or about struggles in the class.

The course mentor also holds weekly *mentor sessions* outside of regular class time. In these sessions, the mentor guides you through practice problems designed to help you master the material and answer any questions you have about the material. **I highly recommend you attend each of these sessions**, even if you feel like you understand the material. You never know what you don't know, and the purpose of these sessions is to bring these blind spots to light!

Your mentors are generally available only during class and mentor sessions. If you see them at other times, please don't ask them for help. If you need advice on an issue, check with them at the end of class to find a time to meet.

### Evening tutors

Since the instructor and the mentors are not generally available in the evenings and most students do their work in the evening, the CS department provides evening tutors from 7--10 p.m. most nights of the week (Sunday through Thursday).  You can find the evening tutors in our classroom or in the neighboring room. If you're not sure who the evening tutor is, ask!

I strongly recommend that you plan on doing your mini-projects in our classroom during evening tutor hours. That way, you have not only the evening tutors, but also your fellow students, to help you with the work.

### Individual tutors

The CS department also provides individual tutors as needed.  Individual tutors meet with you for an hour a week to give more individualized help. If you find yourself struggling with the material, please let me know and I'll work with Sarah Dahlby Albright, our peer education coordinator, to get one assigned to you. Sarah will generally want to meet with you to discuss needs and go over policies and procedures before she assigns you an individual tutor.

Note that the department has limited resources for individual tutors. Hence, we will generally ask that you first take advantage of evening tutors and class mentors before you request an individual tutor.

### Your peers

In my experience, the best work often involves collaboration with others. Hence, I encourage you to talk about your work in class with other students; they can help clarify confusion and in talking to you about ideas, you will both learn more.  At the same time, pushing through challenging problems helps build skills in thinking and persistence, so you should seek a balance.

## Inclusion

I believe that any college-level course should challenge you and put you outside of your comfort zone. One of my missions as an instructor is to help you manage that discomfort so that you can grow in knowledge and maturity. Therefore, I strive to create an inclusive setting so that we all can ultimately succeed in the classroom.

### Learning needs

I welcome you to talk to me as early as possible about your distinctive learning needs. I particularly encourage students with disabilities to meet with me and discuss how our classroom and course activities could impact their work and what accommodations would be essential. I will also make adjustments for students without documented disabilities.  However, I recommend that you seek official accommodations if it is possible and appropriate to do so. In particular, I recommend talking to our Coordinator for Student Disability Resources for guidance and further instructions:

+ Jae Baldree, Steiner 209, x3089, baldreej@grinnell.edu

### Religious observance

I support the class's religious diversity and anyone who needs to balance academic work with religious observations. Please let me know as soon as possible if you will need to be absent from class or an extended deadline for any religious holidays this semester, and we can work out an appropriate schedule for making up absences or missed work.

### Community guidelines

Our class is a community.  We should behave as such.  Among other things, that means treating others with respect, not only in the language that we use (no slurs, please), but also in taking others' ideas, approaches, perspectives, and identities seriously.  We will discuss appropriate guidelines for the class throughout the semester, developing those guidelines as a community.

### Title IX

I hope that none of my students experience Title IX issues, particularly Title IX issues related to sexual discrimination or assault. Nonetheless, I should let you know about my own responsibilities (both formal and informal) under Title IX.

According to [Grinnell College Policy, Procedures and Guide to Preventing, Reporting, and Responding To Sexual Misconduct and Other Forms of Interpersonal Violence](https://www.grinnell.edu/sites/default/files/docs/2024-01/Grinnell%20College%20Guide%20for%20Prohibited%20Behavior%2001.2024%20FINAL.pdf), "with the exception of designated confidential resources, staff and faculty members and designated student leaders are required to share disclosures of Prohibited Behavior with the Title IX Coordinator". That same guide notes that "Prohibited Behavior includes but is not limited to sexual and gender-based harassment, sexual assault, intimate partner violence, sexual exploitation, and stalking."

That means that if you discuss such issues with me, with the class mentors, or with the evening tutors, Grinnell requires that we share that information with our Title IX Coordinator. We will do our best to share the information in a way that is supportive of victims (e.g., by giving you notice).

If you are dealing with a Title IX issue and need adjustments to the course related to that issue, please reach out (directly, through the Title IX office, or through a Grinnell Advocate), and I will do my best to support you.

### Title IX and Pregnancy-related conditions
  
Grinnell College is committed to compliance with Title IX and to supporting the academic success of pregnant and parenting students and students with pregnancy-related conditions. If you are a pregnant student, have pregnancy-related conditions, or are a parenting student (child under one-year needs documented medical care) who wishes to request reasonable related supportive measures from the College under Title IX, please email the Title IX Coordinator at titleix@grinnell.edu. The Title IX Coordinator will work with Disability Resources and your professors to provide reasonable supportive measures in support of your education while pregnant or as a parent under Title IX.
  
If you are a pregnant student, have pregnancy-related conditions, or are a parenting student (of any age child) and would prefer to work with me directly, rather than through our Title IX office, I will do my best to support you through appropriate measures. Please reach out!

### Basic needs security

Any student who has difficulty affording groceries or accessing sufficient food to eat every day, or who lacks a safe and stable place to live, should know that these difficulties are likely to affect their performance in the course. Such students are urged to contact the [Dean of Students](https://www.grinnell.edu/profiles/student-affairs/staff) or the [CRSSJ](https://www.grinnell.edu/about/offices-services/crssj) for support. You may also notify me, if you feel comfortable doing so, and I will do my best to help you identify and arrange other resources.

### Other accommodations and adustments

There are many other ways in which it may be appropriate to adjust course policies and it is not possible to attempt to address them all in a few policies.  These may include other issues best addressed earlier in the semester (*e.g.*, student-athlete scheduling) or as they arise (*e.g.*, chronic health flare-ups).  I will do my best to be flexible in these cases with the overall goal of facilitating your growth in this course.  Please keep me informed!

In some cases, I will recommend consulting with the [Academic Advising staff](http://www.grinnell.edu/about/offices-services/academic-advising). They are an excellent resource for developing strategies for academic success and can connect you with other campus resources as well. If I notice that you are encountering difficulty, in addition to communicating with you directly about it, I will also likely submit an academic alert via Academic Advising's SAL portal. This reminds you of my concern, and it notifies the Academic Advising team and your advisor(s) so that they can reach out to you with additional offers of support.

## Evaluation and grading

What kinds of work do  you have in this class and how do we grade them? Read below.

### Mastery grading

This course employs a grading system based on [*mastery grading* and *specifications grading*](https://docs.google.com/document/d/13V1fsPve19IU-tFNt4AeQ78VepuqVakp3xizJrj5KwY/edit) to evaluate your work.  These systems, inspired by adult learning theory, are designed to create a "low-threat" learning environment where:

+ Mastery obtained via exploration, experimentation, and failure is encouraged and valued as highly as "getting it right" the first time.
+ Your final grade accurately reflects your mastery of the learning goals of the course.
+ The expectations for grades should be easy to understand and easily trackable.

Ideally, all of you should be able to meet all of the goals in a reasonable amount of time (see the note about time and workload below).  To achieve high grades, some of you may find that you have to redo some of the work in the class.  Many of the components of the course have "no penalty" redos available.  See the notes below and in the [handouts](../handouts) for more details.

### Types of graded work

We rely on six kinds of work to assess your mastery of the material.

#### Learning assessments (quizzes)

Learning assessments (LA) are individually completed problems that directly assess your mastery of the learning objectives of the course.  LAs form the core of your course grade. Each LA is a _short_ problem on one of course's learning objectives. You should generally be able to complete each LA in fifteen minutes or less.

Learning assessments will be conducted as quizzes given at the start or end of class on Fridays. In most weeks, one or two new LAs will be available each class.

Learning assessments are graded on a **S**atisfactory/**N**ot yet satisfactory scale. We will generally provide some feedback on LAs.

You may bring and refer to one 8.5x11 or A4 page of _hand written_ notes for each learning assessment. Evidence suggests that summarizing a topic by hand helps you better learn and remember the material, so I'd recommend you take the notes even if you don't plan to refer to them.

In addition, new versions of prior LAs will be available each Friday. So, for example, if you miss one of the LAs in one week, you can try again the next week. (You can also try both again if you miss both.) And, if you miss on your second try, you'll still have a third opportunity, at least until we reach the end of the semester.

For those of you who need or want extra time (e.g., for accommodations, to make up past accommodations), I'll be available in our classroom from 7:30--8:00 a.m., 11:00--11:30 p.m., and 4:00--4:30 p.m. on most Fridays.

#### Mini-projects (homework assignments)

Mini-projects are individually completed, small-scale programming projects that apply the weekly concepts to the themes of the course. To earn an A, one must do an excellent job on most of the mini-projects and the group project.  (You will be able to re-do any project that earns less than excellent.)  _**Mini-Projects are generally due on Tuesdays at {{ site.evening_due_time }}.**_

Mini-projects (MPs) are designed to give you the opportunity to demonstrate your knowledge and mastery on more complex problems.  Work you turn in for mini-projects should be your own.  You may consult others for ideas and help, provided you appropriately acknowledge that help.

Mini-projects are graded on a **S**atisfactory/**N**ot yet satisfactory scale. When mini-projects are not yet satisfactory, we will provide you with some information on areas that are in need of improvement or correction.

You must satisfactorily complete all mini-projects in order to earn an A in the course. Each not-yet-satisfactory mini-project at the end of the semester will lead to a grade reduction of one letter grade.

You may resubmit any not-yet-satisfactory assignment at a cost of one [token](tokens). Further details can be found below in the [redos](redos) section.

#### Final project

You will also have a final, group-based project, that you will complete toward the end of the semester. The group project brings together the various materials you've learned throughout the semesters. In computing a final grade, we treat the group project as a mini-project.

If you would prefer to do the group project as a group of one, you will be permitted to do so.

#### Reading responses

Reading responses are quick checks of the concepts found in the daily reading in preparation for in-class activities.  _**Reading responses are generally due at {{ site.evening_due_time }} the night before class**_ (e.g., the problems associated with a reading for Wednesday's class are due Tuesday at {{ site.evening_due_time }}). 

A typical reading response will include your attempts at one or two problems (marked with double daggers) as well as an opportunity to let me know what parts of the reading you find puzzling.

Reading responses help prepare you for class and help me know whether there are issues that I need to address. 

Reading responses are graded on a **S**atisfactory/**N**ot satisfactory scale. Any reasonable attempt will be marked satisfactory. There are no makeups for missed reading responses.

#### Lab exercises

Lab exercises are practice problems you work on during class, usually with a partner.  _**Lab writeups are generally due immediately before the next class session**_. However, I suggest that you turn in your lab exercises at the end of class.

Lab writeups are graded on a **S**atisfactory/**N**ot satisfactory scale. Any reasonable attempt will be marked satisfactory. There are no makeups for missed lab writeups.

Labs are designed for you to practice and explore the concepts of the course in a supportive environment.  Consequently, you may collaborate on these problems with your classmates, or ask the course staff for questions, provide that you cite them in your produced deliverable.  These are checked primarily for effort rather than total correctness or copmletion.

#### Metacognitive reflections

Short reflective pieces given before and after most mini-projects. We may also ask you to reflect about learning assessments every few weeks. _**Pre-task reflections are generally due the evening after a task is assigned.  Post-task reflections are generally due the day after the task is due.**_

Lab writeups are graded on a **S**atisfactory/**N**ot satisfactory scale. Any reasonable attempt will be marked satisfactory. There are no makeups for missed reading responses.

Metacognitive reflections are intended to help you build your broader metacognitive skills and will generally ask you to reflect on what you expect from each project (assignment) or set of learning assessments (e.g., "What will be the hardest part of this project?", "What have you struggled on in past LAs?" "How can you best succeed on this week's LAs?") and what you discovered from each project or (e.g., "What aspect of the project took you the most time and why?", "How can you do better on next week's LAs?").

You can discuss the metacognitive reflections with anyone. However, you will benefit most by reflecting alone.

### Summary of work policies

<table class="table">
<thead>
<tr>
  <th>Category</th> <th>Grading</th> <th>Graded By</th> <th>Redo?</th> <th>Collaborate?</th>
</tr>
</thead>
<tbody>
<tr><td>LAs</td> <td>S/N</td> <td>Instructor</td> <td>Free</td> <td>No</td></tr>
<tr><td>MPs</td> <td>S/N</td> <td>Graders</td> <td>Tokens</td> <td>Yes</td></tr>
<tr><td>Reading responses</td> <td>S/N</td> <td>Instructor</td> <td>No</td> <td>Yes</td></tr>
<tr><td>Lab writeups</td> <td>S/N</td> <td>Graders</td> <td>No</td> <td>Yes</td></tr>
<tr><td>Metacogs</td> <td>S/N</td> <td>Instructors</td> <td>No</td> <td>Yes</td></tr>
</tbody>
</table>

### Computing overall grades

_I reserve the right to make updates to this policy as necessary. Updates will primarily be in students' favor._

Your grade depends primarily on the number of learning assessments you successfully complete across the semester according to the following table.

* **A**: 20
* **A-**: 19
* **B+**: 18
* **B**: 17
* **B-**: 16
* **C+**: 15
* **C**: 14
* **D**: 12--13
* **F**: &lt; 12

In addition, if you fail to successfully complete the final project, you will not pass the class.

Each incomplete project reduces your grade by one letter grade. If your grade based on learning assessments is an A and you are missing two projects, you will earn a C.

The remaining three categories of work (reading problems, lab assignments, and metacognitive reflections) also have an impact, but it is not as significant.
You are allowed to miss up to **six total** reading problems, lab assignments, and metacognitive reflections in the semester without penalty.  If you miss more than six pieces of work, your overall letter grade will be lowered by one-third of a letter grade for each two additional pieces of work you miss. Excesses of one also result in a loss.  For example,

* If you miss four reading problems, one lab, and one reflection, you've missed *six* total things and there is *no penalty*.
* If you miss three reading problems, three labs, and two reflections, you've missed *eight* total things, which is two more than you are permitted.  *Your overall letter grade drops by one-third*, such as from a B to a B- or from an A- to a B+.
* If you miss three reading problems, two labs, and two reflections, you've missed *seven* total things, which is one more than you are permitted.  Once again, *your total letter grade drops by one-third*.
* If you miss three reading problems, four labs, and two reflections, you've missed *nine* total things, which is three more than you are permitted.  *Your overall letter grade drops by two-thirds*, such as from a B to a C+ or from an A- to a B.

Please do your best to miss as few reading problems, labs, and reflections as possible.

Note: If your LAs and MPs indicate that you should receive a passing grade (C or above), missing readings, labs, or metacognitive reflections cannot drop your grade below a C.

## More policies and practices

It's impossible to cover every aspect of the course in the syllabus, but I try. Here are some other important issues.

## Time and workload

Grinnell has indicated that a 4-credit course, like this one, should involve approximately 180 hours of work, which matches some guidance from the U.S. government. Across a 14-week term (plus a week of finals), that ends up being approximately 12 hours of work per week. We have not been able to get anyone to answer the question of "180 hours *for whom* and *for what grade*?", but some of us have been given the impression that we should strive for that workload for the "average" student in a course who seeks to earn a B.

In general, the twelve hours should work out to approximately

* four hours per week in class,
* three hours per week on readings (one hour per class day),
* three hours per week on mini-projects (homework assignments),
* one hour per week studying for learning assessments, and
* one hour per week for mentor sessions.

If you find yourself working much more than the expected amount in this course, please let me know ASAP.  It could be that other approaches to your work, or better support resources, can help.  It may also be that I'm assigning too much work.

### Status reports

I will do my best to distribute a status report after each mini-project is graded. The status report will list what work you have and have not completed.

### Tokens

To provide a consistent and clear mechanism for dealing with the issues that regularly come up during the semester (e.g., late work, extra resubmissions, unexcused absences), I rely on a variant of the "[token system](../handouts/tokens)" designed by my colleague Peter-Michael Osera.  In short, you begin the semester with a few tokens and use them up as you turn in work late, show up to class late, or miss class without notifying me. You may earn additional tokens by attending events that I deem appropriate, such as talks related to the course or your colleages' performances and competitions.

You begin the course with **3 tokens**. You use them as follows.

+ _**Late reading**_: Use **1 token** to turn in any reading problem up to 48 hours late.
+ _**Late lab writeup**_: Use **1 token** to turn in any lab writeup problem up to 48 hours late.
* _**Late metacognitive reflection**_: Use **1 token** to turn in any metacognitive reflection up to 48 hours late.
+ _**Late mini-project**_: Use **1 token** to turn in a mini-project up to 48 hours late.
+ _**No initial submission of a mini-project**_: Use **2 tokens** for the first redo of a mini-project that did not have an initial submission.
+ _**Late redo**_: Use **1 token** to turn in a redo of a mini-project up to 48 hours late.
+ _**Second redo**_: Use **2 tokens** for a second redo on any mini-project.
+ _**Late to class**_:  Use **1 token** to show up to class late (after we take attendance).
+ _**Unexcused absence**_: Use **2 tokens** to miss class without reasonable notification.

#### Earning tokens

You can earn additional tokens on top of your initial three in one of three ways:

* You can attend one of the regular CS department events, such as CS table (lunchtime convesations) or CS extras (talks).
* You can attend certain other designated campus events, such as Scholars' Convocation.
* You can support your classmates by attending their performances or competitions.

Token-bearing events will be announced in class. If an event is not announced in class, it will not count. You may certainly suggest events.

To earn tokens by attending events, attend the event and then submit a one-paragraph reflection **within 72 hours** of the event on Gradescope.  You will submit your reflection to the **Tokens** assignment on gradescope. 

Note that a reflection is not the same as a description.  I'm interested in hearing, for example, what you took away from the event or surprising things you observed.

At times, I may also offer tokens for other things, such as all of the class completing a survey.

#### Overspending tokens

In general, you are limited to earning five tokens per week. If you'd like an exemption, please discuss it with me.

At the end of the semester, if you have used more tokens than you possess, those extra "negative tokens" will count against your final grade.

+ Overspending of 1--5 tokens will drop your grade by one-third of a letter grade, _e.g._, from a B+ to a B.
+ Overspending of 6--10 tokens will drop your grade by a two-thirds of a letter grade, _e.g._, from a B+ to a B-.
+ Overspending of 11--15 tokens will drop your grade by a full letter grade, _e.g._, from a B+ to a C+.

And so on for every 5 overspent tokens.

Remember that you are allowed to gather excess tokens during the semester to use at later times or allow your tokens to go negative if you replace them before the end of the semester. Tokens will only affect your final grade if, at the end of the semester, you have negative tokens.

The regular status reports will include information on tokens.

### Late work

I understand that things sometimes come up that make it difficult or impossible to turn work in on time. You can spend a token to turn in almost any work late. Since learning assessments are done in class, you are not permitted to turn those in late; however, you will have an opportunity to try a similar LA again the following week.

If you know in advance that a due date will be particularly stressful (e.g., because you have a lot of other work due then), please chat with me in advance.

Experience suggests that doing your CS homework at the last minute invariably leads to both less-good work and late work. Please do your best to start assignments early.

### Attendance and absences

You'll learn better if you attend class regularly and keep yourself engaged during class. However, I understand that you may have reasons you want or need to miss class. _I do not grade on attendance_. You are free to miss class for health reasons, to support a friend, for religious observations, for sporting events, for unexpected conflicts, because you need a mental health day, to visit a consulate, or whatever other reason you deem appropriate.

However, **you must send me an email if you are going to miss class** or if you unexpectedly missed class (e.g., because you overslept). You need not explain why you are missing or missed class. Simply let me know. "Dear Sam, I'm sorry, but I can't make it to class today." You are adults and I trust you to make appropriate decisions.

I would prefer that you notify me via email before the class period (or before the end of the class period).  If that is not possible, you should notify me via email by 5 p.m. on the day that you missed class.  With very few exceptions, I will not excuse an absence if you do not notify me of within this time frame.  I expect that you will notify me, even if your absence is unlikely to qualify as an excused absence.  Absences without notification have greater consequence to your grade than absences with notification. In particular, you will be charged tokens for each unexcused absence.

For events in which you have advance notice (e.g., sporting events and religious observations), I would prefer that you notify me as soon as possible.

If you miss class, you are also responsible for making up the work promptly. If there was a lab in class (and there usually is), you must complete it and turn it in by the end of the next day. You should get notes on discussion from a classmate or check the eboards for details.

I strongly encourage you to attend class regularly. In my experience, students who regularly miss class struggle to complete the work and are less likely to pass.

If you miss class more than two days in a row, I will submit an academic alert to ensure that there are not broader issues at play.

### Redos

Because I care more that you learn the material than that you learn it by a particular deadline, I permit redos for the major work in this course.  Redos on learning assessments are automatically available. In general, you may try them again on the next set of learning assessments (SoLA).

In contrast, redos on reading responses, lab writeups, and metacognitive reflections are rarely, if ever, permitted.  Please speak with me if you would like to redo a reading response or lab writeup. Since metacognitive reflections only work when done with a task, you may not make those up.

Your first redo on a mini-project is generally free. Subsequent redos on mini-projects may require tokens; wee [the section on tokens](#tokens) for details. When you receive a graded mini-project, it will generally include a checklist of issues that you must address. Please reproduce the checklist in your re-done project. Where appropriate, you should indicate how you addressed the issues we have described. **When re-doing a project, you may not use new Scheme features that you've learned since the project**; Please see the [handout on redoing mini-projects](../handouts/redos) for more details.

You may turn in the redo of a mini-project up to 48 hours after it is due. As with all late work, late redos cost one token.

### Final exams

Our course has scheduled times for final examinations and those appear on [the schedule](../schedule/). However, _this class has no final examination_! You can use our final examination time to make up any of your missing learning assessments. I'll also be available during final exam times to help you with any outstanding mini-projects. You can show up for the final exam time for any of the three sections.

### Final deadline for all work

Note that *all* work must be submitted by {{ site.all_work_deadline }}.  This is College policy and cannot be waived for any reason. If you find yourself needing to turn in work past this deadline, you must consult with me as soon as possible to submit an *incomplete request* for the course. The Committee on Academic Standing notes that ""An incomplete is generally not appropriate when […] there are multiple assignments to be completed." Hence, if you take an incomplete in the course, the only work you can make up will be one of the mini projects.

### Academic alerts

Grinnell asks faculty to submit an academic alert when they find that a student is falling behind in a class or otherwise showing signs of difficulty. Since the mastery grading system includes an expectation that you may struggle on some parts of the course, "falling behind" can be difficult to assess.

I make it a policy to submit academic alerts for each of the following reasons.

* You miss three or more days of classes in a row (excused or unexcused absences).
* You receive a Not-yet-satisfactory grade on a mini project.
* You do not turn in a revision for a mini project graded as N at the revision deadline.
* You seem to have fallen significantly behind on learning assessments (below 60%).

If any of those issues happen, we should also talk so that I might provide guidance and help you develop a plan for getting back on track, e.g., by assigning an individual tutor.

### Software

There are several software packages we use in this course both for learning how to program as well as conducting learning online.

* Your [Grinnell Office365 account](https://office365.grinnell.edu) for email and [Microsoft Teams](https://teams.microsoft.com) for discussion and collaboration.
* [Gradescope](https://gradescope.com) for assignment submission and feedback communication.
* [Scamper](https://scamper.us.reclaim.cloud) for software development.

Please make sure you can access all of these resources, and please let me know if you have any problems with access.

This may be your first semester learning with Teams.  Things will likely mess up from time to time.  That's okay; it's part of the process.

This may be your first semester using Gradescope.  Gradescope does some things well and some things less well.  Things will likely mess up from time to time.  That's okay; it's part of the process.  I'll make adjustments when you have difficulty.  I hope you'll accept my apologies when I do something wrong (or at least fail to adjust my processes to the way Gradescope thinks they should be done).

### Phones

I have mixed feelings about cell phones in class. On the one hand, they can be useful for looking things up. On the other, they are likely to be distracting; you may find yourself compelled to answer a text, or silence a call, or check your social media status, or ....  They can also be a distraction to other students.

Cell phones also present a risk of apparent or real violations of our academic integrity policies. Again, it's tempting to answer your phone if it dings in class. And the ding can be a distraction to other students.

Hence, we have a modified *no phone policy* in this class. Please silence your phone at the start of class. I'll try to remember to do the same. I would prefer that you then put your phone away (e.g., in your bag). However, I realize that some of you like taking pictures of the screen or phone. You may use your phone for that purpose, but only that purpose.

Thanks for being understanding!

## Academic integrity 

We expect you to follow normal standards of academic integrity. Among other things, this means that you must cite resources you use, particularly pre-existing code you adapt (even if it comes from the course website, one of your labs, or one of the course staff). You should also cite the help that you get from others (course staff, evening tutors, your peers).

As you might expect, **you may not directly copy** work from other students.

If you feel that the stress and pressure of the course or the semester are leading you to consider violating the academic honesty policies of the course and the College as explained in the [student handbook](https://catalog.grinnell.edu/content.php?catoid=32&navoid=5208#Honesty_in_Academic_Work), **please talk to me as soon as possible**.  The course's grading policies are designed to help you manage your time in light of the different stressors in your life.  I will do my best to work with you to figure out how to help you better manage your time relative to your learning goals and desired achievement level for the course.

And just if that wasn't enough, you should check out [my extended statement on academic honesty and integrity](../handouts/academic-integrity).

### Citing

How should you cite help you receive from another person? I care less about the particular details of citation than that you acknowledged such help. Ideally, the citation would include the name of the person (or their role, if you're not sure), the date of the help, and a summary of the help. Those who like more extensive citations might write something like.

> Sam Rebelsky. 22 Sept 2026. Assistance in writing the algorithm for Exercise 2.

However, I find a simple statement just as effective.

> Sam helped me write the algorithm for Exercise 2 on September 22.

If you get help from someone and don't know their name, give their role.

> An evening tutor explained how `cond` works on September 23. I needed `cond` for multiple problems.

> On September 24, one of my fellow CSC-151 students helped me figure out why my solution to exercise 3 didn't work.

What about Web pages? You can use similar approaches.

> Samuel A. Rebelsky. 2026. Syllabus. Online document available at <https://rebelsky.cs.grinnell.edu/Courses/CSC151/2026Fa/syllabus>. Referenced for information on citation practices.

> <https://rebelsky.cs.grinnell.edu/Courses/CSC151/2026Fa/syllabus>. Got info on citation practices.

Remember: **When in doubt, _cite_!**

### Sharing of course materials

Our goal is to create an inclusive learning environment where people feel free to share, fail, and ultimately grow in knowledge.  To create such an environment, it is imperative that we be mindful of what we share outside of our learning space.  To this end, I request that you refraining from sharing any recordings of our class meetings with others.  Recordings of class meetings that we provide, *e.g.*, recorded through Microsoft Teams, are meant for your *personal use* and should not be shared outside of the class.

Furthermore, while you retain [copyright](https://www.plagiarism.org/blog/2017/09/25/do-i-own-my-work-even-if-im-just-a-student) of the work you produce in this course, we must still uphold the academic integrity of this course.  To this end, you may not share copies of your assignments with others (unless otherwise allowed by the course policies) or upload your assignments to third party websites unless substantial changes are made to the assignment (*e.g.*, significant extensions and improvements to your code) so that it is clear that the end product is significantly different from what was asked in original assignment.

I recognize that there are times where you want to do this, *e.g.*, uploading projects to Github for your resume or to show to friendds and family, and so I encourage you come talk to me in advance, so that we can ensure that you upload a meaningful project that does not run afoul of this policy.

### AI programming assistants

You may not use AI-based programming assistants, such as Claude Code, ChatGPT, GitHub Copilot, or Microsoft IntelliCode in this course. While such tools can be useful to professionals, at this stage in your careers, it is essential for you to build understanding without relying on these tools.

If you choose to use an AI-based programming assistant, you must cite it. I realize this policy may sound like a contradiction in terms ("Don't use AI; cite it if you do"), but the College asks us to be clear about citation expectations.

### AI writing assistants

While I would prefer that you not use AI-based writing assistants---such as Grammarly, Google translate, or ChatGPT---I understand that some of you rely on them. If you choose to use such tools, you _must_ cite them.

### Web search

Our goal is to provide all that you need within the course website and the Scamper site. Please do not search the web to find help on or answers to course problems.

If you do a Web search, please disable the AI summary (usually with `-ai`). And, as you might guess, you must cite your Web searches.

## Disclaimers, advice, and more

Not so much policies as thoughts on how the class runs and what may be stressful.

### Some short notes

+ Experience shows that CSC-151 exercises different parts of your brain than other courses (even other math and science courses). Expect some challenges, but have confidence that you can work through them and that you'll come out of the course with much more knowledge.
+ Like learning a foreign language, learning in this course is cumulative: new ideas often build on ideas from earlier. If you feel like you've missed something important, please get in touch with the course staff as soon as possible for assistance!
+ Computers have no common sense or compassion. They are complex, and sometimes they do things we don't expect.  When things go wrong, don't blame yourself.  Ask your instructor, your mentor, or a tutor for help.

### Asking questions

We prefer that you ask general questions in the Questions and Answers channel on Teams. Doing so helps ensure that everyone has access to the answers. If you ask us questions in other ways, we will encourage you to use the Q&A channel.

We also prefer that you title your questions on Teams. After clicking "New Conversation", click on the icon with an A and a pencil. That will give you the opportunity to add a subject.  Click on the paper airplane in the lower-right-hand corner to post the question.

Feel free to answer each others' questions.

We understand that not all students are comfortable asking questions in public and that not all questions are appropriate for the whole class. Feel free to ask us questions via Teams chat, via email, and in person.

### Encountering mastery grading

This may be your first semester in a class that uses a form of mastery grading. As I note elsewhere, the primary goal of mastery grading is that your grade depends on what you master, not when in the semester you master it. Most students find that the system works well for them, provided they try to keep up with the material. Please try each learning assessment and mini-project the first time it is offered. If you don't succeed, get help and then try again.

### Multiple sections

There are multiple sections of this course. While I'm teaching all three of them and will do my best to do the same thing in each section, the questions students have will likely affect the details, so there will be some differences.  These differences should not affect your overall learning in the course.

### Feeling overwhelmed

You may feel a bit overwhelmed by this point. I know that I do after re-reading it. **Don't worry**. CSC-151 has a great support system, a carefully designed pedagogical methodology, and an incredibly awesome topic. (Yes, I know I am biased.) Most students who take the course excel.  We'll enjoy this together.

## Frequently (and not-so-frequently) asked questions

I'm confused about the grading scheme. Could you explain more?

> In short: The grading scheme is designed to assess you on what you've learned, not when in the semester you've learned it.  There's also a strong incentive built in for you to keep up with the work.  Doing regular work, even if it's not perfect, and receiving feedback on that work, is one of the best ways to learn.

> Broad overview: To succeed in the class, you must do the learning assessments (LAs) and projects (MPs and the final project).  Since not everyone learns at the same rate, you will have the opportunity to make additional attempts at  LAs (although with new problems) and projects.  In addition, you must keep up with regular work for the class: readings (and reading responses), labs (and lab writeups), and reflections.  If you keep up with the work and achieve appropriate results on the LAs and projects by the end of the semester, you are likely to do well in the course.  Additional details are found above and in [the page on grading](../handouts/grading).

> If that's not enough information, feel free to ask questions about particular points.

I plan to leave early for Fall break and won't be in class on Friday, 16 October 2026. What are the penalties for missing that class?

> As long as you let me know in advance, there is no penalty for your absence.

> However, you will not be able to take the quiz that day, which means that you will have to complate that learning assessment in one of the following SoLAs.  In addition, you are responsible for making up the work from class on your own, and you are still responsible for turning in that labs.

I plan to leave early for Thanksgiving break and won't be in class on Wednesday, 25 November 2026. What are the penalties for missing that class?

> As long as you let me know in advance, there is no penalty for your absence.

> However, that is a project day, so you should make sure to be in touch with your group mates to make sure that you can still contribute.

I have an accommodation that gives me extra time on in-class exams. What should I do about the Friday LA quizzes?

> Section 1: I would prefer that you arrive early. Section 2: You can take it immediately after class. Section 3: You can take it after class. (Those times are 7:30--8:00, 11:00--11;30, and 4:00-4:30. Folks in any section can use any of those times.)

I don't have an accommodation that gives me extra time on in-class exams, but I feel like I need extra time.

> You may use the same times.

I did not achieve a grade of S on one of the in-class-only learning assessments.  How do I make that up?

> You may use those same times.

I need a mental health day. What should I do?

> Send me an email message telling me that you need a mental health day (or just that you aren't going to make it to class). Plan to make up the lab on your own and submit it before the next class. If you need extra time for the lab, you'll need to use a [token](../handouts/tokens).

> More importantly, please take care of yourself.

If I ask a question about the course, will it end up here?

> Perhaps. It will depend on a variety of issues, such as whether I consider it of general interest and whether I have time to update the syllabus.

I've heard that CSC-151 is intended as a "weed-out" course. Is that really the case?

> I've always thought of CSC-151 as an opportunity to attract students to CS. While it's a challenging course, we try to have supports in place so that everyone can excel. My goal is that everyone earns an A. (I also hope that the course convinces those of you who were only planning to take one CS course to go on to another CS course.)
