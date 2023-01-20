var i = 0;
var txt = 'Shreya Pahuja';
var speed = 200;

window.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("my-name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
