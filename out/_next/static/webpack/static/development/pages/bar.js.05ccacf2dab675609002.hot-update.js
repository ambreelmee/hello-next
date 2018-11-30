webpackHotUpdate("static/development/pages/bar.js",{

/***/ "./components/Sankey.js":
false,

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

/***/ }),

/***/ "./node_modules/@nivo/axes/cjs/nivo-axes.js":
/*!**************************************************!*\
  !*** ./node_modules/@nivo/axes/cjs/nivo-axes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isNumber = _interopDefault(__webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js"));
var isArray = _interopDefault(__webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js"));
var isFunction = _interopDefault(__webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js"));
var d3TimeFormat = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
var d3Format = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
var core = __webpack_require__(/*! @nivo/core */ "./node_modules/@nivo/core/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var compose = _interopDefault(__webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js"));
var withPropsOnChange = _interopDefault(__webpack_require__(/*! recompose/withPropsOnChange */ "./node_modules/recompose/withPropsOnChange.js"));
var pure = _interopDefault(__webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js"));
var setDisplayName = _interopDefault(__webpack_require__(/*! recompose/setDisplayName */ "./node_modules/recompose/setDisplayName.js"));
var reactMotion = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var centerScale = function centerScale(scale) {
    var bandwidth = scale.bandwidth();

    if (bandwidth === 0) return scale;

    var offset = bandwidth / 2;
    if (scale.round()) {
        offset = Math.round(offset);
    }

    return function (d) {
        return scale(d) + offset;
    };
};

var getScaleTicks = function getScaleTicks(scale, tickCount) {
    if (scale.ticks) return scale.ticks(tickCount);
    return scale.domain();
};

var computeCartesianTicks = function computeCartesianTicks(_ref) {
    var axis = _ref.axis,
        scale = _ref.scale,
        ticksPosition = _ref.ticksPosition,
        _tickValues = _ref.tickValues,
        tickSize = _ref.tickSize,
        tickPadding = _ref.tickPadding,
        tickRotation = _ref.tickRotation,
        _ref$engine = _ref.engine,
        engine = _ref$engine === undefined ? 'svg' : _ref$engine;

    var tickValues = isArray(_tickValues) ? _tickValues : undefined;
    var tickCount = isNumber(_tickValues) ? _tickValues : undefined;

    var values = tickValues || getScaleTicks(scale, tickCount);

    var textProps = core.textPropsByEngine[engine];

    var position = scale.bandwidth ? centerScale(scale) : scale;
    var line = { lineX: 0, lineY: 0 };
    var text = { textX: 0, textY: 0 };

    var translate = void 0;
    var textAlign = textProps.align.center;
    var textBaseline = textProps.baseline.center;

    if (axis === 'x') {
        translate = function translate(d) {
            return { x: position(d), y: 0 };
        };

        line.lineY = tickSize * (ticksPosition === 'after' ? 1 : -1);
        text.textY = (tickSize + tickPadding) * (ticksPosition === 'after' ? 1 : -1);

        if (ticksPosition === 'after') {
            textBaseline = textProps.baseline.top;
        } else {
            textBaseline = textProps.baseline.bottom;
        }

        if (tickRotation === 0) {
            textAlign = textProps.align.center;
        } else if (ticksPosition === 'after' && tickRotation < 0 || ticksPosition === 'before' && tickRotation > 0) {
            textAlign = textProps.align.right;
            textBaseline = textProps.baseline.center;
        } else if (ticksPosition === 'after' && tickRotation > 0 || ticksPosition === 'before' && tickRotation < 0) {
            textAlign = textProps.align.left;
            textBaseline = textProps.baseline.center;
        }
    } else {
        translate = function translate(d) {
            return { x: 0, y: position(d) };
        };

        line.lineX = tickSize * (ticksPosition === 'after' ? 1 : -1);
        text.textX = (tickSize + tickPadding) * (ticksPosition === 'after' ? 1 : -1);

        if (ticksPosition === 'after') {
            textAlign = textProps.align.left;
        } else {
            textAlign = textProps.align.right;
        }
    }

    var ticks = values.map(function (value) {
        return _extends({
            key: value,
            value: value
        }, translate(value), line, text);
    });

    return {
        ticks: ticks,
        textAlign: textAlign,
        textBaseline: textBaseline
    };
};

var getFormatter = function getFormatter(format, scale) {
    if (!format || isFunction(format)) return format;

    if (scale.type === 'time') {
        var f = d3TimeFormat.timeFormat(format);
        return function (d) {
            return f(new Date(d));
        };
    }

    return d3Format.format(format);
};

var AxisTick = function (_PureComponent) {
    inherits(AxisTick, _PureComponent);

    function AxisTick() {
        classCallCheck(this, AxisTick);
        return possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    AxisTick.prototype.render = function render() {
        var _props = this.props,
            _value = _props.value,
            x = _props.x,
            y = _props.y,
            opacity = _props.opacity,
            rotate = _props.rotate,
            format = _props.format,
            lineX = _props.lineX,
            lineY = _props.lineY,
            _onClick = _props.onClick,
            textX = _props.textX,
            textY = _props.textY,
            textBaseline = _props.textBaseline,
            textAnchor = _props.textAnchor,
            theme = _props.theme;


        var value = _value;
        if (format !== undefined) {
            value = format(value);
        }

        var gStyle = { opacity: opacity };
        if (_onClick) {
            gStyle['cursor'] = 'pointer';
        }

        return React__default.createElement(
            'g',
            _extends({
                transform: 'translate(' + x + ',' + y + ')'
            }, _onClick ? { onClick: function onClick(e) {
                    return _onClick(e, value);
                } } : {}, {
                style: gStyle
            }),
            React__default.createElement('line', { x1: 0, x2: lineX, y1: 0, y2: lineY, style: theme.axis.ticks.line }),
            React__default.createElement(
                'text',
                {
                    alignmentBaseline: textBaseline,
                    textAnchor: textAnchor,
                    transform: 'translate(' + textX + ',' + textY + ') rotate(' + rotate + ')',
                    style: theme.axis.ticks.text
                },
                value
            )
        );
    };

    return AxisTick;
}(React.PureComponent);

AxisTick.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    format: PropTypes.func,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    lineX: PropTypes.number.isRequired,
    lineY: PropTypes.number.isRequired,
    textX: PropTypes.number.isRequired,
    textY: PropTypes.number.isRequired,
    textBaseline: PropTypes.string.isRequired,
    textAnchor: PropTypes.string.isRequired,
    opacity: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    theme: PropTypes.shape({
        axis: core.axisThemePropType.isRequired
    }).isRequired
};
AxisTick.defaultProps = {
    opacity: 1,
    rotate: 0
};

var willEnter = function willEnter() {
    return {
        rotate: 0,
        opacity: 0,
        x: 0,
        y: 0
    };
};

var willLeave = function willLeave(springConfig) {
    return function (_ref) {
        var _ref$style = _ref.style,
            x = _ref$style.x,
            y = _ref$style.y,
            rotate = _ref$style.rotate;
        return {
            rotate: rotate,
            opacity: reactMotion.spring(0, springConfig),
            x: reactMotion.spring(x.val, springConfig),
            y: reactMotion.spring(y.val, springConfig)
        };
    };
};

var defaultTickRenderer = function defaultTickRenderer(props) {
    return React__default.createElement(AxisTick, props);
};

var Axis = function (_Component) {
    inherits(Axis, _Component);

    function Axis() {
        classCallCheck(this, Axis);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Axis.prototype.render = function render() {
        var _props = this.props,
            axis = _props.axis,
            scale = _props.scale,
            x = _props.x,
            y = _props.y,
            length = _props.length,
            ticksPosition = _props.ticksPosition,
            tickValues = _props.tickValues,
            tickSize = _props.tickSize,
            tickPadding = _props.tickPadding,
            tickRotation = _props.tickRotation,
            format = _props.format,
            renderTick = _props.renderTick,
            legend = _props.legend,
            legendPosition = _props.legendPosition,
            legendOffset = _props.legendOffset,
            theme = _props.theme,
            animate = _props.animate,
            motionStiffness = _props.motionStiffness,
            motionDamping = _props.motionDamping,
            onClick = _props.onClick;

        var _computeCartesianTick = computeCartesianTicks({
            axis: axis,
            scale: scale,
            ticksPosition: ticksPosition,
            tickValues: tickValues,
            tickSize: tickSize,
            tickPadding: tickPadding,
            tickRotation: tickRotation
        }),
            ticks = _computeCartesianTick.ticks,
            textAlign = _computeCartesianTick.textAlign,
            textBaseline = _computeCartesianTick.textBaseline;

        var legendNode = null;
        if (legend !== undefined) {
            var legendX = 0;
            var legendY = 0;
            var legendRotation = 0;
            var textAnchor = void 0;

            if (axis === 'y') {
                legendRotation = -90;
                legendX = legendOffset;
                if (legendPosition === 'start') {
                    textAnchor = 'start';
                    legendY = length;
                } else if (legendPosition === 'middle') {
                    textAnchor = 'middle';
                    legendY = length / 2;
                } else if (legendPosition === 'end') {
                    textAnchor = 'end';
                }
            } else {
                legendY = legendOffset;
                if (legendPosition === 'start') {
                    textAnchor = 'start';
                } else if (legendPosition === 'middle') {
                    textAnchor = 'middle';
                    legendX = length / 2;
                } else if (legendPosition === 'end') {
                    textAnchor = 'end';
                    legendX = length;
                }
            }

            legendNode = React__default.createElement(
                'text',
                {
                    transform: 'translate(' + legendX + ', ' + legendY + ') rotate(' + legendRotation + ')',
                    textAnchor: textAnchor,
                    style: _extends({
                        alignmentBaseline: 'middle'
                    }, theme.axis.legend.text)
                },
                legend
            );
        }

        if (animate !== true) {
            return React__default.createElement(
                'g',
                { transform: 'translate(' + x + ',' + y + ')' },
                ticks.map(function (tick, tickIndex) {
                    return renderTick(_extends({
                        tickIndex: tickIndex,
                        format: format,
                        rotate: tickRotation,
                        textBaseline: textBaseline,
                        textAnchor: textAlign,
                        theme: theme
                    }, tick, onClick ? { onClick: onClick } : {}));
                }),
                React__default.createElement('line', {
                    style: theme.axis.domain.line,
                    x1: 0,
                    x2: axis === 'x' ? length : 0,
                    y1: 0,
                    y2: axis === 'x' ? 0 : length
                }),
                legendNode
            );
        }

        var springConfig = {
            stiffness: motionStiffness,
            damping: motionDamping
        };

        return React__default.createElement(
            reactMotion.Motion,
            { style: { x: reactMotion.spring(x, springConfig), y: reactMotion.spring(y, springConfig) } },
            function (xy) {
                return React__default.createElement(
                    'g',
                    { transform: 'translate(' + xy.x + ',' + xy.y + ')' },
                    React__default.createElement(
                        reactMotion.TransitionMotion,
                        {
                            willEnter: willEnter,
                            willLeave: willLeave(springConfig),
                            styles: ticks.map(function (tick) {
                                return {
                                    key: '' + tick.key,
                                    data: tick,
                                    style: {
                                        opacity: reactMotion.spring(1, springConfig),
                                        x: reactMotion.spring(tick.x, springConfig),
                                        y: reactMotion.spring(tick.y, springConfig),
                                        rotate: reactMotion.spring(tickRotation, springConfig)
                                    }
                                };
                            })
                        },
                        function (interpolatedStyles) {
                            return React__default.createElement(
                                React.Fragment,
                                null,
                                interpolatedStyles.map(function (_ref2, tickIndex) {
                                    var style = _ref2.style,
                                        tick = _ref2.data;
                                    return renderTick(_extends({
                                        tickIndex: tickIndex,
                                        format: format,
                                        textBaseline: textBaseline,
                                        textAnchor: textAlign,
                                        theme: theme
                                    }, tick, style, onClick ? { onClick: onClick } : {}));
                                })
                            );
                        }
                    ),
                    React__default.createElement(
                        reactMotion.Motion,
                        {
                            style: {
                                x2: reactMotion.spring(axis === 'x' ? length : 0, springConfig),
                                y2: reactMotion.spring(axis === 'x' ? 0 : length, springConfig)
                            }
                        },
                        function (values) {
                            return React__default.createElement('line', _extends({ style: theme.axis.domain.line, x1: 0, y1: 0 }, values));
                        }
                    ),
                    legendNode
                );
            }
        );
    };

    return Axis;
}(React.Component);

Axis.propTypes = _extends({
    axis: PropTypes.oneOf(['x', 'y']).isRequired,
    scale: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    ticksPosition: PropTypes.oneOf(['before', 'after']).isRequired,
    tickValues: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]))]),
    tickSize: PropTypes.number.isRequired,
    tickPadding: PropTypes.number.isRequired,
    tickRotation: PropTypes.number.isRequired,
    tickFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    renderTick: PropTypes.func.isRequired,
    legend: PropTypes.node,
    legendPosition: PropTypes.oneOf(['start', 'middle', 'end']).isRequired,
    legendOffset: PropTypes.number.isRequired,
    theme: PropTypes.shape({
        axis: core.axisThemePropType.isRequired
    }).isRequired
}, core.motionPropTypes);
Axis.defaultProps = {
    x: 0,
    y: 0,
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    renderTick: defaultTickRenderer,
    legendPosition: 'end',
    legendOffset: 0
};


