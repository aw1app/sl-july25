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

/***/ "./src/calculate.js":
/*!**************************!*\
  !*** ./src/calculate.js ***!
  \**************************/
/***/ ((module) => {

eval("{module.exports = {\r\n    sum: function (a, b) {\r\n        return a + b\r\n    },\r\n    multiply: function (a, b) {\r\n        return a * b\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://webpack/./src/calculate.js?\n}");

/***/ }),

/***/ "./src/calculate2.js":
/*!***************************!*\
  !*** ./src/calculate2.js ***!
  \***************************/
/***/ ((module) => {

eval("{module.exports = {\r\n    divide: function (a, b) {\r\n        return a /  b\r\n    }\r\n};\n\n//# sourceURL=webpack://webpack/./src/calculate2.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{var tools = __webpack_require__(/*! ./calculate */ \"./src/calculate.js\");\r\nvar value = tools.sum(10,20);\r\nconsole.log(\"Value: \"+value);\r\n\r\n\r\n\r\nvar tools2 = __webpack_require__(/*! ./calculate2 */ \"./src/calculate2.js\");\r\nvar value = tools2.divide(10,20);\r\nconsole.log(\"Div Value: \"+value);\r\n\r\n\r\nwindow.tools = tools;\r\nwindow.tools2 = tools2;\n\n//# sourceURL=webpack://webpack/./src/index.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;