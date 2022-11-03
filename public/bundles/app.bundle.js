/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./bundles/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/src/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/app-root.js":
/*!*****************************!*\
  !*** ./app/src/app-root.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/base-element.js */ \"./app/src/core/base-element.js\");\n/* harmony import */ var _modules_users_app_users_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/users/app-users-module.js */ \"./app/src/modules/users/app-users-module.js\");\n\n\nconst tabs = {\n  users: 'users',\n  chat: 'chat'\n};\nclass AppRoot extends _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"BaseElement\"] {\n  static get is() {\n    return 'app-root';\n  }\n  static get styles() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n          //.container {\n          //  width: 1000px;\n          //  margin: auto;\n          //}\n\n          .header {\n            background-color: cadetblue;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n          }\n\n          .header button {\n            width: 100px;\n            border-radius: 12px;\n            margin: 16px 0;\n          }\n\n          .header-button {\n            align-items: center;\n          }\n          @media (max-width: 1024px) {\n            .container{\n              margin: auto;\n            }\n          }\n        `;\n  }\n  render() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n            <div class=\"container\">\n                <div class=\"header\">\n                    <div class=\"header-button\">\n                        <button class=\"users-button\"\n                                @click=\"${() => this.tab = tabs.users}\">Users\n                        </button>\n                        <button\n                                class=\"tabs-button\"\n                                @click=\"${() => this.tab = tabs.chat}\">Chat\n                        </button>\n                    </div>\n                </div>\n                <div>\n                    ${this.tab === 'users' ? _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n                        <app-users-module>` : ''}\n                    ${this.tab === 'chat' ? _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n                        <app-chat-module>` : ''}\n                </div>\n            </div>\n        `;\n  }\n  static get properties() {\n    return {\n      tab: {\n        type: String\n      }\n    };\n  }\n  constructor() {\n    super();\n    this.tab = tabs.users;\n  }\n}\ncustomElements.define(AppRoot.is, AppRoot);\n\n//# sourceURL=webpack:///./app/src/app-root.js?");

/***/ }),

/***/ "./app/src/app.js":
/*!************************!*\
  !*** ./app/src/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-root.js */ \"./app/src/app-root.js\");\n\nconst element = document.createElement('app-root');\ndocument.body.appendChild(element);\n\n//# sourceURL=webpack:///./app/src/app.js?");

/***/ }),

/***/ "./app/src/core/base-element.js":
/*!**************************************!*\
  !*** ./app/src/core/base-element.js ***!
  \**************************************/
/*! exports provided: BaseElement, html, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseElement\", function() { return BaseElement; });\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"css\"]; });\n\n\nclass BaseElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"] {\n  constructor() {\n    super();\n    const properties = this.constructor.properties;\n    for (let key in properties) {\n      this._setPropertyValue(key, properties);\n    }\n  }\n  update(props) {\n    const properties = this.constructor.properties;\n    props.forEach((oldValue, name) => {\n      if (this[properties[name].observer]) {\n        this[properties[name].observer].apply(this, [this[name], oldValue]);\n      }\n    });\n    super.update(props);\n  }\n  _setPropertyValue(key, properties) {\n    let value;\n    if (!properties[key].hasOwnProperty('value')) {\n      if (properties[key].type) {\n        if (properties[key].type === Number) {\n          value = null;\n        }\n        if (properties[key].type === String) {\n          value = '';\n        }\n        if (properties[key].type === Array) {\n          value = [];\n        }\n        if (properties[key].type === Object) {\n          value = {};\n        }\n      }\n    } else {\n      value = properties[key].value;\n    }\n    this[key] = value;\n  }\n  sendCustomEvent(name) {\n    let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    this.dispatchEvent(new CustomEvent(name, {\n      detail,\n      bubbles: true,\n      composed: true\n    }));\n  }\n}\n\n\n//# sourceURL=webpack:///./app/src/core/base-element.js?");

/***/ }),

/***/ "./app/src/core/rest-client.js":
/*!*************************************!*\
  !*** ./app/src/core/rest-client.js ***!
  \*************************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestClient\", function() { return RestClient; });\nclass RestClient {\n  static call(url) {\n    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    return fetch(url, {\n      method: \"POST\",\n      credentials: \"same-origin\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(params)\n    }).then(response => response.json());\n  }\n}\n\n//# sourceURL=webpack:///./app/src/core/rest-client.js?");

/***/ }),

