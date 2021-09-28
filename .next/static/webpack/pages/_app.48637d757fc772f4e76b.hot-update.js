"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/security.tsx":
/*!**************************!*\
  !*** ./lib/security.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"securityMiddleware\": function() { return /* binding */ securityMiddleware; },\n/* harmony export */   \"isLoggedIn\": function() { return /* binding */ isLoggedIn; }\n/* harmony export */ });\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/has */ \"./node_modules/lodash/has.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_auth_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/auth/types */ \"./store/auth/types.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.tsx\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/logger */ \"./utils/logger.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar userProfile = {};\nvar userToken = null;\nvar securityMiddleware = function securityMiddleware() {\n  return function (next) {\n    return function (action) {\n      _utils_logger__WEBPACK_IMPORTED_MODULE_3__.default.log(\"Reducer \".concat(action.type));\n\n      if (action.type === _store_auth_types__WEBPACK_IMPORTED_MODULE_1__.SIGNIN_SUCCESS) {\n        var _action$payload$data;\n\n        userProfile = (_action$payload$data = action.payload.data) === null || _action$payload$data === void 0 ? void 0 : _action$payload$data.data;\n\n        if (!_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.ISSERVER) {\n          window.location = \"\".concat(window.location.origin);\n        }\n      } else if (action.type === _store_auth_types__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_REQUEST) {\n        userToken = null;\n        localStorage.removeItem('token');\n        window.location = \"\".concat(window.location.origin, \"/signin\");\n      } // continue processing this action\n\n\n      return next(action);\n    };\n  };\n};\nvar isLoggedIn = function isLoggedIn(data) {\n  var loggedInToken = null;\n\n  if (!_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.ISSERVER) {\n    loggedInToken = JSON.parse(localStorage.getItem('token'));\n  }\n\n  var d = lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(data || loggedInToken, 'access_token');\n  alert(JSON.stringify(d));\n  return d;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2VjdXJpdHkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJSSxXQUF5QixHQUFHLEVBQWhDO0FBQ0EsSUFBSUMsU0FBd0IsR0FBRyxJQUEvQjtBQUVPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNLFVBQUNDLElBQUQ7QUFBQSxXQUFlLFVBQUNDLE1BQUQsRUFBaUI7QUFDcEVMLE1BQUFBLHNEQUFBLG1CQUFzQkssTUFBTSxDQUFDRSxJQUE3Qjs7QUFDQSxVQUNJRixNQUFNLENBQUNFLElBQVAsS0FBZ0JULDZEQURwQixFQUVFO0FBQUE7O0FBQ0VHLFFBQUFBLFdBQVcsMkJBQUdJLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxJQUFsQix5REFBRyxxQkFBcUJBLElBQW5DOztBQUNBLFlBQUksQ0FBQ1gsb0RBQUwsRUFBZTtBQUNYWSxVQUFBQSxNQUFNLENBQUNDLFFBQVAsYUFBcUJELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBckM7QUFDSDtBQUNKLE9BUEQsTUFPTyxJQUFJUixNQUFNLENBQUNFLElBQVAsS0FBZ0JULDZEQUFwQixFQUFzQztBQUN6Q0ksUUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQWEsUUFBQUEsWUFBWSxDQUFDQyxVQUFiLENBQXdCLE9BQXhCO0FBQ0FMLFFBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxhQUFxQkQsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFyQztBQUNILE9BYm1FLENBY3BFOzs7QUFDQSxhQUFPVCxJQUFJLENBQUNDLE1BQUQsQ0FBWDtBQUNILEtBaEJ1QztBQUFBLEdBQU47QUFBQSxDQUEzQjtBQWtCQSxJQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDUCxJQUFELEVBQW1CO0FBQ3pDLE1BQUlRLGFBQTRCLEdBQUcsSUFBbkM7O0FBRUEsTUFBSSxDQUFDbkIsb0RBQUwsRUFBZTtBQUNYbUIsSUFBQUEsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsWUFBWSxDQUFDTSxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBaEI7QUFDSDs7QUFFRCxNQUFNQyxDQUFDLEdBQUd6QixpREFBRyxDQUFDYSxJQUFJLElBQUlRLGFBQVQsRUFBd0IsY0FBeEIsQ0FBYjtBQUNBSyxFQUFBQSxLQUFLLENBQUNKLElBQUksQ0FBQ0ssU0FBTCxDQUFlRixDQUFmLENBQUQsQ0FBTDtBQUNBLFNBQU9BLENBQVA7QUFDSCxDQVZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9zZWN1cml0eS50c3g/NmU3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGFzIGZyb20gJ2xvZGFzaC9oYXMnO1xuaW1wb3J0ICogYXMgdCBmcm9tICcuLi9zdG9yZS9hdXRoL3R5cGVzJztcbmltcG9ydCB7IElTU0VSVkVSIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycydcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxubGV0IHVzZXJQcm9maWxlOiBvYmplY3QgfCBhbnkgPSB7fTtcbmxldCB1c2VyVG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgY29uc3Qgc2VjdXJpdHlNaWRkbGV3YXJlID0gKCkgPT4gKG5leHQ6IGFueSkgPT4gKGFjdGlvbjogYW55KSA9PiB7XG4gICAgbG9nZ2VyLmxvZyhgUmVkdWNlciAke2FjdGlvbi50eXBlfWApO1xuICAgIGlmIChcbiAgICAgICAgYWN0aW9uLnR5cGUgPT09IHQuU0lHTklOX1NVQ0NFU1NcbiAgICApIHtcbiAgICAgICAgdXNlclByb2ZpbGUgPSBhY3Rpb24ucGF5bG9hZC5kYXRhPy5kYXRhO1xuICAgICAgICBpZiAoIUlTU0VSVkVSKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufWA7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSB0LkxPR09VVF9SRVFVRVNUKSB7XG4gICAgICAgIHVzZXJUb2tlbiA9IG51bGw7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9zaWduaW5gO1xuICAgIH1cbiAgICAvLyBjb250aW51ZSBwcm9jZXNzaW5nIHRoaXMgYWN0aW9uXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0xvZ2dlZEluID0gKGRhdGE/OiBvYmplY3QpID0+IHtcbiAgICBsZXQgbG9nZ2VkSW5Ub2tlbjogb2JqZWN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICBpZiAoIUlTU0VSVkVSKSB7XG4gICAgICAgIGxvZ2dlZEluVG9rZW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKTtcbiAgICB9XG5cbiAgICBjb25zdCBkID0gaGFzKGRhdGEgfHwgbG9nZ2VkSW5Ub2tlbiwgJ2FjY2Vzc190b2tlbicpO1xuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGQpKTtcbiAgICByZXR1cm4gZDtcbn0iXSwibmFtZXMiOlsiaGFzIiwidCIsIklTU0VSVkVSIiwibG9nZ2VyIiwidXNlclByb2ZpbGUiLCJ1c2VyVG9rZW4iLCJzZWN1cml0eU1pZGRsZXdhcmUiLCJuZXh0IiwiYWN0aW9uIiwibG9nIiwidHlwZSIsIlNJR05JTl9TVUNDRVNTIiwicGF5bG9hZCIsImRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIkxPR09VVF9SRVFVRVNUIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJsb2dnZWRJblRva2VuIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsImQiLCJhbGVydCIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/security.tsx\n");

/***/ })

});