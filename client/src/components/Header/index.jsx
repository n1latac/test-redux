import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PopUpExit from '../PopUpExit'


function Header(props) {
  const [navMenu, setNavMenu] = useState(false)
  const navBarRef = useRef(null)

  const closeNavMenu = () => {
    if(navBarRef.current){
      setNavMenu(navMenu=>!navMenu)
    }else{
      setNavMenu(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click', closeNavMenu)

    return ()=>{
      document.removeEventListener('click', closeNavMenu)
    }
  },[navMenu])


  return (
    <header class="bg-bg bg-cover bg-opacity-1 sticky top-0 z-10">
      <div class="py-4 px-5 md:flex justify-between items-center hidden">
        <Link to={'/'}>
          <img src='./images/logo_1.ico' class="w-8 h-8 hover:cursor-pointer" alt='logo' />
        </Link>
        <nav>
          <ul class="flex">
            <li><Link to={'/'} class="header-link">Главная</Link></li>
            <li><Link to={'/mainPage'} class="header-link">Посты</Link></li>
            {props.user && 
            <>
            <li><Link to={'ownPosts'} class="header-link">Мои Статьи</Link></li>
            <li><Link to={'/addPost'} class="header-link">Добавить статью</Link></li>
            </>}
            
          </ul>
        </nav>
        {props.user
          ?
          <PopUpExit>
            <button class="py-2 px-3 border-2 border-gray-500 bg-slate-300 hover:transform hover:scale-110 transition-all duration-200" >
            Выйти
          </button>
            </PopUpExit>
          :
        <Link to={'/signUp'}>
          <button class="py-2 px-3 border-2 border-transparen border-gray-500 bg-slate-300 hover:transform hover:scale-110 transition-all duration-200">
            Войти
          </button>
        </Link> }
        
      </div>
      <div className='flex md:hidden py-4 px-5 justify-between'>
        <Link to={'/'}>
          <img src='./images/logo_1.ico' class="w-8 h-8 hover:cursor-pointer" alt='logo' />
        </Link>
        {navMenu ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='white' cursor='pointer' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8  hover:scale-110">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

          :
          <svg ref={navBarRef} cursor='pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-all duration-[2000ms] hover:scale-110">
            <path strokeLinecap="round" strokeLinejoin="round" color='white' d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        }
        {navMenu ?
        props.user ? 
            <div className='fixed top-16 right-0 active:top-16'>
              <ul className='bg-bg'>
                <li className='p-2 text-center'><Link to={'/'} class="header-link">Главная</Link></li>
                <li className='p-2 text-center'><Link to={'/mainPage'} class="header-link">Посты</Link></li>
                <li className='p-2 text-center'><Link to={'ownPosts'} class="header-link">Мои статьи</Link></li>
                <li className='p-2 text-center'><Link to={'/addPost'} class="header-link">Добавить статью</Link></li>
                <li className='p-2 text-center'><PopUpExit>
                  <span class="header-link cursor-pointer">
                    Выйти
                  </span>
                </PopUpExit>
                </li>
              </ul>
            </div>
            :
            <div className='fixed top-16 right-0 active:top-16'>
            <ul className='bg-bg'>
            <li className='p-2 text-center'><Link to={'/'} class="header-link">Главная</Link></li>
            <li className='p-2 text-center'><Link to={'/mainPage'} class="header-link">Посты</Link></li>
            <li className='p-2 text-center'><Link to={'/signUp'} class="header-link">Войти</Link></li>
            </ul>
          </div>
          : null
          }

      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return state.userStore
}

export default connect(mapStateToProps, null)(Header)