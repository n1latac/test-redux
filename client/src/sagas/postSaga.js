import {put} from 'redux-saga/effects'

import {createPost} from '../api/post'
import {createPostSuccess, createPostError} from '../actions/actionCreator'
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