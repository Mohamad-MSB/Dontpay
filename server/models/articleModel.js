const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    articlename: {type: String, required: true},
    description: {type: String, required: true},
    status:  {type: String, enum:["used", "like new", "new", "defect"], required: true},
    note: {type: String, max: 300},
    views: {type: Number, default: 0},
    quantity: {type: Number, required: true},
    created: {type: Date, default: Date.now()},
    category: {type: String, enum: ["Electronics", "Sports", "Collectables", "Home", "fashion"], required: true},
    feautured: {type: Boolean, default: false},
    articleimage_id: {type: mongoose.Schema.Types.ObjectId, ref: 'articleimage', required: false}
    
})

const articleModel = new mongoose.model('article',articleSchema);

module.exports = articleModel;