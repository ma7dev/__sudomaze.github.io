console.log("disqusPublicKey "+disqusPublicKey)
console.log("disqusShortname "+disqusShortname)
console.log("siteUrl "+siteUrl)
console.log("pageUrl "+pageUrl)
console.log("pageAccessToken "+pageAccessToken)
console.log("pagePath "+pagePath)
console.log("githubRepo "+githubRepo)
// styling
$(".table thead").addClass("thead-dark");
$("caption").addClass("text-center");
$("figcaption").addClass("text-center");

//copy code
function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';
  
        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();
  
                button.innerText = 'Copied!';
  
                setTimeout(function () {
                    button.innerText = 'Copy';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });
  
        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre);
        }
    });
}
if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    script.onload = function() {
        addCopyButtons(clipboard);
    };
}

// comments
if(layoutDiscussion){
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://'+disqusShortname+'.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
  $.ajax({
      type: 'GET',
      url: 'https://disqus.com/api/3.0/threads/set.json?thread:link='+siteUrl+pageUrl+'&forum='+disqusShortname+'&api_key='+disqusPublicKey,
      cache: false,
      dataType: 'json',
      success: function (result) {
      for (var i in result.response) {
          console.log(result);
          var count = result.response[i].posts;
          $('#disqus-comment').html(count);
      }
      }
  });
  
  // nav header
  $("#content-btn").click(function() {
      $("#discussion-btn").removeClass("active");
      $("#page-discussion").css("display", "none");
      $("#content-btn").addClass("active");
      $("#page-content").css("display", "block");
  });
  $("#discussion-btn").click(function() {
      $("#content-btn").removeClass("active");
      $("#page-content").css("display", "none");
      $("#discussion-btn").addClass("active");
      $("#page-discussion").css("display", "block");
  });   
}
// mailchimp
window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
    L.start({
        "baseUrl":"mc.us19.list-manage.com",
        "uuid":"decd596a02258ad47cfa3205d",
        "lid":"d497d3c2c1",
        "uniqueMethods":true
    }) 
})
// page date
$.getJSON("https://api.github.com/repos/"+githubRepo+"/commits?path=/"+pagePath+"&access_token="+pageAccessToken, function(data) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var commitDate = new Date(data[0].commit.author.date),
        commitYear = commitDate.getUTCFullYear(),
        commitMonth = month[commitDate.getUTCMonth()],
        commitDay = commitDate.getUTCDate(),
        commitHours = commitDate.getUTCHours(),
        commitMinutes = commitDate.getUTCMinutes();
    $("#page-date").html(commitDay +" "+ commitMonth +" "+ commitYear +", at "+ commitHours+":"+commitMinutes);
});