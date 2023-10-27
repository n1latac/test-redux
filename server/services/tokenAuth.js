const {promisify} = require('util')
const jwt = require('jsonwebtoken')

const promisifyJwtSign = promisify(jwt.sign)
const promisifyJwtVerify = promisify(jwt.verify)


module.exports.createToken = async({userId, email})=>{
    return await promisifyJwtSign({userId, email}, 'vcyeveyrebcDSJ',{
        expiresIn: 60*60
    })
}

module.exports.verifyToken = async(token)=>{
    return await promisifyJwtVerify(token, 'vcyeveyrebcDSJ')
}

module.exports.createRefreshToken = async({userId, email}) => {
    return await promisifyJwtSign({userId, email}, 'AFKSDFHSKDFJkdjh23sfkslk234',{
        expiresIn: '7d'
    })
}

module.exports.verifyRefreshToken = async(token)=>{
    return await promisifyJwtVerify(token, 'AFKSDFHSKDFJkdjh23sfkslk234')
}