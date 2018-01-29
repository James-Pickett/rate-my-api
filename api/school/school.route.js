const express = require('express');
const schoolController = require('./school.controller');

const router = express.Router();

router.route('/')
  .get(schoolController.list)
  .post(schoolController.create);

router.route('/:id')
  .get(schoolController.get)
  .put(schoolController.update)
  .delete(schoolController.delete);

module.exports = router;
