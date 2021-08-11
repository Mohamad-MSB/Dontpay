const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        },
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: false}
})

const imageModel = new mongoose.model('image', imageSchema);

module.exports = imageModel;