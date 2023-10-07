import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { deleteCommentRequest, updateCommentRequest } from '../../actions/actionCreator'
import 'boxicons'

function Comment(props) {
    console.log(props)
    const {comment, postId} = props
    const [text, setText] = useState(comment.text)
    const [state, setState] = useState(false)
    const inputRef = useRef(null)
    const iconRef = useRef(null)


    useEffect(()=>{
        const handleClickOutside = (event) => {
            if(inputRef.current && !inputRef.current.contains(event.target) && iconRef.current && !iconRef.current.contains(event.target)){
                setState(false)
            }
        }


        document.addEventListener('click', handleClickOutside)

        return()=>{
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])


    const deleteComment = () => {
        const {_id} = comment
        props.deleteCommentRequest({commentId: _id,postId: postId})
    }

    const updateComment = () => {
        setState(state=>!state)
    }
    const changeComment = () => {
        props.updateCommentRequest({text, commentId: comment._id})
    }

    const commentHandler = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='w-full bg-slate-400 min-h-[100px] rounded-xl text-white px-8 py-2 mb-8'>
            <div className='flex justify-between text-black'>
                <h2>{`${comment.authorId.firstName} ${comment.authorId.lastName}:`}</h2>
                <p>{format(new Date(comment.created_at), 'dd.MM.yyyy HH:mm')}</p>
            </div>
            {!state && <p>{comment.text}</p>}
            <textarea className={state ? 'bg-slate-300 w-full break-words' : 'hidden'} ref={inputRef} type="text" value={text} onChange={commentHandler} />
            {props.userStore.user ? props.userStore.user._id === comment.authorId._id &&
                <div className='flex justify-between'>
                    {state && <div className='cursor-pointer' onClick={changeComment}>Change</div>}
                    <div className='flex justify-end w-full'>
                        <div onClick={updateComment} ref={iconRef} className='mr-2 cursor-pointer'><box-icon name='edit' animation='tada-hover' pull='right'></box-icon></div>
                        <div onClick={deleteComment} className='cursor-pointer'><box-icon name='comment-x' animation='tada-hover'></box-icon></div>
                    </div>
                </div>
                : null
            }

        </div>
    )
}

const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps = {
    deleteCommentRequest,
    updateCommentRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)