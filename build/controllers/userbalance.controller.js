"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.getAllUserBalance = exports.getUserBalance = exports.addUserBalance = void 0;

var userBalanceService = _interopRequireWildcard(require("../services/userbalance.service"));

var _models = _interopRequireDefault(require("../models"));

var _utils = require("../common/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addUserBalance = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              userBalanceService.addUserBalance(req.body);
              res.status(200).json({
                message: ' User balance'
              });
            } catch (err) {
              res.status(500).json({
                error: 'An error ocurred while retrieving Users.'
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addUserBalance(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addUserBalance = addUserBalance;

var getUserBalance = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, userBalance;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return userBalanceService.getUserBalance(id);

          case 4:
            userBalance = _context2.sent;
            res.status(200).json(userBalance !== null && userBalance !== void 0 ? userBalance : {
              user_id: id,
              balance: 0
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              error: 'not able to retrieve user balance'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getUserBalance(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserBalance = getUserBalance;

var getAllUserBalance = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _limit, _req$query, sort, offset, limit, perPage, userBalance, rows, count, userBalances;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$query = req.query, sort = _req$query.sort, offset = _req$query.offset, limit = _req$query.limit;
            limit = (_limit = limit) !== null && _limit !== void 0 ? _limit : 10;
            perPage = offset ? limit * offset : 0;
            sort = sort ? sort.split(' ') : ['username', 'desc'];
            _context3.next = 7;
            return userBalanceService.getAll({
              limit: limit,
              offset: perPage,
              attributes: ['username', 'role'],
              // gets the last user balance
              include: [{
                model: _models["default"].UserBalance,
                limit: 1,
                order: [['id', 'desc']],
                attributes: ['balance']
              }]
            });

          case 7:
            userBalance = _context3.sent;
            rows = userBalance.rows, count = userBalance.count;
            userBalances = fixUserBalance(rows);
            res.status(200).json({
              rows: (0, _utils.orderArray)(userBalances, sort[0], sort[1]),
              count: count
            });
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              error: 'An error ocurred while retrieving Users.'
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function getAllUserBalance(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllUserBalance = getAllUserBalance;

var create = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var userBalance;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              userBalance = userBalanceService.addUserBalance(req.body);
              res.status(201).json(userBalance);
            } catch (err) {
              res.status(500).json({
                error: 'An error ocurred while retrieving Users.'
              });
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function create(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.create = create;

var fixUserBalance = function fixUserBalance(rows) {
  return rows.map(function (r) {
    var _r$dataValues = r.dataValues,
        id = _r$dataValues.id,
        username = _r$dataValues.username,
        role = _r$dataValues.role,
        UserBalances = _r$dataValues.UserBalances;
    var balance = UserBalances.length > 0 ? UserBalances[0].dataValues.balance : 0;
    return {
      id: id,
      username: username,
      role: role,
      balance: balance
    };
  });
};