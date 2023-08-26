const {Router} = require('express')
const postController = require('../controllers/post.controller')

const postRouter = Router()

postRouter.post('/:authorId', postController.createPost)

module.exports = postRouter