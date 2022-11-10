import {BaseElement, html, css} from "./core/base-element.js";
import "./modules/users/app-users-module.js"
import "./modules/chat/app-chat-form.js"

const tabs = {
    users: 'users',
    chat: 'chat'
}

class AppRoot extends BaseElement {
    static get is() {
        return 'app-root';
    }

    static get styles() {
        return css`
          .header {
            background-color: cadetblue;
            display: flex;
            justify-content: center;
            align-items: center;

          }

          .header button {
            width: 100px;
            border-radius: 12px;
            margin: 16px 0;
          }

          .header-button {
            align-items: center;
          }
          @media (max-width: 1024px) {
            .container{
              margin: auto;
            }
          }
        `
    }

    render() {
        return html`
            <div class="container">
                <div class="header">
                    <div class="header-button">
                        <button class="users-button"
                                @click="${() => this.tab = tabs.users}">Users
                        </button>
                        <button
                                class="tabs-button"
                                @click="${() => this.tab = tabs.chat}">Chat
                        </button>
                    </div>
                </div>
                <div>
                    ${this.tab === 'users' ? html`
                        <app-users-module></app-users-module>` : ''}
                    ${this.tab === 'chat' ? html`
                        <app-chat-form></app-chat-form>` : ''}
                </div>
            </div>
        `
    }

    static get properties() {
        return {
            tab: {type: String}
        }
    }

    constructor() {
        super();
        this.tab = tabs.users;
    }
}

customElements.define(AppRoot.is, AppRoot);
