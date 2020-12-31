---
layout: post
title: Thesis
category: project
permalink: /projects/thesis
display: "/assets/gif"
github_url: https://github.com/sudomaze/thesis
comments: True
date: 2020-11-06
---

{% assign parent_path = page.path | split:'/' | last %}
{% assign parent_path = page.path | remove:  parent_path %}

{% for file in site.static_files %}
{% if file.path contains parent_path %}
{% assign file_name = file.path | remove:  parent_path | remove:  "/" %}

{% include_relative {{ file_name }} %}

{% endif %}
{% endfor %}