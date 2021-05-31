"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _middelwares = require("../../middelwares/");

var _operations = require("../../controllers/operations.controller");

var router = (0, _express.Router)();
router.post('/', [_middelwares.hasAccessAndUser], _operations.doOperation);
var _default = router;
exports["default"] = _default;