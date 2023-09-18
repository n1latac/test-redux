const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    authorId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    imagePath:{
        type: String,
        required: false
    },
    title:{
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true
    }
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post