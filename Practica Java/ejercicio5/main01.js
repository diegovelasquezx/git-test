// const contenedor = document.getElementById('contenedor');
// creacion de variable 
const contenedort = document.getElementById('tablita');
const nombre = "jose Eduardo perez";
const dui = "00021184-5";
const nit = "0509-111290-105-1";

// const fechadenacimiento = "11-12-2000";

// crear elemento tabla
const tabla = document.createElement('table');
tabla.className = "table";

tabla.innerHTML = `
    <tr>
        <th>Nombre</th>
        <th>DUI</th>
        <th>NIT</th>
        <th>Fecha de nacimiento</th>
        <th>Edad</th>
        <th>Grupo</th>
        <th>Pension</th>

    </tr>
    <tr>
        <td>
            ${nombre}
        </td>
        <td>
            ${dui}
        </td>
        <td>
            ${nit}
        </td>               
        <td id='fecha2'>     
        </td>
        <td id='edad'>
        </td> 
        <td id='grupo'>
        </td> 
        <td id='pension'>
        </td>  
    </tr>    

`;


contenedort.appendChild(tabla);



const fechaNacimiento = document.getElementById("fechaNacimiento");
console.log(fechaNacimiento);
const edad = document.getElementById("edad");
let valor = document.getElementById("valor");
let fecha2 = document.getElementById("fecha2");
console.log(fecha2);


const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    let valor = "", pension ='', grupo='';
    const añoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    // 2016-07-11
    const añoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = añoActual - añoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    } 
    // return edad;
    if(edad >= 0 && edad <= 12){
        valor = "Niños";
        
        // console.log(valor);
    } else if(edad >= 13 && edad <= 18){
        valor = "Adolescentes";
        
    }  if (edad >= 19 && edad <= 65) {
        valor = "Adultos";
        
    } else if (edad >= 65 && edad <= 100) {
        valor = "Adultos mayores";

    }

    // validacion si aplica pension 
    if (edad >= 0 && edad <= 12) {
        pension = "No aplica";

        // console.log(pension);
    } else if (edad >= 13 && edad <= 18) {
        pension = "No aplica";

    } if (edad >= 19 && edad <= 65) {
        pension = "No aplica";

    } else if (edad >= 65 && edad <= 100) {
        pension = "Pension aprobada";

    }

    // if (edad >=0 && edad <=)
    
    const fechaCompleta = diaNacimiento +'-'+ mesNacimiento+'-'+ añoNacimiento;

    return [edad, valor, fechaCompleta, pension, dui];

};

window.addEventListener('load', function () {

    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            let valores = new Array();
            valores = calcularEdad(this.value);
            edad.innerText =  valores[0] + ` años `;
            grupo.innerText = valores[1];
            fecha2.innerText = valores[2];
            pension.innerText = valores[3];

        }
    });

});

