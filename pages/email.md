---
title: Spam from Sam
permalink: /email/
---
# {{ page.title }}

Here you can find an approximate record of the email I sent this semester. 

{% assign messages = site.email | reverse %}
{% for message in messages %}
* <a href="{{ site.baseurl }}{{ message.url }}">{{ message.title }}</a> ({{ message.date | date: "%Y-%m-%d" }}) {% endfor %}
