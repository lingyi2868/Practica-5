document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("jugar");
    var instruccionButton = document.getElementById("instruccion");
    var instruccionTexto = document.getElementById("instruccionTexto");

    startButton.addEventListener("click", function() {
        window.location.href = "juego.html";
    });

    instruccionButton.addEventListener("mouseover", function() {
        instruccionTexto.style.display = "block";
    });

    instruccionButton.addEventListener("mouseout", function() {
        instruccionTexto.style.display = "none";
    });
});
