function verColores(){
    elemento = document.getElementById('tableColor');
    elemento.style.display = 'block';
    document.getElementById('boton1').style.display = 'none';
    document.getElementById('boton11').style.display = 'block';         

}
function noColores(){
    elemento = document.getElementById('tableColor');
    elemento.style.display = 'none';
    document.getElementById('boton11').style.display = 'none';
    document.getElementById('boton1').style.display = 'block';         

}
function verEstudio(){
    elemento = document.getElementById('tableEstudio');
    elemento.style.display = 'block';
    document.getElementById('boton2').style.display = 'none';
    document.getElementById('boton12').style.display = 'block';
}
function noEstudio(){
    elemento = document.getElementById('tableEstudio');
    elemento.style.display = 'none';
    document.getElementById('boton12').style.display = 'none';
    document.getElementById('boton2').style.display = 'block';         

}
function verInfo(){
    elemento = document.getElementById('tableInfo');
    elemento.style.display = 'block';
    document.getElementById('boton3').style.display = 'none';
    document.getElementById('boton13').style.display = 'block';
}
function noInfo(){
    elemento = document.getElementById('tableInfo');
    elemento.style.display = 'none';
    document.getElementById('boton13').style.display = 'none';
    document.getElementById('boton3').style.display = 'block';         

}
document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><title>Botones con JS</title></head><body><br><div class="container "><div class="row justify-content-md-center"><div class="col-lg-4"><button type="button" id="boton1" class="btn btn-primary" onclick="verColores()">Ver Colores</button> <button type="button" id="boton11" class="btn btn-warning" onclick="noColores()" style="display: none;">Ocultar información</button> </div><div class="col-lg-4"><button type="button" id="boton2" class="btn btn-info" onclick="verEstudio()">Ver Estudio</button><button type="button" id="boton12" class="btn btn-warning" onclick="noEstudio()" style="display: none;">Ocultar información</button></div><div class="col-lg-4"><button type="button" id="boton3" class="btn btn-success" onclick="verInfo()">Sobre mi</button><button type="button" id="boton13" class="btn btn-warning" onclick="noInfo()" style="display: none;">Ocultar información</button></div> </div> <br><div class="row"><div class="col-4"><table class="table" id="tableColor" style="display:none;"><thead><tr><th scope="col" colspan="2">Colores favoritos</th></tr></thead><tbody><tr><th scope="row">1</th><td>Rojo Escarlata</td></tr><tr><th scope="row">2</th><td>Azul Marino</td></tr><tr><th scope="row">3</th> <td colspan="2">Rosita</td> </tr></tbody> </table></div><div class="col-4"><table class="table" id="tableEstudio" style="display:none;"><thead><tr><th scope="row">Index</th><td colspan="2">Descripción</td> <td>Estado</td></tr></thead><tbody><tr> <td scope="row">Estudiar</td> <td colspan="2">Estudiar para examen</td><td> <select class="form-select" aria-label="Default select example"><option value="1" selected>Finalizada</option> <option value="2">Pendiente</option> </select> </td> </tr><tr> <td scope="row">Estudiar</td> <td colspan="2">Estudiar para examen 2</td><td> <select class="form-select" aria-label="Default select example"><option value="1" >Finalizada</option><option value="2" selected>Pendiente</option> </select> </td>  </tr> </tbody> </table></div> <div class="col-4"><table class="table" id="tableInfo" style="display:none;"><thead><tr><th colspan="4">Sobre Mí</th></tr></thead><tbody><tr><td scope="row" colspan="4"><p>Soy una persona optimista, sevicial, con muy buenos valores</p></td></tr></tbody> </table></div></div></div></body></html>');
