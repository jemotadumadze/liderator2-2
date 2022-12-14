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

          .grid_header-row,
          .grid_user-row {
            display: grid;
            grid-template-columns: 30px repeat(3, 1fr) 180px repeat(2, 1fr);
            grid-gap: 4px;
          }

          .grid_header-row span {
            font-weight: bold;
          }

          .grid_user-row span {
            word-wrap: break-word;
          }

          .action-btns {
            display: inline-flex;
            justify-content: space-evenly;
            align-items: center;
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
                                @input="${(event) => (this.searchTerm = event.target.value)}"
                        />
                    </div>
                </div>
                <div class="users-info_grid">
                    <div class="grid_header-row">
                        <span>#</span>
                        <span>firstName</span>
                        <span>lastName</span>
                        <span>Email</span>
                        <span>passOne</span>
                        <span>passTwo</span>

                    </div>
                    <div class="grid_info-rows" id="usersInfoTable">
                        ${this.usersList
                                .filter((item) => this.filter(item))
                                .map((user, index) => html`
                                    <div class="grid_user-row">
                                        <span><b>${index + 1}</b></span>
                                        <span><b>${user.firstName}</b></span>
                                        <span>${user.lastName}</span>
                                        <span>${user.email}</span>
                                        <span>${user.paroliOne}</span>
                                        <span>${user.paroliTwo}</span>
                                        <div class="action-btns">
                                            <button
                                                    @click="${() => this.editUser(user)}">
                                                ???????
                                            </button>
                                            <button
                                                    class="delete-btn btn"
                                                    @click="${() => this._deleteUserData(user)}"
                                            > ???
                                            </button>
                                        </div>
                                    </div>
                                `)}
                    </div>
                </div>
        `;
    }
    static get properties() {
        return {
            usersList: {
                type: Array
            },
            id: {
                type: String,
            },
            searchTerm:{
                type:String
            },
        }
    }
    editUser(user) {
        this.sendCustomEvent('edit-user-data', user);
    }

    _deleteUserData(user){
        this.sendCustomEvent('delete-user-data', user);
    }
    filter(item) {
        if (!this.searchTerm) {
            return true;
        }
        const regex = new RegExp(this.searchTerm, "i");
        const response =
            regex.test(item.firstName) ||
            regex.test(item.lastName) ||
            regex.test(item.email) ||
            regex.test(item.paroliOne) ||
            regex.test(item.paroliTwo);
        return response;
    }

    constructor() {
        super();
        this.usersList = [];
    }

}

customElements.define(AppUserList.is, AppUserList);