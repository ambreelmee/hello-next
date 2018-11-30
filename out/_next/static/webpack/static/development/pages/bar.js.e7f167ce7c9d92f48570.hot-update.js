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
  "country": "AD",
  "hot dog": 88,
  "hot dogColor": "hsl(355, 70%, 50%)",
  "burger": 84,
  "burgerColor": "hsl(83, 70%, 50%)",
  "sandwich": 17,
  "sandwichColor": "hsl(321, 70%, 50%)",
  "kebab": 149,
  "kebabColor": "hsl(15, 70%, 50%)",
  "fries": 94,
  "friesColor": "hsl(125, 70%, 50%)",
  "donut": 167,
  "donutColor": "hsl(300, 70%, 50%)"
}, {
  "country": "AE",
  "hot dog": 78,
  "hot dogColor": "hsl(99, 70%, 50%)",
  "burger": 158,
  "burgerColor": "hsl(334, 70%, 50%)",
  "sandwich": 18,
  "sandwichColor": "hsl(271, 70%, 50%)",
  "kebab": 89,
  "kebabColor": "hsl(262, 70%, 50%)",
  "fries": 0,
  "friesColor": "hsl(306, 70%, 50%)",
  "donut": 181,
  "donutColor": "hsl(232, 70%, 50%)"
}, {
  "country": "AF",
  "hot dog": 59,
  "hot dogColor": "hsl(128, 70%, 50%)",
  "burger": 51,
  "burgerColor": "hsl(185, 70%, 50%)",
  "sandwich": 49,
  "sandwichColor": "hsl(148, 70%, 50%)",
  "kebab": 7,
  "kebabColor": "hsl(261, 70%, 50%)",
  "fries": 1,
  "friesColor": "hsl(187, 70%, 50%)",
  "donut": 91,
  "donutColor": "hsl(60, 70%, 50%)"
}, {
  "country": "AG",
  "hot dog": 71,
  "hot dogColor": "hsl(159, 70%, 50%)",
  "burger": 115,
  "burgerColor": "hsl(168, 70%, 50%)",
  "sandwich": 94,
  "sandwichColor": "hsl(142, 70%, 50%)",
  "kebab": 18,
  "kebabColor": "hsl(233, 70%, 50%)",
  "fries": 195,
  "friesColor": "hsl(342, 70%, 50%)",
  "donut": 102,
  "donutColor": "hsl(226, 70%, 50%)"
}, {
  "country": "AI",
  "hot dog": 136,
  "hot dogColor": "hsl(240, 70%, 50%)",
  "burger": 82,
  "burgerColor": "hsl(325, 70%, 50%)",
  "sandwich": 39,
  "sandwichColor": "hsl(318, 70%, 50%)",
  "kebab": 105,
  "kebabColor": "hsl(282, 70%, 50%)",
  "fries": 104,
  "friesColor": "hsl(111, 70%, 50%)",
  "donut": 107,
  "donutColor": "hsl(53, 70%, 50%)"
}, {
  "country": "AL",
  "hot dog": 73,
  "hot dogColor": "hsl(119, 70%, 50%)",
  "burger": 4,
  "burgerColor": "hsl(14, 70%, 50%)",
  "sandwich": 109,
  "sandwichColor": "hsl(67, 70%, 50%)",
  "kebab": 155,
  "kebabColor": "hsl(239, 70%, 50%)",
  "fries": 18,
  "friesColor": "hsl(251, 70%, 50%)",
  "donut": 57,
  "donutColor": "hsl(129, 70%, 50%)"
}, {
  "country": "AM",
  "hot dog": 101,
  "hot dogColor": "hsl(35, 70%, 50%)",
  "burger": 71,
  "burgerColor": "hsl(308, 70%, 50%)",
  "sandwich": 176,
  "sandwichColor": "hsl(29, 70%, 50%)",
  "kebab": 92,
  "kebabColor": "hsl(46, 70%, 50%)",
  "fries": 131,
  "friesColor": "hsl(213, 70%, 50%)",
  "donut": 189,
  "donutColor": "hsl(162, 70%, 50%)"
}];

var sectorBar = function sectorBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_2__["ResponsiveBar"], {
    data: data,
    keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],
    indexBy: "country",
    margin: {
      "top": 50,
      "right": 130,
      "bottom": 50,
      "left": 60
    },
    padding: 0.3,
    colors: "nivo",
    colorBy: "id",
    defs: [{
      "id": "dots",
      "type": "patternDots",
      "background": "inherit",
      "color": "#38bcb2",
      "size": 4,
      "padding": 1,
      "stagger": true
    }, {
      "id": "lines",
      "type": "patternLines",
      "background": "inherit",
      "color": "#eed312",
      "rotation": -45,
      "lineWidth": 6,
      "spacing": 10
    }],
    fill: [{
      "match": {
        "id": "fries"
      },
      "id": "dots"
    }, {
      "match": {
        "id": "sandwich"
      },
      "id": "lines"
    }],
    borderColor: "inherit:darker(1.6)",
    axisTop: null,
    axisRight: null,
    axisBottom: {
      "tickSize": 5,
      "tickPadding": 5,
      "tickRotation": 0,
      "legend": "country",
      "legendPosition": "middle",
      "legendOffset": 32
    },
    axisLeft: {
      "tickSize": 5,
      "tickPadding": 5,
      "tickRotation": 0,
      "legend": "food",
      "legendPosition": "middle",
      "legendOffset": -40
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: "inherit:darker(1.6)",
    layout: "horizontal",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    legends: [{
      "dataFrom": "keys",
      "anchor": "bottom-right",
      "direction": "column",
      "justify": false,
      "translateX": 120,
      "translateY": 0,
      "itemsSpacing": 2,
      "itemWidth": 100,
      "itemHeight": 20,
      "itemDirection": "left-to-right",
      "itemOpacity": 0.85,
      "symbolSize": 20,
      "effects": [{
        "on": "hover",
        "style": {
          "itemOpacity": 1
        }
      }]
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sectorBar);

/***/ })

})
//# sourceMappingURL=bar.js.e7f167ce7c9d92f48570.hot-update.js.map