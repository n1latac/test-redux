const Post = require('../models/Post')

module.exports.createPost = async(req, res, next)=>{
    try {
        console.log(req.body)
        const {body, file: {path}, userIdFromToken} = req
        const post = await Post.create({...body, authorId: userIdFromToken, imagePath: path})
        res.status(200).send(post)
    } catch (error) {
        res.status(404).send({message: 'error with post'})
    }
}