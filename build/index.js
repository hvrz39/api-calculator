"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// this his the 
var db = require('./models');

var port = process.env.PORT || 51044;

var swaggerJsDoc = require("swagger-jsdoc");

var swaggerUi = require("swagger-ui-express"); // const ENV = process.env.NODE_ENV === 'local' ? 'public' : 'src'


var path = require('path');

var swaggerOptions = require(path.join(__dirname, '/swagger.json'));

_app["default"].use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

db.sequelize.sync({// force: true // enable only when a schema change as not reflected.
}).then(function () {
  _app["default"].listen(port);

  console.log("Listenning on  port ".concat(port, "..."));
});