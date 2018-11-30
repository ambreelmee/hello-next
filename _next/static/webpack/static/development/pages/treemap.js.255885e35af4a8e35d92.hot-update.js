webpackHotUpdate("static/development/pages/treemap.js",{

/***/ "./components/TreeMap.js":
/*!*******************************!*\
  !*** ./components/TreeMap.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nivo_treemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/treemap */ "./node_modules/@nivo/treemap/index.js");
/* harmony import */ var _nivo_treemap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nivo_treemap__WEBPACK_IMPORTED_MODULE_2__);



var data = {
  "name": "nivo",
  "children": [{
    "name": "PME",
    "loc": 540
  }, {
    "name": "Institution sans but lucratif",
    "loc": 168
  }, {
    "name": "Entreprise de taille intermédiaire",
    "loc": 134
  }, {
    "name": "Enseignement supérieur",
    "loc": 128
  }, {
    "name": "Grande entreprise",
    "loc": 102
  }, {
    "name": "Centre hospitalier",
    "loc": 80
  }, {
    "name": "Autres",
    "loc": 75,
    "color": "#ffd100"
  }, {
    "name": "Entreprise privée",
    "loc": 70
  }, {
    "name": "Entreprise",
    "loc": 40
  }, {
    "name": "EPIC",
    "loc": 20
  }]
};

var TreeMap = function TreeMap() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_treemap__WEBPACK_IMPORTED_MODULE_2__["ResponsiveTreeMap"], {
    root: data,
    identity: "name",
    value: "loc",
    leavesOnly: true,
    innerPadding: 3,
    outerPadding: 3,
    margin: {
      "top": 10,
      "right": 10,
      "bottom": 10,
      "left": 10
    },
    label: "loc",
    labelFormat: ".0s",
    labelSkipSize: 12,
    labelTextColor: "inherit:darker(1.2)",
    colors: "nivo",
    colorBy: function colorBy(node) {
      return node.color;
    },
    borderColor: "inherit:darker(0.3)",
    animate: true,
    motionStiffness: 90,
    motionDamping: 11
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TreeMap);

/***/ })

})
//# sourceMappingURL=treemap.js.255885e35af4a8e35d92.hot-update.js.map