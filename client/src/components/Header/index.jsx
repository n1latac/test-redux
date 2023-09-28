import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PopUpExit from '../PopUpExit'


function Header(props) {
  return (
    <header class="relative bg-[#0a2a43] bg-cover bg-opacity-1">
      <div class="py-4 px-5 flex justify-between items-center">
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
          <PopUpExit/>
          :
        <Link to={'/signUp'}>
          <button class="py-2 px-3 border-2 border-transparent hover:border-gray-500 hover:bg-slate-300 transition-all duration-200">
            Войти
          </button>
        </Link> }
        
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return state.userStore
}

export default connect(mapStateToProps, null)(Header)