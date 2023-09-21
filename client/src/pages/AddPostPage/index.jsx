import React, { useState } from 'react'
import {Formik, Field, Form, useFormik} from 'formik'

import {createPostRequest} from '../../actions/actionCreator'
import {connect} from 'react-redux'




function AddPost(props) {
 

    const formik = useFormik({
         initialValues: {
            postImage: '',
            title: '',
            text: ''
        },
        onSubmit:(values, action)=>{
            if(formik.values.postImage){
                props.createPostRequest(formik.values)
            }else{
                const postWithoutImage = {...formik.values}
                delete postWithoutImage.postImage
                props.createPostRequest(postWithoutImage)
            }
            action.resetForm()
        }
    })


   

   

  return (
    <div class='bg-indigo-200 h-screen flex justify-center pt-4'>
        <Formik
       initialValues={formik.initialValues}
       onSubmit={formik.handleSubmit}
     >
              {(formikProps) => (
                  <Form class='flex w-3/4 h-[500px] bg-indigo-300 rounded-xl'>
                      <section className='flex flex-col items-center w-1/2 mr-4'>
                          <label className='mt-6 w-full rounded-xl cursor-pointer border-black border-2 flex justify-center py-8 border-dotted bg-slate-300 hover:bg-slate-400'>
                              Прикрепить изображение:
                              <input
                                  className='hidden'
                                  type="file"
                                  name="postImage"
                                  onChange={(event) => {
                                      formik.setFieldValue('postImage', event.target.files[0])
                                  }}
                              />
                          </label>

                          {formik.values.postImage
                              ? <div className='py-2 w-[400px] h-[200px] object-cover'>
                                  <img src={URL.createObjectURL(formik.values.postImage)} alt="" />
                              </div>
                              : null}


                      </section>

                      <section className='flex flex-col justify-between w-1/2'>
                          <div className='mt-6 flex flex-col'>
                              <input className='mb-14 text-2xl px-4 py-2 text-center bg-slate-100 outline-none rounded-xl' maxLength={30} type='text' name="title" placeholder="title" onChange={e => formik.setFieldValue('title', e.target.value)} value={formik.values.title} />
                              <textarea className='px-4 py-2 bg-slate-100 outline-none rounded-xl resize-none h-[300px]' maxLength={600} type='text' name="text" placeholder="text" onChange={e => formik.setFieldValue('text', e.target.value)} value={formik.values.text}/>
                          </div>
                          <button class=' mb-6 border-black bg-slate-300 py-2 rounded-2xl hover:bg-slate-500 hover:text-white' type="submit">Submit</button>
                      </section>

                  </Form>
              )}
          </Formik>
      </div>
  )
}

export default connect(null, {createPostRequest})(AddPost)