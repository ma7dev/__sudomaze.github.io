---
layout: publication
title: Discriminative Appearance Modeling with Multi-track Pooling for Real-time Multi-object Tracking
category: publication
type: report
authors:
    - name: "Chanho Kim"
      url: https://www.cc.gatech.edu/~ckim314/
    - name: "Mazen Alotaibi"
      url: http://sudomaze.dev
    - name: "Fuxin Li"
      url: http://web.engr.oregonstate.edu/~lif/
permalink: /publications/gabor
publication: "Conference on Computer Vision and Pattern Recognition (CVPR21)​"
date: 2020-12-01
pdf_url:
code_url:
---

{% assign parent_path = page.path | split:'/' | last %}
{% assign parent_path = page.path | remove:  parent_path %}

{% for file in site.static_files %}
{% if file.path contains parent_path %}
{% assign file_name = file.path | remove:  parent_path | remove:  "/" %}

{% include_relative {{ file_name }} %}

{% endif %}
{% endfor %}
