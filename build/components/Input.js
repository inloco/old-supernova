"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var type = _props.type;
      var placeholder = _props.placeholder;
      var name = _props.name;
      var isRequired = _props.isRequired;

      var ops = {};

      if (isRequired) {
        ops.required = "true";
      }

      return _react2.default.createElement(
        "div",
        { className: "form-control-wrapper" },
        _react2.default.createElement("input", _extends({ id: id,
          className: "form-control",
          type: type,
          placeholder: placeholder,
          name: name
        }, ops)),
        _react2.default.createElement("span", { className: "material-input" })
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTyes = {
  id: _react.PropTypes.string.isRequired,
  type: _react.PropTypes.string.isRequired,
  placeholder: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  isRequired: _react.PropTypes.bool.isRequired
};
exports.default = Input;