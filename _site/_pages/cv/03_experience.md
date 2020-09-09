## Experience

{% for member in site.data.cv.ex %}

* **{{ member.position }}** [<span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>]
<br><sup>*{{ member.company }}*</sup>
<br><sup><i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i>{{ member.location }}</sup>
    {% for detail in member.details %}
    * {{ detail }}
    {% endfor %}
{% endfor %}