const bcrypt = require('bcrypt')
const User = require('../models/User')
const {createToken} = require('../services/tokenAuth')

module.exports.createUser = async(req, res, next) => {
    try {
        const {body, passwordHash} = req
        const user = await User.create({...body, password: passwordHash})
        const accessToken = await createToken({userId: user._id, email: user.email})
        res.status(200).send({data:user, tokens: {accessToken: accessToken}})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports.loginUser = async(req, res, next) => {
    try {
        const {email, password} = req.body
        const foundUser = await User.findOne({email})
        if(foundUser){
            const result = await bcrypt.compare(password, foundUser.password)
            if(result){
                res.status(200).send({message: 'you are log in'})
            }else{
                res.status(400).send({message: 'password is incorrect'})
            }
        }else{
            res.status(400).send({message: 'email is invalid'})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}