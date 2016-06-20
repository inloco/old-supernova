"use strict";

var _dropdownFactory = require("../../factories/components/dropdown-factory");

var _dropdownFactory2 = _interopRequireDefault(_dropdownFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../factories/components/dropdown-factory");

describe("Dropdown Item", function () {
  var factory = new _dropdownFactory2.default();
  var node = factory.getNode().querySelector("li > a");

  it("has a href", function () {
    expect(node.getAttribute("href")).toEqual("#a");
  });

  it("has a label", function () {
    expect(node.textContent).toEqual("Link A");
  });
});