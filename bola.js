
const bola = document.createElement("template");
bola.innerHTML = `
<style>
    
.bola {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 50px;
    transform: translateY(-50%);
}

</style>
<div class="bola"></div>
`;


class BolaWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.append(bola.content.cloneNode(true));
        

        this.bolaElement = this.shadowRoot.querySelector('.bola');
        
  
        this.posicionX = 0;
        this.velocidad = 30; 
        

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.moverIzquierda();
            } else if (event.key === 'ArrowRight') {
                this.moverDerecha();
            }
        });
    }

    
    moverIzquierda() {
        this.posicionX -= this.velocidad;
        this.ActualizarPosicion();
    }
    
    
    moverDerecha() {
        this.posicionX += this.velocidad;
        this.ActualizarPosicion();
    }
    
    
    ActualizarPosicion() {
       
        if (this.posicionX < 0) {
            this.posicionX = 0;
        } else if (this.posicionX > window.innerWidth - this.bolaElement.clientWidth) {
            this.posicionX = window.innerWidth - this.bolaElement.clientWidth;
        }
        
        this.bolaElement.style.left = `${this.posicionX}px`;
    }
}

customElements.define('bola-web', BolaWebComponent);
