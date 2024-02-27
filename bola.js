const bola = document.createElement("template");
bola.innerHTML = `
<style>
    
.bola{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    position:absolute;
    bottom: -50px
}

</style>
<div class="bola">

</div>
`;


//definir clase de bola
class BolaWebComponent extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});

        this.shadowRoot.append(bola.content.cloneNode(true));

        //posicion de bola
        this.bolaElemento = this.shadowRoot.querySelector('.bola');
        
        this.bolaX = 70;
        this.bolaY = 20;
        
        this.bolaElemento.style.left = this.bolaX + "px";
        this.bolaElemento.style.top = this.bolaY + "px";

        //caer
        this.velocidadCaida = 5;

        this.cuadradoElemento = document.querySelector('cuadrado-web');

        this.caerSobreCuadrado();
    }

    caerSobreCuadrado(){
        this.caidaInterval = setInterval(() => {
            this.bolaY += this.velocidadCaida;
            this.bolaElemento.style.top = this.bolaY + "px";

            //Si choca, para
            if (this.detectarColision(this.getBola(), this.getCuadrado())) {
                clearInterval(this.caidaInterval);
            }
        }, 20);
    }


    getBola() {
        return {
            x: this.bolaX,
            y: this.bolaY,
            width: this.bolaElemento.getBoundingClientRect().width,
            height: this.bolaElemento.getBoundingClientRect().height
        };
    }

    getCuadrado() {
        return {
            x: cuadradoElemento.getBoundingClientRect().left,
            y: cuadradoElemento.getBoundingClientRect().top,
            width: cuadradoElemento.getBoundingClientRect().width,
            height: cuadradoElemento.getBoundingClientRect().height
        };
    }

    detectarColision() {
        const bola = this.getBola();
        const cuadrado = this.getCuadrado();
        return (
            bola.x < cuadrado.x + cuadrado.width &&
            bola.x + bola.width > cuadrado.x &&
            bola.y < cuadrado.y + cuadrado.height &&
            bola.y + bola.height > cuadrado.y
        );
    }
}



customElements.define('bola-web',BolaWebComponent);