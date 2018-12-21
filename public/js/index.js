// Menu button
$(function() {     
  $('#menu-toggle').on('click', function(e) {
    e.preventDefault();
    $('#menu').slideToggle();
    $(this).toggleClass('open');
  });
});
// CV page, toggle display for courses list
var coursesBtn = document.getElementById("courses-btn");
var coursesList = document.getElementById('courses-list');
if(coursesBtn != null){
  coursesBtn.addEventListener("click", function(){
    coursesList.classList.toggle('hide');
  });
}
// Goals page, loading bar
$( document ).ready(function() {
  $('.loading-bar').each(function(index) {
    var elem = document.getElementsByClassName("loading-bar")[index]; 
    elem.style.width = '0%';  
    elem.innerHTML = '0%';
    var maxVal = parseInt($(this).attr('class').split(' ')[1]);
    var widthVal = 1;
    var id = setInterval(function() {
      if (widthVal >= maxVal) {
        clearInterval(id);
      } else {
        widthVal++; 
        elem.style.width = widthVal + '%'; 
        elem.innerHTML = widthVal * 1 + '%';
      }
    }, 10);
  });
});