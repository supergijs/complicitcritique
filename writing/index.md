---
layout: default
title: Writing
permalink: /writing
---

# Writing
On complicit critique

<ul>
  {% assign writing = site.pages | where_exp: "page", "page.permalink contains '/writing'" %}
    {% for page in writing %}
    {% if page.title %}
    <li><a href="{{ page.url | absolute_url }}">{{ page.title }}</a></li>
    {% endif %}
    {% endfor %}
</ul>
