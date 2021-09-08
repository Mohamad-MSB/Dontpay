const express = require('express');
const {upload , uploadImage , getImage}= require('../controllers/userLoadController');

const router = express.Router();


router.post('/imageUpload',uploadImage, upload);

router.get("/profileImage/:userId", getImage);



module.exports = router;