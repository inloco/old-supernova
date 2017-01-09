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

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      open: _this.props.open
    };
    return _this;
  }

  _createClass(Main, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        onClose: this.props.onClose
      };
    }
  }, {
    key: "handleBackdropClick",
    value: function handleBackdropClick(event) {
      if (this.props.dismiss) {
        this.props.onClose();
      }
    }
  }, {
    key: "handleWrapClick",
    value: function handleWrapClick(event) {
      event.stopPropagation();
    }
  }, {
    key: "renderBackdrop",
    value: function renderBackdrop() {
      return _react2.default.createElement("div", { className: "sn-modal__backdrop is-visible" });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          {
            className: "sn-modal " + (this.state.open ? "sn-modal--open" : ''),
            id: this.props.id,
            onClick: this.handleBackdropClick.bind(this) },
          _react2.default.createElement(
            "div",
            {
              className: "sn-modal__wrap",
              onClick: this.handleWrapClick.bind(this) },
            _react2.default.createElement(
              "div",
              { className: "sn-modal__content" },
              this.props.children
            )
          )
        ),
        this.state.open ? this.renderBackdrop() : null
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

Main.defaultProps = {
  dismiss: true
};


Main.childContextTypes = {
  onClose: _react2.default.PropTypes.func
};

exports.default = Main;