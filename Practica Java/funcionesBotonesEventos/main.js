const contenedor = document.getElementById("contenedor");
contenedor.style.display = 'flex';
contenedor.style.justifyContent = 'center';

// Estoy agregando texto al elemento padre 
const parrafo = document.createElement('p');
// parrafo.innerText = "Esto es un parrafo";
parrafo.style.color = 'red';
parrafo.style.fontSize = '25px';
contenedor.appendChild(parrafo);


// cuadro rojo

const cuadroRojo = document.createElement('div');
cuadroRojo.innerText = "primer cuadro";
cuadroRojo.style.color = 'white';
cuadroRojo.style.width = '200px';
cuadroRojo.style.height = '200px'; 
cuadroRojo.style.backgroundColor = 'red';
cuadroRojo.style.fontSize = '25px';
cuadroRojo.style.margin = '10px';
cuadroRojo.style.flexWrap = 'wrap';
cuadroRojo.style.display = 'flex';
cuadroRojo.style.justifyContent = 'center';
cuadroRojo.style.cursor = 'pointer';
contenedor.appendChild(cuadroRojo);

// imagen cuadro rojo

const imgRojo = document.createElement("img");
imgRojo.style.alignItems = 'center';
imgRojo.style.width = '100px';
imgRojo.style.height = '100px';
const urlimg = document.createAttribute('src'); 
urlimg.value = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ef1e284-dc09-45bb-a1ee-d8c65a1ae170/db6tvwj-a1561120-af75-4da6-af2b-86c38ca4bfaf.png/v1/fill/w_250,h_291,strp/ssbn_pixelart_05_link_by_mighty355_db6tvwj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yOTEiLCJwYXRoIjoiXC9mXC83ZWYxZTI4NC1kYzA5LTQ1YmItYTFlZS1kOGM2NWExYWUxNzBcL2RiNnR2d2otYTE1NjExMjAtYWY3NS00ZGE2LWFmMmItODZjMzhjYTRiZmFmLnBuZyIsIndpZHRoIjoiPD0yNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4d-rd3uq07z3CqQURV0rqMCL9BHMD64cxihhX8zG3gI';
imgRojo.setAttributeNode(urlimg)

cuadroRojo.appendChild(imgRojo);

const idCuadroRojo = document.createAttribute("id");
idCuadroRojo.value = 'boxred';
cuadroRojo.setAttributeNode(idCuadroRojo);


// cuadro verde


const cuadroVerde = document.createElement('div');
cuadroVerde.innerText = "Segundo cuadro";
cuadroVerde.style.color = 'white';
cuadroVerde.style.width = '200px';
cuadroVerde.style.height = '200px';
cuadroVerde.style.backgroundColor = 'green';
cuadroVerde.style.fontSize = '25px';
cuadroVerde.style.margin = '10px';
cuadroVerde.style.flexWrap = 'wrap';
cuadroVerde.style.display = 'flex';
cuadroVerde.style.justifyContent = 'center';
contenedor.appendChild(cuadroVerde);

// imagen cuadro verde

const imgVerde = document.createElement("img");
imgVerde.style.alignItems = 'center';
imgVerde.style.width = '100px';
imgVerde.style.height = '100px';
const urlimgVerde = document.createAttribute('src');
urlimgVerde.value = 'https://i.pinimg.com/originals/f1/ed/46/f1ed4644e2e836226beaed440f194f83.png';
imgVerde.setAttributeNode(urlimgVerde)

cuadroVerde.appendChild(imgVerde);

// cuadro azul


const cuadroAzul = document.createElement('div');
cuadroAzul.innerText = "Tercer cuadro";
cuadroAzul.style.color = 'white';
cuadroAzul.style.width = '200px';
cuadroAzul.style.height = '200px';
cuadroAzul.style.backgroundColor = 'blue';
cuadroAzul.style.fontSize = '25px';
cuadroAzul.style.margin = '10px';
cuadroAzul.style.flexWrap = 'wrap';
cuadroAzul.style.display = 'flex';
cuadroAzul.style.justifyContent = 'center';
contenedor.appendChild(cuadroAzul); 

//  imgen del cuadro azul

const imgAzul = document.createElement("img");
imgAzul.style.alignItems = 'center';
imgAzul.style.width = '100px';
imgAzul.style.height = '100px';
const urlimgAzul = document.createAttribute('src');
urlimgAzul.value = 'img/zelda1.png';
imgAzul.setAttributeNode(urlimgAzul)

cuadroAzul.appendChild(imgAzul);

// fin del codigo