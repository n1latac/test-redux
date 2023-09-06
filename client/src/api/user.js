import { instance } from "./instance";

export async function register(userData){
    try {
        let {data:{data}} = await instance.post('/user/signup', userData)
        return data
    } catch (error) {
        console.log(error.response.data, 'error')
        return Promise.reject(error.response.data) 
    }
}