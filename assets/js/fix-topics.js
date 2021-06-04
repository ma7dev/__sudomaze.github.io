const content = document.getElementsByClassName("content")[0];
const links = content.childNodes[1].getElementsByClassName("tooltip");
const topics = document.getElementById("post-topics");

for (var i = 0; i < links.length; i++) {
    topics.appendChild(links[i].getElementsByTagName("a")[0]);
    topics.innerHTML += " ";
}
