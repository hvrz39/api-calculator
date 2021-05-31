"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doOperation = void 0;

var userBalanceService = _interopRequireWildcard(require("../services/userbalance.service"));

var services = _interopRequireWildcard(require("../services/service"));

var recordService = _interopRequireWildcard(require("../services/record.service"));

var operationService = _interopRequireWildcard(require("../services/operation.service"));

var _uuid = require("uuid");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var doOperation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userId, _yield$userBalanceSer, balance, _req$body, serviceType, elements, _yield$services$getCo, cost, service_id, result, user_balance, aa, service_response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            userId = req.userId;
            _context.next = 4;
            return userBalanceService.getUserBalance(userId);

          case 4:
            _yield$userBalanceSer = _context.sent;
            balance = _yield$userBalanceSer.balance;

            if (balance <= 0) {
              res.status(400).json({
                error: "User does not have enough balance (".concat(balance, ")")
              });
            }

            _req$body = req.body, serviceType = _req$body.serviceType, elements = _req$body.elements;
            _context.next = 10;
            return services.getCost(serviceType);

          case 10:
            _yield$services$getCo = _context.sent;
            cost = _yield$services$getCo.cost;
            service_id = _yield$services$getCo.id;

            if (cost > balance) {
              res.status(400).json({
                error: "Not enough balance. Current balance: ".concat(balance, ", Service Cost: ").concat(cost)
              });
            }

            result = operationService.doOperation({
              type: serviceType,
              elements: elements
            });
            user_balance = balance - cost;
            _context.next = 18;
            return userBalanceService.addUserBalance({
              user_id: userId,
              balance: user_balance
            });

          case 18:
            aa = _context.sent;
            service_response = "This is the result: ".concat(result, ", currentBalance: ").concat(user_balance);
            _context.next = 22;
            return recordService.create({
              uuid: (0, _uuid.v4)(),
              service_id: service_id,
              user_id: userId,
              cost: cost,
              user_balance: user_balance,
              service_response: service_response,
              date: new Date()
            });

          case 22:
            res.status(201).json({
              message: service_response
            });
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              error: 'An error ocurred while trying to do Operation.'
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 25]]);
  }));

  return function doOperation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.doOperation = doOperation;