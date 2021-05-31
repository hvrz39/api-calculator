'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var uuid = require('uuid');

var bcrypt = require('bcryptjs');

var projectConfig = require('../project.config.json');

module.exports = {
  up: function () {
    var _up = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(queryInterface, Sequelize) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = queryInterface;
              _context.t1 = uuid.v4();
              _context.t2 = projectConfig.roles.User;
              _context.t3 = projectConfig.status.Active;
              _context.next = 6;
              return bcrypt.hash('user1', bcrypt.genSaltSync(8));

            case 6:
              _context.t4 = _context.sent;
              _context.t5 = new Date();
              _context.t6 = new Date();
              _context.t7 = {
                username: 'user1@tester.com',
                uuid: _context.t1,
                role: _context.t2,
                status: _context.t3,
                password: _context.t4,
                createdAt: _context.t5,
                updatedAt: _context.t6
              };
              _context.t8 = uuid.v4();
              _context.t9 = projectConfig.roles.User;
              _context.t10 = projectConfig.status.Active;
              _context.next = 15;
              return bcrypt.hash('user2', bcrypt.genSaltSync(8));

            case 15:
              _context.t11 = _context.sent;
              _context.t12 = new Date();
              _context.t13 = new Date();
              _context.t14 = {
                username: 'user2@tester.com',
                uuid: _context.t8,
                role: _context.t9,
                status: _context.t10,
                password: _context.t11,
                createdAt: _context.t12,
                updatedAt: _context.t13
              };
              _context.t15 = uuid.v4();
              _context.t16 = projectConfig.roles.User;
              _context.t17 = projectConfig.status.Active;
              _context.next = 24;
              return bcrypt.hash('user3', bcrypt.genSaltSync(8));

            case 24:
              _context.t18 = _context.sent;
              _context.t19 = new Date();
              _context.t20 = new Date();
              _context.t21 = {
                username: 'user3@tester.com',
                uuid: _context.t15,
                role: _context.t16,
                status: _context.t17,
                password: _context.t18,
                createdAt: _context.t19,
                updatedAt: _context.t20
              };
              _context.t22 = [_context.t7, _context.t14, _context.t21];
              _context.next = 31;
              return _context.t0.bulkInsert.call(_context.t0, 'Users', _context.t22);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function () {
    var _down = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(queryInterface, Sequelize) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryInterface.bulkDelete('Users', null, {});

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};