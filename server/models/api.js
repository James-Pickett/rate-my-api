const mongoose = require('mongoose');

Schema = mongoose.Schema;

const ApiSchema = Schema({
  name: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model('Api', ApiSchema);
