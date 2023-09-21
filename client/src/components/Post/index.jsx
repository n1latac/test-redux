import React, { useState } from 'react'

function Post(props) {
  const [isHovered, setIsHovered] = useState(false)
    const {post} = props

    const mouseEnter = () => {
      setIsHovered(true)
    }

    const mouseLeave = () => {
      setIsHovered(false)
    }


  return (
    <li className='flex box-content	 py-4 last:mb-0 h-[150px] hover:h-[175px] hover:shadow-custom hover:shadow-black cursor-pointer border-b-2 border-indigo-400 first:border-t-2 first:border-indigo-400' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img className={isHovered ? 'w-[225px] h-[175px] object-cover hover:w-[225px] hover:h-[175px] transition-all duration-200 self-center' : 'w-[200px] h-[150px] object-cover'} src={post.imagePath ? `http://localhost:5000/${post.imagePath}` : './images/noImage.jpg'} alt="" />
      <div className='mx-4 my-2 overflow-hidden text-ellipsis'>
        <h3 className='text-slate-700 text-2xl pl-20 text-ellipsis'>{post.title}</h3>
        <p className='text-slate-400 text-sm  break-words'>{post.text}</p>
      </div>
    </li>
  )
}

export default Post