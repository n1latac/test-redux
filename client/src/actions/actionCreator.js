import ACTION_TYPES from './actionTypes'

export function registerUserRequest(payload){
    return ({
        type: ACTION_TYPES.REGISTER_USER_REQUEST,
        payload
    })
}
export function registerUserSuccess(data){
    return ({
        type: ACTION_TYPES.REGISTER_USER_SUCCESS,
        data
    })
}
export function registerUserError(error){
    return ({
        type: ACTION_TYPES.REGISTER_USER_ERROR,
        error
    })
}
export function loginUserRequest(payload){
    return({
        type: ACTION_TYPES.LOGIN_USER_REQUEST,
        payload
    })
}
export function loginUserSuccess(data){
    return({
        type: ACTION_TYPES.LOGIN_USER_SUCCESS,
        data
    })
}
export function loginUserError(error){
    return({
        type: ACTION_TYPES.LOGIN_USER_ERROR,
        error
    })
}
export function getMeRequest(){
    return({
        type: ACTION_TYPES.GET_ME_REQUEST
    })
}
export function getMeSuccess(data){
    return({
        type: ACTION_TYPES.GET_ME_SUCCESS,
        data
    })
}
export function getMeError(error){
    return({
        type: ACTION_TYPES.GET_ME_ERROR,
        error
    })
}