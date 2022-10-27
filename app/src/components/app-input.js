import {LitElement,html,css} from "lit-element";


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

class AppInput extends LitElement {
    static get is() {
        return 'app-input';
    }

    static get properties(){
        return{
            name:{
                type:String,
                hasChanged(newValue,oldValue){
                    if (newValue === oldValue){
                        return true;
                    }
                    else return false;
                }
            },
            reflect: true,
        }
    }


    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('Connected');
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('Dconnected');
    }
    render() {
    return html`<input type="text">`
   }
}
    
customElements.define('app-input',AppInput);