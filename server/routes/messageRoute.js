const express = require('express');
const router = express.Router();
const controller = require('../controllers/messagesController');
const passport = require('passport');


router.use(passport.authenticate('articleToken',{session: false})); 


router.post('/send/:id', controller.sendMessage)








module.exports = router;