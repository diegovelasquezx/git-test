// setTimeOut
const saludo = (saludo, veces) =>{
    console.log(saludo, veces +" veces");
}

const saludo2 = () =>{
    console.log("Bienvenidos");
}

const stopInterval = (idInterval) => {
    setTimeout(function(){
        clearInterval(idInterval);
    }, 13000);
}

setTimeout(saludo, 3000, 'Hola Mundo', 1000);

// setInterval
const idInterval = setInterval(saludo2, 4000);
stopInterval(idInterval);

// Tarea hacer un reloj
const container = document.getElementById('container');
let hourFormat, minuteFormat, secondFormat, meridian;

const clock = () =>{
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();

    let timeClock = {
        hour: h,
        minute: m,
        second: s
    }

    const format = formatTime(timeClock);

    container.innerHTML = `
        <div class="mx-2 w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            ${format.hour}
        </div>
        <div class="mx-2 w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            ${format.minute}
        </div>
        <div class="mx-2 w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            ${format.second}
        </div>
        <div class="mx-2 w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            ${format.meridian}
        </div>
    `;
}

setInterval(clock, 1000);

const formatTime = (timeClock) =>{
    // Formato de 12 horas am, pm
    if(timeClock.hour > 12){
        hourFormat = (timeClock.hour - 12);
        meridian = "PM";

        if (hourFormat < 10) {
            hourFormat = "0"+hourFormat;
        }

    } else {
        hourFormat = timeClock.hour;
        meridian = "AM";

        if (hourFormat < 10) {
            hourFormat = "0"+hourFormat;
        }
    } 

    // Formato de minutos
    if (timeClock.minute < 10) {
        minuteFormat = "0"+ timeClock.minute;
    } else {
        minuteFormat = timeClock.minute;
    }
    // Formato de segundos
    if (timeClock.second < 10) {
        secondFormat = "0"+ timeClock.second;
    } else {
        secondFormat = timeClock.second;
    }

    let data = {
        hour: hourFormat,
        meridian: meridian,
        minute: minuteFormat,
        second: secondFormat
    }
    return data;
}



