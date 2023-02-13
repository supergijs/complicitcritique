---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

Critical design practices gave me tools to point out what's 'bad' in the world. But that didn't change much in the world, while giving me a sense of being morally right. With *Complicit Critique* I explore the potential of acknowledging one's complicity as a starting point towards more empathic, constructive and accessible ways of doing critique. 

*What part of myself do I see in what I critique?*

An ongoing research and pedagogical project by [Gijs de Boer](https://supergijs.com/)

Find below some exercises and excerpts from writings.

<hr/>

# Exercises

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
