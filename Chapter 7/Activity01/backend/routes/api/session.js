const router = require('express').Router();
const Session = require('../../auth');
const SessionController = new Session();

router.post('/login', SessionController.login);
router.post('/signup', SessionController.signup);
router.post('/logout', SessionController.logout);
router.get('/validate', SessionController.validate);

module.exports = router;