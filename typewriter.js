"use strict";''
// en metode (tak til marikka)
window.addEventListener("DOMContentLoaded", init);

let typeWritten;
let text;
let length;
let i = 0;

function init() {
    typeWritten = document.querySelector(".typewritten");
    text = typeWritten.textContent;
    length = text.length;
    typeWritten.textContent = "";

    loop();

}

function loop(){

if (length > i ){
    typeWritten.textContent += text.charAt(i);
    i++;
    setTimeout(loop, 500);
}
}
// en anden metode
/* 
window.addEventListener("DOMContentLoaded", init);
let text = document.querySelector(".typewritten").textContent;
let i = 0;

//init 
function init(){
    console.log(text);
    //sæt h1 til null = ingen content
    document.querySelector(".typewritten").textContent = null;

    //start loop
    loop();

}

function loop(){
    // show the i'th letter (0)
    let letter = text.substring(0, i);

    document.querySelector(".typewritten").textContent = letter;
    i++;

    let length = text.length;

    if (i <= length) {
        setTimeout(loop, 1000);
    }


} */



