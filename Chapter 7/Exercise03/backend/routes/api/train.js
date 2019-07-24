const router = require('express').Router();
const Train = require('../../train');
const TrainController = new Train();

router.get('/', TrainController.get);
router.get('/line/:id', TrainController.getById);
router.get('/trip', TrainController.getTrip)

module.exports = router;