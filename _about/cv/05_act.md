## Extracurricular Activities

{% for member in site.data.cv.act %}
* **{{ member.title }}** <span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>
<br><sup><i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i>{{ member.location }}</sup>
<br><sup>*{{ member.position }}*</sup>
    {% for detail in member.details %}
    * {{ detail }}
    {% endfor %}
{% endfor %}