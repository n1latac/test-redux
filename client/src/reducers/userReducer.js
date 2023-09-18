import ACTION_TYPES from '../actions/actionTypes'

const initialState = {
    isFetching: false,
    user: null,
    error: null,
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case ACTION_TYPES.REGISTER_USER_REQUEST:{
            return{
                ...state,
            isFetching: true
            }
        }
        case ACTION_TYPES.REGISTER_USER_SUCCESS:{
            return{
                ...state,
                error: null,
                isFetching: false,
                user: action.data
            }
        }
        case ACTION_TYPES.REGISTER_USER_ERROR:{
            return{
                ...state,
                isFetching: false,
                user: null,
                error: action.error
            }
        }
        case ACTION_TYPES.LOGIN_USER_REQUEST:{
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.LOGIN_USER_SUCCESS:{
            return{
                ...state,
                isFetching: false,
                user: action.data,
                error: null
            }
        }
        case ACTION_TYPES.LOGIN_USER_ERROR:{
            return{
                ...state,
                isFetching: false,
                user: null,
                error: action.error
            }
        }
        case ACTION_TYPES.GET_ME_REQUEST:{
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.GET_ME_SUCCESS:{
            return{
                ...state,
                user: action.data,
                isFetching: false,
                error: null
            }
        }
        case ACTION_TYPES.GET_ME_ERROR:{
            return{
                ...state,
                user: null,
                isFetching: false,
                error: action.error
            }
        }
        case ACTION_TYPES.USER_EXIT_REQUEST:{
            return{
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION_TYPES.USER_EXIT_SUCCESS:{
            return{
                ...state,
                isFetching: false,
                user: null
            }
        }
        case ACTION_TYPES.USER_EXIT_ERROR:{
            return{
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}