webpackHotUpdate("static/development/pages/bar.js",{

/***/ "./components/sectorBar.js":
/*!*********************************!*\
  !*** ./components/sectorBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/index.js");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__);



var data = [{
  "secteur": "7219Z Recherche développement ...",
  "nombre": 121
}, {
  "secteur": "7211Z Recherche développement ...",
  "nombre": 96
}, {
  "secteur": "8542Z Enseignement supérieur ...",
  "nombre": 87
}, {
  "secteur": "8542Z Enseignement supérieur ...",
  "nombre": 80
}, {
  "secteur": "8542Z Enseignement supérieur ...",
  "nombre": 74
}, {
  "secteur": "8542Z Enseignement supérieur ...",
  "nombre": 64
}, {
  "secteur": "8542Z Enseignement supérieur ...",
  "nombre": 60
}, {
  "secteur": "8542Z Enseignement supérieur ...",
  "nombre": 55
}, {
  "secteur": "8542Z Enseignement supérieur ...",
  "nombre": 48
}];

var sectorBar = function sectorBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBar"], {
    data: data,
    borderRadius: 20,
    keys: ["nombre"],
    indexBy: function indexBy(node) {
      return node.nombre.toString();
    },
    margin: {
      "top": 50,
      "right": 130,
      "bottom": 50,
      "left": 60
    },
    padding: 0.3,
    colors: ['#ffd100'],
    enableGridY: false,
    borderColor: "inherit:darker(1.6)",
    axisTop: null,
    axisRight: null,
    axisBottom: null,
    axisLeft: null,
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: "inherit:darker(1.6)",
    layout: "horizontal",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    tooltip: function tooltip(_ref) {
      var data = _ref.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(data.secteur, ": ").concat(data.nombre));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sectorBar);

/***/ })

})
//# sourceMappingURL=bar.js.0074a94c47f8cdc5fa47.hot-update.js.map