var enhance = compose(core.withMotion(), withPropsOnChange(['format', 'scale'], function (_ref3) {
    var format = _ref3.format,
        scale = _ref3.scale;
    return {
        format: getFormatter(format, scale)
    };
}), pure);

var Axis$1 = setDisplayName('Axis')(enhance(Axis));

var axisPropTypes = {
    ticksPosition: PropTypes.oneOf(['before', 'after']),
    tickValues: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]))]),
    tickSize: PropTypes.number,
    tickPadding: PropTypes.number,
    tickRotation: PropTypes.number,
    format: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    renderTick: PropTypes.func,
    legend: PropTypes.node,
    legendPosition: PropTypes.oneOf(['start', 'middle', 'end']),
    legendOffset: PropTypes.number
};

var axisPropType = PropTypes.shape(axisPropTypes);

var positions = ['top', 'right', 'bottom', 'left'];

var Axes = function (_PureComponent) {
    inherits(Axes, _PureComponent);

    function Axes() {
        classCallCheck(this, Axes);
        return possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    Axes.prototype.render = function render() {
        var _props = this.props,
            xScale = _props.xScale,
            yScale = _props.yScale,
            width = _props.width,
            height = _props.height,
            top = _props.top,
            right = _props.right,
            bottom = _props.bottom,
            left = _props.left,
            theme = _props.theme,
            animate = _props.animate,
            motionStiffness = _props.motionStiffness,
            motionDamping = _props.motionDamping;


        var axes = { top: top, right: right, bottom: bottom, left: left };

        return React__default.createElement(
            React.Fragment,
            null,
            positions.map(function (position) {
                var axis = axes[position];

                if (!axis) return null;

                var isXAxis = position === 'top' || position === 'bottom';
                var ticksPosition = position === 'top' || position === 'left' ? 'before' : 'after';

                return React__default.createElement(Axis$1, _extends({
                    key: position
                }, axis, {
                    axis: isXAxis ? 'x' : 'y',
                    x: position === 'right' ? width : 0,
                    y: position === 'bottom' ? height : 0,
                    scale: isXAxis ? xScale : yScale,
                    length: isXAxis ? width : height,
                    ticksPosition: ticksPosition,
                    theme: theme,
                    animate: animate,
                    motionDamping: motionDamping,
                    motionStiffness: motionStiffness
                }));
            })
        );
    };

    return Axes;
}(React.PureComponent);

Axes.propTypes = _extends({
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: axisPropType,
    right: axisPropType,
    bottom: axisPropType,
    left: axisPropType,
    theme: PropTypes.shape({
        axis: core.axisThemePropType.isRequired
    }).isRequired
}, core.motionPropTypes);

var degreesToRadians = function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
};

