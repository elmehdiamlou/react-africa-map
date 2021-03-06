"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledAfricaMap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .africaMap {\n    max-width: ", ";\n    margin: 30px auto;\n  }\n  .africaMap path {\n    cursor: ", ";\n    transition: all 0.5s ease-in-out;\n  }\n  .africaMap *:focus {\n    outline: none !important;\n  }\n  .africaMap text {\n    user-select: none;\n  }\n  .africaMap path:not(.animationLines):hover {\n    ", "\n  }\n"])), function (p) {
  return p.size ? p.size === 1 && "300px" || p.size === 2 && "350px" || p.size === 3 && "400px" || p.size === 4 && "450px" || p.size === 5 && "500px" || "450px" : "450px";
}, function (p) {
  return p.selection ? "pointer" : "initial";
}, function (p) {
  return p.selection && "fill: ".concat(p.selectColor || 'black', ";");
});

var countries = [{
  c: 'MA',
  x: 74,
  y: 42
}, {
  c: 'AO',
  x: 238,
  y: 368
}, {
  c: 'BJ',
  x: 137,
  y: 205
}, {
  c: 'BW',
  x: 279,
  y: 431
}, {
  c: 'BF',
  x: 109,
  y: 185
}, {
  c: 'BI',
  x: 319,
  y: 298
}, {
  c: 'CM',
  x: 209,
  y: 237
}, {
  c: 'CF',
  x: 263,
  y: 228
}, {
  c: 'TD',
  x: 247,
  y: 173
}, {
  c: 'CG',
  x: 224,
  y: 280
}, {
  c: 'CD',
  x: 278,
  y: 293
}, {
  c: 'DJ',
  x: 406,
  y: 194
}, {
  c: 'EG',
  x: 317,
  y: 87
}, {
  c: 'GQ',
  x: 192,
  y: 262
}, {
  c: 'ER',
  x: 377,
  y: 162
}, {
  c: 'ET',
  x: 384,
  y: 215
}, {
  c: 'GA',
  x: 201,
  y: 279
}, {
  c: 'GM',
  x: 10,
  y: 180
}, {
  c: 'GH',
  x: 112,
  y: 224
}, {
  c: 'GN',
  x: 49,
  y: 201
}, {
  c: 'GW',
  x: 18,
  y: 190
}, {
  c: 'CI',
  x: 82,
  y: 227
}, {
  c: 'KE',
  x: 374,
  y: 273
}, {
  c: 'LS',
  x: 307,
  y: 482
}, {
  c: 'LR',
  x: 54,
  y: 227
}, {
  c: 'LY',
  x: 238,
  y: 82
}, {
  c: 'MG',
  x: 431,
  y: 414
}, {
  c: 'MW',
  x: 344,
  y: 367
}, {
  c: 'ML',
  x: 109,
  y: 150
}, {
  c: 'MR',
  x: 47,
  y: 139
}, {
  c: 'DZ',
  x: 140,
  y: 57
}, {
  c: 'MZ',
  x: 372,
  y: 380
}, {
  c: 'NA',
  x: 227,
  y: 427
}, {
  c: 'NE',
  x: 186,
  y: 157
}, {
  c: 'NG',
  x: 175,
  y: 212
}, {
  c: 'RW',
  x: 320,
  y: 284
}, {
  c: 'SN',
  x: 27,
  y: 175
}, {
  c: 'SL',
  x: 37,
  y: 214
}, {
  c: 'SO',
  x: 445,
  y: 210
}, {
  c: 'ZA',
  x: 271,
  y: 494
}, {
  c: 'SD',
  x: 318,
  y: 182
}, {
  c: 'SZ',
  x: 329,
  y: 460
}, {
  c: 'TZ',
  x: 352,
  y: 321
}, {
  c: 'TG',
  x: 127,
  y: 217
}, {
  c: 'TN',
  x: 184,
  y: 26
}, {
  c: 'UG',
  x: 339,
  y: 259
}, {
  c: 'ZM',
  x: 293,
  y: 381
}, {
  c: 'ZW',
  x: 318,
  y: 410
}];

var findCountry = function findCountry(v) {
  return countries.find(function (e) {
    return e.c === v;
  }) || countries[0];
};

var shuffledCountries = function shuffledCountries(start) {
  var sortCriteria = 0.5;
  var allCountries = [].concat(countries).map(function (v) {
    return v.c;
  });
  allCountries.splice(countries.indexOf(findCountry(start)), 1);
  return [start].concat(_toConsumableArray(allCountries.sort(function () {
    return sortCriteria - Math.random();
  })));
};

var calcCurve = function calcCurve(p1x, p1y, p2x, p2y) {
  var mid = 0.5;
  var two = 2;
  var mpx = (p2x + p1x) * mid;
  var mpy = (p2y + p1y) * mid;
  var ang = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / two;
  var dis = 35;
  var c1x = mpx + dis * Math.cos(ang);
  var c1y = mpy + dis * Math.sin(ang);
  return [c1x, c1y];
};

