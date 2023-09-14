import {takeLatest} from 'redux-saga/effects'

import ACTION_TYPES from '../actions/actionTypes'
import {registerSaga, loginUserSaga, checkAuthSaga, userExitSaga} from './authSaga'

function* rootSaga(){
    yield takeLatest(ACTION_TYPES.REGISTER_USER_REQUEST, registerSaga)
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga)
    yield takeLatest(ACTION_TYPES.GET_ME_REQUEST, checkAuthSaga)
    yield takeLatest(ACTION_TYPES.USER_EXIT_REQUEST, userExitSaga)
}

export default rootSaga