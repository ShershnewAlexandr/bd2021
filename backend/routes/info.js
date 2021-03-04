const express = require('express');
const controller = require('../controllers/info');
const passport = require('passport');
const router = express.Router();

router.post('/get', controller.get);
router.post('/update', passport.authenticate('jwt', {session: false}), controller.update);

module.exports = router;