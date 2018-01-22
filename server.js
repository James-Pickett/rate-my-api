const express = require('express'); // Express JS Framework
const mongoose = require('mongoose'); // mongoose ORM
const fs = require('fs'); // file stream
const indexRoute = require('./server/routes/index.route'); // api index routes file

let dbUrl = '';

if (fs.existsSync('./local-config.json')) {
  const rawData = fs.readFileSync('./local-config.json');
  dbUrl = JSON.parse(rawData).dbUrl;
  console.log('Using local-config.json');
} else {
  dbUrl = process.env.MONGODB_URI;
}

mongoose.connect(dbUrl);

const app = express();

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/v1.0', indexRoute);

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log('App now running on port', port);
});
