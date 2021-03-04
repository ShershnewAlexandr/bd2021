const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

router.get('/get', controller.get);
router.post('/create', controller.create);
router.patch('/update', controller.update);
router.delete('/delete', controller.delete);

module.exports = router;