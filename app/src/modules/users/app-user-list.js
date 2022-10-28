import {BaseElement, html, css} from "../../core/base-element.js";

class AppUserList extends BaseElement {
    static get is() {
        return "app-user-list";
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            flex-direction: column;
          }

          .user-info-container {
            width: 1000px;
            margin: auto;
          }

          .users-info_header {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-flow: row wrap;
          }

          .users-info_header h3 {
            margin: 5px 15px;
          }

          .grid_header-row {
            display: grid;
            grid-template-columns: 30px repeat(3, 1fr) 180px repeat(4, 1fr);
            grid-gap: 4px;
          }
        `;
    }

    render() {
        return html`
            <div class="user-info-container">
                <div class="users-info_header">
                    <h3>Users information</h3>
                    <div class="search-bar">
                        <input
                                type="text"
                                id="searchedValue"
                        />
                    </div>
                </div>
                <div class="users-info_grid">
                    <div class="grid_header-row">
                        <span>#</span>
                        <span>Name</span>
                        <span>Date of birth</span>
                        <span>Email</span>
                        <span>Mobile number</span>
                        <span>City</span>
                        <span>Actions</span>
                    </div>
                    <div class="gird_info-rows" id="usersInfoTable">
                        ${this.users
                                .map((user, index) => html`
                                    <div class="grid_user-row">
                                        <span><b>${index + 1}</b></span>
                                        <span><b>${user.firstName} ${user.lastName}</b></span>
                                        <span>${user.email}</span>
                                        <div class="action-btns">
                                            <div
                                                    @click="${() => this._editUser(user)}">Edit
                                            </div>
                                        </div>
                                    </div>
                                `)}
                    </div>
                </div>
        `;
    }

    static get properties() {
        return {
            users: {type: Array}
        }
    }

    connectedCallback() {
        super.connectedCallback();
    }

    constructor() {
        super();
        this.users = [];
    }

    _editUser(user) {
        this.sendCustomEvent('edit-user-data', user)
    }

}

customElements.define(AppUserList.is, AppUserList);