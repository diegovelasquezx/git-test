// Ejercicio 1

var edad = 20; 

if (edad < 18){
    console.log("Eres menor de Edad")
} else{
    console.log("Eres mayor de edad")
}


// Ejerccio 2 

var Estatura = "2.5m"; 

if (Estatura => "1.5m"){
    console.log("Eres de estatura grande")
} else{
    console.log("Eres de estatura pequeña")
}

//Ejercicio 3 

var porcentaje = "100%"; 

if (porcentaje => "20%"){
    console.log("Aun Tienes carga en tu Telefono")
} else{
    console.log("Casi se te apaga")
}

//Ejercicio 4 

var Tiempo = 9; 

if (tiempo <= 11.59) {
    console.log("Buenos dias")
} else if (tiempo < 17){
    console.log("Buenas tardes")
} else {
    console.log("buenas noches")
}

//Ejercicio 5 

var descuento, precio, total;
precio = parseFloat(prompt('Ingrese el precio :'));
if(precio >0 && precio  < 100){
    console.log("Su compra no aplica para descuento, total:" + precio);
} else if(precio >= 100 && precio <=200 ){
    total = precio * 0.05;
    descuento = precio - total;
    console.log("Su compra tiene 5% de descuento, total:" + descuento);
} else if(precio >= 200 && precio <=300 ){
    total = precio * 0.10;
    descuento = precio - total;
    console.log("Su compra tiene 10% de descuento, total:" + descuento);
} else if (precio >= 300 && precio <=400 ){
    total = precio * 0.15;
    descuento = precio - total;
    console.log("Su compra tiene 15% de descuento, total:" + descuento);
} else if (precio >= 400 ){
    total = precio * 0.20;
    descuento = precio - total;
    console.log("Su compra tiene 20% de descuento, total:" + descuento);
}
