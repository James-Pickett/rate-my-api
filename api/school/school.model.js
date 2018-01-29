const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  name:
  {
    type: String,
    required: 'Please provide a name for the API',
    max: 100,
    min: 3,
  },
});

module.exports = mongoose.model('Schools', SchoolSchema);
