## Projects

{% for member in site.data.projects %}
    {% if member.publish == false %}
* **{{ member.title }}** [<span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>]
    {% else %}
* **[{{ member.title }}](/notes/{{ member.tag }})** [<span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>]
    {% endif %}
    {% for detail in member.accomplishments %}
    * {{ detail }}
    {% endfor %}
    <br>
{% endfor %}