const {promisify} = require('util')
const jwt = require('jsonwebtoken')

const promisifyJwtSign = promisify(jwt.sign)
const promisifyJwtVerify = promisify(jwt.verify)

const ACCESS_SECRET = 'vcyeveyrebcDSJ'

module.exports.createToken = async({userId, email})=>{
    return await promisifyJwtSign({userId, email}, ACCESS_SECRET,{
        expiresIn: 60*30
    })
}

module.exports.verifyToken = async(token)=>{
    return await promisifyJwtVerify(token, ACCESS_SECRET)
}