/***/ "./app/src/modules/users/app-registration-form.js":
/*!********************************************************!*\
  !*** ./app/src/modules/users/app-registration-form.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/base-element.js */ \"./app/src/core/base-element.js\");\n\nclass AppRegistrationForm extends _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"BaseElement\"] {\n  static get is() {\n    return \"app-registration-form\";\n  }\n  static get properties() {\n    return {\n      firstName: {\n        type: String,\n        reflect: true,\n        attribute: 'first-name'\n      },\n      lastName: {\n        type: String,\n        reflect: true,\n        attribute: 'first-name'\n      },\n      email: {\n        type: String,\n        reflect: true,\n        attribute: 'email'\n      },\n      paroliOne: {\n        type: String,\n        reflect: true,\n        attribute: 'paroliOne'\n      },\n      paroliTwo: {\n        type: String,\n        reflect: true,\n        attribute: 'paroliTwo'\n      },\n      submitBtn: {\n        type: String\n      },\n      editUser: {\n        type: Object,\n        observer: '_editUserChange'\n      },\n      _id: {\n        type: String\n      }\n    };\n  }\n  static get styles() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n          :host {\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            margin-bottom: 20px;\n          }\n\n          .registration-form-container {\n            width: 1000px;\n            margin: auto;\n          }\n\n          .sign-up-header {\n            padding: 40px 0;\n          }\n\n          .title {\n            text-align: center;\n          }\n\n          .form {\n            width: 100%;\n            display: grid;\n            grid-template-columns:1fr 1fr 1fr 1fr;\n            grid-gap: 20px;\n          }\n\n          .buttons {\n            grid-column-start: 1;\n            grid-column-end: 5;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-top: 32px;\n          }\n\n          .submit-btn {\n            height: 30px;\n            width: 200px;\n            margin: 0 20px;\n            font-size: 18px;\n            border: none;\n            border-radius: 11px;\n          }\n\n          input {\n            height: 24px;\n            width: 220px;\n            padding: 1px 5px;\n            font-size: 16px;\n            background-color: antiquewhite;\n            border: 2px solid transparent;\n          }\n\n          .error-messages {\n            grid-column-start: 1;\n            grid-column-end: 5;\n            color: red;\n          }\n\n          .valid,\n          input:not([invalid]) {\n            border: 2px solid green;\n          }\n\n          .invalid,\n          input[invalid] {\n            border: 2px solid red;\n            background-color: red;\n          }\n\n          @media (max-width: 1024px) {\n            .form {\n              grid-template-columns: 1fr 1fr;\n            }\n\n            .buttons {\n              grid-column-start: 1;\n              grid-column-end: 3;\n            }\n          }\n        `;\n  }\n  render() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n            <div class=\"registration-form-container\">\n                <div class=\"sign-up-header\">\n                    <h1 class=\"title\">Registration Form</h1>\n                </div>\n                <div class=\"form\">\n                    <label for=\"firstName\">First name </label>\n                    <input\n                            type=\"text\"\n                            id=\"firstName\"\n                            @input=\"${this._setInputValue}\"\n                            .value=\"${this.firstName}\"\n\n                    />\n                    <label for=\"lastName\">Last name *</label>\n                    <input\n                            type=\"text\"\n                            id=\"lastName\"\n                            @input=\"${this._setInputValue}\"\n                            .value=\"${this.lastName}\"\n\n                    />\n                    <label for=\"email\">Email address *</label>\n                    <input\n                            type=\"email\"\n                            id=\"email\"\n                            @input=\"${this._setInputValue}\"\n                            .value=\"${this.email}\"\n                    />\n                    <label for=\"paroliOne\">Password </label>\n                    <input\n                            type=\"password\"\n                            id=\"paroliOne\"\n                            name=\"paroli\"\n                            @input=\"${this._setInputValue}\"\n                            .value=\"${this.paroliOne}\"\n                    />\n                    <label for=\"paroliTwo\">Confirm password</label>\n                    <input\n                            type=\"password\"\n                            id=\"paroliTwo\"\n                            name=\"paroli\"\n                            @input=\"${this._setInputValue}\"\n                            .value=\"${this.paroliTwo}\"\n\n                    />\n                    <div class=\"buttons\">\n                        <button\n                                ?disabled=\"${this.disabled}\"\n                                class=\"submit-btn\"\n                                @click=\"${this._saveUsersData}\">sumbit\n                        </button>\n                    </div>\n                </div>\n            </div>\n        `;\n  }\n  _saveUsersData() {\n    const user = {\n      firstName: this.firstName,\n      lastName: this.lastName,\n      email: this.email,\n      paroliOne: this.paroliOne,\n      paroliTwo: this.paroliTwo,\n      _id: this._id\n    };\n    this.sendCustomEvent('save-user-data', user);\n  }\n  static get validation() {\n    return {\n      firstName: /^[a-zA-Z]{2,}$/,\n      lastName: /^[a-zA-Z]{2,}$/,\n      email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/,\n      paroliOne: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$/,\n      paroliTwo: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$/\n    };\n  }\n  _setInputValue(event) {\n    const targetElement = event.currentTarget;\n    const fieldName = targetElement.id;\n    this[fieldName] = event.target.value;\n    if (AppRegistrationForm.validation[fieldName]) {\n      const valid = AppRegistrationForm.validation[fieldName].test(this[fieldName]);\n      if (valid) {\n        targetElement.removeAttribute('invalid');\n      } else {\n        targetElement.setAttribute('invalid', '');\n      }\n    }\n  }\n  get disabled() {\n    let formInValid = Object.keys(AppRegistrationForm.validation).some(fieldName => {\n      const valid = AppRegistrationForm.validation[fieldName].test(this[fieldName]);\n      return !valid;\n    });\n    if (formInValid === false) {\n      if (this.paroliOne !== this.paroliTwo) {\n        formInValid = true;\n      }\n    }\n    return formInValid;\n  }\n  _editUserChange(newValue) {\n    for (let key in newValue) {\n      this[key] = newValue[key];\n    }\n  }\n  constructor() {\n    super();\n    this.firstName = '';\n    this.lastName = '';\n    this.email = '';\n    this.paroliOne = '';\n    this.paroliTwo = '';\n    this.editUser = {};\n    this._id = '';\n  }\n}\ncustomElements.define(AppRegistrationForm.is, AppRegistrationForm);\n\n//# sourceURL=webpack:///./app/src/modules/users/app-registration-form.js?");

