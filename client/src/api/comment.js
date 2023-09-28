import {instance} from './instance'

export async function createComment({postId, text}){
    const {data} = await instance.post(`/comment/${postId}`,{text})
    return data
}
export async function getComments(postId){
    const {data} = await instance.get(`/comment/${postId}`)
    return data
}