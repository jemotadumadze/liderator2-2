!function(t){function e(e){for(var i,n,o=e[0],l=e[1],d=e[2],u=0,c=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&c.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(p&&p(e);c.length;)c.shift()();return a.push.apply(a,d||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},r={0:0},a=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./bundles/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var p=l;a.push([1,1]),s()}([,function(t,e,s){"use strict";s.r(e);var i=s(0);class r extends i.a{constructor(){super();const t=this.constructor.properties;for(let e in t)this._setPropertyValue(e,t)}update(t){const e=this.constructor.properties;t.forEach((t,s)=>{this[e[s].observer]&&this[e[s].observer].apply(this,[this[s],t])}),super.update(t)}_setPropertyValue(t,e){let s;e[t].hasOwnProperty("value")?s=e[t].value:e[t].type&&(e[t].type===Number&&(s=null),e[t].type===String&&(s=""),e[t].type===Array&&(s=[]),e[t].type===Object&&(s={})),this[t]=s}sendCustomEvent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}}class a extends r{static get is(){return"app-registration-form"}static get properties(){return{firstName:{type:String,reflect:!0,attribute:"first-name"},lastName:{type:String,reflect:!0,attribute:"first-name"},email:{type:String,reflect:!0,attribute:"email"},paroliOne:{type:String,reflect:!0,attribute:"paroliOne"},paroliTwo:{type:String,reflect:!0,attribute:"paroliTwo"},submitBtn:{type:String},editUser:{type:Object,observer:"_editUserChange"},_id:{type:String}}}static get styles(){return i.b`
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
                                @click="${this._saveUsersData}">sumbit
                        </button>
                    </div>
                </div>
            </div>
        `}_saveUsersData(){const t={firstName:this.firstName,lastName:this.lastName,email:this.email,paroliOne:this.paroliOne,paroliTwo:this.paroliTwo,_id:this._id};console.log(t),this.sendCustomEvent("save-user-data",t)}static get validation(){return{firstName:/^[a-zA-Z]{2,}$/,lastName:/^[a-zA-Z]{2,}$/,email:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,paroliOne:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,paroliTwo:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/}}_setInputValue(t){const e=t.currentTarget,s=e.id;if(this[s]=t.target.value,a.validation[s]){a.validation[s].test(this[s])?e.removeAttribute("invalid"):e.setAttribute("invalid","")}}get disabled(){let t=Object.keys(a.validation).some(t=>!a.validation[t].test(this[t]));return!1===t&&this.paroliOne!==this.paroliTwo&&(t=!0),t}_editUserChange(t){for(let e in t)this[e]=t[e]}constructor(){super(),this.firstName="",this.lastName="",this.email="",this.paroliOne="",this.paroliTwo="",this.editUser={},this._id=""}}customElements.define(a.is,a);class n extends r{static get is(){return"app-user-list"}static get styles(){return i.b`
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

            .user-info-container {
              max-width: 768px;
            }
          }
        `}render(){return i.c`
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
                        ${this.usersList.map((t,e)=>i.c`
                                    <div class="grid_user-row">
                                        <span><b>${e+1}</b></span>
                                        <span><b>${t.firstName}</b></span>
                                        <span>${t.lastName}</span>
                                        <span>${t.email}</span>
                                        <span>${t.paroliOne}</span>
                                        <span>${t.paroliTwo}</span>
                                        <div class="action-btns">
                                            <button
                                                    @click="${()=>this.editUser(t)}">
                                                🖊️
                                            </button>
                                            <button
                                                    class="delete-btn btn"
                                                    @click="${()=>this._deleteUserData(t)}"
                                            > ❌
                                            </button>
                                        </div>
                                    </div>
                                `)}
                    </div>
                </div>
        `}static get properties(){return{usersList:{type:Array},id:{type:String}}}editUser(t){this.sendCustomEvent("edit-user-data",t),console.log(t)}_deleteUserData(t){this.sendCustomEvent("delete-user-data",t)}constructor(){super(),this.usersList=[]}}customElements.define(n.is,n);class o{static get methods(){return{post:"POST",get:"GET"}}static call(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const i={accept:"*/*"};s===o.methods.post&&(i["Content-Type"]="application/x-www-form-urlencoded");const r={method:s,headers:i},a=new URLSearchParams(e).toString();return s===o.methods.post?r.body=a:s===o.methods.get&&(t=t+"?"+a),fetch(t,r).then(t=>t.json())}}class l extends r{static get is(){return"app-users-module"}static get styles(){return i.b`
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
        `}static get properties(){return{usersList:{type:Array},editUser:{type:Object}}}connectedCallback(){super.connectedCallback(),this.addEventListener("save-user-data",async t=>{console.log(t),await this._saveUsersData(t.detail)}),this.addEventListener("edit-user-data",async t=>{await this._editUserData(t.detail)}),this.addEventListener("delete-user-data",async t=>{await this._deleteUserData(t.detail)}),this._getUserList()}_saveUsersData(t){console.log(t),o.call("/api/client/updateClientData",t,o.methods.post).then(t=>{this._getUserList()}).catch(t=>{console.log(t)})}_getUserList(){o.call("/api/client/getClientInfo").then(t=>this.usersList=t).catch(t=>console.log(t))}_editUserData(t){this.shadowRoot.getElementById("form")._editUserChange(t)}_deleteUserData(t){const e=t._id;console.log(e),o.call("/api/client/deleteUser",{_id:e},o.methods.get).then(()=>this._getUserList()).catch(t=>console.log(t))}constructor(){super(),this.usersList=[]}}customElements.define(l.is,l);const d="users",p="chat";class u extends r{static get is(){return"app-root"}static get styles(){return i.b`
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
                                @click="${()=>this.tab=d}">Users
                        </button>
                        <button
                                class="tabs-button"
                                @click="${()=>this.tab=p}">Chat
                        </button>
                    </div>
                </div>
                <div>
                    ${"users"===this.tab?i.c`
                        <app-users-module>`:""}
                    ${"chat"===this.tab?i.c`
                        <app-chat-module>`:""}
                </div>
            </div>
        `}static get properties(){return{tab:{type:String}}}constructor(){super(),this.tab=d}}customElements.define(u.is,u);const c=document.createElement("app-root");document.body.appendChild(c)}]);