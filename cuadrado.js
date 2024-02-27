const cuadrado = document.createElement("template");
cuadrado.innerHTML = `
<style>
    
.cuadrado{
    width: 200px;
    height: 30px;
    background-color: aqua;
    position:absolute;
    bottom:50px;
    left:50px;
    transition: transform 1s linear;
}

</style>
<div class="cuadrado">

</div>
`;


class CuadradoWebComponent extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});

        this.shadowRoot.append(cuadrado.content.cloneNode(true));
        
        this.direccion = 'right';
        
        setInterval(() => {
            this.moverCuadrado();
        }, 20);
    }
    
    moverCuadrado() {
        const cuadradoElement = this.shadowRoot.querySelector('.cuadrado');
        
        const izquierda = parseInt(cuadradoElement.style.left) || 0;
        

        if (this.direccion === 'right') {
            cuadradoElement.style.left = `${izquierda + 10}px`;
            if (izquierda + 100 >= window.innerWidth) { 
                this.direccion = 'left';
            }
        } else {
            cuadradoElement.style.left = `${izquierda - 10}px`;
            if (izquierda <= 0) { 
                this.direccion = 'right';
            }
        }
    }
}

customElements.define('cuadrado-web', CuadradoWebComponent);
