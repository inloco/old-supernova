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

var Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _props = this.props,
          name = _props.name,
          children = _props.children;


      if (name) {
        return children.map(function (child, index) {
          return _react2.default.cloneElement(child, {
            name: name,
            key: index
          });
        });
      }

      return children;
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          id = _props2.id;


      return _react2.default.createElement(
        "div",
        { className: "sn-form-group " + this.props.className, id: id },
        _react2.default.createElement(
          "span",
          { className: "sn-form-group__label" },
          label
        ),
        this.renderChildren()
      );
    }
  }]);

  return Group;
}(_react2.default.Component);

Group.defaultProps = {
  className: ""
};

exports.default = Group;