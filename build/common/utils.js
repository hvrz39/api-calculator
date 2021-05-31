"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderArray = void 0;

var orderArray = function orderArray(array, property) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
  return array.sort(function (a, b) {
    return direction === 'asc' ? a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0 : b[property] > a[property] ? 1 : a[property] > b[property] ? -1 : 0;
  });
};

exports.orderArray = orderArray;