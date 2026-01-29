---
layout: page
title: Articles
description: Articles
sitemap: true
shift: false
heading_content: |
  **&larr;<i class="fa fa-home"></i>[Home](/)**
---

<ul>
{% for page in site.pages %}
  {% if page.dir == "/search/" and page.name != "index.md" %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>