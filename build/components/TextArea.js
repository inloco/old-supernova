"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Label = require("./Label");

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;

      event.persist();

      this.setState({
        value: event.target.value
      }, function () {
        if (typeof _this2.props.onChange === "function") {
          _this2.props.onChange(event);
        }
      });
    }
  }, {
    key: "getTextAreaClassName",
    value: function getTextAreaClassName() {
      return this.state.value ? "has-value" : "";
    }
  }, {
    key: "getTextAreaProps",
    value: function getTextAreaProps() {
      var _props = this.props;
      var value = _props.value;
      var error = _props.error;
      var fixed = _props.fixed;
      var label = _props.label;

      var validProps = _objectWithoutProperties(_props, ["value", "error", "fixed", "label"]);

      return _extends({}, validProps, {
        onChange: this.handleChange.bind(this),
        className: this.getTextAreaClassName(),
        value: this.state.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var id = _props2.id;
      var label = _props2.label;


      return _react2.default.createElement(
        "div",
        { className: "sn-input " + (this.props.error ? 'has-error' : '') },
        _react2.default.createElement("textarea", this.getTextAreaProps()),
        _react2.default.createElement(_Label2.default, { value: label, htmlFor: id }),
        _react2.default.createElement("i", { className: "sn-field__bar" }),
        _react2.default.createElement(
          "span",
          { className: "sn-form-group__message" },
          this.props.error
        )
      );
    }
  }]);

  return TextArea;
}(_react2.default.Component);

TextArea.propTypes = {
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  rows: _react.PropTypes.number,
  tabIndex: _react.PropTypes.number,
  required: _react.PropTypes.bool,
  label: _react.PropTypes.string
};
TextArea.defaultProps = {
  tabIndex: 0,
  value: ""
};
exports.default = TextArea;