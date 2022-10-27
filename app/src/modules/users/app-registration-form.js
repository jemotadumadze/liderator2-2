import {BaseElement, html, css} from "../../core/base-element.js";

class AppRegistrationForm extends BaseElement {
    static get is() {
        return "app-registration-form";
    };

    static get properties() {
        return {
            firstName: {
                type: String,
                reflect:true,
                attribute: 'first-name',
            },
            lastName: {
                type: String,
                reflect:true,
                attribute: 'first-name',
            },
            email: {type: String},
            paroliOne: {type: String},
            paroliTwo: {type: String},

        }
    }

    static get styles() {
        return css`
          :host {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
          }

          .registration-form-container {
            width: 1000px;
            margin: auto;
          }

          .sign-up-header {
            padding: 40px 0;
          }

          .title {
            text-align: center;
          }

          .form {
            width: 100%;
            display: grid;
            grid-template-columns:1fr 1fr 1fr 1fr;
            grid-gap: 20px;
          }

          .buttons {
            grid-column-start: 1;
            grid-column-end: 5;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 32px;
          }

          .submit-btn {
            height: 30px;
            width: 200px;
            margin: 0 20px;
            font-size: 18px;
            border: none;
            border-radius: 11px;
          }

          input {
            height: 24px;
            width: 220px;
            padding: 1px 5px;
            font-size: 16px;
            background-color: antiquewhite;
            border: 2px solid transparent;
          }
        `
    }

    render() {
        return html`
            <div class="registration-form-container">
                <div class="sign-up-header">
                    <h1 class="title">Registration Form</h1>
                </div>
                <div class="form">
                    <label for="firstName">First name </label>
                    <input
                            type="text"
                            id="firstName"
                            @input="${(event) => (this.firstName = event.target.value)}"

                    />
                    <label for="lastName">Last name *</label>
                    <input
                            type="text"
                            id="lastName"
                            @input="${(event) => (this.lastName = event.target.value)}"

                    />
                    <label for="email">Email address *</label>
                    <input
                            type="email"
                            id="email"
                            @input="${(event) => (this.email = event.target.value)}"
                    />
                    <label for="paroliOne">Password </label>
                    <input
                            type="password"
                            id="paroliOne"
                            name="paroli"
                            @input="${(event) => (this.paroliOne = event.target.value)}"
                    />
                    <label for="paroliTwo">Confirm password</label>
                    <input
                            type="password"
                            id="paroliTwo"
                            name="paroli"
                            @input="${(event) => (this.paroliTwo = event.target.value)}"
                    />
                    <div class="buttons">
                        <button
                                class="submit-btn"
                                @click="${this._saveUsersData}">submit
                        </button>
                    </div>
                </div>
            </div>
        `
    }

    _saveUsersData() {
        this.sendCustomEvent('save-user-data', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            paroliOne: this.paroliOne,
            paroliTwo: this.paroliTwo,
        });
    }

    connectedCallback() {
        super.connectedCallback();
    }

    constructor() {
        super();
        this.firstName='';
        this.lastName='';
        this.email='';
        this.paroliOne='';
        this.paroliTwo='';
    }

}


customElements.define(AppRegistrationForm.is, AppRegistrationForm);