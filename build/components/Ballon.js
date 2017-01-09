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

var Ballon = function (_React$Component) {
  _inherits(Ballon, _React$Component);

  function Ballon() {
    _classCallCheck(this, Ballon);

    return _possibleConstructorReturn(this, (Ballon.__proto__ || Object.getPrototypeOf(Ballon)).apply(this, arguments));
  }

  _createClass(Ballon, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          value = _props.value,
          icon = _props.icon,
          color = _props.color,
          addon = _props.addon,
          id = _props.id;


      return _react2.default.createElement(
        "div",
        { className: "balloon squared", id: id },
        _react2.default.createElement(
          "div",
          { className: "balloon-header " + color },
          _react2.default.createElement("span", { className: "icon-24 " + icon }),
          label
        ),
        _react2.default.createElement(
          "div",
          { className: "balloon-body" },
          addon != null ? _react2.default.createElement(
            "span",
            { className: "balloon-body-currency" },
            addon
          ) : null,
          value
        )
      );
    }
  }]);

  return Ballon;
}(_react2.default.Component);

Ballon.propTypes = {
  label: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.string.isRequired,
  icon: _react.PropTypes.string.isRequired,
  color: _react.PropTypes.string.isRequired,
  addon: _react.PropTypes.string
};
exports.default = Ballon;