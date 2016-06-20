"use strict";

var _areaFactory = require("../../factories/components/Chart/area-factory");

var _areaFactory2 = _interopRequireDefault(_areaFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock("../../factories/components/Chart/area-factory");

describe("Chart Area", function () {
  var factory = new _areaFactory2.default();
  var node = factory.getNode();

  it("loading google charts", function () {
    expect(node.textContent.trim()).toEqual("Rendering Chart...");
  });
});