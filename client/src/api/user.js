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
export async function userExit(){
    const {data} = await instance.get('/user/exit')
    return data
}
export async function refresh(){
    const refreshToken = localStorage.getItem('refreshToken')
    const {data} = await instance.post('/user/refresh',{refreshToken})
    return data
}