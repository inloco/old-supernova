"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Step = require("./../Step");

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IS_DONE = "is-done";

var Step = function (_BaseStep) {
  _inherits(Step, _BaseStep);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "getClassName",
    value: function getClassName() {
      return "sn-steps__item " + this.getStatusClassName();
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var isDone = this.getStatusClassName() === IS_DONE;
      var className = "sn-steps__number-icon" + (isDone ? ' material-icons' : '');
      var content = isDone ? 'done' : this.props.index + 1;

      return _react2.default.createElement(
        "i",
        { className: "" + className },
        content
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.getClassName() },
        this.renderIcon(),
        this.props.label
      );
    }
  }]);

  return Step;
}(_Step2.default);

Step.propTypes = _extends({}, _Step2.default.propTypes, {
  index: _react.PropTypes.number
});
Step.defaultProps = {
  active: false
};
exports.default = Step;