const bcrypt = require('bcrypt')
const User = require('../models/User')
const {createToken} = require('../services/tokenAuth')

module.exports.createUser = async(req, res, next) => {
    try {
        const {body, passwordHash} = req
        const foundUser = await User.findOne({email: body.email})
        if(foundUser){
            res.status(401).send({error: 'this email already registered'})
        }else{
            const user = await User.create({...body, password: passwordHash})
            const accessToken = await createToken({userId: user._id, email: user.email})

            const userWithoutPassword = foundUser.toObject()
            delete userWithoutPassword.password
            
            console.log(userWithoutPassword)
            res.status(200).send({data:userWithoutPassword, message: 'you have registered', tokens: {accessToken: accessToken}})
        }
        
    } catch (error) {
        res.status(401).send(error.message)
    }
}
module.exports.loginUser = async(req, res, next) => {
    try {
        const {email, password} = req.body
        const foundUser = await User.findOne({email})
        if(foundUser){
            const result = await bcrypt.compare(password, foundUser.password)
            if(result){
                const accessToken = await createToken({userId: foundUser._id, email: foundUser.email})

                const userWithoutPassword = foundUser.toObject()
                delete userWithoutPassword.password

                res.status(200).send({message: 'you are log in', data: userWithoutPassword, tokens: {accessToken: accessToken}})
            }else{
                res.status(401).send({error: 'password is incorrect'})
            }
        }else{
            res.status(401).send({error: 'email is incorrect'})
        }
    } catch (error) {
        res.status(401).send(error.message)
    }
}