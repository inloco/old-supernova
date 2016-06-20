"use strict";

var _sidebarFactory = require("../../factories/components/sidebar-factory");

var _sidebarFactory2 = _interopRequireDefault(_sidebarFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../factories/components/sidebar-factory");
jest.unmock("../../../helpers/sidebar");

describe("Sidebar Item", function () {
  var factory = new _sidebarFactory2.default();
  var node = factory.getNode();

  it("has one item with two children", function () {
    expect(node.querySelector("ul").querySelector("ul").children.length).toEqual(2);
  });

  it("has four items", function () {
    expect(node.querySelectorAll("li").length).toEqual(4);
  });

  it("has href", function () {
    console.log("a: ", node.querySelectorAll("li")[3].innerHTML);
    expect(node.querySelectorAll("li")[3].querySelector("a").getAttribute("href")).toEqual("#B");
  });

  it("has icon", function () {
    expect(node.querySelectorAll("li")[3].getAttribute("class").includes("icon-nav-cash")).toBeTruthy;
  });

  it("has label", function () {
    expect(node.querySelectorAll("li")[3].textContent).toEqual("Earnings");
  });
});