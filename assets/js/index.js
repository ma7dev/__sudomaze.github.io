// LaTeX rendering
MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [ ['$','$'], ["\\(","\\)"] ],
        processEscapes: true
    }
});
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
(function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://sudomaze.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
var disqusPublicKey = "{{ site.disqus.public_key}}";
var disqusShortname = "{{ site.disqus.shortname}}";

$.ajax({
    type: 'GET',
    url: 'https://disqus.com/api/3.0/threads/set.json?thread:link=https://sudomaze.dev{{ page.url }}&forum='+disqusShortname+'&api_key='+disqusPublicKey,
    cache: false,
    dataType: 'json',
    success: function (result) {
    console.log("https://sudomaze.dev");
    console.log("{{ site.url }}");
    console.log("https://sudomaze.dev{{ page.url }}");
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