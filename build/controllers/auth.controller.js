"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.signup = exports.signin = void 0;

var userService = _interopRequireWildcard(require("../services/user.service"));

var _projectConfig = _interopRequireDefault(require("../project.config.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, password, user, notFoundErrorMessage, matching, access_token, id, role, status;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 4;
            return userService.searchBy({
              username: username
            });

          case 4:
            user = _context.sent;
            notFoundErrorMessage = {
              error: "User not found or incorrect password"
            };

            if (user) {
              _context.next = 9;
              break;
            }

            res.status(404).json(notFoundErrorMessage);
            return _context.abrupt("return");

          case 9:
            _context.next = 11;
            return userService.comparePassword(password, user.password);

          case 11:
            matching = _context.sent;

            if (matching) {
              _context.next = 15;
              break;
            }

            res.status(404).json(notFoundErrorMessage);
            return _context.abrupt("return");

          case 15:
            _context.next = 17;
            return userService.generateToken(user);

          case 17:
            access_token = _context.sent;
            id = user.id, role = user.role, status = user.status;
            res.status(200).json({
              id: id,
              role: role,
              status: status,
              username: username,
              access_token: access_token,
              expiresIn: 86400,
              menuSettings: _projectConfig["default"].menuSettings.filter(function (s) {
                return s.roles.indexOf(role) >= 0;
              }).map(function (_ref2) {
                var path = _ref2.path,
                    name = _ref2.name;
                return {
                  menu: path,
                  name: name
                };
              })
            });
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              error: 'An error ocurred while trying to signing in.'
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));

  return function signin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signin = signin;

var signup = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              console.log(params);
            } catch (err) {
              res.status(500).json({
                error: 'An error ocurred while trying to create a User.'
              });
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signup(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.signup = signup;

var logout = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var userId, token;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              userId = req.params.userId;
              token = req.body.token;

              if (!userId || !token) {
                res.status(400).json({
                  error: 'No user or a token were not found.'
                });
              }

              userService.removeToken(userId, token);
              res.status(200).json({
                message: 'User ended session.'
              });
            } catch (err) {
              console.log(err);
              res.status(500).json({
                error: 'An error ocurred while trying to logout.'
              });
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function logout(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.logout = logout;