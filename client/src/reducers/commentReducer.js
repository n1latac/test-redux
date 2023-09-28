import ACTION_TYPES from '../actions/actionTypes'

const initialState = {
    comments: [],
    isFetching: false,
    error: null
}

export default function commentReducer(state = initialState, action){
    switch(action.type){
        case ACTION_TYPES.CREATE_COMMENT_REQUEST:{
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.CREATE_COMMENT_SUCCESS:{
            return{
                ...state,
                isFetching: false,
                comments: [...state.comments, action.data]
            }
        }
        case ACTION_TYPES.CREATE_COMMENT_ERROR:{
            return{
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        case ACTION_TYPES.GET_COMMENTS_REQUEST:{
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.GET_COMMENTS_SUCCESS:{
            return{
                ...state,
                isFetching: false,
                comments: action.data
            }
        }
        case ACTION_TYPES.GET_COMMENTS_ERROR:{
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