var renderAxisToCanvas = function renderAxisToCanvas(ctx, _ref) {
    var axis = _ref.axis,
        scale = _ref.scale,
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        length = _ref.length,
        ticksPosition = _ref.ticksPosition,
        tickValues = _ref.tickValues,
        _ref$tickSize = _ref.tickSize,
        tickSize = _ref$tickSize === undefined ? 5 : _ref$tickSize,
        _ref$tickPadding = _ref.tickPadding,
        tickPadding = _ref$tickPadding === undefined ? 5 : _ref$tickPadding,
        _ref$tickRotation = _ref.tickRotation,
        tickRotation = _ref$tickRotation === undefined ? 0 : _ref$tickRotation,
        format = _ref.format,
        theme = _ref.theme;

    var _computeCartesianTick = computeCartesianTicks({
        axis: axis,
        scale: scale,
        ticksPosition: ticksPosition,
        tickValues: tickValues,
        tickSize: tickSize,
        tickPadding: tickPadding,
        tickRotation: tickRotation,
        engine: 'canvas'
    }),
        ticks = _computeCartesianTick.ticks,
        textAlign = _computeCartesianTick.textAlign,
        textBaseline = _computeCartesianTick.textBaseline;

    ctx.save();
    ctx.translate(x, y);

    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = theme.axis.ticks.text.fontSize + 'px sans-serif';

    ctx.lineWidth = theme.axis.domain.line.strokeWidth;
    ctx.lineCap = 'square';
    ctx.strokeStyle = theme.axis.domain.line.stroke;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(axis === 'x' ? length : 0, axis === 'x' ? 0 : length);
    ctx.stroke();

    ticks.forEach(function (tick) {
        ctx.lineWidth = theme.axis.ticks.line.strokeWidth;
        ctx.lineCap = 'square';
        ctx.strokeStyle = theme.axis.ticks.line.stroke;
        ctx.beginPath();
        ctx.moveTo(tick.x, tick.y);
        ctx.lineTo(tick.x + tick.lineX, tick.y + tick.lineY);
        ctx.stroke();

        var value = format !== undefined ? format(tick.value) : tick.value;

        ctx.save();
        ctx.translate(tick.x + tick.textX, tick.y + tick.textY);
        ctx.rotate(degreesToRadians(tickRotation));
        ctx.fillStyle = theme.axis.ticks.text.fill;
        ctx.fillText(value, 0, 0);
        ctx.restore();
    });

    ctx.restore();
};

var positions$1 = ['top', 'right', 'bottom', 'left'];

var renderAxesToCanvas = function renderAxesToCanvas(ctx, _ref2) {
    var xScale = _ref2.xScale,
        yScale = _ref2.yScale,
        width = _ref2.width,
        height = _ref2.height,
        top = _ref2.top,
        right = _ref2.right,
        bottom = _ref2.bottom,
        left = _ref2.left,
        theme = _ref2.theme;

    var axes = { top: top, right: right, bottom: bottom, left: left };

    positions$1.forEach(function (position) {
        var axis = axes[position];

        if (!axis) return null;

        var isXAxis = position === 'top' || position === 'bottom';
        var ticksPosition = position === 'top' || position === 'left' ? 'before' : 'after';
        var scale = isXAxis ? xScale : yScale;
        var format = getFormatter(axis.format, scale);

        renderAxisToCanvas(ctx, _extends({}, axis, {
            axis: isXAxis ? 'x' : 'y',
            x: position === 'right' ? width : 0,
            y: position === 'bottom' ? height : 0,
            scale: scale,
            format: format,
            length: isXAxis ? width : height,
            ticksPosition: ticksPosition,
            theme: theme
        }));
    });
};

exports.Axes = Axes;
exports.Axis = Axis$1;
exports.renderAxisToCanvas = renderAxisToCanvas;
exports.renderAxesToCanvas = renderAxesToCanvas;
exports.axisPropTypes = axisPropTypes;
exports.axisPropType = axisPropType;


/***/ }),

/***/ "./node_modules/@nivo/axes/index.js":
/*!******************************************!*\
  !*** ./node_modules/@nivo/axes/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cjs/nivo-axes */ "./node_modules/@nivo/axes/cjs/nivo-axes.js")


/***/ }),

