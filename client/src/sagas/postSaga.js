import {put} from 'redux-saga/effects'

import {createPost, getOwnPosts, getAllPosts} from '../api/post'
import {createPostSuccess, createPostError,
getOwnPostsSuccess, getOwnPostsError,
getAllPostsSuccess, getAllPostsError} from '../actions/actionCreator'
import { toast } from 'react-toastify'

export function* addPostSaga(action){
    try {
        const result = yield createPost(action.payload)
        yield put(createPostSuccess(result))
        toast('your post is added')
    } catch (error) {
        yield put(createPostError(error))
    }
}

export function* getOwnPostsSaga(){
    try {
        const posts = yield getOwnPosts()
        yield put(getOwnPostsSuccess(posts))
    } catch (error) {
        yield put(getOwnPostsError(error))
    }
}
export function* getAllPostsSaga(){
    try {
        const allPosts = yield getAllPosts()
        yield put(getAllPostsSuccess(allPosts))
    } catch (error) {
        console.log(error)
        yield put(getAllPostsError(error.errorMessage))
    }
}



