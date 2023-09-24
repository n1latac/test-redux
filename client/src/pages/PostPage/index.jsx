import React, {useCallback, useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { instance } from '../../api/instance'
import { Link, useParams } from 'react-router-dom'
import history from '../../browserHistory'

// import {getPostByIdRequest} from '../../actions/actionCreator'

function PostPage(props) {
  const [post, setPost] = useState(null)
  const params = useParams()

  //const post = props.postStore.posts.find(elem => elem._id === params.postId)
  console.log(post, 'post')


  const fetchPost = useCallback(async()=>{
    const {data} = await instance.get(`/post/ownPosts/${params.postId}`)
    setPost(data)
  }, [params.postId])

  const deletePost = useCallback(async()=>{
    await instance.delete(`http://localhost:5000/api/post/ownPosts/${params.postId}`)
    history.push('/ownPosts')
  })

  
  useEffect(()=>{
    fetchPost()
  },[fetchPost])
  
   

  return (
    
    <div className='bg-violet-300'>
      {post ? 
      <section className='flex flex-col min-h-screen w-3/4 mx-auto bg-violet-100 px-8'>
        <div className='flex flex-col my-4'>
          <h3 className='text-center text-3xl text-slate-700 mb-4'>{post.title}</h3>
          <p className='text-slate-600'>{post.text}</p>
        </div>
        {post.imagePath && <img className='w-full object-cover border-2' src={`http://localhost:5000/${post.imagePath}`} alt="" />}
        <div className='flex justify-end pr-8 my-8'>
        <Link to={`/ownPosts/edit/${params.postId}`}><button className='w-[150px] bg-violet-300 rounded-xl py-2 hover:bg-violet-600 hover:text-white mr-4'>Change POST</button></Link>
        <button onClick={deletePost} className='w-[150px] bg-violet-300 rounded-xl py-2 hover:bg-violet-600 hover:text-white'>Delete POST</button>
        </div>
        
      </section> 
      : 
      <p>Loading...</p>
      }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PostPage)