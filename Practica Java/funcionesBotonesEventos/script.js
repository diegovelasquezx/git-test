
const saludo = "Hola";


var boton = document.getElementById("boton");

const funcionsumar = () =>{
   alert (sumar(5,5));
}

boton.addEventListener("click", funcionsumar);


// var botton = document.getElementById("boton");

// var result = num1 % num2;

// console.log(num1 >= num2);

function sumar(a,b){
    return a + b;
}

function restar(a,b) {
    return a - b;
}

function multiplicar(a,b) {
    return a * b;
}

function dividir(a,b) {
    return a / b;
}

function porcentaje(a,b) {
    return a % b;
}

function elevar(a,b) {
    return a ** b;
}

boton.onclick = function(){

    var num1 = parseInt(document.getElementById("num1").value);

    var operador = document.getElementById("operador").value;

    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 !== 0 && num2  !== 0 && operador === "/" ) {
        console.log(dividir (num1,num2))
    } else if (operador === "-") {
        console.log(restar(num1,num2))
    } else if (operador === "*") {
        console.log(multiplicar(num1,num2))
    } else if (operador === "+") {
        console.log(sumar(num1,num2))
    } else if (operador === "%") {
        console.log(porcentaje(num1,num2))
    } else if (operador === "**") {
        console.log(elevar(num1,num2))
    } else {
        console.log("0 no es divisible")
    }
}