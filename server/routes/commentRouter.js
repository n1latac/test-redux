const {Router} = require('express')
const {checkToken} = require('../middlewares/checkToken')
const commentController = require('../controllers/comment.controller')

const commentRouter = Router()

commentRouter.post('/:postId', checkToken, commentController.createComment)
commentRouter.get('/:postId', commentController.getComments)

module.exports = commentRouter