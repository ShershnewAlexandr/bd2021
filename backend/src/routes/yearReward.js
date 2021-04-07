const express = require('express');
const withAuth = require('../utils/withAuth');
const controller = require('../controllers/yearReward');
const router = express.Router();

router.get('/get', withAuth(), controller.get);
router.post('/create', withAuth(), controller.create);
router.put('/update', withAuth(), controller.update);
router.post('/delete', withAuth(), controller.delete);

module.exports = router;