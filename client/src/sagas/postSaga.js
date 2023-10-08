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

export function* getOwnPostsSaga(action){
    try {
        const data = yield getOwnPosts(action.payload)
        yield put(getOwnPostsSuccess(data))
    } catch (error) {
        yield put(getOwnPostsError(error))
    }
}
export function* getAllPostsSaga(action){
    try {
        const data = yield getAllPosts(action.payload)
        yield put(getAllPostsSuccess(data))
    } catch (error) {
        console.log(error)
        yield put(getAllPostsError(error.errorMessage))
    }
}



