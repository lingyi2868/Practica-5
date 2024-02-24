document.addEventListener("DOMContentLoaded",function(evento){
    cargarPuntoPartida();
});

function cargarPuntoPartida(){
    var principal = document.getElementsByTagName("main")[0];
    var cuadrado = document.createElement("div");
    var bola = document.createElement("div");

    cuadrado.className = "cuadrado";
    bola.id="bola";

    principal.appendChild(bola);
    principal.appendChild(cuadrado);
}



//añadir efecto de saltar
function lanzarBola(){}


//añadir efecto a contar duracion de click


//añadir efecto de apretar bloque


//obtener ubicacion de la bola