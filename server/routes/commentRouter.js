const {Router} = require('express')
const {checkToken} = require('../middlewares/checkToken')
const commentController = require('../controllers/comment.controller')

const commentRouter = Router()

commentRouter.post('/', checkToken, commentController.createComment)

module.exports = commentRouter