const fecha = new Date("2000-06-07");

const contenedor = document.getElementById('contenedor');

const tabla = document.createElement('table');



contenedor.appendChild(tabla);


tabla.innerHTML = `

<tr>
    <th>
        Año
    </th>
    <th>
        Mes
    </th>
    <th>
        Dia
    </th>    
</tr>

<tr>
    <td>
        ${fecha.getFullYear()}
    </td>
    <td>
        ${fecha.getMonth() + 1}
    </td>
    <td>
        ${fecha.getDate() + 1}
    </td>    
</tr>

`


//  variables