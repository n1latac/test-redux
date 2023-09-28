const Comment = require('../models/Comment')
const Post = require('../models/Post')

module.exports.createComment = async(req, res, next)=>{
    try {
        const {userIdFromToken, body:{text}, params: {postId}} = req
        const comment = await (await Comment.create({text, authorId: userIdFromToken, postId})).populate('authorId')
        await Post.updateOne({_id: postId},{
            $push: {comments: comment._id}
        })
        res.status(201).send(comment)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports.getComments = async(req, res, next)=>{
    try {
        const {params: {postId}} = req
        const comments = await Comment.find({postId: postId}).populate('authorId')
        console.log(comments)
        res.status(200).send(comments)
    } catch (error) {
        res.status(400).send(error.message)
    }
}