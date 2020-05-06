## Education

{% for member in site.data.cv.ed %}

* **{{ member.school }}** <span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>
<br><sup><i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i>{{ member.location }}</sup>
    * Major: *{{ member.major }}*
    * Minor: *{{ member.minor }}*

{% endfor %}