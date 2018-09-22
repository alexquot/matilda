webpackHotUpdate("static/development/pages/docs.js",{

/***/ "./shared/config.jsx":
/*!***************************!*\
  !*** ./shared/config.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "../node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, publicRuntimeConfig));

/***/ }),

/***/ "./shared/withLayout/index.jsx":
/*!*************************************!*\
  !*** ./shared/withLayout/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./shared/config.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./shared/withLayout/Footer.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./shared/withLayout/Header.jsx");
/* harmony import */ var _ignoreEmptyHref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ignoreEmptyHref */ "./shared/withLayout/ignoreEmptyHref.jsx");
/* harmony import */ var _scss_matilda_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../scss/matilda.scss */ "../scss/matilda.scss");
/* harmony import */ var _scss_matilda_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_matilda_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/albnnc/code/matilda/site/shared/withLayout/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithLayout, _React$Component);

      function WithLayout() {
        _classCallCheck(this, WithLayout);

        return _possibleConstructorReturn(this, _getPrototypeOf(WithLayout).apply(this, arguments));
      }

      _createClass(WithLayout, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          Object(_ignoreEmptyHref__WEBPACK_IMPORTED_MODULE_6__["default"])();
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex flex-column h-100",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("base", {
            href: _config__WEBPACK_IMPORTED_MODULE_3__["default"].baseHref,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            charSet: "utf-8",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, "Matilda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=cyrillic",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
            href: "https://fonts.googleapis.com/css?family=Roboto+Mono",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "mt-auto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }))));
        }
      }]);

      return WithLayout;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
});

/***/ })

})
//# sourceMappingURL=docs.js.751c0e6700d3db512143.hot-update.js.map