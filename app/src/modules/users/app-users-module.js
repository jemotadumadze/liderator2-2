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
            </div
            >
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
        this.addEventListener('save-user-data', async (event) => {
            await this._saveUsersData(event.detail);
        });
        this.addEventListener('edit-user-data', async (event) => {
            await this._editUserData(event.detail);
        });
        this.addEventListener('delete-user-data', async (event) => {
            await this._deleteUserData(event.detail);
        });

        this._getUserList();

    }

    _saveUsersData(user) {
        RestClient.call('/api/client/updateClientData', user, RestClient.methods.post)
            .then((res) => {
                this._getUserList();
            })
            .catch((error) => {
                console.log(error)
            });
        this.emptyInputValues();
    }

    _getUserList() {
        RestClient.call("/api/client/getClientInfo")
            .then((result) => this.usersList = result)
            .catch((error) => console.log(error));
    }

    _editUserData(user) {
        this.shadowRoot.getElementById('form')._editUserChange(user);
    }

    _deleteUserData(user) {
        const _id = user._id;
        RestClient.call('/api/client/deleteUser', {_id}, RestClient.methods.get)
            .then(() => this._getUserList())
            .catch((error) => console.log(error));
    }
    emptyInputValues() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.paroliOne = "";
        this.paroliTwo = "";
        console.log("empty")
    }

    constructor() {
        super();
        this.usersList = [];

    }
}


customElements.define(AppUsersModule.is, AppUsersModule);