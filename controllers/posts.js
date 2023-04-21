import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find(); // Đây là promise nên ta thêm await và func ta thêm async
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({error: err})
    }
}

export const createPost = async (req, res) => {
    try {
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post)
    } catch(err) {
        res.status(500).json({error: err});
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true})
        post.save();
        res.status(200).json(post)
    } catch(err) {
        res.status(500).json({error: err});
    }
}