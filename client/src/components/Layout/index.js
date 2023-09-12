import React from 'react'
import Header from '../Header'
import {ToastContainer} from 'react-toastify'


function Layout({children}) {
  return (
    <>
        <Header/>
        <main>{children}</main>
        <ToastContainer/>
    </>
  )
}

export default Layout