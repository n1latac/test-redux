const {Router} = require('express')
const userRouter = require('./userRoutes')
const postRouter = require('./postRouter')
const commentRouter = require('./commentRouter')
const router = Router()

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/comment', commentRouter)
router.use('/test',async(req, res)=>{
    try {
        res.send('hello2')
    } catch (error) {
        
    }
})


module.exports = router
