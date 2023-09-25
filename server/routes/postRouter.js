const {Router} = require('express')

const postController = require('../controllers/post.controller')
const {checkToken} = require('../middlewares/checkToken')
const upload = require('../middlewares/file')



const postRouter = Router()

postRouter.post('/', checkToken, upload.single('postImage'), postController.createPost)
postRouter.get('/ownPosts', checkToken, postController.getOwnPosts)
postRouter.get('/ownPosts/:postId', postController.postById)
postRouter.put('/ownPosts/edit/:postId', checkToken, upload.single('postImage'), postController.changePost)
postRouter.delete('/ownPosts/:postId', checkToken, postController.deletePost)
postRouter.get('/all', postController.getAllPosts)

module.exports = postRouter