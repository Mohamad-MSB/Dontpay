const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
        imagename: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        },
        created: {type: Date, default: Date.now()},
        
})

const imageModel = new mongoose.model('articleimage', imageSchema);

module.exports = imageModel;