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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    background-color: #fff2e8;\\n}\\n\\nimg.logo {\\n    width: 100px;\\n    height: auto;\\n}\\n\\nimg.menu-image {\\n    max-width: 50%;\\n    height: auto;\\n}\\n\\n.content {\\n    display: block; \\n    margin: 30px auto;\\n    text-align: center;\\n    width: 700px;\\n}\\n\\n.main {\\n    background-color: #ffffff;\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    align-items: center;\\n    justify-content: space-around;\\n}\\n\\n.tab {\\n    margin: 5px;\\n    flex: 1;\\n}\\n\\n.tab-selected, .tab:hover {\\n    margin: 5px;\\n    flex: 1;\\n    background-color: #4e453e;\\n    color: #fff2e8\\n}\\n\\n.menu-container {\\n    display: grid;\\n    grid-template-columns: 50% 50%;\\n    grid-template-rows: 50% 50%;\\n}\\n\\nh1, h2 {\\n    color: #4e453e\\n}\\n\\nh3, p {\\n    text-align: left;\\n    padding: 15px;\\n}\\n\\ninput {\\n    margin: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/cabbage-logo.png":
/*!******************************!*\
  !*** ./src/cabbage-logo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7bde31da1260aecc29da.png\";\n\n//# sourceURL=webpack://restaurant/./src/cabbage-logo.png?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderGen\": () => (/* binding */ HeaderGen)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _cabbage_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cabbage-logo.png */ \"./src/cabbage-logo.png\");\n\n\n\nconst HeaderGen = () => {\n\n    const content = document.querySelector(\".content\")\n          \n    const domElement = obj => {\n        \n        let domEl = document.createElement(obj.tag)\n        \n        if (obj.content) domEl.innerText = obj.content\n        \n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n          \n        }\n        if (obj.tag == \"img\") {\n            domEl.src = obj.src;\n        }\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))                     \n        }\n        return domEl\n    }   \n\n    const headerTemplate = {\n\n        tag: 'div',\n        classes: ['header'],\n        children: [\n            {\n                tag: 'img',\n                src: _logo_png__WEBPACK_IMPORTED_MODULE_0__,\n                classes: ['logo'],\n            },\n            {\n                tag: 'img',\n                src: _cabbage_logo_png__WEBPACK_IMPORTED_MODULE_1__,\n                classes: ['logo'],\n            },\n            {\n                tag: 'h1',\n                content: `Clams n' Cabbage`,\n            },\n            {\n                tag: 'h2',\n                content: `the finest clams n cabbage the world did ever taste!`,\n            }\n        ]\n    }\n    let gen = domElement(headerTemplate)\n    content.prepend(gen)\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.js */ \"./src/tab.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ \"./src/info.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.HeaderGen)();\n(0,_tab_js__WEBPACK_IMPORTED_MODULE_2__.TabGen)();\n(0,_info_js__WEBPACK_IMPORTED_MODULE_3__.InfoGen)();\n\nconst tabs = document.querySelectorAll(\".tab\")\nconst main = document.querySelector(\".main\")\n\ntabs.forEach(tab => {\n  tab.onclick = (e) => {\n\n    let toRemove = document.querySelector(\".tab-content\");\n    let toAdd = e.target.outerText;\n\n    if (toRemove) main.removeChild(toRemove);\n\n\n    switch (toAdd) {\n      case \"Menu\":\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.MenuGen)();\n        activeTab(e, \"menu\");\n        break;\n      case \"Info\":\n        (0,_info_js__WEBPACK_IMPORTED_MODULE_3__.InfoGen)();\n        activeTab(e, \"info\");\n        break;\n      case \"Contact\":\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_5__.ContactGen)();\n        activeTab(e, \"contact\");\n        break;\n    }\n  }\n});\n\nfunction activeTab(e, tab) {\n\n  let removeActive = document.querySelector(\".tab-selected\")\n  removeActive.classList.remove(\"tab-selected\")\n\n  if (e.target.classList.contains(`tab-${tab}`)) {\n    e.target.classList.add(\"tab-selected\")\n  }\n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfoGen\": () => (/* binding */ InfoGen)\n/* harmony export */ });\nconst InfoGen = () => {\n\n    const content = document.querySelector(\".main\")\n\n    const domElement = obj => {\n\n        let domEl = document.createElement(obj.tag)\n\n        if (obj.content) domEl.innerText = obj.content\n\n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n\n        }\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))\n        }\n        return domEl\n    }\n\n    const infoTemplate = {\n\n        tag: 'div',\n        classes: ['tab-content', 'tab-info'],\n        children: [\n            {\n                tag: `h3`,\n                content: `About Clams n' Cabbage`\n            },\n            {\n                tag: `p`,\n                content: `Clams n' Cabbage was established in 1337 and is the oldest running dual-food specialist in the Northern Hemisphere. We are a family run operation,with our super secret special and infamous clam and cabbage recipes having been passed down the generations. Come and enjoy our authentic seabed-to-seedbed cuisine in a relaxed, friendly atmosphere!`\n            },\n        ]\n\n    }\n\n\n    let gen = domElement(infoTemplate)\n    content.append(gen)\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/info.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aab59f3f1aa01ae21575.png\";\n\n//# sourceURL=webpack://restaurant/./src/logo.png?");

