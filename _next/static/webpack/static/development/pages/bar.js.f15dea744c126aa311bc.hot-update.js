webpackHotUpdate("static/development/pages/bar.js",{

/***/ "./pages/bar.js":
/*!**********************!*\
  !*** ./pages/bar.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_horizontalBubbles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/horizontalBubbles */ "./components/horizontalBubbles.js");
/* harmony import */ var _components_sectorBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sectorBar */ "./components/sectorBar.js");





var Bar = function Bar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Bar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Secteurs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '500px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectorBar__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Remarques : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Je ne sais pas comment trier dans l'ordre inverse (celui de la maquette)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Possibilit\xE9 de personnaliser les tooltips assez finement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "En revanche pas possible (en tout cas je n'ai pas r\xE9ussi) de personnaliser les labels")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '500px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Domaines / Tutelles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_horizontalBubbles__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Remarques : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "ici on a g\xE9n\xE9r\xE9 le m\xEAme composant bulles plusieurs fois c\xF4te \xE0 c\xF4te. Sauf que comme les bulles sont responsives, elles faisaient toute la m\xEAme taille. Trick : g\xE9n\xE9rer une autre bulle blanche (invisible) \xE9talon de valeur fixe. On voit ainsi un tooltip vide quand on survole la bulle blanche. Autrement dit, le composant n'est pas tr\xE8s adatp\xE9 \xE0 l'utilisation qu'on veut en faire.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Bar);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bar")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=bar.js.f15dea744c126aa311bc.hot-update.js.map