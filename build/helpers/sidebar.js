"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindItems = bindItems;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindItems(children, sidebar) {
  return children.map(function (child, index) {
    return _react2.default.cloneElement(child, {
      key: index,
      handleClick: sidebar.handleClick.bind(sidebar),
      active: sidebar.state.currentPath === child.props.href,
      sidebar: sidebar
    });
  });
}