---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% include mirror.html %}

<!-- # hypocrit -->
Critical design practices gave me tools to point out what's 'bad' in the world. But that didn't change much in the world, while giving me a sense of being morally right. 

On *hypocrit* I gather lessons from teaching and writing, and explore the potential of acknowledging your complicity as a starting point for more empathic, constructive and accessible critical works.

<!-- *What part of myself do I see in what I critique?* -->

Find below some exercises and excerpts from writings.

<hr/>

# Tools



## research question generator

What is your
A: topic
B: phenomenon (what does it do?)
C: context
    D: home research field (what do you respond to?)
    E: import research field (where do you draw from?)
F: method
G: format

Main RQ: How does A B C?

SQ1: How does A B? [background]

SQ2: How is C B-ed? [lens]

SQ3: How to research B of A? [method]

SQ4: What do we see? [discussion]

SQ5: What do these results say about how A B C? [conclusion]

SQ6: What does this mean for A and C? [implications]

# Writings

<ul>
  {% assign writing = site.pages | where_exp: "page", "page.permalink contains '/writing'" %}
    {% for page in writing %}
    {% if page.title %}
    <li><a href="{{ page.url | absolute_url }}">{{ page.title }}</a></li>
    {% endif %}
    {% endfor %}
</ul>

