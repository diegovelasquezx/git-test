//Definiendo funciones para mostrar/ocultar tablas con contenido
function verColores(){
    elemento = document.getElementById('tableColor');
    elemento.style.display = 'block';
    boton1.style.display = 'none';
    boton11.style.display = 'block';         

}
function noColores(){
    elemento = document.getElementById('tableColor');
    elemento.style.display = 'none';
    boton11.style.display = 'none';
    boton1.style.display = 'block';         

}
function verEstudio(){
    elemento = document.getElementById('tableEstudio');
    elemento.style.display = 'block';
    boton2.style.display = 'none';
    boton12.style.display = 'block';
}
function noEstudio(){
    elemento = document.getElementById('tableEstudio');
    elemento.style.display = 'none';
    boton12.style.display = 'none';
    boton2.style.display = 'block';         

}
function verInfo(){
    elemento = document.getElementById('tableInfo');
    elemento.style.display = 'block';
    boton3.style.display = 'none';
    boton13.style.display = 'block';
}
function noInfo(){
    elemento = document.getElementById('tableInfo');
    elemento.style.display = 'none';
    boton13.style.display = 'none';
    boton3.style.display = 'block';         

}

//Definiendo elementos del container
//Definiendo botón de colores
const contenedor = document.getElementById('contenedor2');
const boton1 = document.createElement('button');
boton1.addEventListener("click", verColores);
boton1.innerText ="Ver Colores";
boton1.className = "btn btn-primary";
contenedor.appendChild(boton1);
 
const boton11 = document.createElement('button');
boton11.addEventListener("click", noColores);
boton11.innerText ="Ocultar Información";
boton11.className = "btn btn-warning";
boton11.style.display = "none";
contenedor.appendChild(boton11);

//Definiendo botón de tareas
const contenedor3 = document.getElementById('contenedor3');
const boton2 = document.createElement('button');
boton2.addEventListener("click", verEstudio);
boton2.innerText ="Ver Estudios";
boton2.className = "btn btn-info";
contenedor3.appendChild(boton2);
 
const boton12 = document.createElement('button');
boton12.addEventListener("click", noEstudio);
boton12.innerText ="Ocultar Información";
boton12.className = "btn btn-warning";
boton12.style.display = "none";
contenedor3.appendChild(boton12);

//Definiendo botón sobre mi
const contenedor4 = document.getElementById('contenedor4');
const boton3 = document.createElement('button');
boton3.addEventListener("click", verInfo);
boton3.innerText ="Sobre mí";
boton3.className = "btn btn-success";
contenedor4.appendChild(boton3);
 
const boton13 = document.createElement('button');
boton13.addEventListener("click", noInfo);
boton13.innerText ="Ocultar Información";
boton13.className = "btn btn-warning";
boton13.style.display = "none";
contenedor4.appendChild(boton13);


// BLOQUE PARA DEFINIR TABLA DE COLORES
const tablita1 = document.getElementById('tablas1');
const table1 = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table1.appendChild(thead);
table1.appendChild(tbody);
table1.style.display="none";
table1.id="tableColor";
table1.className="table";
tablita1.appendChild(table1);

const row_1 = document.createElement('tr');
row_1.colspan="2";
const encabezado = document.createElement('th');
encabezado.innerHTML = "Colores favoritos";
encabezado.colSpan="4";

const row_2 = document.createElement('tr');
const valor1 = document.createElement('th');
valor1.innerText ="1";
valor1.scope="row";
const valor11 = document.createElement('td');
valor11.innerText ="Rojo Escarlata";

const row_3 = document.createElement('tr');
const valor2 = document.createElement('th');
valor2.innerText ="2";
valor2.scope="row";
const valor12 = document.createElement('td');
valor12.innerText ="Azul Marino";

row_1.appendChild(encabezado);
thead.appendChild(row_1);
//INSERTANDO SEGUNDA FILA A TABLA
row_2.appendChild(valor1);
row_2.appendChild(valor11)
tbody.appendChild(row_2);
//INSERTANDO TERCERA FILA A TABLA
row_3.appendChild(valor2);
row_3.appendChild(valor12)
tbody.appendChild(row_3);


// BLOQUE PARA DEFINIR TABLA DE ESTUDIOS
const tablita2 = document.getElementById('tablas2');
const table2 = document.createElement('table');
const thead2 = document.createElement('thead');
const tbody2 = document.createElement('tbody');

table2.appendChild(thead2);
table2.appendChild(tbody2);
table2.style.display="none";
table2.className="table";
table2.id="tableEstudio";
tablita2.appendChild(table2);

const row_11 = document.createElement('tr');
const encabezado1 = document.createElement('th');
encabezado1.innerHTML = "Estudios pendientes";
encabezado1.colSpan=4;

const row_22 = document.createElement('tr');
const valor112 = document.createElement('th');
valor112.innerText ="Estudio 1";
valor112.scope="row";
valor112.colspan="4";
const valor111 = document.createElement('td');
valor111.innerText ="Estudiar para examen final";
valor111.colspan="2";
const valor14 = document.createElement('td');
valor14.innerText ="Pendiente";

const row_33 = document.createElement('tr');
const valor22 = document.createElement('th');
valor22.innerText ="Estudio 2";
valor22.scope="row";
const valor222 = document.createElement('td');
valor222.innerText ="Estudiar para examen final 2";
valor222.colspan="2";
const valor122 = document.createElement('td');
valor122.innerText ="Finalizado";

row_11.appendChild(encabezado1);
thead2.appendChild(row_11);
//INSERTANDO SEGUNDA FILA A TABLA
row_22.appendChild(valor112);
row_22.appendChild(valor111)
row_22.appendChild(valor14)
tbody2.appendChild(row_22);
//INSERTANDO TERCERA FILA A TABLA
row_33.appendChild(valor22);
row_33.appendChild(valor222)
row_33.appendChild(valor122)
tbody2.appendChild(row_33);