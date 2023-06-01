const formulario = document.getElementById('formulario');
//const recuperarDatos = document.getElementById('btt1');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    localStorage.nombre = document.getElementById('nombre').value;
    localStorage.apellido = document.getElementById('apellido').value;
    localStorage.Correo = document.getElementById('Correo').value;
    localStorage.password = document.getElementById('password').value;
    localStorage.Departamento = document.getElementById('Departamento').value;
    localStorage.Estado = document.getElementById('Estado').value;
    localStorage.telefono = document.getElementById('telefono').value;
    
});

recuperarDatos.addEventListener('click', function () {
    if (localStorage.nombre != undefined && (localStorage.apellido != undefined && localStorage.Correo != undefined && localStorage.password != undefined && localStorage.Departamento != undefined && localStorage.Estado != undefined && localStorage.telefono != undefined)) {
        document.getElementById('datos').innerHTML = "<li class='list-group-item'>" + "Nombre: " + localStorage.nombre + "</li><li class='list-group-item'>"  + " Apellido: " + localStorage.apellido + "</li><li class='list-group-item'>" + 
            "Correo: " + localStorage.Correo + "</li><li class='list-group-item'>" + " Password: " + localStorage.password + "</li><li class='list-group-item'>" + " Departamento: " + localStorage.Departamento + "</li><li class='list-group-item'>" + " Estado: " + localStorage.Estado + "</li><li class='list-group-item'>" + " Telefono: " + localStorage.telefono
    } else {
        document.getElementById('datos').innerHTML = "No ha introducido sus datos"
    }



});
recuperarDatos2.addEventListener('click', function () {
    if (localStorage.nombre != undefined && (localStorage.apellido != undefined && localStorage.Correo != undefined && localStorage.password != undefined && localStorage.Departamento != undefined && localStorage.Estado != undefined && localStorage.telefono != undefined)) {
        document.getElementById('datos').innerHTML = "<li class='list-group-item'>" + "Nombre: " + localStorage.nombre + "</li><li class='list-group-item'>"  + " Apellido: " + localStorage.apellido + "</li><li class='list-group-item'>" + 
            "Correo: " + localStorage.Correo + "</li><li class='list-group-item'>" + " Password: " + localStorage.password + "</li><li class='list-group-item'>" + " Departamento: " + localStorage.Departamento + "</li><li class='list-group-item'>" + " Estado: " + localStorage.Estado + "</li><li class='list-group-item'>" + " Telefono: " + localStorage.telefono
    } else {
        document.getElementById('datos').innerHTML = "No ha introducido sus datos"
    }



});