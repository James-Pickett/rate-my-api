const express = require('express');
const apiRoute = require('../routes/api.route');

const router = express.Router();

router.use('/apis', apiRoute);

module.exports = router;
