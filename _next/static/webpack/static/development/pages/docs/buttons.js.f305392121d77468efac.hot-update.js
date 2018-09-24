webpackHotUpdate("static/development/pages/docs/buttons.js",{

/***/ "./shared/withDocsLayout.jsx":
/*!***********************************!*\
  !*** ./shared/withDocsLayout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _withDocsLayout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withDocsLayout.scss */ "./shared/withDocsLayout.scss");
/* harmony import */ var _withDocsLayout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_withDocsLayout_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withLayout */ "./shared/withLayout/index.jsx");

var _jsxFileName = "/home/albnnc/code/matilda/site/shared/withDocsLayout.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var chapters = [{
  name: 'Usage',
  href: 'docs/usage'
}, {
  name: 'Buttons',
  href: 'docs/buttons'
}, {
  name: 'Cards',
  href: 'docs/cards'
}];

var withDocsMarkup = function withDocsMarkup(_ref) {
  var header = _ref.header,
      pathname = _ref.pathname;
  return function (Component) {
    return function (props) {
      var openIndex = chapters.findIndex(function (ch) {
        return ch.name === header;
      });
      var next = openIndex >= 0 && openIndex + 1 < chapters.length ? chapters[openIndex + 1] : undefined;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "DocsLayout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
        fluid: true,
        className: "bg-dark py-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "display-4 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, header))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 8,
        md: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 4,
        md: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "side-navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, chapters.map(function (ch) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: ch.href,
          key: ch.name,
          className: pathname.includes(ch.href) ? 'active' : undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, ch.name);
      })))), next && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "next-link-wrapper mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: next.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Next:"), next.name))));
    };
  };
}; // This HOC uses another one, because withLayout and withDocsLayout
// both have to be the top one HOC. The first one is because
// of the markup, and the second one because it needs access to
// getInitialProps method.


/* harmony default export */ __webpack_exports__["default"] = (function (header) {
  return function (Component) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithDocsLayout, _React$Component);

      function WithDocsLayout() {
        _classCallCheck(this, WithDocsLayout);

        return _possibleConstructorReturn(this, _getPrototypeOf(WithDocsLayout).apply(this, arguments));
      }

      _createClass(WithDocsLayout, [{
        key: "render",
        value: function render() {
          var pathname = this.props.pathname;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Object(_withLayout__WEBPACK_IMPORTED_MODULE_5__["default"])(withDocsMarkup({
            header: header,
            pathname: pathname
          })(Component)), this.props);
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
            var pathname;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    pathname = _ref2.pathname;
                    return _context.abrupt("return", {
                      pathname: pathname
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return WithDocsLayout;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _defineProperty(_class, "propTypes", {
      // going to be passed by Next.js
      pathname: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
    }), _defineProperty(_class, "defaultProps", {
      pathname: ''
    }), _temp;
  };
});

/***/ })

})
//# sourceMappingURL=buttons.js.f305392121d77468efac.hot-update.js.map