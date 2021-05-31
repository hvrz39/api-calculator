"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.getById = exports.getAll = void 0;

var recordService = _interopRequireWildcard(require("../services/record.service"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _limit, _req$query, sort, offset, limit, perPage, criteria, records;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, sort = _req$query.sort, offset = _req$query.offset, limit = _req$query.limit;
            limit = (_limit = limit) !== null && _limit !== void 0 ? _limit : 10;
            perPage = offset ? limit * offset : 0;
            criteria = {
              raw: true,
              order: [[sort ? sort.split(' ') : ['service_id', 'asc']]],
              limit: limit,
              offset: perPage,
              attributes: ['id', 'uuid', 'cost', 'user_balance', 'service_response', 'Service.type', 'User.username'],
              include: [{
                model: _models["default"].User,
                require: true,
                attributes: ['username']
              }, {
                model: _models["default"].Service,
                require: true,
                attributes: ['type']
              }]
            };
            _context.next = 7;
            return recordService.getAll(criteria);

          case 7:
            records = _context.sent;
            res.status(200).json(records);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              error: 'An error ocurred while retrieving Records.'
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, existingRecord;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return recordService.getById(id);

          case 4:
            existingRecord = _context2.sent;

            if (existingRecord) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              error: 'Record not found.'
            }));

          case 7:
            res.status(200).json(existingRecord);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              error: 'An error ocurred while retrieving a Record.'
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getById = getById;

var update = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, existingRecord, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return recordService.getById(id);

          case 4:
            existingRecord = _context3.sent;

            if (existingRecord) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              error: 'Record not found.'
            }));

          case 7:
            _context3.next = 9;
            return recordService.update(id, req.body);

          case 9:
            response = _context3.sent;
            res.status(200).json(response);
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              error: 'An error ocurred while uddating a Record.'
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function update(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.update = update;

var remove = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, existingRecord;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return recordService.getById(id);

          case 4:
            existingRecord = _context4.sent;

            if (existingRecord) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              error: 'Record not found.'
            }));

          case 7:
            _context4.next = 9;
            return recordService.remove(id);

          case 9:
            res.status(200).json(id);
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              error: 'An error ocurred while deleting a Record.',
              err: _context4.t0
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function remove(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.remove = remove;