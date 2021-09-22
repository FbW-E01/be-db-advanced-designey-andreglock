import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    author: String,
    name: String,
    content: String,
    published: Boolean,
    createdDate: Number
});

const postCollection = "users";
const Post = mongoose.model(postCollection, postSchema);

export default Post;