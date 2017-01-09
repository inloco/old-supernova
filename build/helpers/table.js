"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnClassByType = getColumnClassByType;
function getColumnClassByType(type) {
  return type ? type + "-col" : null;
}