/***/ "./node_modules/@nivo/bar/cjs/nivo-bar.js":
/*!************************************************!*\
  !*** ./node_modules/@nivo/bar/cjs/nivo-bar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var d3Scale = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
var min = _interopDefault(__webpack_require__(/*! lodash/min */ "./node_modules/lodash/min.js"));
var max = _interopDefault(__webpack_require__(/*! lodash/max */ "./node_modules/lodash/max.js"));
var range = _interopDefault(__webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js"));
var flattenDepth = _interopDefault(__webpack_require__(/*! lodash/flattenDepth */ "./node_modules/lodash/flattenDepth.js"));
var d3Shape = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var compose = _interopDefault(__webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js"));
var withPropsOnChange = _interopDefault(__webpack_require__(/*! recompose/withPropsOnChange */ "./node_modules/recompose/withPropsOnChange.js"));
var pure = _interopDefault(__webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js"));
var core = __webpack_require__(/*! @nivo/core */ "./node_modules/@nivo/core/index.js");
var axes = __webpack_require__(/*! @nivo/axes */ "./node_modules/@nivo/axes/index.js");
var legends = __webpack_require__(/*! @nivo/legends */ "./node_modules/@nivo/legends/index.js");
var defaultProps = _interopDefault(__webpack_require__(/*! recompose/defaultProps */ "./node_modules/recompose/defaultProps.js"));
var reactMotion = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
var setDisplayName = _interopDefault(__webpack_require__(/*! recompose/setDisplayName */ "./node_modules/recompose/setDisplayName.js"));

/**
 * Generates indexed scale.
 *
 * @param {Array.<Object>} data
 * @param {Function}       getIndex
 * @param {Array.<number>} range
 * @param {number}         padding
 * @returns {Function}
 */
var getIndexedScale = function getIndexedScale(data, getIndex, range$$1, padding) {
  return d3Scale.scaleBand().rangeRound(range$$1).domain(data.map(getIndex)).padding(padding);
};

/**
 * Generates scale for grouped bar chart.
 *
 * @param {Array.<Object>} data
 * @param {Array.<string>} keys
 * @param {number}         _minValue
 * @param {number|string}  _maxValue
 * @param {Array.<number>} range
 * @returns {Function}
 */
var getGroupedScale = function getGroupedScale(data, keys, _minValue, _maxValue, range$$1) {
    var allValues = data.reduce(function (acc, entry) {
        return [].concat(acc, keys.map(function (k) {
            return entry[k];
        }));
    }, []);

    var maxValue = _maxValue;
    if (maxValue === 'auto') {
        maxValue = max(allValues);
    }

    var minValue = _minValue;
    if (minValue === 'auto') {
        minValue = min(allValues);
        if (minValue > 0) minValue = 0;
    }

    return d3Scale.scaleLinear().rangeRound(range$$1).domain([minValue, maxValue]);
};

/**
 * Generates x/y scales & bars for vertical grouped bar chart.
 *
 * @param {Array.<Object>} data
 * @param {Function}       getIndex
 * @param {Array.<string>} keys
 * @param {number}         minValue
 * @param {number}         maxValue
 * @param {boolean}        reverse
 * @param {number}         width
 * @param {number}         height
 * @param {Function}       getColor
 * @param {number}         [padding=0]
 * @param {number}         [innerPadding=0]
 * @return {{ xScale: Function, yScale: Function, bars: Array.<Object> }}
 */
var generateVerticalGroupedBars = function generateVerticalGroupedBars(_ref) {
    var data = _ref.data,
        getIndex = _ref.getIndex,
        keys = _ref.keys,
        minValue = _ref.minValue,
        maxValue = _ref.maxValue,
        reverse = _ref.reverse,
        width = _ref.width,
        height = _ref.height,
        getColor = _ref.getColor,
        _ref$padding = _ref.padding,
        padding = _ref$padding === undefined ? 0 : _ref$padding,
        _ref$innerPadding = _ref.innerPadding,
        innerPadding = _ref$innerPadding === undefined ? 0 : _ref$innerPadding;

    var xScale = getIndexedScale(data, getIndex, [0, width], padding);
    var yRange = reverse ? [0, height] : [height, 0];
    var yScale = getGroupedScale(data, keys, minValue, maxValue, yRange);

    var barWidth = (xScale.bandwidth() - innerPadding * (keys.length - 1)) / keys.length;
    var yRef = yScale(0);

    var getY = function getY(d) {
        return d > 0 ? yScale(d) : yRef;
    };
    var getHeight = function getHeight(d, y) {
        return d > 0 ? yRef - y : yScale(d) - yRef;
    };
    if (reverse) {
        getY = function getY(d) {
            return d < 0 ? yScale(d) : yRef;
        };
        getHeight = function getHeight(d, y) {
            return d < 0 ? yRef - y : yScale(d) - yRef;
        };
    }

    var bars = [];
    if (barWidth > 0) {
        keys.forEach(function (key, i) {
            range(xScale.domain().length).forEach(function (index) {
                var x = xScale(getIndex(data[index])) + barWidth * i + innerPadding * i;
                var y = getY(data[index][key]);
                var barHeight = getHeight(data[index][key], y);

                if (barWidth > 0 && barHeight > 0) {
                    var barData = {
                        id: key,
                        value: data[index][key],
                        index: index,
                        indexValue: getIndex(data[index]),
                        data: data[index]
                    };

                    bars.push({
                        key: key + '.' + barData.indexValue,
                        data: barData,
                        x: x,
                        y: y,
                        width: barWidth,
                        height: barHeight,
                        color: getColor(barData)
                    });
                }
            });
        });
    }

    return { xScale: xScale, yScale: yScale, bars: bars };
};

/**
 * Generates x/y scales & bars for horizontal grouped bar chart.
 *
 * @param {Array.<Object>} data
 * @param {Function}       getIndex
 * @param {Array.<string>} keys
 * @param {number}         minValue
 * @param {number}         maxValue
 * @param {boolean}        reverse
 * @param {number}         width
 * @param {number}         height
 * @param {Function}       getColor
 * @param {number}         [padding=0]
 * @param {number}         [innerPadding=0]
 * @return {{ xScale: Function, yScale: Function, bars: Array.<Object> }}
 */
var generateHorizontalGroupedBars = function generateHorizontalGroupedBars(_ref2) {
    var data = _ref2.data,
        getIndex = _ref2.getIndex,
        keys = _ref2.keys,
        minValue = _ref2.minValue,
        maxValue = _ref2.maxValue,
        reverse = _ref2.reverse,
        width = _ref2.width,
        height = _ref2.height,
        getColor = _ref2.getColor,
        _ref2$padding = _ref2.padding,
        padding = _ref2$padding === undefined ? 0 : _ref2$padding,
        _ref2$innerPadding = _ref2.innerPadding,
        innerPadding = _ref2$innerPadding === undefined ? 0 : _ref2$innerPadding;

    var xRange = reverse ? [width, 0] : [0, width];
    var xScale = getGroupedScale(data, keys, minValue, maxValue, xRange);
    var yScale = getIndexedScale(data, getIndex, [height, 0], padding);

    var barHeight = (yScale.bandwidth() - innerPadding * (keys.length - 1)) / keys.length;
    var xRef = xScale(0);

    var getX = function getX(d) {
        return d > 0 ? xRef : xScale(d);
    };
    var getWidth = function getWidth(d, x) {
        return d > 0 ? xScale(d) - xRef : xRef - x;
    };
    if (reverse) {
        getX = function getX(d) {
            return d < 0 ? xRef : xScale(d);
        };
        getWidth = function getWidth(d, x) {
            return d < 0 ? xScale(d) - xRef : xRef - x;
        };
    }

    var bars = [];
    if (barHeight > 0) {
        keys.forEach(function (key, i) {
            range(yScale.domain().length).forEach(function (index) {
                var x = getX(data[index][key]);
                var y = yScale(getIndex(data[index])) + barHeight * i + innerPadding * i;
                var barWidth = getWidth(data[index][key], x);

                if (barWidth > 0) {
                    var barData = {
                        id: key,
                        value: data[index][key],
                        index: index,
                        indexValue: getIndex(data[index]),
                        data: data[index]
                    };

                    bars.push({
                        key: key + '.' + barData.indexValue,
                        data: barData,
                        x: x,
                        y: y,
                        width: barWidth,
                        height: barHeight,
                        color: getColor(barData)
                    });
                }
            });
        });
    }

    return { xScale: xScale, yScale: yScale, bars: bars };
};

/**
 * Generates x/y scales & bars for grouped bar chart.
 *
 * @param {Object} options
 * @return {{ xScale: Function, yScale: Function, bars: Array.<Object> }}
 */
var generateGroupedBars = function generateGroupedBars(options) {
    return options.layout === 'vertical' ? generateVerticalGroupedBars(options) : generateHorizontalGroupedBars(options);
};

/**
 * Generates scale for stacked bar chart.
 *
 * @param {Array.<Object>} data
 * @param {number|string}  _minValue
 * @param {number|string}  _maxValue
 * @param {Array.<number>} range
 * @returns {Function}
 */
var getStackedScale = function getStackedScale(data, _minValue, _maxValue, range$$1) {
    var allValues = flattenDepth(data, 2);

    var minValue = _minValue;
    if (minValue === 'auto') {
        minValue = min(allValues);
    }

    var maxValue = _maxValue;
    if (maxValue === 'auto') {
        maxValue = max(allValues);
    }

    return d3Scale.scaleLinear().rangeRound(range$$1).domain([minValue, maxValue]);
};

/**
 * Generates x/y scales & bars for vertical stacked bar chart.
 *
 * @param {Array.<Object>} data
 * @param {Function}       getIndex
 * @param {Array.<string>} keys
 * @param {number}         minValue
 * @param {number}         maxValue
 * @param {boolean}        reverse
 * @param {number}         width
 * @param {number}         height
 * @param {Function}       getColor
 * @param {number}         [padding=0]
 * @param {number}         [innerPadding=0]
 * @return {{ xScale: Function, yScale: Function, bars: Array.<Object> }}
 */
var generateVerticalStackedBars = function generateVerticalStackedBars(_ref) {
    var data = _ref.data,
        getIndex = _ref.getIndex,
        keys = _ref.keys,
        minValue = _ref.minValue,
        maxValue = _ref.maxValue,
        reverse = _ref.reverse,
        width = _ref.width,
        height = _ref.height,
        getColor = _ref.getColor,
        _ref$padding = _ref.padding,
        padding = _ref$padding === undefined ? 0 : _ref$padding,
        _ref$innerPadding = _ref.innerPadding,
        innerPadding = _ref$innerPadding === undefined ? 0 : _ref$innerPadding;

    var stackedData = d3Shape.stack().keys(keys).offset(d3Shape.stackOffsetDiverging)(data);

    var xScale = getIndexedScale(data, getIndex, [0, width], padding);
    var yRange = reverse ? [0, height] : [height, 0];
    var yScale = getStackedScale(stackedData, minValue, maxValue, yRange);

    var bars = [];
    var barWidth = xScale.bandwidth();

    var getY = function getY(d) {
        return yScale(d[1]);
    };
    var getHeight = function getHeight(d, y) {
        return yScale(d[0]) - y;
    };
    if (reverse) {
        getY = function getY(d) {
            return yScale(d[0]);
        };
        getHeight = function getHeight(d, y) {
            return yScale(d[1]) - y;
        };
    }

    if (barWidth > 0) {
        stackedData.forEach(function (stackedDataItem) {
            xScale.domain().forEach(function (index, i) {
                var d = stackedDataItem[i];
                var x = xScale(getIndex(d.data));

                var y = getY(d);
                var barHeight = getHeight(d, y);
                if (innerPadding > 0) {
                    y += innerPadding * 0.5;
                    barHeight -= innerPadding;
                }

                if (barHeight > 0) {
                    var barData = {
                        id: stackedDataItem.key,
                        value: d.data[stackedDataItem.key],
                        index: i,
                        indexValue: index,
                        data: d.data
                    };

                    bars.push({
                        key: stackedDataItem.key + '.' + index,
                        data: barData,
                        x: x,
                        y: y,
                        width: barWidth,
                        height: barHeight,
                        color: getColor(barData)
                    });
                }
            });
        });
    }

    return { xScale: xScale, yScale: yScale, bars: bars };
};

/**
 * Generates x/y scales & bars for horizontal stacked bar chart.
 *
 * @param {Array.<Object>} data
 * @param {Function}       getIndex
 * @param {Array.<string>} keys
 * @param {number}         minValue
 * @param {number}         maxValue
 * @param {boolean}        reverse
 * @param {number}         width
 * @param {number}         height
 * @param {Function}       getColor
 * @param {number}         [padding=0]
 * @param {number}         [innerPadding=0]
 * @return {{ xScale: Function, yScale: Function, bars: Array.<Object> }}
 */
var generateHorizontalStackedBars = function generateHorizontalStackedBars(_ref2) {
    var data = _ref2.data,
        getIndex = _ref2.getIndex,
        keys = _ref2.keys,
        minValue = _ref2.minValue,
        maxValue = _ref2.maxValue,
        reverse = _ref2.reverse,
        width = _ref2.width,
        height = _ref2.height,
        getColor = _ref2.getColor,
        _ref2$padding = _ref2.padding,
        padding = _ref2$padding === undefined ? 0 : _ref2$padding,
        _ref2$innerPadding = _ref2.innerPadding,
        innerPadding = _ref2$innerPadding === undefined ? 0 : _ref2$innerPadding;

    var stackedData = d3Shape.stack().keys(keys).offset(d3Shape.stackOffsetDiverging)(data);

    var xRange = reverse ? [width, 0] : [0, width];
    var xScale = getStackedScale(stackedData, minValue, maxValue, xRange);
    var yScale = getIndexedScale(data, getIndex, [height, 0], padding);

    var bars = [];
    var barHeight = yScale.bandwidth();

    var getX = function getX(d) {
        return xScale(d[0]);
    };
    var getWidth = function getWidth(d, x) {
        return xScale(d[1]) - x;
    };
    if (reverse) {
        getX = function getX(d) {
            return xScale(d[1]);
        };
        getWidth = function getWidth(d, y) {
            return xScale(d[0]) - y;
        };
    }

    if (barHeight > 0) {
        stackedData.forEach(function (stackedDataItem) {
            yScale.domain().forEach(function (index, i) {
                var d = stackedDataItem[i];
                var y = yScale(getIndex(d.data));

                var barData = {
                    id: stackedDataItem.key,
                    value: d.data[stackedDataItem.key],
                    index: i,
                    indexValue: index,
                    data: d.data
                };

                var x = getX(d);
                var barWidth = getWidth(d, x);
                if (innerPadding > 0) {
                    x += innerPadding * 0.5;
                    barWidth -= innerPadding;
                }

                if (barWidth > 0) {
                    bars.push({
                        key: stackedDataItem.key + '.' + index,
                        data: barData,
                        x: x,
                        y: y,
                        width: barWidth,
                        height: barHeight,
                        color: getColor(barData)
                    });
                }
            });
        });
    }

    return { xScale: xScale, yScale: yScale, bars: bars };
};

/**
 * Generates x/y scales & bars for stacked bar chart.
 *
 * @param {Object} options
 * @return {{ xScale: Function, yScale: Function, bars: Array.<Object> }}
 */
var generateStackedBars = function generateStackedBars(options) {
    return options.layout === 'vertical' ? generateVerticalStackedBars(options) : generateHorizontalStackedBars(options);
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var BarItem = function BarItem(_ref) {
    var data = _ref.data,
        x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        borderRadius = _ref.borderRadius,
        color = _ref.color,
        borderWidth = _ref.borderWidth,
        borderColor = _ref.borderColor,
        label = _ref.label,
        shouldRenderLabel = _ref.shouldRenderLabel,
        labelColor = _ref.labelColor,
        showTooltip = _ref.showTooltip,
        hideTooltip = _ref.hideTooltip,
        onClick = _ref.onClick,
        onMouseEnter = _ref.onMouseEnter,
        onMouseLeave = _ref.onMouseLeave,
        tooltip = _ref.tooltip,
        theme = _ref.theme;

    var handleTooltip = function handleTooltip(e) {
        return showTooltip(tooltip, e);
    };
    var handleMouseEnter = function handleMouseEnter(e) {
        onMouseEnter(data, e);
        showTooltip(tooltip, e);
    };
    var handleMouseLeave = function handleMouseLeave(e) {
        onMouseLeave(data, e);
        hideTooltip(e);
    };

    return React__default.createElement(
        'g',
        { transform: 'translate(' + x + ', ' + y + ')' },
        React__default.createElement('rect', {
            width: width,
            height: height,
            rx: borderRadius,
            ry: borderRadius,
            fill: data.fill ? data.fill : color,
            strokeWidth: borderWidth,
            stroke: borderColor,
            onMouseEnter: handleMouseEnter,
            onMouseMove: handleTooltip,
            onMouseLeave: handleMouseLeave,
            onClick: onClick
        }),
        shouldRenderLabel && React__default.createElement(
            'text',
            {
                x: width / 2,
                y: height / 2,
                textAnchor: 'middle',
                alignmentBaseline: 'central',
                style: _extends({}, theme.labels.text, {
                    pointerEvents: 'none',
                    fill: labelColor
                })
            },
            label
        )
    );
};

BarItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        indexValue: PropTypes.string.isRequired
    }).isRequired,

    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    borderRadius: PropTypes.number.isRequired,
    borderWidth: PropTypes.number.isRequired,
    borderColor: PropTypes.string.isRequired,

    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    shouldRenderLabel: PropTypes.bool.isRequired,
    labelColor: PropTypes.string.isRequired,

    showTooltip: PropTypes.func.isRequired,
    hideTooltip: PropTypes.func.isRequired,
    getTooltipLabel: PropTypes.func.isRequired,
    tooltipFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    tooltip: PropTypes.element.isRequired,

    theme: PropTypes.shape({
        tooltip: PropTypes.shape({}).isRequired
    }).isRequired
};

var enhance = compose(withPropsOnChange(['data', 'color', 'onClick'], function (_ref2) {
    var data = _ref2.data,
        color = _ref2.color,
        _onClick = _ref2.onClick;
    return {
        onClick: function onClick(event) {
            return _onClick(_extends({ color: color }, data), event);
        }
    };
}), withPropsOnChange(['data', 'color', 'theme', 'tooltip', 'getTooltipLabel', 'tooltipFormat'], function (_ref3) {
    var data = _ref3.data,
        color = _ref3.color,
        theme = _ref3.theme,
        tooltip = _ref3.tooltip,
        getTooltipLabel = _ref3.getTooltipLabel,
        tooltipFormat = _ref3.tooltipFormat;
    return {
        tooltip: React__default.createElement(core.BasicTooltip, {
            id: getTooltipLabel(data),
            value: data.value,
            enableChip: true,
            color: color,
            theme: theme,
            format: tooltipFormat,
            renderContent: typeof tooltip === 'function' ? tooltip.bind(null, _extends({ color: color, theme: theme }, data)) : null
        })
    };
}), pure);

var BarItem$1 = enhance(BarItem);

var BarPropTypes = _extends({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    indexBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    getIndex: PropTypes.func.isRequired, // computed
    keys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    layers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.oneOf(['grid', 'axes', 'bars', 'markers', 'legends']), PropTypes.func])).isRequired,

    groupMode: PropTypes.oneOf(['stacked', 'grouped']).isRequired,
    layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    reverse: PropTypes.bool.isRequired,

    minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]).isRequired,
    maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]).isRequired,
    padding: PropTypes.number.isRequired,
    innerPadding: PropTypes.number.isRequired,

    axisTop: axes.axisPropType,
    axisRight: axes.axisPropType,
    axisBottom: axes.axisPropType,
    axisLeft: axes.axisPropType,
    enableGridX: PropTypes.bool.isRequired,
    enableGridY: PropTypes.bool.isRequired,
    gridXValues: PropTypes.arrayOf(PropTypes.number),
    gridYValues: PropTypes.arrayOf(PropTypes.number),

    barComponent: PropTypes.func.isRequired,

    enableLabel: PropTypes.bool.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    labelFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    getLabel: PropTypes.func.isRequired, // computed
    labelSkipWidth: PropTypes.number.isRequired,
    labelSkipHeight: PropTypes.number.isRequired,
    labelTextColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    getLabelTextColor: PropTypes.func.isRequired, // computed
    labelLinkColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    getLabelLinkColor: PropTypes.func.isRequired, // computed

    borderRadius: PropTypes.number.isRequired,
    getColor: PropTypes.func.isRequired }, core.defsPropTypes, {
    borderWidth: PropTypes.number.isRequired,
    borderColor: PropTypes.any.isRequired,
    getBorderColor: PropTypes.func.isRequired,

    isInteractive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    tooltipLabel: PropTypes.func,
    getTooltipLabel: PropTypes.func.isRequired,
    tooltipFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    tooltip: PropTypes.func,

    legends: PropTypes.arrayOf(PropTypes.shape(_extends({
        dataFrom: PropTypes.oneOf(['indexes', 'keys']).isRequired
    }, legends.LegendPropShape))).isRequired,

    // canvas specific
    pixelRatio: PropTypes.number.isRequired
});

