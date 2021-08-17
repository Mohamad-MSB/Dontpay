const articleModel = require('../models/articleModel');
const imageModel = require('../models/imageArticleModel');
const userModel = require('../models/userModel');


//  to add an article from the user 
exports.add = async (req, res) => {

    try {

        const user = await userModel.findById(req.body.user_id)

        if(user == null){
            res.status(400).json({message: 'user not found'});
        } else {
        
            const image = await imageModel.create({
                imagename: req.body.imagename
            })
            const article = await articleModel.create({
                user_id: req.body.user_id,
                articlename: req.body.articlename,
                description: req.body.description,
                status: req.body.status,
                note: req.body.note,
                quantity: req.body.quantity,
                articleimage_id:image._id,
                category: req.body.category
            })
            res.status(200).json({ message: "article added successfully", article: article })
        }
        
    } catch (error) {
        res.status(500).json({ message: "error happend", error: error.message })
    }
}


//  to edit an article from the user 

exports.update = async (req, res) => {
    const article = await articleModel.findById(req.body.id)
    if (article === null) {
        res.status(404).json({ message: "Article not found" })
    }
    try {
        const articleUpdated = await articleModel.findByIdAndUpdate(req.body.id, {
            articlename: req.body.articlename,
            description: req.body.description,
            status: req.body.status,
            note: req.body.note,
            quantity: req.body.quantity,
            category: req.body.category,
        }, {new : true})

        await imageModel.findByIdAndUpdate(articleUpdated.articleimage_id,{
            imagename: req.body.imagename,
        })

        res.status(200).json({ message: "article updated successfully", article: articleUpdated })

    } catch (error) {
        res.status(500).json({ message: "error happend", error: error.message })
    }
}



