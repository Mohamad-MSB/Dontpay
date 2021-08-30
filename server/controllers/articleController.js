const articleModel = require('../models/articleModel');
const imageModel = require('../models/imageArticleModel');
const userModel = require('../models/userModel');


//  to add an article from the user 
// need to add image upload code 
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


// remove items 

exports.remove = async (req, res) => {

    try {
        const article = await articleModel.findByIdAndDelete(req.body.id);

    if(!article){
      return res.status(404).json({ message: "there is no article to delete"})
    }

    return res.status(200).json({ message: "the article has been deleted"})
    } catch (error) {
        res.status(500).json({ message: "error happend"})
    }

}

// review article 
exports.view = async (req, res) => {

    try {
        const article = await articleModel.find({category : ["Electronics", "Sports", "Collectables", "Home", "fashion"]}).populate("user");
        
        const category = await articleModel.schema.path("category").enumValues;
        
        return res.status(200).json({ message: "All Article", article: article, option: category})
        
    } catch (error) {
        return res.status(400).json({ message: "error happend"})
    }
}

exports.category = async (req, res) => {
    try {
        const article = await articleModel.find({category : req.params.category}).populate("user");
        
        return res.status(200).json({ message: "All Article", article: article})
        
    } catch (error) {
        return res.status(400).json({ message: "error happend"})
    }
}