var BarDefaultProps = {
    indexBy: 'id',
    keys: ['value'],
    layers: ['grid', 'axes', 'bars', 'markers', 'legends'],

    groupMode: 'stacked',
    layout: 'vertical',
    reverse: false,

    minValue: 'auto',
    maxValue: 'auto',
    padding: 0.1,
    innerPadding: 0,

    axisBottom: {},
    axisLeft: {},
    enableGridX: false,
    enableGridY: true,

    barComponent: BarItem$1,

    enableLabel: true,
    label: 'value',
    labelSkipWidth: 0,
    labelSkipHeight: 0,
    labelLinkColor: 'theme',
    labelTextColor: 'theme',

    defs: [],
    fill: [],
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'inherit',

    isInteractive: true,
    onClick: core.noop,
    onMouseEnter: core.noop,
    onMouseLeave: core.noop,

    legends: [],

    // canvas specific
    pixelRatio: global.window && global.window.devicePixelRatio ? global.window.devicePixelRatio : 1
};

var enhance$1 = (function (Component) {
    return compose(defaultProps(BarDefaultProps), core.withTheme(), core.withColors(), core.withDimensions(), core.withMotion(), withPropsOnChange(['indexBy'], function (_ref) {
        var indexBy = _ref.indexBy;
        return {
            getIndex: core.getAccessorFor(indexBy)
        };
    }), withPropsOnChange(['labelTextColor'], function (_ref2) {
        var labelTextColor = _ref2.labelTextColor;
        return {
            getLabelTextColor: core.getInheritedColorGenerator(labelTextColor, 'axis.ticks.text.fill')
        };
    }), withPropsOnChange(['labelLinkColor'], function (_ref3) {
        var labelLinkColor = _ref3.labelLinkColor;
        return {
            getLabelLinkColor: core.getInheritedColorGenerator(labelLinkColor, 'axis.ticks.line.stroke')
        };
    }), withPropsOnChange(['label', 'labelFormat'], function (_ref4) {
        var label = _ref4.label,
            labelFormat = _ref4.labelFormat;
        return {
            getLabel: core.getLabelGenerator(label, labelFormat)
        };
    }), withPropsOnChange(['borderColor'], function (_ref5) {
        var borderColor = _ref5.borderColor;
        return {
            getBorderColor: core.getInheritedColorGenerator(borderColor)
        };
    }), withPropsOnChange(['tooltipLabel'], function (_ref6) {
        var tooltipLabel = _ref6.tooltipLabel;

        var getTooltipLabel = function getTooltipLabel(d) {
            return d.id + ' - ' + d.indexValue;
        };
        if (typeof tooltipLabel === 'function') {
            getTooltipLabel = tooltipLabel;
        }

        return { getTooltipLabel: getTooltipLabel };
    }), pure)(Component);
});

