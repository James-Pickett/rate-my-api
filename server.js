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
const port = process.env.port || 8080;

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/v1.0', indexRoute);

app.listen(port, () => {
  console.log(`Running the server on port ${port}`);
});
