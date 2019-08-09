
const express = require('express');

const sessionRouter = require('./api/session');
const mapRouter = require('./api/map');
const trainRouter = require('./api/train');
const restricted = require('./restrict');

const router = express.Router();

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// public
router.use('/auth', sessionRouter);
router.use('/map', mapRouter);
// private
router.use(restricted);
router.use('/train', trainRouter);


module.exports = router;