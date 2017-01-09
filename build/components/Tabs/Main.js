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

    _this.state = { activeTab: props.activeTab };
    return _this;
  }

  _createClass(Main, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ activeTab: nextProps.activeTab });
    }
  }, {
    key: "handleTabClick",
    value: function handleTabClick(index) {
      var onChange = this.props.onChange;


      this.setState({ activeTab: index });

      if (onChange) {
        onChange(index);
      }
    }
  }, {
    key: "getTabsLabel",
    value: function getTabsLabel() {
      return this.props.children.map(function (tab) {
        return tab.props.label;
      });
    }
  }, {
    key: "getTabItemClassName",
    value: function getTabItemClassName(index) {
      return this.state.activeTab === index ? "is-active" : "";
    }
  }, {
    key: "renderTabsItems",
    value: function renderTabsItems() {
      var _this2 = this;

      return this.getTabsLabel().map(function (label, index) {
        return _react2.default.createElement(
          "li",
          { className: _this2.getTabItemClassName(index), key: index },
          _react2.default.createElement(
            "a",
            { href: "#", onClick: _this2.handleTabClick.bind(_this2, index) },
            label
          )
        );
      });
    }
  }, {
    key: "renderTabsContent",
    value: function renderTabsContent() {
      var _this3 = this;

      return this.props.children.map(function (tab, index) {
        return _react2.default.cloneElement(tab, {
          active: _this3.state.activeTab === index,
          key: index
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "sn-tabs" },
          _react2.default.createElement(
            "ul",
            null,
            this.renderTabsItems()
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "sn-tabs__content" },
          this.renderTabsContent()
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

Main.propTypes = {
  activeTab: _react.PropTypes.number,
  children: _react.PropTypes.node.isRequired
};
Main.defaultProps = {
  active: false
};
exports.default = Main;