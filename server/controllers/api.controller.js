const mongoose = require('../models/api');

const Api = mongoose.model('Apis');

exports.list = (req, res) => {
  Api.find({}, (err, task) => {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.create = (req, res) => {
  const newApi = new Api(req.body);
  newApi.save((err, api) => {
    if (err) {
      res.send(err);
    } else {
      res.json(api);
    }
  });
};
