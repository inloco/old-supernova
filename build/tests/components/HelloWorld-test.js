"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _HelloWorld = require("../../src/components/HelloWorld");

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../src/components/HelloWorld");

describe("HelloWorld", function () {
  it("show hello message with the name", function () {
    var hello = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_HelloWorld2.default, { name: "Bruno" }));

    var helloNode = _reactDom2.default.findDOMNode(hello);

    expect(helloNode.textContent).toEqual("Hello, Bruno!");
  });
});