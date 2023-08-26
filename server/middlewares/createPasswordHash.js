const bcrypt = require('bcrypt')
const {SALT_ROUNDS} = require('../config/constants')

module.exports.createPasswordHash = async(req, res, next)=>{
    try {
        const {body:{password}} = req
        req.passwordHash = await bcrypt.hash(password, SALT_ROUNDS)
        next()
    } catch (error) {
        res.send({message: 'error with pass'})
    }
}