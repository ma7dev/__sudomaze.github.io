## Skills (<span class="btn  btn-sm btn-info">Proficient</span>,<span class="btn  btn-sm btn-primary">Familiar</span>)
{% for member in site.data.cv.skills %}
### **{{ member.title }}**
{% if member.title == "Human Languages" %}
{% for tool in member.tools %}
<p style="display:inline;"><sup class="btn  btn-sm btn-info">{{ tool.title }} <em>({{ tool.level }})</em></sup></p>
{% endfor %}
{% else %}
{% for tool in member.tools %}
{% if tool.proficient == "1" %}
<p style="display:inline;"><sup class="btn  btn-sm btn-info">{{ tool.title }}</sup></p>
{% else %}
<p style="display:inline;"><sup class="btn  btn-sm btn-primary">{{ tool.title }}</sup></p>
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
