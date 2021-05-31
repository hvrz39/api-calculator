"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _v = require("./routes/v1");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use('/v1/api/auth', _v.authRoutes);
app.use('/v1/api/users', _v.userRoutes);
app.use('/v1/api/userbalances', _v.userBalanceRoutes);
app.use('/v1/api/services', _v.serviceRoutes);
app.use('/v1/api/records', _v.recordRoutes);
app.use('/v1/api/myrecords', _v.myRecordRoutes);
app.use('/v1/api/operations', _v.operationRoutes);
var _default = app;
exports["default"] = _default;