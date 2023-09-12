import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'

function Toast() {

    const notify = () => toast.error('wow so easy!',{
        position: 'bottom-right',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
    })

  return (
    <>
    <div onClick={notify}>Toast</div>
    <ToastContainer/>
    </>
  )
}

export default Toast