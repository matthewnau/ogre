/*function run () {
    var text = document.getElementById('sourceTA').value,
    target = document.getElementById('targetDiv'),
    converter = new showdown.Converter(),
    html = converter.makeHtml(text);
    
    target.innerHTML = html;
}*/
function run () {
    var text = document.getElementById('sourceTA').value;
    target = document.getElementById('targetDiv');
    
    target.innerHTML = marked(text);
}

document.getElementsByTagName("button")[0].onclick = function () {run()};