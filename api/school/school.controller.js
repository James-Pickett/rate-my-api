const mongoose = require('./school.model');

const School = mongoose.model('Schools');

exports.list = (req, res) => {
  School.find({}, (err, school) => {
    if (err) {
      res.send(err);
    } else {
      res.json(school);
    }
  });
};

exports.create = (req, res) => {
  const newSchool = new School(req.body);
  newSchool.save((err, school) => {
    if (err) {
      res.send(err);
    } else {
      res.json(school);
    }
  });
};

exports.get = (req, res) => {
  School.findById(req.params.id, (err, school) => {
    if (err) {
      res.send(err);
    } else {
      res.json(school);
    }
  });
};

exports.update = (req, res) => {
  School.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, school) => {
    if (err) {
      res.send(err);
    } else {
      res.json(school);
    }
  });
};

exports.delete = (req, res) => {
  School.remove({ _id: req.params.id }, (err, school) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: `${school.name} successfully deleted` });
    }
  });
};
