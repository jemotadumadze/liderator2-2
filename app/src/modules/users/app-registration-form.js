import {BaseElement, html, css} from "../../core/base-element.js";
import {RestClient} from "../../core/rest-client.js";

class AppRegistrationForm extends BaseElement {
    static get is() {
        return "app-registration-form";
    };

    static get properties() {
        return {
            firstName: {
                type: String,
                reflect: true,
                attribute: 'first-name',
            },
            lastName: {
                type: String,
                reflect: true,
                attribute: 'first-name',
            },
            email: {type: String},
            paroliOne: {type: String},
            paroliTwo: {type: String},
            submitBtn: {type: String},
            editUser: {
                type: Object,
                observer: '_editUserChange'
            }
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

          .error-messages {
            grid-column-start: 1;
            grid-column-end: 5;
            color: red;
          }

          .valid,
          input:not([invalid]) {
            border: 2px solid green;
          }

          .invalid,
          input[invalid] {
            border: 2px solid red;
            background-color: red;
          }

          @media (max-width: 1024px) {
            .form {
              grid-template-columns: 1fr 1fr;
            }

            .buttons {
              grid-column-start: 1;
              grid-column-end: 3;
            }
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
                            @input="${this._setInputValue}"
                            .value="${this.firstName}"

                    />
                    <label for="lastName">Last name *</label>
                    <input
                            type="text"
                            id="lastName"
                            @input="${this._setInputValue}"
                            .value="${this.lastName}"

                    />
                    <label for="email">Email address *</label>
                    <input
                            type="email"
                            id="email"
                            @input="${this._setInputValue}"
                            .value="${this.email}"
                    />
                    <label for="paroliOne">Password </label>
                    <input
                            type="password"
                            id="paroliOne"
                            name="paroli"
                            @input="${this._setInputValue}"
                            .value="${this.paroliOne}"
                    />
                    <label for="paroliTwo">Confirm password</label>
                    <input
                            type="password"
                            id="paroliTwo"
                            name="paroli"
                            @input="${this._setInputValue}"
                            .value="${this.paroliTwo}"

                    />
                    <div class="buttons">
                        <button
                                ?disabled="${this.disabled}"
                                class="submit-btn"
                                @click="${this._saveUsersData}">sumbit
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

    static get validation() {
        return {
            firstName: /^[a-zA-Z]{2,}$/,
            lastName: /^[a-zA-Z]{2,}$/,
            email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            paroliOne: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            paroliTwo: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        }
    }

    _setInputValue(event) {
        const targetElement = event.currentTarget;
        const fieldName = targetElement.id;
        this[fieldName] = event.target.value;
        if (AppRegistrationForm.validation[fieldName]) {
            const valid = AppRegistrationForm.validation[fieldName].test(this[fieldName]);
            if (valid) {
                targetElement.removeAttribute('invalid');
            } else {
                targetElement.setAttribute('invalid', '');
            }
        }

    }

    get disabled() {
        let formInValid = Object.keys(AppRegistrationForm.validation)
            .some(fieldName => {
                const valid = AppRegistrationForm.validation[fieldName].test(this[fieldName]);
                return !valid;

            })
        if (formInValid === false) {
            if (this.paroliOne !== this.paroliTwo) {
                formInValid = true;
            }
        }
        return formInValid;
    }


    _editUserChange(newValue) {
        for (let key in newValue) {
            this[key] = newValue[key];
        }
    }

    connectedCallback() {
        super.connectedCallback();
    }


    constructor() {
        super();
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.paroliOne = '';
        this.paroliTwo = '';
        this.editUser = {};

    }


}


customElements.define(AppRegistrationForm.is, AppRegistrationForm);