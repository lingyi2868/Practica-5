const cuadrado = document.createElement("template");
cuadrado.innerHTML = `
<style>
    
.cuadrado{
    width: 100px;
    height: 100px;
    background-color: aqua;
    position:absolute;
    bottom:50px;
    left:50px
}

</style>
<div class="cuadrado">

</div>
`;


//definir clase de bola
class CuadradoWebComponent extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});

        this.shadowRoot.append(cuadrado.content.cloneNode(true));
    }
}

customElements.define('cuadrado-web',CuadradoWebComponent);