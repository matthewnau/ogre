/*function run () {
    var text = document.getElementById('sourceTA').value,
    target = document.getElementById('targetDiv'),
    converter = new showdown.Converter(),
    html = converter.makeHtml(text);
    
    target.innerHTML = html;
}*/

var editor = document.getElementsByClassName("editor-wrapper")[0];
var body = document.getElementsByTagName("body")[0];
var textarea = document.getElementsByTagName("textarea")[0];
var preview = document.getElementsByClassName("markdown-body")[0];
var editButton = document.getElementsByClassName("editButton")[0];
var previewButton = document.getElementsByClassName("previewButton")[0];

function run () {
    var text = textarea.value;
    target = document.getElementById('targetDiv');
    
    target.innerHTML = marked(text);
}

function close () {
    editor.classList.add("hidden");
    preview.classList.remove("hidden");
    editButton.classList.remove("hidden");
    previewButton.classList.add("hidden");
}

function toggle () {
    if (editor.classList.contains("hidden")) {
        open();
    }
    else {
        close();
    }
}

function open () {
    editor.classList.remove("hidden");
    preview.classList.add("hidden");
    editButton.classList.add("hidden");
    previewButton.classList.remove("hidden");
}

document.getElementsByTagName("button")[0].onclick = function () {toggle()};
textarea.onkeyup = function () {run()};