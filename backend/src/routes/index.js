const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/author', require('./author'));
router.use('/ingredient', require('./ingredient'));
router.use('/yearReward', require('./yearReward'));

module.exports = router;