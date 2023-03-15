const { response } = require('express');
const jwt = require('jsonwebtoken');
const util = require('../utils.js')


// **************  secret key  ********************
secretKey = "asdfghjklzxcvbnmqwertyuiop1234567890"

// **************  generate Token  ****************
const generateToken = (email) => {
    const authToken = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    console.log(authToken);
    return authToken;
}

// ***************   verify token   ***************
const verifyToken = (request, response, next) => {
    const token = request.headers['authorization'];
    if (!token) {
        response.json(util.responseErrorJson(403, 'error', 'A token is required for authentication'))
    }
    else {
        try {
            jwt.verify(token, secretKey);
        }
        catch {
            response.json(util.responseErrorJson(401, "error", 'something went wrong'))
        }
    }
    return next();
}



module.exports = { generateToken, verifyToken }