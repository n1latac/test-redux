import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Post(props) {
  const [isHovered, setIsHovered] = useState(false)

    const mouseEnter = () => {
      setIsHovered(true)
    }

    const mouseLeave = () => {
      setIsHovered(false)
    }

   

    const {post} = props

  return (
    <Link to={`/ownPosts/${post._id}`}>
    <li className='overflow-hidden flex flex-col items-center md:flex md:flex-row box-content py-4 last:mb-0 md:h-[150px] md:hover:h-[175px] md:hover:shadow-custom md:hover:shadow-black cursor-pointer border-b-2 border-indigo-400 first:border-t-2 first:border-indigo-400 hover:bg-slate-200' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img className={isHovered ? 'md:w-[225px] md:h-[175px] md:object-cover md:hover:w-[225px] md:hover:h-[175px] md:transition-all md:duration-200 md:self-center w-[350px] object-cover' : 'md:w-[200px] md:h-[150px] w-[350px] object-cover'} src={post.imagePath ? `http://localhost:5000/${post.imagePath}` : './images/noImage.jpg'} alt="" />
      <div className='mx-4 my-2 px-4 overflow-hidden text-ellipsis flex flex-col items-center h-full'>
        <h3 className='text-slate-700 text-2xl md:pl-20 text-ellipsis md:self-start'>{post.title}</h3>
        <p className='text-slate-400 text-sm  break-words text-center'>{post.text}</p>
      </div>
    </li>
    </Link>
  )
}


export default Post