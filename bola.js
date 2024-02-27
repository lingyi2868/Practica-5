const bola = document.createElement("template");
bola.innerHTML = `
<style>
    
.bola{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    justify-content: center;
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
    }
}

customElements.define('bola-web',BolaWebComponent);