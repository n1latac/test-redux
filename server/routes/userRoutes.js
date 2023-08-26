const {Router} = require('express')
const userController = require('../controllers/user.controller')
const {createPasswordHash} = require('../middlewares/createPasswordHash')

const userRouter = Router()

userRouter.post('/signup', createPasswordHash, userController.createUser)
userRouter.post('/login', userController.loginUser)

module.exports = userRouter