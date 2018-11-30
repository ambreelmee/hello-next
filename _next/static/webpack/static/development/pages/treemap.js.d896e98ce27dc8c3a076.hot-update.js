webpackHotUpdate("static/development/pages/treemap.js",{

/***/ "./pages/treemap.js":
/*!**************************!*\
  !*** ./pages/treemap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TreeMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TreeMap */ "./components/TreeMap.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "TreeMap"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Type de structure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '500px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TreeMap__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Remarques :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Normalement \xE7a devrait \xEAtre possible de personnaliser les labels"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Dans la maquette, la dimension de profondeur propre \xE0 la repr\xE9sentation sous forme de treemap n'est pas vraiment justifi\xE9e donc il y a un seul niveau de profondeur actuellement."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Pas possible d'arrondir les angles ")));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/treemap")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=treemap.js.d896e98ce27dc8c3a076.hot-update.js.map