var barWillEnterHorizontal = function barWillEnterHorizontal(_ref) {
    var style = _ref.style;
    return {
        x: style.x.val,
        y: style.y.val,
        width: 0,
        height: style.height.val
    };
};

var barWillEnterVertical = function barWillEnterVertical(_ref2) {
    var style = _ref2.style;
    return {
        x: style.x.val,
        y: style.y.val + style.height.val,
        width: style.width.val,
        height: 0
    };
};

var barWillLeaveHorizontal = function barWillLeaveHorizontal(springConfig) {
    return function (_ref3) {
        var style = _ref3.style;
        return {
            x: style.x,
            y: style.y,
            width: reactMotion.spring(0, springConfig),
            height: style.height
        };
    };
};

var barWillLeaveVertical = function barWillLeaveVertical(springConfig) {
    return function (_ref4) {
        var style = _ref4.style;
        return {
            x: style.x,
            y: reactMotion.spring(style.y.val + style.height.val, springConfig),
            width: style.width,
            height: reactMotion.spring(0, springConfig)
        };
    };
};

var Bar = function Bar(props) {
    var data = props.data,
        getIndex = props.getIndex,
        keys = props.keys,
        groupMode = props.groupMode,
        layout = props.layout,
        reverse = props.reverse,
        minValue = props.minValue,
        maxValue = props.maxValue,
        margin = props.margin,
        width = props.width,
        height = props.height,
        outerWidth = props.outerWidth,
        outerHeight = props.outerHeight,
        padding = props.padding,
        innerPadding = props.innerPadding,
        axisTop = props.axisTop,
        axisRight = props.axisRight,
        axisBottom = props.axisBottom,
        axisLeft = props.axisLeft,
        enableGridX = props.enableGridX,
        enableGridY = props.enableGridY,
        gridXValues = props.gridXValues,
        gridYValues = props.gridYValues,
        layers = props.layers,
        barComponent = props.barComponent,
        enableLabel = props.enableLabel,
        getLabel = props.getLabel,
        labelSkipWidth = props.labelSkipWidth,
        labelSkipHeight = props.labelSkipHeight,
        getLabelTextColor = props.getLabelTextColor,
        markers = props.markers,
        theme = props.theme,
        getColor = props.getColor,
        defs = props.defs,
        fill = props.fill,
        borderRadius = props.borderRadius,
        borderWidth = props.borderWidth,
        getBorderColor = props.getBorderColor,
        animate = props.animate,
        motionStiffness = props.motionStiffness,
        motionDamping = props.motionDamping,
        isInteractive = props.isInteractive,
        getTooltipLabel = props.getTooltipLabel,
        tooltipFormat = props.tooltipFormat,
        tooltip = props.tooltip,
        onClick = props.onClick,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave,
        legends$$1 = props.legends;

    var options = {
        layout: layout,
        reverse: reverse,
        data: data,
        getIndex: getIndex,
        keys: keys,
        minValue: minValue,
        maxValue: maxValue,
        width: width,
        height: height,
        getColor: getColor,
        padding: padding,
        innerPadding: innerPadding
    };
    var result = groupMode === 'grouped' ? generateGroupedBars(options) : generateStackedBars(options);

    var motionProps = {
        animate: animate,
        motionDamping: motionDamping,
        motionStiffness: motionStiffness
    };

    var springConfig = {
        damping: motionDamping,
        stiffness: motionStiffness
    };

    var willEnter = layout === 'vertical' ? barWillEnterVertical : barWillEnterHorizontal;
    var willLeave = layout === 'vertical' ? barWillLeaveVertical(springConfig) : barWillLeaveHorizontal(springConfig);

    var shouldRenderLabel = function shouldRenderLabel(_ref5) {
        var width = _ref5.width,
            height = _ref5.height;

        if (!enableLabel) return false;
        if (labelSkipWidth > 0 && width < labelSkipWidth) return false;
        if (labelSkipHeight > 0 && height < labelSkipHeight) return false;
        return true;
    };

    var boundDefs = core.bindDefs(defs, result.bars, fill, {
        dataKey: 'data',
        targetKey: 'data.fill'
    });

    var legendDataForKeys = result.bars.filter(function (bar) {
        return bar.data.index === 0;
    }).map(function (bar) {
        return {
            id: bar.data.id,
            label: bar.data.id,
            color: bar.color,
            fill: bar.data.fill
        };
    }).reverse();

    var legendDataForIndexes = result.bars.filter(function (bar) {
        return bar.data.id === keys[0];
    }).map(function (bar) {
        return {
            id: bar.data.indexValue,
            label: bar.data.indexValue,
            color: bar.color,
            fill: bar.data.fill
        };
    });

    return React__default.createElement(
        core.Container,
        { isInteractive: isInteractive, theme: theme },
        function (_ref6) {
            var showTooltip = _ref6.showTooltip,
                hideTooltip = _ref6.hideTooltip;

            var commonProps = {
                borderRadius: borderRadius,
                borderWidth: borderWidth,
                enableLabel: enableLabel,
                labelSkipWidth: labelSkipWidth,
                labelSkipHeight: labelSkipHeight,
                showTooltip: showTooltip,
                hideTooltip: hideTooltip,
                onClick: onClick,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                theme: theme,
                getTooltipLabel: getTooltipLabel,
                tooltipFormat: tooltipFormat,
                tooltip: tooltip
            };

            var bars = void 0;
            if (animate === true) {
                bars = React__default.createElement(
                    reactMotion.TransitionMotion,
                    {
                        key: 'bars',
                        willEnter: willEnter,
                        willLeave: willLeave,
                        styles: result.bars.map(function (bar) {
                            return {
                                key: bar.key,
                                data: bar,
                                style: {
                                    x: reactMotion.spring(bar.x, springConfig),
                                    y: reactMotion.spring(bar.y, springConfig),
                                    width: reactMotion.spring(bar.width, springConfig),
                                    height: reactMotion.spring(bar.height, springConfig)
                                }
                            };
                        })
                    },
                    function (interpolatedStyles) {
                        return React__default.createElement(
                            'g',
                            null,
                            interpolatedStyles.map(function (_ref7) {
                                var key = _ref7.key,
                                    style = _ref7.style,
                                    bar = _ref7.data;

                                var baseProps = _extends({}, bar, style);

                                return React__default.createElement(barComponent, _extends({
                                    key: key
                                }, baseProps, commonProps, {
                                    shouldRenderLabel: shouldRenderLabel(baseProps),
                                    width: Math.max(style.width, 0),
                                    height: Math.max(style.height, 0),
                                    label: getLabel(bar.data),
                                    labelColor: getLabelTextColor(baseProps, theme),
                                    borderColor: getBorderColor(baseProps),
                                    theme: theme
                                }));
                            })
                        );
                    }
                );
            } else {
                bars = result.bars.map(function (d) {
                    return React__default.createElement(barComponent, _extends({
                        key: d.key
                    }, d, commonProps, {
                        label: getLabel(d.data),
                        shouldRenderLabel: shouldRenderLabel(d),
                        labelColor: getLabelTextColor(d, theme),
                        borderColor: getBorderColor(d),
                        theme: theme
                    }));
                });
            }

            var layerById = {
                grid: React__default.createElement(core.Grid, _extends({
                    key: 'grid',
                    theme: theme,
                    width: width,
                    height: height,
                    xScale: enableGridX ? result.xScale : null,
                    yScale: enableGridY ? result.yScale : null,
                    xValues: gridXValues,
                    yValues: gridYValues
                }, motionProps)),
                axes: React__default.createElement(axes.Axes, _extends({
                    key: 'axes',
                    xScale: result.xScale,
                    yScale: result.yScale,
                    width: width,
                    height: height,
                    theme: theme,
                    top: axisTop,
                    right: axisRight,
                    bottom: axisBottom,
                    left: axisLeft
                }, motionProps)),
                bars: bars,
                markers: React__default.createElement(core.CartesianMarkers, {
                    key: 'markers',
                    markers: markers,
                    width: width,
                    height: height,
                    xScale: result.xScale,
                    yScale: result.yScale,
                    theme: theme
                }),
                legends: legends$$1.map(function (legend, i) {
                    var legendData = void 0;
                    if (legend.dataFrom === 'keys') {
                        legendData = legendDataForKeys;
                    } else if (legend.dataFrom === 'indexes') {
                        legendData = legendDataForIndexes;
                    }

                    if (legendData === undefined) return null;

                    return React__default.createElement(legends.BoxLegendSvg, _extends({
                        key: i
                    }, legend, {
                        containerWidth: width,
                        containerHeight: height,
                        data: legendData,
                        theme: theme
                    }));
                })
            };

            return React__default.createElement(
                core.SvgWrapper,
                {
                    width: outerWidth,
                    height: outerHeight,
                    margin: margin,
                    defs: boundDefs,
                    theme: theme
                },
                layers.map(function (layer, i) {
                    if (typeof layer === 'function') {
                        return React__default.createElement(
                            React.Fragment,
                            { key: i },
                            layer(_extends({}, props, result))
                        );
                    }
                    return layerById[layer];
                })
            );
        }
    );
};

