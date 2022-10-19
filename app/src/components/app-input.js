const template = `
<style>

    :host{
         background: black;
    }
    input{
        background: red;
        border: 5px solid green;
    }
 </style>
 <input>
`

class AppInput extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = template;
    }

    connectedCallback(){
        console.log('Connected');
    }
    disconnectedCallback(){
        console.log('Dconnected');
    }
    attributeChangedCallback(name, oldValue, newValue){
        console.log('web');
    }
    static get observedAttributes(){
        return ['name', 'value'];}
}
customElements.define('app-input',AppInput);