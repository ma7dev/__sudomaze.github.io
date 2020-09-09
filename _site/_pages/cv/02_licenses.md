## Licenses & Certifications

{% for member in site.data.cv.cert %}

* **{{ member.name }}** ([{{ member.id }}]({{ member.url }})) [<span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>]
    {% for topic in member.topics %}
    * {{ topic }}
    {% endfor %}
{% endfor %}