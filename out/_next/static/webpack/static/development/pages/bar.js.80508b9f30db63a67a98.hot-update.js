webpackHotUpdate("static/development/pages/bar.js",{

/***/ "./components/horizontalBubbles.js":
/*!*****************************************!*\
  !*** ./components/horizontalBubbles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/circle-packing */ "./node_modules/@nivo/circle-packing/index.js");
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__);



var Bubble = function Bubble(props) {
  console.log('bubble');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__["ResponsiveBubble"], {
    root: {
      "id": props.name,
      "loc": props.loc,
      "color": "#fce064"
    },
    margin: {
      "top": 20,
      "right": 20,
      "bottom": 20,
      "left": 20
    },
    identity: "id",
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
      return "".concat(node.id, ": ").concat(node.value);
    },
    labelTextColor: "inherit:darker(1)",
    borderWidth: 2,
    animate: true,
    motionStiffness: 90,
    motionDamping: 12
  });
};

var horizontalBubbles = function horizontalBubbles() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "300px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bubble, {
    name: "Biologie, m\xE9decine et sant\xE9",
    loc: 423
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (horizontalBubbles);

/***/ })

})
//# sourceMappingURL=bar.js.80508b9f30db63a67a98.hot-update.js.map