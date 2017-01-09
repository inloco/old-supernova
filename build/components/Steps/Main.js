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

var Steps = function (_React$Component) {
  _inherits(Steps, _React$Component);

  function Steps() {
    _classCallCheck(this, Steps);

    return _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
  }

  _createClass(Steps, [{
    key: "getStatusByIndex",
    value: function getStatusByIndex(index) {
      var activeStep = this.props.activeStep;


      if (index < activeStep) {
        return "done";
      } else if (index === activeStep) {
        return "active";
      }
    }
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      var _this2 = this;

      return this.props.children.map(function (step, index) {
        return _react2.default.cloneElement(step, {
          index: index,
          status: _this2.getStatusByIndex(index),
          key: index
        });
      });
    }
  }]);

  return Steps;
}(_react2.default.Component);

Steps.propTypes = {
  children: _react.PropTypes.node.isRequired,
  activeStep: _react.PropTypes.number
};
Steps.defaultProps = {
  activeStep: 0
};
exports.default = Steps;