import {BaseElement, html, css} from "../../core/base-element.js";
import "./app-registration-form.js";
import "./app-user-list.js";

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
                                   .users="${this.users}"></app-user-list>
                </section>
            </div>
        `;
    }

    static get properties() {
        return {
            users: {type: Array},
            editUser: {type: Object},
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('save-user-data', async (event) => {
           await this._saveUserData(event.detail);
        });
        this.addEventListener('edit-user-data', async (event) => {
           await this._editUserData(event.detail);
        });

    }

    _saveUserData(user) {
        this.users.push(user);
        this.users = [...this.users];
    }

    // _loadUserList() {
    //
    // }
    _editUserData(){
        console.log("asd")
    }

    constructor() {
        super();
        this.users = [];
        this.editUser = [];

    }

}


customElements.define(AppUsersModule.is, AppUsersModule);