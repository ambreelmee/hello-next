webpackHotUpdate("static/development/pages/pie.js",{

/***/ "./components/Pie.js":
/*!***************************!*\
  !*** ./components/Pie.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nivo_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/pie */ "./node_modules/@nivo/pie/index.js");
/* harmony import */ var _nivo_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nivo_pie__WEBPACK_IMPORTED_MODULE_2__);


 // make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

var data = [{
  "id": "recherche",
  "label": "Structure de recherche",
  "value": 40
}, {
  "id": "entreprises",
  "label": "Entreprises",
  "value": 22
}, {
  "id": "public",
  "label": "Secteur public",
  "value": 20
}, {
  "id": "ISBL",
  "label": "Institutions sans but lucratif",
  "value": 10
}, {
  "id": "OI",
  "label": "Organisations internationales",
  "value": 7
}];

var Pie = function Pie() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_pie__WEBPACK_IMPORTED_MODULE_2__["ResponsivePie"], {
    data: data,
    margin: {
      "top": 40,
      "right": 80,
      "bottom": 80,
      "left": 80
    },
    innerRadius: 0.5,
    padAngle: 0.7,
    cornerRadius: 3,
    colors: "nivo",
    colorBy: "id",
    borderWidth: 1,
    borderColor: "inherit:darker(0.2)",
    radialLabelsSkipAngle: 10,
    radialLabelsTextXOffset: 6,
    radialLabelsTextColor: "#333333",
    radialLabelsLinkOffset: 0,
    radialLabelsLinkDiagonalLength: 16,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkStrokeWidth: 1,
    radialLabelsLinkColor: "inherit",
    slicesLabelsSkipAngle: 10,
    slicesLabelsTextColor: "#333333",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    legends: [{
      "anchor": "right",
      "direction": "column",
      "translateY": 56,
      "itemWidth": 100,
      "itemHeight": 18,
      "itemTextColor": "#999",
      "symbolSize": 18,
      "symbolShape": "circle",
      "effects": [{
        "on": "hover",
        "style": {
          "itemTextColor": "#000"
        }
      }]
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Pie);

/***/ })

})
//# sourceMappingURL=pie.js.05ace9268558c16d4768.hot-update.js.map