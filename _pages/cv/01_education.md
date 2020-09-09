## Education

{% for member in site.data.cv.ed %}

* **{{ member.school }}** [<span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>]
<br><sup><i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i>{{ member.location }}</sup>
    {% if member.major %}
    * Major: *{{ member.major }}* 
    {% endif %}
    {% if member.minor %}
    * Minor: *{{ member.minor }}*
    {% endif %}

    {% for list in member.courses %}
      <p><b>{{list.list_name}}</b>:
        {% for course in list.list_courses %}
            {% if forloop.index == forloop.length %}
              <span data-toggle="tooltip" data-placement="top" title="{{course.course_description}}">and {{course.course_name}} ({{course.course_number}}).</span>
            {% else %}
              <span data-toggle="tooltip" data-placement="top" title="{{course.course_description}}">{{course.course_name}} ({{course.course_number}}),</span>
            {% endif %}
        {% endfor %}
      </p>
    {% endfor %}
{% endfor %}