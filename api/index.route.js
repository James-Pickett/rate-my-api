const express = require('express');
const apiRoute = require('./school/school.route');

const router = express.Router();

router.use('/schools', apiRoute);

module.exports = router;
