const pool = require('../database/db.js').pool;
const util = require('../utils.js');
const bcrypt = require('bcryptjs');
const token = require('../auth/validateToken')

const userSignUp = (request, response) => {

    var salt = bcrypt.genSaltSync(5);
    let hashPassword = bcrypt.hashSync(request.body.password, salt);

    pool.query("insert into users(email,password)values('" + request.body.email + "','" + hashPassword + "')", (err, result) => {
        if (err) {
            response.json(util.responseErrorJson(401, 'error', err))
        }
        else {
            response.json(util.responseSuccessJson(200, 'success', 'user added successfully'))

        }
    })
}

const userSignIn = (request, response) => {
    pool.query("select * from users where email = '" + request.body.email + "'", (err, result) => {
        bcrypt.compare(request.body.password, result.recordset[0].password, (err, res) => {
            if (!err) {
                if (res) {
                    token.generateToken({ email: result.recordset[0].email }, response);
                }
            }

        })
    })
}


module.exports = { userSignUp, userSignIn }