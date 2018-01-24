const mongoose = require('../models/api');

const Api = mongoose.model('Apis');

exports.list = (req, res) => {
  Api.find({}, (err, api) => {
    if (err) {
      res.send(err);
    } else {
      res.json(api);
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

exports.get = (req, res) => {
  Api.findById(req.params.id, (err, api) => {
    if (err) {
      res.send(err);
    } else {
      res.json(api);
    }
  });
};

exports.update = (req, res) => {
  Api.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, api) => {
    if (err) {
      res.send(err);
    } else {
      res.json(api);
    }
  });
};

exports.delete = (req, res) => {
  Api.remove({ _id: req.params.id }, (err, api) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: `${api.name} API successfully deleted` });
    }
  });
};
