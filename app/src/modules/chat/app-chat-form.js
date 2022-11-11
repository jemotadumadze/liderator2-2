import {LitElement, html, css} from "lit-element";
import {RestClient} from "../../core/rest-client.js";
import "../chat/app-chat-list.js"
import "../chat/app-receive-list.js"
import {ws} from "../../sockets.js";


class AppChatPage extends LitElement {
    static get is() {
        return "app-chat-form";
    }

    static get styles() {
        return css`
          :host {
            display: flex;
            flex-direction: column;
          }

          .chat-section {
            display: grid;
            grid-template-columns: 210px 1fr 210px;
            grid-gap: 15px;
            padding: 10px;
            background-color: #f5f5f5;
          }

          .chat-list-block {
            height: 100%;
          }
          .chat-receive-block {
            height: 100%;
          }
          .chat-block {
            height: 100%;
            display: grid;
            grid-template-rows: 40px 62vh 60px;
          }
          .chat-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 3px 10px;
            background-color: #89ccf6;
          }
          .chat {
            padding: 5px 10px;
            background-color: #baebff;
            position: relative;
          }
          .chat-scroll {
            height: 90%;
            overflow: auto;
          }
          .typing {
            height: 10%;
          }
          .messaging-bar {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 10px;
            background-color: #89ccf6;
          }
          .chat-input {
            width: 70%;
            height: 35px;
            border: none;
            border-radius: 8px;
            padding: 2px 10px;
          }
          .send-btn {
            padding: 5px 25px;
            text-align: center;
            font-size: 17px;
            border-radius: 15px;
            background-color: #c55df6;
            border: none;
          }
          .message-block {
            display: flex;
            margin: 15px;
            position: relative;
            padding: 4px;
            border-radius: 11px;
            list-style: none;
            padding-inline-start: 10px;
          }
          .message-title {
            display: inline-block;
            text-transform: capitalize;
            padding: 2px 10px;
            position: absolute;
            top: -10px;
            font-size: 14px;
            border-radius: 11px;
          }
          .message-div {
            display: block;
            padding: 5px 25px;
            border-radius: 8px;
            position: relative;
          }
          .receiver-msg {
            justify-content: flex-start;
          }
          .sender-msg {
            justify-content: flex-end;
          }
          .receiver-msg .message-title {
            background-color: #09ecb0;
            left: -20px;
          }
          .sender-msg .message-title {
            background-color: #c18cf9;
            right: -20px;
          }
          .receiver-msg .message-div {
            background-color: #43f5c6;
          }
          .sender-msg .message-div {
            background-color: #c09cfa;
            margin-right: 25px;
          }
          @media (max-width: 1024px) {
            .chat-section {
              grid-template-columns: 190px 1fr 190px;
              grid-gap: 10px;
            }
            .send-btn {
              padding: 5px 18px;
              font-size: 17px;
            }
          }
          @media (max-width: 600px) {
            .chat-section {
              grid-template-columns: 1fr;
              grid-template-rows: 0.8fr 1fr 0.8fr;
              grid-gap: 10px;
            }
            .send-btn {
              padding: 4px 10px;
              font-size: 15px;
            }
          }
        `;
    }

    render() {
        return html`
            <div class="chat-section">
                <div class="chat-list-block">
                    <chat-user-list @sender-user="${this.setSenderUser}" disabledUser="${this.receiverId}"></chat-user-list>
                </div>

                <div class="chat-block">
                    <div class="chat-header">
                        <span>From: ${this.senderFirstName} </span>
                        <span>To: ${this.receiverFirstName} </span>
                    </div>
                    <div class="chat">
                        <ul class="chat-scroll">
                            ${this.messageList}
                        </ul>
                        <div class="typing">
                            ${this.message ? "typing..." : ""} ${this.errorMessage}
                        </div>
                    </div>
                    <div class="messaging-bar">
                        <input
                                type="text"
                                class="chat-input"
                                ?disabled=${!(this.receiverId && this.senderId) ? true : false}
                                .value="${this.message}"
                                @input="${(event) => (this.message = event.target.value)}"
                        />
                        <button
                                class="btn send-btn"
                                @click="${this.sendMessage}"
                                ?disabled=${!this.message ? true : false}
                        >
                            send
                        </button>

                    </div>

                </div>
                <div class="chat-receive-block">
                    <chat-receive-list @receiver-user="${this.setReceiverUser}" disabledUser="${this.senderId}"></chat-receive-list>
                </div>

            </div>
        `;
    }


    static get properties() {
        return {
            tooltip: {
                type: String,
                reflect: true,
            },
            receiverId: {
                type: String,
            },
            receiverFirstName: {
                type: String,
            },
            message: {
                type: String,
            },
            senderId: {
                type: String,
            },
            senderFirstName: {
                type: String,
            },
            messageArr: {
                type: Array,
            },
            messageList: {
                type: String,
            },
            errorMessage: {
                type: String,
            },
        };
    }


    connectedCallback() {
        super.connectedCallback();
    }

    getMsg() {
        this.messageArr = [];
        RestClient.call("/api/client/getMessages")
            .then((result) => {
                this.messageArr = result;
                this.showMessages();
            })
            .catch((error) => console.log(error));
    }

    showMessages() {
        const tmpArray = this.messageArr.filter((item) =>
            (item.senderId === this.senderId && item.receiverId === this.receiverId) ||
            (item.senderId === this.receiverId && item.receiverId === this.senderId)
        );
        this.messageList = tmpArray.map((item) => {
            return html`
                <li class="message-block ${item.senderId === this.senderId ? "sender-msg" : "receiver-msg"}">
                    <div class="message-div">
                        <div class="message-title">${item.senderId === this.senderId ?
                                this.senderFirstName : this.receiverFirstName}</div>
                        <span>${item.message}</span>
                    </div>
                </li>
            `
        });
    }

    sendMessage() {
        const messageInfo = {
            senderId: this.senderId,
            senderFirstName: this.senderFirstName,
            receiverId: this.receiverId,
            receiverFirstName: this.receiverFirstName,
            message: this.message,
        };
        this.saveMsg(messageInfo);
        ws.send(JSON.stringify(messageInfo));
        this.message = "";
        this.getMsg();
    }

    saveMsg(data) {
        RestClient.call("/api/client/saveMessage", data, RestClient.methods.post)
            .then((result) => {
                this.errorMessage = "";
                console.log(result);
            })
            .catch((error) => {
                this.errorMessage = "The Message has not sent, try again!";
                console.log(error);
            });
    }

    setSenderUser(e) {
        this.senderId = e.detail._id;
        this.senderFirstName = e.detail.firstName;
        if (this.receiverId) {
            this.getMsg();
        }
    }

    setReceiverUser(e) {
        this.receiverId = e.detail._id;
        this.receiverFirstName = e.detail.firstName;
        if (this.senderId) {
            this.getMsg();
        }
    }

    constructor() {
        super();
        this.receiverId = "";
        this.receiverFirstName = "";
        this.message = "";
        this.senderId = "";
        this.senderFirstName = "";
        this.messageArr = [];
        this.messageList = "";
        this.errorMessage = "";
    }
}


customElements.define(AppChatPage.is, AppChatPage);