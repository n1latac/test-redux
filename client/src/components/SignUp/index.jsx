import React from 'react'
import {Form, Formik} from 'formik'
import CustomField from '../CustomField'
import { registrationSchema } from '../../validation'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const submitHandler = ({values, action}) => {
  console.log(values, action)
}

function SignUpForm() {
  return (
    <div class="flex bg-violet-300 h-screen">
      <div class="my-10 border-2 w-2/5 mx-auto bg-slate-200 h-4/5 rounded-3xl">
        <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={registrationSchema}
        >
          {(formikProps)=> {
            console.log(formikProps)
            return(
              <Form class="flex flex-col items-center h-full">
                <h3 class="text-center text-2xl font-bold my-6">Sign Up</h3>
                <CustomField class="py-2 mb-6 text-base bg-transparent border-b-2 border-gray-500 focus:outline-none" type='text' name='firstName' placeholder="First Name"/>
                <CustomField class="py-2 mb-6 text-base bg-transparent border-b-2 border-gray-500 focus:outline-none" type='text' name='lastName' placeholder="Last Name"/>
                <CustomField class="py-2 mb-6 text-base bg-transparent border-b-2 border-gray-500 focus:outline-none" type='email' name='email' placeholder="Email"/>
                <CustomField class="py-2 mb-6 text-base bg-transparent border-b-2 border-gray-500 focus:outline-none" type='password' name='password' placeholder="Password"/>
                <button type="submit">Submit</button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default SignUpForm