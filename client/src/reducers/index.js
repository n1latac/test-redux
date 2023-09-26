import { combineReducers } from "redux"

import user from './userReducer'
import post from './postReducer'
import comment from './commentReducer'

const appReducer = combineReducers({
    userStore: user,
    postStore: post,
    commentStore: comment
})
export default appReducer