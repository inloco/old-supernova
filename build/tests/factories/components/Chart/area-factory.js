"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _baseFactory = require("./../base-factory");

var _baseFactory2 = _interopRequireDefault(_baseFactory);

var _Area = require("../../../../components/Chart/Area");

var _Area2 = _interopRequireDefault(_Area);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

jest.unmock("../../../../components/Chart/Area");
jest.unmock("./../base-factory");
jest.unmock("react-google-charts");

var AreaChartFactory = function (_Factory) {
  _inherits(AreaChartFactory, _Factory);

  function AreaChartFactory() {
    _classCallCheck(this, AreaChartFactory);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaChartFactory).apply(this, arguments));
  }

  _createClass(AreaChartFactory, [{
    key: "template",
    value: function template() {
      var data = [["Year", "Sales", "Expenses"], ["2013", 1000, 400], ["2014", 1170, 460], ["2015", 660, 1120], ["2016", 1030, 540]];

      return _react2.default.createElement(_Area2.default, { data: data });
    }
  }]);

  return AreaChartFactory;
}(_baseFactory2.default);

exports.default = AreaChartFactory;