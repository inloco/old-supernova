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

var Wizzard = function (_React$Component) {
  _inherits(Wizzard, _React$Component);

  function Wizzard(props) {
    _classCallCheck(this, Wizzard);

    var _this = _possibleConstructorReturn(this, (Wizzard.__proto__ || Object.getPrototypeOf(Wizzard)).call(this, props));

    _this.state = { activeStep: props.activeStep };
    return _this;
  }

  _createClass(Wizzard, [{
    key: "canMoveFoward",
    value: function canMoveFoward() {
      return this.state.activeStep < this.props.children.length - 1;
    }
  }, {
    key: "canMoveBackward",
    value: function canMoveBackward() {
      return this.state.activeStep > 0;
    }
  }, {
    key: "next",
    value: function next() {
      if (this.canMoveFoward()) {
        this.move(1);
      }
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this.canMoveBackward()) {
        this.move(-1);
      }
    }
  }, {
    key: "move",
    value: function move(direction) {
      var newStep = this.state.activeStep + direction;

      this.setState({ activeStep: newStep });
      this.handleOnChange(newStep);
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(newStep) {
      var onChange = this.props.onChange;


      if (onChange) {
        onChange(newStep);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var activeStep = this.state.activeStep;


      return _react2.default.createElement(
        "div",
        null,
        this.props.children[activeStep]
      );
    }
  }]);

  return Wizzard;
}(_react2.default.Component);

Wizzard.propTypes = {
  children: _react.PropTypes.node.isRequired,
  activeStep: _react.PropTypes.number,
  onChange: _react.PropTypes.func
};
Wizzard.defaultProps = {
  activeStep: 0
};
exports.default = Wizzard;