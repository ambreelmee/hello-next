webpackHotUpdate("static/development/pages/bubbles.js",{

/***/ "./components/SmallBubbles.js":
false,

/***/ "./components/prodSmallBubbles.js":
/*!****************************************!*\
  !*** ./components/prodSmallBubbles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/circle-packing */ "./node_modules/@nivo/circle-packing/index.js");
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__);

 // generate small bubbles

var childrenGenerator = function childrenGenerator(number, color) {
  var children = [];

  for (var i = 0; i < number; i++) {
    children.push({
      "name": i.toString(),
      "color": color,
      "loc": 1
    });
  }

  return children;
}; // big bubble


var mainChildren1 = childrenGenerator(1256, "blue");
mainChildren1[0].children = childrenGenerator(12, "white"); // use to have a white circle inside

var mainChildren2 = childrenGenerator(178, "#fc9550");
mainChildren2[0].children = childrenGenerator(1, "white");
var mainChildren3 = childrenGenerator(1251, "#f96d85");
mainChildren3[0].children = childrenGenerator(12, "white");
var data = {
  "children": [{
    "name": "Bubble1",
    "children": mainChildren1
  }, {
    "name": "Bubble2",
    "children": mainChildren2
  }, {
    "name": "Bubble3",
    "children": mainChildren3
  }]
};

var prodSmallBubbles = function prodSmallBubbles() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__["ResponsiveBubble"], {
    root: data,
    margin: {
      "top": 20,
      "right": 20,
      "bottom": 20,
      "left": 20
    },
    identity: "name",
    value: "loc",
    colors: "nivo" // overriden by colorBy
    ,
    colorBy: function colorBy(node) {
      return node.color;
    },
    enableLabel: true,
    isInteractive: true,
    isZoomable: false,
    padding: 6,
    leavesOnly: true,
    labelTextColor: "inherit:darker(0.8)",
    borderWidth: 2,
    animate: true,
    motionStiffness: 90,
    motionDamping: 12
  });
};

/* harmony default export */ __webpack_exports__["default"] = (prodSmallBubbles);

/***/ }),

/***/ "./pages/bubbles.js":
/*!**************************!*\
  !*** ./pages/bubbles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_prodSmallBubbles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/prodSmallBubbles */ "./components/prodSmallBubbles.js");
/* harmony import */ var _components_LargeBubbles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LargeBubbles */ "./components/LargeBubbles.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Bulles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '600px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Nombre de productions "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_prodSmallBubbles__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Remarques : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Les cercles ne sont pas parfaits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ils sont contenus dans une \"bulles\" plus grandes et ne peuvent pas \xEAtre horizontalis\xE9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Pas sur de pouvoir mettre la l\xE9gende bien comme il faut"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '500px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Ecosyst\xE8me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LargeBubbles__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Remarques : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Le diam\xE8tre des bulles ne signifie rien ici => quelle est sa signification sur la maquette ?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Le couleur des bulles est ici plus ou moins al\xE9atoire (quand on a un multiple de 3) pour un effet visuel mais on peut mettre n'importe quelle fonction pour d\xE9terminer la couleur"))));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bubbles")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=bubbles.js.f8b19db26467437e7ae6.hot-update.js.map