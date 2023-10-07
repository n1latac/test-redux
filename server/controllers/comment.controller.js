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
        res.status(200).send(comments)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports.deleteComment = async(req, res, next)=>{
    try {
        console.log(req.body, req.params)
        const {body: {commentId}, params: {postId}} = req
        const post = await Post.findOneAndUpdate({_id: postId},{$pull:{comments: commentId}})
        const deletedComment = await Comment.findOneAndDelete({_id: commentId})
        res.status(200).send(deletedComment)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports.updateComment = async(req, res, next)=>{
    try {
        const { body: { newText, commentId } } = req;
        const updatedComment = await Comment.findById(commentId).populate('authorId');
        if (!updatedComment) {
            return res.status(404).send("Комментарий не найден");
        }

        updatedComment.text = newText;
        await updatedComment.save();

        console.log(updatedComment);
        res.status(200).send(updatedComment);
    } catch (error) {
        res.status(400).send(error.message)
    }
}