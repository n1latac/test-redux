import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import {getOwnPostsRequest} from '../../actions/actionCreator'
import Post from '../../components/Post'

function OwnPostPage(props) {

    useEffect(()=>{
         props.getPosts()
    },[props.userStore.user])

    const {postStore: {posts, isFetching, error}} = props

  return (
    <>
    {isFetching
     ? 
    <div>Loading...</div>
     :
    <div>
        <section className='bg-headerBG pt-8 min-h-screen'>
            <ul className='w-2/3 m-auto bg-stone-200 p-8 min-h-[700px]'>
                {posts.map((post)=><Post post={post}/>)}
            </ul>
        </section>
    </div>}
    </>
  )
}

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = {
    getPosts: getOwnPostsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnPostPage)