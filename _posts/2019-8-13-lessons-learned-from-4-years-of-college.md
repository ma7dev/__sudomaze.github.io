---
modified: Wed Aug 14 18:34:06 2019
layout: post
toc: true
title:  Lessons Learned from 4 Years of College
abstract:  This project has been a joint effort between the City of Portland and Dr. Fuxin Li.
tags: [College]
status: draft
confidence: highly likely
importance: 3
---
<footer><p>
{% for file in site.static_files %}
  {% if file.path contains 'lessons-learned-from-4-years-of-college/' %}
    {{ file.path }}
  {% endif %}
{% endfor %}
</p></footer>