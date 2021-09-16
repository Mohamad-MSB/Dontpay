const messagesModel = require('../models/messagesModel');




exports.getMessage = async (req, res) => {

    try {
        
        const message = await messagesModel.find({
            user1: req.user._id,
            user2: req.body.userId
        })

        res.status(200).json({message: message});


    } catch (error) {
        
    }
}


exports.sendMessage = async(req, res) => {
    console.log(req.body.userId, )

    try {
        
        const message = await messagesModel.create({
            sender: req.user._id,
            reciever: req.params.id,
            content: req.body.message
        })

        
        res.status(200).json({message: "message send", message: message})



    } catch (error) {
        res.status(500).json({message:"error happens here", error: error.message})
    }
}