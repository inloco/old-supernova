"use strict";

var _tableFactory = require("../../../factories/components/table-factory");

var _tableFactory2 = _interopRequireDefault(_tableFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../../factories/components/table-factory");
jest.unmock("../../../../helpers/table");

describe("Cell Head", function () {
  var factory = new _tableFactory2.default();
  var node = factory.getNode().querySelector("th");

  it("is a th", function () {
    expect(node.tagName).toEqual("TH");
  });

  it("has text Id", function () {
    expect(node.textContent).toEqual("Id");
  });

  it("has class type", function () {
    expect(node.getAttribute("class").includes('number-col')).toBeTruthy;
  });
});