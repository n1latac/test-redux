import {put} from 'redux-saga/effects'
import history from '../browserHistory'
import {toast} from 'react-toastify'

import { register, login, checkAuth, userExit, refresh } from '../api/user'
import { registerUserSuccess, registerUserError,
loginUserError, loginUserSuccess,
getMeSuccess, getMeError,
userExitSuccess, userExitError,
refreshSessionSuccess, refreshSessionError } from '../actions/actionCreator'



export function* registerSaga(action){
    try {
        const {data, tokens:{accessToken, refreshToken}, message} = yield register(action.payload)
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        yield put(registerUserSuccess(data))
        toast(message)
        history.push('/')
    } catch (error) {
        yield put(registerUserError(error.response.data.error))
        toast(error.response.data.error, {position: 'bottom-right'})
    }
}
export function* loginUserSaga(action){
    try {
        const {tokens: {accessToken, refreshToken}, data, message} = yield login(action.payload)
         yield put(loginUserSuccess(data))
         localStorage.setItem('accessToken', accessToken)
         localStorage.setItem('refreshToken', refreshToken)
         toast(message)
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
        yield put(getMeError(error.errorMessage))
    }
}
export function* refreshSessionSaga(){
    try {
        const {data, tokens: {accessToken, refreshToken}} = yield refresh()
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        yield put(refreshSessionSuccess(data))
    } catch (error) {
        yield put(refreshSessionError(error.errorMessage))
    }
}
export function* userExitSaga(){
    try {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        yield put(userExitSuccess())
        toast('you are logout')
        history.push('/')
    } catch (error) {
        console.log(error)
        yield put(userExitError(error))
    }
}