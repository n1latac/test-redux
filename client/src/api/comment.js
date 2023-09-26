import {instance} from './instance'

export async function createComment(text){
    const {data} = await instance.post(`/comment/`,{text})
    return data
}