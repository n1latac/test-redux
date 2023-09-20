const Post = require('../models/Post')

module.exports.createPost = async(req, res, next)=>{
    try {
        const {body, file: {path}, userIdFromToken} = req
        const post = await Post.create({...body, authorId: userIdFromToken, imagePath: path})
        res.status(200).send(post)
    } catch (error) {
        res.status(404).send({message: 'error with post'})
    }
}

module.exports.getOwnPosts = async(req, res, next)=>{
    const {userIdFromToken} = req
    try {
        const posts = await Post.find({authorId: userIdFromToken})
        res.status(200).send(posts)
    } catch (error) {
        res.status(400).send(error.message)
    }
}