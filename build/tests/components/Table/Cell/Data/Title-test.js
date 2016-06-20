"use strict";

var _tableFactory = require("../../../../factories/components/table-factory");

var _tableFactory2 = _interopRequireDefault(_tableFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../../../factories/components/table-factory");
jest.unmock("../../../../../helpers/table");

describe("Cell Data Title", function () {
  var factory = new _tableFactory2.default();
  var node = factory.getNode().querySelector("td");

  it("is a td", function () {
    expect(node.tagName).toEqual("TD");
  });

  it("has class type", function () {
    expect(node.getAttribute("class").includes("title-col")).toBeTruthy;
  });

  it("has a link with href", function () {
    var link = node.querySelector("a");

    expect(link.getAttribute("href")).toEqual("#1");
  });

  it("has a link with Id text", function () {
    var link = node.querySelector("a");

    expect(link.textContent).toEqual("1");
  });
});