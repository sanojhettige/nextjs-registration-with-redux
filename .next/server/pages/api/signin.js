"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "./pages/api/delay.js":
/*!****************************!*\
  !*** ./pages/api/delay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sleep\": () => (/* binding */ sleep),\n/* harmony export */   \"randomDelay\": () => (/* binding */ randomDelay)\n/* harmony export */ });\nconst delayRange = {\n  min: 1,\n  max: 3\n};\n\nconst sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n\nconst randomDelay = Math.floor(Math.random() * (delayRange.max - delayRange.min) * 1000) + delayRange.min * 1000;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGVsYXkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLEdBQUcsRUFBRSxDQURZO0FBRWpCQyxFQUFBQSxHQUFHLEVBQUU7QUFGWSxDQUFuQjs7QUFJQSxNQUFNQyxLQUFLLEdBQUdDLEVBQUUsSUFBSSxJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBakMsQ0FBcEI7O0FBRUEsTUFBTUksV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCWCxVQUFVLENBQUNFLEdBQVgsR0FBaUJGLFVBQVUsQ0FBQ0MsR0FBN0MsSUFBb0QsSUFBL0QsSUFBdUVELFVBQVUsQ0FBQ0MsR0FBWCxHQUFpQixJQUE1RyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9kZWxheS5qcz8zMWJkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGF5UmFuZ2UgPSB7XG4gIG1pbjogMSxcbiAgbWF4OiAzXG59XG5jb25zdCBzbGVlcCA9IG1zID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG5cbmNvbnN0IHJhbmRvbURlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGRlbGF5UmFuZ2UubWF4IC0gZGVsYXlSYW5nZS5taW4pICogMTAwMCkgKyBkZWxheVJhbmdlLm1pbiAqIDEwMDBcblxuZXhwb3J0IHsgc2xlZXAsIHJhbmRvbURlbGF5IH07Il0sIm5hbWVzIjpbImRlbGF5UmFuZ2UiLCJtaW4iLCJtYXgiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmFuZG9tRGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/delay.js\n");

/***/ }),

/***/ "./pages/api/signin.js":
/*!*****************************!*\
  !*** ./pages/api/signin.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay */ \"./pages/api/delay.js\");\n\n\nasync function signinHandler(req, res) {\n  await (0,_delay__WEBPACK_IMPORTED_MODULE_0__.sleep)(_delay__WEBPACK_IMPORTED_MODULE_0__.randomDelay);\n  res.status(200).json({\n    \"access_token\": \"2|FPGlkVE1Dj6a80NJvgHP5ML5I4CaWZzR3lFa95xG\"\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signinHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2lnbmluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0EsZUFBZUUsYUFBZixDQUE4QkMsR0FBOUIsRUFBbUNDLEdBQW5DLEVBQXdDO0FBQ3RDLFFBQU1KLDZDQUFLLENBQUNDLCtDQUFELENBQVg7QUFDQUcsRUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUNHQyxJQURILENBQ1E7QUFDTixvQkFBZ0I7QUFEVixHQURSO0FBSUQ7O0FBQ0QsaUVBQWVKLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2lnbmluLmpzPzljYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2xlZXAsIHJhbmRvbURlbGF5IH0gZnJvbSBcIi4vZGVsYXlcIlxuYXN5bmMgZnVuY3Rpb24gc2lnbmluSGFuZGxlciAocmVxLCByZXMpIHtcbiAgYXdhaXQgc2xlZXAocmFuZG9tRGVsYXkpXG4gIHJlcy5zdGF0dXMoMjAwKVxuICAgIC5qc29uKHtcbiAgICBcImFjY2Vzc190b2tlblwiOiBcIjJ8RlBHbGtWRTFEajZhODBOSnZnSFA1TUw1STRDYVdaelIzbEZhOTV4R1wiLFxufSlcbn1cbmV4cG9ydCBkZWZhdWx0IHNpZ25pbkhhbmRsZXJcbiJdLCJuYW1lcyI6WyJzbGVlcCIsInJhbmRvbURlbGF5Iiwic2lnbmluSGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/signin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/signin.js"));
module.exports = __webpack_exports__;

})();