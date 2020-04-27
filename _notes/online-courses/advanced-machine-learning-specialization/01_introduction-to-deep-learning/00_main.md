---
layout: post
title: Introduction to Deep Learning
permalink: /notes/online-courses/advanced-machine-learning-specialization/introduction-to-deep-learning
category: "Online Courses"
tag: "Advanced Machine Learning Specialization"
---

{% assign parent_path = page.path | split:'/' | last %}
{% assign parent_path = page.path | remove:  parent_path %}

{% for file in site.static_files %}
{% if file.path contains parent_path %}
{% assign file_name = file.path | remove:  parent_path | remove:  "/" %}

{% include_relative {{ file_name }} %}

{% endif %}
{% endfor %}