Bar.propTypes = BarPropTypes;

var Bar$1 = setDisplayName('Bar')(enhance$1(Bar));

var findNodeUnderCursor = function findNodeUnderCursor(nodes, margin, x, y) {
    return nodes.find(function (node) {
        return core.isCursorInRect(node.x + margin.left, node.y + margin.top, node.width, node.height, x, y);
    });
};

var BarCanvas = function (_Component) {
    inherits(BarCanvas, _Component);

    function BarCanvas() {
        var _temp, _this, _ret;

        classCallCheck(this, BarCanvas);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleMouseHover = function (showTooltip, hideTooltip) {
            return function (event) {
                if (!_this.bars) return;

                var _this$props = _this.props,
                    margin = _this$props.margin,
                    theme = _this$props.theme,
                    tooltip = _this$props.tooltip,
                    getTooltipLabel = _this$props.getTooltipLabel,
                    tooltipFormat = _this$props.tooltipFormat;

                var _getRelativeCursor = core.getRelativeCursor(_this.surface, event),
                    x = _getRelativeCursor[0],
                    y = _getRelativeCursor[1];

                var bar = findNodeUnderCursor(_this.bars, margin, x, y);

                if (bar !== undefined) {
                    showTooltip(React__default.createElement(core.BasicTooltip, {
                        id: getTooltipLabel(bar.data),
                        value: bar.data.value,
                        enableChip: true,
                        color: bar.color,
                        theme: theme,
                        format: tooltipFormat,
                        renderContent: typeof tooltip === 'function' ? tooltip.bind(null, _extends({ color: bar.color }, bar.data)) : null
                    }), event);
                } else {
                    hideTooltip();
                }
            };
        }, _this.handleMouseLeave = function (hideTooltip) {
            return function () {
                hideTooltip();
            };
        }, _this.handleClick = function (event) {
            if (!_this.bars) return;

            var _this$props2 = _this.props,
                margin = _this$props2.margin,
                onClick = _this$props2.onClick;

            var _getRelativeCursor2 = core.getRelativeCursor(_this.surface, event),
                x = _getRelativeCursor2[0],
                y = _getRelativeCursor2[1];

            var node = findNodeUnderCursor(_this.bars, margin, x, y);
            if (node !== undefined) onClick(node.data, event);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    BarCanvas.prototype.componentDidMount = function componentDidMount() {
        this.ctx = this.surface.getContext('2d');
        this.draw(this.props);
    };

    BarCanvas.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
        if (this.props.outerWidth !== props.outerWidth || this.props.outerHeight !== props.outerHeight || this.props.isInteractive !== props.isInteractive || this.props.theme !== props.theme) {
            return true;
        } else {
            this.draw(props);
            return false;
        }
    };

    BarCanvas.prototype.componentDidUpdate = function componentDidUpdate() {
        this.ctx = this.surface.getContext('2d');
        this.draw(this.props);
    };

    BarCanvas.prototype.draw = function draw(props) {
        var _this2 = this;

        var data = props.data,
            keys = props.keys,
            getIndex = props.getIndex,
            minValue = props.minValue,
            maxValue = props.maxValue,
            width = props.width,
            height = props.height,
            outerWidth = props.outerWidth,
            outerHeight = props.outerHeight,
            pixelRatio = props.pixelRatio,
            margin = props.margin,
            layout = props.layout,
            reverse = props.reverse,
            groupMode = props.groupMode,
            padding = props.padding,
            innerPadding = props.innerPadding,
            axisTop = props.axisTop,
            axisRight = props.axisRight,
            axisBottom = props.axisBottom,
            axisLeft = props.axisLeft,
            theme = props.theme,
            getColor = props.getColor,
            legends$$1 = props.legends,
            enableGridX = props.enableGridX,
            enableGridY = props.enableGridY;


        this.surface.width = outerWidth * pixelRatio;
        this.surface.height = outerHeight * pixelRatio;

        this.ctx.scale(pixelRatio, pixelRatio);

        var options = {
            layout: layout,
            reverse: reverse,
            data: data,
            getIndex: getIndex,
            keys: keys,
            minValue: minValue,
            maxValue: maxValue,
            width: width,
            height: height,
            getColor: getColor,
            padding: padding,
            innerPadding: innerPadding
        };

        var result = groupMode === 'grouped' ? generateGroupedBars(options) : generateStackedBars(options);

        this.bars = result.bars;

        this.ctx.fillStyle = theme.background;
        this.ctx.fillRect(0, 0, outerWidth, outerHeight);
        this.ctx.translate(margin.left, margin.top);

        this.ctx.strokeStyle = '#dddddd';
        enableGridX && core.renderGridLinesToCanvas(this.ctx, {
            width: width,
            height: height,
            scale: result.xScale,
            axis: 'x'
        });
        enableGridY && core.renderGridLinesToCanvas(this.ctx, {
            width: width,
            height: height,
            scale: result.yScale,
            axis: 'y'
        });

        this.ctx.strokeStyle = '#dddddd';
        var legendDataForKeys = result.bars.filter(function (bar) {
            return bar.data.index === 0;
        }).map(function (bar) {
            return {
                id: bar.data.id,
                label: bar.data.id,
                color: bar.color,
                fill: bar.data.fill
            };
        }).reverse();
        var legendDataForIndexes = result.bars.filter(function (bar) {
            return bar.data.id === keys[0];
        }).map(function (bar) {
            return {
                id: bar.data.indexValue,
                label: bar.data.indexValue,
                color: bar.color,
                fill: bar.data.fill
            };
        });

        legends$$1.forEach(function (legend) {
            var legendData = void 0;
            if (legend.dataFrom === 'keys') {
                legendData = legendDataForKeys;
            } else if (legend.dataFrom === 'indexes') {
                legendData = legendDataForIndexes;
            }

            if (legendData === undefined) return null;
            legends.renderLegendToCanvas(_this2.ctx, _extends({}, legend, {
                data: legendData,
                containerWidth: width,
                containerHeight: height,
                itemTextColor: '#999',
                symbolSize: 16
            }));
        });

        core.renderAxesToCanvas(this.ctx, {
            xScale: result.xScale,
            yScale: result.yScale,
            width: width,
            height: height,
            top: axisTop,
            right: axisRight,
            bottom: axisBottom,
            left: axisLeft,
            theme: theme
        });

        result.bars.forEach(function (_ref) {
            var x = _ref.x,
                y = _ref.y,
                color = _ref.color,
                width = _ref.width,
                height = _ref.height;

            _this2.ctx.fillStyle = color;
            _this2.ctx.fillRect(x, y, width, height);
        });
    };

    BarCanvas.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props,
            outerWidth = _props.outerWidth,
            outerHeight = _props.outerHeight,
            pixelRatio = _props.pixelRatio,
            isInteractive = _props.isInteractive,
            theme = _props.theme;


        return React__default.createElement(
            core.Container,
            { isInteractive: isInteractive, theme: theme },
            function (_ref2) {
                var showTooltip = _ref2.showTooltip,
                    hideTooltip = _ref2.hideTooltip;
                return React__default.createElement('canvas', {
                    ref: function ref(surface) {
                        _this3.surface = surface;
                    },
                    width: outerWidth * pixelRatio,
                    height: outerHeight * pixelRatio,
                    style: {
                        width: outerWidth,
                        height: outerHeight
                    },
                    onMouseEnter: _this3.handleMouseHover(showTooltip, hideTooltip),
                    onMouseMove: _this3.handleMouseHover(showTooltip, hideTooltip),
                    onMouseLeave: _this3.handleMouseLeave(hideTooltip),
                    onClick: _this3.handleClick
                });
            }
        );
    };

    return BarCanvas;
}(React.Component);

