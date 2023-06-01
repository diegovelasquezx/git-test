// const fecha = new day(),
//     horas = fecha.gethours(),
//     minutos = fecha.getminutes,
//     segundos = fecha.getseconds();



// const phoras = document.getElementById('horas'),
// const pminutos = document.getElementById('minutos'),
//     psegundos = document.getElementById('segundos');

// function => () {


//     // if (horas => 12) {
//     //     horas = horas - 12;
//     // }
// };


function mostrareloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("reloj").innerHTML = horas + ':' + minutos + ':' + segundos;
}

window.onload = function () {
    setInterval(mostrareloj, 1000);
}