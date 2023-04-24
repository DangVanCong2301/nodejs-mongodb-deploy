import { log } from "console";
import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        log('post', posts);
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({err});
    }
}

export const createPost = (req, res) => {
    res.send('create success');
}