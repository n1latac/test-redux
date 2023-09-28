import React from 'react'

function Comment(props) {
    const {comment} = props
    console.log(props)
    return (
        <div className='w-full bg-slate-400 min-h-[100px] rounded-xl text-white px-8 py-2 mb-8'>
            <div className='flex justify-between text-black'>
                <h2>{`${comment.authorId.firstName} ${comment.authorId.lastName}`}</h2>
                <p>{comment.created_at}</p>
            </div>
            <p>{comment.text}</p>
        </div>
    )
}

export default Comment