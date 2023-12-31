import { takeLatest} from 'redux-saga/effects'

import ACTION_TYPES from '../actions/actionTypes'
import {registerSaga, loginUserSaga, checkAuthSaga, userExitSaga, refreshSessionSaga} from './authSaga'
import {addPostSaga, getOwnPostsSaga, getAllPostsSaga} from './postSaga'
import {createCommentSaga, getCommentsSaga, deleteCommentSaga, updateCommentSaga} from './commentSaga'

function* rootSaga(){
    yield takeLatest(ACTION_TYPES.REGISTER_USER_REQUEST, registerSaga)
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga)
    yield takeLatest(ACTION_TYPES.GET_ME_REQUEST, checkAuthSaga)
    yield takeLatest(ACTION_TYPES.USER_EXIT_REQUEST, userExitSaga)
    yield takeLatest(ACTION_TYPES.CREATE_POST_REQUEST, addPostSaga)
    yield takeLatest(ACTION_TYPES.GET_OWN_POSTS_REQUEST, getOwnPostsSaga)
    yield takeLatest(ACTION_TYPES.GET_ALL_POSTS_REQUEST, getAllPostsSaga)
    yield takeLatest(ACTION_TYPES.REFRESH_SESSION_REQUEST, refreshSessionSaga)
    
    yield takeLatest(ACTION_TYPES.CREATE_COMMENT_REQUEST, createCommentSaga)
    yield takeLatest(ACTION_TYPES.GET_COMMENTS_REQUEST, getCommentsSaga)
    yield takeLatest(ACTION_TYPES.DELETE_COMMENT_REQUEST, deleteCommentSaga)
    yield takeLatest(ACTION_TYPES.UPDATE_COMMENT_REQUEST, updateCommentSaga)
}

export default rootSaga