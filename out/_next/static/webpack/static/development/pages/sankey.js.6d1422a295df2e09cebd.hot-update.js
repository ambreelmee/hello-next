webpackHotUpdate("static/development/pages/sankey.js",{

/***/ "./pages/sankey.js":
/*!*************************!*\
  !*** ./pages/sankey.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Sankey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sankey */ "./components/Sankey.js");




var SankeyPage = function SankeyPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Sankey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Projets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '500px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sankey__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Les couleurs de la maquette de base n'ont pas \xE9t\xE9 respect\xE9es car elle n'ont pas vraiment de sens.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Remarques : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "La cl\xE9 'color' dans les 'nodes' n'est utilis\xE9e que pour les liens. Elle n'est pas obligatoire (sinon c'est la props 'colors' qui est appliqu\xE9e)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "S'il y a des espaces dans l'id d'un node, le degrad\xE9 sur les liens (enableLinkGradient=", true, ") n'est pas possible")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Probl\xE9matique qui reste \xE0 r\xE9soudre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " 1. G\xE9rer l'ordre des nodes (je ne comprends pas l'ordre par d\xE9faut) "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " 2. Personnalisation des labels "))));
};

/* harmony default export */ __webpack_exports__["default"] = (SankeyPage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/sankey")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=sankey.js.6d1422a295df2e09cebd.hot-update.js.map