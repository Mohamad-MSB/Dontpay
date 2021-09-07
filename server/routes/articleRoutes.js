const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');
const passport = require('passport');


router.get('/categorieslist', controller.categorieslist);

router.get('/category/:category', controller.category);

router.get('/category/:category/:article', controller.article);

router.get('/new', controller.newArticle);

// to authorize the user with the token /// and will protect every line below this function
router.use(passport.authenticate('articleToken',{session: false}));

router.delete('/category/:category/:id', controller.removearticle);

// router.get('/favoritelist', controller.favoritelist);

// router.get('/favoritelist/:id', controller.favoritearticle);

// router.put('/category/:category/:article/:favorite', controller.makefavorite);

// router.put('/favoritelist/:id/:favorite', controller.removefromfavorites)


router.post('/add', controller.add);

router.put('/update', controller.update);

// router.delete('/delete', controller.remove);


module.exports = router;