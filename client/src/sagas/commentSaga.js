import {put} from 'redux-saga/effects'

import {createComment} from '../api/comment'

import {createCommentSuccess, createCommentError} from '../actions/actionCreator'

export function* createCommentSaga(action){
    try {
        const comment = yield createComment(action.payload)
        console.log(comment, 'comment')
    } catch (error) {
        yield put(createCommentError(error))
    }
}