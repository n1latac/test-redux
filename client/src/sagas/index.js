import {take, takeLatest} from 'redux-saga/effects'

import ACTION_TYPES from '../actions/actionTypes'
import {registerSaga, loginUserSaga, checkAuthSaga, userExitSaga} from './authSaga'
import {addPostSaga, getOwnPostsSaga, getPostByIdSaga} from './postSaga'

function* rootSaga(){
    yield takeLatest(ACTION_TYPES.REGISTER_USER_REQUEST, registerSaga)
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga)
    yield takeLatest(ACTION_TYPES.GET_ME_REQUEST, checkAuthSaga)
    yield takeLatest(ACTION_TYPES.USER_EXIT_REQUEST, userExitSaga)
    yield takeLatest(ACTION_TYPES.CREATE_POST_REQUEST, addPostSaga)
    yield takeLatest(ACTION_TYPES.GET_OWN_POSTS_REQUEST, getOwnPostsSaga)
    yield takeLatest(ACTION_TYPES.GET_POST_BY_ID_REQUEST, getPostByIdSaga)
}

export default rootSaga