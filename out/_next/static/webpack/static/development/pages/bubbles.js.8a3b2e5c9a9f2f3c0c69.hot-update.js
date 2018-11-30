webpackHotUpdate("static/development/pages/bubbles.js",{

/***/ "./components/LargeBubbles.js":
/*!************************************!*\
  !*** ./components/LargeBubbles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/circle-packing */ "./node_modules/@nivo/circle-packing/index.js");
/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__);

 // make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

var childrenGenerator = function childrenGenerator(number, color) {
  var children = [];

  for (var i = 0; i < number; i++) {
    children.push({
      "name": i.toString(),
      "loc": i + 5,
      "color": i % 3 === 0 ? '#fc9550' : color
    });
  }

  return children;
};

var children1 = childrenGenerator(32, 'blue');
var children2 = childrenGenerator(8, '#ffd100');
var mainChildren = childrenGenerator(1200);
mainChildren[0].children = childrenGenerator(12);
var data = {
  "name": "main",
  "children": [{
    "name": "children1",
    "children": children1,
    "colors": "blue"
  }, {
    "name": "children2",
    "children": children2,
    "color": "yellow"
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
    enableLabel: false,
    isInteractive: true,
    isZoomable: false,
    padding: 15,
    leavesOnly: true,
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
//# sourceMappingURL=bubbles.js.8a3b2e5c9a9f2f3c0c69.hot-update.js.map