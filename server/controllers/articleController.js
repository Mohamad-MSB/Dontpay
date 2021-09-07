const articleModel = require('../models/articleModel');
const imageModel = require('../models/imageArticleModel');
const userModel = require('../models/userModel');


//  to add an article from the user 
// need to add image upload code 
exports.add = async (req, res) => {

    try {

        const user = await userModel.findById(req.body.user_id);

        if (user == null) {
            res.status(400).json({ message: 'user not found' });
        } else {

            const image = await imageModel.create({
                imagename: req.body.imagename
            })
            const article = await articleModel.create({
                user_id: req.body.user_id,
                articlename: req.body.articlename,
                description: req.body.description,
                status: req.body.status.toLowerCase(),
                note: req.body.note,
                quantity: req.body.quantity,
                articleimage_id: image._id,
                category: req.body.category.toLowerCase()
            })

            res.status(200).json({ message: "article added successfully", article: article})
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
        }, { new: true })

        await imageModel.findByIdAndUpdate(articleUpdated.articleimage_id, {
            imagename: req.body.imagename,
        })

        res.status(200).json({ message: "article updated successfully", article: articleUpdated })

    } catch (error) {
        res.status(500).json({ message: "error happend", error: error.message })
    }
}


// remove items 

exports.removearticle = async (req, res) => {

    // console.log(req.user._id);
    try {

        const article = await articleModel.findById(req.params.id);
        console.log(req.user._id, article.user_id)
        if (req.user._id.toString() == article.user_id.toString()) {
            await articleModel.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "the article has been deleted" })
        }

        return res.status(400).json({ message: "you are not allowed to delete" })

    } catch (error) {
        res.status(500).json({ message: "error happend", error: error.message })
    }

}

// review article 
exports.categorieslist = async (req, res) => {

    try {
        const categories = await articleModel.schema.path("category").enumValues;
        const status = await articleModel.schema.path("status").enumValues;

        return res.status(200).json({ message: "All Article", categories: categories, status: status })

    } catch (error) {
        return res.status(400).json({ message: "error happend" })
    }
}

exports.category = async (req, res) => {
    try {
        const articles = await articleModel.find({ category: req.params.category }).populate("user");

        return res.status(200).json({ message: "All Article", articles: articles })

    } catch (error) {
        return res.status(400).json({ message: "error happend" })
    }
}

exports.article = async (req, res) => {
    try {
        const article = await articleModel.findById(req.params.article).populate("user_id").populate("articleimage_id");

        const address = article.user_id.address;
        
        return res.status(200).json({ message: "signle Article", article: article, address: address });
        

    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message })
    }
}

exports.newArticle = async (req, res) => {
    try {
        const articles = await articleModel.find().populate("user_id").populate("articleimage_id")
            .limit(20)
            .sort('-created');

       return res.status(200).json({ message: "last article found", articles: articles });
    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message })
    }
}

// exports.makefavorite = async (req, res) => {
//     try {
//         const article = await articleModel.findByIdAndUpdate(req.params.article, {
//             favorite: req.params.true
//         }, { new: true });

//         return res.status(200).json({ message: "signle Article", article: article });

//     } catch (error) {
//         return res.status(400).json({ message: "error happend", error: error.message });
//     }
// }


// exports.favoritelist = async (req, res) => {
//     try {
//         const article = await articleModel.find({ favorite: true });

//         return res.status(200).json({ message: "favorite Article list", article: article });

//     } catch (error) {
//         return res.status(400).json({ message: "error happend", error: error.message });
//     }
// }

// exports.favoritearticle = async (req, res) => {
//     try {
//         const article = await articleModel.findById(req.params.id);

//         return res.status(200).json({ message: "single favorite Article", article: article });

//     } catch (error) {
//         return res.status(400).json({ message: "error happend", error: error.message });
//     }
// }

// exports.removefromfavorites = async (req, res) => {
//     try {
//         const article = await articleModel.findByIdAndUpdate(req.params.id, {
//             favorite: req.params.favorite,
//         })

//         return res.status(200).json({ message: "article removed successfully from favorite", article: article });
//     } catch (error) {
//         return res.status(400).json({ message: "error happend", error: error.message });
//     }
// }
