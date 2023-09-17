import React, { useState } from 'react'
import {Formik, Field, Form, useFormik} from 'formik'

import {createPostRequest} from '../../actions/actionCreator'
import {connect} from 'react-redux'




function AddPost(props) {
 

    const formik = useFormik({
         initialValues: {
            postImage: null,
            title: '',
            text: ''
        },
        onSubmit:()=>{
            console.log(formik.values)
            props.createPostRequest(formik.values)
        }
    })


   

   

  return (
    <div>
        <Formik
       initialValues={formik.initialValues}
       onSubmit={formik.handleSubmit}
     >
              {(formikProps) => (
                  <Form>
                      <input
                          type="file"
                          name="postImage"
                          onChange={(event) => {
                              formik.setFieldValue('postImage', event.target.files[0])
                          }}
                      />
                      <input type='text' name="title" placeholder="title" onChange={e=>formik.setFieldValue('title', e.target.value)}/>
                      <input type='text' name="text" placeholder="text" onChange={e=>formik.setFieldValue('text', e.target.value)}/>
                      <button type="submit">Submit</button>
                  </Form>
              )}
     </Formik>
    </div>
  )
}

export default connect(null, {createPostRequest})(AddPost)