/***/ }),

/***/ "./src/menu-cabbage.jpg":
/*!******************************!*\
  !*** ./src/menu-cabbage.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6da703cb1b47ec59be5c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-cabbage.jpg?");

/***/ }),

/***/ "./src/menu-cabbagenclams.jpg":
/*!************************************!*\
  !*** ./src/menu-cabbagenclams.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b7f6a6cb0e3fa16076c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-cabbagenclams.jpg?");

/***/ }),

/***/ "./src/menu-clams.jpeg":
/*!*****************************!*\
  !*** ./src/menu-clams.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ab4ce6fa2a0d1071a1a.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-clams.jpeg?");

/***/ }),

/***/ "./src/menu-clamsncabbage.jpg":
/*!************************************!*\
  !*** ./src/menu-clamsncabbage.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8aa64a3850756d735106.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-clamsncabbage.jpg?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuGen\": () => (/* binding */ MenuGen)\n/* harmony export */ });\n/* harmony import */ var _menu_cabbage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-cabbage.jpg */ \"./src/menu-cabbage.jpg\");\n/* harmony import */ var _menu_cabbagenclams_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-cabbagenclams.jpg */ \"./src/menu-cabbagenclams.jpg\");\n/* harmony import */ var _menu_clams_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-clams.jpeg */ \"./src/menu-clams.jpeg\");\n/* harmony import */ var _menu_clamsncabbage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-clamsncabbage.jpg */ \"./src/menu-clamsncabbage.jpg\");\n\n\n\n\n\nconst MenuGen = () => {\n\n    const content = document.querySelector(\".main\")\n\n    const domElement = obj => {\n\n        let domEl = document.createElement(obj.tag)\n\n        if (obj.content) domEl.innerText = obj.content\n\n        if (obj.classes) for (let cssClass of obj.classes) {\n            domEl.classList.add(cssClass)\n        }\n        if (obj.tag == \"img\") {\n            domEl.src = obj.src;\n        }\n        if (obj.children) for (let child of obj.children) {\n            domElement(child)\n            domEl.append(domElement(child))\n        }\n        return domEl\n    }\n\n    const menuTemplate = {\n\n        tag: 'div',\n        classes: ['tab-content', 'tab-menu'],\n        children: [\n            {\n                tag: `h3`,\n                content: `Our Award-Winning Menu`\n            },\n            {\n                tag: `div`,\n                classes: ['menu-container'],\n                children: [\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: _menu_clams_jpeg__WEBPACK_IMPORTED_MODULE_2__\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Clams\",\n                            }\n                        ]\n                    },\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: _menu_cabbage_jpg__WEBPACK_IMPORTED_MODULE_0__\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Cabbage\",\n                            }\n                        ]\n                    },\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: _menu_clamsncabbage_jpg__WEBPACK_IMPORTED_MODULE_3__\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Clams with Cabbage\",\n                            }\n                        ]\n                    },\n                    {\n                        tag: `figure`,\n                        children: [\n                            {\n                                tag: 'img',\n                                classes: [`menu-image`],\n                                src: _menu_cabbagenclams_jpg__WEBPACK_IMPORTED_MODULE_1__\n                            },\n                            {\n                                tag: 'figcaption',\n                                content: \"Cabbage with Clams\",\n                            }\n                        ]\n                    },\n                ]\n            }\n        ]\n    }\n\n    let gen = domElement(menuTemplate)\n    content.append(gen)\n\n};\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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