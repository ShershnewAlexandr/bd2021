const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/author', require('./author'));

module.exports = router;