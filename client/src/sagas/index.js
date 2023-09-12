import {takeLatest} from 'redux-saga/effects'

import ACTION_TYPES from '../actions/actionTypes'
import {registerSaga, loginUserSaga} from './authSaga'

function* rootSaga(){
    yield takeLatest(ACTION_TYPES.REGISTER_USER_REQUEST, registerSaga)
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga)
}

export default rootSaga