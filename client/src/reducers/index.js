import { combineReducers } from "redux"

import user from './userReducer'
import post from './postReducer'

const appReducer = combineReducers({
    userStore: user,
    postStore: post
})

export default appReducer