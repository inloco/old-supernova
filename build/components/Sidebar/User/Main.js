"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Item = require("./Item");

var _Item2 = _interopRequireDefault(_Item);

var _Main = require("../../Dropdown/Main");

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
  _inherits(User, _React$Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: "getUserAvatar",
    value: function getUserAvatar() {
      var avatarSrc = this.props.avatarSrc;


      return _react2.default.createElement(
        "div",
        { className: "user-avatar-mask" },
        _react2.default.createElement("img", { className: "avatar", src: avatarSrc })
      );
    }
  }, {
    key: "getUserImpersonate",
    value: function getUserImpersonate() {
      var _props = this.props;
      var userImpersonateHref = _props.userImpersonateHref;
      var userImpersonateLabel = _props.userImpersonateLabel;


      return _react2.default.createElement(
        "a",
        { href: userImpersonateHref },
        userImpersonateLabel
      );
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _props2 = this.props;
      var userName = _props2.userName;
      var userEmail = _props2.userEmail;
      var currentDropdownItemName = _props2.currentDropdownItemName;
      var userImpersonateLabel = _props2.userImpersonateLabel;


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
        currentDropdownItemName !== undefined ? this.getDropdown() : null,
        userImpersonateLabel !== undefined ? this.getUserImpersonate() : null,
        this.getUserLogin()
      );
    }
  }, {
    key: "getDropdown",
    value: function getDropdown() {
      var _props3 = this.props;
      var currentDropdownItemName = _props3.currentDropdownItemName;
      var currentDropdownItemId = _props3.currentDropdownItemId;
      var dropdownItemHref = _props3.dropdownItemHref;
      var dropdownItemName = _props3.dropdownItemName;
      var dropdownItemId = _props3.dropdownItemId;


      return _react2.default.createElement(
        _Main2.default,
        { label: currentDropdownItemName,
          side: "center",
          icon: "icon-drop-down",
          id: currentDropdownItemId },
        _react2.default.createElement(
          "a",
          { href: dropdownItemHref, id: dropdownItemId },
          dropdownItemName
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
    value: function getUserCredits() {
      var _props5 = this.props;
      var creditsCash = _props5.creditsCash;
      var creditsCurrency = _props5.creditsCurrency;
      var creditsTitle = _props5.creditsTitle;


      return _react2.default.createElement(_Item2.default, { value: creditsCash,
        addon: creditsCurrency,
        label: creditsTitle,
        icon: "icon-nav-cash" });
    }
  }, {
    key: "render",
    value: function render() {
      var creditsCash = this.props.creditsCash;


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
        creditsCash !== undefined ? this.getUserCredits() : null
      );
    }
  }]);

  return User;
}(_react2.default.Component);

User.propTypes = {
  avatarSrc: _react.PropTypes.string.isRequired,
  userEmail: _react.PropTypes.string.isRequired,
  userName: _react.PropTypes.string,
  currentDropdownItemName: _react.PropTypes.string,
  currentDropdownItemId: _react.PropTypes.string,
  dropdownItemHref: _react.PropTypes.string,
  dropdownItemName: _react.PropTypes.string,
  dropdownItemId: _react.PropTypes.string,
  accountHref: _react.PropTypes.string.isRequired,
  accountLabel: _react.PropTypes.string.isRequired,
  logoutHref: _react.PropTypes.string.isRequired,
  logoutLabel: _react.PropTypes.string.isRequired,
  creditsCash: _react.PropTypes.string,
  creditsCurrency: _react.PropTypes.string,
  creditsTitle: _react.PropTypes.string,
  userImpersonateHref: _react.PropTypes.string,
  userImpersonateLabel: _react.PropTypes.string
};
exports.default = User;