const {Router} = require('express')
const {checkToken} = require('../middlewares/checkToken')
const commentController = require('../controllers/comment.controller')

const commentRouter = Router()

commentRouter.post('/:postId', checkToken, commentController.createComment)
commentRouter.get('/:postId', commentController.getComments)
commentRouter.delete('/:postId', checkToken, commentController.deleteComment)
commentRouter.put('/', checkToken, commentController.updateComment)

module.exports = commentRouter