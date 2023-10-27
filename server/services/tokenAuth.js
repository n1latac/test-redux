const {promisify} = require('util')
const jwt = require('jsonwebtoken')

const promisifyJwtSign = promisify(jwt.sign)
const promisifyJwtVerify = promisify(jwt.verify)

const accessSecret = process.env.ACCESS_SECRET
const refreshSecret = proccess.env.REFRESH_SECRET


module.exports.createToken = async({userId, email})=>{
    return await promisifyJwtSign({userId, email}, accessSecret,{
        expiresIn: 60*60
    })
}

module.exports.verifyToken = async(token)=>{
    return await promisifyJwtVerify(token, accessSecret)
}

module.exports.createRefreshToken = async({userId, email}) => {
    return await promisifyJwtSign({userId, email}, refreshSecret,{
        expiresIn: '7d'
    })
}

module.exports.verifyRefreshToken = async(token)=>{
    return await promisifyJwtVerify(token, refreshSecret)
}