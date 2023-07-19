const users = require("../models/users");
const AppError = require('../utils/app-error');
const userRequestForSignUp = require("../utils/userReq")


const signUp = async (req, res, next) => {
    try {
        const userRequestForSignUp = req.body;

        const newUser = new users((userRequestForSignUp));
        await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        
    }
}


module.exports = {signUp}