const express = require('express');
const withAuth = require('../utils/withAuth');
const controller = require('../controllers/author');
const router = express.Router();

router.get('/get', withAuth(), controller.get);
router.put('/update', withAuth(), controller.update);

module.exports = router;