import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { instance } from '../../api/instance'
import { Link, useParams } from 'react-router-dom'
import history from '../../browserHistory'
import { toast } from 'react-toastify'
import { createCommentRequest, getCommentsRequest } from '../../actions/actionCreator'
import Comment from '../../components/Comment'


function PostPage(props) {
  const [comment, setComment] = useState()
  const [post, setPost] = useState(null)
  const params = useParams()


  const fetchPost = useCallback(async () => {
    const { data } = await instance.get(`/post/ownPosts/${params.postId}`)
    setPost(data)
  }, [params.postId])

  const deletePost = useCallback(async () => {
    await instance.delete(`http://localhost:5000/api/post/ownPosts/${params.postId}`)
    history.push('/ownPosts')
    toast('post deleted')
  })


  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  useEffect(() => {
    props.getCommentsRequest(params.postId)
  }, [params.postId])


  const handleCreateComment = (event) => {
    event.preventDefault()
    props.createCommentRequest({ text: comment, postId: params.postId })
    setComment('')
  }
  const handleChangeComment = (event) => {
    setComment(event.target.value)
  }
  let type 
  if(typeof(props.commentStore.comments) === 'object'){
    type = true
  }else{
    type = false
  }
 
  return (

    <div className='bg-violet-300'>
      {post ?
        <section className='flex flex-col min-h-screen w-3/4 mx-auto bg-violet-100 px-8'>
          <div className='flex flex-col my-4'>
            <h3 className='text-center text-3xl text-slate-700 mb-4'>{post.title}</h3>
            <p className='text-slate-600'>{post.text}</p>
          </div>
          {post.imagePath && <img className='w-full object-cover border-2' src={`http://localhost:5000/${post.imagePath}`} alt="" />}
          {props.userStore.user ? props.userStore.user._id === post.authorId && (
            <div className='flex justify-end pr-8 my-8'>
              <Link to={`/ownPosts/edit/${params.postId}`}><button className='w-[150px] bg-violet-300 rounded-xl py-2 hover:bg-violet-600 hover:text-white mr-4'>Change POST</button></Link>
              <button onClick={deletePost} className='w-[150px] bg-violet-300 rounded-xl py-2 hover:bg-violet-600 hover:text-white'>Delete POST</button>
            </div>

          ) : null}
          {props.userStore.user &&
            <section className='my-8'>
              <form onSubmit={handleCreateComment} className='flex'>
                <textarea className='resize-none w-full py-2 px-4 focus:outline-none shadow-lg rounded-md' onChange={handleChangeComment} value={comment}></textarea>
                <button type='submit' className='border-1 border-black w-[200px] ml-2 rounded-xl bg-blue-300 shadow-xl text-lg hover:bg-blue-400 hover:text-white'>Send</button>
              </form>
            </section>
          }
          {type  &&
            <div> 
              {props.commentStore.comments.map(com=><Comment comment={com} />)}
            </div>
          }


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

const mapDispatchToProps = {
 createCommentRequest,
 getCommentsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)