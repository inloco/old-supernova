"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var label = _props.label;
      var addon = _props.addon;
      var value = _props.value;
      var icon = _props.icon;


      return _react2.default.createElement(
        "div",
        { className: "user-credits" },
        _react2.default.createElement(
          "div",
          { className: "user-credits-cash" },
          _react2.default.createElement(
            "p",
            { className: "credits-title" },
            label
          ),
          _react2.default.createElement("span", { className: "icon-nav " + icon }),
          _react2.default.createElement(
            "span",
            { className: "user-currency" },
            addon
          ),
          _react2.default.createElement(
            "span",
            { className: "user-cash" },
            value
          ),
          _react2.default.createElement("span", { className: "icon-drop icon-expand-downs" })
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

Item.propTyes = {
  label: _react.PropTypes.string,
  addon: _react.PropTypes.string,
  value: _react.PropTypes.string,
  icon: _react.PropTypes.string
};
exports.default = Item;