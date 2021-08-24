const mongoose = require('mongoose');
const addressSchema = require('./addressModel');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    age: { type: Number, min: 18, max: 80, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, unique: true },
    rating: { type: String },
    created: {type: Date, default: Date.now()},
    address: addressSchema
})

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
