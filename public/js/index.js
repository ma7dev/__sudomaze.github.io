
// CV page, toggle display for courses list
var coursesBtn = document.getElementById("courses-btn");
var coursesList = document.getElementById('courses-list');
if(coursesBtn != null){
  coursesBtn.addEventListener("click", function(){
    coursesList.classList.toggle('hide');
  });
}
