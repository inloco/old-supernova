"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _baseFactory = require("./base-factory");

var _baseFactory2 = _interopRequireDefault(_baseFactory);

var _Main = require("../../../src/components/Sidebar/Main");

var _Main2 = _interopRequireDefault(_Main);

var _Item = require("../../../src/components/Sidebar/Item");

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

jest.unmock("../../../src/components/Sidebar/Main");
jest.unmock("../../../src/components/Sidebar/Item");
jest.unmock("./base-factory");

var SidebarFactory = function (_Factory) {
  _inherits(SidebarFactory, _Factory);

  function SidebarFactory() {
    _classCallCheck(this, SidebarFactory);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SidebarFactory).apply(this, arguments));
  }

  _createClass(SidebarFactory, [{
    key: "template",
    value: function template() {
      return _react2.default.createElement(
        _Main2.default,
        { currentPath: "#A" },
        _react2.default.createElement(
          _Item2.default,
          { label: "Apps", href: "#A", icon: "icon-nav-campaigns" },
          _react2.default.createElement(_Item2.default, { label: "New App", href: "A1" }),
          _react2.default.createElement(_Item2.default, { label: "New Ad Unit", href: "#A2" })
        ),
        _react2.default.createElement(_Item2.default, { label: "Earnings", href: "#B", icon: "icon-nav-cash" })
      );
    }
  }]);

  return SidebarFactory;
}(_baseFactory2.default);

exports.default = SidebarFactory;