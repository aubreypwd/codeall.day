<ul>
{% for page in site.pages %}
  {% if page.dir == "/search/" and page.name != "index.html" %}
    <li>
      <article>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </article>
    </li>
  {% endif %}
{% endfor %}
</ul>