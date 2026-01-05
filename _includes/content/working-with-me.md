{% if page.articles and page.articles.size > 1 %}
#### In this document
<ul>
{% for item in page.articles %}
<li><a href="#{{ item[0] }}" title="Click to scroll down to section.">{{ item[1].heading }}</a></li>
{% endfor %}
</ul>
{% else %}
I'm **excited** about the possibility of working together on your project! 🤩

You probably have questions about **what it's like to work with me** and how the process works. I've put together this page that walks through my usual process step by step—from our first call through launch and beyond.

My goal is to make our time together as productive as possible. By reviewing this ahead of time, you'll have a clear picture of what to mostly expect, and we can dive right into the important stuff when we connect!
{% endif %}

---

**Ready to work together?** &mdash; <a href="/#contact" class="strong">Contact me</a> and let's get started!

---