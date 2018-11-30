webpackHotUpdate("static/development/pages/bubbles.js",{

/***/ "./components/SmallBubbles.js":
/*!************************************!*\
  !*** ./components/SmallBubbles.js ***!
  \************************************/
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

var smallBubbles = function smallBubbles() {
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

/* harmony default export */ __webpack_exports__["default"] = (smallBubbles);

/***/ })

})
//# sourceMappingURL=bubbles.js.32aecbe794c66b3f41ef.hot-update.js.map