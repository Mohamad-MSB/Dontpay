const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: { type: String, lowercase: true, required: true },
    lastname: { type: String, lowercase: true, required: true },
    username: { type: String, lowercase: true, required: true, unique: true },
    hash: { type: String, required: true },
    age: { type: Number, min: 18, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number },
    created: {type: Date, default: Date.now()}
})

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
