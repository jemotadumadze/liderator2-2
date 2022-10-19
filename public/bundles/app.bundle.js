/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/app-root.js":
/*!*****************************!*\
  !*** ./app/src/app-root.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('aaaa');\n\n//# sourceURL=webpack:///./app/src/app-root.js?");

/***/ }),

/***/ "./app/src/app.js":
/*!************************!*\
  !*** ./app/src/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-root.js */ \"./app/src/app-root.js\");\n/* harmony import */ var _app_root_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_root_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_rest_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/rest-client.js */ \"./app/src/core/rest-client.js\");\n/* harmony import */ var _components_app_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-input.js */ \"./app/src/components/app-input.js\");\n/* harmony import */ var _components_app_input_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_app_input_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst element = document.createElement('app-input');\ndocument.body.appendChild(element);\n_core_rest_client_js__WEBPACK_IMPORTED_MODULE_1__[\"RestClient\"].call('/api/users/login', {\n  id: 1234,\n  userName: 'adfsda'\n}, _core_rest_client_js__WEBPACK_IMPORTED_MODULE_1__[\"RestClient\"].methods.get);\n\n//# sourceURL=webpack:///./app/src/app.js?");

/***/ }),

/***/ "./app/src/components/app-input.js":
/*!*****************************************!*\
  !*** ./app/src/components/app-input.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const template = `\n<style>\n\n    :host{\n        border: 5px solid green;\n    }\n    input{\n        background: red;\n    }\n </style>\n <input>\n`;\nclass AppInput extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({\n      mode: \"open\"\n    });\n    this.shadowRoot.innerHTML = template;\n  }\n  connectedCallback() {\n    console.log('Connected');\n  }\n  disconnectedCallback() {\n    console.log('Dconnected');\n  }\n  attributeChangedCallback(name, oldValue, newValue) {\n    console.log('web');\n  }\n  static get observedAttributes() {\n    return ['name', 'value'];\n  }\n}\ncustomElements.define('app-input', AppInput);\n\n//# sourceURL=webpack:///./app/src/components/app-input.js?");

/***/ }),

/***/ "./app/src/core/rest-client.js":
/*!*************************************!*\
  !*** ./app/src/core/rest-client.js ***!
  \*************************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestClient\", function() { return RestClient; });\nclass RestClient {\n  static get methods() {\n    return {\n      post: 'POST',\n      get: 'GET'\n    };\n  }\n  static call(route) {\n    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    let method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    const headers = {\n      accept: '*/*'\n    };\n    if (method === RestClient.methods.post) {\n      headers['Content-Type'] = 'application/x-www-form-urlencoded';\n    }\n    const config = {\n      method,\n      headers\n    };\n    const query = new URLSearchParams(params).toString();\n    if (method === RestClient.methods.post) {\n      config.body = query;\n    } else if (method === RestClient.methods.get) {\n      route = route + '?' + query;\n    }\n    return fetch(route, config);\n  }\n}\n\n\n//# sourceURL=webpack:///./app/src/core/rest-client.js?");

/***/ })

/******/ });