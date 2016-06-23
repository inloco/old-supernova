'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: 'getSecondaryLabel',
    value: function getSecondaryLabel() {
      var secondaryLabel = this.props.secondaryLabel;


      return secondaryLabel !== undefined ? _react2.default.createElement(
        'p',
        { className: 'type-caption secondary-txt' },
        secondaryLabel
      ) : null;
    }
  }, {
    key: 'getSecondaryIcon',
    value: function getSecondaryIcon() {
      var secondaryIcon = this.props.secondaryIcon;


      return secondaryIcon !== undefined ? _react2.default.createElement('span', { className: "icon-16 " + secondaryIcon + " chart-icons disabled-txt" }) : null;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      var label = this.props.label;


      return label !== undefined ? _react2.default.createElement(
        'span',
        { className: 'type-body-1' },
        ' ',
        label,
        ' '
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var icon = _props.icon;
      var side = _props.side;
      var children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: 'dropdown' },
        this.getSecondaryLabel(),
        this.getSecondaryIcon(),
        _react2.default.createElement(
          'a',
          { className: 'dropdown-toggle', 'data-toggle': 'dropdown', 'aria-expanded': 'true', href: '#' },
          this.getLabel(),
          _react2.default.createElement('span', { className: 'icon-24 ' + icon })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu dropdown-menu-' + side, role: 'menu', 'aria-labelledby': 'dropdownMenu1' },
          children
        )
      );
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  icon: _react.PropTypes.string,
  side: _react.PropTypes.string,
  label: _react.PropTypes.string,
  secondaryLabel: _react.PropTypes.string,
  secondaryIcon: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired
};
Dropdown.defaultProps = {
  icon: 'icon-more-options',
  side: 'left'
};
exports.default = Dropdown;