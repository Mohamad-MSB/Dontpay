const userModel = require('../models/userModel');
const addressModel = require('../models/addressModel');
const bcrypt = require('bcrypt');
const authHelper = require('../helpers/jwtissuer');
const jwt = require('jsonwebtoken')

// user register function controller
exports.register = async (req, res) => {

    const hashPassword = await bcrypt.hash(req.body.password, 10)
    try {
        const user = await userModel.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            hash: hashPassword,
            age: req.body.age,
            email: req.body.email,
            phone: req.body.phone
        })

        await addressModel.create({
            streetname: req.body.streetname,
            hausnumber: req.body.hausnumber,
            zipcode: req.body.zipcode,
            city: req.body.city,
            land: req.body.land,
            user_id: user._id
        })

        // waiting for work shop from gilles
        // const image = {
        //     name: req.body.name,
        // desc: req.body.description,
        // img:
        // {
        //     data: Buffer,
        //     contentType: String
        // },
        // }

        res.status(200).json({message: "the user has been successfully added to the database",id: user._id})
    } catch (error) {
        res.status(400).json({message: "there is an error", error: error.message})        
    }
}

// user login function controller
exports.login = async (req,res) => {
    
    const user = await userModel.findOne({
        username: req.body.username
    })
    if(user === null){
        res.status(400).json({message: "unser does not exist"})
    }
    try {
        const checkPassword = await bcrypt.compare(req.body.password, user.hash)
        if(checkPassword){
            const token = authHelper.generateToken(user);
            // console.log('the token Is ', token);
            jwt.verify(token, process.env.SECRET_KEY, (err, user) =>{
                if(err) console.log("there was an error")
                // console.log('the content ', user)
            })
            res.status(200).json({message: "user is logged in", token : token})
        } else {
            res.status(400).json({message: "user or password does not match"})
        }
    } catch (error) {
        res.status(500).json({message: "error happens when password is incorrect", error: error.message})
    }
}

exports.resetPassword = async(req, res) => {

    const user = await userModel.findOne({
        username: req.body.username
    })
    if(user === null){
        res.status(400).json({message: "unser does not exist"})
    }
    try {
        const checkPasswordReset = await userModel.findOne({email: req.body.email})
        if(checkPasswordReset){
            const newPass = await bcrypt.hash(req.body.password, 10);
            const newPassword = await userModel.findByIdAndUpdate(req.body.id,{hash: newPass},function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated User : ", docs);
                }
            })
            res.status(200).json({message: "password is successfully reset", newpassword: newPassword})
        }
    } catch (error) {
        res.status(400).json({message: "error happend", error: error.message})
    }
}