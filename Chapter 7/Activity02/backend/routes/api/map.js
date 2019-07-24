const router = require('express').Router();
const Map = require('../../map');
const MapController = new Map();

router.get('/', MapController.get);

module.exports = router;