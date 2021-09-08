

const multer = require('multer');
//const articleimage = require('../models/imageArticleModel');


const multerConfig = multer.diskStorage({

    destination: (req,file,callback) => {
        callback(null,'uploads/images/');
    }, 
    filename: (req,file,callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image-${Date.now()}.${ext}`);
    }, 
});

const isImage = (req, file, callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null, true)
    }else{
        callback(new Error('Only Image is Allowed..'));
    }
}


const upload = multer({
   storage:multerConfig,
   fileFilter:isImage,
});

exports.uploadImage = upload.single('photo')



exports.upload = (req, res) => {

    console.log(req.file)

    res.status(200).json({ 
        success:'Success'
    })
}

exports.getImage = async(req, res) => {

    try {
        const user = await articleimage.findById(req.params["userId"]);
  
        res.sendFile(`${__dirname}/uploads/images/${user.profileImage}`);
    } catch (error) {
        console.log(error)
    }
}
   
  