"use strict";

var _dropdownFactory = require("../../factories/components/dropdown-factory");

var _dropdownFactory2 = _interopRequireDefault(_dropdownFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../factories/components/dropdown-factory");

describe("Dropdown", function () {
  var factory = new _dropdownFactory2.default();
  var node = factory.getNode();

  it("has a dropdown class", function () {
    expect(node.getAttribute("class").includes("dropdown")).toBeTruthy();
  });

  it("has a dropdown right size class", function () {
    expect(node.querySelectorAll(".dropdown-menu-right").length).toEqual(1);
  });

  it("shows 3 links", function () {
    expect(node.querySelector("ul").children.length).toEqual(3);
  });
});