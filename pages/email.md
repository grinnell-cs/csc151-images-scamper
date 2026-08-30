---
title: Email
permalink: /email/
---
# Email

Here you can find an approximate record of the email I sent this semester. 

{% assign messages = site.email %}
{% for message in messages %}
* <a href="{{ site.baseurl }}{{ message.url }}">{{ message.title }}</a> 
{% endfor %}
