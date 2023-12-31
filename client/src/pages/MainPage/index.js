import React from 'react'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {RotatingLines} from 'react-loader-spinner'

import {getAllPostsRequest} from '../../actions/actionCreator'
import Post from '../../components/Post'

function MainPage(props) {
    const [page, setPage] = useState(1)


    useEffect(()=>{
         props.getPosts(page)
    },[page])

    const {posts, isFetching, error} = props

    const handlePageChange = (newPage) => {
        if(newPage >= 1 && newPage <= props.pages){
            setPage(newPage)
        }
    }

  return (
      <>
          {isFetching
              ?
              <div className='flex justify-center items-center h-screen bg-[#124972]'>
                  <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                  />
              </div>
                :
                <div>
                    <section className='bg-headerBG md:py-4 lg:py-8 min-h-screen'>
                        <div className='xs:w-full md:w-3/4 lg:w-2/3 m-auto bg-stone-200 p-8 min-h-[700px] rounded-md'>
                            <ul>
                                {posts.map((post) => <Post post={post} />)}
                            </ul>
                            <div className='mt-8 flex justify-center'>
                                <button onClick={()=> handlePageChange(page-1)} className={page === 1 ? 'text-slate-400 cursor-default' : 'text-slate-600'}>Previous</button>
                                <span className='block mx-4'>Page {page} of {props.pages}</span>
                                <button onClick={()=> handlePageChange(page+1)} className={page === props.pages ? 'text-slate-400 cursor-default' : 'text-slate-600'}>Next</button>
                            </div>
                        </div>
                    </section>
                </div>}
        </>
    )
}

const mapStateToProps = (state) => {
    return state.postStore
}

const mapDispatchToProps = {
    getPosts: getAllPostsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)