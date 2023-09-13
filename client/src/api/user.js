import { instance } from "./instance";

export async function register(userData){
    const {data} = await instance.post('/user/signup', userData)
        return data
}

export async function login(userData){
        const {data} = await instance.post('/user/login', userData)
        return data
}
export async function checkAuth(){
    const {data} = await instance.get('/user/getMe')
    return data
}