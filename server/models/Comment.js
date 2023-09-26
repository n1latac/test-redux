const mongoose = require('mongoose')
const {Schema} = mongoose

const commentShema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text:{
        type: String,
        required: true
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Comment = mongoose.model('Comment', commentShema)

module.exports = Comment