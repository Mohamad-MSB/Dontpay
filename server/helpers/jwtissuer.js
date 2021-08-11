const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {

    return jwt.sign({
        sub: user._id,
    }, process.env.SECRET_KEY,{expiresIn: "60s"})
}