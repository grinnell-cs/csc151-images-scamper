---
title: Learning assessments
summary: One of the ways we assess your learning.
permalink: /las/
---

# Learning assessments

To directly assess your mastery of the learning objectives of this course, we will conduct a series learning assessments (LAs) over the course of the semester.  The use LAs of this course is inspired by [mastery-based testing](https://mbtmath.wordpress.com/) practices found in mathematics. The LAs will appear as in-class paper-based ten-minute quiz, given at the start or end of class each Friday.  In addition to new LAs, new versions of past LAs will also be available each Friday so that you can complete those you missed or failed to complete satisfactorily.

As described in the [syllabus]({{ "/syllabus" | relative_url }}), LA problems are graded on a binary _(**S**atisfactory/**N**ot-yet-satisfactory_) scale.  Once you receive a satisfactory on a problem tied to a particular learning objective, you do not need to attempt additional LAS tied to that learning objective in subsequent weeks.

Each Friday, you may choose to attempt as many of the individual assessment problems as you wish.  

## Rubrics for learning assessments

**Programming problems**

For programming problems in learning assessments, we are concerned with correctness and design. Pay attention to the prompt for guidance about what aspects of design you need to include in your program, *e.g.*, documentation or explicit test suites.

Because you will not have access to a computer while solving programming problems, we will not expect perfect code; a mismatched parenthesis or two will be fine. However, you should do your best to use correct syntax and correct procedure names.

**Other written problems**

For problems with written responses, we are looking for responses that *address the prompt directly and concisely*.  In particular, if a written problems asks you to solve a problem in a certain style or show your work, *e.g.*, the trace of the execution of a program, make sure to include this information in the style presented in class.

## Sample LAs

{% assign outcomes = site.data.los | sort: "outcome" %}
{% for lo in outcomes %} 
  {% if lo.active %} 
* {% if lo.example %} [**{{ lo.outcome}}**]({{ lo.example | prepend: ".." }}){% else %} **_{{ lo.outcome }}_**{% endif %}. {{ lo.description }}
  {% endif %} 
{% endfor %}
