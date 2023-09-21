const {Router} = require('express')

const postController = require('../controllers/post.controller')
const {checkToken} = require('../middlewares/checkToken')
const upload = require('../middlewares/file')



const postRouter = Router()

postRouter.post('/', checkToken, upload.single('postImage'), postController.createPost)
postRouter.get('/ownPosts', checkToken, postController.getOwnPosts)
postRouter.get('/ownPosts/:postId', checkToken, postController.postById)

module.exports = postRouter