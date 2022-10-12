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

/***/ "./app/src/app.js":
/*!************************!*\
  !*** ./app/src/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: [BABEL] /Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/app/src/app.js: @babel/helper-compilation-targets: '' is not a valid value for 'targets.chrome'. (While processing: \\\"/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/preset-env/lib/index.js\\\")\\n    at semverifyTarget (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/helper-compilation-targets/src/index.ts:130:11)\\n    at defaultTargetParser (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/helper-compilation-targets/src/index.ts:153:7)\\n    at getTargets (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/helper-compilation-targets/src/index.ts:274:11)\\n    at getLocalTargets (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/preset-env/lib/index.js:227:48)\\n    at /Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/preset-env/lib/index.js:288:15\\n    at /Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/helper-plugin-utils/src/index.ts:35:12\\n    at async (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/core/lib/gensync-utils/async.js:44:33)\\n    at async (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/gensync/index.js:186:15)\\n    at /Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/gensync/index.js:216:13\\n    at Generator.next (<anonymous>)\\n    at /Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/core/lib/config/full.js:229:21\\n    at Generator.next (<anonymous>)\\n    at Function.<anonymous> (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/@babel/core/lib/gensync-utils/async.js:25:3)\\n    at Generator.next (<anonymous>)\\n    at step (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/gensync/index.js:269:25)\\n    at evaluateAsync (/Users/jemaltadumadze/Desktop/Liderator2/liderator2-2/node_modules/gensync/index.js:291:5)\");\n\n//# sourceURL=webpack:///./app/src/app.js?");

/***/ })

/******/ });