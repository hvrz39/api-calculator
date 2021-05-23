
import app from './app';
const db = require('./models');

db.sequelize
    .sync({
        // force: true // enable only when a schema change as not reflected.
    })
    .then(() => {
        console.log('Connected to db...')
        app.listen(3000);
        console.log('Listenning...');
})



