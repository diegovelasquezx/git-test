// Declarando variables
// const a = 2;
// const b = 4; 
// let resultado; 

// // creando suma 
// function suma (a, b){
//     resultado = a + b;
    // alert("La suma de "+a+" y de "+b+" es " + resultado); 

// }
// // invocando funcion suma con dos parametros 
// suma(a, b); 


const saludo = "Resultados:"; 
function saludar (saludo){
    console.log(saludo);
}
saludar(saludo); 

var boton = document.getElementById("boton");


function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function porcentaje(a, b) {
    return a % b;
}

function elevar(a, b) {
    return a ** b;
}

boton.onclick = function () {

    var num1 = parseInt(document.getElementById("num1").value);

    var operador = document.getElementById("operador").value;

    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 !== 0 && num2 !== 0 && operador === "/") {
        console.log("El resultado de la division es: "+dividir(num1, num2))
    } else if (operador === "-") {
        console.log("El resultado de la resta es: " +restar(num1, num2))
    } else if (operador === "*") {
        console.log("El resultado de la multiplicacion es: " +multiplicar(num1, num2))
    } else if (operador === "+") {
        console.log("El resultado de la suma es: " +sumar(num1, num2))
    } else if (operador === "%") {
        console.log("El resultado del porcentaje es: " +porcentaje(num1, num2))
    } else if (operador === "**") {
        console.log("El resultado de elevacion es: " +elevar(num1, num2))
    } else {
        console.log("0 no es divisible")
    }


}
