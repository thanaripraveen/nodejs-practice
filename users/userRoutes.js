const router = require('express').Router();
const userController = require('./userController.js')

router.post('/signUp',userController.userSignUp);
router.post('/signIn',userController.userSignIn);

module.exports = router