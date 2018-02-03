const express = require('express'); // Express JS Framework
const mongoose = require('mongoose'); // mongoose ORM
const bodyParser = require('body-parser'); // json body-parser
const fs = require('fs'); // file stream
const indexRoute = require('./api/index.route'); // api index routes file
const config = require('config');
const argv = require('minimist')(process.argv.slice(2));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.text());
app.use('/api/v1', indexRoute); // default route to read index routes

let dbHost = '';

if (fs.existsSync('./config')) { // check to see if we have a config folder
  console.log('Using local config dbHost');
  let rawData = fs.readFileSync('./config/dev.json'); // load up the dev json
  if (config.util.getEnv('NODE_ENV') === 'test') { // the we are in the test enviornment
    rawData = fs.readFileSync('./config/test.json'); // load up the test json
  }
  dbHost = JSON.parse(rawData).DBHost;
} else if (argv.dbHost) {
  console.log('Using command line arg dbHost');
  dbHost = argv.dbHost;
} else {
  console.log('Using process.env.MONGODB_URI dbHost');
  dbHost = process.env.MONGODB_URI;
}

mongoose.connect(dbHost);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log('App now running on port', port);
});

module.exports = app; // for testing
