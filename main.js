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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactGen\": () => (/* binding */ ContactGen)\n/* harmony export */ });\nconst ContactGen = () => {\n\n    const content = document.querySelector(\".main\")\n\n    const domElement = obj => {\n\n        let domEl = document.createElement(obj.tag)\n\n        if (obj.content) domEl.innerText = obj.content\n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n        }\n        if (obj.for) domEl.htmlFor = obj.for\n        if (obj.tag) domEl.tag = obj.tag\n        if (obj.type) domEl.type = obj.type\n        if (obj.name) domEl.name = obj.name        \n        if (obj.value) domEl.value = obj.value\n        if (obj.rows) domEl.rows = obj.rows\n        if (obj.cols) domEl.cols = obj.cols\n        if (obj.required) domEl.required = obj.required\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))\n        }\n        return domEl\n    }\n\n    const contactTemplate = {\n\n        tag: 'div',\n        classes: ['tab-content', 'tab-contact'],\n        children: [\n\n            {\n                tag: `h3`,\n                content: `Get in Contact!`\n            },\n            {\n            tag: 'form',\n            children: [\n                {\n                    tag: `div`,\n                    children: [\n                        {\n                            tag: 'label',\n                            for: 'name',\n                            content: 'Name:',\n                        },\n                        {\n                            tag: 'input',\n                            type: 'text',\n                            name: 'name',\n                            required: 'required',\n                        }\n                    ]\n                },\n                {\n                    tag: `div`,\n                    children: [\n                        {\n                            tag: 'label',\n                            for: 'email',\n                            content: 'Email:',\n                        },\n                        {\n                            tag: 'input',\n                            type: 'email',\n                            name: 'email',\n                            required: 'required',\n                        }\n                    ]\n                },\n                {\n                    tag: `div`,\n                    children: [\n                        {\n                            tag: 'label',\n                            for: 'message',\n                            content: 'Please type your message here:',\n                        },\n                        {\n                            tag: 'textarea',                            \n                            name: 'message',\n                            rows: '4',\n                            cols: '60',\n                            required: 'required',\n                        }\n                    ]\n                },\n                {\n                    tag: `input`,\n                    type: 'submit',\n                    value: 'submit',\n                },\n            ]\n            }\n        ]\n    }\n\nlet gen = domElement(contactTemplate)\ncontent.append(gen)\n\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderGen\": () => (/* binding */ HeaderGen)\n/* harmony export */ });\nconst HeaderGen = () => {\n\n    const content = document.querySelector(\".content\")\n          \n    const domElement = obj => {\n        \n        let domEl = document.createElement(obj.tag)\n        \n        if (obj.content) domEl.innerText = obj.content\n        \n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n          \n        }\n        if (obj.tag == \"img\") {\n            domEl.src = obj.src;\n        }\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))                     \n        }\n        return domEl\n    }   \n\n    const headerTemplate = {\n\n        tag: 'div',\n        classes: ['header'],\n        children: [\n            {\n                tag: 'img',\n                src: 'logo',\n                classes: ['logo'],\n            },\n            {\n                tag: 'img',\n                src: 'cabbage-logo.png',\n                classes: ['logo'],\n            },\n            {\n                tag: 'h1',\n                content: `Clams n' Cabbage`,\n            },\n            {\n                tag: 'h2',\n                content: `the finest clams n cabbage the world did ever taste!`,\n            }\n        ]\n    }\n    let gen = domElement(headerTemplate)\n    content.prepend(gen)\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.js */ \"./src/tab.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.js */ \"./src/info.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.HeaderGen)();\n(0,_tab_js__WEBPACK_IMPORTED_MODULE_1__.TabGen)();\n(0,_info_js__WEBPACK_IMPORTED_MODULE_2__.InfoGen)();\n\nconst tabs = document.querySelectorAll(\".tab\")\nconst main = document.querySelector(\".main\")\n\ntabs.forEach(tab => {\n  tab.onclick = (e) => {\n\n    let toRemove = document.querySelector(\".tab-content\");\n    let toAdd = e.target.outerText;\n\n    if (toRemove) main.removeChild(toRemove);\n\n\n    switch (toAdd) {\n      case \"Menu\":\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.MenuGen)();\n        activeTab(e, \"menu\");\n        break;\n      case \"Info\":\n        (0,_info_js__WEBPACK_IMPORTED_MODULE_2__.InfoGen)();\n        activeTab(e, \"info\");\n        break;\n      case \"Contact\":\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.ContactGen)();\n        activeTab(e, \"contact\");\n        break;\n    }\n  }\n});\n\nfunction activeTab(e, tab) {\n\n  let removeActive = document.querySelector(\".tab-selected\")\n  removeActive.classList.remove(\"tab-selected\")\n\n  if (e.target.classList.contains(`tab-${tab}`)) {\n    e.target.classList.add(\"tab-selected\")\n  }\n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfoGen\": () => (/* binding */ InfoGen)\n/* harmony export */ });\nconst InfoGen = () => {\n\n    const content = document.querySelector(\".main\")\n\n    const domElement = obj => {\n\n        let domEl = document.createElement(obj.tag)\n\n        if (obj.content) domEl.innerText = obj.content\n\n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n\n        }\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))\n        }\n        return domEl\n    }\n\n    const infoTemplate = {\n\n        tag: 'div',\n        classes: ['tab-content', 'tab-info'],\n        children: [\n            {\n                tag: `h3`,\n                content: `About Clams n' Cabbage`\n            },\n            {\n                tag: `p`,\n                content: `Clams n' Cabbage was established in 1337 and is the oldest running dual-food specialist in the Northern Hemisphere. We are a family run operation,with our super secret special and infamous clam and cabbage recipes having been passed down the generations. Come and enjoy our authentic seabed-to-seedbed cuisine in a relaxed, friendly atmosphere!`\n            },\n        ]\n\n    }\n\n\n    let gen = domElement(infoTemplate)\n    content.append(gen)\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/info.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuGen\": () => (/* binding */ MenuGen)\n/* harmony export */ });\nconst MenuGen = () => {\n\n    const content = document.querySelector(\".main\")\n\n    const domElement = obj => {\n\n        let domEl = document.createElement(obj.tag)\n\n        if (obj.content) domEl.innerText = obj.content\n\n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n        }\n        if (obj.tag == \"img\") {\n            domEl.src = obj.src;\n        }\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))\n        }\n        return domEl\n    }\n\n    const menuTemplate = {\n\n        tag: 'div',\n        classes: ['tab-content', 'tab-menu'],\n        children: [\n            {\n                tag: `h3`,\n                content: `Our Award-Winning Menu`\n            },\n            {\n                tag: `div`,\n                classes: ['menu-container'],\n                children: [\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: \"menu-clams.jpeg\"\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Clams\",\n                            }\n                        ]\n                    },\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: \"menu-cabbage.jpg\"\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Cabbage\",\n                            }\n                        ]\n                    },\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: \"menu-clamsncabbage.jpg\"\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Clams with Cabbage\",\n                            }\n                        ]\n                    },\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: \"menu-cabbagenclams.jpg\"\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Cabbage with Clams\",\n                            }\n                        ]\n                    },\n                ]\n            }\n        ]\n    }\n\n    let gen = domElement(menuTemplate)\n    content.append(gen)\n\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TabGen\": () => (/* binding */ TabGen)\n/* harmony export */ });\nconst TabGen = () => {\n\n    const content = document.querySelector(\".content\")\n          \n    const domElement = obj => {\n        \n        let domEl = document.createElement(obj.tag)\n        \n        if (obj.content) domEl.innerText = obj.content\n        \n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n          \n        }       \n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))                     \n        }\n        return domEl\n    }   \n\n    const tabTemplate = {\n\n        tag: 'div',\n        classes: ['main'],\n        children: [\n            {\n                tag: 'div',\n                classes: ['tab', 'tab-info', 'tab-selected'],\n                content: `Info`,\n            },\n            {\n                tag: 'div',\n                classes: ['tab', 'tab-menu'],\n                content: `Menu`,\n            },\n            {\n                tag: 'div',\n                classes: ['tab', 'tab-contact'],\n                content: `Contact`,\n            },\n        ]\n    }\n\n    let gen = domElement(tabTemplate)\n    content.appendChild(gen)\n\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/tab.js?");

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