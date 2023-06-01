// const contenedor = document.getElementById('contenedor');

// function calcularEdad(fecha) {
//     let hoy = new Date();
//     let cumpleaños = new Date(fecha);
//     let edad = hoy.getFullYear() - cumpleaños.getFullYear();
//     let m = hoy.getMonth() - cumpleaños.getMonth();

//     if (m < 0 || (m === 0 && hoy.getDate() < cumpleaños.getDate())) {
//         edad--;
//     }

//     return edad;
    
// } 
// document.write(edad);




// function calculateAge(birthday) {
//     let birthday_arr = birthday.split("/");
//     let birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
//     let ageDifMs = Date.now() - birthday_date.getTime();
//     let ageDate = new Date(ageDifMs);
//     return Math.abs(ageDate.getUTCFullYear() - 2014);
// }

// let age = calculateAge("07/06/2000");
// document.write("Mi edad es: " + age);

// function calcularEdad(fecha) {
//     // Si la fecha es correcta, calculamos la edad

//     if (typeof fecha != "string" && fecha && esNumero(fecha.getTime())) {
//         fecha = formatDate(fecha, "yyyy-MM-dd");
//     }

//     let values = fecha.split("-");
//     let dia = values[2];
//     let mes = values[1];
//     let año = values[0];

//     // cogemos los valores actuales
//     let fecha_hoy = new Date();
//     let ahora_año = fecha_hoy.getYear();
//     let ahora_mes = fecha_hoy.getMonth() + 1;
//     let ahora_dia = fecha_hoy.getDate();

//     // realizamos el calculo
//     let edad = (ahora_año + 1900) - año;
//     if (ahora_mes < mes) {
//         edad--;
//     }
//     if ((mes == ahora_mes) && (ahora_dia < dia)) {
//         edad--;
//     }
//     if (edad > 1900) {
//         edad -= 1900;
//     }

//     // calculamos los meses
//     let meses = 0;

//     if (ahora_mes > mes && dia > ahora_dia)
//         meses = ahora_mes - mes - 1;
//     else if (ahora_mes > mes)
//         meses = ahora_mes - mes
//     if (ahora_mes < mes && dia < ahora_dia)
//         meses = 12 - (mes - ahora_mes);
//     else if (ahora_mes < mes)
//         meses = 12 - (mes - ahora_mes + 1);
//     if (ahora_mes == mes && dia > ahora_dia)
//         meses = 11;

//     // calculamos los dias
//     let dias = 0;
//     if (ahora_dia > dia)
//         dias = ahora_dia - dia;
//     if (ahora_dia < dia) {
//         ultimoDiaMes = new Date(ahora_año, ahora_mes - 1, 0);
//         dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
//     }

//     return edad + " años, " + meses + " meses y " + dias + " días";
// } document.write(edad);



// function getEdad(dateString) {
//     let hoy = new Date()
//     let fechaNacimiento = new Date(dateString)
//     let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
//     let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
//     if (
//         diferenciaMeses < 0 ||
//         (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
//     ) {
//         edad--
//     }
//     return edad
// }

// function getEdad(dateString) {
//     let hoy = new Date();
//     let fechaNacimiento = new Date(dateString);
// /* [...] */

//     /* [...] */
//     let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
// /* [...] */

//     let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
//     if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate()))



//   if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
//     edad--;
//   }
//   return edad;
// }


// { getEdad("1986/09/26 11:30:00") }

// alert(edad);

const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
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
    return edad;
};

window.addEventListener('load', function () {

    fechaNacimiento.addEventListener('change', function () {

        const e = calcularEdad(this.value);

        if (this.value) {
            edad.innerText = `La edad es: ${e} años `;
        }

        switch (e) {
            case (e == 6):
                console.log("nino");
                break;
        }

    });

    
});
