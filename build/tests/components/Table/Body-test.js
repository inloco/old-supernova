"use strict";

var _tableFactory = require("../../factories/components/table-factory");

var _tableFactory2 = _interopRequireDefault(_tableFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../factories/components/table-factory");

describe("Table Body", function () {
  var factory = new _tableFactory2.default();
  var node = factory.getNode().querySelector("tbody");

  it("is a tbody", function () {
    expect(node.tagName).toEqual("TBODY");
  });

  it("has children", function () {
    expect(node.children.length).toBeGreaterThan(0);
  });
});