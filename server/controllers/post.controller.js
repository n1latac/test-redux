const Post = require('../models/Post')
const Comment = require('../models/Comment')

module.exports.createPost = async(req, res, next)=>{
    try {
        if(req.file){
            const {body: {title, text}, file: {path}, file, userIdFromToken} = req
            const post = await Post.create({title, text, authorId: userIdFromToken, imagePath: path})
            res.status(201).send(post)
        }else{
            const {body: {title, text}, userIdFromToken} = req
            const post = await Post.create({title, text, authorId: userIdFromToken})
            res.status(201).send(post)
        }
        
    } catch (error) {
        res.status(404).send({message: 'error with post'})
    }
}

module.exports.getOwnPosts = async (req, res, next) => {
    const { userIdFromToken } = req
    try {
        const page = req.query.page || 1
        const perPage = req.query.perPage || 5

        const totalOwnPostsCount = await Post.find({ authorId: userIdFromToken }).countDocuments()
        const totalPages = Math.ceil(totalOwnPostsCount / perPage)



        const posts = await Post.find({ authorId: userIdFromToken }).limit(perPage).skip((page - 1) * perPage)



        res.status(200).send({ posts, totalPages })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports.postById = async(req, res, next)=>{
    try {
        const {params: {postId}} = req
        const post = await Post.findById(postId)
        res.status(200).send(post)
    } catch (error) {
        res.status(400).send({errorMessage: 'Проблемы с постом'})
    }
}

module.exports.changePost = async(req, res, next) => {
    try {
        if(req.file){
            const {params: {postId}, body: {text, title}, file: {path}} = req
            const post = await Post.findByIdAndUpdate(postId, {text, title, imagePath: path})
            res.status(201).send(post)
        }else{
            const {params: {postId}, body: {text, title}} = req
            const post = await Post.findByIdAndUpdate(postId, {text, title, imagePath: ''})
            res.status(201).send(post)
        }
    } catch (error) {
        res.status(500).send({errorMessage: 'cant update post'})
    }
}

module.exports.deletePost = async(req, res, next) => {
    try {
        const {params: {postId}} = req
        const deletedPost = await Post.deleteOne({_id: postId})
        await Comment.deleteMany({postId: postId})
        res.status(200).send(deletedPost)
    } catch (error) {
        res.status(400).send({errorMessage: `can't delete post`})
    }
}
module.exports.getAllPosts = async(req, res, next)=>{
    try {
        const page = req.query.page || 1
        const perPage = req.query.perPage || 5

        const totalDocuments = await Post.countDocuments()
        const totalPages = Math.ceil(totalDocuments / perPage)


        const allPosts = await Post.find()
            .limit(perPage)
            .skip((page - 1) * perPage)
        

        res.status(200).send({allPosts, totalPages})
    } catch (error) {
        res.status(400).send({errorMessage: `can't get all posts`})
    }
}