/***/ }),

/***/ "./app/src/modules/users/app-user-list.js":
/*!************************************************!*\
  !*** ./app/src/modules/users/app-user-list.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/base-element.js */ \"./app/src/core/base-element.js\");\n\nclass AppUserList extends _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"BaseElement\"] {\n  static get is() {\n    return \"app-user-list\";\n  }\n  static get styles() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n          :host {\n            display: flex;\n            flex-direction: column;\n          }\n\n          .user-info-container {\n            width: 1000px;\n            margin: auto;\n          }\n\n          .users-info_header {\n            padding: 10px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            flex-flow: row wrap;\n          }\n\n          .users-info_header h3 {\n            margin: 5px 15px;\n          }\n\n          .grid_header-row,\n          .grid_user-row {\n            display: grid;\n            grid-template-columns: 30px repeat(3, 1fr) 180px repeat(2, 1fr);\n            grid-gap: 4px;\n          }\n\n          .grid_header-row span {\n            font-weight: bold;\n          }\n\n          .grid_user-row span {\n            word-wrap: break-word;\n          }\n\n          .action-btns {\n            display: inline-flex;\n            justify-content: space-evenly;\n            align-items: center;\n          }\n\n          @media (max-width: 1024px) {\n            .grid_header-row,\n            .grid_user-row {\n              grid-template-rows: 1fr 1fr;\n              grid-template-columns: repeat(5, 1fr) 150px;\n            }\n\n            .user-info-container {\n              max-width: 768px;\n            }\n          }\n        `;\n  }\n  render() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n            <div class=\"user-info-container\">\n                <div class=\"users-info_header\">\n                    <h3>Users information</h3>\n                    <div class=\"search-bar\">\n                        <input\n                                type=\"text\"\n                                id=\"searchedValue\"\n                        />\n                    </div>\n                </div>\n                <div class=\"users-info_grid\">\n                    <div class=\"grid_header-row\">\n                        <span>#</span>\n                        <span>firstName</span>\n                        <span>lastName</span>\n                        <span>Email</span>\n                        <span>passOne</span>\n                        <span>passTwo</span>\n\n                    </div>\n                    <div class=\"grid_info-rows\" id=\"usersInfoTable\">\n                        ${this.usersList.map((user, index) => _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n                                    <div class=\"grid_user-row\">\n                                        <span><b>${index + 1}</b></span>\n                                        <span><b>${user.firstName}</b></span>\n                                        <span>${user.lastName}</span>\n                                        <span>${user.email}</span>\n                                        <span>${user.paroliOne}</span>\n                                        <span>${user.paroliTwo}</span>\n                                        <div class=\"action-btns\">\n                                            <button\n                                                    @click=\"${() => this.editUser(user)}\">\n                                                🖊️\n                                            </button>\n                                            <button\n                                                    class=\"delete-btn btn\"\n                                                    @click=\"${() => this._deleteUserData(user)}\"\n                                            > ❌\n                                            </button>\n                                        </div>\n                                    </div>\n                                `)}\n                    </div>\n                </div>\n        `;\n  }\n  static get properties() {\n    return {\n      usersList: {\n        type: Array\n      },\n      id: {\n        type: String\n      }\n    };\n  }\n  editUser(user) {\n    this.sendCustomEvent('edit-user-data', user);\n    console.log(user);\n  }\n  _deleteUserData(user) {\n    this.sendCustomEvent('delete-user-data', user);\n  }\n  constructor() {\n    super();\n    this.usersList = [];\n  }\n}\ncustomElements.define(AppUserList.is, AppUserList);\n\n//# sourceURL=webpack:///./app/src/modules/users/app-user-list.js?");

