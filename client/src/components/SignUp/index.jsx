import React from 'react'
import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'

import CustomField from '../CustomField'
import { registrationSchema } from '../../validation'
import {registerUserRequest} from '../../actions/actionCreator'
import history from '../../browserHistory'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}



function SignUpForm(props) {


  const submitHandler = (async(values, action) => {
    const newObj = {...values}
    delete newObj.confirmPassword
    props.registerUserRequest(newObj)
  })

  return (
    <div class="flex bg-violet-300 items-center justify-center min-h-screen bg-signUp bg-cover bg-center">
        <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={registrationSchema}
        >
          {(formikProps)=> {
            //console.log(formikProps)
            return(
              <Form class="flex flex-col items-center justify-center bg-transparent border-2 border-black backdrop-blur-2xl rounded-3xl w-[400px] min-h-[450px] shadow-black/60 shadow-2xl">
                <h3 class="text-center text-3xl font-bold mt-4 mb-6">Sign Up</h3>
                <CustomField class="my-2 pl-5 pr-11 w-full h-full text-lg rounded-3xl bg-transparent border-2 border-gray-500 focus:outline-none" type='text' name='firstName' placeholder="First Name">
                  <svg class="absolute right-5 top-1/2 -translate-y-1/4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                </CustomField>
                <CustomField class="my-2 pl-5 pr-11 text-lg w-full h-full rounded-3xl bg-transparent border-2 border-gray-500 focus:outline-none" type='text' name='lastName' placeholder="Last Name" >
                  <svg class="absolute right-5 top-1/2 -translate-y-1/4" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"></path></svg>
                </CustomField>
                <CustomField class="my-2 pl-5 pr-11 text-lg w-full h-full rounded-3xl bg-transparent border-2 border-gray-500 focus:outline-none" type='email' name='email' placeholder="Email" >
                  <svg class="absolute right-5 top-1/2 -translate-y-1/4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                </CustomField>
                <CustomField class="my-2 pl-5 pr-11 text-lg w-full h-full rounded-3xl bg-transparent border-2 border-gray-500 focus:outline-none" type='password' name='password' placeholder="Password" >
                  <svg class="absolute right-5 top-1/2 -translate-y-1/4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"></path></svg>
                </CustomField>
                <CustomField class="my-2 pl-5 pr-11 text-lg w-full h-full rounded-3xl bg-transparent border-2 border-gray-500 focus:outline-none" type='password' name='confirmPassword' placeholder="Confirm Password" >
                  <svg class="absolute right-5 top-1/2 -translate-y-1/4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"></path></svg>
                </CustomField>
                <button class="px-10 py-2 mb-4 border-2 rounded-xl text-xl border-gray-600 hover:bg-slate-300" type="submit">Submit</button>
                <div class="mb-4">
                  <p>Have an account? <Link class="underline hover:text-slate-600" to={'/signIn'}>sign in</Link></p>
                </div>
              </Form>
            )
          }}
        </Formik>
    </div>
  )
}

const mapDispatchToProps = {
  registerUserRequest
}


export default connect(null,mapDispatchToProps)(SignUpForm)