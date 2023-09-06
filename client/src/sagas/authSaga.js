import {put} from 'redux-saga/effects'
import history from '../browserHistory'

import { register } from '../api/user'
import { registerUserSuccess, registerUserError } from '../actions/actionCreator'



export function* registerSaga(action){
    try {
        const result = yield register(action.payload)
        yield put (registerUserSuccess(result))
        history.push('/')
    } catch (error) {
        yield put(registerUserError(error))
    }
}