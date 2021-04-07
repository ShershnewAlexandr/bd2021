const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/author', require('./author'));
router.use('/ingredient', require('./ingredient'));
router.use('/yearReward', require('./yearReward'));
router.use('/recipe', require('./recipe'));

module.exports = router;