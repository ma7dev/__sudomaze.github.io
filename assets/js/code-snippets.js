// var element = document.getElementsByTagName("code");
// console.log(element[0].attributes[1].value);
// var code_info = document.createElement("span");
// code_info.innerHTML = element[0].attributes[1].value;
// element[0].prepend(code_info);

//copy code
function addCopyButtons(clipboard) {
    document.querySelectorAll("pre > code").forEach(function (codeBlock) {
        var langNaming = codeBlock.getAttribute("data-lang");
        var div = document.createElement("div");
        div.className = "div-code-button";
        var lang = document.createElement("span");
        lang.className = "lang-code-button code-button";
        lang.type = "button";
        lang.innerHTML = '<i class="fas fa-code"></i> ' + langNaming;
        if (langNaming == "nothing") {
            lang.innerHTML = '<i class="fas fa-code"></i> Jekyll';
        }
        var button = document.createElement("button");
        button.className = "copy-code-button code-button";
        button.type = "button";
        button.innerHTML = '<i class="far fa-copy"></i> Copy';

        button.addEventListener("click", function () {
            clipboard.writeText(codeBlock.innerText).then(
                function () {
                    /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                    button.blur();

                    button.innerHTML = "Copied!";

                    setTimeout(function () {
                        button.innerHTML = '<i class="far fa-copy"></i> Copy';
                    }, 2000);
                },
                function (error) {
                    button.innerHTML = "Error";
                }
            );
        });

        var pre = codeBlock.parentNode;
        div.appendChild(lang);
        div.appendChild(button);
        if (pre.parentNode.classList.contains("highlight")) {
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
    script.onload = function () {
        addCopyButtons(clipboard);
    };
}
