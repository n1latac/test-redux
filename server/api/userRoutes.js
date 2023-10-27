const {Router} = require('express')
const userController = require('../controllers/user.controller')
const {createPasswordHash} = require('../middlewares/createPasswordHash')
const {checkToken} = require('../middlewares/checkToken')

const userRouter = Router()

userRouter.get('/getMe', checkToken, userController.getMe)
userRouter.post('/refresh', userController.refreshSession)
userRouter.post('/signup', createPasswordHash, userController.createUser)
userRouter.post('/login', userController.loginUser)

module.exports = userRouter