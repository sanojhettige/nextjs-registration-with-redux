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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"securityMiddleware\": function() { return /* binding */ securityMiddleware; },\n/* harmony export */   \"isLoggedIn\": function() { return /* binding */ isLoggedIn; }\n/* harmony export */ });\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/has */ \"./node_modules/lodash/has.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_auth_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/auth/types */ \"./store/auth/types.tsx\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.tsx\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/logger */ \"./utils/logger.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar userProfile = {};\nvar userToken = null;\nvar securityMiddleware = function securityMiddleware() {\n  return function (next) {\n    return function (action) {\n      _utils_logger__WEBPACK_IMPORTED_MODULE_3__.default.log(\"Reducer \".concat(action.type));\n\n      if (action.type === _store_auth_types__WEBPACK_IMPORTED_MODULE_1__.SIGNIN_SUCCESS) {\n        userToken = action.payload.data;\n        localStorage.setItem('token', JSON.stringify(userToken));\n\n        if (!_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.ISSERVER) {\n          window.location = \"\".concat(window.location.origin);\n        }\n      } else if (action.type === _store_auth_types__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_REQUEST) {\n        userToken = null;\n        localStorage.removeItem('token');\n        window.location = \"\".concat(window.location.origin, \"/signin\");\n      } // continue processing this action\n\n\n      return next(action);\n    };\n  };\n};\nvar isLoggedIn = function isLoggedIn(data) {\n  var loggedInToken = null;\n\n  if (!_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.ISSERVER) {\n    loggedInToken = JSON.parse(localStorage.getItem('token'));\n    alert(JSON.stringify(loggedInToken));\n  }\n\n  var d = lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(data || loggedInToken, 'access_token');\n\n  if (!_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.ISSERVER) {\n    alert(JSON.stringify(loggedInToken));\n  }\n\n  return d;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2VjdXJpdHkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJSSxXQUF5QixHQUFHLEVBQWhDO0FBQ0EsSUFBSUMsU0FBd0IsR0FBRyxJQUEvQjtBQUVPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNLFVBQUNDLElBQUQ7QUFBQSxXQUFlLFVBQUNDLE1BQUQsRUFBaUI7QUFDcEVMLE1BQUFBLHNEQUFBLG1CQUFzQkssTUFBTSxDQUFDRSxJQUE3Qjs7QUFDQSxVQUNJRixNQUFNLENBQUNFLElBQVAsS0FBZ0JULDZEQURwQixFQUVFO0FBQ0VJLFFBQUFBLFNBQVMsR0FBR0csTUFBTSxDQUFDSSxPQUFQLENBQWVDLElBQTNCO0FBQ0FDLFFBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVaLFNBQWYsQ0FBOUI7O0FBQ0EsWUFBSSxDQUFDSCxvREFBTCxFQUFlO0FBQ1hnQixVQUFBQSxNQUFNLENBQUNDLFFBQVAsYUFBcUJELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBckM7QUFDSDtBQUNKLE9BUkQsTUFRTyxJQUFJWixNQUFNLENBQUNFLElBQVAsS0FBZ0JULDZEQUFwQixFQUFzQztBQUN6Q0ksUUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQVMsUUFBQUEsWUFBWSxDQUFDUSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FKLFFBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxhQUFxQkQsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFyQztBQUNILE9BZG1FLENBZXBFOzs7QUFDQSxhQUFPYixJQUFJLENBQUNDLE1BQUQsQ0FBWDtBQUNILEtBakJ1QztBQUFBLEdBQU47QUFBQSxDQUEzQjtBQW1CQSxJQUFNZSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDVixJQUFELEVBQW1CO0FBQ3pDLE1BQUlXLGFBQTRCLEdBQUcsSUFBbkM7O0FBRUEsTUFBSSxDQUFDdEIsb0RBQUwsRUFBZTtBQUNYc0IsSUFBQUEsYUFBYSxHQUFHUixJQUFJLENBQUNTLEtBQUwsQ0FBV1gsWUFBWSxDQUFDWSxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBaEI7QUFDQUMsSUFBQUEsS0FBSyxDQUFDWCxJQUFJLENBQUNDLFNBQUwsQ0FBZU8sYUFBZixDQUFELENBQUw7QUFDSDs7QUFFRCxNQUFNSSxDQUFDLEdBQUc1QixpREFBRyxDQUFDYSxJQUFJLElBQUlXLGFBQVQsRUFBd0IsY0FBeEIsQ0FBYjs7QUFDQSxNQUFJLENBQUN0QixvREFBTCxFQUFlO0FBQUV5QixJQUFBQSxLQUFLLENBQUNYLElBQUksQ0FBQ0MsU0FBTCxDQUFlTyxhQUFmLENBQUQsQ0FBTDtBQUF1Qzs7QUFDeEQsU0FBT0ksQ0FBUDtBQUNILENBWE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3NlY3VyaXR5LnRzeD82ZTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoYXMgZnJvbSAnbG9kYXNoL2hhcyc7XG5pbXBvcnQgKiBhcyB0IGZyb20gJy4uL3N0b3JlL2F1dGgvdHlwZXMnO1xuaW1wb3J0IHsgSVNTRVJWRVIgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5sZXQgdXNlclByb2ZpbGU6IG9iamVjdCB8IGFueSA9IHt9O1xubGV0IHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBzZWN1cml0eU1pZGRsZXdhcmUgPSAoKSA9PiAobmV4dDogYW55KSA9PiAoYWN0aW9uOiBhbnkpID0+IHtcbiAgICBsb2dnZXIubG9nKGBSZWR1Y2VyICR7YWN0aW9uLnR5cGV9YCk7XG4gICAgaWYgKFxuICAgICAgICBhY3Rpb24udHlwZSA9PT0gdC5TSUdOSU5fU1VDQ0VTU1xuICAgICkge1xuICAgICAgICB1c2VyVG9rZW4gPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeSh1c2VyVG9rZW4pKTtcbiAgICAgICAgaWYgKCFJU1NFUlZFUikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn1gO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gdC5MT0dPVVRfUkVRVUVTVCkge1xuICAgICAgICB1c2VyVG9rZW4gPSBudWxsO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vc2lnbmluYDtcbiAgICB9XG4gICAgLy8gY29udGludWUgcHJvY2Vzc2luZyB0aGlzIGFjdGlvblxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaXNMb2dnZWRJbiA9IChkYXRhPzogb2JqZWN0KSA9PiB7XG4gICAgbGV0IGxvZ2dlZEluVG9rZW46IG9iamVjdCB8IG51bGwgPSBudWxsO1xuXG4gICAgaWYgKCFJU1NFUlZFUikge1xuICAgICAgICBsb2dnZWRJblRva2VuID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSk7XG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGxvZ2dlZEluVG9rZW4pKTtcbiAgICB9XG5cbiAgICBjb25zdCBkID0gaGFzKGRhdGEgfHwgbG9nZ2VkSW5Ub2tlbiwgJ2FjY2Vzc190b2tlbicpO1xuICAgIGlmICghSVNTRVJWRVIpIHsgYWxlcnQoSlNPTi5zdHJpbmdpZnkobG9nZ2VkSW5Ub2tlbikpOyB9XG4gICAgcmV0dXJuIGQ7XG59Il0sIm5hbWVzIjpbImhhcyIsInQiLCJJU1NFUlZFUiIsImxvZ2dlciIsInVzZXJQcm9maWxlIiwidXNlclRva2VuIiwic2VjdXJpdHlNaWRkbGV3YXJlIiwibmV4dCIsImFjdGlvbiIsImxvZyIsInR5cGUiLCJTSUdOSU5fU1VDQ0VTUyIsInBheWxvYWQiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIkxPR09VVF9SRVFVRVNUIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJsb2dnZWRJblRva2VuIiwicGFyc2UiLCJnZXRJdGVtIiwiYWxlcnQiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/security.tsx\n");

/***/ })

});