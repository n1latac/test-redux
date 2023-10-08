import ACTION_TYPES from '../actions/actionTypes'

const initialState = {
    isFetching: false,
    error: null,
    posts: [],
    pages: null
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
            const {data: {posts, totalPages}} = action
            return{
                ...state,
                isFetching: false,
                posts: posts,
                pages: totalPages
            }
        }
        case ACTION_TYPES.GET_OWN_POSTS_ERROR:{
            return{
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        case ACTION_TYPES.GET_ALL_POSTS_REQUEST:{
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.GET_ALL_POSTS_SUCCESS:{
            const {data: {allPosts, totalPages}} = action
            return{
                ...state,
                isFetching: false,
                posts: allPosts,
                pages: totalPages
            }
        }
        case ACTION_TYPES.GET_ALL_POSTS_ERROR:{
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