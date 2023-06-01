const boxred = document.getElementById('boxred');

// Aceseder a evento click 
boxred.addEventListener('click', function(){
    // console.log("Has dado click");
    alert ('has dado click');
}); 

// acceder evento mouseover 
boxred.addEventListener('mouseover', function(){
    boxred.style.background = '#c0c0c0';
});


boxred.addEventListener('mouseout', function () {
    boxred.style.background = 'red';
});






// Tarea 
// Elavorar en js 3 botones 
// boton 1 : al darle click debera mostrar una lista de colores favoritos 5 como minimo 
// botton 2 al darle click debera mostrar una tabla de tareas la tabla llevara como columnas la tarea descripcion y estado
//  botton 3 al estar sobre el boton desaparecera los demas bottones y tendra que aparecer un contenedor con el titulo sobre mi y un parrafo con su descripcion

