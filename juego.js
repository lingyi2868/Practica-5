document.addEventListener("DOMContentLoaded", function() {

    
    var contando = document.getElementById("comienzo");
    var punto = 0; 
    var vida = 3; 
    var puntoElemento = document.createElement("div");
    puntoElemento.textContent = "Punto: " + punto;
    document.body.appendChild(puntoElemento);
    var vidaElemento = document.createElement("div");
    vidaElemento.textContent = "Tu vida: " + vida;
    document.body.appendChild(vidaElemento);

    var GameStop = false; 

    //Desaparecer numero de titulo
    function cuentaAtras() {
        var contar = parseInt(contando.textContent);
        
        if (contar > 0) {
            contando.textContent = contar - 1;
            setTimeout(cuentaAtras, 1000);
            //Cada segundo restart -1;
        } else {
            contando.style.display = "none";

            setInterval(function() {
                crearBola();
            }, 1000);
        }
    }

    setTimeout(cuentaAtras, 3000);


    //Crear Bola
    function crearBola() {

        //Si es vida es 0 finaliza juego y resaltar a la pagina princial
        if (vida <= 0) {
            if (!GameStop) {
                GameStop = true;
                gameOver().then(() => {
                    window.location.href = "index.html";
                });
            }
            return;
        }

        var ancho = window.innerWidth;
        var altura = window.innerHeight;
        
        //50 es de bola 
        var izquierda = Math.random() * (ancho - 50); 
        var arriba = Math.random() * (altura - 50); 
        
        var bolaElemento = document.createElement("div");
        bolaElemento.className = "bola"; 
        bolaElemento.style.left = izquierda + "px";
        bolaElemento.style.top = arriba + "px";

        document.body.appendChild(bolaElemento);
        
        //Eliminar bola despues de 1 segundo
        setTimeout(function() {
            document.body.removeChild(bolaElemento);
            vida--;
            vidaElemento.textContent = "Tu vida: " + vida;
        }, 1000);

       //Añadir click a la bola
        bolaElemento.addEventListener("click", function() {
            punto++; 
            puntoElemento.textContent = "Tu punto: " + punto; 
            document.body.removeChild(bolaElemento);
        });

    }

    function gameOver() {
        return new Promise(resolve => {
            alert("Game Over");
            resolve();
        });
    }
    
});
