"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Label = require("./../Label");

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);

    _this.state = {
      open: false,
      value: props.value
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: "changeLabelTo",
    value: function changeLabelTo(newLabel) {
      this.setState({
        value: newLabel
      });
    }
  }, {
    key: "toggleList",
    value: function toggleList() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      this.changeLabelTo(event.target.textContent);

      this.toggleList();
    }
  }, {
    key: "getLayoutClassName",
    value: function getLayoutClassName() {
      var layout = this.props.layout;


      return layout ? "sn-dropdown--" + layout : "";
    }
  }, {
    key: "getErrorClassName",
    value: function getErrorClassName() {
      var error = this.props.error;


      return error ? "has-error" : "";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "sn-dropdown " + this.getLayoutClassName() + " " + this.getErrorClassName();
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      var children = this.props.children;


      if (!Array.isArray(children)) {
        return this.renderItem(children, 0);
      }

      return children.map(function (child, index) {
        return _this2.renderItem(child, index);
      });
    }
  }, {
    key: "renderItem",
    value: function renderItem(child, index) {
      return _react2.default.createElement(
        "li",
        { key: index, onClick: this.handleClick },
        child
      );
    }
  }, {
    key: "renderError",
    value: function renderError() {
      return this.props.error ? _react2.default.createElement(
        "span",
        { className: "sn-dropdown__message" },
        this.props.error
      ) : "";
    }
  }, {
    key: "render",
    value: function render() {
      var listStyle = {
        display: this.state.open ? "block" : "none"
      };

      return _react2.default.createElement(
        "div",
        { className: this.getClassName() },
        this.props.label ? _react2.default.createElement(_Label2.default, { value: this.props.label, fixed: true }) : "",
        _react2.default.createElement(
          "button",
          {
            className: "sn-dropdown__button",
            onClick: this.handleClick,
            type: "button"
          },
          this.state.value
        ),
        _react2.default.createElement(
          "ul",
          { className: "sn-dropdown__results", style: listStyle },
          this.renderChildren()
        ),
        this.renderError()
      );
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;