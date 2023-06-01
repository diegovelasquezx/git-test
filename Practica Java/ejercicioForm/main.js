const formulario = document.getElementById('formulario');
//const recuperarDatos = document.getElementById('btt1');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    localStorage.nombre = document.getElementById('nombre').value;
    localStorage.Correo = document.getElementById('Correo').value;
    localStorage.password = document.getElementById('password').value;
    localStorage.confirmarContraseña = document.getElementById('confirmarContraseña').value;
});

recuperarDatos.addEventListener('click', function () {
    if (localStorage.nombre != undefined && localStorage.Correo != undefined && localStorage.password != undefined && localStorage.confirmarContraseña != undefined ) {
        document.getElementById('datos').innerHTML = "<li class='list-group-item'>" + "Nombre: " + localStorage.nombre + "</li><li class='list-group-item'>" + 
            "Correo: " + localStorage.Correo + "</li><li class='list-group-item'>" + " Password: " + localStorage.password + "</li><li class='list-group-item'>" + " Confirmar Contraseña: " + localStorage.confirmarContraseña
    } else {
        document.getElementById('datos').innerHTML = "No ha introducido sus datos"
    }



});
recuperarDatos2.addEventListener('click', function () {
    if (localStorage.nombre != undefined && localStorage.Correo != undefined && localStorage.password != undefined && localStorage.confirmarContraseña != undefined ) {
        document.getElementById('datos').innerHTML = "<li class='list-group-item'>" + "Nombre: " + localStorage.nombre + "</li><li class='list-group-item'>" + 
            "Correo: " + localStorage.Correo + "</li><li class='list-group-item'>" + " Password: " + localStorage.password + "</li><li class='list-group-item'>" + " Confirmar Contraseña: " + localStorage.confirmarContraseña
    } else {
        document.getElementById('datos').innerHTML = "No ha introducido sus datos"
    }



});