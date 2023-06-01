const contenedor = document.getElementById('contenedor'); 



const numbers = [1, 5, 10, 15]; 
const doubles = numbers.map(function(x) {
    return x * 2;
}); 

// console.log();

// const dias = new Array("domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"); 
// contenedor.innerHTML = ''Dias de la semana'; 
const dias = ['domingo', 'lunes','martes', "miércoles", "jueves", "viernes", "sábado"];
dias.map(dia => {
   contenedor.innerHTML +=`<li>${dia}</li>`;
});