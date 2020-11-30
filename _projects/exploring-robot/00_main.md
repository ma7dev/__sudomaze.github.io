---
layout: post
title: Exploring Robot
category: project
permalink: /projects/exploring-robot
display: "/assets/gif"
date: 2018-12-06
---

{% assign parent_path = page.path | split:'/' | last %}
{% assign parent_path = page.path | remove:  parent_path %}

{% for file in site.static_files %}
{% if file.path contains parent_path %}
{{file.path}}
{% assign file_name = file.path | remove:  parent_path | remove:  "/" %}

{% include_relative {{ file_name }} %}

{% endif %}
{% endfor %}