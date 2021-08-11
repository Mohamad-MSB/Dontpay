const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');


router.post('/register', controller.register);

router.post('/login', controller.login);

router.post('/resetpassword', controller.resetPassword);

module.exports = router;