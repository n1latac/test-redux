import React from 'react'
import Popup from 'reactjs-popup'
import {connect} from 'react-redux'

import {userExitRequest} from '../../actions/actionCreator'

function PopUpExit(props) {
  return (
    <Popup trigger={<button class="py-2 px-3 border-2 border-gray-500 bg-slate-300 hover:transform hover:scale-110 transition-all duration-200" >
            Выйти
          </button>} modal lockScroll overlayStyle={{"backgroundColor": "rgba(0, 0, 0, 0.5)"}} nested>
            {close=>(
                <div class="flex flex-col justify-between items-center w-[500px] h-[250px] py-10 border-2 bg-indigo-300 rounded-xl">
                <p>Do you want exit from your account?</p>
                <div class="flex justify-around w-full">
                  <button onClick={()=>{
                    props.userExitRequest()
                    close()}
                    } class="border-2 rounded border-gray-400 py-2 px-8 hover:bg-indigo-600 hover:text-white">Yes</button>
                  <button onClick={()=>{close()}} class="border-2 rounded border-gray-400 py-2 px-8 hover:bg-indigo-600 hover:text-white">No</button>
                </div>
              </div>
            )}
              
          </Popup>
  )
}



export default connect(null, {userExitRequest})(PopUpExit)