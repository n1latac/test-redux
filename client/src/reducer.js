import ACTION_TYPES from './actions/actionTypes'

const initialState = {
    isFetching: false,
    user: null,
    error: null
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
        default:{
            return{
                ...state
            }
        }
    }
}