var AfricaMap = function AfricaMap(props) {
  var borderColor = props.borderColor,
      fillColor = props.fillColor,
      selectColor = props.selectColor,
      animated = props.animated,
      animeStartFrom = props.animeStartFrom,
      animeLineColor = props.animeLineColor,
      animeTime = props.animeTime,
      selection = props.selection,
      selected = props.selected;

  var _useState = (0, _react.useState)(shuffledCountries(animeStartFrom || "MA")),
      _useState2 = _slicedToArray(_useState, 1),
      countries = _useState2[0];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedCountries = _useState4[0],
      setSelectedCountries = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      countryIndex = _useState6[0],
      setCountryIndex = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      reverse = _useState8[0],
      setReverse = _useState8[1];

  var Click = function Click(c) {
    if (selection) setSelectedCountries(c);
  };

  (0, _react.useEffect)(function () {
    setSelectedCountries(selected || []);
  }, [selected]);
  (0, _react.useEffect)(function () {
    if (animated || false) {
      var timeout = animeTime || 1000;
      var max = countries.length - 1;
      var countryChange = setInterval(function () {
        if (!reverse) setSelectedCountries([].concat(_toConsumableArray(selectedCountries), [countries[countryIndex]]));else {
          selectedCountries.pop();
          setSelectedCountries(selectedCountries);
        }
        if (countryIndex < max && !reverse) setCountryIndex(countryIndex + 1);else setCountryIndex(countryIndex - 1);
        if (countryIndex === max && !reverse) setReverse(!reverse);

        if (countryIndex === 0 && reverse) {
          setCountryIndex(0);
          setReverse(!reverse);
        }
      }, timeout);
      return function () {
        return clearInterval(countryChange);
      };
    }
  }, [countryIndex]);
  return /*#__PURE__*/_react["default"].createElement(StyledAfricaMap, props, /*#__PURE__*/_react["default"].createElement("div", {
    className: "africaMap"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    id: "Calque_1",
    "data-name": "Calque 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 464.97 522"
  }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M109.881 27.4773C109.662 26.3626 108.547 23.03 107.212 22.8001C105.866 22.5818 106.764 19.2377 106.764 16.5601C106.764 13.8826 106.315 11.4348 104.762 9.43529C104.44 9.01009 104.037 8.24015 103.635 7.32081C101.196 7.36678 98.2398 5.55109 95.6976 5.47065C92.1546 5.36722 86.7021 7.1944 84.0679 4.25253C81.4452 1.32214 79.6162 0.414295 77.6951 1.32214C75.7741 2.22999 72.2311 12.3427 70.2066 15.2731C68.182 18.2035 62.5224 20.226 59.7962 20.226C57.0699 20.226 56.7594 24.363 54.6428 26.0753C52.5147 27.7875 53.3199 30.5341 50.7892 32.5336C48.2585 34.5562 49.4779 40.7272 50.7892 42.9566C52.1006 45.1745 46.1304 52.1615 42.7025 54.1725C39.263 56.1951 38.1472 60.0333 32.6832 60.9411C30.5551 61.3089 28.9562 62.2052 27.7254 63.3659C25.7813 65.1931 24.723 67.6638 23.9753 69.6403C22.756 72.8695 15.1754 77.6156 14.8763 82.1663C14.5657 86.717 7.47979 93.7844 2.83251 103.483C1.55566 106.161 0.968999 108.241 0.819458 109.919H27.8059C27.8059 109.919 27.8059 100.783 27.8059 99.22C27.8059 97.6571 34.9494 95.6576 34.9494 94.0947C34.9494 92.5433 34.9494 75.8229 34.9494 75.8229C34.9494 75.8229 57.254 76.2711 57.9327 75.8229C58.2778 75.593 58.2088 70.7436 58.0937 65.9745C57.9787 61.4927 57.8292 57.0914 57.9327 56.6547C58.1512 55.7584 67.2963 50.4147 68.8607 49.5184C70.4251 48.6335 73.3239 49.9665 73.3239 48.1853C73.3239 46.4041 77.1085 47.3005 79.3516 46.8523C81.5832 46.4041 82.9176 44.8527 82.9176 42.8417C82.9176 40.8306 86.0464 41.2788 88.048 41.0605C90.0495 40.8306 89.831 39.0494 91.1768 39.0494C92.5112 39.0494 91.844 37.0499 92.0626 34.8205C92.2811 32.5911 92.2811 33.0393 94.2942 33.0393C96.2957 33.0393 98.3203 31.9246 98.3203 30.58C98.3203 29.247 107.017 30.1433 108.363 30.1433C109.662 30.1663 110.1 28.592 109.881 27.4773Z",
    transform: "translate(-0.02 10.6)",
    fill: "transparent",
    strokeWidth: "1px",
    stroke: borderColor || "black"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["NA"]);
    },
    id: "Namibia"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M230.44,473c0-1.42,2.44-4.05,3.85-2s.81,4.87,3.65,4.87,7.9,1,8.72-.21,4.45-2.23,4.45-4.47V425.89c0-1.62,6.91,0,6.91-2.64V399.71a62.74,62.74,0,0,0,6.49-.81c1.43-.4,6.49-3,7.7-2.23s2.83,3.65,3.64,2.65,2.85-3.06,4.87-3.06a24.77,24.77,0,0,0,4.61-.88,3.51,3.51,0,0,1-.55-1.59c0-1.72-12.34.33-14.41,1s-8.56,1.71-10.62.69-15.08,0-15.08,0l-2.4-2.41H218.62a10,10,0,0,1-6.16-1.7c-2.07-1.38-4.12-1.38-6.52-.36s-1.36-1.37-3.07-1.37a2.78,2.78,0,0,0-2.4,1.73l-2.14.56c-.22,2.09,1.62,5.94,3.86,9a53.66,53.66,0,0,1,6.69,14c1.52,5,5.88,10.55,7,14.31s-.82,9.14.3,11.57,1.82,6.59,2.43,10.75.91,13,4.66,16.64a31.34,31.34,0,0,1,4.26,5.48C229.18,473.85,230.44,474,230.44,473Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("NA") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("NA") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["ZW"]);
    },
    id: "Zimbabwe"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M321.68,382.28l-1-2.23-5.89.2c-3.85,1-3.85,2.22-3.85,3.45s-3.65,4-6.29,4.86-5.49,6.9-7.09,7.7-7.09-1.21-8.71-1.42a13.22,13.22,0,0,0-3.51.54c1,1.78,3.13,3.9,3.91,3.9,1,0,1.37,7.21,3.77,8.25s6.86,3.41,6.86,4.8,2.74,3.09,2.74,5.15,2.71,4.87,4.8,4.8c4.38-.15,4.84,1.69,4.84,2.91s5.77,0,6.53,1.21,6.41.69,7.79,1.45c2.38-2.31,5.79-5.36,7-6.93,1.82-2.42.3-5.78,1.82-6.69s4.87-4.87,3.65-5.17-.3-3.35-2.12-5.17,2.12-2.73,1.82-6.07.61-10.06-.3-10.66-5.17-.92-7.89-2.74S321.68,382.28,321.68,382.28Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("ZW") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("ZW") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["BW"]);
    },
    id: "Botswana"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M307.41,422.29c-2.09.07-4.8-2.73-4.8-4.79s-2.74-3.79-2.74-5.16-4.46-3.77-6.86-4.8-2.74-8.25-3.77-8.25c-.77,0-2.89-2.12-3.91-3.9a24.77,24.77,0,0,1-4.61.88c-2,0-4.05,2-4.87,3.06s-2.42-1.84-3.64-2.65-6.29,1.84-7.7,2.23a60,60,0,0,1-6.49.81v23.54c0,2.65-6.91,1-6.91,2.65v20.17c1.5.54,2.91,1.26,3.26,2.15.81,2,2.63,6.49,2.22,7.7s-1.42.41-1.42,1.62-.82,3,1.21,3,5.48,1.23,6.89-.4,6.09-5.27,6.29-7.11,1.22-5.87,4.66-3.64,3.66,2.64,8.11,2.64,5.68-.21,6.49-3,0-5.08,2.63-5.08,5.87-2.43,5.87-4.27,1.22-4.66,2.85-4.66,5.06-2,5.47-4.06,3.24-1.21,4.26-2.44c.49-.59,1.47-2,2.35-3.32,0,0,0,0,0,0C312.25,424,311.79,422.13,307.41,422.29Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("BW") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("BW") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["SZ"]);
    },
    id: "Swaziland"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M327.83,452.62c-1.69,0-4.66,4.1-4.66,4.95s2.13,6.22,4.25,6.37,3.66,0,3.82-1.56a2.93,2.93,0,0,1,1.15-1.84c-.16-1.33-.51-4.18-.64-5.9C330.49,453.79,328.91,452.62,327.83,452.62Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("SZ") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("SZ") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["LS"]);
    },
    id: "Lesotho"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M309.31,473.79c-.82-1.61-6.08,1.22-6.89,2.84s-4.05,6.09-4.05,6.09l4.05,5.68,2.83.4s.82-2,1.63-3.65,4.46.42,4.46-1.22,2.43-3.24,2.43-4.88S310.11,475.41,309.31,473.79Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("LS") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("LS") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["ZA"]);
    },
    id: "South Africa"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M332.46,461.25l-.08-.73a2.93,2.93,0,0,0-1.15,1.85c-.15,1.56-1.69,1.7-3.83,1.56s-4.24-5.52-4.24-6.37,3-4.95,4.66-4.95c1.09,0,2.67,1.18,3.91,2a7.45,7.45,0,0,1,0-1.29c.15-.91,1.22-11.42-.61-12.48s-3.64-11.72-4.26-12.79-7.3-.45-8.06-1.67-6.38,0-6.51-1.18c-.88,1.31-1.86,2.73-2.35,3.32-1,1.23-3.85.41-4.26,2.44S301.8,435,300.18,435s-2.85,2.83-2.85,4.66-3.24,4.27-5.86,4.27-1.83,2.23-2.64,5.08-2,3-6.49,3-4.66-.4-8.11-2.64-4.46,1.83-4.66,3.64-4.87,5.5-6.28,7.11-4.87.4-6.9.4-1.21-1.82-1.21-3,1-.41,1.42-1.62-1.42-5.68-2.22-7.7c-.35-.88-1.76-1.61-3.25-2.15v25.07c0,2.23-3.65,3.25-4.45,4.48s-5.89.2-8.73.2S235.73,473,234.3,471s-3.85.6-3.85,2c0,1.08-1.26.88-2.94.72a47.73,47.73,0,0,1,5.16,11c1.62,5.38,5.58,10.45,6.58,13.59s2.14,6.1,0,6.39-2.12,2.13.11,5.58.3,5.49,2.22,5.87,1.33,1.63,2.84,1.73,2.65,1.62,3.65,2.95a2.82,2.82,0,0,0,4.46-.32c1.12-1.61,4.55-2.13,8.11-2.13s2.83-1.52,6.28-2.54a18.51,18.51,0,0,1,10.53-.08,7.3,7.3,0,0,0,6.58-.82c1.42-.91,4.16,1.42,4.36-.91s3-2,5.68-2,9-4.14,14.1-8.92,13.48-15.22,16.32-20,7.5-8.82,9.83-10.95c1.74-1.6,2.75-7.22,3.23-11.29A37.07,37.07,0,0,0,332.46,461.25Zm-21.13,22.68c0,1.64-3.65-.4-4.47,1.22s-1.62,3.65-1.62,3.65l-2.84-.4-4-5.68s3.24-4.46,4-6.09,6.08-4.47,6.9-2.84,4.46,3.66,4.46,5.27S311.33,482.32,311.33,483.93Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("ZA") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("ZA") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["AO"]);
    },
    id: "Angola"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M202.86,389.69c1.7,0,.68,2.42,3.07,1.38s4.46-1,6.52.35a9.89,9.89,0,0,0,6.16,1.7h23.65l2.4,2.41s13-1,15.08,0,8.56,0,10.62-.69a18.37,18.37,0,0,1,1.88-.45l-7.81-10.69.7-22.83,10.18.35,1.75-1.76,1.45-13.63a2.12,2.12,0,0,0-1.85-.06c-2.12.91-4,.6-6.09.6s-2.42,2.12-3.64,1.83-.3-4,0-5.48-1.83-4.27-3.35-5.49,1.83-8.83.92-9.74-1.23-3.34-1.23-5.48-1.52-.91-4.55-.91-3.34-1.52-3.34-1.52-3.67-.91-5.49,0-1.52,6.39-2.73,6.09-4.86.3-7.91,1.22-4.25-.62-5.77-4.25-3.34-2.45-2.73-5.18-1.21-5.78-1.21-5.78-20.08-.31-22.21,0a11.89,11.89,0,0,0-3.86,2.11c1.23,4.68,5.13,12.49,6,14.33s-1.1,3.64-1.1,7.19,3.84,10.05,4.25,14.41-2.43,7.1-4.87,9.95-5,9.22-5,13.18-3.65,7.81-3.55,9.65a59.81,59.81,0,0,1-.91,9.22.84.84,0,0,0,0,.27l2.15-.55A2.74,2.74,0,0,1,202.86,389.69Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("AO") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("AO") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["ZM"]);
    },
    id: "Zambia"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M325.14,330.3c-.92,0-3.08-1.45-4.95-2.82-1.33,1.48-6,1.24-8.25,1.24s-.3,3.34-1.83,4.56-2.13,3.05-.91,3.65-.31,5.79-.31,7.61-2.43,5.79-1.52,6.39,2.43,4.88,4.57,5.48,3.65-1.52,4.55-1.52.91,2.73.91,4.87a3.83,3.83,0,0,1-1.22,3s-3.35,1.23-4.87,0-2.73-4.55-2.73-5.78-3.64-1.22-5.16-1.22-3-2.74-3.64-4-2.45.31-2.45,1.23-1.52.91-3,.91-4.56-2.44-5.78-1.83-2.44-2.13-2.14-3.34-3-.3-4.25.31-1.82-1.53-1.82-1.53a4.8,4.8,0,0,0-1.8-1.75l-1.45,13.63-1.75,1.76-10.18-.35-.7,22.83,7.81,10.69c4.08-.82,12.53-2,12.53-.58a3.59,3.59,0,0,0,.55,1.59,12.82,12.82,0,0,1,3.51-.54c1.62.21,7.09,2.24,8.71,1.42s4.46-6.89,7.09-7.69,6.29-3.66,6.29-4.87,0-2.45,3.85-3.45l5.89-.2h.41L319.65,375s18-6.71,19-6.88c-.8-1.61-1.6-2.83-1.21-3,.7-.36,1.05-5.27,1.05-6.68s4.21-.36,2.8-1.76-1-9.48-.35-11.24,2.46,0,2.46-1.4-2.11-6-3.15-7.38c-.77-1-7-3.51-8.78-3.85S326.91,330.3,325.14,330.3Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("ZM") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("ZM") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["RW"]);
    },
    id: "Rwanda"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M322.26,278.13a27.94,27.94,0,0,0-3.78,1.25,4.82,4.82,0,0,1-3.42.6,1.81,1.81,0,0,1-.84.64c-1.67.6-1.37,4.41-1.37,4.41a1.8,1.8,0,0,0-1.52,2,2.07,2.07,0,0,0,1.37,2,17.1,17.1,0,0,1,2.27.2c3.85.71,3.5-2.09,3.5-2.09s5.61.34,6-1.41-1.06-4.57-1.06-4.57Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("RW") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("RW") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["SO"]);
    },
    id: "Somalia"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M410.47,204.08c1.21.6,3.18,3.8,4.55,4.11s9,2.89,13.85,4.87a24.34,24.34,0,0,0,9.41,2.13c1.54,0,3.81.45,2.43,1.52S424.45,232.84,422.47,235s-3.19,1.38-7.61,1.38-7.75,4.85-9,4.72a27.29,27.29,0,0,0-5.55.86l-3.27,4.8-3.16,4.91.36,24.59,3.4,5.4c2.67-3.58,9.9-10.49,15.21-16.11,5.79-6.08,8.73-7.51,12-9.12s11.46-9.65,17-16.74c3.5-4.48,7.39-9.44,7.89-12.68s3.76-7.51,6.19-10.66,6.49-11.15,6.39-13.59,2-7.61,2.33-12-3.35-4.77-4.46-2.34-9.83,4.06-15.41,4.16-8.91.61-10.95,2.54-7.09-.5-8.92,1.62-9,4-11.34-.91a8.84,8.84,0,0,0-3.52-3.91c-2,2-4.31,5-3.88,5.94C406.82,199.21,409.25,203.47,410.47,204.08Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("SO") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("SO") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["TN"]);
    },
    id: "Tunisia"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M176.31,13.6c1.63,2.43-.39,6.5-2,7.3s-2.83,4.48-4.46,4.48,0,6.09,2.84,7.3a4.2,4.2,0,0,1,2.83,4.47c0,1.22,4.07,2.43,5.28,4.06S184,50.54,184,53.39a3,3,0,0,0,.61,1.8,9,9,0,0,0,2.85-2.52c.92-1.72,1.62-4.66,1.21-5.48a2.72,2.72,0,0,1,.61-3c.91-.81,4.56-4.66,5.27-5s3,.1,2.94-2.14a29.13,29.13,0,0,1,.2-3.57c-1.65-1-2.64-2.3-2.64-2.92,0-1.32-1.82-3.54-2.83-2.32s-4.86.21-5.37-2.33,2.52-2.45,5.37-4.76a6,6,0,0,0,.2-9.25c-3.05-2.43-.92-3.74,1.22-6s.2-3.45-.93-2.43-2.92,1.31-3.23-1.12-6.9-2.84-9.43-.51a5.34,5.34,0,0,1-3.69,1.06C175.79,6.92,175.24,12,176.31,13.6Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("TN") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("TN") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["DZ"]);
    },
    id: "Algeria"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M106.82,27.48c0,2.67-.9,6,.45,6.26s2.47,3.58,2.67,4.7-.21,2.69-1.55,2.69-10.06-.9-10.06.43-2,2.47-4,2.47-2-.45-2.23,1.79.45,4.25-.89,4.25-1.12,1.78-3.14,2-5.14-.23-5.14,1.79a4.06,4.06,0,0,1-3.57,4c-2.23.45-6-.45-6,1.34s-2.9.45-4.47,1.34-10.73,6.26-11,7.16c-.12.43,0,4.86.16,9.35a3.3,3.3,0,0,0,1.35,1.24c3.38,1.94,64.59,42.46,66.52,44.4a37,37,0,0,1,4.33,6.26,23.18,23.18,0,0,1,7.71,2.42c3.38,1.93,3.38,7.23,3.38,7.23s4.33-1,6.74-1.44,10.6-3.38,10.6-3.38l12.53-10.12,29.42-18.34h.07c-.91-3.26-1.88-5.85-3.46-5.85-1.77,0-3-1.52-5.05-1.52s-4.56-1-4.81-2.8.76-3-.76-5.3-3-3.29-3-4.32,2.57-3,3-3.38-1-2-1-3.15-1-3,0-4.26,1.62-2.44.51-4.66,1.53-4.27.2-7.2-3.34-5.28-3.14-6.29c.08-.43.74-.9,1.52-1.44a3,3,0,0,1-.61-1.8c0-2.85-2-10.56-3.24-12.18s-5.28-2.84-5.28-4.06a4.2,4.2,0,0,0-2.84-4.47c-2.83-1.21-4.46-7.3-2.83-7.3s2.83-3.66,4.46-4.48,3.65-4.87,2-7.3c-1.08-1.63-.53-6.67.07-10.7a23.65,23.65,0,0,1-6.46-1.26c-1.21-.41-4.75.6-7,.7s-7.7,3.66-9.53,1.93-20.49,1.32-25.75,1.52-7.51,5.69-10.64,5.69-8.12,2.64-10.74,5.58a3.37,3.37,0,0,1-2.6,1.14,12.26,12.26,0,0,0,1.13,2.13C106.38,22.32,106.82,24.79,106.82,27.48Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("DZ") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("DZ") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["LY"]);
    },
    id: "Libya"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M194.57,39.18c-.7.3-4.36,4.15-5.27,5a2.73,2.73,0,0,0-.61,3c.4.82-.3,3.76-1.21,5.48s-4.16,3-4.36,4,1.82,3.34,3.15,6.29-1.33,5-.21,7.19.52,3.45-.51,4.66,0,3.15,0,4.27,1.42,2.75,1,3.15-3,2.38-3,3.38,1.52,2,3,4.32.51,3.54.76,5.3S190.18,98,192.21,98s3.28,1.53,5,1.53c1.58,0,2.55,2.6,3.46,5.85.76,0,7.32.11,10,1.93a15.6,15.6,0,0,1,4.35,4.34l11.57-6.27L279,133.52v-3.64h6.36V62.59c0-4.66-2.12-7.62,0-10.16s-.84-3.81.84-8.47c.19-.55.4-1.12.62-1.72a.86.86,0,0,1-.2-.26c-.5-1.42-3.25-1.52-9.22-2.43s-3.75-5-10.44-5.38-15.21,5-15.31,7.81,3.14,6,.91,8.93-7.08,3.24-10.54.1a19.42,19.42,0,0,0-12.66-4.55c-4.16,0-7.09-2.65-6.8-4.87s-1-3.24-4.46-4-6.37-3.54-12.46-2.54a11.08,11.08,0,0,1-7.9-1.65,26,26,0,0,0-.21,3.58C197.6,39.27,195.27,38.85,194.57,39.18Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("LY") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("LY") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["GM"]);
    },
    id: "Gambia"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.94,177.54c1.41-1.29,3.73,1.28,5.78,1.54A7.44,7.44,0,0,0,23,177.93s-.38-.27-3.71-.51-3.6-4.24-6.55-2.84A14.14,14.14,0,0,1,4,176c0,1.12-.69,2.63-.89,4.12a14.17,14.17,0,0,1,2-.41C7.18,179.59,11.54,178.82,12.94,177.54Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("GM") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("GM") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["SN"]);
    },
    id: "Senegal"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.07,185.1c1.28.13,3.85-1.54,3.85-1.54s8.58-.64,10-.76a3.48,3.48,0,0,1,1.73.47,3.78,3.78,0,0,0,0-.63s4.57.91,4.87,2,6.53,1.82,10,.61l.76-.28a33.13,33.13,0,0,0,0-4.35c-.21-1-2.43-3.24-3.65-4.45s-1-4.27-1-4.27L33.36,170s-1-3.86-3.87-4.82-4.81-6.27-4.81-6.27H22.27a14.92,14.92,0,0,0-3.85-3.37c-1.94-1-5.3.48-5.3.48a24.14,24.14,0,0,1-6.27,0c-2.41-.48-1.94,2.9-3.86,3.38-.09,0-.24.06-.35.08A12.21,12.21,0,0,1,1.06,165c-2.22,3.35.91,8.22,2.54,9.74A1.59,1.59,0,0,1,4,176a14.14,14.14,0,0,0,8.68-1.43c3-1.4,3.21,2.58,6.55,2.84s3.71.51,3.71.51a7.44,7.44,0,0,1-4.23,1.15c-2.05-.26-4.36-2.83-5.78-1.54s-5.76,2.05-7.81,2.18a14.17,14.17,0,0,0-2,.41,3.84,3.84,0,0,0,.79,3.21c.26.29.48.55.69.82C8.07,183.28,7,185,8.07,185.1Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("SN") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("SN") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["GW"]);
    },
    id: "Guinea-Bissau"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.55,193.42c1.52-1.06,4.56-3.8,5.62-3.34s2.43-.48,2.43-1.08-2.13-2.58-.46-3.19a2.81,2.81,0,0,0,1.5-2.56,3.72,3.72,0,0,0-1.73-.48c-1.41.13-10,.77-10,.77s-2.57,1.67-3.85,1.54c-1.08-.11,0-1.83-3.47-.94,1.74,2.16,2,3.25,5.5,4.24,3.95,1.12-.3,3.15,2.93,5.18a9,9,0,0,1,.79.57A7.32,7.32,0,0,1,14.55,193.42Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("GW") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("GW") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["CF"]);
    },
    id: "Central Africa Republic"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M294.61,226.8c0-1.26,0-2.54-2.53-4.65s-4.23-2.54-4.23-3.82-.84-1.7-3-4.24a7.81,7.81,0,0,0-5.5-2.53l-.84-2.11-3-.43s-1.7-1.27.85-2.54,0-4.66-.43-5.92c-.37-1.1-3.94-5.42-4.85-6.5a2.5,2.5,0,0,1-1.2-.27c-1.42-.82-4.25.82-5.67,2.23s-.4,2.24-1.42,3.25a72.67,72.67,0,0,0-6.69,6.9c-2.23,2.84-7.91,1-9.73,2s.8,2.64-.41,3.66-4.86,2.63-6.07,3.25-6.1.4-7.5,2.22-3-2-4.46,0-3.05,2.24-3.85,1.62a2.26,2.26,0,0,1-.6-.72c-1.32,1.23-2.93,2.59-3.46,4.27-.9,2.89-3.34,5.48-3.34,6.85s.91,3.19.91,5.62a7.81,7.81,0,0,0,2,5.48,6.25,6.25,0,0,1,1.06,4.12,16,16,0,0,0,1.52,2.28c1.06,1.37,4.11,3.35,4.41,4.41a2.18,2.18,0,0,0,1.17,1.16c.14-.22.28-.45.42-.65a7.34,7.34,0,0,0,1.26-5.08l3.81-.84,2.95-.84,5.92.84v-4.66s4.23-5.5,7.18-5.5,5.5,3.82,5.5,3.82L268,242s.86-3.8,2.13-4.66,3.79.85,5.48,0a16.19,16.19,0,0,1,7.19-2.12c3,0,4.25,1.7,5.5-.84s7.61.84,7.61.84l5.07-.84-1.69-4.23S294.61,228.06,294.61,226.8Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("CF") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("CF") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["NG"]);
    },
    id: "Nigeria"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M186.87,223c.82-.21,2.63.4,4-.6s4.48,1.42,4.87,3.44,1.62-.82,2.84-3.05,5.06-8.93,5.06-10.54,3.26-3.05,3.26-4.06-.21-3.24.81-3.65,1.82-3.45,1.61-4.46,3.44-6.7,4-7.51,3.85-.41,4.06-2.24.81-3.85-.42-4.26-2.83-1.82-2.83-2.83a17.65,17.65,0,0,1,.43-3.71c-1.63-.23-1.71-1.84-2.67-2.79s-1-1.83-2.42-1.42-3,3.86-4.87,4.46-4.45-.82-5.67-1.42-6.9,0-8.72-.2-3.65,2.42-5.07,3.24-5.47.41-6.68,0-4.06-2.84-5.27-2.84a12.2,12.2,0,0,0-5.68,1.63c-2,1.21-2.64-2.24-3.85-3.66s-3.85-.2-5.48-1.62-2.64,1.62-4.05,1.43-5.07-1-6.29,0-1,4.87-1.62,5.48-3,3.45-3,4.88a1.51,1.51,0,0,1-.66,1.36c.28,1.67.62,3.83.7,4.61.15,1.39.76,8.23-.76,9.75a15,15,0,0,0-2.58,4,7.67,7.67,0,0,0-2.89,5c-.46,3.35.15,5.47.15,8.06,0,1.82,1.36,3.15,2.09,5.41,0,0,.06,0,.08.07,1.23,1.62,7,1.92,10.24,2.64s6.59,5.27,6.49,7,2.13,5.08,3.64,5.87,5.27-1.52,7-1.52,7.91.11,9.13-1a.81.81,0,0,1,1.09-.06,41.17,41.17,0,0,0,2-7.36S186.05,223.21,186.87,223Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("NG") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("NG") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["BJ"]);
    },
    id: "Benin"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M137.09,211.38a7.62,7.62,0,0,1,2.89-5,14.85,14.85,0,0,1,2.58-4c1.53-1.52.91-8.36.76-9.75-.08-.77-.42-2.93-.7-4.61a2.46,2.46,0,0,1-2.19-.14c-1.82-.82-.19-2.66-2.22-3.26s-2.84,1.62-2.44,3.26-1,1.6-1.82,2.63-4.46,1.21-5.68,1.21-2.63,2.23-3.85,2.64a3.32,3.32,0,0,1-1.09.07c.28,5.35,1.17,4.94,3.73,6.43,2.89,1.67.15,4,1.37,5.16s.76,4.26,1.06,8.07c.19,2.29.43,8.27.59,12.63a25.61,25.61,0,0,1,4.58-.42c2.18,0,3.49-2.88,4.69-1.48-.75-2.27-2.1-3.59-2.1-5.41C137.25,216.86,136.64,214.73,137.09,211.38Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("BJ") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("BJ") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["TG"]);
    },
    id: "Togo"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M128.43,206.05c-1.22-1.22,1.52-3.5-1.37-5.16-2.55-1.49-3.45-1.08-3.73-6.43-1.47-.09-3.62-.73-5.2-.89a1.63,1.63,0,0,0-.82.14c.33,1.94.81,4.1,1.38,4.42,1.06.6,1.82,1.82,1.67,4.11s-.76,7.3.15,9.58a27.16,27.16,0,0,1,1.84,9.43c0,2.18,1.23,5.43,2.51,7.9a8.78,8.78,0,0,0,1.39-.9,8.5,8.5,0,0,1,3.83-1.52c-.16-4.36-.4-10.34-.59-12.64C129.19,210.31,129.64,207.28,128.43,206.05Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("TG") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("TG") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["CM"]);
    },
    id: "Cameroon"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M198.22,254.72s16.07.85,18.18.42,9.73,3.38,9.73,3.38a18.39,18.39,0,0,1,1.69-6.13,2.1,2.1,0,0,1-1.17-1.15c-.3-1.06-3.35-3.05-4.41-4.41a14.35,14.35,0,0,1-1.52-2.28,6.26,6.26,0,0,0-1.06-4.12,7.81,7.81,0,0,1-2-5.48c0-2.43-.91-4.26-.91-5.62s2.44-4,3.34-6.85c.53-1.68,2.14-3.06,3.46-4.27a21.91,21.91,0,0,1-2-5c-.82-2.64-3-3.45-5.68-5.88s-1.62-3.85-1.62-4.88,3.44-1,5.87-.81,3.85-.4,2.85-1-3.06-5.28-2.85-8.52-1-4.25-.81-6.1-2.23-6.48-4.26-6.48a1.59,1.59,0,0,1-.38-.06,17.57,17.57,0,0,0-.43,3.7c0,1,1.62,2.43,2.84,2.84s.61,2.45.41,4.26-3.44,1.43-4,2.24-4.26,6.48-4.06,7.51-.6,4.06-1.61,4.46-.81,2.64-.81,3.64-3.25,2.44-3.25,4.07-3.84,8.31-5.06,10.54-2.43,5.08-2.85,3-3.45-4.46-4.86-3.43-3.24.4-4.05.6-7.86,7.5-7.86,7.5a41.85,41.85,0,0,1-2,7.36c.9.55,1.85,2.37,2.85,3.8,1.42,2,4.15.51,5.27,1.12s2.33,5.38,1.93,6.69-2.07,4.5-1.29,6.09h9.49Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("CM") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("CM") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["CI"]);
    },
    id: "Cote d'Ivoire"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M98.63,232.68c-.91-1.21-3-6.39-2.9-7.6s2.75-4.88,2.6-6.71,2.58-3,2.58-4.56a36.12,36.12,0,0,0-2.39-10.65,1.69,1.69,0,0,1-1.26-.66c-1.23-1.21-6.29-1-8.11,1s-5.47-1.83-6.08-2.84-3.24-3.24-5.27-1.82-2.63,1-2.43-.82-3.05-1.23-3.45.4-3,3.05-3.85,1.82-2.64-2.83-3.44-1a1.36,1.36,0,0,1-2.32.55c-.51,2.26-1.14,4.85,0,5.47a2.71,2.71,0,0,1,1.22,3.2c-.31.91,2.28,3.19,1.22,4.26s-2.43-1.07-3.19.47,1.52,2.88.61,4.1-2.28,1.36-2,3.8.15,4.12-.76,4.88.15.76,2.28,2.13S67.33,231,67,233.29c-.27,2.08-1.18,2.56-2,6.39,4.12.08,11.52-2.92,20.21-4.42a29.39,29.39,0,0,1,13.31.79C98.86,234.76,99.09,233.3,98.63,232.68Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("CI") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("CI") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["GH"]);
    },
    id: "Ghana"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M120.51,211.85c-.91-2.3-.31-7.31-.15-9.59s-.61-3.51-1.67-4.11c-.57-.32-1-2.48-1.38-4.42-1.21.55-1.3,2.53-1.81,1.69-.61-1-16.42-1.62-17.23-.41s1.42,5.68,1.21,6.9c-.12.73-.46,1.23-1,1.26a36.18,36.18,0,0,1,2.39,10.65c0,1.53-2.73,2.74-2.58,4.57s-2.44,5.49-2.6,6.7,2,6.39,2.9,7.6c.46.61.21,2.08-.13,3.37,2.76.79,4.59,1.72,5.14,1.86,1.21.3,9.83-3.65,13.28-5.38,2.75-1.38,5.82-2.25,7.93-3.36-1.27-2.47-2.52-5.72-2.52-7.9A26.17,26.17,0,0,0,120.51,211.85Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("GH") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("GH") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["GN"]);
    },
    id: "Guinea"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M31.12,203.47c.15-1.68,1.52-1.07,3.19-.76s3.66-1.07,5.18-1.07S45,207,45,208.48a7.47,7.47,0,0,0,.91,4.11,1.67,1.67,0,0,1,.21.48,35,35,0,0,1,5-.87c.75,0,2.24,3.6,1.93,5.84s2.24,3.9,3.3,2.41,2.39-3.45,2.68-2.1c.1.39.65.74,1.36,1,.39-.88,1.19-1.24,1.81-2.07.92-1.22-1.37-2.58-.61-4.1s2.14.58,3.2-.47-1.53-3.35-1.23-4.26a2.71,2.71,0,0,0-1.22-3.2c-1.13-.63-.49-3.21,0-5.47a4,4,0,0,1-.92-1c-.82-1.22-.21-3.85-1.61-3.85s-1.22-2,0-2.43-2.43-1.83-2.43-3.26-1.82-4.86-2.64-5.07-3.64,3.45-4.87,3.45-3.85-2.44-4.65-.41-2.63-1-3.85.61-2-1.84-2-1.84,0-.47,0-1.13a7.77,7.77,0,0,0-.76.28c-3.5,1.21-9.73.45-10-.62s-4.87-2-4.87-2,.15,2.59-1.52,3.2.46,2.58.46,3.19-1.37,1.53-2.43,1.08-4.1,2.28-5.62,3.34a6.9,6.9,0,0,0-.74.73c2.35,1.89,2.14,4,4.9,6,2.55,1.88,5.77,4.39,7.72,8.43C28.39,206.94,31,204.6,31.12,203.47Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("GN") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("GN") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["LR"]);
    },
    id: "Liberia"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M61.67,228.12c-2.13-1.37-3.19-1.37-2.28-2.13s1.06-2.45.76-4.88a3.46,3.46,0,0,1,.16-1.74c-.71-.29-1.26-.64-1.36-1-.29-1.35-1.64.6-2.68,2.1s-3.6-.15-3.3-2.41-1.2-5.84-1.93-5.84a35,35,0,0,0-5,.87c.32,1.08-.4,2.28-.67,3.47-.3,1.36-3.95,3.34-5.47,4.57a8.28,8.28,0,0,0-1.56,2.32c2.86,1.81,6.2,3.91,8.91,6,5,3.76,12.47,8.73,16,10a4.88,4.88,0,0,0,1.67.26c.84-3.83,1.75-4.31,2-6.39C67.3,231,63.81,229.48,61.67,228.12Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("LR") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("LR") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["SL"]);
    },
    id: "Sierra Leone"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M45.41,216.55c.31-1.36,1.22-2.74.46-4a7.47,7.47,0,0,1-.91-4.11c0-1.53-4-6.84-5.47-6.84S36,203,34.31,202.71s-3-.92-3.19.76c-.1,1.13-2.74,3.47-4.7,5.13a16.87,16.87,0,0,1,1,2.53c1.61,5.58,3.15,6.7,5.47,8.62,1,.87,3.12,2.18,5.49,3.69a8.84,8.84,0,0,1,1.56-2.32C41.46,219.91,45.11,217.92,45.41,216.55Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("SL") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("SL") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["MA"]);
    },
    id: "Morocco"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M110,38.43c-.22-1.12-1.34-4.47-2.68-4.7s-.45-3.58-.45-6.26a11.3,11.3,0,0,0-2-7.16,10.88,10.88,0,0,1-1.13-2.12c-2.45,0-5.41-1.77-8-1.86-3.55-.1-9,1.74-11.66-1.22s-4.46-3.85-6.38-2.94-5.48,11.06-7.51,14-7.69,5-10.43,5-3,4.15-5.16,5.87-1.33,4.47-3.86,6.48-1.32,8.23,0,10.46-4.67,9.25-8.1,11.26-4.57,5.89-10,6.8a9.37,9.37,0,0,0-5,2.43,16.45,16.45,0,0,0-3.76,6.3c-1.22,3.24-8.82,8-9.12,12.58S7.35,105,2.7,114.72a19.39,19.39,0,0,0-2,6.46h27V110.44c0-1.56,7.16-3.57,7.16-5.14V87s22.35.45,23,0c.34-.23.27-5.1.16-9.89-.12-4.5-.27-8.92-.16-9.35.22-.9,9.38-6.27,11-7.17s4.47.45,4.47-1.34,3.79-.88,6-1.33a4.07,4.07,0,0,0,3.57-4c0-2,3.14-1.57,5.14-1.79s1.79-2,3.14-2,.66-2,.88-4.24S92.32,44,94.34,44s4-1.12,4-2.47,8.72-.44,10.07-.44S110.18,39.55,110,38.43Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("MA") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("MA") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["MR"]);
    },
    id: "Mauritania"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.85,156a24.14,24.14,0,0,0,6.27,0s3.37-1.44,5.3-.48a14.76,14.76,0,0,1,3.85,3.36h2.41s1.92,5.32,4.81,6.28a6,6,0,0,1,3.25,3.24c2.07-.05,3.67-.71,3.67-2.2,0-1.86.92-4.32,4-1.55s3.08.3,3.69-.61,2.76.3,4.61.3A12.28,12.28,0,0,0,53,163.12s25.53.31,26.75-.31.92-5.85.92-5.85l-2.15-2.15L72.08,94.18H83.63C71.3,86,60.73,79.1,59.39,78.33A3.59,3.59,0,0,1,58,77.09c.12,4.79.2,9.66-.16,9.89-.67.45-23,0-23,0v18.34c0,1.57-7.15,3.58-7.15,5.15v10.74H.67c-.39,4.42,2.3,6,3.84,7.75C6.64,131.38,2.89,135.65,6,140s-.71,11.07-2.23,13.49c-.83,1.32-.91,3.63-1.16,6L3,159.4C4.91,158.9,4.44,155.52,6.85,156Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("MR") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("MR") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["ML"]);
    },
    id: "Mali"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M141.33,138.64s0-5.31-3.38-7.23a23.11,23.11,0,0,0-7.71-2.42,37,37,0,0,0-4.33-6.26c-1.16-1.17-23.72-16.27-42.28-28.55H72.08l6.46,60.63L80.69,157s.3,5.23-.92,5.85-26.75.31-26.75.31a12.28,12.28,0,0,1-4.31,1.22c-1.85,0-4-1.22-4.61-.3s-.61,3.38-3.69.61-4-.31-4,1.55c0,1.49-1.6,2.17-3.66,2.2a10.29,10.29,0,0,1,.61,1.59l1.25,1.87s-.19,3,1,4.27,3.44,3.45,3.65,4.45a49.1,49.1,0,0,1,0,5.48s.81,3.45,2,1.85,3,1.41,3.85-.61,3.44.4,4.65.4,4.06-3.66,4.87-3.45,2.64,3.67,2.64,5.08,3.64,2.85,2.43,3.25-1.42,2.43,0,2.43.81,2.65,1.61,3.86,2.43,2.22,3.24.4,2.64-.21,3.45,1,3.44-.2,3.85-1.82,3.65-2.24,3.44-.4.41,2.22,2.44.82a2.56,2.56,0,0,1,1.93-.41,50.13,50.13,0,0,1,1.91-5.28c.62-1.22-1.41-4.06-.4-4.46s4.46.4,5.48-2.45A14.73,14.73,0,0,1,88.91,182s.4-6.07,2.23-5.06,4,2.64,4.26.2,2.43-1,3-3.25,1.82-2,3.25-1.62,2.63-.21,2.63-1.42,3.24-.62,5.89-2.44,4.06-3.25,5.06-2.22,7.71.81,8.72.4,3-2.23,5.48-1.82,8.31-1,10.74-1,3.45-2.23,4.26-3,1.42-4.47,2.24-5.07c.65-.49.52-13.23.44-18.25C144.72,137.89,141.33,138.64,141.33,138.64Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("ML") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("ML") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["BF"]);
    },
    id: "Burkina Faso"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M135.77,187.83a5,5,0,0,0-2.78-1.25c-.6,0-.15-3.34-.45-3.81s-2.29.92-3.51.47-1.67-2.45-2.73-2.45-1.22-1.21-1.22-2.58-2-2.74-3.19-3.66-1.53-3.48-2.27-4c-.44-.26-.28-2.13-.05-3.68-1.9,0-3.77-.24-4.26-.72-1-1-2.44.4-5.06,2.22s-5.89,1.21-5.89,2.44-1.23,1.83-2.63,1.42-2.64-.6-3.25,1.62-2.84.81-3,3.25-2.44.81-4.27-.2S89,182,89,182a14.88,14.88,0,0,0-2.23,4.27c-1,2.84-4.46,2-5.47,2.45s1,3.24.4,4.46a45.84,45.84,0,0,0-1.91,5.28,5.63,5.63,0,0,1,3.33,2.23c.61,1,4.26,4.87,6.08,2.84s6.89-2.23,8.11-1,2,.61,2.22-.6-2-5.68-1.21-6.9,16.62-.6,17.23.41.61-2,2.64-1.82,5.07,1.21,6.28.81,2.64-2.64,3.85-2.64,4.87-.19,5.68-1.21,2.24-1,1.83-2.63A.27.27,0,0,1,135.77,187.83Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("BF") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("BF") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["NE"]);
    },
    id: "Niger"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M220.92,117.49c0-1-.23-5.49-.41-8.82l-5.44,3a15.33,15.33,0,0,0-4.34-4.34c-2.88-1.93-10.11-1.93-10.11-1.93l-29.41,18.34L158.68,133.8s-8.2,2.9-10.61,3.38c-.27.06-.6.12-.91.2.08,5,.21,17.75-.44,18.25-.81.6-1.43,4.27-2.23,5.06s-1.83,3.06-4.27,3.06-8.31,1.42-10.74,1-4.46,1.43-5.47,1.82a18.27,18.27,0,0,1-4.46.33c-.22,1.55-.4,3.42,0,3.68.76.46,1.06,3,2.27,4s3.2,2.3,3.2,3.66.16,2.58,1.22,2.58,1.52,2,2.73,2.45,3.19-.92,3.5-.47-.15,3.81.45,3.81a5.06,5.06,0,0,1,2.79,1.25c-.37-1.62.44-3.78,2.45-3.18s.4,2.44,2.22,3.26,2.84.19,2.84-1.22,2.43-4.27,3-4.88.4-4.47,1.62-5.48,4.87-.2,6.29,0,2.43-2.84,4-1.43,4.27.2,5.48,1.62,1.82,4.87,3.85,3.66a11.94,11.94,0,0,1,5.68-1.63c1.21,0,4.06,2.44,5.27,2.84s5.26.82,6.68,0,3.24-3.45,5.07-3.24,7.51-.42,8.72.19,3.84,2,5.67,1.42,3.44-4,4.87-4.45a1.49,1.49,0,0,1,1,0c0-.8,0-1.55,0-2.22,0-3.65.81-2.22,1.42-5.87s10.14-13.2,11-13.81.8-15,.8-17A27.39,27.39,0,0,1,225,129c.82-2.84-1.42-2.63-1.21-5.27S220.92,119.11,220.92,117.49Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("NE") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("NE") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["TD"]);
    },
    id: "Chad"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M279,133.52l-52.32-28.17-6.14,3.32c.18,3.33.41,7.83.41,8.82,0,1.62,3,3.66,2.83,6.29s2,2.43,1.21,5.27a27.45,27.45,0,0,0-1.21,7.32c0,2,0,16.42-.8,17S212.61,163.56,212,167.21s-1.43,2.23-1.43,5.87c0,.66,0,1.42,0,2.22.52.18.76.75,1.45,1.44,1,1,1,2.84,3.05,2.84s4.46,4.66,4.26,6.48,1,2.84.81,6.1,1.82,7.91,2.85,8.52-.42,1.22-2.85,1-5.87-.2-5.87.81-1,2.45,1.62,4.88,4.86,3.24,5.68,5.88,1.82,5.08,2.64,5.68,2.43.4,3.85-1.62,3,1.83,4.46,0,6.28-1.61,7.5-2.22,4.86-2.24,6.07-3.26-1.41-2.64.41-3.65,7.5.82,9.73-2a71.46,71.46,0,0,1,6.69-6.9c1-1,0-1.82,1.42-3.25s4.25-3,5.67-2.23a3.07,3.07,0,0,0,1.2.27,2.37,2.37,0,0,1-.22-.27l.84-3s-3.37-1.7-3.37-4.24.84-5.07-1.27-5.07-2.55-2.13-.86-3.8-2.53-5.09.43-5.09.84-4.66,2.95-5.07,2.55-2.14,2.55-4.25,4.66-3.38,5.91-3.8.84-7.19.84-7.19Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("TD") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("TD") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["EG"]);
    },
    id: "Egypt"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M353.31,58.49,348.39,46.4a7.23,7.23,0,0,1-.76,1.07c-.82.83-4.16-1.21-7.3-.4s-5.58-.3-8.63-1.83-13,.41-14.29,2.33-4.67,1.94-7.7.73a40.23,40.23,0,0,0-12.56-3.56c-5.21-.47-9.41-1.23-10.34-2.48-.22.6-.44,1.16-.62,1.71-1.7,4.67,1.26,5.93-.84,8.47s0,5.5,0,10.17v52.85h41.81l2.45-1.61c1.22-.81,3.23,1.22,3.23,1.22h8.93s1.62,2,3.65,2,.82-3.25,4.06-3.25,2.43-4.88,4.46-4.88,1.61.41,3.64-2.42a2.26,2.26,0,0,1,.23-.29,8.24,8.24,0,0,1,0-2.76c.49-3.24-1.73-3-3.15-7.61s-7.1-11.35-7.29-14-3.35-4.15-3.25-7-1.53-3.14-4.67-7.61S335.38,55,336.29,54.69s3.55,6.6,4.55,8.83,4.46,9,6.91,9,3.35-10.24,4.16-9.74a.59.59,0,0,1,.16.3l.28-1.85Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("EG") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("EG") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["GA"]);
    },
    id: "Gabon"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M197.52,295.75c3.39,0,2.12-2.13.84-5.52s2.13-3,4.24-3,1.27-3.82,3-3.82,2.11,4.66,3.82,4.24,3,1.27,5.08.85,2.12-4.68,2.12-8.06.43-5.93-1.69-7.21-3.82-4.24-1.27-5.51,3-3.83.84-5.51-6.79,1.69-6.79,0c0-.93.4-4.25.73-7.06-4.9-.17-10.19-.43-10.19-.43l-1.27.36a47.5,47.5,0,0,1-.27,8.83s-7.63.43-9.34.43c-.36,0-1.52.16-3.17.41a8.76,8.76,0,0,1-1.16,1.46c-.91.91,2.13,2.12,2.62,3.44s-3.85.91-3.75,2.85-1.52,3.43-2.74,4.36,3.25,4.77,3.35,6.08,1.1,2.54,5,6.29c3.67,3.58,1.92,4.49,6.77,8.45A3.9,3.9,0,0,1,197.52,295.75Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("GA") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("GA") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["GQ"]);
    },
    id: "Equatorial Guinea"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M196.68,263.93a47.58,47.58,0,0,0,.27-8.84l-1.69.48h-9.5c0,.07,0,.13.08.2a2.93,2.93,0,0,1-1.62,4.47c-2.13.71-2,2.64-.31,2.74,1.06.06.82.93.25,1.79,1.64-.25,2.8-.41,3.17-.41C189.05,264.36,196.68,263.93,196.68,263.93Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("GQ") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("GQ") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["CG"]);
    },
    id: "Congo"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M207.27,302.11c1.27.43,2.12,2.54,4.66.43s5.51-1.71,5.51.43.85,1.68,3-.43,4.24.42,4.24-3.83,2.55-.43,2.55-5.09.42-9.33.42-11.45,5.94-4.25,5.94-7.64,5.09-10.19,5.09-14.43,1.27-5.09,2.54-7.21a11.12,11.12,0,0,0,1-7.11v.06l-5.93-.84-2.95.84-3.8.84a7.37,7.37,0,0,1-1.27,5.08c-1.68,2.12-2.11,6.77-2.11,6.77s-7.61-3.79-9.73-3.38a61.44,61.44,0,0,1-8,0c-.33,2.83-.72,6.14-.72,7.06,0,1.7,4.67-1.69,6.79,0s1.7,4.26-.85,5.52-.85,4.24,1.27,5.51,1.7,3.81,1.7,7.21,0,7.64-2.12,8.05-3.39-1.27-5.09-.84-2.12-4.24-3.81-4.24-.84,3.81-3,3.81-5.51-.42-4.24,3,2.54,5.51-.85,5.51a3.82,3.82,0,0,0-3.26,2c.22.19.45.38.73.58a20.08,20.08,0,0,1,5.86,7.23C203.66,303.58,206.57,301.87,207.27,302.11Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("CG") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("CG") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["SD"]);
    },
    id: "Sudan"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M353.9,109c-2,0-1.22,4.88-4.46,4.88s-2,3.25-4.05,3.25-3.66-2-3.66-2h-8.92s-2-2-3.24-1.22l-2.44,1.61H285.31v14.43H279v22.43s.43,6.76-.84,7.19-5.91,1.68-5.91,3.8-.43,3.81-2.55,4.25,0,5.07-3,5.07,1.25,3.39-.43,5.09-1.26,3.8.86,3.8,1.26,2.53,1.26,5.07,3.38,4.24,3.38,4.24l-.84,3s4.64,5.5,5.07,6.77,2.95,4.66.43,5.92-.86,2.54-.86,2.54l3,.42.84,2.12a7.83,7.83,0,0,1,5.5,2.53c2.12,2.54,2.95,3,2.95,4.24s1.69,1.69,4.23,3.82,2.53,3.38,2.53,4.64,4.66,3.4,4.66,3.4l1.59,3.94a3.57,3.57,0,0,1,1.77,1.8,7.89,7.89,0,0,0,3,3.4s2.54,1.69,4.24,0,3.81.43,3.81.43,2.13-1.7,3.39-.84c.86.56,4.66,3.68,7.92,6.68A29.6,29.6,0,0,1,330,244.1c1.52-.15,3.64,2.43,4.25,1.52s3.81-2.28,5-1.67,4.1.75,4.25-.3c.1-.73,1.39-1.45,2.32-2.23a2.34,2.34,0,0,0,.87-1.12c.3-1.23,4-3.35,5.48-3.66s3.34-.47,4.11.47a4.89,4.89,0,0,0,1.71,1c.52-3.89,1.38-6,.11-6-1.69,0-5.09-1.7-6.35-5.1s-5.09-5.52-5.92-7.64-5.52-1.68-6.36-3.38,1.26-1.71,1.26-3.83,5.1-.84,5.51-1.27.84-5.08.84-7.64,3.39-5.07,2.13-6.35,1.26-1.69,3-3,.41-5.09,2.12-6.79,3-5.09,4.24-5.09,2.95-1.69,2.95-3.4,3-5.09,2.56-8.05-1.7-6.79.42-9.34,3-4.67,2.54-6.79,2.54-2.55,3.83-3.82c.9-.9,4.14-2.24,6.55-6.1a15.73,15.73,0,0,0-4.27-3.93c-2.43-1.11-4.05-5.38-4.05-10.76s-1.33-9.63-1.53-11.36-2.83-5.39-6-7.12a7.16,7.16,0,0,1-3.84-5.14,3.67,3.67,0,0,0-.23.29C355.53,109.37,355.93,109,353.9,109Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("SD") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("SD") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["DJ"]);
    },
    id: "Djibouti"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M403.72,183.82a41.47,41.47,0,0,1-3.33,4.78c-1.5,1.71-.65,4.91-.21,5.78s2.56.63,3.85-.22c1-.66,1.74-.28,3.24,1.13a26.49,26.49,0,0,1,2.83-3.39c-1.69-1-3.26-1.14-3.67-1.57-.71-.7,2-2.73,3.95-3.14s1-2.64-.61-4.05l-.9-.83a7.68,7.68,0,0,0-1.86,1.3C406.49,184.26,405.35,184,403.72,183.82Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("DJ") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("DJ") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["ER"]);
    },
    id: "Eritrea"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M370.88,150.66c-1.28,1.27-4.24,1.69-3.83,3.82s-.42,4.24-2.54,6.79-.87,6.32-.43,9.28c2.55-.19,5.2-.23,5.73.3,1.07,1.07,1.5,0,2.13-2.14s1.92-1.92,3.22-.84,2.13,2.78,4.26,1.71,1.93-.43,3,0,5.33-.21,6.83,0S403.8,183.7,403.8,183.7a.79.79,0,0,0-.1.14c1.65.18,2.78.42,3.28-.25a7.91,7.91,0,0,1,1.85-1.29,78.92,78.92,0,0,1-7.29-8.2c-3.85-4.88-8.42-7.51-10.86-7.51s-2.83-4.15-4.36-4.36-5-6.2-5.07-10c-.05-2.17-1.85-5.19-3.83-7.64C375,148.42,371.78,149.76,370.88,150.66Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("ER") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("ER") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["ET"]);
    },
    id: "Ethiopia"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M345.88,219.38c.84,2.13,4.64,4.24,5.92,7.63s4.66,5.1,6.35,5.1c1.26,0,.41,2.14-.11,6a23.87,23.87,0,0,1,2.25.93c1.07.61,5.47,0,7,1.37s6.39,4.57,7.9,4.57,7,.76,7.92,1.37,2.13-2.28,4.56-3.65,5.49-2.29,5.94-1.21a2.72,2.72,0,0,0,3.34,1.37,19.92,19.92,0,0,1,3.41-1,28.25,28.25,0,0,1,5.56-.87c1.21.14,4.56-4.71,9-4.71s5.63.76,7.61-1.38,16.88-17.19,18.25-18.26-.9-1.52-2.44-1.52a24.2,24.2,0,0,1-9.41-2.14c-4.87-2-12.47-4.56-13.84-4.86s-3.35-3.51-4.56-4.11-3.65-4.87-4.26-6.24c-.21-.47.27-1.45,1-2.55-1.49-1.4-2.25-1.79-3.24-1.13-1.29.85-3.42,1.07-3.85.22s-1.29-4.07.21-5.78a47.21,47.21,0,0,0,3.42-4.92s-13.05-13.91-14.55-14.12-5.77.44-6.83,0-.84-1.06-3,0-3-.64-4.26-1.7-2.57-1.3-3.22.84-1.06,3.21-2.13,2.13c-.53-.53-3.18-.47-5.73-.3,0,0,0,0,0,0,.42,3-2.56,6.36-2.56,8.05s-1.67,3.4-3,3.4-2.54,3.4-4.24,5.09-.43,5.52-2.12,6.8-4.24,1.69-3,3-2.12,3.83-2.12,6.36-.43,7.22-.84,7.63-5.51-.84-5.51,1.27-2.12,2.12-1.27,3.83S345,217.26,345.88,219.38Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("ET") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("ET") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["KE"]);
    },
    id: "Kenya"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M393.92,251.63l3.16-4.91,3.27-4.8a19.63,19.63,0,0,0-3.41,1,2.71,2.71,0,0,1-3.34-1.37c-.45-1.08-3.51-.15-5.94,1.21S384,247,383.1,246.38s-6.38-1.37-7.92-1.37-6.38-3.19-7.9-4.57-5.92-.76-7-1.37-3.18-1.06-4-2-2.58-.76-4.11-.47-5.18,2.43-5.48,3.66a2.28,2.28,0,0,1-.87,1.12l3.12,2.84.71,4.92,2.81,2.44a52.1,52.1,0,0,1-.35,5.62c-.36,2.8-2.81,6.32-4.56,8.09a15.24,15.24,0,0,0-2,4.25c2.68.68,4.68,1.7,4.54,2.52-.31,1.67-4.86.91-4.86,4.4,0,.25,0,.47,0,.7L371.11,291l-.35,4.21s5.82,4.27,11.51,8.19A144,144,0,0,1,389,288.42c1.52-2.34,3-1.94,4.35-3.55s1.72.82,3.75-2.44a9.53,9.53,0,0,1,.59-.84l-3.4-5.4Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("KE") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("KE") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["UG"]);
    },
    id: "Uganda"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M349.71,249.18l-.71-4.92-3.12-2.84c-.92.78-2.22,1.49-2.32,2.23-.15,1.06-3,.91-4.25.3s-4.4.75-5,1.67S331.55,244,330,244.1a32.35,32.35,0,0,0-5.16,1.52s-.61,4.26-.61,5.94,2.28,2,2.28,3.35-1.83,2.58-2,3.51-1.36,1.52-2.88,2-1.37,2.89-2.58,3.79-.91,3.21-1.68,4.87a15.38,15.38,0,0,0-1.22,5.94c0,1.59-.2,3.83-1.13,5a4.8,4.8,0,0,0,3.43-.6,64.14,64.14,0,0,1,7-2.1l5.72-.48c1.27-3.58,3.15-6.84,5.2-7.44a19.21,19.21,0,0,1,9.15.23,16,16,0,0,1,2-4.25c1.75-1.77,4.21-5.27,4.56-8.09a52,52,0,0,0,.35-5.62Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("UG") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("UG") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["MG"]);
    },
    id: "Madagascar"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M451,354.68c-.91-3.33-1.63,1.23-2.43,2s-1.23,3.26-1,4.88-2.43,3.26-4,3-4.27.82-3.45,3-1.21,1.84-.21,3.65-2.22,4.07-5.07,4.28-6.49,5.27-9.52,4.85-6.09,2-8.72,1.63-.82,5.48-2.85,9.14-1,7.91.82,12.36,3.25,8.12-1.63,14A15.65,15.65,0,0,0,410.25,434c1.83,4.06,1.83,10.14,4.47,13s9.94,5.28,12.17,3.05,4.58.3,7.09-2.64,6.49-18.46,9.94-28.81,7.92-24,7.5-26.78,2.43-4.66,1.21-7.71.41-6.69,1.83-4.26,3.44,2.44,4.05-.82-2.43-8.31-2.64-13S451.62,356.91,451,354.68Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("MG") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("MG") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["CD"]);
    },
    id: "Democratic republic of the Congo"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M315.89,319.12c-3.34-1.84-4.73-24.8-3-25.42.2-.07.42.18.63.65l-.33-5.2a2.86,2.86,0,0,1-.45-.14,2.07,2.07,0,0,1-1.37-2,1.8,1.8,0,0,1,1.52-2s-.3-3.81,1.37-4.41a1.86,1.86,0,0,0,.84-.64c.93-1.16,1.13-3.39,1.13-5a15.49,15.49,0,0,1,1.22-5.94c.76-1.66.46-3.95,1.67-4.86s1.06-3.35,2.58-3.8,2.74-1.07,2.89-2,2-2.14,2-3.51-2.28-1.67-2.28-3.35.61-5.94.61-5.94l.09,0c-3.27-3-7.06-6.11-7.92-6.68-1.26-.84-3.39.84-3.39.84s-2.12-2.12-3.81-.42-4.24,0-4.24,0a7.88,7.88,0,0,1-3-3.41,3.57,3.57,0,0,0-1.77-1.8l.1.29-5.07.84s-6.34-3.38-7.61-.84-2.53.84-5.49.84a16.1,16.1,0,0,0-7.2,2.13c-1.69.84-4.23-.85-5.48,0s-2.12,4.66-2.12,4.66l-13.11-2.54s-2.53-3.82-5.5-3.82-7.18,5.5-7.18,5.5v4.61a11.23,11.23,0,0,1-1,7.1c-1.27,2.12-2.54,3-2.54,7.21s-5.09,11-5.09,14.43-5.94,5.52-5.94,7.64-.42,6.78-.42,11.45-2.55.85-2.55,5.09-2.12,1.7-4.24,3.83-3,2.55-3,.43-3-2.56-5.51-.43-3.38,0-4.65-.42c-.71-.25-3.6,1.47-6.42,3.4a34.22,34.22,0,0,1,2.43,7.57c0,.21.12.46.17.69a12,12,0,0,1,3.86-2.11c2.14-.31,22.21,0,22.21,0s1.83,3,1.22,5.78,1.22,1.52,2.73,5.18,2.73,5.16,5.77,4.25,6.7-1.53,7.91-1.22.91-5.18,2.73-6.09,5.49,0,5.49,0,.29,1.52,3.34,1.52,4.55-1.21,4.55.91.31,4.57,1.22,5.48-2.43,8.53-.91,9.74,3.66,4,3.34,5.49-1.22,5.18,0,5.48,1.53-1.83,3.65-1.83,3.95.3,6.08-.6a2.14,2.14,0,0,1,1.86.06,5.05,5.05,0,0,1,1.8,1.75s.61,2.13,1.82,1.53,4.56-1.53,4.25-.31.91,4,2.13,3.34,4.26,1.83,5.79,1.83,3,0,3-.91,1.82-2.44,2.44-1.23,2.12,4,3.65,4,5.16,0,5.16,1.22,1.22,4.56,2.73,5.78,4.86,0,4.86,0a3.79,3.79,0,0,0,1.23-3c0-2.14,0-4.87-.91-4.87s-2.44,2.13-4.56,1.52-3.64-4.87-4.56-5.48,1.52-4.55,1.52-6.39,1.53-7,.31-7.61-.61-2.44.91-3.65-.61-4.56,1.82-4.56,6.93.24,8.26-1.24a1.25,1.25,0,0,0,.26-.3,8.92,8.92,0,0,0,.44-1.05C319.34,323.57,317.78,320.14,315.89,319.12Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("CD") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("CD") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["BI"]);
    },
    id: "Burundi"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M313.49,294.35a50.32,50.32,0,0,1,1.71,7.13,25,25,0,0,1,2.93-1.73c1.75-.71,5.61-8.09,5.61-8.09L322,290.61a12,12,0,0,0-.28-3.61,20.66,20.66,0,0,1-3.23.09s.35,2.81-3.5,2.1a17.1,17.1,0,0,0-2.27-.2,2.24,2.24,0,0,0,.45.13Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("BI") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("BI") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["MZ"]);
    },
    id: "Mozambique"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M392.12,373.75c-.71-1.82-2.13-10.05-1.73-13.39s-.61-12.17-.61-16.44c0-.09,0-.17,0-.25-3.35,1.52-7,3.26-7.27,3.9-.61,1.22-3.24-.2-4.87,1.22s-2.64.21-4-.2-2,1.42-2.24,2.63-3,.6-4,.41-4.26.81-5.88.81-.41-1.41-2.23-2-3,.81-4.05.81c-.61,0-2.52-.22-3.89-.4a7.06,7.06,0,0,1-.37,2.39c-1.32,3.43,2.73,11.22,2.94,14.51a37.51,37.51,0,0,1,4.15,4c1.82,2.24,0,2,.21,6.91s-2,2.84-3.85,4.47-.21,5.27-.61,6.29-5.88-7.1-6.28-8.32,2-6.1,1.41-8.93-4.26-1-5.47-.82-4.06-3.24-4.67-3.24S319.67,375,319.67,375l1.42,5.08h-.41l1,2.23s6.07.31,8.81,2.13,7,2.14,7.9,2.74,0,7.3.3,10.66-3.64,4.25-1.82,6.07.91,4.87,2.12,5.17-2.12,4.26-3.65,5.17,0,4.27-1.83,6.69c-1.16,1.57-4.57,4.63-7,6.93a.77.77,0,0,1,.27.21c.62,1.08,2.43,11.73,4.26,12.78s.76,11.57.61,12.49.75,7.9.75,7.9a35.47,35.47,0,0,1,5.11-.38c.16-1.39.27-2.6.32-3.42.21-3.24-2-.61-2.73-2.64s5-5.78,10.74-7.91,8-3.35,8.61-5.38-.09-7.7.72-9.94-.5-3.54-1.21-8.62-2.55-5.88-3.35-8.73-.61-5.07,1.12-5.17,1.71-.91,3.15-3.65,3-1.62,5.77-3.66,2.84-4.56,7.19-7.91,9.12-3.25,13.37-5.78S392.83,375.59,392.12,373.75Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("MZ") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("MZ") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["TZ"]);
    },
    id: "Tanzania"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M384.92,337.44c-.21-4.17-2.64-4.17-2.54-7s.3-5.37-.71-5.68-.41-2.74,1.21-5.17-2.94-2.74-3.64-5.79c-.3-1.29,1.15-5.67,3-10.42-5.69-3.92-11.51-8.19-11.51-8.19l.35-4.21-25.9-13.76c-.17,3.16-1.46,5.6-3.32,6.46s2.73,3.79.46,4.27-7.44-2.14-11.1-.63c-2.44,1-1.95-5.11,0-10.49l-5.72.47s-1.56.38-3.23.85l1.12,3s1.41,2.82,1.06,4.57c-.16.81-1.43,1.16-2.74,1.31a11.63,11.63,0,0,1,.28,3.62l1.75,1s-3.86,7.39-5.62,8.09a27.49,27.49,0,0,0-2.92,1.73c1,5.19,2.29,11.35,4.19,13.08,3.51,3.2,2.89,6.86,3.66,9s3.79,4.56,1.67,5.48c-1.38.59-2.6-.89-3.82-2.88a10.61,10.61,0,0,1-.44,1.05,1.74,1.74,0,0,1-.26.3c1.87,1.37,4,2.81,4.95,2.81,1.76,0,4.56,2.11,6.32,2.47s8,2.85,8.78,3.85c.13.19.28.43.44.69a32.08,32.08,0,0,1,4.62,0,1.46,1.46,0,0,1,1-.4c2.31,0,5.05,8.79,4.93,13.92,1.38.18,3.28.4,3.88.4,1,0,2.24-1.42,4.06-.81s.6,2,2.22,2,4.87-1,5.88-.82,3.86.82,4.05-.4.82-3,2.24-2.63,2.42,1.62,4,.2,4.25,0,4.87-1.23c.32-.63,3.91-2.37,7.27-3.9C389.58,339.77,385.13,341.51,384.92,337.44Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("TZ") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("TZ") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return Click(["MW"]);
    },
    id: "Malawi"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M358,371.73a37.51,37.51,0,0,0-4.15-4,1.69,1.69,0,0,1-.21,1.15c-1.77,2.6-6.83-5.46-7.44-10.49s2.89-7.46.76-12.17c-1.78-4-2.9-7.75-1.62-8.9a33.71,33.71,0,0,0-4.62,0c1.11,1.83,2.71,5.47,2.71,6.7,0,1.4-1.75-.34-2.45,1.4s-1.05,9.84.34,11.23-2.8.36-2.8,1.77-.34,6.32-1.05,6.68c-.39.18.42,1.39,1.21,3h.06c.61,0,3.45,3.45,4.67,3.24s4.86-2,5.47.82-1.83,7.7-1.42,8.93,5.88,9.33,6.29,8.33-1.21-4.68.61-6.3,4,.4,3.85-4.47S359.78,374,358,371.73Z",
    transform: "translate(-0.01 0)",
    strokeWidth: "1px",
    fill: selectedCountries.includes("MW") ? selectColor || "black" : fillColor || "white",
    stroke: selectedCountries.includes("MW") ? selectColor || "black" : fillColor || "white"
  })), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M312.05,476.22l-.47-.42a9.38,9.38,0,0,1-2-2.16,1.28,1.28,0,0,0-1.27-.63c-2,0-5.45,2.14-6.13,3.48-.78,1.59-4,6-4,6.06a.26.26,0,0,0-.05.17.22.22,0,0,0,.05.16l4,5.68a.36.36,0,0,0,.2.11l2.84.41h0a.3.3,0,0,0,.16-.05.33.33,0,0,0,.12-.14s.82-2,1.61-3.62a.94.94,0,0,1,.79-.49,3.23,3.23,0,0,1,.46,0,9.21,9.21,0,0,1,1,.07c.33,0,.66.07,1,.07h0a2.28,2.28,0,0,0,.48-.05l.09,0,.23-.08.08-.07h0a.8.8,0,0,0,.21-.26l0-.08a1.07,1.07,0,0,0,.07-.38,4.46,4.46,0,0,1,1.16-2.26,4.81,4.81,0,0,0,1.28-2.62C314.05,478.12,313.13,477.19,312.05,476.22Zm.28,5.1a4.84,4.84,0,0,0-1.27,2.6c0,.2-.07.26-.14.3a.79.79,0,0,1-.22.08h0a1.62,1.62,0,0,1-.33,0,7.23,7.23,0,0,1-.89-.07c-.36,0-.73-.07-1.08-.07a1.83,1.83,0,0,0-1.77.84l-.24.5c-.57,1.19-1.11,2.47-1.31,3l-2.49-.35-3.85-5.41c.6-.83,3.21-4.5,3.95-6,.56-1.11,3.48-2.93,5.28-3.15l.35,0a.78.78,0,0,1,.76.33,10.14,10.14,0,0,0,2.15,2.32c1.06.94,2.27,2,2.27,2.81A4.47,4.47,0,0,1,312.33,481.32Z",
    transform: "translate(-0.01 0)",
    fill: borderColor || "black"
  })), /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M464.05,187.4a2.31,2.31,0,0,0-1.71-.77,2.66,2.66,0,0,0-2.38,1.65c-1,2.29-9.67,3.9-15.15,4s-8.95.54-11.14,2.61a3.77,3.77,0,0,1-2.66.72c-.51,0-1,0-1.54-.05s-1.06-.06-1.57-.06a4,4,0,0,0-3.16,1,8.36,8.36,0,0,1-5.7,2.07,5.46,5.46,0,0,1-5.18-2.93,9,9,0,0,0-3.61-4h0a12.6,12.6,0,0,0-2.56-1.09,3.64,3.64,0,0,1-1.06-.44s0,0,0-.16c.21-.74,2.27-2.17,3.83-2.5a1.45,1.45,0,0,0,1.25-1.05c.29-1.11-.7-2.58-1.74-3.49l-.9-.83,0,0a80.19,80.19,0,0,1-7.25-8.14c-4-5-8.57-7.62-11.08-7.62-1.21,0-1.88-1.21-2.51-2.39-.52-.95-1-1.86-1.81-2-1.22-.16-4.71-5.79-4.83-9.77-.06-2.75-2.66-6.27-3.84-7.74l0-.06a15.87,15.87,0,0,0-4.37-4c-2.33-1.07-3.9-5.28-3.9-10.5a44.5,44.5,0,0,0-1.15-9.42c-.17-.83-.31-1.49-.37-2-.23-1.92-3-5.61-6.12-7.33a6.91,6.91,0,0,1-3.69-4.9s0,0,0,0a8.54,8.54,0,0,1,0-2.67,4.33,4.33,0,0,0-1.1-3.79,11.83,11.83,0,0,1-2-3.95A39.46,39.46,0,0,0,350.81,88c-1.58-2.52-3.07-4.92-3.17-6.18A6.7,6.7,0,0,0,346,78.48a5.74,5.74,0,0,1-1.59-3.59c.07-2-.68-2.83-2-4.37a38,38,0,0,1-2.7-3.42c-3.15-4.46-3.8-11.65-3.33-12.14.66.16,2.61,4.82,3.46,6.81.31.75.58,1.4.79,1.86.43.94,4.27,9.2,7.16,9.2,1.73,0,2.65-3.89,3.39-7a23.1,23.1,0,0,1,.69-2.56.26.26,0,0,0,.26.14.31.31,0,0,0,.26-.24l.25-1.8,1-2.76a.26.26,0,0,0,0-.21l-4.92-12.09a.31.31,0,0,0-.24-.17.26.26,0,0,0-.27.13,6.1,6.1,0,0,1-.72,1c-.22.23-1.08.07-2.11-.17a14.65,14.65,0,0,0-3.38-.51,6.52,6.52,0,0,0-1.69.21,7.56,7.56,0,0,1-2,.27c-2.11,0-4-.86-6.4-2.07a8.15,8.15,0,0,0-3.49-.58c-4,0-10.06,1.42-11.16,3a4.06,4.06,0,0,1-3.45,1.43,10.8,10.8,0,0,1-3.91-.82l-.91-.37a37.89,37.89,0,0,0-11.73-3.21c-7.43-.67-9.62-1.65-10.15-2.36a.26.26,0,0,0-.13-.1l-.08-.1c-.47-1.34-2.41-1.62-6.63-2.21l-2.82-.41a6.43,6.43,0,0,1-4.63-2.61c-1.08-1.24-2.2-2.55-5.83-2.76-6.54-.4-15.51,4.88-15.61,8.08a9.09,9.09,0,0,0,.84,3.42c.73,1.88,1.42,3.64.12,5.36A5.85,5.85,0,0,1,247.51,53a8,8,0,0,1-5.36-2.16c-3.74-3.41-9.08-4.64-12.85-4.64A7.52,7.52,0,0,1,223.64,44a3,3,0,0,1-.86-2.29c.37-2.68-1.52-3.62-4.68-4.28A16.67,16.67,0,0,1,215,36.3a16.83,16.83,0,0,0-6.87-1.67,15.27,15.27,0,0,0-2.56.22,10.93,10.93,0,0,1-1.8.15A10.78,10.78,0,0,1,198,33.33a.26.26,0,0,0-.1-.13c-1.64-1-2.51-2.23-2.51-2.68,0-1.2-1.28-3-2.43-3A1.18,1.18,0,0,0,192,28a1.49,1.49,0,0,1-1.19.42c-1.33,0-3.33-.92-3.68-2.62-.28-1.35.53-1.81,2.21-2.64a15.52,15.52,0,0,0,3.07-1.86,6.65,6.65,0,0,0,2.41-5.11,5.8,5.8,0,0,0-2.23-4.57c-.91-.73-1.37-1.38-1.4-2,0-.88.78-1.71,1.84-2.76l.81-.82c1.21-1.27,1.1-2.13.93-2.54a1.25,1.25,0,0,0-1.16-.73,1.67,1.67,0,0,0-1.09.44,2.34,2.34,0,0,1-1.49.68c-.88,0-1.18-.88-1.27-1.62C189.6.72,187.27,0,185.06,0a7.84,7.84,0,0,0-5.16,1.61,5.05,5.05,0,0,1-3.43,1h-.08l0,0a24,24,0,0,1-6.22-1.21l-.09,0a11.23,11.23,0,0,0-4,.28,25.68,25.68,0,0,1-3.07.4,13.81,13.81,0,0,0-3.45,1.08,15.05,15.05,0,0,1-4.63,1.32,1.74,1.74,0,0,1-1.25-.39c-.27-.25-.93-.6-3.49-.6-3.6,0-9.36.66-14.42,1.25-3.42.39-6.37.73-8,.79-3,.13-5.07,1.91-6.86,3.49-1.35,1.17-2.5,2.2-3.78,2.2-3.19,0-8.2,2.6-11,5.68a3.17,3.17,0,0,1-2.39,1.05.24.24,0,0,0-.22.12.29.29,0,0,0,0,.27,12.26,12.26,0,0,0,1.17,2.18c1.32,1.71,1.94,3.92,1.94,7a22.84,22.84,0,0,1-.15,2.45c-.19,2.09-.35,3.89.84,4.09s2.21,3.22,2.45,4.47a2.49,2.49,0,0,1-.38,1.93,1.09,1.09,0,0,1-.9.43c-.25,0-.83,0-1.57-.08-1.38-.08-3.28-.21-5-.21-2.69,0-3.8.29-3.8,1,0,1.12-1.82,2.18-3.75,2.18l-.83,0H93c-1,0-1.08.53-1.24,2.09a17.52,17.52,0,0,0,0,2c0,.84,0,1.57-.21,1.83a.46.46,0,0,1-.36.12,1.75,1.75,0,0,0-1.46.92A2.28,2.28,0,0,1,88,51.8c-.42,0-.9.07-1.39.08-1.87.07-4,.14-4,2a3.8,3.8,0,0,1-3.34,3.75,13.07,13.07,0,0,1-2.38.14h-.26c-1.7,0-3.62,0-3.62,1.48,0,.55-.31.72-1.36.72h-.46a4.88,4.88,0,0,0-2.5.37c-.45.26-10.8,6.2-11.09,7.34a65.73,65.73,0,0,0,.07,6.74L57.75,77s0,0,0,.06c.06,2.44.22,8.81,0,9.65a52.06,52.06,0,0,1-6.08.15c-6.73,0-16.64-.2-16.75-.2a.31.31,0,0,0-.19.08.32.32,0,0,0-.08.21v18.34c0,.61-2,1.59-3.41,2.32-2,1-3.74,1.87-3.74,2.83v10.45H.68a.27.27,0,0,0-.28.25c-.33,3.74,1.51,5.55,3,7,.33.33.64.63.92.95.87,1,.65,2.38.4,4-.32,2-.7,4.55,1.1,7.06,2.8,3.89-.2,9.92-2.24,13.18-.72,1.16-.91,3-1.09,4.93,0,.38-.07.77-.12,1.16a0,0,0,0,1,0,0h0a12.24,12.24,0,0,1-1.53,5.37c-2.4,3.61,1.06,8.66,2.58,10.09A1.24,1.24,0,0,1,3.73,176s0,0,0,0a9.22,9.22,0,0,1-.4,2,14.1,14.1,0,0,0-.48,2.14h0a4.07,4.07,0,0,0,.85,3.42c.25.28.46.54.67.8,0,0,0,0,0,0,.3.38.55.72.78,1A7.29,7.29,0,0,0,10,188.68c1.8.51,1.7,1.11,1.53,2a2.55,2.55,0,0,0,1.34,3.13,7.31,7.31,0,0,1,.65.46l.12.08h0a8.78,8.78,0,0,1,2.09,2.68,9.54,9.54,0,0,0,2.77,3.32c2.72,2,5.78,4.47,7.63,8.33l0,0a15.42,15.42,0,0,1,1,2.46c1.6,5.49,3.09,6.72,5.36,8.58l.21.18A61.47,61.47,0,0,0,38,223.51l.24.15s0,0,0,0c2.91,1.82,6.19,3.9,8.89,5.94,5.16,3.92,12.56,8.78,16.08,10.07a5.27,5.27,0,0,0,1.72.28h.22c2.27,0,5.49-.88,9.18-1.87,3.25-.87,6.94-1.87,10.89-2.55a29.34,29.34,0,0,1,13.19.78.25.25,0,0,0,.12,0,38.08,38.08,0,0,1,4,1.44,7.7,7.7,0,0,0,1,.39,1.43,1.43,0,0,0,.23,0c1.83,0,10.47-4,13.23-5.39a42.65,42.65,0,0,1,4.27-1.81,35.31,35.31,0,0,0,3.66-1.56s0,0,0,0a9.33,9.33,0,0,0,1.41-.92,8.07,8.07,0,0,1,3.65-1.44h0l0,0a26.22,26.22,0,0,1,4.52-.41,4.66,4.66,0,0,0,2.68-1.18,3,3,0,0,1,1.3-.69.63.63,0,0,1,.46.24.56.56,0,0,0,0,.08l.05,0c.93,1.26,4.13,1.74,7.21,2.2,1.17.17,2.28.35,3.19.54,3.13.71,6.36,5.15,6.27,6.72-.12,1.87,2.2,5.3,3.79,6.15a1.9,1.9,0,0,0,.94.2,11,11,0,0,0,3.52-1,9.72,9.72,0,0,1,2.72-.77h1.08c4.8,0,7.41-.34,8.23-1.09a.48.48,0,0,1,.59-.11.24.24,0,0,0,.11.15,9.34,9.34,0,0,1,1.95,2.48l.83,1.26a3,3,0,0,0,2.63,1.22,11.31,11.31,0,0,0,1.18-.08,3.51,3.51,0,0,1,1.56.06c1,.53,2.16,5.18,1.79,6.36-.08.27-.23.64-.4,1.07-.65,1.64-1.54,3.87-.88,5.23h0a1.07,1.07,0,0,0,.09.19,2.65,2.65,0,0,1-1.47,4c-1.36.46-1.88,1.39-1.79,2.09a1.5,1.5,0,0,0,1.55,1.21c.16,0,.37.05.44.17s.11.37-.4,1.17h0a8.89,8.89,0,0,1-1.13,1.4.8.8,0,0,0-.25.61c0,.55.65,1.06,1.38,1.64a4.57,4.57,0,0,1,1.44,1.5.15.15,0,0,1,0,.16c-.1.23-.76.41-1.32.59-1.12.33-2.52.75-2.45,2s-.79,2.75-2.61,4.12a.76.76,0,0,0-.31.55c-.11.84.91,2.09,2,3.42a8.4,8.4,0,0,1,1.57,2.36c.1,1.47,1.23,2.77,5,6.49a12.31,12.31,0,0,1,2.7,3.63,13.18,13.18,0,0,0,4.1,4.83l0,0,.71.56a19.76,19.76,0,0,1,5.74,7.05.34.34,0,0,0,0,.1,34.58,34.58,0,0,1,2.41,7.5c.05.22.12.45.19.72a.26.26,0,0,0,.09.14c1.17,4.24,4.39,10.94,5.62,13.48l.35.73c.44.91.14,1.78-.29,3a11.77,11.77,0,0,0-.84,4.1c0,1.86,1,4.42,2,7.14a31,31,0,0,1,2.2,7.29c.36,3.82-1.89,6.41-4.07,8.9l-.72.83c-2.6,3-5,9.52-5,13.37,0,2.24-1.23,4.5-2.22,6.31-.78,1.39-1.38,2.5-1.33,3.34a60.18,60.18,0,0,1-.91,9.15,1.32,1.32,0,0,0,0,.29h0v0h0c-.24,2.33,1.86,6.37,3.9,9.15A53,53,0,0,1,208.58,415a42.3,42.3,0,0,0,3.93,8.13,33.33,33.33,0,0,1,3.06,6.18,17.67,17.67,0,0,1,.13,6.31c-.2,2.08-.38,4,.19,5.29,1.1,2.39,1.8,6.54,2.41,10.67.1.72.2,1.57.3,2.51.5,4.46,1.26,11.21,4.44,14.3a31.92,31.92,0,0,1,4.22,5.44h0a46.89,46.89,0,0,1,5.14,10.88,43,43,0,0,0,4.14,8.73A30.37,30.37,0,0,1,239,498.3l.21.66c.68,2.11,1.32,4.1.79,4.94a1,1,0,0,1-.78.44,2,2,0,0,0-1.66,1.05c-.46,1,.06,2.64,1.57,5a7.06,7.06,0,0,1,1.18,4c0,.93.07,1.75,1.23,2a2,2,0,0,1,1.42.9,1.74,1.74,0,0,0,1.46.83c1.35.09,2.42,1.5,3.36,2.74l.08.1a2.88,2.88,0,0,0,2.29,1.06,3.08,3.08,0,0,0,2.61-1.4c.89-1.29,3.69-2,7.87-2a5,5,0,0,0,3.63-1.14,7.78,7.78,0,0,1,2.75-1.4,18.58,18.58,0,0,1,10.37-.09,7.7,7.7,0,0,0,6.84-.84,2.9,2.9,0,0,1,2,0,6,6,0,0,0,1.2.18c.78,0,1.22-.44,1.3-1.33.13-1.43,1.35-1.7,3.4-1.7h2c3,0,9.58-4.57,14.29-9,5.17-4.87,13.61-15.43,16.36-20.06,2.61-4.37,6.76-8.13,9.23-10.38l.55-.5c1.92-1.76,2.9-7.94,3.32-11.46v0c.14-1.31.26-2.54.32-3.41a2.32,2.32,0,0,0-.36-1.74,1.27,1.27,0,0,0-1-.33h-.43a.87.87,0,0,1-1-.68c-.59-1.65,4.55-5.31,10.57-7.54,5.53-2,8.12-3.32,8.78-5.56a20,20,0,0,0,.29-4.57,19.4,19.4,0,0,1,.42-5.36c.52-1.41.23-2.51-.22-4.17a35.11,35.11,0,0,1-1-4.59,14.75,14.75,0,0,0-2.14-6.12,11.35,11.35,0,0,1-1.22-2.65c-.56-2-.6-3.56-.06-4.31a1.14,1.14,0,0,1,.93-.5c1.54-.09,1.88-.77,2.68-2.42.2-.39.42-.84.7-1.37a3.71,3.71,0,0,1,2.7-2.11,9.38,9.38,0,0,0,3-1.46,12,12,0,0,0,2.77-3.11,18.68,18.68,0,0,1,4.43-4.8,22.24,22.24,0,0,1,7.47-3.42,25.54,25.54,0,0,0,5.87-2.35c4.29-2.56,11.78-12.55,11-14.65-.64-1.67-2.11-9.93-1.7-13.25a71.28,71.28,0,0,0-.28-9.77c-.18-2.57-.34-5-.34-6.7,0-.05,0-.11,0-.16v-.05a.35.35,0,0,0,0-.11c-.11-2.11-1.41-2.73-2.55-3.29s-2.21-1.07-2.31-2.95a7,7,0,0,0-1.55-4.31,3.78,3.78,0,0,1-1-2.67l0-.75c.11-2.72.19-4.87-.94-5.21a.38.38,0,0,1-.23-.26c-.23-.65.24-2.45,1.6-4.48,1-1.55-.15-2.42-1.3-3.26a5,5,0,0,1-2.31-2.74c-.14-.62.06-2.75,2.95-10.12,0,0,.08,0,.09-.08a146.11,146.11,0,0,1,6.69-14.88,5.41,5.41,0,0,1,2.42-2.1,5.43,5.43,0,0,0,1.91-1.43c.53-.66.82-.54,1.12-.52H395c.69,0,1.36-.33,2.37-2,.16-.25.36-.54.58-.82a.25.25,0,0,0,0-.15c1.82-2.39,5.54-6.17,9.48-10.17,1.91-1.94,3.88-3.95,5.64-5.79,5.67-6,8.62-7.45,11.74-9l.14-.07c3.31-1.65,11.63-9.82,17.14-16.82,3.48-4.44,7.43-9.47,7.95-12.81s3.9-7.63,6.13-10.53c2.38-3.08,6.55-11.19,6.45-13.77a20.77,20.77,0,0,1,.95-5,40,40,0,0,0,1.37-6.94A4.24,4.24,0,0,0,464.05,187.4Zm-57.43,8.3-.15.24h0c-.71,1.22-.66,1.73-.54,2a27.22,27.22,0,0,0,3.83,6,2.77,2.77,0,0,0,.58.44,3.24,3.24,0,0,1,.84.68c.32.32.65.7,1,1.07a19.06,19.06,0,0,0,1.43,1.51,3.19,3.19,0,0,0,1.37.86c1.28.29,8.78,2.82,13.79,4.86,5.32,2.16,8.49,2.16,9.54,2.16a5,5,0,0,1,2.48.49.23.23,0,0,1,.07.1c0,.07,0,.2-.31.41-1.38,1.08-16.15,16-18.28,18.29-1.47,1.59-2.48,1.47-4.71,1.36-.76,0-1.63-.08-2.69-.08-2.93,0-5.41,2.09-7.06,3.46-.77.64-1.51,1.26-1.87,1.26a28.76,28.76,0,0,0-5.65.86,23.23,23.23,0,0,0-3.48,1,1.58,1.58,0,0,1-.72.16,2.61,2.61,0,0,1-2.24-1.39c-.12-.29-.45-.64-1.3-.64a12,12,0,0,0-5,1.72,11.31,11.31,0,0,0-2.82,2.53c-.53.6-1,1.18-1.33,1.18a.21.21,0,0,1-.1,0c-1-.68-6.58-1.42-8.07-1.42s-6.15-3.08-7.71-4.49c-1-.89-3-1-4.73-1.09a7.31,7.31,0,0,1-2.32-.31,11.57,11.57,0,0,0-1.51-.65l-.55-.21c.13-.95.27-1.79.41-2.52.28-1.57.45-2.57.17-3.12a.71.71,0,0,0-.13-.22.85.85,0,0,0-.69-.28,7.55,7.55,0,0,1-5.49-3.69,7,7,0,0,1-.56-1.17,8.52,8.52,0,0,0-.7-1.42,18.71,18.71,0,0,0-3-3.48,15.33,15.33,0,0,1-1.92-2.13,3.11,3.11,0,0,1-.33-.62,2.09,2.09,0,0,0-.25-.44c-.65-1-2.06-1.35-3.42-1.71-1.2-.31-2.34-.62-2.7-1.27s-.11-1,.35-1.5a3.08,3.08,0,0,0,1-2.19c0-.42.24-1,2.31-1,.49,0,1,0,1.42.06s.69,0,.95,0c.41,0,.62,0,.74-.18.59-.59.94-5.73.94-7.84A6.81,6.81,0,0,1,348.8,200c.69-1.12,1.35-2.18.89-3a1.19,1.19,0,0,0-.25-.35,1.33,1.33,0,0,1-.17-.23.29.29,0,0,1,0-.19c.06-.32.76-.69,1.45-1a12.69,12.69,0,0,0,1.76-1c.94-.73,1.06-2.12,1.16-3.47s.21-2.58,1-3.35a15.8,15.8,0,0,0,1.94-2.64c.73-1.17,1.5-2.37,2.1-2.37,1.41,0,3.23-1.79,3.23-3.68a7.6,7.6,0,0,1,1-2.58c.78-1.56,1.73-3.48,1.58-5.28,1-.07,1.94-.11,2.68-.11,2,0,2.41.23,2.51.33a1.37,1.37,0,0,0,.94.51c.79,0,1.17-1.09,1.67-2.76s1.41-1.83,2.76-.71a8.28,8.28,0,0,1,.75.7,3.6,3.6,0,0,0,2.44,1.4,3.09,3.09,0,0,0,1.4-.37,4.2,4.2,0,0,1,1.56-.55.94.94,0,0,1,.55.22,3.8,3.8,0,0,0,.65.34,4.26,4.26,0,0,0,1.51.18c.71,0,1.56-.06,2.39-.11a21.41,21.41,0,0,1,3-.06c1,.14,9.18,8.5,14.21,13.86a45.19,45.19,0,0,1-3.28,4.69c-1.59,1.81-.73,5.15-.26,6.09h0v0a1.63,1.63,0,0,0,1.58.7,5.14,5.14,0,0,0,2.69-.81,1.28,1.28,0,0,1,.74-.26c.53,0,1.14.45,1.94,1.18l0,.05C406.75,195.48,406.69,195.59,406.62,195.7ZM345,276.53a4.63,4.63,0,0,1,0,.51.2.2,0,0,0,0,.11c-.16,3-1.37,5.4-3.15,6.22a1,1,0,0,0-.62.67c-.16.63.36,1.35.87,2,.33.45.78,1.07.69,1.32,0,.09-.19.16-.41.2a11.2,11.2,0,0,1-3.6-.44,23.45,23.45,0,0,0-4.72-.66,7.26,7.26,0,0,0-2.83.5.61.61,0,0,1-.87-.17c-.86-1.2-.32-5.64,1.18-9.9a.24.24,0,0,0,.06-.08c1.42-4.05,3.3-6.77,5-7.27a12.78,12.78,0,0,1,3.6-.45,23.65,23.65,0,0,1,5.26.65.22.22,0,0,0,.13.1c3.08.78,4.39,1.77,4.32,2.18s-.82.77-1.66,1.05C346.81,273.59,345,274.23,345,276.53Zm7.19,86.16a25.73,25.73,0,0,1,1.36,5,.11.11,0,0,0,0,.08,1.6,1.6,0,0,1-.16,1,.77.77,0,0,1-.64.38c-2,0-5.78-6.53-6.29-10.75a12.2,12.2,0,0,1,.72-5.38c.65-2.12,1.26-4.12,0-6.87-2-4.56-2.65-7.69-1.67-8.57a.25.25,0,0,0,0-.07,1.19,1.19,0,0,1,.81-.31,1.34,1.34,0,0,1,.89.5c1.89,1.93,3.85,8.76,3.76,13.08,0,0,0,0,0,.05a7,7,0,0,1-.35,2.3C349.72,355.36,351,359.25,352.15,362.69Zm-21.22,99.68a1.52,1.52,0,0,1-.06.32c-.22.7-.92,1-2.37,1l-1.07,0c-1.88-.13-4-5.24-4-6.08a.55.55,0,0,1,0-.16c.35-1,2.9-4.47,4.34-4.47.9,0,2.27.95,3.38,1.72l.26.19c.13,1.68.44,4.23.61,5.59A3.16,3.16,0,0,0,331,462,2.33,2.33,0,0,0,330.93,462.37Zm-58.54-13.84c-1.91,0-2.86,2.34-3.11,4.54-.13,1.18-2.52,3.42-4.28,5.06-.8.75-1.51,1.39-1.93,1.89a2.8,2.8,0,0,1-2.23.75,18.2,18.2,0,0,1-2.39-.23,15,15,0,0,0-2-.21,1.14,1.14,0,0,1-.9-.28c-.28-.32-.2-1-.12-1.58,0-.31.08-.62.08-.91s.11-.46.39-.55a1.43,1.43,0,0,0,1-1c.38-1.13-.83-4.42-2.19-7.8l-.05-.11a1.84,1.84,0,0,0-.16-.31h0a2.09,2.09,0,0,0-.23-.29l0,0-.28-.27-.06,0a2.85,2.85,0,0,0-.33-.25l-.09-.06-.36-.22-.17-.09-.35-.18-.27-.12-.32-.14-.4-.16-.18-.07v-20c.12-.4,1.46-.49,2.55-.55,1.71-.11,3.77-.25,4.23-1.47a1.48,1.48,0,0,0,.13-.61V400a55.89,55.89,0,0,0,6.26-.8,17.66,17.66,0,0,0,1.92-.75c1.63-.69,3.86-1.62,5-1.62a1,1,0,0,1,.51.1,8.85,8.85,0,0,1,1.32,1.3c.74.83,1.43,1.61,2.06,1.61a.79.79,0,0,0,.64-.33c.24-.3,2.42-2.94,4.65-2.94a21.82,21.82,0,0,0,4-.71l.49-.12c1,1.73,3.11,3.85,4,3.85a7.71,7.71,0,0,1,.85,2.5c.58,2.26,1.29,5.06,2.84,5.73,3.22,1.38,6.68,3.53,6.68,4.53a4.19,4.19,0,0,0,1.22,2.24,5.24,5.24,0,0,1,1.53,2.92,5.27,5.27,0,0,0,1.65,3.36,5.12,5.12,0,0,0,3.35,1.72h.09c3-.12,4,.76,4.37,1.58l0,.09s0,.05,0,.08a3,3,0,0,1,.11.82c-.81,1.21-1.79,2.62-2.28,3.21a3.1,3.1,0,0,1-1.77.72c-1.07.23-2.28.48-2.54,1.84-.38,1.87-3.65,3.84-5.2,3.84-1.82,0-3.13,2.95-3.13,4.94,0,1.56-3,4-5.59,4-2.11,0-2.29,1.4-2.49,3a14.64,14.64,0,0,1-.42,2.26c-.75,2.59-1.7,2.82-6.22,2.83-4,0-4.45-.32-7.11-2.06l-.83-.54a3.78,3.78,0,0,0-2-.69h0Zm9.31-99a1.16,1.16,0,0,0,.56-.14,9.5,9.5,0,0,1,3.29-.87c.33,0,.49.06.53.11a.14.14,0,0,1,0,.14,4.31,4.31,0,0,0,.86,3.07,1.54,1.54,0,0,0,1.27.71,1,1,0,0,0,.43-.11.77.77,0,0,1,.23-.06,7.19,7.19,0,0,1,2.67.94,7.58,7.58,0,0,0,2.73,1h0c1.64,0,3.32,0,3.32-1.2a1.91,1.91,0,0,1,1.41-1.37.47.47,0,0,1,.47.27c.76,1.55,2.27,4.13,3.89,4.13,4,0,4.89.51,4.89.93,0,1.25,1.24,4.71,2.85,6a3.32,3.32,0,0,0,2.12.6h0a9.09,9.09,0,0,0,2.82-.5l.18-.06s0,0,.07,0a2.54,2.54,0,0,0,.23-.22,4.29,4.29,0,0,0,1.13-3.08c0-3-.08-5.15-1.2-5.15a2.92,2.92,0,0,0-1.35.63,4.54,4.54,0,0,1-2.43,1,2.43,2.43,0,0,1-.7-.11c-1.25-.34-2.37-2.24-3.17-3.61a6.36,6.36,0,0,0-1.32-1.82c-.32-.22.33-1.88.71-2.87a11,11,0,0,0,.93-3.28,19.21,19.21,0,0,1,.33-2.54c.41-2.37.83-4.82-.18-5.34a.86.86,0,0,1-.49-.69,3,3,0,0,1,1.11-2.17l.32-.29a1.28,1.28,0,0,0,.26-.26,3.38,3.38,0,0,0,.46-2.41,2.42,2.42,0,0,1,.21-1.61,1,1,0,0,1,.72-.22H314c2.24,0,4.61-.12,5.88-.93L320,328l.21-.14c2.51,1.83,4.12,2.72,4.93,2.72a9.55,9.55,0,0,1,3.46,1.29,12.26,12.26,0,0,0,2.8,1.18c1.77.34,7.92,2.84,8.61,3.74a6.32,6.32,0,0,1,.39.6.36.36,0,0,0,0,.11c1.15,1.93,2.64,5.42,2.67,6.53,0,.19-.05.25-.06.26a.38.38,0,0,1-.19,0l-.3,0-.42,0a1.45,1.45,0,0,0-1.46,1,2.69,2.69,0,0,0-.14.45c-.62,2.37-.9,9.69.54,11.14a2.09,2.09,0,0,1,.18.19,3.48,3.48,0,0,1-.93.16c-.84.08-1.86.19-2.07.87a.88.88,0,0,0-.06.33,33.87,33.87,0,0,1-.55,5.54,1.87,1.87,0,0,1-.33.84.48.48,0,0,0-.23.27v0h0c-.11.36.14.86.72,2l.42.82c-2.76.85-18,6.53-18.66,6.79a.29.29,0,0,0-.17.34h0v0l1.32,4.7h0l-3,.11-2.93.1c-4.06,1.06-4.06,2.48-4.06,3.73,0,1-3.45,3.78-6.08,4.6-1.63.49-3.25,2.79-4.69,4.82a11.09,11.09,0,0,1-2.45,2.9,2.28,2.28,0,0,1-1,.16,24.63,24.63,0,0,1-5.2-1,24.12,24.12,0,0,0-2.36-.57h-.06l-.31,0a15.32,15.32,0,0,0-3,.52,3.12,3.12,0,0,1-.43-1.28c0-.84-1.45-1-2.72-1a63,63,0,0,0-10,1.21l-7.64-10.44.69-22.44,9.83.34h.07a.28.28,0,0,0,.21-.08l1.75-1.76a.3.3,0,0,0,.08-.18l1.4-13.15a5.21,5.21,0,0,1,1.24,1.32c.06.19.57,1.84,1.67,1.84h0Zm39.95,33.07c.06,0,6,.33,8.68,2.08a18.34,18.34,0,0,0,5.89,2.15,8.46,8.46,0,0,1,2,.59c.4.31.27,3.3.19,5.28a44.61,44.61,0,0,0,0,5.16,4.39,4.39,0,0,1-1.37,3.34c-.73.88-1.49,1.79-.37,2.91a5.41,5.41,0,0,1,1.23,3.21,3.32,3.32,0,0,0,.59,1.81,1.06,1.06,0,0,0,.47.28c.1.76-2.36,3.77-3.78,4.61-.85.51-.88,1.6-.92,2.86a6.39,6.39,0,0,1-1,3.9,54.27,54.27,0,0,1-4.83,4.9l-1.95,1.87a14.14,14.14,0,0,0-3.46-.5c-1.57-.1-3.71-.26-4-.77-.46-.74-2.07-.74-3.79-.74-.83,0-2.48,0-2.66-.27h0a.43.43,0,0,0,0-.11,3.25,3.25,0,0,0-.24-1.17c0-.06,0-.13-.07-.19a1.63,1.63,0,0,0-.11-.17c-.63-1.07-2-1.61-4.22-1.61l-.57,0a4.52,4.52,0,0,1-2.93-1.55,4.75,4.75,0,0,1-1.5-3,5.57,5.57,0,0,0-1.64-3.28c-.56-.7-1.1-1.36-1.1-1.88,0-2-7-5-7-5.05-1.29-.57-2-3.34-2.51-5.35-.41-1.63-.68-2.67-1.18-2.88a.64.64,0,0,0-.23-.05c-.55-.06-2.35-1.72-3.42-3.44.64-.15,1.31-.3,1.88-.38l.22,0,.39,0a3.72,3.72,0,0,1,.48,0,22.47,22.47,0,0,1,2.29.55,24,24,0,0,0,5.37,1.07h0c.15,0,.27,0,.4,0l.27,0a2.13,2.13,0,0,0,.57-.17c.74-.36,1.63-1.61,2.65-3.06,1.39-2,3-4.17,4.4-4.62,2.56-.81,6.49-3.7,6.49-5.14,0-1.14,0-2.23,3.58-3.18l1.44,0,4.22-.14.93,2a.29.29,0,0,0,.1.12A.32.32,0,0,0,321.65,382.57Zm25.14-12.29a9.46,9.46,0,0,0-2.59.52c-.37.1-.69.19-1,.24-.65,0-1.93-1.16-2.85-2a6.1,6.1,0,0,0-1.52-1.18c-.19-.38-.38-.73-.54-1.05a7,7,0,0,1-.68-1.49c1-.72,1.15-6.84,1.15-6.9a.39.39,0,0,1,.25-.33,5.24,5.24,0,0,1,1.32-.25,2.91,2.91,0,0,0,1.27-.3.58.58,0,0,0,.23-.26c.11-.33-.14-.63-.35-.83-1.25-1.26-1-9.2-.29-10.94a1.09,1.09,0,0,1,.39-.53,1,1,0,0,1,.5-.12c.13,0,.25,0,.37,0l.35,0a.85.85,0,0,0,.5-.15s.08,0,.12-.06a.91.91,0,0,0,.24-.7c0-1.2-1.39-4.44-2.5-6.42,1.52-.05,2.73-.06,3.56,0-.74,1.39-.11,4.33,1.89,8.78,1.15,2.56.6,4.37,0,6.47a12.72,12.72,0,0,0-.75,5.62c.52,4.27,4.42,11.25,6.86,11.25a1.3,1.3,0,0,0,1.09-.61,1.34,1.34,0,0,0,.26-.71,34.08,34.08,0,0,1,3.65,3.56,2.18,2.18,0,0,1,.56,2.54,12.59,12.59,0,0,0-.42,4.19c.12,3-.63,3.14-1.76,3.37a3.88,3.88,0,0,0-2,.87c-1.31,1.16-1,3.24-.77,4.76a6.62,6.62,0,0,1,.12,1.47c-1.1-.75-5.36-6.9-5.77-8.15a8.56,8.56,0,0,1,.56-2.88c.56-1.92,1.24-4.3.87-6a2.13,2.13,0,0,0-2.31-1.8h0Zm-26.16-42.84a.75.75,0,0,0,.07-.12,5.65,5.65,0,0,0,.25-.55,9.31,9.31,0,0,0,1.65,2C322.06,328.45,321.41,328,320.63,327.44Zm.49-1.47h0c-.34-.58-.69-1.18-1-1.8-1.24-2.2-2.53-4.48-4.06-5.32-1.79-1-3.21-9.46-3.54-17.1-.23-5.3.16-7.61.42-7.81,0,0,.12.06.31.5l0,0a44.39,44.39,0,0,1,1.6,6.65l.06.33s0,0,0,.05c1,4.81,2.26,11.4,4.27,13.23,2.47,2.24,2.84,4.73,3.14,6.74a11.07,11.07,0,0,0,.45,2.13,10.14,10.14,0,0,0,1.28,2.23c.61.91,1.26,1.85,1.09,2.4a.9.9,0,0,1-.55.51C323.34,329.27,322.12,327.62,321.12,326Zm-93.67-74.13,0-.05a1.8,1.8,0,0,1-.2-.18l0,0-.14-.18v0a.66.66,0,0,1-.09-.19c-.19-.69-1.27-1.59-2.4-2.56a16.59,16.59,0,0,1-2.06-2,16.16,16.16,0,0,1-1.45-2.15,6.85,6.85,0,0,0-.4-2.91,5.16,5.16,0,0,0-.71-1.32A7.49,7.49,0,0,1,218,235a14.2,14.2,0,0,0-.57-3.66,9.09,9.09,0,0,1-.34-1.95,7.21,7.21,0,0,1,1.28-2.69,19.39,19.39,0,0,0,2.05-4.07,9.88,9.88,0,0,1,3-3.82l.12-.11a2.75,2.75,0,0,0,.46.49,1.77,1.77,0,0,0,.53.27,1.91,1.91,0,0,0,.64.11,4.1,4.1,0,0,0,3.11-2c.31-.44.57-.49.74-.49a1.09,1.09,0,0,1,.24,0,4.22,4.22,0,0,1,.88.47,3.61,3.61,0,0,0,1.09.55,1.44,1.44,0,0,0,.4.06,1.41,1.41,0,0,0,1.11-.61c.85-1.12,3.29-1.44,5.06-1.67a9.07,9.07,0,0,0,2.35-.49l1.2-.57a30.64,30.64,0,0,0,4.93-2.7c.72-.6.38-1.38.12-2-.35-.79-.48-1.22.24-1.62a5.19,5.19,0,0,1,2.21-.32l.95,0h1.06c2.17,0,4.35-.22,5.59-1.81a56.08,56.08,0,0,1,5.73-6l.93-.89a2.14,2.14,0,0,0,.62-1.52,2.45,2.45,0,0,1,.8-1.73c1.16-1.16,3.18-2.36,4.55-2.36a1.7,1.7,0,0,1,.41.05,1.2,1.2,0,0,1,.33.13,2.58,2.58,0,0,0,.81.24c.14,0,.27,0,.42.06,2,2.42,4.45,5.5,4.73,6.32a10.49,10.49,0,0,0,.48,1,14.16,14.16,0,0,1,.8,1.8,2.87,2.87,0,0,1,.14,1.76,1.61,1.61,0,0,1-.87.93c-1,.48-1.5,1.05-1.55,1.67a1.1,1.1,0,0,0,.07.55,1.82,1.82,0,0,0,.59.83.19.19,0,0,0,.13.06l2.8.4.79,2a.29.29,0,0,0,.26.17,7.5,7.5,0,0,1,5.28,2.43c.6.72,1.09,1.27,1.5,1.72a5.62,5.62,0,0,1,1.31,1.77,1.74,1.74,0,0,1,.07.53,1.5,1.5,0,0,0,.05.37c.16.75.89,1.25,1.93,2a26,26,0,0,1,2.37,1.74,6.68,6.68,0,0,1,2.22,2.75,4.79,4.79,0,0,1,.2,1.64.92.92,0,0,0,.05.28c.39,1.3,3.74,2.92,4.67,3.36l1.51,3.75-4.63.77c-.55-.29-3.54-1.78-5.72-1.78a2.22,2.22,0,0,0-2.2,1.11c-.51,1-1,1.24-1.5,1.24a6,6,0,0,1-1.23-.21,10.89,10.89,0,0,0-2.51-.35,16.17,16.17,0,0,0-7.22,2.1l-.1,0a4.83,4.83,0,0,1-2.79,0,3.94,3.94,0,0,0-2.73.06c-1.16.77-1.95,3.65-2.18,4.56L255,239.21c-.43-.62-2.82-3.84-5.67-3.84-3.06,0-7.23,5.38-7.41,5.61a.35.35,0,0,0-.05.18v4.35l-5.62-.8h-.11l-2.94.85-3.81.84a.26.26,0,0,0-.21.31,7.12,7.12,0,0,1-1.21,4.87,3.23,3.23,0,0,0-.29.43h0ZM115.87,195a2.49,2.49,0,0,1-.15.28c-.77-1-9.29-1.18-11.38-1.18h0c-5.77,0-6.18.6-6.3.79-.56.83,0,2.67.57,4.44a8.67,8.67,0,0,1,.6,2.58c-.1.61-.36,1-.7,1h0c-.2,0-.52-.1-1-.59a4.6,4.6,0,0,0-3.1-.83,9.43,9.43,0,0,0-4.29,1,4.44,4.44,0,0,0-1.15.88,1.35,1.35,0,0,1-.47.36,1.41,1.41,0,0,1-.59.12c-1.69,0-4-2.45-4.55-3.29a5.82,5.82,0,0,0-2-1.79l-.13-.08c-.15-.08-.31-.15-.48-.22s-.24-.08-.36-.12l-.23-.08c.68-2.19,1.46-4.24,1.78-5s0-1.7-.31-2.67c-.23-.69-.51-1.53-.25-1.65a5.2,5.2,0,0,1,1.07-.12,8.15,8.15,0,0,0,2.52-.42A3.25,3.25,0,0,0,87,186.34a14.67,14.67,0,0,1,2.18-4.19.2.2,0,0,0,.07-.16c.13-1.9.64-4.51,1.38-4.87l.11,0a.45.45,0,0,1,.25.08l.66.37a6.69,6.69,0,0,0,2.74,1.14,1.39,1.39,0,0,0,.44-.07c.42-.13.83-.5.91-1.49s.58-1.24,1.26-1.47a2.33,2.33,0,0,0,1.77-1.72c.29-1.07.71-1.46,1.13-1.6a1.4,1.4,0,0,1,.41-.05,5.5,5.5,0,0,1,1.3.24,3.38,3.38,0,0,0,.93.14,2.41,2.41,0,0,0,.87-.15,1.74,1.74,0,0,0,1.26-1.7c0-.17.16-.3.44-.4a10.22,10.22,0,0,1,1.17-.28,19.8,19.8,0,0,0,2-.49,8.49,8.49,0,0,0,2.16-1c.47-.32.89-.63,1.29-.92a12.48,12.48,0,0,1,2.28-1.47,1.58,1.58,0,0,1,.48-.1.8.8,0,0,1,.58.26c.61.61,2.65.78,4.19.81-.33,2.48-.15,3.24.12,3.52l0,0,.05,0s0,0,0,0a.69.69,0,0,1,.14.15,6,6,0,0,1,.61,1.27,5.63,5.63,0,0,0,1.49,2.52h0l.27.21c.43.31.93.69,1.4,1.1a3.4,3.4,0,0,1,1.39,2.1,3.69,3.69,0,0,0,.64,2.56,1.21,1.21,0,0,0,.87.33.87.87,0,0,1,.58.3,5.52,5.52,0,0,1,.55.7,8.17,8.17,0,0,0,.66.82,2.43,2.43,0,0,0,.85.6,4.26,4.26,0,0,0,2.5-.3c.36-.13.68-.23.85-.27a8,8,0,0,1,.06,1.46c0,1.24,0,2,.3,2.33h0a.44.44,0,0,0,.31.14,4.78,4.78,0,0,1,2.47,1.07l.05,0h0c.23.87-.15,1.13-.77,1.54a3.87,3.87,0,0,0-1,.85,1.07,1.07,0,0,1-.34.27,13.59,13.59,0,0,1-5.1.82,1.94,1.94,0,0,0-.89.27,8.25,8.25,0,0,0-1.47,1.2,6.37,6.37,0,0,1-1.47,1.14l-.11.06a3.2,3.2,0,0,1-1,.05h0a18.7,18.7,0,0,1-2.65-.44,25,25,0,0,0-2.54-.43,2.14,2.14,0,0,0-1.36.41l-.15.13,0,0A3.81,3.81,0,0,0,115.87,195ZM74.2,196.64a2.71,2.71,0,0,0-2.58,1.74A3.14,3.14,0,0,1,69,200.45a1,1,0,0,1-.4-.08.92.92,0,0,1-.28-.24,5.28,5.28,0,0,0-1.86-1.76,1.76,1.76,0,0,0-.81-.22,1.4,1.4,0,0,0-1.25.89l-.08.14a2.11,2.11,0,0,1-.16.3c-.4.59-1,.61-1.65.15,0,0,0,0,0-.06a3.89,3.89,0,0,1-.87-.9,4.44,4.44,0,0,1-.47-1.79c-.14-1-.29-2.19-1.38-2.19a.62.62,0,0,1-.69-.55,1,1,0,0,1,0-.38,1.19,1.19,0,0,1,.75-.88.54.54,0,0,0,.42-.38.56.56,0,0,0,0-.12c.07-.4-.38-.74-1.07-1.28s-1.61-1.22-1.61-1.81c0-1.43-1.82-5.08-2.85-5.34-.51-.12-1.23.5-2.42,1.6-.89.81-2,1.84-2.52,1.84a4.5,4.5,0,0,1-1.41-.52,5.37,5.37,0,0,0-2.14-.7,1.41,1.41,0,0,0-1.37,1c-.18.47-.4.54-.57.54a2.63,2.63,0,0,1-.87-.26,3,3,0,0,0-1.22-.35,1.38,1.38,0,0,0-1.14.62c-.15.2-.3.31-.42.31-.4,0-.88-1.16-1.09-2l0-1h0a28.13,28.13,0,0,0,0-4.42c-.2-1-1.91-2.78-3.72-4.59-1.11-1.13-.94-4-.94-4.05a.39.39,0,0,0,0-.18l-1.24-1.83a8.91,8.91,0,0,0-.42-1.19c2.18-.15,3.47-1.06,3.47-2.47,0-.92.28-2.5,1.36-2.5a3.74,3.74,0,0,1,2.15,1.18,4.13,4.13,0,0,0,2.4,1.35c.85,0,1.17-.79,1.43-1.41a2.8,2.8,0,0,1,.29-.6c.06-.09.19-.22.58-.22a7.29,7.29,0,0,1,1.52.28,10.15,10.15,0,0,0,2.28.37,11.9,11.9,0,0,0,4.36-1.23c.71,0,6.7.07,12.77.07,13.22,0,13.82-.3,14.05-.41,1.34-.68,1.15-5.23,1.09-6.13,0,0,0,0,0-.05h0a.25.25,0,0,0-.08-.18l-2.06-2.06L72.38,94.51H83.53c20.13,13.33,41.08,27.38,42.16,28.46a36.55,36.55,0,0,1,4.29,6.21.29.29,0,0,0,.22.14,22.63,22.63,0,0,1,7.6,2.37c3.21,1.84,3.24,6.94,3.24,7a.27.27,0,0,0,.11.22.27.27,0,0,0,.24.06s3.1-.69,5.49-1.17c.15,10.14,0,17-.33,17.6a6.46,6.46,0,0,0-1.24,2.7,8.11,8.11,0,0,1-1,2.4,7.54,7.54,0,0,0-.61.74c-.72.94-1.7,2.23-3.46,2.23A35,35,0,0,0,136,164a41.44,41.44,0,0,1-5.41.59,7.09,7.09,0,0,1-1-.07,4.84,4.84,0,0,0-.75-.06,7.87,7.87,0,0,0-4,1.41,8.44,8.44,0,0,1-.9.48,16.18,16.18,0,0,1-3.8.31h-.54a.26.26,0,0,0-.12,0c-2,0-3.6-.3-4-.65a1.31,1.31,0,0,0-1-.42c-.83,0-1.81.71-3.17,1.7l-1.28.92a10.08,10.08,0,0,1-3.87,1.4c-1.2.23-2.14.43-2.14,1.26s-.57,1.26-1.48,1.26a2.76,2.76,0,0,1-.79-.12,5.88,5.88,0,0,0-1.45-.26c-1.07,0-1.75.67-2.14,2.09a1.75,1.75,0,0,1-1.41,1.32,2,2,0,0,0-1.64,2c-.08,1-.53,1-.71,1A6.48,6.48,0,0,1,92,177.09l-.66-.38a1,1,0,0,0-.53-.15c-1.63,0-2,4.27-2.11,5.35a15.29,15.29,0,0,0-2.23,4.28c-.68,1.91-2.6,2-4,2.1a4.35,4.35,0,0,0-1.3.17c-.77.3-.44,1.31-.08,2.36.27.82.59,1.75.34,2.23a49,49,0,0,0-1.85,5.11,2.4,2.4,0,0,0-.28,0,2.74,2.74,0,0,0-1.62.51,3.63,3.63,0,0,1-1.65.79l-.14,0-.06,0c-.1-.11-.22-.44-.12-1.27a1.25,1.25,0,0,0-.28-1,1.16,1.16,0,0,0-.24-.2A1.73,1.73,0,0,0,74.2,196.64Zm204.48-62.95v18.63c.2,3.15,0,6.68-.65,6.9l-.43.14c-1.73.55-5.21,1.65-5.64,3.54a1.72,1.72,0,0,0,0,.39c0,2.48-.67,3.63-2.32,4-1.16.23-1.27,1.5-1.36,2.62-.11,1.52-.27,2.44-1.53,2.44a2.81,2.81,0,0,0-.43,0,1.06,1.06,0,0,0-.8.43c-.33.5,0,1.19.35,2q.18.38.33.75a3.54,3.54,0,0,1,.26,1.07,1.14,1.14,0,0,1-.33.89,3.44,3.44,0,0,0-1.13,2.37,1.93,1.93,0,0,0,.15.75,2,2,0,0,0,2,1.17,1.11,1.11,0,0,1,.83.28c.42.46.34,1.57.25,2.74-.05.58-.09,1.17-.09,1.78,0,2.33,2.55,3.95,3.33,4.37l-.79,2.75h-.14a1.78,1.78,0,0,1-.43-.15,2,2,0,0,0-1.06-.26c-1.57,0-3.73,1.31-5,2.53a3,3,0,0,0-1,2.09,1.59,1.59,0,0,1-.46,1.17c-.2.21-.53.51-.92.88a58.08,58.08,0,0,0-5.78,6c-1.3,1.66-3.9,1.63-6.21,1.59-.33,0-.64,0-.95,0a5.66,5.66,0,0,0-2.49.38c-1.2.67-.79,1.64-.49,2.35s.4,1,0,1.33a31.54,31.54,0,0,1-4.81,2.62l-1.21.59a9.44,9.44,0,0,1-2.17.43c-2,.26-4.43.59-5.44,1.88a.82.82,0,0,1-.65.39,2.52,2.52,0,0,1-1.16-.51,2.94,2.94,0,0,0-1.46-.6,1.5,1.5,0,0,0-1.2.73,3.58,3.58,0,0,1-2.65,1.81,1.42,1.42,0,0,1-.42-.06,1.11,1.11,0,0,1-.36-.18,2,2,0,0,1-.42-.47l-.1-.14h0a22.89,22.89,0,0,1-2-4.89c-.59-1.92-1.86-2.9-3.47-4.13-.69-.54-1.48-1.14-2.29-1.89-2-1.85-1.78-3-1.61-4a3.63,3.63,0,0,0,.09-.71c0-.21.66-.62,3.16-.62.93,0,1.82.06,2.4.1a7.55,7.55,0,0,0,.93,0c.69,0,2.32-.08,2.53-.81a.76.76,0,0,0,0-.16c0-.17-.07-.42-.46-.66-.79-.46-2.66-4.41-2.72-7.61,0-.2,0-.4,0-.6s0-.47,0-.69a10.24,10.24,0,0,0-.52-3.31,6.74,6.74,0,0,1-.32-1.57,3,3,0,0,1,0-.52v0h0c.15-1.35-1-4-2.37-5.53a3.18,3.18,0,0,0-2.17-1.26l-.25,0-.08,0c-.93-.13-1.27-.76-1.68-1.5a4.92,4.92,0,0,0-.83-1.21c-.25-.27-.44-.51-.61-.73a2.5,2.5,0,0,0-.76-.73c0-.7,0-1.37,0-2a5.21,5.21,0,0,1,.53-3,8.29,8.29,0,0,0,.88-2.85c.59-3.59,10.07-13.05,10.84-13.63.23-.17.92-.7.92-17.27a27.46,27.46,0,0,1,1.2-7.23,3.06,3.06,0,0,0-.52-3.09,3,3,0,0,1-.68-2.23c.13-1.61-.85-3-1.72-4.16a4.81,4.81,0,0,1-1.12-2.16c0-1-.2-5.11-.38-8.45v-.2l5.84-3.16ZM136,185a3.32,3.32,0,0,0-.63,2.17,5.44,5.44,0,0,0-2.33-.87,8.57,8.57,0,0,1-.1-1.88,3.89,3.89,0,0,0-.17-1.78l0,0h0a.52.52,0,0,0-.46-.22,3.77,3.77,0,0,0-1.05.27,3.81,3.81,0,0,1-2.12.31,1.69,1.69,0,0,1-.64-.47,6.74,6.74,0,0,1-.56-.71,5.37,5.37,0,0,0-.7-.85,1.37,1.37,0,0,0-.94-.43.72.72,0,0,1-.42-.12c-.33-.28-.48-.95-.48-2.15a3.12,3.12,0,0,0-1.06-2,15.27,15.27,0,0,0-2-1.67l-.27-.21a5.45,5.45,0,0,1-1.29-2.23,5.29,5.29,0,0,0-.72-1.47,1.06,1.06,0,0,0-.27-.25c-.06-.09-.29-.58.06-3.15H120a16.44,16.44,0,0,0,4.06-.36,6.39,6.39,0,0,0,1-.52,7.47,7.47,0,0,1,3.69-1.33,3.52,3.52,0,0,1,.66.06,7.07,7.07,0,0,0,1.12.08,42.29,42.29,0,0,0,5.5-.6,32.29,32.29,0,0,1,4.18-.49c2,0,3.16-1.47,3.91-2.46a8,8,0,0,1,.55-.68,2.35,2.35,0,0,0,.46-.73,16.55,16.55,0,0,0,.7-1.92,13.25,13.25,0,0,1,.78-2,1.29,1.29,0,0,1,.26-.34.37.37,0,0,0,.1-.11c.25-.41.71-2.59.47-18.11l.74-.15c2.4-.49,10.31-3.28,10.64-3.4a.2.2,0,0,0,.08,0L171.39,124l29.34-18.29.06,0a40.3,40.3,0,0,1,4.28.3l.19,0,.54.08.34,0,.41.07.41.08.35.07.41.1.33.08.38.11.34.1.35.13.3.11a4.48,4.48,0,0,1,.44.2l.16.07a5.1,5.1,0,0,1,.52.31,15.09,15.09,0,0,1,4.27,4.24.25.25,0,0,0,.18.12.28.28,0,0,0,.22,0l5-2.73c.1,1.94.21,4.15.29,5.84.05,1.19.09,2.13.09,2.52a4.81,4.81,0,0,0,1.23,2.47c.8,1.11,1.71,2.37,1.61,3.77,0,.17,0,.32,0,.47a3.49,3.49,0,0,0,.8,2.14,2.58,2.58,0,0,1,.6,1.7,3.42,3.42,0,0,1-.17.9,28.45,28.45,0,0,0-1.22,7.38c0,11.74-.38,16.39-.69,16.81-.8.6-10.42,10.18-11.05,14a7.8,7.8,0,0,1-.83,2.69,5,5,0,0,0-.59,2.54c0,.22,0,.46,0,.73,0,.54,0,1.15,0,1.8a2.14,2.14,0,0,0-.74.11,2.93,2.93,0,0,0-1.16.78c-.38.38-.77.85-1.17,1.34a18.21,18.21,0,0,1-1.26,1.45,3.44,3.44,0,0,1-1.3.89,2.67,2.67,0,0,1-.91.14,10.66,10.66,0,0,1-4.26-1.39l-.29-.14a6.93,6.93,0,0,0-2.72-.31c-.87,0-1.82,0-2.76.07a30.88,30.88,0,0,1-3.32,0c-1.33-.14-2.61,1-3.73,2a9.31,9.31,0,0,1-1.51,1.24,6.2,6.2,0,0,1-2.66.42,15,15,0,0,1-3.81-.45,11.32,11.32,0,0,1-2-1.19c-1.24-.82-2.52-1.66-3.32-1.66a12.29,12.29,0,0,0-5.82,1.68,1.42,1.42,0,0,1-.65.2c-.74,0-1.28-1.06-1.81-2.1a8.72,8.72,0,0,0-1-1.7,3.65,3.65,0,0,0-2.79-.92,4.19,4.19,0,0,1-2.72-.75,1.56,1.56,0,0,0-1-.45,2.8,2.8,0,0,0-1.74,1c-.48.46-.93.86-1.4.82l-.76-.13a22.46,22.46,0,0,0-3.48-.38,3.48,3.48,0,0,0-2.26.56l0,0h0c-.8.68-1,2.28-1.23,3.69a5.6,5.6,0,0,1-.42,1.81c-.5.52-3.12,3.48-3.12,5.08a2.35,2.35,0,0,1,0,.45h0a.88.88,0,0,1,0,.15,1,1,0,0,1-.41.49,2.16,2.16,0,0,1-1.92-.15c-.74-.32-.8-.81-.86-1.42a1.81,1.81,0,0,0-1.4-1.84,2.07,2.07,0,0,0-.22,0l-.27-.05-.25,0h0a1.84,1.84,0,0,0-.47.06l-.14.05A2.23,2.23,0,0,0,136,185Zm196.29,60.32a3.68,3.68,0,0,0,1.66.78.77.77,0,0,0,.61-.28,6.57,6.57,0,0,1,4-1.7,1.47,1.47,0,0,1,.65.13,6.12,6.12,0,0,0,2.53.51c1.27,0,2.05-.38,2.14-1,.06-.41.74-.92,1.41-1.42l.62-.48,2.87,2.6.68,4.83a.28.28,0,0,0,.09.17l2.71,2.36c0,.62-.05,3-.34,5.43-.36,2.83-2.94,6.36-4.49,7.91a14.16,14.16,0,0,0-2,4.12,23.81,23.81,0,0,0-5.29-.64,13.24,13.24,0,0,0-3.75.48c-2.62.77-4.55,5.29-5.32,7.42l-5.61.46s-1.58.38-3.24.85l-.05,0a31,31,0,0,0-3.76,1.25l-.13.07a3.79,3.79,0,0,1-2.1.57l-.56,0a9.86,9.86,0,0,0,.88-4.75,15,15,0,0,1,1.2-5.81,10.13,10.13,0,0,0,.59-2.24,3.89,3.89,0,0,1,1-2.52,4.17,4.17,0,0,0,1.18-1.93c.31-.83.61-1.62,1.32-1.83,2-.6,2.94-1.29,3.08-2.2a3.57,3.57,0,0,1,.77-1.18,4,4,0,0,0,1.22-2.37h0c0-.79-.58-1.26-1.15-1.71s-1.12-.89-1.12-1.64.09-1.59.2-2.57v-.11l0-.16c.06-.53.12-1,.18-1.5.08-.62.15-1.13.18-1.38a30.47,30.47,0,0,1,4.93-1.44A4.35,4.35,0,0,1,332.26,245.32Zm-9.14,35.9s1.36,2.76,1,4.4c-.11.52-1,.91-2.5,1.08,0,0,0,0-.06,0a19.47,19.47,0,0,1-2,.1c-.63,0-1.08,0-1.08,0a.25.25,0,0,0-.22.09.3.3,0,0,0-.08.23h0v.12a1.8,1.8,0,0,1-.41,1.17c-.49.57-1.45.73-2.77.49a16.92,16.92,0,0,0-2.24-.21h0a2.08,2.08,0,0,1-.82-.6,1.7,1.7,0,0,1-.33-1.13,1.54,1.54,0,0,1,1.27-1.7.29.29,0,0,0,.25-.3c-.08-1,0-3.69,1.17-4.11a2.08,2.08,0,0,0,.85-.61c.35,0,.66.05.94.05a3.86,3.86,0,0,0,2-.45l.41-.19.13-.07a24.94,24.94,0,0,1,3.46-1.15Zm-1.43,9.33a.24.24,0,0,0,0,.17.24.24,0,0,0,.11.13l1.5.91c-1.17,2.18-4,7.17-5.34,7.7a22.08,22.08,0,0,0-2.62,1.53,45.09,45.09,0,0,0-1.61-6.71l-.33-4.95c.6,0,1.09.1,1.48.16a6.57,6.57,0,0,0,1.19.12,3.23,3.23,0,0,0,1.5-.33l.07,0a1.91,1.91,0,0,0,.55-.43,2.23,2.23,0,0,0,.54-1.42c.18,0,.43,0,.73,0h.5c.49,0,1,0,1.46-.08A11.52,11.52,0,0,1,321.69,290.55Zm89.46-104.3a.94.94,0,0,1-.83.64c-1.69.36-4,1.91-4.25,2.9a.68.68,0,0,0,.15.73,3.34,3.34,0,0,0,1.28.58,12.82,12.82,0,0,1,2.13.86,29.53,29.53,0,0,0-2.43,2.88,3.79,3.79,0,0,0-2.28-1.28,1.85,1.85,0,0,0-1,.35,4.57,4.57,0,0,1-2.38.71c-.55,0-.94-.15-1.07-.39-.37-.74-1.24-3.84.17-5.45.43-.5.89-1.11,1.33-1.73.76-1.07,1.48-2.18,1.87-2.83l.06-.09.42.05a13.39,13.39,0,0,0,1.51.13,1.92,1.92,0,0,0,1.11-.26,1.21,1.21,0,0,0,.33-.31,6,6,0,0,1,1.59-1.1l.76.69C410.67,184.27,411.34,185.53,411.15,186.25Zm-24.84-23.73c.51.07.94.84,1.39,1.67.64,1.2,1.46,2.69,3,2.69,2.32,0,6.83,2.59,10.63,7.4a81.88,81.88,0,0,0,7.06,8l-.35.22-.09,0a3.34,3.34,0,0,0-.34.23l-.25.16-.17.13-.19.16a1.24,1.24,0,0,0-.23.23c-.17.23-.47.32-1,.32a12.59,12.59,0,0,1-1.44-.12l-.28,0s0-.07,0,0c-2.19-2.34-13.19-14-14.71-14.22h0a19.88,19.88,0,0,0-3.12.05c-.81.06-1.67.1-2.36.1a5.82,5.82,0,0,1-1.08-.07l-.18,0a3.89,3.89,0,0,1-.55-.3,1.81,1.81,0,0,0-.44-.22c-.43-.15-1-.11-2.27.52a2.61,2.61,0,0,1-1.13.31,1.62,1.62,0,0,1-.54-.1,4.21,4.21,0,0,1-1.45-1.13c-.24-.25-.51-.52-.78-.75a4.08,4.08,0,0,0-1.26-.75c-1.13-.4-2,.2-2.46,1.72-.25.88-.69,2.36-1.11,2.36h-.06a1.19,1.19,0,0,1-.44-.32,1.57,1.57,0,0,0-.77-.34,10,10,0,0,0-2.19-.18c-.76,0-1.69,0-2.74.11-.06-.42-.16-.87-.24-1.33-.48-2.56-1-5.47.64-7.45,2.23-2.69,3-4.86,2.6-7-.22-1.13.63-1.67,2-2.43a7.88,7.88,0,0,0,1.72-1.13,7.59,7.59,0,0,1,1.12-.82,21.87,21.87,0,0,0,3.17-2.49h0l.62-.65.1-.11c.18-.2.36-.43.54-.65l.17-.22c.16-.2.31-.42.46-.64a2.07,2.07,0,0,0,.17-.24c2.17,2.75,3.48,5.41,3.53,7.16C381.1,156.09,384.57,162.3,386.31,162.52Zm-24.83-50.9c3.11,1.72,5.64,5.31,5.83,6.9a19.46,19.46,0,0,0,.38,2,44.34,44.34,0,0,1,1.14,9.31c0,5.51,1.66,9.83,4.22,11a15.32,15.32,0,0,1,4,3.7c-.1.16-.21.3-.31.45s-.22.33-.33.47a2.31,2.31,0,0,0-.14.19,17.27,17.27,0,0,1-4.42,3.89,8.09,8.09,0,0,0-1.2.89,6.8,6.8,0,0,1-1.57,1A5.43,5.43,0,0,0,367,153a2,2,0,0,0-.26,1.51,5.89,5.89,0,0,1-.67,3.88,14.75,14.75,0,0,1-1.81,2.65,5.18,5.18,0,0,0-1,1.8c-.59,1.91-.18,4.13.2,6.14.1.53.19,1,.26,1.53h0a.31.31,0,0,0,0,.09,5.6,5.6,0,0,1-.35,2.59,21.62,21.62,0,0,1-1.15,2.54c-.28.58-.55,1.12-.74,1.6a3.68,3.68,0,0,0-.32,1.29,2.67,2.67,0,0,1-.25,1.1,3.2,3.2,0,0,1-2.41,2c-.91,0-1.68,1.22-2.58,2.63a15.43,15.43,0,0,1-1.86,2.54,3.07,3.07,0,0,0-.74,1.24,10.06,10.06,0,0,0-.41,2.51,8.82,8.82,0,0,1-.33,2.13,1.85,1.85,0,0,1-.6.88,12.9,12.9,0,0,1-1.67,1c-.83.42-1.5.77-1.7,1.26a.94.94,0,0,0-.07.22,1.15,1.15,0,0,0,.42,1,.85.85,0,0,1,.1,1,9.09,9.09,0,0,1-.85,1.58,13,13,0,0,0-1.18,2.21,4,4,0,0,0-.27,1.4,39.18,39.18,0,0,1-.68,7.28.46.46,0,0,1-.05.1s-.09,0-.38,0-.56,0-.91,0-1,0-1.45,0-2.38,0-2.79,1.06a1.25,1.25,0,0,0-.11.53,2.68,2.68,0,0,1-.06.59,2.72,2.72,0,0,1-.73,1.17,2.73,2.73,0,0,0-.6.9,1.58,1.58,0,0,0,.16,1.3c.45.91,1.74,1.25,3.1,1.61s2.85.76,3.25,1.75a10,10,0,0,0,2.42,3,13.71,13.71,0,0,1,3.52,4.64c1.27,3.4,4.72,5.28,6.63,5.28.18,0,.23.07.25.1.24.3,0,1.4-.21,2.81-.12.71-.27,1.5-.39,2.4a3.8,3.8,0,0,1-1.26-.81,2.82,2.82,0,0,0-2.28-.8,11.15,11.15,0,0,0-2.1.24c-1.52.31-5.34,2.48-5.69,3.87a2.27,2.27,0,0,1-.78,1c-.25.2-.52.41-.79.6-.79.59-1.54,1.16-1.63,1.8,0,.32-.68.54-1.57.54a5.69,5.69,0,0,1-2.26-.43,2,2,0,0,0-.91-.19h0c-1.46,0-3.88,1.06-4.47,2a.17.17,0,0,1-.13.07,3.94,3.94,0,0,1-1.33-.68,5,5,0,0,0-2.42-1,.51.51,0,0,1-.2,0,28.48,28.48,0,0,0-5,1.44l-.24-.22-.35-.32,0,0c-3.05-2.76-6.34-5.47-7.16-6h0a1.72,1.72,0,0,0-1-.29,5,5,0,0,0-2.53,1,5.22,5.22,0,0,0-.91-.61,3.17,3.17,0,0,0-1.43-.39,2.34,2.34,0,0,0-1.69.74,2.22,2.22,0,0,1-1.65.67,4.24,4.24,0,0,1-1.81-.47c-.24-.12-.39-.22-.4-.22a7.68,7.68,0,0,1-2.85-3.27,3.47,3.47,0,0,0-1.2-1.48l-.17-.13-.2-.12-.27-.17L299.52,230a.28.28,0,0,0-.15-.15c-1.85-.86-4.48-2.39-4.48-3.14,0-1.32,0-2.68-2.64-4.87a24.28,24.28,0,0,0-2.4-1.76c-1.2-.81-1.73-1.19-1.73-1.83,0-1-.48-1.54-1.53-2.71-.4-.43-.9-1-1.49-1.69a7.89,7.89,0,0,0-5.52-2.63l-.77-1.94a.25.25,0,0,0-.22-.17l-2.88-.42a1,1,0,0,1-.39-.8.83.83,0,0,1,.09-.28,2.61,2.61,0,0,1,1.14-.92,2.16,2.16,0,0,0,1-.89,2.64,2.64,0,0,0,.18-.38c.41-1.25-.4-2.86-1-4a8.21,8.21,0,0,1-.45-1c-.41-1.21-4.34-5.93-5-6.75l.81-2.81a.28.28,0,0,0-.14-.34s-3.23-1.65-3.23-4c0-.59.05-1.17.1-1.73.1-1.36.19-2.53-.41-3.17a1.61,1.61,0,0,0-1.24-.46,1.49,1.49,0,0,1-1.51-.82,1.86,1.86,0,0,1,.14-1.51,4,4,0,0,1,.7-.94,1.82,1.82,0,0,0,.3-.4c.52-.91,0-2-.42-3-.24-.55-.52-1.17-.39-1.43s.35-.19.74-.19a1.72,1.72,0,0,0,1.72-1,5.53,5.53,0,0,0,.4-2,4.7,4.7,0,0,1,.32-1.66.82.82,0,0,1,.57-.4,3,3,0,0,0,2.3-1.73,6.65,6.65,0,0,0,.49-2.84,1.26,1.26,0,0,1,.15-.59c.77-1.38,3.85-2.36,5.11-2.77l.44-.14a.91.91,0,0,0,.47-.43l0-.06a2.42,2.42,0,0,0,.12-.23c.7-1.59.53-5.45.44-6.77V130.18h6.05a.28.28,0,0,0,.28-.29h0V115.74h41.54a.23.23,0,0,0,.15,0s1.22-.79,2.44-1.61a1,1,0,0,1,.51-.14c1,0,2.36,1.32,2.37,1.33a.42.42,0,0,0,.21.08h8.78a5.71,5.71,0,0,0,3.79,2c1.07,0,1.41-.81,1.74-1.51a2.2,2.2,0,0,1,2.35-1.74c2,0,2.61-1.69,3.1-3,.4-1.13.69-1.82,1.35-1.82h1c1,0,1.2-.29,2.53-2.15l.14-.19A7.49,7.49,0,0,0,361.48,111.62ZM297.11,45.05a37.6,37.6,0,0,1,11.58,3.17l.91.37a11.24,11.24,0,0,0,4.11.85,4.54,4.54,0,0,0,3.93-1.67c.91-1.31,6.5-2.76,10.7-2.76a7.93,7.93,0,0,1,3.24.52c2.47,1.25,4.41,2.12,6.65,2.12a8.47,8.47,0,0,0,2.16-.27,5.88,5.88,0,0,1,1.55-.19,14.19,14.19,0,0,1,3.24.49c1.27.3,2.21.45,2.64,0a4.45,4.45,0,0,0,.5-.67L353,58.51l-1,2.71-.19,1.3h0c-.48,0-.69.77-1.25,3.18s-1.55,6.57-2.84,6.57c-2.06,0-5.24-5.79-6.64-8.86-.19-.46-.47-1.1-.78-1.84-2-4.86-3.16-7.17-4-7.17a.45.45,0,0,0-.16,0,.66.66,0,0,0-.39.48c-.5,1.57.45,8.34,3.4,12.53a40.22,40.22,0,0,0,2.74,3.45c1.32,1.53,1.93,2.24,1.87,4a6.25,6.25,0,0,0,1.71,3.94A6.13,6.13,0,0,1,347,81.89c.11,1.4,1.56,3.73,3.25,6.44A38.33,38.33,0,0,1,354.35,96a12.75,12.75,0,0,0,2.13,4.11,3.79,3.79,0,0,1,1,3.37,8.86,8.86,0,0,0,0,2.72l0,0a.68.68,0,0,0-.14.18l-.3.42c-1.32,1.83-1.39,1.9-2.07,1.9H353.9c-1.09,0-1.5,1.12-1.89,2.2-.47,1.32-1,2.68-2.57,2.68a2.73,2.73,0,0,0-2.87,2.09c-.31.76-.52,1.16-1.19,1.16-1.86,0-3.42-1.9-3.43-1.92a.26.26,0,0,0-.22-.11h-8.81a5.66,5.66,0,0,0-2.1-1.3,2.49,2.49,0,0,0-.59-.09,1.46,1.46,0,0,0-.82.24c-1.05.69-2.1,1.38-2.37,1.57H285.6V62.61a23.3,23.3,0,0,0-.55-4.61c-.39-2-.67-3.45.09-4.79a4,4,0,0,1,.39-.56,3.94,3.94,0,0,0,.62-1,4.07,4.07,0,0,0,0-2.71,7.64,7.64,0,0,1,.25-4.89c.14-.39.28-.79.43-1.19l0-.08C288.17,43.81,291.52,44.55,297.11,45.05Zm-93.33-9.5a11.13,11.13,0,0,0,1.89-.16,15.14,15.14,0,0,1,2.46-.21,16.27,16.27,0,0,1,6.66,1.63A17.7,17.7,0,0,0,218,37.93c3.39.7,4.51,1.66,4.23,3.65a3.51,3.51,0,0,0,1,2.74,8.09,8.09,0,0,0,6.09,2.45c3.66,0,8.86,1.17,12.47,4.48a8.58,8.58,0,0,0,5.74,2.31,6.45,6.45,0,0,0,5.23-2.44c1.49-2,.71-4,0-5.91a8.68,8.68,0,0,1-.81-3.18c.09-2.67,8.39-7.94,15-7.55,3.39.21,4.39,1.36,5.44,2.58a7,7,0,0,0,5,2.8c1,.16,2,.3,2.81.41,3.88.54,5.82.82,6.19,1.84a.55.55,0,0,0,.14.23v0q-.32.8-.57,1.53a8.43,8.43,0,0,0-.28,5.2,3.07,3.07,0,0,1-.53,3.18c-1.41,1.69-1.06,3.53-.61,5.85a22.22,22.22,0,0,1,.55,4.49v52.82l0,0v14.15h-6a.28.28,0,0,0-.2.08.29.29,0,0,0-.09.2V133l-51.9-27.95a.31.31,0,0,0-.13,0,.17.17,0,0,0-.13,0h0l-6,3.27-.09,0-5.22,2.83a15.76,15.76,0,0,0-4.28-4.2c-2.61-1.76-8.53-2-9.95-2-.88-3.07-1.77-5.22-3.09-5.7a1.58,1.58,0,0,0-.61-.12,3.51,3.51,0,0,1-1.11-.2,10.2,10.2,0,0,1-1.08-.48,9.34,9.34,0,0,0-1.33-.57,4.67,4.67,0,0,0-1.53-.27,6.8,6.8,0,0,1-2.23-.39,3.06,3.06,0,0,1-2.26-2.15,6,6,0,0,1,0-1.59,5,5,0,0,0-.83-3.84,22,22,0,0,0-1.82-2.33c-.68-.78-1.16-1.34-1.16-1.83,0-.7,1.79-2.23,2.47-2.81.2-.16.35-.29.43-.37.35-.35.06-.92-.32-1.66a4.42,4.42,0,0,1-.61-1.68,6.42,6.42,0,0,0-.21-1.28c-.22-1-.47-2.07.14-2.81a4,4,0,0,0,.54-5,3.65,3.65,0,0,1,.14-2.94,5.58,5.58,0,0,0,.07-4.25,31.67,31.67,0,0,0-1.88-3.43c-.72-1.19-1.34-2.22-1.25-2.69s.87-.9,1.4-1.27a0,0,0,0,0,0,0l.18-.12.81-.56a6.27,6.27,0,0,0,1.92-1.92C188.68,51,189.44,48,189,47a2.46,2.46,0,0,1,.55-2.71c.3-.26.91-.87,1.61-1.58a36.46,36.46,0,0,1,3.56-3.32,3.35,3.35,0,0,1,.65-.13,3.92,3.92,0,0,0,1.62-.45,1.87,1.87,0,0,0,.86-1.84A22.68,22.68,0,0,1,198,34,11.35,11.35,0,0,0,203.78,35.55ZM180.28,2A7.42,7.42,0,0,1,185.06.57c2.29,0,4,.76,4.17,1.81.24,1.9,1.36,2.11,1.84,2.11a2.88,2.88,0,0,0,1.87-.82c.45-.42,1.16-.35,1.34.09s-.1,1.18-.82,1.93c-.28.27-.55.54-.8.8-1.11,1.1-2.07,2.06-2,3.19a3.5,3.5,0,0,0,1.61,2.4,5.24,5.24,0,0,1,2,4.13,6.06,6.06,0,0,1-2.2,4.67,14.81,14.81,0,0,1-2.95,1.79c-1.62.79-2.9,1.42-2.53,3.25S189.08,29,190.82,29a2.11,2.11,0,0,0,1.64-.61c.76-.91,2.34,1.06,2.34,2.14,0,.77,1.08,2,2.59,3a25.51,25.51,0,0,0-.19,3.5,1.56,1.56,0,0,1-.28,1.09,2.69,2.69,0,0,1-1.64.58,2.68,2.68,0,0,0-.8.16A13.78,13.78,0,0,0,192,41.05l-1.33,1.32,0,0c-.66.66-1.23,1.23-1.52,1.48a2.71,2.71,0,0,0-.36.4,3,3,0,0,0-.36,3c.33.65-.23,3.39-1.21,5.23a1.66,1.66,0,0,1-.19.3,9.58,9.58,0,0,1-2.27,1.9h0a2.84,2.84,0,0,1-.27-.62.83.83,0,0,1,0-.15,2.42,2.42,0,0,1-.07-.47c0-.05,0-.09,0-.13a39.46,39.46,0,0,0-2.8-11.49A6,6,0,0,0,181,41a9.64,9.64,0,0,0-2.95-2.13,6.72,6.72,0,0,1-2.21-1.55.49.49,0,0,1-.05-.18,5.26,5.26,0,0,0-.54-2.66,4.89,4.89,0,0,0-2.48-2.09,5.64,5.64,0,0,1-2.55-3,6.6,6.6,0,0,1-.72-3.36c.1-.41.26-.41.33-.41,1,0,1.84-1.16,2.68-2.38a6.68,6.68,0,0,1,1.89-2.12A6.3,6.3,0,0,0,177,17.36a4.78,4.78,0,0,0-.42-3.9c-1.16-1.72-.27-8,.08-10.29A5.26,5.26,0,0,0,180.28,2ZM58.16,67.81c.32-.74,7.32-5,10.82-7a3.47,3.47,0,0,1,1.71-.32l1,0c.67,0,1.92,0,1.92-1.3,0-.84,1.27-.91,3.06-.91h.2a13.42,13.42,0,0,0,2.49-.15,4.33,4.33,0,0,0,3.81-4.3c0-1.21,1.37-1.35,3.46-1.42.51,0,1,0,1.44-.08A2.79,2.79,0,0,0,90.13,51c.36-.46.56-.7,1-.7a1,1,0,0,0,.77-.29c.41-.42.39-1.23.37-2.25a16.18,16.18,0,0,1,0-1.95c.16-1.57.19-1.57.67-1.57l.43,0,.86,0c2,0,4.31-1.13,4.31-2.76,0,0,.14-.45,3.23-.45,1.66,0,3.55.12,4.93.21.75,0,1.34.08,1.62.08a1.67,1.67,0,0,0,1.33-.63,3,3,0,0,0,.5-2.39c-.13-.72-1.25-4.65-2.91-4.93-.68-.11-.51-1.82-.36-3.47.08-.84.16-1.7.16-2.51,0-3.19-.66-5.52-2.07-7.33a10.59,10.59,0,0,1-.92-1.68,3.59,3.59,0,0,0,2.38-1.22c2.61-2.93,7.53-5.49,10.53-5.49,1.49,0,2.72-1.09,4.15-2.35,1.72-1.52,3.65-3.23,6.5-3.35,1.68,0,4.65-.4,8.08-.79,5-.59,10.78-1.25,14.36-1.25,2.3,0,2.94.28,3.11.45a2.27,2.27,0,0,0,1.63.56,15.22,15.22,0,0,0,4.84-1.38,13.18,13.18,0,0,1,3.26-1,28.75,28.75,0,0,0,3.14-.42,12.43,12.43,0,0,1,3.77-.3l.1,0a24.34,24.34,0,0,0,6.12,1.23c-.11.73-.2,1.42-.28,2.07,0,0,0,.09,0,.14l-.09.78,0,.33-.06.55c0,.17,0,.32,0,.48l0,.35c0,.21,0,.42,0,.62a1,1,0,0,1,0,.17l0,.71v0c-.07,2.19.15,3.62.65,4.37a4.28,4.28,0,0,1,.35,3.45,5.86,5.86,0,0,1-2.27,3.45,3,3,0,0,0-.58.4A10.76,10.76,0,0,0,172.06,23c-.73,1.05-1.48,2.13-2.23,2.13-.2,0-.71.08-.87.87a4.92,4.92,0,0,0,.19,2.13c.49,1.87,1.71,4.12,3.42,4.84a3.78,3.78,0,0,1,2.64,3.46c0,.27,0,.52,0,.74,0,.81,1.18,1.48,2.56,2.25.39.23.8.46,1.2.71a5.69,5.69,0,0,1,1.57,1.28c1.16,1.53,3.19,9.17,3.19,12a2.7,2.7,0,0,0,0,.49.5.5,0,0,0,0,.12,2.37,2.37,0,0,0,.09.36.78.78,0,0,0,0,.14c0,.1.08.21.13.31l.09.17a.83.83,0,0,1,.07.13l-.65.48-.24.21-.09.09a1.87,1.87,0,0,0-.27.31v0a1,1,0,0,0-.16.35c-.14.69.48,1.7,1.32,3.09A30.75,30.75,0,0,1,186,63a4.93,4.93,0,0,1-.09,3.84,4.28,4.28,0,0,0-.1,3.37c1.09,2.21.4,3.32-.48,4.36s-.49,2.25-.25,3.29a5.92,5.92,0,0,1,.2,1.15,4.84,4.84,0,0,0,.67,1.94,4.46,4.46,0,0,1,.43,1,2.94,2.94,0,0,1-.38.34c-.48.42-1,.85-1.41,1.28a3.51,3.51,0,0,0-1.27,2c0,.7.54,1.32,1.3,2.2A20.62,20.62,0,0,1,186.37,90a4.48,4.48,0,0,1,.74,3.46,6.63,6.63,0,0,0,0,1.73c.27,1.9,2.8,3,5.09,3a5.69,5.69,0,0,1,2.58.78,5.84,5.84,0,0,0,2.47.75c1.37,0,2.31,2.55,3.11,5.38L171,123.46l-12.49,10.08c-.67.23-8.26,2.89-10.56,3.36-.27,0-.58.11-.89.19l0,0c-2,.41-4.55,1-5.45,1.17-.07-1.25-.51-5.41-3.52-7.13a23,23,0,0,0-7.68-2.42,34.93,34.93,0,0,0-4.31-6.23c-2-2-63.13-42.48-66.58-44.45A3.09,3.09,0,0,1,58.32,77l-.07-2.62C58.17,71.3,58.09,68.13,58.16,67.81ZM3,158.34c.18-1.87.35-3.64,1-4.69,3.65-5.82,4.44-10.72,2.22-13.8-1.67-2.32-1.31-4.61-1-6.64.25-1.67.49-3.25-.54-4.44-.29-.33-.62-.65-1-1-1.43-1.39-3-3-2.84-6.28H27.7a.28.28,0,0,0,.28-.29V110.47c0-.61,2-1.59,3.43-2.32,2-1,3.73-1.87,3.73-2.83v-18c1.69,0,10.38.2,16.47.2s6.28-.15,6.42-.25c.31-.2.49-.94.3-9.28a4.33,4.33,0,0,0,.9.64c1.2.68,10.36,6.67,23.45,15.32H72a.31.31,0,0,0-.21.09.29.29,0,0,0-.07.22l6.45,60.64a.34.34,0,0,0,.08.17l2.08,2.07c.11,2.08-.06,5.11-.77,5.46-.23.11-2,.36-13.78.36-6.42,0-12.73-.07-12.8-.07h-.07a.15.15,0,0,0-.11,0,11.9,11.9,0,0,1-4.16,1.19,9.39,9.39,0,0,1-2.11-.35,7,7,0,0,0-1.66-.29h0a1.14,1.14,0,0,0-1,.47,4.16,4.16,0,0,0-.35.7c-.25.64-.45,1-.87,1.06a3.9,3.9,0,0,1-2-1.2,4.16,4.16,0,0,0-2.53-1.32H38c-1.43,0-1.93,1.66-1.93,3.08,0,1.23-1.29,1.68-2.37,1.84l-.18,0-.26,0-.35,0a8.43,8.43,0,0,0-.83-1.32c-.1-.13-.2-.25-.31-.37h0a5.21,5.21,0,0,0-2.18-1.52c-2.73-.9-4.62-6-4.65-6.1a.27.27,0,0,0-.26-.18H22.39a14.62,14.62,0,0,0-3.83-3.35,4,4,0,0,0-1.77-.36,11.24,11.24,0,0,0-3.73.82,32.88,32.88,0,0,1-3.51.21,13.62,13.62,0,0,1-2.63-.21,2.23,2.23,0,0,0-.5-.05c-1.19,0-1.65,1-2.06,1.82s-.69,1.41-1.39,1.6C3,158.84,3,158.6,3,158.34Zm.82,19.76a14.24,14.24,0,0,0,.4-1.78c.77.07,1.48.11,2.1.11a13.69,13.69,0,0,0,6.46-1.58,2.32,2.32,0,0,1,1-.28,2.37,2.37,0,0,1,1.61.87l.37.36.31.32a4.74,4.74,0,0,0,3.07,1.59,29.65,29.65,0,0,1,2.95.32,6.4,6.4,0,0,1-3.42.76,7.78,7.78,0,0,1-2.35-1,5.77,5.77,0,0,0-2.51-1,1.6,1.6,0,0,0-1.13.44c-1.35,1.22-5.72,2-7.64,2.11a10.64,10.64,0,0,0-1.65.32C3.56,179.2,3.71,178.65,3.86,178.1Zm-.48,2.26A15.7,15.7,0,0,1,5.14,180c1.84-.11,6.43-.84,8-2.25.67-.61,1.77-.06,3,.59a8.24,8.24,0,0,0,2.56,1,7.81,7.81,0,0,0,4.42-1.2.27.27,0,0,0,.12-.23h0a.29.29,0,0,0-.12-.25c-.11-.07-.7-.32-3.85-.55a4.66,4.66,0,0,1-3-1.74,3.41,3.41,0,0,0-2.39-1.4,3,3,0,0,0-1.28.34,13.3,13.3,0,0,1-6.21,1.52c-.62,0-1.3,0-2.06-.1a1.69,1.69,0,0,0-.5-1.26c-1.38-1.28-4.67-6.09-2.5-9.37a12.14,12.14,0,0,0,1.6-5.4l.18,0c1-.26,1.41-1.14,1.79-1.93s.85-1.67,1.94-1.46a14.87,14.87,0,0,0,2.75.23,33.33,33.33,0,0,0,3.61-.22s.05,0,.07,0a10.77,10.77,0,0,1,3.55-.78,3.38,3.38,0,0,1,1.51.3,10.86,10.86,0,0,1,2.56,2c.7.7,1.18,1.29,1.19,1.3h0a.27.27,0,0,0,.22.1h2.22a15.83,15.83,0,0,0,3.06,5,5,5,0,0,0,1.86,1.23,3.13,3.13,0,0,1,.56.23h0l.47.29.1.07.33.27.12.11.27.28.11.12a4,4,0,0,1,.26.32l.07.09a8.58,8.58,0,0,1,.72,1.19.21.21,0,0,0,0,.13,9.44,9.44,0,0,1,.6,1.53.19.19,0,0,0,0,.08L34.3,172c0,.55-.07,3.2,1.11,4.39.92.91,3.37,3.36,3.57,4.3a30.23,30.23,0,0,1,.05,4.07l-.41.14-.15.06a14,14,0,0,1-4.38.6c-3.1,0-5.18-.67-5.29-1-.33-1.16-4.28-2-5.08-2.17a.23.23,0,0,0-.21.06h0a.3.3,0,0,0-.11.23v.2a2.86,2.86,0,0,0-1.48-.33c-1.4.13-9.91.77-10,.77a.25.25,0,0,0-.13,0s-2.33,1.51-3.55,1.51H8.09c-.21,0-.25-.11-.39-.35a1.43,1.43,0,0,0-1.5-.85,7,7,0,0,0-1.5.22c-.18-.23-.37-.45-.59-.69A3.39,3.39,0,0,1,3.38,180.36Zm9.81,13a2,2,0,0,1-1.1-2.54c.17-.94.37-2-1.92-2.67A6.76,6.76,0,0,1,5.61,185l-.52-.68h0a5.5,5.5,0,0,1,1.09-.14c.7,0,.84.25,1,.56a1,1,0,0,0,.83.64h.18c1.29,0,3.4-1.31,3.8-1.56l9.94-.76a3.06,3.06,0,0,1,1.39.35,2.41,2.41,0,0,1-1.29,2.1,1.15,1.15,0,0,0-.77.69c-.22.65.27,1.43.67,2.07a3,3,0,0,1,.38.7c0,.29-.74.91-1.54.91a1.18,1.18,0,0,1-.5-.1.87.87,0,0,0-.4-.08c-1,0-2.74,1.33-4.25,2.5-.47.37-.91.71-1.28,1a7.6,7.6,0,0,0-.58.57Zm5.65,6.59a9,9,0,0,1-2.62-3.15,9.49,9.49,0,0,0-2-2.64,6.72,6.72,0,0,1,.49-.48c.35-.25.79-.6,1.28-1,1.3-1,3.07-2.37,3.9-2.37a.48.48,0,0,1,.18,0,1.61,1.61,0,0,0,.72.15c1,0,2.1-.77,2.1-1.47a2.37,2.37,0,0,0-.46-1c-.31-.5-.75-1.19-.61-1.58,0-.15.18-.26.42-.34,1-.36,1.55-1.33,1.69-2.81h0c0-.11,0-.22,0-.31a22.74,22.74,0,0,1,2.2.59c1.12.37,2,.78,2.08,1.1s.5.6,1.08.81a16.2,16.2,0,0,0,4.78.65,15,15,0,0,0,4.57-.61l.16-.06.16-.06,0,.66a.17.17,0,0,0,0,.07c.08.36.5,2,1.3,2.4a.69.69,0,0,0,.37.1,1.15,1.15,0,0,0,.88-.54,1,1,0,0,1,.43-.34.42.42,0,0,1,.15,0h.11a2.76,2.76,0,0,1,1,.3,3.1,3.1,0,0,0,1.1.31,1.19,1.19,0,0,0,1.1-.9.86.86,0,0,1,.85-.63,5.27,5.27,0,0,1,1.9.64,4.51,4.51,0,0,0,1.65.57c.75,0,1.8-1,2.91-2,.68-.61,1.59-1.46,1.9-1.46.59.22,2.4,3.38,2.4,4.78,0,.87,1,1.64,1.82,2.27a6.09,6.09,0,0,1,.83.7h0a1.83,1.83,0,0,0-1.17,1.95,1.16,1.16,0,0,0,.8,1,1.42,1.42,0,0,0,.48.08.5.5,0,0,1,.31.1c.27.21.38.74.49,1.6a4.93,4.93,0,0,0,.56,2c.06.09.15.18.22.27h0q.13.17.3.33a3.07,3.07,0,0,0,.26.25l.06.06v0c-.47,2.1-1,4.25-.21,5.23a1.14,1.14,0,0,0,.4.35,2,2,0,0,1,.41.29,2.48,2.48,0,0,1,.66,2.56c-.18.49.22,1.14.67,1.89s1.08,1.79.62,2.26-.83.21-1.33,0a3,3,0,0,0-.9-.22,1.12,1.12,0,0,0-1,.73,2.54,2.54,0,0,0,.37,2.42c.39.73.6,1.2.27,1.64a5.48,5.48,0,0,1-.78.81l-.13.12a3.5,3.5,0,0,0-.8.94l-.06,0-.08,0a2.3,2.3,0,0,1-.68-.44h0l-.06-.07,0,0,0,0v0s0,0,0-.05c-.13-.58-.46-.68-.64-.68-.52,0-1.12.68-1.91,1.77l-.64.91a1,1,0,0,1-.73.42,1.78,1.78,0,0,1-1.46-.67,2.53,2.53,0,0,1-.6-2,5,5,0,0,0,0-.78,9.56,9.56,0,0,0-1.62-5,.91.91,0,0,0-.63-.36h0a17.58,17.58,0,0,0-2.16.29l-.29.05h0c-.68.12-1.45.27-2.3.45a1.74,1.74,0,0,0-.14-.27,7.38,7.38,0,0,1-.86-4c0-1.59-3.63-6.49-5.44-7.07a1,1,0,0,0-.36-.07,7.36,7.36,0,0,0-2.28.54,5.94,5.94,0,0,1-2.83.53c-.26,0-.51-.09-.74-.15a6.66,6.66,0,0,0-1.42-.22c-.84,0-1.29.45-1.37,1.38s-3,3.59-4.32,4.71C24.56,204.35,21.54,201.91,18.84,199.92Zm14.24,19.61-.21-.18c-2.19-1.79-3.63-3-5.17-8.3a15.24,15.24,0,0,0-.93-2.38c2-1.69,4-3.52,4.49-4.73a1.84,1.84,0,0,0,.14-.46,1.07,1.07,0,0,1,.25-.7.76.76,0,0,1,.54-.15,6.44,6.44,0,0,1,1.3.21l.75.16a3.43,3.43,0,0,0,.56,0,8.33,8.33,0,0,0,2.58-.6,7.22,7.22,0,0,1,2.1-.52c1.33,0,5.19,5.2,5.19,6.57a7.8,7.8,0,0,0,1,4.27,1.65,1.65,0,0,1,.17.39h0a2,2,0,0,1,0,1v0a11.67,11.67,0,0,1-.34,1.12,9,9,0,0,0-.34,1.15h0c-.19.87-2.19,2.21-3.65,3.19-.65.45-1.28.86-1.73,1.22v0a5.3,5.3,0,0,0-1,1.34h0c-.13.23-.28.48-.43.76A61.17,61.17,0,0,1,33.08,219.53Zm14.37,9.64c-2.65-2-5.83-4-8.69-5.83a7.2,7.2,0,0,1,1.37-2c.43-.34,1-.75,1.7-1.19,1.78-1.2,3.63-2.45,3.87-3.53a9,9,0,0,1,.32-1.09c.07-.18.13-.37.19-.56v0a3,3,0,0,0,.12-.43s0-.1,0-.15a3.11,3.11,0,0,0,.06-.44,1.21,1.21,0,0,0,0-.19,1.9,1.9,0,0,0,0-.34v-.11a36.39,36.39,0,0,1,4.61-.79c.45.09,1.77,2.94,1.69,5.09,0,.14,0,.28,0,.41a2.91,2.91,0,0,0,0,.66,3.08,3.08,0,0,0,.74,1.77,2.47,2.47,0,0,0,1.77.9,1.49,1.49,0,0,0,.74-.2,1.67,1.67,0,0,0,.59-.54c.59-.83,1.68-2.4,2.07-2.4l0,0a.74.74,0,0,1,.06.18s0,0,0,.05c.11.4.5.75,1.26,1.08a3,3,0,0,0-.11.71s0,.05,0,.08a5,5,0,0,0,0,.84c.07.64.12,1.2.13,1.7,0,1.5-.22,2.44-.79,2.92a.91.91,0,0,0-.43.73h0c0,.37.42.57,1.11.93.44.23,1,.52,1.64.94.38.25.8.49,1.24.76a15.76,15.76,0,0,1,3,2.11,2.43,2.43,0,0,1,.88,2,8,8,0,0,1-.71,2.29,19.78,19.78,0,0,0-1.27,3.84,4.07,4.07,0,0,1-1.34-.24C59.92,237.89,52.59,233.06,47.45,229.17ZM85.14,235c-4,.69-7.67,1.69-10.94,2.57-3.58,1-6.68,1.81-8.87,1.85a20.17,20.17,0,0,1,1.21-3.63,8.94,8.94,0,0,0,.75-2.45c.27-2.06-2.11-3.47-4.22-4.7-.44-.26-.85-.5-1.23-.74-.67-.43-1.25-.74-1.67-1a5.63,5.63,0,0,1-.81-.47s0-.07.23-.24c.93-.78,1.2-2.36.86-5.13a4,4,0,0,1,0-.47s0-.09,0-.13,0-.26,0-.38a2.11,2.11,0,0,1,.12-.51,1.34,1.34,0,0,1,.07-.18,1.82,1.82,0,0,1,.29-.45,5.47,5.47,0,0,1,.59-.59,6.15,6.15,0,0,0,.87-.89,1.75,1.75,0,0,0-.09-2c-.05-.09-.1-.19-.14-.28A1.71,1.71,0,0,1,62,215a1.8,1.8,0,0,1-.22-1.65c.17-.37.36-.41.52-.41a2.5,2.5,0,0,1,.68.17,2.82,2.82,0,0,0,1,.24,1.23,1.23,0,0,0,.92-.39h0c.79-.77.06-2-.53-3-.32-.52-.7-1.17-.62-1.42A3,3,0,0,0,62.41,205c-.87-.49-.38-2.81.06-4.75l.08,0a2.22,2.22,0,0,0,.32.14l.08,0a1.68,1.68,0,0,0,.44.07,1.65,1.65,0,0,0,1.49-1.16c.19-.45.44-.66.77-.66.69,0,1.61.87,2.17,1.7A1.32,1.32,0,0,0,69,201h0a3.45,3.45,0,0,0,2.09-.91,3.16,3.16,0,0,0,1.06-1.58,2.18,2.18,0,0,1,2-1.31,1.38,1.38,0,0,1,.37,0,.65.65,0,0,1,.29.18A.68.68,0,0,1,75,198a2.24,2.24,0,0,0,.26,1.71.78.78,0,0,0,.46.25c.47.13,1.18-.14,2.23-.87a2.18,2.18,0,0,1,1.21-.39l.45,0h.08a5.29,5.29,0,0,1,2.68,1.53l.16.18.07.07a2.43,2.43,0,0,1,.21.31c.52.85,3,3.55,5,3.55h0a2,2,0,0,0,1.49-.64c1-1.16,3.25-1.68,5-1.68a4.3,4.3,0,0,1,2.7.67,2.16,2.16,0,0,0,1.29.72,19.11,19.11,0,0,1,.71,1.94,1,1,0,0,1,0,.16c0,.13.08.25.11.38a37.93,37.93,0,0,1,1.41,7.86c0,.62-.55,1.22-1.14,1.85A3.85,3.85,0,0,0,98,218.39c.09,1-.82,2.79-1.55,4.21a9.57,9.57,0,0,0-1,2.43c-.13,1,1.17,4.44,2.19,6.48a9.16,9.16,0,0,0,.77,1.34.8.8,0,0,1,.08.16,5.23,5.23,0,0,1-.2,2.67A30.16,30.16,0,0,0,85.14,235Zm36-4.51a45.76,45.76,0,0,0-4.32,1.83c-3.84,1.92-11.47,5.36-13,5.36h-.09a8.45,8.45,0,0,1-1-.37,39.35,39.35,0,0,0-3.89-1.41,7.33,7.33,0,0,0,.28-2.39v-.05a2,2,0,0,0-.12-.54,1.33,1.33,0,0,0-.11-.24s0-.08-.05-.11c-.94-1.25-3-6.32-2.84-7.39a10.78,10.78,0,0,1,1-2.25c.81-1.57,1.71-3.34,1.61-4.53-.07-.84.63-1.59,1.29-2.32a3.65,3.65,0,0,0,1.3-2.22,37.2,37.2,0,0,0-2.29-10.47l.07,0,.19-.13.12-.13a.79.79,0,0,0,.14-.17,1.58,1.58,0,0,0,.13-.26.52.52,0,0,0,.06-.13,3.35,3.35,0,0,0,.15-.53,8.37,8.37,0,0,0-.61-2.84c-.47-1.48-1-3.32-.66-3.94.18-.19,1.6-.53,5.83-.53,5.37,0,10.49.51,10.92.93a.59.59,0,0,0,.47.35.48.48,0,0,0,.37-.2,2.64,2.64,0,0,0,.31-.51,3.31,3.31,0,0,1,.68-1l0,0c.6,3.32,1.09,4,1.45,4.2,1.14.64,1.66,1.93,1.54,3.84,0,.33-.06.72-.1,1.16-.2,2.61-.53,6.54.27,8.56a26.92,26.92,0,0,1,1.81,9.32c0,2.21,1.22,5.41,2.41,7.78C123.5,229.55,122.34,230,121.11,230.46Zm5-2.41a8,8,0,0,1-1.1.73c-1.15-2.3-2.34-5.41-2.34-7.51a27.35,27.35,0,0,0-1.85-9.54c-.75-1.89-.43-5.75-.22-8.29,0-.44.07-.84.09-1.17.15-2.14-.46-3.61-1.81-4.37-.12-.07-.6-.59-1.19-4a1.26,1.26,0,0,1,.44,0,24,24,0,0,1,2.46.42,25.13,25.13,0,0,0,2.52.43c.17,2.78.53,4,1.21,4.73h0l.1.1a6.3,6.3,0,0,0,1.55,1c.3.15.64.33,1,.54a2.88,2.88,0,0,1,.84.68,2.43,2.43,0,0,1,.21,2.28c-.18.76-.35,1.56.25,2.16.76.77.79,2.48.84,4.65,0,1,0,2.08.14,3.24.13,1.76.33,5.92.57,12.38A8.22,8.22,0,0,0,126.06,228.05ZM137,225a4.23,4.23,0,0,1-2.35,1.06,25.54,25.54,0,0,0-4.31.36c-.24-6.42-.44-10.58-.58-12.34-.06-.71-.08-1.38-.11-2,0-.4,0-.8,0-1.17,0-.56,0-1.1,0-1.6-.07-1.54-.27-2.75-1-3.45a.9.9,0,0,1-.25-.66,4.64,4.64,0,0,1,.16-1,5.85,5.85,0,0,0,.19-1.34,2.57,2.57,0,0,0-1.52-2.27c-.37-.22-.7-.39-1-.55-1-.51-1.59-.83-2-1.79l0-.09-.09-.23-.06-.21a.83.83,0,0,0,0-.15c0-.11,0-.23-.07-.35v-.06a19.08,19.08,0,0,1-.26-2.4,2.64,2.64,0,0,0,.85-.1,5.94,5.94,0,0,0,1.81-1.34c.68-.63,1.38-1.29,2-1.29.19,0,4.85,0,5.9-1.31A3.92,3.92,0,0,1,135,190a2.88,2.88,0,0,0,.87-.76,1.62,1.62,0,0,0,.17-1.42h0s0,0,0,0a.35.35,0,0,0,0-.14h0a2.76,2.76,0,0,1-.06-.57c0-.13,0-.26,0-.38a2,2,0,0,1,0-.24,2.32,2.32,0,0,1,.13-.47.65.65,0,0,1,0-.13,1.89,1.89,0,0,1,.28-.5,1.41,1.41,0,0,1,1.66-.45c.87.27.93.73,1,1.37a2,2,0,0,0,1.2,1.88,3.8,3.8,0,0,0,.72.24l.26.06.31,0,.25,0a2.13,2.13,0,0,0,.53-.07c.25,1.5.57,3.49.65,4.22.28,2.59.47,7-.29,8.88a1.88,1.88,0,0,1-.38.61,13.91,13.91,0,0,0-2.33,3.38l-.29.6a7.94,7.94,0,0,0-2.36,3.07,8.28,8.28,0,0,0-.59,2.12,22.61,22.61,0,0,0,0,5.47c.08.89.15,1.73.15,2.64a6.83,6.83,0,0,0,1.06,3.15c.27.51.54,1,.79,1.6A2.63,2.63,0,0,0,137,225Zm38.71,12.69c-.47.44-2.21.94-7.85.94h-1.08a9.59,9.59,0,0,0-2.91.8,11.1,11.1,0,0,1-3.28.89,1.49,1.49,0,0,1-.68-.14c-1.4-.74-3.58-4-3.49-5.61.11-2-3.4-6.56-6.71-7.3-.92-.21-2-.38-3.21-.55-2.84-.42-6.06-.9-6.84-1.95l0-.05a15.3,15.3,0,0,0-1.09-2.42,9,9,0,0,1-.9-2.12,3.36,3.36,0,0,1-.08-.71c0-.93-.08-1.79-.16-2.69a22.05,22.05,0,0,1,0-5.34,7.38,7.38,0,0,1,2.77-4.82.27.27,0,0,0,.1-.11,14.56,14.56,0,0,1,2.52-3.88c1.64-1.64,1-8.59.85-10,0-.1,0-.22,0-.35-.11-.91-.4-2.68-.63-4.11l.15-.14h0a1.83,1.83,0,0,0,.47-1.33c0-1.29,2.3-4,3-4.68a4.38,4.38,0,0,0,.58-2.14c.17-1.25.39-2.8,1-3.33a3.17,3.17,0,0,1,1.91-.43,23,23,0,0,1,3.38.37c.3.06.57.1.78.13.72.1,1.3-.44,1.86-1s.91-.84,1.36-.84a1,1,0,0,1,.68.31,4.83,4.83,0,0,0,3.06.89,3.17,3.17,0,0,1,2.35.68,8.24,8.24,0,0,1,.93,1.57,7.12,7.12,0,0,0,1.27,2,1.54,1.54,0,0,0,1.09.48,1.88,1.88,0,0,0,.95-.28,11.86,11.86,0,0,1,5.53-1.6,9,9,0,0,1,3,1.57,11.64,11.64,0,0,0,2.18,1.26,15.27,15.27,0,0,0,4,.48,6.8,6.8,0,0,0,2.93-.5,10.23,10.23,0,0,0,1.62-1.31c1-.9,2.08-1.91,3.11-1.91h.17a29.47,29.47,0,0,0,3.41,0c.94,0,1.89-.07,2.75-.07a7.36,7.36,0,0,1,2.47.25l.28.14a11.36,11.36,0,0,0,4.52,1.46,3.1,3.1,0,0,0,1.08-.17,7.42,7.42,0,0,0,2.85-2.53c.7-.87,1.43-1.76,2-1.92a2.08,2.08,0,0,1,.54-.1l.2,0,0,0a1.77,1.77,0,0,1,.69.63,9,9,0,0,0,.65.74,4.69,4.69,0,0,1,.72,1.09,2.91,2.91,0,0,0,1.81,1.75,18.67,18.67,0,0,0-.36,3.47c0,1.21,1.79,2.69,3,3.1.7.23.59,1.28.36,2.87,0,.36-.1.72-.13,1.08-.11.86-1,1.13-2.31,1.4-.75.16-1.41.3-1.69.7s-4.36,6.48-4.12,7.74c.19.92-.62,3.8-1.44,4.14-1.07.43-1,2.25-1,3.46v.45c0,.31-.67.86-1.25,1.35-.94.78-2,1.67-2,2.71,0,1.34-3,6.75-4.44,9.35-.23.42-.44.78-.59,1.07s-.38.71-.56,1.07a9.54,9.54,0,0,1-1.57,2.52s-.1-.12-.16-.46a5.21,5.21,0,0,0-1.69-2.64,4.4,4.4,0,0,0-2.67-1.28,1.59,1.59,0,0,0-1,.29,3.5,3.5,0,0,1-2.07.55l-.74,0a4.94,4.94,0,0,0-1.14,0c-.86.23-6.8,6.35-8,7.57a.31.31,0,0,0-.08.15,40.25,40.25,0,0,1-1.87,7A1,1,0,0,0,175.72,237.7Zm11.22,13c.17-.44.32-.83.41-1.12.45-1.46-.81-6.34-2.06-7a3.55,3.55,0,0,0-1.89-.13,10.52,10.52,0,0,1-1.12.07,2.39,2.39,0,0,1-2.17-1c-.27-.39-.55-.82-.81-1.23a11.31,11.31,0,0,0-1.92-2.5,41.68,41.68,0,0,0,1.94-7.18c2.91-3,6.18-6.24,7.31-7.12a1.33,1.33,0,0,1,.31-.2,4.86,4.86,0,0,1,1,0c.24,0,.5,0,.77,0a4.07,4.07,0,0,0,2.41-.66,1.07,1.07,0,0,1,.63-.19c1.4,0,3.48,1.92,3.78,3.47.05.22.19.92.71.92a.71.71,0,0,0,.46-.21,9.51,9.51,0,0,0,1.68-2.64c.18-.36.37-.72.56-1.06l.58-1.05c2.18-3.95,4.51-8.26,4.51-9.64,0-.78.95-1.58,1.81-2.28s1.44-1.2,1.44-1.79c0-.12,0-.29,0-.46,0-.86,0-2.23.42-2.75a.53.53,0,0,1,.19-.13l.25-.15c1.08-.74,1.79-3.65,1.58-4.68-.15-.8,3.24-6.26,4-7.27a.49.49,0,0,1,.15-.13,5.73,5.73,0,0,1,1.16-.32,5.26,5.26,0,0,0,2.14-.8,1.57,1.57,0,0,0,.66-1.14c0-.35.08-.71.14-1.06.23-1.53.46-3.1-.75-3.5s-2.64-1.72-2.64-2.56a18.61,18.61,0,0,1,.35-3.33H215a2.66,2.66,0,0,1,1.73,1.06c1.28,1.42,2.36,3.9,2.23,5.1a5.72,5.72,0,0,0,.34,2.34,10.19,10.19,0,0,1,.47,3.77c-.2,3.09,1.56,7.49,2.76,8.6a1.21,1.21,0,0,0,.23.19,1.17,1.17,0,0,1,.19.13c-.08.12-.64.39-2,.39l-.89,0c-.59,0-1.49-.11-2.44-.11-2.52,0-3.74.38-3.74,1.19a2.92,2.92,0,0,1-.08.6c-.17,1-.41,2.24,1.41,4.11l.39.38c.83.76,1.63,1.37,2.33,1.91s1.1.85,1.57,1.28a5.52,5.52,0,0,1,1.69,2.55,23.85,23.85,0,0,0,1.93,4.82l-.2.18a10.44,10.44,0,0,0-3.17,4.06,18.51,18.51,0,0,1-2,4,7,7,0,0,0-1.36,3,8.79,8.79,0,0,0,.37,2.09,13.92,13.92,0,0,1,.55,3.54,8,8,0,0,0,2,5.65,6,6,0,0,1,1,3.92.3.3,0,0,0,0,.16A18.41,18.41,0,0,0,222,247a17.85,17.85,0,0,0,2.14,2c1,.82,2.08,1.75,2.23,2.28a1.55,1.55,0,0,0,.37.62h0a2.61,2.61,0,0,0,.24.22l.12.1.22.15.11.08a17.87,17.87,0,0,0-1.55,5.58c-1.5-.71-6.87-3.25-9.1-3.25h-.42a17.43,17.43,0,0,1-2.67.12c-5.14,0-15.33-.54-15.43-.54l-.1,0-2.91.83H186C185.58,254.1,186.39,252.05,186.94,250.66Zm-3,12c-.57,0-1-.33-1-.73s.34-1.13,1.39-1.48a3.21,3.21,0,0,0,1.93-4.63h9l.08,0,1.32-.37a48.66,48.66,0,0,1-.26,8.17c-1.29.07-7.57.42-9.08.42a26.07,26.07,0,0,0-2.59.32,1.33,1.33,0,0,0,.12-1.2A1,1,0,0,0,184,262.71Zm6.52,30.12a12.92,12.92,0,0,0-2.81-3.78c-3.88-3.78-4.79-4.92-4.88-6.12a7.21,7.21,0,0,0-1.7-2.68c-.85-1.06-1.92-2.4-1.85-3a.24.24,0,0,1,.09-.17c2-1.48,2.94-3,2.85-4.6,0-.75.81-1.07,2-1.43.78-.23,1.46-.44,1.68-.89a.75.75,0,0,0,0-.62,5,5,0,0,0-1.61-1.73c-.53-.44-1.15-.94-1.17-1.24a.28.28,0,0,1,.1-.17,9.61,9.61,0,0,0,1.12-1.39l.61-.09a18.19,18.19,0,0,1,2.39-.28c1.68,0,9-.42,9.35-.43A.28.28,0,0,0,197,264s.11-.76.21-2a51.61,51.61,0,0,0,.08-6.68l1-.28c.53,0,5.32.26,9.83.41-.35,3-.68,5.9-.68,6.78h0a.77.77,0,0,0,.06.31.15.15,0,0,0,0,.07.52.52,0,0,0,.13.17s0,0,0,.05l.05,0a1.19,1.19,0,0,0,.32.12h.06l.16,0a3.6,3.6,0,0,0,.88-.15c.28-.07.58-.15.9-.25a10.94,10.94,0,0,1,2.83-.57,2.26,2.26,0,0,1,1.44.42,2.92,2.92,0,0,1,1.24,2.54,3.35,3.35,0,0,1-2,2.51,2.29,2.29,0,0,0-1.43,2h0c-.06,1.53,1.3,3.17,2.69,4s1.61,2.43,1.59,4.55c0,.3,0,.62,0,.94s0,1,0,1.47c0,3.11,0,7.39-1.89,7.77a4.72,4.72,0,0,1-2.62-.44,4.93,4.93,0,0,0-1.85-.48,2.22,2.22,0,0,0-.63.08h-.15c-.58,0-1-1-1.49-1.93-.54-1.15-1.11-2.34-2.11-2.34s-1.29,1.05-1.54,2c-.31,1.12-.58,1.86-1.42,1.86H202c-1.47,0-3.17-.06-3.86.94a1.76,1.76,0,0,0-.3,1,4,4,0,0,0,.3,1.4c.14.38.3.76.43,1.1a10,10,0,0,1,.88,2.93,1,1,0,0,1-.14.57c-.23.35-.81.51-1.75.51a3.71,3.71,0,0,0-1.81.45l-.05,0-.31.2-.11.08-.26.21-.15.13-.21.22-.17.19-.17.21-.09.12A12.43,12.43,0,0,1,190.47,292.83Zm4.68,5.22c-.18-.13-.35-.26-.51-.4l.05-.06a3.4,3.4,0,0,1,.52-.6l.1-.1a3.48,3.48,0,0,1,.59-.44l.12-.06a3.35,3.35,0,0,1,.62-.25l.32-.07.2,0a2.31,2.31,0,0,1,.37,0,3.18,3.18,0,0,0,1.91-.44,1.45,1.45,0,0,0,.35-.35c.58-.86.05-2.18-.68-4l-.43-1.11a2.12,2.12,0,0,1-.07-1.89,1,1,0,0,1,.23-.23,6.07,6.07,0,0,1,3.12-.44h.64a1.6,1.6,0,0,0,.88-.24,3.35,3.35,0,0,0,1.13-2.08,2.81,2.81,0,0,1,.63-1.4.58.58,0,0,1,.32-.1c.65,0,1.13,1,1.61,2s1.06,2.25,2,2.25a1.43,1.43,0,0,0,.29,0,3.57,3.57,0,0,1,2.12.38,5.88,5.88,0,0,0,2.2.54,3.71,3.71,0,0,0,.74-.07,2,2,0,0,0,.8-.36c1.59-1.18,1.6-4.92,1.6-8,0-.5,0-1,0-1.46.06-2.7.1-4.83-1.85-6-1.41-.87-2.45-2.37-2.41-3.5a1.62,1.62,0,0,1,.63-1.22,2.46,2.46,0,0,1,.45-.28,5.17,5.17,0,0,0,.94-.59,3.25,3.25,0,0,0,0-5.43,2.79,2.79,0,0,0-1.8-.56,10.9,10.9,0,0,0-3,.61,7.56,7.56,0,0,1-1.63.38c-.27,0-.27-.08-.27-.21,0-.92.41-4.44.68-6.73,1.83.06,3.6.09,5,.09a19.27,19.27,0,0,0,2.79-.12c2-.36,9.47,3.32,9.54,3.35a.31.31,0,0,0,.13,0l.15,0a.28.28,0,0,0,.13-.21v0l0,0a22.92,22.92,0,0,1,.58-3.21,11.29,11.29,0,0,1,1-2.75s0,0,0,0a4.76,4.76,0,0,1,.41-.62,7.38,7.38,0,0,0,1.36-5l3.57-.79,2.9-.83,5.62.8a10.81,10.81,0,0,1-1,6.68c-.24.41-.49.77-.72,1.12a9.21,9.21,0,0,0-1.86,6.24c0,2.18-1.38,5.07-2.73,7.87-1.21,2.52-2.36,4.91-2.36,6.57s-1.8,3.22-3.38,4.5c-1.37,1.11-2.56,2.07-2.56,3.14,0,.84-.07,2.12-.15,3.61-.12,2.25-.27,5-.27,7.83,0,1.87-.39,2.22-.87,2.38l-.2.06a1.58,1.58,0,0,0-.31.09c-.68.22-1.17.69-1.17,2.57,0,1.71-.31,2.19-.89,2.38a5.51,5.51,0,0,1-.67.11,5.58,5.58,0,0,0-1.22.26,3.4,3.4,0,0,0-1.38.88,10.12,10.12,0,0,1-2,1.69.9.9,0,0,1-.19.05c-.17,0-.28-.42-.28-1.11a2.12,2.12,0,0,0-2.4-2.11,4.77,4.77,0,0,0-1.8.38,6.93,6.93,0,0,0-1.8,1.09,3.78,3.78,0,0,1-1.38.81,2,2,0,0,1-.41.05,2.59,2.59,0,0,1-1.52-.71,3.76,3.76,0,0,0-1-.63,1,1,0,0,0-.25,0,2,2,0,0,0-.56.11l-.32.12-.31.12a35.51,35.51,0,0,0-5,2.94A20.11,20.11,0,0,0,195.15,298.05Zm6.06,7.57c2.91-2,5.16-3.22,5.93-3.22h0a3.36,3.36,0,0,1,.89.56,3.09,3.09,0,0,0,1.86.81,3.53,3.53,0,0,0,2.19-1,5.2,5.2,0,0,1,3.2-1.33c.9,0,1.85.4,1.85,1.54,0,.46,0,1.67.84,1.67.52,0,1.22-.5,2.61-1.9a3.4,3.4,0,0,1,2.24-1c1-.13,1.66-.32,1.94-1.51a6.71,6.71,0,0,0,.16-1.59,4.53,4.53,0,0,1,.16-1.41,1,1,0,0,1,.84-.66,1.54,1.54,0,0,0,1.28-1.05,5.49,5.49,0,0,0,.27-2c0-2.78.14-5.57.27-7.81.08-1.49.15-2.78.15-3.64a.93.93,0,0,1,0-.29,7.26,7.26,0,0,1,2.28-2.38c1.47-1.19,3.11-2.52,3.5-4.2a3.32,3.32,0,0,0,.1-.77,6.72,6.72,0,0,1,.4-2,44.09,44.09,0,0,1,1.89-4.29,43.39,43.39,0,0,0,2.27-5.29,9.41,9.41,0,0,0,.53-2.85,10.51,10.51,0,0,1,.51-3.65,10,10,0,0,1,1.24-2.25c.24-.35.49-.72.74-1.14.11-.19.22-.41.33-.64a11.59,11.59,0,0,0,.74-6.65v-4.51c.52-.65,4.29-5.3,6.89-5.32,2.77,0,5.23,3.66,5.25,3.69a.26.26,0,0,0,.18.13l13.11,2.54h0a.32.32,0,0,0,.34-.22c.23-1,1-3.83,2-4.48a1.74,1.74,0,0,1,.94-.17,10.94,10.94,0,0,1,1.33.21,10.2,10.2,0,0,0,1.71.24,3,3,0,0,0,1.47-.26l.11,0a15.75,15.75,0,0,1,6.94-2,9.66,9.66,0,0,1,2.37.33,6.17,6.17,0,0,0,1.36.22h0c.86,0,1.46-.46,2-1.55a1.69,1.69,0,0,1,1.68-.79c2.23,0,5.48,1.74,5.51,1.75a.26.26,0,0,0,.19,0h0l5.07-.85a.22.22,0,0,0,.11,0,2.91,2.91,0,0,1,1.23,1.39,8,8,0,0,0,3.07,3.53,5.09,5.09,0,0,0,2.54.8,2.86,2.86,0,0,0,1.14-.22,2.75,2.75,0,0,0,.94-.62,1.78,1.78,0,0,1,.59-.42,1.65,1.65,0,0,1,.69-.15,3.62,3.62,0,0,1,2.11,1,.28.28,0,0,0,.38,0h0a6.46,6.46,0,0,1,.79-.52,3.46,3.46,0,0,1,1.56-.5,1.19,1.19,0,0,1,.68.2c.86.56,4.52,3.58,7.71,6.5,0,.36-.31,2.23-.47,3.89v.13l0,.3,0,.41v0c0,.44-.06.84-.06,1.15h0a2.69,2.69,0,0,0,1.34,2.09c.51.4.94.76.94,1.26a3.7,3.7,0,0,1-1.09,2,3.61,3.61,0,0,0-.89,1.46c-.1.65-1,1.24-2.68,1.75-1,.29-1.35,1.23-1.7,2.16a3.64,3.64,0,0,1-1,1.68c-.83.61-1,1.71-1.22,2.87a8.88,8.88,0,0,1-.55,2.1,15.66,15.66,0,0,0-1.25,6.06c0,1.3-.14,3.66-1.07,4.81a1.52,1.52,0,0,1-.71.57c-1.41.51-1.58,2.85-1.58,4,0,.17,0,.31,0,.42a2.09,2.09,0,0,0-1.51,2.2h0a2.32,2.32,0,0,0,1.54,2.26l.07,0,.23.08.27,4.07a.48.48,0,0,0-.39,0c-.31.11-.66.52-.82,2.68-.43,5.73.85,21.62,3.82,23.25,1.39.76,2.63,3,3.84,5.1l1,1.66a9,9,0,0,1-.38.92.46.46,0,0,1-.12.13l-.09.09a.25.25,0,0,0,0,.07c-1,1-3.83,1.11-5.92,1.11H312a1.44,1.44,0,0,0-1.14.4,2.67,2.67,0,0,0-.37,2c0,.84.08,1.73-.49,2.18a3.85,3.85,0,0,0-1.66,3,1.4,1.4,0,0,0,.8,1.13c.63.33.18,3-.12,4.74a18.54,18.54,0,0,0-.34,2.63,10.88,10.88,0,0,1-.9,3.08,7.39,7.39,0,0,0-.81,3,.72.72,0,0,0,.31.5,6.63,6.63,0,0,1,1.13,1.64c.91,1.55,2,3.46,3.51,3.88a3,3,0,0,0,.85.12h0a4.45,4.45,0,0,0,2.46-.91l.29-.18a2.59,2.59,0,0,1,1-.54.2.2,0,0,1,.11,0c.52.36.52,3.27.52,4.56a3.6,3.6,0,0,1-1.08,2.79,9.75,9.75,0,0,1-2.79.51,4.63,4.63,0,0,1-.54,0,2.37,2.37,0,0,1-1.22-.46,9.8,9.8,0,0,1-2.63-5.55c0-1.23-2.3-1.47-4.92-1.49h-.53c-.95,0-2.21-1.43-3.39-3.81a1,1,0,0,0-.93-.61,2.38,2.38,0,0,0-2,2c0,.56-1.12.63-2.27.64h-.49a7.41,7.41,0,0,1-2.49-.92,7.67,7.67,0,0,0-2.82-1,1.4,1.4,0,0,0-.6.13c-.31.16-.65,0-1-.44a4.12,4.12,0,0,1-.78-2,1.74,1.74,0,0,1,0-.57.7.7,0,0,0-.1-.63,1.28,1.28,0,0,0-1-.33,9.86,9.86,0,0,0-3.57,1,.67.67,0,0,1-.3.08.61.61,0,0,1-.4-.18,3.24,3.24,0,0,1-.75-1.32v0a5.06,5.06,0,0,0-1.87-1.82h0a2.39,2.39,0,0,0-2.1-.07,8.25,8.25,0,0,1-3.51.64c-.4,0-.78,0-1.18,0l-1.28,0a3.25,3.25,0,0,0-2.49,1.23c-.39.41-.69.68-1.08.6-.79-.26-.13-3.42.12-4.62l.11-.51c.32-1.66-1.83-4.46-3.45-5.77-.7-.56,0-3.38.52-5.44.6-2.4.91-3.78.43-4.27-.72-.72-1.14-2.69-1.14-5.29,0-.8-.23-1.27-.72-1.45a1.49,1.49,0,0,0-.59-.1,8,8,0,0,0-1.17.12,15,15,0,0,1-2.39.22,4.94,4.94,0,0,1-2.15-.39,1.52,1.52,0,0,1-.88-.89.29.29,0,0,0-.21-.22h0a16.24,16.24,0,0,0-3.32-.41,5.31,5.31,0,0,0-2.36.44c-1.09.54-1.47,2.35-1.8,3.95-.16.79-.44,2.11-.74,2.11a4.59,4.59,0,0,0-.94-.09,29.17,29.17,0,0,0-7.13,1.32,3.61,3.61,0,0,1-2.58,0c-1.14-.51-1.91-1.89-2.83-4.1a6.89,6.89,0,0,0-2.1-2.93c-.62-.54-.91-.78-.62-2.09.63-2.82-1.17-5.86-1.25-6a.32.32,0,0,0-.12-.11.37.37,0,0,0-.14,0c-.08,0-9-.14-15.51-.14-3.82,0-6.11,0-6.74.14-.08,0-.18.05-.27.07h0a12.48,12.48,0,0,0-3.34,1.84,2.86,2.86,0,0,1-.07-.28A35.7,35.7,0,0,0,201.21,305.62Zm-1.73,76.88a7.83,7.83,0,0,1,1.25-3.05c1-1.87,2.3-4.2,2.3-6.59,0-3.73,2.38-10.06,4.9-13l.71-.83c2.25-2.58,4.59-5.26,4.21-9.32a30.94,30.94,0,0,0-2.24-7.44c-1-2.66-2-5.18-2-6.93a11,11,0,0,1,.8-3.91c.44-1.24.81-2.29.28-3.42l-.34-.73c-1.23-2.52-4.43-9.15-5.58-13.35,2.12-1.49,3.11-1.88,3.58-1.95s2.86-.14,6.66-.14c6,0,14.08.13,15.34.14.34.62,1.6,3.16,1.1,5.43-.3,1.38,0,1.88.54,2.41l.28.24c.13.12.28.24.43.39a6.31,6.31,0,0,1,1.5,2.32,12,12,0,0,0,2.1,3.67c1,1,2.2,1.31,4,.76,3.07-.93,6.68-1.48,7.75-1.22l.16,0c.73,0,1-1.15,1.27-2.58s.66-3.14,1.5-3.55a4.85,4.85,0,0,1,2.11-.38,14.63,14.63,0,0,1,3,.37,2.13,2.13,0,0,0,.52.68,4.41,4.41,0,0,0,3.05.87,16,16,0,0,0,2.47-.21,7.68,7.68,0,0,1,1.09-.13.66.66,0,0,1,.52.14,1.21,1.21,0,0,1,.19.82c0,1.31.12,4.49,1.3,5.67.29.29-.21,2.27-.57,3.73-.64,2.58-1.31,5.24-.32,6h0a6.79,6.79,0,0,1,.58.52c1.4,1.33,2.9,3.5,2.66,4.69l-.1.49c-.47,2.21-.84,4.38-.08,5.1a.92.92,0,0,0,.4.22,1.43,1.43,0,0,0,.29,0,2,2,0,0,0,1.33-.79,2.74,2.74,0,0,1,2.09-1.07l1.27,0,1.19,0a9.06,9.06,0,0,0,3.73-.68,1.86,1.86,0,0,1,1.41,0h0l-1.42,13.31-1.59,1.61-10.05-.35h0a.31.31,0,0,0-.2.07.28.28,0,0,0-.09.19l-.7,22.83a.3.3,0,0,0,.06.18l7.54,10.33c-.63.13-1.14.26-1.45.36a30.67,30.67,0,0,1-7.67,1.11,6.82,6.82,0,0,1-2.73-.4c-.65-.33-2.28-.49-4.95-.49-4.06,0-9.27.38-10.15.45l-2.31-2.32a.29.29,0,0,0-.21-.08H218.62a9.59,9.59,0,0,1-6-1.65c-2.07-1.38-4.15-1.51-6.79-.38a2.53,2.53,0,0,1-.88.23c-.34,0-.46-.18-.65-.59a1.5,1.5,0,0,0-1.44-1,2.65,2.65,0,0,0-1.87.76,3.37,3.37,0,0,0-.76,1l-1.63.42A59.16,59.16,0,0,0,199.48,382.5ZM219.18,454c-.11-.95-.2-1.8-.3-2.52-.61-4.16-1.34-8.36-2.46-10.82-.51-1.12-.33-3-.14-5a17.84,17.84,0,0,0-.15-6.53,33.91,33.91,0,0,0-3.11-6.3,41.37,41.37,0,0,1-3.88-8,53.78,53.78,0,0,0-6.75-14.08c-2.31-3.14-3.88-6.68-3.81-8.58l1.95-.5a.27.27,0,0,0,.19-.17l.14-.26.11-.18,0-.06a2.27,2.27,0,0,1,1.86-1.05c.56,0,.71.3.92.73a1.24,1.24,0,0,0,1.16.91,2.86,2.86,0,0,0,1.1-.28,6.06,6.06,0,0,1,5.53-.09,5.84,5.84,0,0,1,.71.43,10.36,10.36,0,0,0,6.33,1.74h23.54l2.32,2.33a.24.24,0,0,0,.21.08h.08c.7-.05,6-.44,10.16-.44,3.17,0,4.3.23,4.69.43a7.16,7.16,0,0,0,3,.46,31.85,31.85,0,0,0,5.86-.65,17.93,17.93,0,0,0,2-.5c.36-.11,1.05-.27,1.84-.43h0a71,71,0,0,1,8.73-1.19h.2l1.06,0c2,0,2.13.38,2.13.38a3.3,3.3,0,0,0,.42,1.4l-.29.07h0c-1.09.26-2.2.53-3.08.64a5.91,5.91,0,0,1-.79.06c-2.49,0-4.82,2.84-5.09,3.16a.21.21,0,0,1-.18.11c-.35,0-.92-.59-1.44-1.17l-.21-.24a8.48,8.48,0,0,0-1.43-1.4,1.48,1.48,0,0,0-.82-.2c-1.29,0-3.49.93-5.26,1.67l-.57.24a12.94,12.94,0,0,1-1.28.49,60.69,60.69,0,0,1-6.43.79.28.28,0,0,0-.27.28v23.54c0,1.21-2,1.34-3.8,1.46s-3.1.2-3.1,1.19v45.24c0,1.27-1.41,2.14-2.64,2.92a6,6,0,0,0-1.77,1.39c-.14.22-.64.48-2.14.48-1,0-2.14-.11-3.28-.21s-2.18-.2-3.06-.2c-1.65,0-2-1-2.41-2.43a7.84,7.84,0,0,0-1-2.32,1.8,1.8,0,0,0-1.49-.87,3.39,3.39,0,0,0-2.68,2.22,2.23,2.23,0,0,0-.2.82.79.79,0,0,1,0,.17h0l0,.1v0l0,.05,0,0a.1.1,0,0,1-.05,0h0a5.17,5.17,0,0,1-2.09,0l-.19,0a30.15,30.15,0,0,0-4.23-5.41C220.41,465,219.67,458.4,219.18,454Zm115,17.93-.54.49c-2.5,2.27-6.69,6.07-9.34,10.52-2.74,4.61-11.12,15.09-16.27,19.94s-11.42,8.83-13.9,8.83h-2c-1.82,0-3.78.17-4,2.23-.06.68-.33.82-.74.82a5.39,5.39,0,0,1-1.08-.18,3.45,3.45,0,0,0-2.41.06,7,7,0,0,1-6.34.78,19.17,19.17,0,0,0-10.72.09,8.06,8.06,0,0,0-2.92,1.48,4.36,4.36,0,0,1-3.28,1c-3.1,0-7.06.39-8.35,2.25a2.58,2.58,0,0,1-2.16,1.14,2.3,2.3,0,0,1-1.84-.84l-.07-.1c-1-1.34-2.16-2.85-3.78-3a1.14,1.14,0,0,1-1-.61,2.6,2.6,0,0,0-1.77-1.12c-.69-.13-.73-.44-.77-1.45a7.61,7.61,0,0,0-1.28-4.3c-1.73-2.66-1.78-3.88-1.53-4.43a1.44,1.44,0,0,1,1.22-.72,1.57,1.57,0,0,0,1.19-.69c.67-1.07,0-3.08-.74-5.41l-.21-.65a30.22,30.22,0,0,0-2.5-5,42.23,42.23,0,0,1-4.09-8.62,48.05,48.05,0,0,0-4.9-10.53,10.47,10.47,0,0,0,1.09.07h.09c.38,0,1.53,0,1.53-1.13a3.16,3.16,0,0,1,1.88-2.4,1.34,1.34,0,0,1,.39-.07,1.26,1.26,0,0,1,1,.62,7.64,7.64,0,0,1,.93,2.16c.44,1.4.89,2.83,2.95,2.83.85,0,1.9.1,3,.19s2.34.21,3.34.21a8.14,8.14,0,0,0,1.42-.1,1.74,1.74,0,0,0,1.23-.64,6.21,6.21,0,0,1,1.6-1.22c1.3-.82,2.9-1.82,2.9-3.4V446.49h0l.52.21.39.18.09,0c1.12.56,1.53,1.05,1.67,1.39l0,.1c.69,1.73,2.54,6.31,2.18,7.41a.84.84,0,0,1-.66.62,1,1,0,0,0-.77,1.1c0,.25,0,.53-.08.83a2.48,2.48,0,0,0,.24,2,1.29,1.29,0,0,0,.56.36,2.36,2.36,0,0,0,.8.12,15.67,15.67,0,0,1,2,.21,17.49,17.49,0,0,0,2.47.24,3.34,3.34,0,0,0,2.67-.94c.41-.48,1.1-1.12,1.9-1.86,2-1.88,4.31-4,4.46-5.41.06-.55.38-2.86,1.57-3.72a1.6,1.6,0,0,1,.94-.31,3.18,3.18,0,0,1,1.67.6l.83.54c2.71,1.78,3.28,2.15,7.44,2.15,2.71,0,4.33-.06,5.38-.86a4.31,4.31,0,0,0,1.42-2.4,16,16,0,0,0,.44-2.36c.13-1.05.21-1.77.66-2.17a1.83,1.83,0,0,1,1.23-.33,7.12,7.12,0,0,0,3.68-1.21c1.43-.91,2.51-2.21,2.51-3.36a5.67,5.67,0,0,1,1.79-4.1,1.29,1.29,0,0,1,.74-.25,6.78,6.78,0,0,0,3.39-1.34,5.42,5.42,0,0,0,2.4-3,1.31,1.31,0,0,1,.48-.82,4.08,4.08,0,0,1,1.59-.56,4.76,4.76,0,0,0,1.68-.56,1.8,1.8,0,0,0,.44-.38c.47-.56,1.34-1.82,2.12-3a6.81,6.81,0,0,0,2.94.34c1.27,0,3,0,3.31.47.44.7,2,.86,4.47,1a12.2,12.2,0,0,1,3.41.5l0,0,.15.1a26.18,26.18,0,0,1,.91,3.33c1.15,4.81,2.21,8.84,3.45,9.56,1.51.88.78,10.36.48,12.19a3.26,3.26,0,0,0,0,.73c-1.21-.82-2.54-1.72-3.57-1.72a4.13,4.13,0,0,0-2.42,1.43c-1.35,1.34-2.54,3.24-2.54,3.82,0,.89,2.14,6.48,4.49,6.64a10.78,10.78,0,0,0,1.11.05c1.16,0,2.48-.16,2.9-1.3a2.36,2.36,0,0,0,.13-.58,1.77,1.77,0,0,1,.17-.57.93.93,0,0,0,.05-.1l.14-.22a2.26,2.26,0,0,1,.2-.26l.06-.07,0,0,0,.16a.27.27,0,0,0,.11.19.29.29,0,0,0,.17.06s0,0,0,0a38,38,0,0,1,4.79-.38C336.57,466.85,335.46,470.77,334.17,472Zm55.95-111.63c-.43,3.48,1.06,11.78,1.74,13.54s-6.47,11.41-10.73,13.95a25.22,25.22,0,0,1-5.75,2.3,22.42,22.42,0,0,0-7.65,3.51,19.07,19.07,0,0,0-4.55,4.92,11.42,11.42,0,0,1-2.64,3,8.77,8.77,0,0,1-2.82,1.36,4.22,4.22,0,0,0-3.05,2.39c-.28.53-.5,1-.7,1.38-.78,1.61-1,2-2.21,2.11a1.72,1.72,0,0,0-1.36.74c-.64.9-.64,2.61,0,4.8a11.4,11.4,0,0,0,1.26,2.77,14.36,14.36,0,0,1,2.07,5.92,32.78,32.78,0,0,0,1,4.66c.45,1.66.69,2.58.24,3.82a19.77,19.77,0,0,0-.45,5.56,19.1,19.1,0,0,1-.26,4.4c-.55,1.83-2.44,3-8.44,5.19-5.13,1.9-11.77,5.83-10.92,8.28a1.45,1.45,0,0,0,1.55,1.06h.42a.72.72,0,0,1,.56.15,1.9,1.9,0,0,1,.2,1.32c0,.81-.14,1.94-.28,3.15h0a36.62,36.62,0,0,0-4.58.35c0-.13,0-.27,0-.4v0l0-.18c-.13-1.05-.34-2.77-.49-4.25a18.52,18.52,0,0,1-.16-2.66c0-.12,1.38-11.54-.75-12.79-1.13-.64-2.42-6-3.19-9.2a20.93,20.93,0,0,0-1-3.46.32.32,0,0,0-.08-.12l.06-.06,1.81-1.71a53.22,53.22,0,0,0,4.9-5,7,7,0,0,0,1.08-4.22c0-1.13.06-2,.66-2.39,1.28-.77,4.22-4,4-5.18a.61.61,0,0,0-.47-.5c-.37-.1-.47-.66-.6-1.57a5.71,5.71,0,0,0-1.39-3.53c-.72-.72-.39-1.18.4-2.15a4.93,4.93,0,0,0,1.5-3.76,43.41,43.41,0,0,1,0-5.09c.14-3.41.19-5.36-.46-5.79a8.07,8.07,0,0,0-2.2-.68,17.76,17.76,0,0,1-5.71-2.06c-2.55-1.7-7.75-2.1-8.79-2.17l-.75-1.67a.28.28,0,0,0,.21-.11.29.29,0,0,0,0-.24L320,375.15c5.1-1.91,17.6-6.53,18.65-6.76h0a.8.8,0,0,1,.19.11c.28.21.71.61,1.09.95a16.08,16.08,0,0,0,2.12,1.74,2.28,2.28,0,0,0,1.14.44h.16a7.21,7.21,0,0,0,1-.26,9,9,0,0,1,2.43-.49,1.87,1.87,0,0,1,1.15.31,1.68,1.68,0,0,1,.57,1c.34,1.55-.32,3.86-.85,5.72a7.59,7.59,0,0,0-.56,3.22c.25.75,4.62,7.66,6.17,8.51a.62.62,0,0,0,.3.11c.17,0,.32-.1.32-.23s0,0,0,0v0a4.34,4.34,0,0,0-.05-1.92,7.19,7.19,0,0,1,0-3.36,2.07,2.07,0,0,1,.56-.84,3.46,3.46,0,0,1,1.74-.74,2.2,2.2,0,0,0,2-1.38,6.45,6.45,0,0,0,.28-2.62,12.47,12.47,0,0,1,.42-4,2.71,2.71,0,0,0-.68-3,36.54,36.54,0,0,0-4.1-4,26,26,0,0,0-1.37-5.09c-1.12-3.34-2.37-7.13-1.58-9.18a7.29,7.29,0,0,0,.37-2.17c1.38.18,3,.37,3.63.37a3.11,3.11,0,0,0,1.33-.42,4.35,4.35,0,0,1,1.82-.54,2.68,2.68,0,0,1,.83.14,1.85,1.85,0,0,1,.62.34,1.52,1.52,0,0,1,.37.71,1.42,1.42,0,0,0,.33.66,1.3,1.3,0,0,0,1,.33,11.38,11.38,0,0,0,2.1-.28l.94-.18a9.79,9.79,0,0,1,2.78-.37l.15,0a13.65,13.65,0,0,0,2.42.31c1.1,0,1.71-.33,1.82-1,.19-1.18.71-2.45,1.56-2.45a1,1,0,0,1,.32.05,7.4,7.4,0,0,1,1,.39,3.78,3.78,0,0,0,1.62.49,2.62,2.62,0,0,0,1.71-.74,3.69,3.69,0,0,1,2.73-.61h.51c.7,0,1.38-.08,1.69-.71.09-.16.82-.88,6.77-3.6,0,1.71.17,4.06.33,6.56A69.84,69.84,0,0,1,390.12,360.32ZM379,313.89a5.52,5.52,0,0,0,2.52,3.08c1.28.94,1.87,1.43,1.17,2.48-1.34,2-2,4-1.66,5a.88.88,0,0,0,.6.6c.71.22.62,2.47.54,4.65l0,.75a4.43,4.43,0,0,0,1.09,3,6.52,6.52,0,0,1,1.45,4c.1,2.22,1.44,2.86,2.62,3.43s2.06,1,2.21,2.6c-6.82,3.09-7.15,3.72-7.27,4a.68.68,0,0,1-.36.3,2.76,2.76,0,0,1-.8.08h-.49a7,7,0,0,0-2,.15,2.92,2.92,0,0,0-1.15.61,2.81,2.81,0,0,1-.68.46,1.53,1.53,0,0,1-.62.13,3.4,3.4,0,0,1-1.38-.43,6,6,0,0,0-1.07-.42,1.58,1.58,0,0,0-.47-.07,1.46,1.46,0,0,0-.52.09c-1.1.4-1.5,2.08-1.63,2.85,0,.2-.21.32-.44.4a3.28,3.28,0,0,1-.78.08,12,12,0,0,1-2.31-.3l-.15,0a10.49,10.49,0,0,0-3,.37,17.11,17.11,0,0,1-2.93.44c-.6,0-.65-.17-.78-.58a1.88,1.88,0,0,0-1.37-1.43,3.24,3.24,0,0,0-2,0,9.19,9.19,0,0,0-1.05.43,3,3,0,0,1-1.08.37c-.52,0-2.15-.19-3.6-.37,0-4.53-1.95-11.22-3.92-13.23a1.65,1.65,0,0,0-2.38-.3,32.87,32.87,0,0,0-4.31,0c-.14-.24-.28-.45-.4-.62-.82-1.07-7.19-3.61-9-3.95a12.93,12.93,0,0,1-2.65-1.12,9.52,9.52,0,0,0-3.71-1.35,3.66,3.66,0,0,1-1.47-.56,1.75,1.75,0,0,0,1.1-.11,1.39,1.39,0,0,0,.86-.87c.23-.8-.45-1.81-1.17-2.87a10.64,10.64,0,0,1-1.21-2.1,11.42,11.42,0,0,1-.42-2c-.31-2.09-.7-4.69-3.31-7.07-1.85-1.7-3.13-8-4.06-12.74a23.44,23.44,0,0,1,2.72-1.6c.78-.32,1.91-1.79,3-3.4,1.36-2.08,2.59-4.42,2.82-4.85a.29.29,0,0,0-.1-.38l-1.6-1a12.29,12.29,0,0,0-.24-3.17,3.53,3.53,0,0,0,2.46-1.08l0,0a1.3,1.3,0,0,0,.14-.32.84.84,0,0,0,.06-.14c.36-1.83-1-4.63-1.07-4.72l-1-2.67c1.51-.42,2.84-.75,2.83-.75l5.29-.43c-1.3,3.83-2.07,8.54-1,10.07a1.18,1.18,0,0,0,1.54.37,6.78,6.78,0,0,1,2.62-.46,22.58,22.58,0,0,1,4.6.66,11.31,11.31,0,0,0,3.84.44,1,1,0,0,0,.82-.56c.19-.53-.27-1.17-.76-1.85-.38-.53-.87-1.2-.78-1.57,0,0,.05-.18.33-.3,1.87-.87,3.18-3.24,3.44-6.27l25.35,13.47-.34,4a.29.29,0,0,0,.12.26c.06,0,5.76,4.21,11.33,8.06C379.67,309.21,378.67,312.7,379,313.89Zm17.89-31.58c-1,1.68-1.6,1.68-1.89,1.68h-.25a1.58,1.58,0,0,0-1.59.73,5.14,5.14,0,0,1-1.74,1.28,6.05,6.05,0,0,0-2.64,2.29,142.49,142.49,0,0,0-6.6,14.65c-5-3.49-10.15-7.22-11.08-7.89l.22-3,.09-1.13a.26.26,0,0,0-.15-.28L345.47,277c0-.16,0-.32,0-.48,0-1.9,1.43-2.39,2.82-2.88,1-.33,1.89-.65,2-1.49.2-1.1-2.09-2.12-4.41-2.75,1-2.69,1.59-3.61,1.88-3.9,1.65-1.67,4.26-5.24,4.64-8.25a51.86,51.86,0,0,0,.35-5.65.29.29,0,0,0-.09-.21L350,249l-.68-4.81a.32.32,0,0,0-.09-.17l-2.86-2.6a2.22,2.22,0,0,0,.68-1c.27-1.07,3.81-3.16,5.26-3.45,2-.4,3.31-.28,3.84.37a2.58,2.58,0,0,0,.42.37l.14.09a7.44,7.44,0,0,0,1.25.65l.09,0,.67.25a10.28,10.28,0,0,1,1.41.62,7.4,7.4,0,0,0,2.59.39c1.56.08,3.52.18,4.37.94,1.45,1.31,6.44,4.64,8.09,4.64s6.91.77,7.75,1.33a.86.86,0,0,0,.43.13,1,1,0,0,0,.42-.12,3.11,3.11,0,0,0,.89-.77l.44-.49a10.94,10.94,0,0,1,2.69-2.41l.65-.35a10.88,10.88,0,0,1,4.07-1.28c.3,0,.68.05.79.29a3.18,3.18,0,0,0,2.75,1.75,2.05,2.05,0,0,0,1-.23h0a2.87,2.87,0,0,1,.37-.16h0c.16-.06.36-.12.58-.18h0l.74-.2.09,0,.52-.13.32-.08-.5.73-2.37,3.48-3.15,4.91a.23.23,0,0,0-.05.15l.36,24.59a.42.42,0,0,0,0,.15l3.3,5.22C397.15,281.84,397,282.09,396.84,282.31Zm67.55-91.6a40.4,40.4,0,0,1-1.36,6.84,21.33,21.33,0,0,0-1,5.17c.09,2.27-3.81,10.16-6.33,13.41-2.27,3-5.7,7.39-6.23,10.79-.5,3.19-4.4,8.16-7.84,12.55-5.46,6.95-13.69,15.05-16.94,16.66l-.14.07c-3.18,1.58-6.17,3.08-11.91,9.11-1.74,1.84-3.71,3.85-5.62,5.78-3.84,3.9-7.47,7.59-9.36,10l-3.13-5-.35-24.41,3.11-4.84,3.22-4.72a25.72,25.72,0,0,1,5.29-.81h.09c.54,0,1.24-.59,2.21-1.4,1.67-1.4,4-3.32,6.7-3.32,1.05,0,1.9,0,2.65.08.55,0,1,0,1.47,0a4.33,4.33,0,0,0,3.68-1.59c1.87-2,16.86-17.17,18.21-18.22a1.42,1.42,0,0,0,.47-.54.71.71,0,0,0,.05-.55c-.32-1-2.82-1-3.1-1-1,0-4.1,0-9.31-2.11-4.75-1.93-12.45-4.56-13.89-4.88-.67-.15-1.64-1.22-2.48-2.18a8.69,8.69,0,0,0-2-1.9c-1.05-.53-3.44-4.56-4.13-6.11a.6.6,0,0,1,0-.31s0,0,0-.05a.94.94,0,0,1,.07-.22,7.55,7.55,0,0,1,.93-1.64v0s.05,0,.06,0a25.84,25.84,0,0,1,2.64-3.18,8.58,8.58,0,0,1,3.19,3.67,5.9,5.9,0,0,0,5.68,3.25c2.39,0,5-1,6.14-2.27a3.35,3.35,0,0,1,2.73-.85c.49,0,1,0,1.53.06s1.07.06,1.58.06a4.34,4.34,0,0,0,3.05-.89c2-1.94,5.5-2.36,10.76-2.46,5.63-.1,14.46-1.69,15.66-4.32a2.13,2.13,0,0,1,1.87-1.32,1.79,1.79,0,0,1,1.3.59A3.75,3.75,0,0,1,464.39,190.71Z",
    transform: "translate(-0.01 0)",
    fill: borderColor || "black"
  })), /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M456.1,366c-.14-3.12-1.9-6.08-3.33-8.45a14.55,14.55,0,0,1-1.53-3c-.28-1-.57-1.4-1-1.4s-.85.81-1.25,1.85a5.52,5.52,0,0,1-.7,1.46c-.88.87-1.3,3.42-1.09,5.11a1.73,1.73,0,0,1-.52,1.32,4.43,4.43,0,0,1-3,1.41h-.27a4,4,0,0,0-3.53,1.35,2.17,2.17,0,0,0-.21,2.08,1.57,1.57,0,0,1-.15,1.74,1.55,1.55,0,0,0,0,1.95,1.3,1.3,0,0,1,0,1.32c-.68,1.26-2.84,2.4-4.8,2.54-1.38.1-2.85,1.22-4.42,2.41s-3.25,2.47-4.7,2.47l-.33,0a4.21,4.21,0,0,0-.72-.05,12.43,12.43,0,0,0-4,.91,10.81,10.81,0,0,1-3.39.81,3.58,3.58,0,0,1-.58-.05l-.29,0c-1.47,0-1.59,1.8-1.72,3.89a13,13,0,0,1-1.12,5.41c-2.22,4-.85,8.62.79,12.62,1.81,4.41,3.23,7.9-1.58,13.7A16,16,0,0,0,410,434.14a30.46,30.46,0,0,1,1.6,5.52c.63,2.85,1.29,5.8,2.92,7.54a15.4,15.4,0,0,0,9.61,4,3.9,3.9,0,0,0,2.91-.93,3.61,3.61,0,0,1,3-1,4.66,4.66,0,0,0,4.11-1.68c1.73-2,4.17-10,6.73-18.51,1.09-3.57,2.21-7.25,3.25-10.4,3.86-11.55,7.92-24.11,7.52-26.93a5.91,5.91,0,0,1,.73-3.23c.58-1.34,1.18-2.73.47-4.53a5.21,5.21,0,0,1,.11-4.32c.1-.13.28-.35.49-.35s.48.23.72.66a3.16,3.16,0,0,0,2.41,1.86c1.05,0,1.84-1,2.17-2.78s-.38-4.09-1.15-6.53A26.07,26.07,0,0,1,456.1,366Zm2.12,13c-.27,1.48-.86,2.32-1.61,2.32s-1.33-.58-1.91-1.59c-.36-.62-.78-.94-1.21-.94a1.16,1.16,0,0,0-1,.6,5.71,5.71,0,0,0-.16,4.84c.63,1.58.1,2.8-.46,4.09a6.2,6.2,0,0,0-.76,3.55c.42,2.91-4.73,18.36-7.5,26.65-1,3.15-2.16,6.85-3.25,10.41-2.44,8-5,16.37-6.62,18.3a4.1,4.1,0,0,1-3.69,1.48,4.19,4.19,0,0,0-3.39,1.13,3.64,3.64,0,0,1-2.57.79,14.74,14.74,0,0,1-9.2-3.83c-1.51-1.64-2.13-4.37-2.78-7.28a29.06,29.06,0,0,0-1.63-5.63,15.37,15.37,0,0,1,2.59-16.15c5-6.07,3.47-9.87,1.67-14.28-1.59-3.88-2.93-8.35-.83-12.13a13.18,13.18,0,0,0,1.2-5.65c.13-2.08.25-3.36,1.15-3.36a.71.71,0,0,1,.2,0,4.91,4.91,0,0,0,.67.05,11.35,11.35,0,0,0,3.57-.85,10.48,10.48,0,0,1,4.48-.84c1.77.25,3.65-1.19,5.46-2.56,1.49-1.14,2.91-2.22,4.12-2.29,2.18-.16,4.49-1.4,5.26-2.83a1.87,1.87,0,0,0,0-1.87c-.41-.74-.26-1,0-1.35a2.08,2.08,0,0,0,.22-2.25,1.61,1.61,0,0,1,.14-1.56,3.49,3.49,0,0,1,3-1.1,4.74,4.74,0,0,0,3.7-1.59,2.23,2.23,0,0,0,.67-1.76c-.21-1.68.24-3.94.93-4.64a5.12,5.12,0,0,0,.83-1.65,6.09,6.09,0,0,1,.7-1.5s.19.11.43,1a15.65,15.65,0,0,0,1.6,3.11c1.39,2.32,3.13,5.22,3.25,8.18a26.74,26.74,0,0,0,1.5,6.68C457.83,375.13,458.53,377.35,458.22,379Z",
    transform: "translate(-0.01 0)",
    fill: borderColor || "black"
  }))), (selection || false) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M105.62,282.69a.92.92,0,0,1-.42-.1,1,1,0,0,1-.48-1.33,34.66,34.66,0,0,1,2.58-4.46,1,1,0,1,1,1.65,1.11,33,33,0,0,0-2.42,4.2A1,1,0,0,1,105.62,282.69Zm5.53-8.31a1,1,0,0,1-.64-.24,1,1,0,0,1-.12-1.41,45.83,45.83,0,0,1,3.53-3.7,1,1,0,0,1,1.37,1.45,43.58,43.58,0,0,0-3.37,3.55A1,1,0,0,1,111.15,274.38Zm7.29-6.83a1,1,0,0,1-.6-1.8,38.48,38.48,0,0,1,4.33-2.77,1,1,0,1,1,1,1.76,36.57,36.57,0,0,0-4.1,2.61A1,1,0,0,1,118.44,267.55Zm8.77-4.74a1,1,0,0,1-.95-.66,1,1,0,0,1,.61-1.28,30.17,30.17,0,0,1,5-1.3,1,1,0,0,1,.33,2,26.43,26.43,0,0,0-4.66,1.21A1,1,0,0,1,127.21,262.81Zm14.76-1a.71.71,0,0,1-.2,0,26.86,26.86,0,0,0-4.78-.56,1,1,0,0,1,0-2,28,28,0,0,1,5.14.6,1,1,0,0,1-.21,2Z",
    transform: "translate(-0.01 0)",
    fill: selectColor || 'black'
  })), /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M141.47,267.28a1,1,0,0,1-.39-1.92l4.6-1.95a1,1,0,1,1,.78,1.84l-4.6,1.95A.91.91,0,0,1,141.47,267.28Zm7.26-4.65a1,1,0,0,1-.91-.58l-2.11-4.53a1,1,0,0,1,.48-1.33,1,1,0,0,1,1.33.49l2.11,4.53a1,1,0,0,1-.48,1.33A1.06,1.06,0,0,1,148.73,262.63Z",
    transform: "translate(-0.01 0)",
    fill: selectColor || "black"
  }))), /*#__PURE__*/_react["default"].createElement("text", {
    transform: "translate(36.58 305.95)",
    fontSize: "13",
    fill: selectColor || 'black',
    fontFamily: "sans-serif"
  }, "Ch", /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "15.27",
    y: "0",
    letterSpacing: "-0.02em"
  }, "o"), /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "22.5",
    y: "0",
    letterSpacing: "0em"
  }, "ose"), /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "48",
    y: "0",
    letterSpacing: "-0.04em"
  }, "a"), /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "59.8",
    y: "0",
    letterSpacing: "-0.04em"
  }, "c"), /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "65.75",
    y: "0"
  }, "ount"), /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "89.5",
    y: "0",
    letterSpacing: "-0.06em"
  }, "r"), /*#__PURE__*/_react["default"].createElement("tspan", {
    x: "95.11",
    y: "0"
  }, "y")))), /*#__PURE__*/_react["default"].createElement("g", null, animated && selectedCountries.length !== 0 && selectedCountries.slice(1).map(function (v, i) {
    return /*#__PURE__*/_react["default"].createElement("path", {
      className: "animationLines",
      key: selectedCountries.indexOf(v),
      d: "M".concat(findCountry(selectedCountries[0]).x, " ").concat(findCountry(selectedCountries[0]).y, " Q").concat(calcCurve(findCountry(selectedCountries[0]).x, findCountry(selectedCountries[0]).y, findCountry(v).x, findCountry(v).y)[0], " ").concat(calcCurve(findCountry(selectedCountries[0]).x, findCountry(selectedCountries[0]).y, findCountry(v).x, findCountry(v).y)[1], " ").concat(findCountry(v).x, " ").concat(findCountry(v).y),
      fill: "transparent",
      style: {
        stroke: "".concat(animeLineColor || "black"),
        strokeWidth: "1.5",
        strokeDasharray: "8"
      }
    });
  })))));
};

AfricaMap.propTypes = {
  size: _propTypes["default"].number,
  borderColor: _propTypes["default"].string,
  fillColor: _propTypes["default"].string,
  selectColor: _propTypes["default"].string,
  animated: _propTypes["default"].bool,
  animeStartFrom: _propTypes["default"].string,
  animeLineColor: _propTypes["default"].string,
  animeTime: _propTypes["default"].number,
  selection: _propTypes["default"].bool,
  selected: _propTypes["default"].array
};
var _default = AfricaMap;
exports["default"] = _default;
