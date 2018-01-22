const express = require('express'); // Express JS Framework
const mongoose = require('mongoose'); // mongoose ORM
const localConfig = require('./local-config.json'); // local-config file
const baseRoute = require('./server/routes/base.route'); // api routes file

let dbUrl = '';

try {
  dbUrl = localConfig.dbUrl;
  console.log('Using local-config file');
} catch (error) {
  dbUrl = process.env.MONGODB_URI;
}

mongoose.connect(dbUrl);

const app = express();
const port = process.env.port || 8080;

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/v1.0', baseRoute);

app.listen(port, () => {
  console.log(`Running the server on port ${port}`);
});
