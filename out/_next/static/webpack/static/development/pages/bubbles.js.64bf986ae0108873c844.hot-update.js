webpackHotUpdate("static/development/pages/bubbles.js",{

/***/ "./components/prodLargeBubbles.js":
/*!****************************************!*\
  !*** ./components/prodLargeBubbles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/circle-packing */ "./node_modules/@nivo/circle-packing/index.js");
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__);


var data = {
  "name": "main",
  "children": [{
    "name": "Publications",
    "loc": 423,
    "color": "#942963"
  }, {
    "name": "Projets",
    "loc": 398,
    "color": "#30c378"
  }, {
    "name": "Brevets",
    "loc": 177,
    "color": "#f64a4a"
  }, {
    "name": "Thèses",
    "loc": 83,
    "color": "#f68d4a"
  }]
};

var largeBubbles = function largeBubbles() {
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
    colorBy: function colorBy(node) {
      return node.color;
    },
    enableLabel: true,
    isInteractive: true,
    isZoomable: false,
    padding: 15,
    leavesOnly: true,
    label: function label(node) {
      return "".concat(node.id, " ").concat(node.value);
    },
    labelTextColor: "inherit:darker(0.8)",
    borderWidth: 2,
    animate: true,
    motionStiffness: 90,
    motionDamping: 12
  });
};

/* harmony default export */ __webpack_exports__["default"] = (largeBubbles);

/***/ })

})
//# sourceMappingURL=bubbles.js.64bf986ae0108873c844.hot-update.js.map