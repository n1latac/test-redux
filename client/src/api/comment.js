import {instance} from './instance'

export async function createComment({postId, text}){
    const {data} = await instance.post(`/comment/${postId}`,{text})
    return data
}
export async function getComments(postId){
    const {data} = await instance.get(`/comment/${postId}`)
    return data
}
export async function deleteComment({commentId, postId}){
    const {data} = await instance.delete(`/comment/${postId}`,{data:{commentId}})
    return data
}
export async function updateComment({text, commentId}){
    const {data} = await instance.put(`/comment/`, {newText: text, commentId})
    return data
}