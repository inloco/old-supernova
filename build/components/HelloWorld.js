'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

// Simple example of a React "dumb" component

var HelloWorld = function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorld).apply(this, arguments));
  }

  _createClass(HelloWorld, [{
    key: 'render',
    value: function render() {
      var name = this.props.name;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h3',
          null,
          'Hello, ',
          name,
          '!'
        )
      );
    }
  }]);

  return HelloWorld;
}(_react2.default.Component);

HelloWorld.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  name: _react.PropTypes.string.isRequired
};
exports.default = HelloWorld;