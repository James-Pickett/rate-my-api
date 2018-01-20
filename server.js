const express = require('express'); // ExperssJS Framework
const mongoose = require('mongoose'); // mongoose ORM
const localConfig = require('./local-config.json');

const mongoDb = localConfig.dbUrl;

mongoose.connect(mongoDb);

const app = express();
const port = process.env.port || 8080;

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
  console.log(`Running the server on port ${port}`);
});
