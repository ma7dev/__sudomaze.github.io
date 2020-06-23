// console.log("disqusPublicKey "+disqusPublicKey)
// console.log("disqusShortname "+disqusShortname)
// console.log("siteUrl "+siteUrl)
// console.log("pageUrl "+pageUrl)
// console.log("pageAccessToken "+pageAccessToken)
// console.log("pagePath "+pagePath)
// console.log("githubRepo "+githubRepo)

// encrypting
// CryptoJS.AES.encrypt("access_token", "Secret Passphrase").toString()
// styling
$(".table thead").addClass("thead-dark");
$("caption").addClass("text-center");
$("figcaption").addClass("text-center");
$("blockquote").addClass("blockquote");

//copy code
function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var langNaming = codeBlock.getAttribute("data-lang");
        var div = document.createElement('div');
        div.className = 'div-code-button';
        var lang = document.createElement('button');
        lang.className = 'lang-code-button code-button';
        lang.type = 'button';
        lang.innerHTML = '<i class="fas fa-code"></i> '+langNaming;
        if(langNaming == "nothing"){
            lang.innerHTML = '<i class="fas fa-code"></i> Jekyll';
        }
        var button = document.createElement('button');
        button.className = 'copy-code-button code-button';
        button.type = 'button';
        button.innerHTML = '<i class="far fa-copy"></i> Copy';
  
        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();
  
                button.innerHTML = 'Copied!';
  
                setTimeout(function () {
                    button.innerHTML = '<i class="far fa-copy"></i> Copy';
                }, 2000);
            }, function (error) {
                button.innerHTML = 'Error';
            });
        });
  
        var pre = codeBlock.parentNode;
        div.appendChild(lang);
        div.appendChild(button);
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(div, highlight);
        } else {
            pre.parentNode.insertBefore(div, pre);
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
  $("#content-btn-sm").click(function() {
      $("#discussion-btn-sm").removeClass("active");
      $("#page-discussion").css("display", "none");
      $("#content-btn-sm").addClass("active");
      $("#page-content").css("display", "block");
  });
  $("#discussion-btn-sm").click(function() {
      $("#content-btn-sm").removeClass("active");
      $("#page-content").css("display", "none");
      $("#discussion-btn-sm").addClass("active");
      $("#page-discussion").css("display", "block");
  });    
}

// page date
$.getJSON("https://api.github.com/repos/"+githubRepo+"/commits?path=/"+pagePath, { Authorization: "token "+pageAccessToken})
 .done(function(data) {
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

// print page
$("#print-page").click(function() {
    window.print();
});

// // show courses
// $("#show-courses").click(function(){

// });