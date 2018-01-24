const express = require('express'); // Express JS Framework
const mongoose = require('mongoose'); // mongoose ORM
const bodyParser = require('body-parser');
const fs = require('fs'); // file stream
const indexRoute = require('./server/routes/index.route'); // api index routes file

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', indexRoute); // default route to read index routes

let dbUrl = '';

// use local config file if it exists
if (fs.existsSync('./local-config.json')) {
  const rawData = fs.readFileSync('./local-config.json');
  dbUrl = JSON.parse(rawData).dbUrl;
  mongoose.connect(dbUrl);
  console.log('Using local-config.json');
} else {
  dbUrl = process.env.MONGODB_URI;
}

mongoose.connect(dbUrl);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log('App now running on port', port);
});
