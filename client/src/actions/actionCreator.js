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
export function userExitRequest(){
    return({
        type: ACTION_TYPES.USER_EXIT_REQUEST
    })
}
export function userExitSuccess(){
    return({
        type: ACTION_TYPES.USER_EXIT_SUCCESS,
    })
}
export function userExitError(error){
    return({
        type: ACTION_TYPES.USER_EXIT_ERROR,
        error
    })
}
export function createPostRequest(payload){
    return({
        type: ACTION_TYPES.CREATE_POST_REQUEST,
        payload
    })
}
export function createPostSuccess(data){
    return({
        type: ACTION_TYPES.CREATE_POST_SUCCESS,
        data
    })
}
export function createPostError(error){
    return({
        type: ACTION_TYPES.CREATE_POST_ERROR,
        error
    })
}
export function getOwnPostsRequest(){
    return({
        type: ACTION_TYPES.GET_OWN_POSTS_REQUEST
    })
}
export function getOwnPostsSuccess(data){
    return({
        type: ACTION_TYPES.GET_OWN_POSTS_SUCCESS,
        data
    })
}
export function getOwnPostsError(error){
    return({
        type: ACTION_TYPES.GET_OWN_POSTS_ERROR,
        error
    })
}
export function getAllPostsRequest(){
    return({
        type: ACTION_TYPES.GET_ALL_POSTS_REQUEST
    })
}
export function getAllPostsSuccess(data){
    return({
        type: ACTION_TYPES.GET_ALL_POSTS_SUCCESS,
        data
    })
}
export function getAllPostsError(error){
    return({
        type: ACTION_TYPES.GET_ALL_POSTS_ERROR,
        error
    })
}
export function refreshSessionRequest(){
    return({
        type: ACTION_TYPES.REFRESH_SESSION_REQUEST
    })
}
export function refreshSessionSuccess(data){
    return({
        type: ACTION_TYPES.REFRESH_SESSION_SUCCESS,
        data
    })
}
export function refreshSessionError(error){
    return({
        type: ACTION_TYPES.REFRESH_SESSION_ERROR,
        error
    })
}
