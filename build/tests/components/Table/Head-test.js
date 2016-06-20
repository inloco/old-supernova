"use strict";

var _tableFactory = require("../../factories/components/table-factory");

var _tableFactory2 = _interopRequireDefault(_tableFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../factories/components/table-factory");

describe("Table Head", function () {
  var factory = new _tableFactory2.default();
  var node = factory.getNode().querySelector('thead');

  it("is a thead", function () {
    expect(node.tagName).toEqual("THEAD");
  });

  it("has an one row", function () {
    var rows = node.querySelectorAll('tr');

    expect(rows.length).toEqual(1);
  });

  it("has 2 headers", function () {
    var headers = node.querySelectorAll('th');

    expect(headers.length).toEqual(2);
  });
});