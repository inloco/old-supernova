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

var _Item3 = require("../../Dropdown/Item");

var _Item4 = _interopRequireDefault(_Item3);

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
    key: "getUserImpersonate",
    value: function getUserImpersonate() {
      var _props2 = this.props;
      var userImpersonateHref = _props2.userImpersonateHref;
      var userImpersonateLabel = _props2.userImpersonateLabel;


      return _react2.default.createElement(
        "a",
        { href: userImpersonateHref },
        userImpersonateLabel
      );
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _props3 = this.props;
      var userName = _props3.userName;
      var userEmail = _props3.userEmail;
      var currentDropdownItemName = _props3.currentDropdownItemName;
      var userImpersonateLabel = _props3.userImpersonateLabel;


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
      var _props4 = this.props;
      var currentDropdownItemName = _props4.currentDropdownItemName;
      var dropdownItemHref = _props4.dropdownItemHref;
      var dropdownItemName = _props4.dropdownItemName;


      return _react2.default.createElement(
        _Main2.default,
        { label: currentDropdownItemName,
          side: "center",
          icon: "icon-drop-down" },
        _react2.default.createElement(_Item4.default, { label: dropdownItemName, href: dropdownItemHref })
      );
    }
  }, {
    key: "getUserLogin",
    value: function getUserLogin() {
      var _props5 = this.props;
      var accountHref = _props5.accountHref;
      var accountLabel = _props5.accountLabel;
      var logoutHref = _props5.logoutHref;
      var logoutLabel = _props5.logoutLabel;


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
      var _props6 = this.props;
      var userCreditsCash = _props6.userCreditsCash;
      var userCreditsCurrency = _props6.userCreditsCurrency;
      var userCreditsTitle = _props6.userCreditsTitle;


      return _react2.default.createElement(_Item2.default, { value: userCreditsCash,
        addon: userCreditsCurrency,
        label: userCreditsTitle,
        icon: "icon-nav-cash" });
    }
  }, {
    key: "render",
    value: function render() {
      var userCreditsCash = this.props.userCreditsCash;


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
        userCreditsCash !== undefined ? this.getUserCredits() : null
      );
    }
  }]);

  return User;
}(_react2.default.Component);

User.propTyes = {
  avatarName: _react.PropTypes.string,
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
  userCreditsCash: _react.PropTypes.string,
  userCreditsCurrency: _react.PropTypes.string,
  userCreditsTitle: _react.PropTypes.string,
  userImpersonateHref: _react.PropTypes.string,
  userImpersonateLabel: _react.PropTypes.string
};
exports.default = User;