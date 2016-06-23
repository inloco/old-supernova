"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _sidebar = require("../../helpers/sidebar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "getItemClass",
    value: function getItemClass() {
      return (this.hasChildren() ? "drop-menu " : "") + (this.props.active ? "active" : "");
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      var icon = this.props.icon;


      return icon != null ? _react2.default.createElement("span", { className: "icon-nav " + icon }) : null;
    }
  }, {
    key: "getList",
    value: function getList() {
      var children = this.props.children;


      return this.hasChildren() ? _react2.default.createElement(
        "ul",
        null,
        " ",
        (0, _sidebar.bindItems)(children, this.props.sidebar),
        " "
      ) : null;
    }
  }, {
    key: "hasChildren",
    value: function hasChildren() {
      var children = this.props.children;


      return children !== undefined;
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var href = this.props.href;


      e.stopPropagation();
      this.props.handleClick(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var label = _props.label;
      var href = _props.href;


      return _react2.default.createElement(
        "li",
        { className: this.getItemClass(), onClick: function onClick(e) {
            _this2.handleClick(e);
          } },
        _react2.default.createElement(
          "a",
          { href: href },
          _react2.default.createElement("span", { className: "overlink" }),
          this.getIcon(),
          label
        ),
        this.getList()
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

Item.propTyes = {
  label: _react.PropTypes.string.isRequired,
  href: _react.PropTypes.string.isRequired,
  icon: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node
};
Item.defaultProps = {
  active: false
};
exports.default = Item;