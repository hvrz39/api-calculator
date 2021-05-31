
import app from './app';
const db = require('./models');
const port = process.env.PORT || 51044;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
// const ENV = process.env.NODE_ENV === 'local' ? 'public' : 'src'
const path = require('path');

const swaggerOptions = require(path.join(__dirname, '/swagger.json'));
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));


db.sequelize
    .sync({
        // force: true // enable only when a schema change as not reflected.
    })
    .then(() => {       
        app.listen(port);
        console.log(`Listenning on  port ${port}...`);
})



