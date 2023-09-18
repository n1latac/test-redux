import { instance } from "./instance";

export async function createPost(payload){
    console.log(payload)
    const {data} = await instance.post('/post/', payload,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}