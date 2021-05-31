"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.getUserToken = exports.remove = exports.removeToken = exports.generateToken = exports.searchBy = exports.getById = exports.update = exports.createUser = exports.getAll = void 0;

var _models = _interopRequireDefault(require("../models"));

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _uuid = require("uuid");

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(criteria) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models["default"].User.findAndCountAll(_objectSpread({}, criteria));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAll(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var createUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
    var username, password, role, status, newUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = user.username, password = user.password, role = user.role, status = user.status;

            if (!password) {
              password = 'admin';
            }

            _context2.next = 4;
            return _models["default"].User.create({
              username: username,
              password: password,
              uuid: (0, _uuid.v4)(),
              role: role,
              status: status
            });

          case 4:
            newUser = _context2.sent;
            return _context2.abrupt("return", newUser);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var update = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, _ref3) {
    var username, role, status;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            username = _ref3.username, role = _ref3.role, status = _ref3.status;
            _context3.next = 3;
            return _models["default"].User.update({
              username: username,
              role: role,
              status: status
            }, {
              where: {
                id: id
              }
            });

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function update(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.update = update;

var getById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models["default"].User.findByPk(id, {
              include: [{
                model: _models["default"].UserBalance
              }]
            });

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            throw 'An error ocurred while retrieving a user';

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function getById(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getById = getById;

var searchBy = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(criteria) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models["default"].User.findOne({
              where: criteria
            });

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            throw 'An error ocurred while retrieving a user';

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function searchBy(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.searchBy = searchBy;

var generateToken = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(user) {
    var id, username, role, status, access_token;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = user.id, username = user.username, role = user.role, status = user.status;
            access_token = _jsonwebtoken["default"].sign({
              id: id,
              username: username,
              role: role,
              status: status
            }, _config["default"].secret, {
              expiresIn: 86400
            });

            _models["default"].UserToken.create({
              user_id: id,
              uuid: (0, _uuid.v4)(),
              token: access_token
            });

            return _context6.abrupt("return", access_token);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function generateToken(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.generateToken = generateToken;

var removeToken = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(user_id, token) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _models["default"].UserToken.destroy({
              where: {
                user_id: user_id,
                token: token
              }
            });

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function removeToken(_x8, _x9) {
    return _ref8.apply(this, arguments);
  };
}();

exports.removeToken = removeToken;

var remove = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _models["default"].User.destroy({
              where: {
                id: id
              }
            });

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function remove(_x10) {
    return _ref9.apply(this, arguments);
  };
}();

exports.remove = remove;

var getUserToken = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(userId, token) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _models["default"].UserToken.findOne({
              where: {
                user_id: userId,
                token: token
              }
            });

          case 3:
            return _context9.abrupt("return", _context9.sent);

          case 6:
            _context9.prev = 6;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);
            throw 'An error ocurred while retrieving a user';

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 6]]);
  }));

  return function getUserToken(_x11, _x12) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getUserToken = getUserToken;

var comparePassword = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(password, receivedPassword) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0, _bcryptjs.compare)(password, receivedPassword);

          case 2:
            return _context10.abrupt("return", _context10.sent);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function comparePassword(_x13, _x14) {
    return _ref11.apply(this, arguments);
  };
}();

exports.comparePassword = comparePassword;