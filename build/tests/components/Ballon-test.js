"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _Ballon = require("../../components/Ballon");

var _Ballon2 = _interopRequireDefault(_Ballon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../components/Ballon");

describe("Ballon", function () {
  var ballon = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_Ballon2.default, { label: "impressions",
    value: "0",
    icon: "icon-impressions",
    color: "balloon-impressions" }));
  var ballonNode = _reactDom2.default.findDOMNode(ballon);

  it("has impressions on ballon-header", function () {
    expect(ballonNode.querySelector(".balloon-header").textContent).toEqual("impressions");
  });

  it("has 0 on ballon-body", function () {
    expect(ballonNode.querySelector(".balloon-body").textContent).toEqual("0");
  });

  it("has icon-impressions class", function () {
    expect(ballonNode.getAttribute("class").includes("icon-impressions")).toBeTruthy;
  });

  it("has balloon-impressions calss", function () {
    expect(ballonNode.getAttribute("class").includes("balloon-impressions")).toBeTruthy;
  });
});