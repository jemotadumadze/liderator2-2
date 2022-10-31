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
          @media (max-width: 1024px) {
            .grid_header-row,
            .grid_user-row {
              grid-template-rows: 1fr 1fr;
              grid-template-columns: repeat(5, 1fr) 150px;
            }
            .user-info-container{
              max-width: 768px;
            }
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
                        <span>firstName</span>
                        <span>lastName</span>
                        <span>Email</span>
                        <span>passOne</span>
                        <span>passTwo</span>
                       
                    </div>
                    <div class="grid_info-rows" id="usersInfoTable">
                        ${this.usersList
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
                                                🖊️
                                            </button>
                                            <button
                                                    class="delete-btn btn"
                                                    @click="${() => this._deleteUser(user)}"
                                            > ❌
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
            usersList: {type: Array}
        }
    }

    connectedCallback() {
        super.connectedCallback();
    }

    editUser(user) {
        this.sendCustomEvent('edit-user-data', user)
        console.log(user)
    }



    _deleteUser(user){

    }
constructor() {
    super();
}

}

customElements.define(AppUserList.is, AppUserList);