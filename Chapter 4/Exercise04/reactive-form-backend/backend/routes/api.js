
const express = require('express');

const sessionRouter = require('./api/session');
const mapRouter = require('./api/map');
const trainRouter = require('./api/train');
const restricted = require('./restrict');

const router = express.Router();

// public
router.use('/auth', sessionRouter);

// private
router.use(restricted);
router.use('/map', mapRouter);
router.use('/train', trainRouter);


module.exports = router;