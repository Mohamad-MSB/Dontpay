const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
    sender: {type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true},
    reciever: {type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true},
    orderNumber: {type: Number},
    content: {type: String },
    send_on: {type: Date, default: Date.now()},
})

const messagesModel = new mongoose.model('messages',messagesSchema);

module.exports = messagesModel;
