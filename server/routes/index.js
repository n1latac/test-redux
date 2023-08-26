const {Router} = require('express')
const userRouter = require('./userRoutes')
const postRouter = require('./postRouter')
const router = Router()

router.use('/user', userRouter)
router.use('/post', postRouter)


module.exports = router