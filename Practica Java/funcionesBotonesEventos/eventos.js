// var input = document.getElementById("input");

// input.onblur = function(){
//     alert("hola");
// } 


// var select = document.getElementById("select");

// select.onchange = function () {
//     alert("hola");
// }


// var input = document.getElementById("input");

// input.onfocus = function() { 
//     alert("input onfocus")
// }


// var input = document.getElementById("ondown");

// input.onkeydown = function () {
//     alert("input onkeydown")
// }

// var input = document.getElementById("ondown");

// window.onload = function () {
//     alert("input onload")
// }



var input = document.getElementById("input");

var imagen = document.getElementById("imagen");

imagen.onmouseover = function () {
    imagen.classList.remove("w-1/4");
    imagen.classList.add("w-2/4")
}


imagen.onmouseout = function () {
    imagen.classList.add("w-1/4");
    imagen.classList.remove("w-2/4")
}