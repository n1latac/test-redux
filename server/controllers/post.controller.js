const Post = require('../models/Post')

module.exports.createPost = async(req, res, next)=>{
    try {
        const {body, params: {authorId}} = req
        const post = await Post.create({...body, authorId})
        res.status(200).send(post)
    } catch (error) {
        res.status(404).send({message: 'error with post'})
    }
}