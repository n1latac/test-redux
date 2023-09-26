const Comment = require('../models/Comment')

module.exports.createComment = async(req, res, next)=>{
    try {
        console.log(req.body)
        const {userIdFromToken, body:{text}} = req
        const comment = await Comment.create({text, authorId: userIdFromToken})
        res.status(201).send(comment)
    } catch (error) {
        res.status(400).send(error.message)
    }
}