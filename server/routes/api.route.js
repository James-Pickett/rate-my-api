const express = require('express');
const apiController = require('../controllers/api.controller');

const router = express.Router();

router.route('/')
  .get(apiController.list)
  .post(apiController.create);

router.route('/:id')
  .get(apiController.get)
  .put(apiController.update)
  .delete(apiController.delete);

module.exports = router;
