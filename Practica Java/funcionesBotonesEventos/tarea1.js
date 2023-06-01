const contenedor = document.getElementById('contenedor');
contenedor.style.display = 'flex';
contenedor.style.justifyContent = 'center';


// CONTENEDOR DE BOTON 1
// --------------------------------------------------------------------------------------------
const boton1 = document.createElement('div');
boton1.style.color = 'black';
boton1.style.width = '400px';
boton1.style.height = '400px';
boton1.style.backgroundColor = 'white';
boton1.style.margin = "20px";

const botton = document.createElement('button');
botton.value = 'bntt1';

//boton1.setAttributeNode(botton);
boton1.style.fontSize = '25px';
contenedor.appendChild(boton1);

// PARRAFO DE BOTON
const parrafo1 = document.createElement("p");
parrafo1.innerText = "Colores favoritos";
boton1.appendChild(parrafo1);

// BOTON
const bt1 = document.createElement('button');
bt1.innerText = 'BOTON 1'
bt1.style.border = 'none';
bt1.style.width = '200px';
bt1.style.height = '25px';
bt1.fontSize = '40px';
bt1.setAttribute('id', 'bt1');
boton1.appendChild(bt1);

// DIV DE LISTA 1
const divList1 = document.createElement('div');
divList1.setAttribute('style', 'display: none;');
divList1.setAttribute('id', 'divList1');

// TITULO DE LISTA
const divTit1 = document.createElement('div');
divTit1.innerText = "MIS COLORES FAVORITOS";
divList1.appendChild(divTit1);

const arr = ['Yellow', 'Red', 'pink', 'Black', 'Gray'];
const cont = document.getElementById('btn1');

// CREACION DE LISTA
const ul = document.createElement('ul');
//ul.setAttribute ('style', 'padding: 0; margin: 0;');
//ul.setAttribute('id', 'theList');

for (i = 0; i < arr.length; i++) {
    const li = document.createElement('li');	    // create li element.
    li.innerHTML = '<div style="background-color:' + arr[i] + ';">&nbsp;</div>' + arr[i];	                        // assigning text to li using array value.
    li.setAttribute('style', 'display: block;');	// remove the bullets.
    ul.appendChild(li);		// append li to ul.
}
divList1.appendChild(ul);
boton1.appendChild(divList1);


bt1.addEventListener("click", function(){
    if  (document.getElementById('divList1').style.display === "none"){
        document.getElementById('divList1').style.display = "block";
    } else {
        (document.getElementById('divList1').style.display = "none")
    }

});

// CONTENEDOR DE BOTON 2
// --------------------------------------------------------------------------------------------
const boton2 = document.createElement('div');
boton2.style.color = 'black';
boton2.style.width = '400px';
boton2.style.height = '400px';
boton2.style.backgroundColor = 'white';
boton2.style.margin = "20px";

const botton2 = document.createElement('button');
botton2.value = 'bntt2';


boton2.style.fontSize = '25px';
contenedor.appendChild(boton2);

// PARRAFO DE BOTON
const parrafo2 = document.createElement("p");
parrafo2.innerText = "Tareas";
boton2.appendChild(parrafo2);

// BOTON
const bt2 = document.createElement('button');
bt2.innerText = 'BOTON 2';
bt2.style.border = 'none';
bt2.style.width = '200px';
bt2.style.height = '25px';
bt2.fontSize = '40px';
bt2.setAttribute('id', 'bt2');
boton2.appendChild(bt2);


// CONTENEDOR DE BOTON 3
// --------------------------------------------------------------------------------------------
const boton3 = document.createElement('div');
boton3.style.color = 'black';
boton3.style.width = '400px';
boton3.style.height = '400px';
boton3.style.backgroundColor = 'white';
boton3.style.margin = "20px";

const botton3 = document.createElement('button');
botton3.value = 'bntt3';


boton3.style.fontSize = '25px';
contenedor.appendChild(boton3);

// PARRAFO DE BOTON
const parrafo3 = document.createElement("p");
parrafo3.innerText = "descripcion sobre mi";
boton3.appendChild(parrafo3);

// BOTON
const bt3 = document.createElement('button');
bt3.innerText = 'BOTON 3'
bt3.style.backgroundColor = 'red';
bt3.style.border = 'none';
bt3.style.width = '200px';
bt3.style.height = '25px';
bt3.fontSize = '40px';
bt3.setAttribute('id', 'bt3');
boton3.appendChild(bt3);




