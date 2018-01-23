const express = require('express');
const apiController = require('../controllers/api.controller');

const router = express.Router();

router.route('/')
  .get(apiController.list)
  .post(apiController.list);


module.exports = router;
