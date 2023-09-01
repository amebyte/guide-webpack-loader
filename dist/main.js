/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/index/index.wxml":
/*!********************************!*\
  !*** ./pages/index/index.wxml ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n        const parentEl = document.getElementsByTagName(\"body\")[0]\n        const createElement = (text) => {\n            const el = document.createElement(\"div\")\n            el.textContent = text\n            parentEl.insertBefore(el, null);\n        }\n     const tools = __webpack_require__(/*! ../tools.wxs */ \"./pages/tools.wxs\") \ncreateElement(tools.msg)\ncreateElement(tools.bar(tools.FOO))\n\n\n//# sourceURL=webpack://loader-teach/./pages/index/index.wxml?");

/***/ }),

/***/ "./pages/tools.wxs":
/*!*************************!*\
  !*** ./pages/tools.wxs ***!
  \*************************/
/***/ ((module) => {

eval("var foo = \"'hello world' from tools.wxs\";\r\nvar bar = function (d) { return d; }\r\nmodule.exports = { FOO: foo, bar: bar, }; module.exports.msg = \"some msg\";\n\n//# sourceURL=webpack://loader-teach/./pages/tools.wxs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./pages/index/index.wxml");
/******/ 	
/******/ })()
;