const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');

router.post('/add', controller.add);

router.put('/update', controller.update);


module.exports = router;