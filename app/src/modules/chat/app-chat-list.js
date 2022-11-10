import {LitElement, html, css} from "lit-element";
import {RestClient} from "../../core/rest-client.js";


class ChatUserList extends LitElement {
    static get is() {
        return "chat-user-list";
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            flex-direction: column;
            background-color: #dce9fc;
          }

          .title {
            text-align: center;
          }

          .users-info_list {
            height: 60vh;
            overflow: auto;
            margin: 10px 0;
            padding: 10px 0;
          }

          .list_user-row {
            border: 1px solid black;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            min-height: 40px;
            width: 85%;
            padding: 5px;
            margin: 5px auto;
            background-color: #78c6f7;
            cursor: pointer;
            border-radius: 8px;
          }

          .list_user-row .span {
            padding: 20px;
            margin: 20px;
          }

          .active {
            background-color: green;
            color: white;
          }

          .unselect {
            width: 100%;
            display: flex;
            justify-content: center;
            height: 25px;
            align-items: center;
            background-color: cadetblue;
            border-radius: 8px;
          }
          .search input {
            padding: unset;
            border: none;
            border-radius: 8px;
            width: 100%;
            display: flex;
            margin-top: 12px;
            height: 20px;
          }
        `;
    }

    render() {
        return html`
            <div class="users-info_header">
                <h3 class="title">Chat</h3>
                <div class="search-bar">
                    FROM
                </div>
                <div class="search">
                    <input
                            type="text"
                            id="searchedValue"
                            placeholder="   Search.. "
                            @input="${(event) => (this.searchTerm = event.target.value)}"
                    />
                <div class="users-info_list">
                    ${this.users
                            .filter((item) => this.filter(item))
                            .map(
                                    (user) =>
                                            html`
                                                <div class="list_user-row 
                                                     ${this.activeUser === user._id ? 'active' : ''}"
                                                     style="${this.disabledUser === user._id ?
                                                             'background-color: grey;' +
                                                             ' color: white; ' +
                                                             'pointer-events: none' : ''}"
                                                     @click="${() => this.selectSenderUser(user)}">
                                                    <span>
                                                        ${user.firstName} ${user.lastName}
                                                    </span>
                                                </div>
                                            `
                            )}
                </div>

                <button
                        class="unselect"
                        @click="${() => this.selectSenderUser({})}"
                >unselect
                </button>
        `;
    }

    static get properties() {
        return {
            tooltip: {
                type: String,
                reflect: true,
            },
            activeUser: {
                type: String,
            },
            disabledUser: {
                type: String,
            },
            users: {type: Array},
            searchTerm: {type: String},
        };

    }


    connectedCallback() {
        super.connectedCallback();
        this.getUserList();
    }

    getUserList() {
        RestClient.call("/api/client/getClientInfo")
            .then((result) => {
                this.users = result;
            })
            .catch((error) => console.log(error));
    }

    selectSenderUser(user) {
        this.activeUser = user._id;
        const event = new CustomEvent("sender-user", {
            detail: user,
            composed: true,
            bubbles: true,
        });
        this.dispatchEvent(event);
    }
    filter(item) {
        if (!this.searchTerm) {
            return true;
        }
        const regex = new RegExp(this.searchTerm, "i");
        const response =
            regex.test(item.firstName) ||
            regex.test(item.lastName);
        return response;
    }


    constructor() {
        super();
        this.activeUser = '';
        this.users = [];
        this.disabledUser = '';
    }
}

customElements.define(ChatUserList.is, ChatUserList);
