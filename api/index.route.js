const express = require('express');
const schoolsRoute = require('./school/school.route');

const router = express.Router();

router.use('/schools', schoolsRoute);

module.exports = router;
