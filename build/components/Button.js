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

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "getRaisedClassName",
    value: function getRaisedClassName() {
      return this.props.raised ? "sn-button--raised" : null;
    }
  }, {
    key: "getFullWidthClassName",
    value: function getFullWidthClassName() {
      return this.props.fullWidth ? "sn-button--full-width" : null;
    }
  }, {
    key: "getStyleClassName",
    value: function getStyleClassName() {
      var style = this.props.style;


      return style ? "sn-button--" + style : null;
    }
  }, {
    key: "getSizeClassName",
    value: function getSizeClassName() {
      var size = this.props.size;


      return size ? "sn-button--" + size : "";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "\n      sn-button\n      " + this.getRaisedClassName() + "\n      " + this.getFullWidthClassName() + "\n      " + this.getStyleClassName() + "\n      " + this.props.className + "\n      " + this.getSizeClassName();
    }
  }, {
    key: "getProps",
    value: function getProps() {
      var _props = this.props;
      var disabled = _props.disabled;
      var type = _props.type;
      var tabIndex = _props.tabIndex;
      var onClick = _props.onClick;
      var name = _props.name;


      return {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onClick: onClick,
        name: name,
        className: this.getClassName()
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var label = _props2.label;
      var children = _props2.children;


      return _react2.default.createElement(
        "button",
        this.getProps(),
        label || children
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  label: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  raised: _react.PropTypes.bool,
  fullWidth: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  style: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  tabIndex: _react.PropTypes.number,
  className: _react.PropTypes.string,
  name: _react.PropTypes.string,
  size: _react.PropTypes.string
};
Button.defaultProps = {
  disabled: false,
  raised: false,
  fullWidth: false,
  type: "button",
  style: null
};
exports.default = Button;