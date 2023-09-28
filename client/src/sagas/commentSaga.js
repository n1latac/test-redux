import {put} from 'redux-saga/effects'

import {createComment, getComments} from '../api/comment'

import {createCommentSuccess, createCommentError,
getCommentsSuccess, getCommentsError} from '../actions/actionCreator'

export function* createCommentSaga(action){
    try {
        console.log(action)
        const comment = yield createComment(action.payload)
        yield put(createCommentSuccess(comment))
    } catch (error) {
        yield put(createCommentError(error))
    }
}
export function* getCommentsSaga(action){
    try {
        const comments = yield getComments(action.payload)
        yield put(getCommentsSuccess(comments))
        console.log(comments)
    } catch (error) {
        yield put(getCommentsError(error))
    }
}