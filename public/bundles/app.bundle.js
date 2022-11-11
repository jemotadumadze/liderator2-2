!function(e){function t(t){for(var i,n,o=t[0],l=t[1],d=t[2],p=0,u=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(c&&c(t);u.length;)u.shift()();return a.push.apply(a,d||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(i=!1)}i&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},r={0:0},a=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./bundles/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=l;a.push([1,1]),s()}([,function(e,t,s){"use strict";s.r(t);var i=s(0);class r extends i.a{constructor(){super();const e=this.constructor.properties;for(let t in e)this._setPropertyValue(t,e)}update(e){const t=this.constructor.properties;e.forEach((e,s)=>{this[t[s].observer]&&this[t[s].observer].apply(this,[this[s],e])}),super.update(e)}_setPropertyValue(e,t){let s;t[e].hasOwnProperty("value")?s=t[e].value:t[e].type&&(t[e].type===Number&&(s=null),t[e].type===String&&(s=""),t[e].type===Array&&(s=[]),t[e].type===Object&&(s={})),this[e]=s}sendCustomEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}}class a extends r{static get is(){return"app-registration-form"}static get properties(){return{firstName:{type:String,reflect:!0,attribute:"first-name"},lastName:{type:String,reflect:!0,attribute:"first-name"},email:{type:String,reflect:!0,attribute:"email"},paroliOne:{type:String,reflect:!0,attribute:"paroliOne"},paroliTwo:{type:String,reflect:!0,attribute:"paroliTwo"},submitBtn:{type:String},editUser:{type:Object,observer:"_editUserChange"},_id:{type:String}}}static get styles(){return i.b`
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
        `}render(){return i.c`
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
                                @click="${this._saveUsersData} ${this.emptyInputValues}">sumbit
                        </button>
                    </div>
                </div>
            </div>
        `}_saveUsersData(){const e={firstName:this.firstName,lastName:this.lastName,email:this.email,paroliOne:this.paroliOne,paroliTwo:this.paroliTwo,_id:this._id};console.log(e),this.sendCustomEvent("save-user-data",e)}static get validation(){return{firstName:/^[a-zA-Z]{2,}$/,lastName:/^[a-zA-Z]{2,}$/,email:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,paroliOne:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,paroliTwo:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/}}_setInputValue(e){const t=e.currentTarget,s=t.id;if(this[s]=e.target.value,a.validation[s]){a.validation[s].test(this[s])?t.removeAttribute("invalid"):t.setAttribute("invalid","")}}get disabled(){let e=Object.keys(a.validation).some(e=>!a.validation[e].test(this[e]));return!1===e&&this.paroliOne!==this.paroliTwo&&(e=!0),e}_editUserChange(e){for(let t in e)this[t]=e[t]}constructor(){super(),this.firstName="",this.lastName="",this.email="",this.paroliOne="",this.paroliTwo="",this.editUser={},this._id=""}}customElements.define(a.is,a);class n extends r{static get is(){return"app-user-list"}static get styles(){return i.b`
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
        `}render(){return i.c`
            <div class="user-info-container">
                <div class="users-info_header">
                    <h3>Users information</h3>
                    <div class="search-bar">
                        <input
                
                                type="text"
                                id="searchedValue"
                                @input="${e=>this.searchTerm=e.target.value}"
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
                        ${this.usersList.filter(e=>this.filter(e)).map((e,t)=>i.c`
                                    <div class="grid_user-row">
                                        <span><b>${t+1}</b></span>
                                        <span><b>${e.firstName}</b></span>
                                        <span>${e.lastName}</span>
                                        <span>${e.email}</span>
                                        <span>${e.paroliOne}</span>
                                        <span>${e.paroliTwo}</span>
                                        <div class="action-btns">
                                            <button
                                                    @click="${()=>this.editUser(e)}">
                                                🖊️
                                            </button>
                                            <button
                                                    class="delete-btn btn"
                                                    @click="${()=>this._deleteUserData(e)}"
                                            > ❌
                                            </button>
                                        </div>
                                    </div>
                                `)}
                    </div>
                </div>
        `}static get properties(){return{usersList:{type:Array},id:{type:String},searchTerm:{type:String}}}editUser(e){this.sendCustomEvent("edit-user-data",e)}_deleteUserData(e){this.sendCustomEvent("delete-user-data",e)}filter(e){if(!this.searchTerm)return!0;const t=new RegExp(this.searchTerm,"i");return t.test(e.firstName)||t.test(e.lastName)||t.test(e.email)||t.test(e.paroliOne)||t.test(e.paroliTwo)}constructor(){super(),this.usersList=[]}}customElements.define(n.is,n);class o{static get methods(){return{post:"POST",get:"GET"}}static call(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const i={accept:"*/*"};s===o.methods.post&&(i["Content-Type"]="application/x-www-form-urlencoded");const r={method:s,headers:i},a=new URLSearchParams(t).toString();return s===o.methods.post?r.body=a:s===o.methods.get&&(e=e+"?"+a),fetch(e,r).then(e=>e.json())}}class l extends r{static get is(){return"app-users-module"}static get styles(){return i.b`
          :host {
            display: flex;
            flex-direction: column;
          }
        `}render(){return i.c`
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
        `}static get properties(){return{usersList:{type:Array},editUser:{type:Object}}}connectedCallback(){super.connectedCallback(),this.addEventListener("save-user-data",async e=>{await this._saveUsersData(e.detail)}),this.addEventListener("edit-user-data",async e=>{await this._editUserData(e.detail)}),this.addEventListener("delete-user-data",async e=>{await this._deleteUserData(e.detail)}),this._getUserList()}_saveUsersData(e){o.call("/api/client/updateClientData",e,o.methods.post).then(e=>{this._getUserList()}).catch(e=>{console.log(e)}),this.emptyInputValues()}_getUserList(){o.call("/api/client/getClientInfo").then(e=>this.usersList=e).catch(e=>console.log(e))}_editUserData(e){this.shadowRoot.getElementById("form")._editUserChange(e)}_deleteUserData(e){const t=e._id;o.call("/api/client/deleteUser",{_id:t},o.methods.get).then(()=>this._getUserList()).catch(e=>console.log(e))}emptyInputValues(){this.firstName="",this.lastName="",this.email="",this.paroliOne="",this.paroliTwo="",console.log("empty")}constructor(){super(),this.usersList=[]}}customElements.define(l.is,l);class d extends i.a{static get is(){return"chat-user-list"}static get styles(){return i.b`
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
        `}render(){return i.c`
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
                            @input="${e=>this.searchTerm=e.target.value}"
                    />
                <div class="users-info_list">
                    ${this.users.filter(e=>this.filter(e)).map(e=>i.c`
                                                <div class="list_user-row 
                                                     ${this.activeUser===e._id?"active":""}"
                                                     style="${this.disabledUser===e._id?"background-color: grey; color: white; pointer-events: none":""}"
                                                     @click="${()=>this.selectSenderUser(e)}">
                                                    <span>
                                                        ${e.firstName} ${e.lastName}
                                                    </span>
                                                </div>
                                            `)}
                </div>

                <button
                        class="unselect"
                        @click="${()=>this.selectSenderUser({})}"
                >unselect
                </button>
        `}static get properties(){return{tooltip:{type:String,reflect:!0},activeUser:{type:String},disabledUser:{type:String},users:{type:Array},searchTerm:{type:String}}}connectedCallback(){super.connectedCallback(),this.getUserList()}getUserList(){o.call("/api/client/getClientInfo").then(e=>{this.users=e}).catch(e=>console.log(e))}selectSenderUser(e){this.activeUser=e._id;const t=new CustomEvent("sender-user",{detail:e,composed:!0,bubbles:!0});this.dispatchEvent(t)}filter(e){if(!this.searchTerm)return!0;const t=new RegExp(this.searchTerm,"i");return t.test(e.firstName)||t.test(e.lastName)}constructor(){super(),this.activeUser="",this.users=[],this.disabledUser=""}}customElements.define(d.is,d);class c extends i.a{static get is(){return"chat-receive-list"}static get styles(){return i.b`
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
            align-items: center;
            min-height: 40px;
            width: 85%;
            padding: 5px;
            background-color: #78c6f7;
            cursor: pointer;
            margin-bottom: 12px;
            border-radius: 8px;
          }

          .active {
            background-color: blue;
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
        `}render(){return i.c`
            <div class="users-info_header">
                <h3 class="title">Chat</h3>
                <div class="search-bar">
                    TO
                </div>
                <div class="search">
                    <input
                            type="text"
                            id="searchedValue"
                            placeholder="   Search.. "
                            @input="${e=>this.searchTerm=e.target.value}"
                    />
                <div class="users-info_list">
                    ${this.users.filter(e=>this.filter(e)).map(e=>i.c`
                                                <div class="list_user-row 
                                                     ${this.activeUser===e._id?"active":""}"
                                                     style="${this.disabledUser===e._id?"background-color: grey; color: white; pointer-events: none":""}"
                                                     @click="${()=>this.selectReceiverUser(e)}">
                                                <span>
                                                    ${e.firstName} ${e.lastName}
                                                </span>
                                                </div>
                                            `)}
                </div>

                <button
                        class="unselect"
                        @click="${()=>this.selectReceiverUser({})}
                        "> unselect
                </button>
        `}static get properties(){return{tooltip:{type:String,reflect:!0},activeUser:{type:String},disabledUser:{type:String},users:{type:Array},searchTerm:{type:String}}}connectedCallback(){super.connectedCallback(),this.getUserList()}getUserList(){o.call("/api/client/getClientInfo").then(e=>{this.users=e}).catch(e=>console.log(e))}selectReceiverUser(e){this.activeUser=e._id;const t=new CustomEvent("receiver-user",{detail:e,composed:!0,bubbles:!0});this.dispatchEvent(t)}filter(e){if(!this.searchTerm)return!0;const t=new RegExp(this.searchTerm,"i");return t.test(e.firstName)||t.test(e.lastName)}constructor(){super(),this.users=[],this.activeUser="",this.disabledUser=""}}customElements.define(c.is,c);const p=new WebSocket("ws://localhost:8088");p.addEventListener("open",e=>{console.log("Client connected to server")});class u extends i.a{static get is(){return"app-chat-form"}static get styles(){return i.b`
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

          .reciver-msg {
            justify-content: flex-start;
          }

          .sender-msg {
            justify-content: flex-end;
          }

          .reciver-msg .message-title {
            background-color: #09ecb0;
            left: -20px;
          }

          .sender-msg .message-title {
            background-color: #c18cf9;
            right: -20px;
          }

          .reciver-msg .message-div {
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
        `}render(){return i.c`
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
                            ${this.message?"typing...":""} ${this.errorMessage}
                        </div>
                    </div>
                    <div class="messaging-bar">
                        <input
                                type="text"
                                class="chat-input"
                                ?disabled=${!this.receiverId||!this.senderId}
                                .value="${this.message}"
                                @input="${e=>this.message=e.target.value}"
                        />
                        <button
                                class="btn send-btn"
                                @click="${this.sendMessage}"
                                ?disabled=${!this.message}
                        >
                            send
                        </button>

                    </div>

                </div>
                <div class="chat-receive-block">
                    <chat-receive-list @receiver-user="${this.setReceiverUser}" disabledUser="${this.senderId}"></chat-receive-list>
                </div>

            </div>
        `}static get properties(){return{tooltip:{type:String,reflect:!0},receiverId:{type:String},receiverFirstName:{type:String},message:{type:String},senderId:{type:String},senderFirstName:{type:String},messageArr:{type:Array},messageList:{type:String},errorMessage:{type:String}}}connectedCallback(){super.connectedCallback()}getMsg(){this.messageArr=[],o.call("/api/client/getMessages").then(e=>{this.messageArr=e,this.showMessages()}).catch(e=>console.log(e))}showMessages(){const e=this.messageArr.filter(e=>e.senderId===this.senderId&&e.receiverId===this.receiverId||e.senderId===this.receiverId&&e.receiverId===this.senderId);this.messageList=e.map(e=>i.c`
                <li class="message-block ${e.senderId===this.senderId?"sender-msg":"reciver-msg"}">
                    <div class="message-div">
                        <div class="message-title">${e.senderId===this.senderId?this.senderFirstName:this.receiverFirstName}</div>
                        <span>${e.message}</span>
                    </div>
                </li>
            `)}sendMessage(){const e={senderId:this.senderId,senderFirstName:this.senderFirstName,receiverId:this.receiverId,receiverFirstName:this.receiverFirstName,message:this.message};this.saveMsg(e),p.send(JSON.stringify(e)),this.message="",this.getMsg()}saveMsg(e){o.call("/api/client/saveMessage",e,o.methods.post).then(e=>{this.errorMessage="",console.log(e)}).catch(e=>{this.errorMessage="The Message has not sent, try again!",console.log(e)})}setSenderUser(e){this.senderId=e.detail._id,this.senderFirstName=e.detail.firstName,this.receiverId&&this.getMsg()}setReceiverUser(e){this.receiverId=e.detail._id,this.receiverFirstName=e.detail.firstName,this.senderId&&this.getMsg()}constructor(){super(),this.receiverId="",this.receiverFirstName="",this.message="",this.senderId="",this.senderFirstName="",this.messageArr=[],this.messageList="",this.errorMessage=""}}customElements.define(u.is,u);const h="users",g="chat";class m extends r{static get is(){return"app-root"}static get styles(){return i.b`
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
        `}render(){return i.c`
            <div class="container">
                <div class="header">
                    <div class="header-button">
                        <button class="users-button"
                                @click="${()=>this.tab=h}">Users
                        </button>
                        <button
                                class="tabs-button"
                                @click="${()=>this.tab=g}">Chat
                        </button>
                    </div>
                </div>
                <div>
                    ${"users"===this.tab?i.c`
                        <app-users-module></app-users-module>`:""}
                    ${"chat"===this.tab?i.c`
                        <app-chat-form></app-chat-form>`:""}
                </div>
            </div>
        `}static get properties(){return{tab:{type:String}}}constructor(){super(),this.tab=h}}customElements.define(m.is,m);const b=document.createElement("app-root");document.body.appendChild(b)}]);