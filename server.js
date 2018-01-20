const mongoose = require('mongoose');

const mongoDb = 'mongodb://dev:waBaby1!@ds263317.mlab.com:63317/heroku_n61mbsk0';

mongoose.connect(mongoDb, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
