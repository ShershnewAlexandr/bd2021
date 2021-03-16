const express = require('express');
const withAuth = require('../utils/withAuth');
const controller = require('../controllers/ingredient');
const router = express.Router();

router.get('/get', withAuth(), controller.get);
router.post('/create', withAuth(), controller.create);
router.put('/update', withAuth(), controller.update);
router.delete('/delete', withAuth(), controller.delete);

module.exports = router;