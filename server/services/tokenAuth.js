const {promisify} = require('util')
const jwt = require('jsonwebtoken')

const promisifyJwtSign = promisify(jwt.sign)
const promisifyJwtVerify = promisify(jwt.verify)


module.exports.createToken = async({userId, email})=>{
    return await promisifyJwtSign({userId, email}, process.env.ACCESS_SECRET,{
        expiresIn: 60*60
    })
}

module.exports.verifyToken = async(token)=>{
    return await promisifyJwtVerify(token, process.env.ACCESS_SECRET)
}

module.exports.createRefreshToken = async({userId, email}) => {
    return await promisifyJwtSign({userId, email}, process.env.REFRESH_SECRET,{
        expiresIn: '7d'
    })
}

module.exports.verifyRefreshToken = async(token)=>{
    return await promisifyJwtVerify(token, process.env.REFRESH_SECRET)
}