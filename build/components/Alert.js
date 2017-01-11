"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.state = { active: props.active };
    return _this;
  }

  _createClass(Alert, [{
    key: "getTypeClassName",
    value: function getTypeClassName() {
      return "sn-alert--" + this.props.type;
    }
  }, {
    key: "getActiveClassName",
    value: function getActiveClassName() {
      return this.state.active ? "sn-alert--active" : "";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "sn-alert " + this.getTypeClassName() + " " + this.getActiveClassName();
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      var icon = this.props.icon;


      if (icon !== undefined) {
        return _react2.default.createElement(
          "div",
          { className: "sn-alert--icon" },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            this.props.icon
          )
        );
      }
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      _reactDom2.default.findDOMNode(this).clientHeight;
    }
  }, {
    key: "handleCloseClick",
    value: function handleCloseClick(e) {
      e.preventDefault();
      this.close();
    }
  }, {
    key: "handleCloseAfter",
    value: function handleCloseAfter() {
      var _this2 = this;

      var closeAfter = this.props.closeAfter;


      if (closeAfter !== undefined && this.state.active) {
        setTimeout(function () {
          _this2.close();
        }, closeAfter);
      }
    }
  }, {
    key: "hideOnTop",
    value: function hideOnTop() {
      var node = _reactDom2.default.findDOMNode(this);

      node.style.top = "-" + node.clientHeight + "px";
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        active: false
      });

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.hideOnTop();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ active: nextProps.active });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleCloseAfter();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.getClassName(), role: "alert" },
        this.getIcon(),
        _react2.default.createElement(
          "button",
          { type: "button", className: "sn-alert--close", onClick: this.handleCloseClick.bind(this) },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            "\uE14C"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "sn-alert--message" },
          this.props.message
        )
      );
    }
  }]);

  return Alert;
}(_react2.default.Component);

Alert.propTypes = {
  message: _react.PropTypes.string.isRequired,
  type: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  closeAfter: _react.PropTypes.number,
  icon: _react.PropTypes.string
};
Alert.defaultProps = {
  type: "success",
  active: false
};
exports.default = Alert;