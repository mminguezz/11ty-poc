---
title: Hello 11ty
layout: "base.njk"
---

Hello 11ty, a simpler static site generator.


## Blog Posts

{% for post in collections.posts %}
[{{ post.data.title }}]({{post.url}})
{% endfor %}
