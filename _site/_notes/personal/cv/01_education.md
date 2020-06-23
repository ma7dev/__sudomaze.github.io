## Education

{% for member in site.data.cv.ed %}

* **{{ member.school }}** <button  data-toggle="modal" data-target="#showCourses-{{ forloop.index }}" class="btn btn-primary btn-sm pb-0 pt-0"  type="button">Show Courses</button> <span class="float-right btn  btn-sm btn-danger"><i class="fa fa-calendar"></i> {{ member.date }}</span>
<br><sup><i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i>{{ member.location }}</sup>
    {% if member.major %}
    * Major: *{{ member.major }}* 
    {% endif %}
    {% if member.minor %}
    * Minor: *{{ member.minor }}*
    {% endif %}

<div class="modal fade" id="showCourses-{{ forloop.index }}" tabindex="-1" role="dialog" aria-labelledby="showCoursesTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="showCoursesTitle">List of Courses</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
        {% for list in member.courses %}
            <div class="col-md-12 row">
                <h4 class="col-md-12 text-center">{{list.list_name}}</h4>
                <div class="col-md-12">
                    <ul class="row">
                    {% for course in list.list_courses %}
                        <li class="col-md-6 pl-0 pr-3" data-toggle="tooltip" data-placement="top" title="{{course.course_description}}">{{course.course_name}} ({{course.course_number}})</li>
                    {% endfor %}    
                    </ul>
                </div>
            </div>
        {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div>
{% endfor %}