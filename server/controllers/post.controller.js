const Post = require('../models/Post')

module.exports.createPost = async(req, res, next)=>{
    try {
        if(req.file){
            const {body: {title, text}, file: {path}, file, userIdFromToken} = req
            console.log(file)
            const post = await Post.create({title, text, authorId: userIdFromToken, imagePath: path})
            res.status(200).send(post)
        }

            const {body: {title, text}, userIdFromToken} = req
            const post = await Post.create({title, text, authorId: userIdFromToken})
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