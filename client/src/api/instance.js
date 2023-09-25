import axios from 'axios'
import { refresh } from './user'
import  store  from '../store'
import {refreshSessionRequest} from '../actions/actionCreator'
 

export const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
})

instance.interceptors.request.use(function(config){
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken){
        config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
}, function(error){
    return Promise.reject(error)
})

instance.interceptors.response.use(async (response)=>{
    return response
    
}, async function(err){
    if(err.response.status === 403){
         await store.dispatch(refreshSessionRequest())
         return
        
    }
    return Promise.reject(err)
})