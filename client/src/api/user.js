import { instance } from "./instance";

export async function register(userData){
    try {
        let {data:{data, tokens: {accessToken}}} = await instance.post('/user/signup', userData)
        localStorage.setItem('accessToken', accessToken)
        return data
    } catch (error) {
        console.log(error.response.data, 'error')
        return Promise.reject(error.response.data) 
    }
}