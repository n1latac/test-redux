import {Formik,  Form, useFormik} from 'formik'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { instance } from '../../api/instance'
import history from '../../browserHistory'





function EditPostPage(props) {
  const [post, setPost] = useState(null)
  const params = useParams()
 

  const fetchPost = useCallback(async()=>{
    const {data} =  await instance.get(`http://localhost:5000/api/post/ownPosts/${params.postId}`)
      formik.setFieldValue('postImage', data.imagePath)
      formik.setFieldValue('title', data.title)
      formik.setFieldValue('text', data.text)
      setPost(data)
  },[params.postId])

  
  useEffect(()=>{
    fetchPost()
  },[fetchPost])
  console.log(props)
  


    const formik = useFormik({
         initialValues: {
            postImage:  '',
            title: '',
            text:  ''
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
    
    
    const editPost = useCallback(async()=>{
      const {postId} = params
      await instance.put(`http://localhost:5000/api/post/ownPosts/edit/${params.postId}`,{...formik.values, postId},{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      history.back()
    })
  


   

  return (
    <div class='bg-headerBG min-h-screen flex justify-center lg:pt-4'>
      {post ?
      <Formik
      initialValues={formik.initialValues}
      onSubmit={formik.handleSubmit}
    >
             {(formikProps) => (
            <Form class='md:flex-row flex flex-col sm:w-3/4 md:h-[500px] bg-[#2d5470] md:rounded-xl relative z-2 shadow-custom2 p-4'>
              <section className='flex flex-col items-center md:w-1/2 md:mr-4'>
                <label className='mt-6 w-full rounded-xl cursor-pointer border-black border-4 flex justify-center py-8 border-dotted bg-slate-300 hover:border-solid hover:border-4'>
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

                {formik.values.postImage ? (
                  typeof formik.values.postImage === 'string' ? (
                    <div className='py-8'>
                      <img
                        className='w-[400px] h-[300px] object-cover border-2 border-black rounded-md shadow-custom'
                        src={`http://localhost:5000/${formik.values.postImage}`}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className='py-8'>
                      <img
                        className='w-[400px] h-[300px] object-cover border-2 border-black rounded-md shadow-custom'
                        src={URL.createObjectURL(formik.values.postImage)}
                        alt=""
                      />
                    </div>
                  )
                ) : <div className='w-[400px] h-[300px] border-2 border-black border-dotted my-8 rounded-md shadow-custom'></div>}

              </section>

              <section className='flex flex-col justify-between md:w-1/2'>
                <div className='mt-6 flex flex-col'>
                  <input className='mb-6 text-2xl px-4 py-2 text-center bg-slate-300 focus:border-4 border-slate-300 border-4 focus:border-black focus:text-black outline-none rounded-xl' maxLength={30} type='text' name="title" placeholder="title" onChange={e => formik.setFieldValue('title', e.target.value)} value={formik.values.title} />
                  <textarea className='mb-6 px-4 py-2 bg-slate-300 outline-none rounded-xl resize-none h-[300px] bg-inherit border-2 border-slate-300 focus:bg-slate-300 focus:text-black focus:border-black' maxLength={600} type='text' name="text" placeholder="text" onChange={e => formik.setFieldValue('text', e.target.value)} value={formik.values.text} />
                </div>
                <div className='flex justify-between'>
                <button onClick={editPost} class='w-1/3 mb-6 border-black bg-slate-300 py-2 rounded-2xl hover:bg-slate-500 hover:text-white' type="submit">Change</button>
                <Link class='w-1/3 text-center mb-6 border-black bg-slate-300 py-2 rounded-2xl hover:bg-slate-500 hover:text-white' to={'/ownPosts'}><button  type="submit">Cancel</button></Link>
                </div>
              </section>

            </Form>
             )}
         </Formik>
         :
         <div>...Loading</div>
    }
        
      </div>
  )
}



export default EditPostPage