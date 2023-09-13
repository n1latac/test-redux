const {verifyToken} = require('../services/tokenAuth')

module.exports.checkToken = async(req, res, next) => {
    try {
        const {headers: {authorization}} = req
        const [,token] = authorization.split(' ')
        const userFromToken = await verifyToken(token)
        req.userIdFromToken = userFromToken.userId
        next()
    } catch (error) {
        res.status(403).send(error.message)
    }
}