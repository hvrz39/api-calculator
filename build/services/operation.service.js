"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doOperation = void 0;

var doOperation = function doOperation(_ref) {
  var type = _ref.type,
      elements = _ref.elements;

  switch (type) {
    case 'addition':
      {
        return addition(parseElementsToInt(elements));
      }

    case 'substraction':
      {
        return substraction(parseElementsToInt(elements));
      }

    case 'division':
      {
        return division(parseElementsToInt(elements));
      }

    case 'multiplication':
      {
        return multiplication(parseElementsToInt(elements));
      }

    case 'free_form':
      {
        return eval(elements[0]);
      }

    case 'square_root':
      {
        return Math.sqrt(parseInt(elements[0])).toFixed(2);
      }

    default:
      throw "Operation not supported!";
  }
};

exports.doOperation = doOperation;

var addition = function addition(elements) {
  return elements.map(function (s) {
    return parseInt(s);
  }).reduce(function (sum, x) {
    return sum + x;
  });
};

var substraction = function substraction(elements) {
  return elements.map(function (s) {
    return parseInt(s);
  }).reduce(function (sum, x) {
    return sum - x;
  });
};

var division = function division(elements) {
  return elements.map(function (s) {
    return parseInt(s);
  }).reduce(function (sum, x) {
    return sum / x;
  }).toFixed(2);
};

var multiplication = function multiplication(elements) {
  return elements.map(function (s) {
    return parseInt(s);
  }).reduce(function (sum, x) {
    return sum * x;
  });
};

var parseElementsToInt = function parseElementsToInt(elements) {
  return elements.map(function (s) {
    return parseInt(s);
  });
};