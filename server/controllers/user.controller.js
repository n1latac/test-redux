const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports.createUser = async(req, res, next) => {
    try {
        const {body, passwordHash} = req
        const user = await User.create({...body, password: passwordHash})
        res.status(200).send({data:user})
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