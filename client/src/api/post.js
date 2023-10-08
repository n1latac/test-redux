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

export async function getOwnPosts(page){
    const {data} = await instance.get(`/post/ownPosts?page=${page}`)
    return data
}
export async function getAllPosts(page){
    const {data} = await instance.get(`/post/all?page=${page}`)
    console.log(data)
    return data
}

