const mongoose = require('mongoose');

const Schema = [mongoose.Schema];

const ApiSchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

ApiSchema.virtual('api').get(function () {
  return this.name;
});

ApiSchema.virtual('url').get(function () {
  return `/api/${this._id}`;
});

module.exports = mongoose.model('Api', ApiSchema);
