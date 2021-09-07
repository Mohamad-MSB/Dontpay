const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/userController');


router.post('/register', controller.register);

router.post('/login', controller.login);

router.post('/resetpassword', controller.resetPassword);

// to authorize the user with the token /// and will protect every line below this function
router.use(passport.authenticate('articleToken',{session: false}));

router.put('/addToFavorite/:article_id', controller.addToFavorites);

router.get('/favorites', controller.favoritesList);

module.exports = router;