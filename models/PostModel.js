import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
        default: 'Anonymous'
    },
    attacchment: String,
    likeCount: {
        type: Number,
        default: 0
    }
    // createAt, updateAt
}, {timestamps: true})

export const PostModel = mongoose.model('Post', schema)