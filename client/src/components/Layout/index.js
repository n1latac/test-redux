import React from 'react'
import Header from '../Header'
import {ToastContainer} from 'react-toastify'


function Layout({children}) {
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default Layout