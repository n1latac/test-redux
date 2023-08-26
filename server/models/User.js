const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    email:{
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User