const formulario = document.getElementById('myform');
const recuperarDatos = document.getElementById('recuperarDatos')

formulario.addEventListener('submit', function(e){
    e.preventDefaul;

    localStorage.nombre = document.getElementById('nombre').value;
    localStorage.password = document.getElementById('password').value;
})

recuperarDatos.addEventListener('click', function() {
    if(localStorage.nombre != undefined && (localStorage.password != undefined)){
        document.getElementById('datos').innerHTML = "Nombre: " + localStorage.nombre+" Password: "+localStorage.password
    } else {
        document.getElementById('datos').innerHTML = "No ha introducido sus datos"
    }



})