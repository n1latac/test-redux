import React, { useEffect, useRef } from 'react'
import styles from './style.module.css'



function Home() {
  const bgRef = useRef()
  const moonRef = useRef()
  const mountainRef = useRef()
  const roadRef = useRef()
  const textRef = useRef()

  



  const handleWindowScroll = () => {
    const value = window.scrollY
    
    const bg = bgRef.current
    const moon = moonRef.current
    const mountain = mountainRef.current
    const road = roadRef.current
    const text = textRef.current

    bg.style.top = value * 0.5 + 'px'
    moon.style.left = -value * 0.5 + 'px'
    mountain.style.top = -value * 0.15 + 'px'
    road.style.top = value * 0.15 + 'px'
    text.style.top = value * 1 + 'px'
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleWindowScroll)
    return ()=>{
      window.removeEventListener('scroll', handleWindowScroll)
    }
  },[])

  return (
    <>
      <div className='bg-[#0a2a43] min-h-[1500px]'>
        <section className={styles['custom-section']}>
          <img id='bg' ref={bgRef} className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none' src={'./images/bg.jpg'}/>
          <img id='moon' ref={moonRef} className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none' src={'./images/moon.png'}/>
          <img id='mountain' ref={mountainRef} className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none' src={'./images/mountain.png'}/>
          <img id='road' ref={roadRef} className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[2]' src={'./images/road.png'}/>
          <h2 id='text' ref={textRef} className='relative text-white text-[10em] z-1'>Moon Light</h2>
        </section>
      </div>
    </>
   
  )
}

export default Home