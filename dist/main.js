/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderGen\": () => (/* binding */ HeaderGen)\n/* harmony export */ });\nconst HeaderGen = (() => {\n\n    const content = document.querySelector(\".content\")\n          \n    const domElement = obj => {\n        \n        let domEl = document.createElement(obj.tag)\n        \n        if (obj.content) domEl.innerText = obj.content\n        \n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n          \n        }\n        if (obj.tag == \"img\") {\n            domEl.src = \"logo\";\n        }\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))                     \n        }\n        return domEl\n    }   \n\n    const headerTemplate = {\n\n        tag: 'div',\n        classes: ['header'],\n        children: [\n            {\n                tag: 'img',\n                src: 'logo',\n                classes: ['logo'],\n            },\n            {\n                tag: 'h1',\n                content: `Clams n' Cabbage`,\n            },\n            {\n                tag: 'h2',\n                content: `the finest clams n cabbage the world did ever taste!`,\n            }\n        ]\n    }\n    let gen = domElement(headerTemplate)\n    content.prepend(gen)\n\n})();\n\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.js */ \"./src/info.js\");\n\n\n\nconsole.log(\"test working fine\")\n\n//file module for the main page info of the restaurant page\n\n_header_js__WEBPACK_IMPORTED_MODULE_0__.HeaderGen;\n_info_js__WEBPACK_IMPORTED_MODULE_1__.InfoGen;\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfoGen\": () => (/* binding */ InfoGen)\n/* harmony export */ });\nconst InfoGen = (() => {\n\n    const content = document.querySelector(\".content\")\n\n    const domElement = obj => {\n\n        let domEl = document.createElement(obj.tag)\n\n        if (obj.content) domEl.innerText = obj.content\n\n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n\n        }        \n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))\n        }\n        return domEl\n    }\n\n    const infoTemplate = {\n\n        tag: 'div',\n        classes: ['main'],\n        children: [\n            {\n                tag: 'div',\n                classes: ['tab'],\n                content: `Info`,\n            },\n            {\n                tag: 'div',\n                classes: ['tab'],\n                content: `Menu`,\n            },\n            {\n                tag: 'div',\n                classes: ['tab'],\n                content: `Contact`,\n            },\n            {\n                tag: 'div',\n                classes: ['tab-content'],\n                children: [\n                    {\n                        tag: `h3`,\n                        content: `About Clams n' Cabbage`\n                    },\n                    {\n                        tag: `p`,\n                        content: `Clams n' Cabbage was established in 1337 \n                        and is the oldest running dual-food specialist in \n                        the Northern Hemisphere. We are a family run operation,\n                        with our super secret special and infamous clam and\n                        cabbage recipes having been passed down the generations.\n                        Come and enjoy our authentic seabed-to-seedbed cuisine\n                        in a relaxed, friendly atmosphere!`\n                    },\n                ]\n            },\n        ]\n    }\n    let gen = domElement(headerTemplate)\n    content.append(gen)\n\n})();\n\n\n\n//# sourceURL=webpack://restaurant/./src/info.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;