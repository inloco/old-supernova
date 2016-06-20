"use strict";

var _tableFactory = require("../../../../factories/components/table-factory");

var _tableFactory2 = _interopRequireDefault(_tableFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../../../factories/components/table-factory");

describe("Cell Data", function () {
  var factory = new _tableFactory2.default();
  var node = factory.getNode().querySelector("td");

  it("is a td", function () {
    expect(node.tagName).toEqual("TD");
  });

  it("has Id text", function () {
    expect(node.textContent).toEqual("1");
  });
});