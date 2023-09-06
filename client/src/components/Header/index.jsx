import React from 'react'
import {Link} from 'react-router-dom'
import SignUpForm from '../SignUp'

function Header() {
  return (
    <header class="bg-slate-200">
      <div class="py-4 px-5 flex justify-between items-center">
        <Link to={'/'}>
          <img src='./images/logo_1.ico' class="w-8 h-8 hover:cursor-pointer" />
        </Link>
        <nav>
          <ul class="flex">
            <li><Link to={'/'} class="header-link">Главная</Link></li>
            <li><a href='#' class="header-link">Мои Статьи</a></li>
            <li><a href='#' class="header-link">Добавить статью</a></li>
          </ul>
        </nav>
        <Link to={'/signUp'}>
          <button class="py-2 px-3 border-2 border-transparent hover:border-gray-500 hover:bg-slate-300 transition-all duration-200">
            Войти
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header