const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');
const passport = require('passport');


router.get('/categorieslist', controller.categorieslist);

router.get('/category/:category', controller.category);

router.get('/category/:category/:article', controller.article);


// to authorize the user with the token /// and will protect every line below this function
router.use(passport.authenticate('articleToken',{session: false}));

router.post('/add', controller.add);

router.put('/update', controller.update);

router.delete('/delete', controller.remove);


module.exports = router;