const contenedor = document.getElementById('contenedor');
let tabla = 2;
let resultados = "";

for (let i = 1; i <= 10; i++) {
    // let tabla2 = i * tabla
    // document.write(i + " * 2 = " + tabla2 + "<br>");
    resultados += `
             <tr>
            <td>
                ${tabla} X ${i} = ${tabla * i}
            </td>
            </tr>`

}
contenedor.innerHTML = `
    <table>
        <tr>
            <td>
                Tabla DEL ${tabla}
            </td>
        </tr>
       
            ${resultados}
        
    </table>            

`;
// function escribirTablaMultiplicar(j) {

//     document.write("<h2>Tabla de multiplicar del " + j + "</h2>");

//     document.write("<ul>");
//     //i++ significa i=i+1;

//     for (i = 1; i <= 10; i++) {
//         document.write("<li>");
//         document.write(j + "x " + i + "= " + j * i);
//         document.write("</li>");
//     }

//     document.write("</ul>");
// }

// escribirTablaMultiplicar(5);


// const tabla = 2;
// let tabla2 ;

// for (let i = 1; i<=10; i++){
//     let tabla2 = i * tabla
//     document.write(i + " * 2 = "+ tabla2 + "<br>" );
// }