/***/ }),

/***/ "./app/src/modules/users/app-users-module.js":
/*!***************************************************!*\
  !*** ./app/src/modules/users/app-users-module.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/base-element.js */ \"./app/src/core/base-element.js\");\n/* harmony import */ var _app_registration_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-registration-form.js */ \"./app/src/modules/users/app-registration-form.js\");\n/* harmony import */ var _app_user_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-user-list.js */ \"./app/src/modules/users/app-user-list.js\");\n/* harmony import */ var _core_rest_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/rest-client.js */ \"./app/src/core/rest-client.js\");\n\n\n\n\nclass AppUsersModule extends _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"BaseElement\"] {\n  static get is() {\n    return \"app-users-module\";\n  }\n  static get styles() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n          :host {\n            display: flex;\n            flex-direction: column;\n          }\n        `;\n  }\n  render() {\n    return _core_base_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n            <div>\n                <section class=\"sign-up_section\">\n                    <app-registration-form\n                            id=\"form\"\n                            .editUser=\"${this.editUser}\"\n                    ></app-registration-form>\n                </section>\n                <section class=\"users-info_section\">\n                    <app-user-list id=\"list\"\n                                   .usersList=\"${this.usersList}\"></app-user-list>\n                </section>\n            </div\n            >\n        `;\n  }\n  static get properties() {\n    return {\n      usersList: {\n        type: Array\n      },\n      editUser: {\n        type: Object\n      }\n    };\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    this.addEventListener('save-user-data', async event => {\n      await this._saveUsersData(event.detail);\n    });\n    this.addEventListener('edit-user-data', async event => {\n      await this._editUserData(event.detail);\n    });\n    this.addEventListener('delete-user-data', async event => {\n      await this._deleteUserData(event.detail);\n    });\n    this._getUserList();\n  }\n  _saveUsersData(user) {\n    _core_rest_client_js__WEBPACK_IMPORTED_MODULE_3__[\"RestClient\"].call('/api/client/updateClientData', user).then(() => {\n      this._getUserList();\n    }).catch(error => {\n      console.log(error);\n    });\n  }\n  _getUserList() {\n    _core_rest_client_js__WEBPACK_IMPORTED_MODULE_3__[\"RestClient\"].call(\"/api/client/getClientInfo\").then(result => this.usersList = result).catch(error => console.log(error));\n  }\n  _editUserData(user) {\n    this.shadowRoot.getElementById('form')._editUserChange(user);\n  }\n  _deleteUserData(user) {\n    const _id = user._id;\n    _core_rest_client_js__WEBPACK_IMPORTED_MODULE_3__[\"RestClient\"].call('/api/client/deleteUser', {\n      _id\n    }).then(() => this._getUserList()).catch(error => console.log(error));\n  }\n  constructor() {\n    super();\n    this.usersList = [];\n  }\n}\ncustomElements.define(AppUsersModule.is, AppUsersModule);\n\n//# sourceURL=webpack:///./app/src/modules/users/app-users-module.js?");

/***/ })

/******/ });