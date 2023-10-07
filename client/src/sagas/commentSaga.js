import {put} from 'redux-saga/effects'

import {createComment, getComments, deleteComment, updateComment} from '../api/comment'

import {createCommentSuccess, createCommentError,
getCommentsSuccess, getCommentsError,
deleteCommentSuccess, deleteCommentError,
updateCommentError, updateCommentSuccess} from '../actions/actionCreator'

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
export function* deleteCommentSaga(action){
    try {
        const deletedComment = yield deleteComment(action.payload)
        yield put(deleteCommentSuccess(deletedComment._id))
    } catch (error) {
        yield put(deleteCommentError(error))
    }
}
export function* updateCommentSaga(action){
    try {
        const updatedComment = yield updateComment(action.payload)
        console.log(updatedComment)
        yield put(updateCommentSuccess(updatedComment))
    } catch (error) {
        yield put(deleteCommentError(error))
    }
}