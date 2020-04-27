---
layout: post
title: "4/24-26 | Python projects"
permalink: /streams/general/faq/
category: "Streams"
tag: "General"
---
{% assign parent_path = page.path | split:'/' | last %}
{% assign parent_path = page.path | remove:  parent_path %}

{% for file in site.static_files %}
{% if file.path contains parent_path %}
{% assign file_name = file.path | remove:  parent_path | remove:  "/" %}

{% include_relative {{ file_name }} %}

{% endif %}
{% endfor %}

## The Show

### What is "sudomaze"?

### What is the schedule?

### When did this start?

### How can I help?

### What are the next projects you're going to tackle?

### How can I suggest a topic or project?

### 

