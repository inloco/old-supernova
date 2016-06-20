"use strict";

var _sidebarFactory = require("../../factories/components/sidebar-factory");

var _sidebarFactory2 = _interopRequireDefault(_sidebarFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../factories/components/sidebar-factory");

describe("Sidebar", function () {
  var factory = new _sidebarFactory2.default();
  var node = factory.getNode();

  it("has sidebar class", function () {
    expect(node.getAttribute("class").includes("side")).toBeTruthy;
  });

  it("has children", function () {
    expect(node.children.length).toBeGreaterThan(0);
  });
});