import {BaseElement, html, css} from "../../core/base-element.js";
import "./app-registration-form.js";
import "./app-user-list.js";
import {RestClient} from "../../core/rest-client.js";

class AppUsersModule extends BaseElement {
    static get is() {
        return "app-users-module";
    };

    static get styles() {
        return css`
          :host {
            display: flex;
            flex-direction: column;
          }
        `;
    }

    render() {
        return html`
            <div>
                <section class="sign-up_section">
                    <app-registration-form
                            id="form"
                            .editUser="${this.editUser}"
                    ></app-registration-form>
                </section>
                <section class="users-info_section">
                    <app-user-list id="list"
                                   .usersList="${this.usersList}"></app-user-list>
                </section>
            </div>
        `;
    }

    static get properties() {
        return {
            usersList: {type: Array},
            editUser: {type: Object},
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('save-user-data', (event) => {
            this._saveUserData(event.detail);
        });
        this.addEventListener('edit-user-data', async (event) => {
            this._editUserData(event.detail);
        });

    }

    _saveUserData(user) {
        RestClient.call('/api/client/updateClientData', user, RestClient.methods.post)
            .then(() => {
                this.usersList.push(user);
                this.usersList = [...this.usersList];
                console.log(this.usersList);
                this.editUser = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    paroliOne: '',
                    parolitwo: '',

                };
            })
            .catch((error) => {
                console.log(error);
            })
    }

    _editUserData(user) {
        this.editUser = user;
        console.log(user);
    }

    constructor() {
        super();
    }
}


customElements.define(AppUsersModule.is, AppUsersModule);