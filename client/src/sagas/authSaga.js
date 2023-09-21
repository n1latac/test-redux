import {put} from 'redux-saga/effects'
import history from '../browserHistory'
import {toast} from 'react-toastify'

import { register, login, checkAuth, userExit } from '../api/user'
import { registerUserSuccess, registerUserError,
loginUserError, loginUserSuccess,
getMeSuccess, getMeError,
userExitSuccess, userExitError } from '../actions/actionCreator'



export function* registerSaga(action){
    try {
        const {data, tokens:{accessToken}, message} = yield register(action.payload)
        localStorage.setItem('accessToken', accessToken)
        yield put(registerUserSuccess(data))
        toast(message, {position: 'bottom-right'})
        history.push('/')
    } catch (error) {
        yield put(registerUserError(error.response.data.error))
        toast(error.response.data.error, {position: 'bottom-right'})
    }
}
export function* loginUserSaga(action){
    try {
        const {tokens: {accessToken}, data, message} = yield login(action.payload)
         yield put(loginUserSuccess(data))
         localStorage.setItem('accessToken', accessToken)
         toast(message, {position: 'bottom-right'})
         history.push('/')
    } catch (error) {
        yield put(loginUserError(error.response.data.error))
        toast(error.response.data.error, {position: "bottom-right",})
    }
}

export function* checkAuthSaga(){
    try {
        const user = yield checkAuth()
        yield put(getMeSuccess(user))
    } catch (error) {
        console.log(error)
        yield put(getMeError(error.errorMessage))
    }
}
export function* userExitSaga(){
    try {
        const result = yield userExit()
        localStorage.removeItem('accessToken')
        yield put(userExitSuccess())
        toast(result.message)
        history.push('/')
    } catch (error) {
        console.log(error)
        yield put(userExitError(error))
    }
}