import React from 'react'
import {Link} from 'react-router-dom'
import SignUpForm from '../SignUp'

function Header() {
  return (
    <header class="bg-slate-200">
        <div class="py-4 px-5 flex justify-between items-center">
              <img src='./images/logo_1.ico' class="w-8 h-8 hover:cursor-pointer"/>
              <nav>
                  <ul class="flex">
                      <li><a href='#' class="header-link">Главная</a></li>
                      <li><a href='#' class="header-link">Мои Статьи</a></li>
                      <li><a href='#' class="header-link">Добавить статью</a></li>
                  </ul>
              </nav>
              <button class="py-2 px-3 border-2 border-transparent hover:border-gray-500 hover:bg-slate-300 transition-all duration-200">
               <Link to={'/signUp'}>Войти</Link> 
                </button>
        </div>
    </header>
  )
}

export default Header