import ACTION_TYPES from '../actions/actionTypes'

const initialState = {
    isFetching: false,
    error: null,
    posts: []
}

export default function postReducer(state = initialState, action){
    switch(action.type){
        case ACTION_TYPES.CREATE_POST_REQUEST:{
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.CREATE_POST_SUCCESS:{
            return{
                ...state,
                isFetching: false,
                posts: [...state.posts, action.data]
            }
        }
        case ACTION_TYPES.CREATE_POST_ERROR:{
            return{
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        case ACTION_TYPES.GET_OWN_POSTS_REQUEST:{
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.GET_OWN_POSTS_SUCCESS:{
            return{
                ...state,
                isFetching: false,
                posts: action.data
            }
        }
        case ACTION_TYPES.GET_OWN_POSTS_ERROR:{
            return{
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        case ACTION_TYPES.FETCH_POSTS_SUCCESS:{
            return{
                ...state
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}