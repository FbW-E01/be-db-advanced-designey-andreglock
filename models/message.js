import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    author: String,
    receiver: String,
    content: String,
    createdDate: Number
});

const messageCollection = "users";
const Message = mongoose.model(messageCollection, messageSchema);

export default Message;