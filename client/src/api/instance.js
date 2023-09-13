import axios from 'axios'

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

instance.interceptors.response.use(function(response){
    return response
    
}, function(err){
    if(err.response.status === 403){
        return Promise.reject({errorMessage: 'Нет доступа'})
    }
    return Promise.reject(err)
})