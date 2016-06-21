"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _baseFactory = require("./base-factory");

var _baseFactory2 = _interopRequireDefault(_baseFactory);

var _Main = require("../../../src/components/Table/Main");

var _Main2 = _interopRequireDefault(_Main);

var _Head = require("../../../src/components/Table/Head");

var _Head2 = _interopRequireDefault(_Head);

var _Body = require("../../../src/components/Table/Body");

var _Body2 = _interopRequireDefault(_Body);

var _Row = require("../../../src/components/Table/Row");

var _Row2 = _interopRequireDefault(_Row);

var _Head3 = require("../../../src/components/Table/Cell/Head");

var _Head4 = _interopRequireDefault(_Head3);

var _Main3 = require("../../../src/components/Table/Cell/Data/Main");

var _Main4 = _interopRequireDefault(_Main3);

var _Title = require("../../../src/components/Table/Cell/Data/Title");

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

jest.unmock("../../../src/components/Table/Main");
jest.unmock("../../../src/components/Table/Head");
jest.unmock("../../../src/components/Table/Body");
jest.unmock("../../../src/components/Table/Row");
jest.unmock("../../../src/components/Table/Cell/Head");
jest.unmock("../../../src/components/Table/Cell/Data/Main");
jest.unmock("../../../src/components/Table/Cell/Data/Title");
jest.unmock("../../factories/components/base-factory");

var TableFactory = function (_Factory) {
  _inherits(TableFactory, _Factory);

  function TableFactory() {
    _classCallCheck(this, TableFactory);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableFactory).apply(this, arguments));
  }

  _createClass(TableFactory, [{
    key: "template",
    value: function template() {
      return _react2.default.createElement(
        _Main2.default,
        null,
        _react2.default.createElement(
          _Head2.default,
          null,
          _react2.default.createElement(
            _Head4.default,
            { type: "number" },
            "Id"
          ),
          _react2.default.createElement(
            _Head4.default,
            { type: "title" },
            "Name"
          )
        ),
        _react2.default.createElement(
          _Body2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              _Title2.default,
              { href: "#1" },
              "1"
            ),
            _react2.default.createElement(
              _Main4.default,
              null,
              "Foo"
            )
          )
        )
      );
    }
  }]);

  return TableFactory;
}(_baseFactory2.default);

exports.default = TableFactory;