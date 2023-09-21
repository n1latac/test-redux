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

export async function getOwnPosts(){
    const {data} = await instance.get('/post/ownPosts')
    return data
}
export async function getPostById(postId){
    const {data} = await instance.get(`/post/ownPosts/${postId}`)
    return data
}