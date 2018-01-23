const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ApiSchema = new Schema({
  name: { type: String, required: 'Please provide a name for the API', max: 100 },
});

module.exports = mongoose.model('Apis', ApiSchema);
