const { response } = require('express');
const jwt = require('jsonwebtoken');
const util = require('../utils.js')


// **************  secret key  ********************
secretKey = "asdfghjklzxcvbnmqwertyuiop1234567890"

// **************  generate Token  ****************
const generateToken = (request, response) => {
    const authToken = jwt.sign({ request }, secretKey, { expiresIn: '1h' });
    response.json(util.responseSuccessJson(200, 'success', authToken))

}

// ***************   verify token   ***************
const verifyToken = (request, response, next) => {
    const token = request.headers['authorization'];
    if (!token) {
        response.json({ 'status': 403, message: 'A token is required for authentication' })
    }
    else {
        try {
            const decodedToken = jwt.verify(token, secretKey);
            request.decodedToken = decodedToken
        }
        catch {
            response.json({ status: "error", data: 'something went wrong' })
        }
    }
    return next();
}



module.exports = { generateToken, verifyToken }