BarCanvas.propTypes = BarPropTypes;

var BarCanvas$1 = setDisplayName('BarCanvas')(enhance$1(BarCanvas));

var ResponsiveBar = function ResponsiveBar(props) {
    return React__default.createElement(
        core.ResponsiveWrapper,
        null,
        function (_ref) {
            var width = _ref.width,
                height = _ref.height;
            return React__default.createElement(Bar$1, _extends({ width: width, height: height }, props));
        }
    );
};

var ResponsiveBarCanvas = function ResponsiveBarCanvas(props) {
    return React__default.createElement(
        core.ResponsiveWrapper,
        null,
        function (_ref) {
            var width = _ref.width,
                height = _ref.height;
            return React__default.createElement(BarCanvas$1, _extends({ width: width, height: height }, props));
        }
    );
};

exports.Bar = Bar$1;
exports.BarCanvas = BarCanvas$1;
exports.ResponsiveBar = ResponsiveBar;
exports.ResponsiveBarCanvas = ResponsiveBarCanvas;
exports.BarPropTypes = BarPropTypes;
exports.BarDefaultProps = BarDefaultProps;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@nivo/bar/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@nivo/bar/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cjs/nivo-bar */ "./node_modules/@nivo/bar/cjs/nivo-bar.js")


/***/ }),

/***/ "./node_modules/@nivo/sankey/cjs/nivo-sankey.js":
false,

/***/ "./node_modules/@nivo/sankey/index.js":
false,

/***/ "./node_modules/d3-sankey/index.js":
false,

/***/ "./node_modules/d3-sankey/src/align.js":
false,

/***/ "./node_modules/d3-sankey/src/constant.js":
false,

/***/ "./node_modules/d3-sankey/src/sankey.js":
false,

/***/ "./node_modules/d3-sankey/src/sankeyLinkHorizontal.js":
false,

/***/ "./node_modules/lodash/_baseAssign.js":
false,

/***/ "./node_modules/lodash/_baseAssignIn.js":
false,

/***/ "./node_modules/lodash/_baseClone.js":
false,

/***/ "./node_modules/lodash/_baseExtremum.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseExtremum.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),

/***/ "./node_modules/lodash/_baseGt.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_baseGt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
false,

/***/ "./node_modules/lodash/_baseIsSet.js":
false,

/***/ "./node_modules/lodash/_baseLt.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_baseLt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ }),

/***/ "./node_modules/lodash/_baseRange.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseRange.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
false,

/***/ "./node_modules/lodash/_cloneDataView.js":
false,

/***/ "./node_modules/lodash/_cloneRegExp.js":
false,

/***/ "./node_modules/lodash/_cloneSymbol.js":
false,

/***/ "./node_modules/lodash/_copySymbols.js":
false,

/***/ "./node_modules/lodash/_copySymbolsIn.js":
false,

/***/ "./node_modules/lodash/_createRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createRange.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(/*! ./_baseRange */ "./node_modules/lodash/_baseRange.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
false,

/***/ "./node_modules/lodash/_getAllKeysIn.js":
false,

/***/ "./node_modules/lodash/_getSymbolsIn.js":
false,

/***/ "./node_modules/lodash/_initCloneArray.js":
false,

/***/ "./node_modules/lodash/_initCloneByTag.js":
false,

/***/ "./node_modules/lodash/cloneDeep.js":
false,

/***/ "./node_modules/lodash/flattenDepth.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/flattenDepth.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/**
 * Recursively flatten `array` up to `depth` times.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * var array = [1, [2, [3, [4]], 5]];
 *
 * _.flattenDepth(array, 1);
 * // => [1, 2, [3, [4]], 5]
 *
 * _.flattenDepth(array, 2);
 * // => [1, 2, 3, [4], 5]
 */
function flattenDepth(array, depth) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  depth = depth === undefined ? 1 : toInteger(depth);
  return baseFlatten(array, depth);
}

module.exports = flattenDepth;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
false,

/***/ "./node_modules/lodash/isSet.js":
false,

/***/ "./node_modules/lodash/max.js":
/*!************************************!*\
  !*** ./node_modules/lodash/max.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(/*! ./_baseExtremum */ "./node_modules/lodash/_baseExtremum.js"),
    baseGt = __webpack_require__(/*! ./_baseGt */ "./node_modules/lodash/_baseGt.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ }),

/***/ "./node_modules/lodash/min.js":
/*!************************************!*\
  !*** ./node_modules/lodash/min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(/*! ./_baseExtremum */ "./node_modules/lodash/_baseExtremum.js"),
    baseLt = __webpack_require__(/*! ./_baseLt */ "./node_modules/lodash/_baseLt.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseLt)
    : undefined;
}

module.exports = min;


/***/ }),

/***/ "./node_modules/lodash/range.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/range.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(/*! ./_createRange */ "./node_modules/lodash/_createRange.js");

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ "./node_modules/lodash/uniq.js":
false,

/***/ "./node_modules/recompose/utils/mapValues.js":
false,

/***/ "./node_modules/recompose/withHandlers.js":
false,

/***/ "./node_modules/recompose/withState.js":
false,

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
/* harmony import */ var _components_sectorBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sectorBar */ "./components/sectorBar.js");




var Bar = function Bar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Sankey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Projets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '500px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectorBar__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Ce type de graphe n'apporte pas une lecture tr\xE8s int\xE9ressante car on peut seulement suivre les flux deux \xE0 deux. Par exemple, impossible de savoir quel projet parmi ceux financ\xE9s par l'ANR a une dur\xE9e de 30 \xE0 48 mois et touche 5 structures. On peut seulement savoir que parmi les projet de 5 \xE0 10 millions, 100 durent plus de 60 mois. Il faudrait n'avoir que deux niveaux et choisir quoi comparer par exemple type de financement vs montant ou alors dur\xE9e etc.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Remarques : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "La cl\xE9 'color' dans les 'nodes' n'est utilis\xE9e que pour les liens. Elle n'est pas obligatoire (sinon c'est la props 'colors' qui est appliqu\xE9e)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "S'il y a des espaces dans l'id d'un node, le degrad\xE9 sur les liens (enableLinkGradient=", true, ") n'est pas possible")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Probl\xE9matique qui reste \xE0 r\xE9soudre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " 1. G\xE9rer l'ordre des nodes (je ne comprends pas l'ordre par d\xE9faut) "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " 2. Personnalisation des labels "))));
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
//# sourceMappingURL=bar.js.05ccacf2dab675609002.hot-update.js.map