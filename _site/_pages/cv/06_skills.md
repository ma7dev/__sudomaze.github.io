## Skills <span>(<span style="color: #00aaaa">Proficient</span>, <span style="color: #800080">Familiar</span>)</span>
{% for member in site.data.cv.skills %}
### **{{ member.title }}**
<p>
    {% if member.title == "Human Languages" %}
        {% for tool in member.tools %}
            {% if forloop.index == forloop.length %}
                and <span style="display:inline;color: #00aaaa">{{ tool.title }} <em>({{ tool.level }})</em></span>.
            {% else %}
                <span style="display:inline;color: #00aaaa">{{ tool.title }} <em>({{ tool.level }})</em></span>,
            {% endif %}
        {% endfor %}
    {% else %}
        {% for tool in member.tools %}
            {% if forloop.index == forloop.length %}
                {% if tool.proficient == "1" %}
                    and <span style="color: #00aaaa">{{ tool.title }}</span>.
                {% else %}
                    and <span style="color: #800080">{{ tool.title }}</span>.
                {% endif %}
            {% else %}
                {% if tool.proficient == "1" %}
                    <span style="color: #00aaaa">{{ tool.title }}</span>,
                {% else %}
                    <span style="color: #800080">{{ tool.title }}</span>,
                {% endif %}
            {% endif %}
        {% endfor %}
    {% endif %}
</p>
{% endfor %}
