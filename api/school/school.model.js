const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  name:
  {
    type: String,
    required: 'Please provide a name for the School',
    max: 100,
    min: 3,
  },
  createdDate:
  {
    type: Date,
    required: true,
    default: Date.now,
  },
}, {
  versionKey: false,
});

SchoolSchema.pre('save', (next) => {
  const now = new Date();
  if (!this.createdDate) {
    this.createdDate = now;
  }
  next();
});

module.exports = mongoose.model('Schools', SchoolSchema);
