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

var User = function (_React$Component) {
  _inherits(User, _React$Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(User).apply(this, arguments));
  }

  _createClass(User, [{
    key: "getUserAvatar",
    value: function getUserAvatar() {
      var _props = this.props;
      var avatarName = _props.avatarName;
      var avatarSrc = _props.avatarSrc;


      return _react2.default.createElement(
        "div",
        { className: "user-avatar-mask" },
        _react2.default.createElement("img", { "data-image": avatarName, className: "avatar", src: avatarSrc })
      );
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _props2 = this.props;
      var userName = _props2.userName;
      var userEmail = _props2.userEmail;
      var currentDropdownItemName = _props2.currentDropdownItemName;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "span",
          { className: "user-name" },
          userName
        ),
        _react2.default.createElement(
          "span",
          { className: "user-type" },
          userEmail
        ),
        currentDropdownItemName !== undefined ? this.getDropdown(currentDropdownItemName) : null,
        this.getUserLogin()
      );
    }
  }, {
    key: "getDropdown",
    value: function getDropdown(currentDropdownItemName) {
      var _props3 = this.props;
      var dropdownItemHref = _props3.dropdownItemHref;
      var dropdownItemName = _props3.dropdownItemName;


      return _react2.default.createElement(
        "div",
        { className: "dropdown" },
        _react2.default.createElement(
          "a",
          { className: "dropdown-toggle", "data-toggle": "dropdown", "aria-expanded": "true", href: "" },
          _react2.default.createElement(
            "span",
            { className: "type-body-1" },
            currentDropdownItemName
          ),
          _react2.default.createElement("span", { className: "icon-24 icon-drop-down" })
        ),
        _react2.default.createElement(
          "ul",
          { className: "dropdown-menu dropdown-menu-center", role: "menu", "aria-labelledby": "dropdownMenu2" },
          _react2.default.createElement(
            "li",
            { role: "presentation" },
            _react2.default.createElement(
              "a",
              { role: "menuitem", tabindex: "-1", href: dropdownItemHref },
              dropdownItemName
            )
          )
        )
      );
    }
  }, {
    key: "getUserLogin",
    value: function getUserLogin() {
      var _props4 = this.props;
      var accountHref = _props4.accountHref;
      var accountLabel = _props4.accountLabel;
      var logoutHref = _props4.logoutHref;
      var logoutLabel = _props4.logoutLabel;


      return _react2.default.createElement(
        "ul",
        { className: "user-login" },
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: accountHref },
            _react2.default.createElement("span", { className: "icon-16 icon-user" }),
            accountLabel
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: logoutHref, "data-toggle": "modal", "data-target": "#modal-logout" },
            _react2.default.createElement("span", { className: "icon-16 icon-turn-off" }),
            logoutLabel
          )
        )
      );
    }
  }, {
    key: "getUserCredits",
    value: function getUserCredits(userCash) {
      var _props5 = this.props;
      var userCurrency = _props5.userCurrency;
      var creditTitle = _props5.creditTitle;


      return _react2.default.createElement(
        "div",
        { className: "user-credits" },
        _react2.default.createElement(
          "div",
          { className: "user-credits-cash" },
          _react2.default.createElement(
            "p",
            { className: "credits-title" },
            creditTitle
          ),
          _react2.default.createElement("span", { className: "icon-nav icon-nav-cash" }),
          _react2.default.createElement(
            "span",
            { className: "user-currency" },
            userCurrency
          ),
          _react2.default.createElement(
            "span",
            { className: "user-cash" },
            userCash
          ),
          _react2.default.createElement("span", { className: "icon-drop icon-expand-downs" })
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var userCash = this.props.userCash;


      return _react2.default.createElement(
        "div",
        { className: "user" },
        _react2.default.createElement(
          "div",
          { className: "user-avatar" },
          this.getUserAvatar()
        ),
        _react2.default.createElement(
          "div",
          { className: "user-info" },
          this.getUserInfo()
        ),
        userCash !== undefined ? this.getUserCredits(userCash) : null
      );
    }
  }]);

  return User;
}(_react2.default.Component);

User.propTyes = {
  avatarName: _react.PropTypes.string.isRequired,
  avatarSrc: _react.PropTypes.string.isRequired,
  userEmail: _react.PropTypes.string.isRequired,
  userName: _react.PropTypes.string,
  currentDropdownItemName: _react.PropTypes.string,
  dropdownItemHref: _react.PropTypes.string,
  dropdownItemName: _react.PropTypes.string,
  accountHref: _react.PropTypes.string.isRequired,
  accountLabel: _react.PropTypes.string.isRequired,
  logoutHref: _react.PropTypes.string.isRequired,
  logoutLabel: _react.PropTypes.string.isRequired,
  userCash: _react.PropTypes.string,
  userCurrency: _react.PropTypes.string,
  creditTitle: _react.PropTypes.string
};
exports.default = User;