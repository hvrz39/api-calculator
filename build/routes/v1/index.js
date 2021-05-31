"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "authRoutes", {
  enumerable: true,
  get: function get() {
    return _auth["default"];
  }
});
Object.defineProperty(exports, "userRoutes", {
  enumerable: true,
  get: function get() {
    return _user["default"];
  }
});
Object.defineProperty(exports, "userBalanceRoutes", {
  enumerable: true,
  get: function get() {
    return _userbalance["default"];
  }
});
Object.defineProperty(exports, "serviceRoutes", {
  enumerable: true,
  get: function get() {
    return _service["default"];
  }
});
Object.defineProperty(exports, "recordRoutes", {
  enumerable: true,
  get: function get() {
    return _record["default"];
  }
});
Object.defineProperty(exports, "myRecordRoutes", {
  enumerable: true,
  get: function get() {
    return _myrecords["default"];
  }
});
Object.defineProperty(exports, "operationRoutes", {
  enumerable: true,
  get: function get() {
    return _operation["default"];
  }
});

var _auth = _interopRequireDefault(require("./auth.routes"));

var _user = _interopRequireDefault(require("./user.routes"));

var _userbalance = _interopRequireDefault(require("./userbalance.routes"));

var _service = _interopRequireDefault(require("./service.routes"));

var _record = _interopRequireDefault(require("./record.routes"));

var _myrecords = _interopRequireDefault(require("./myrecords.routes"));

var _operation = _interopRequireDefault(require("./operation.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }