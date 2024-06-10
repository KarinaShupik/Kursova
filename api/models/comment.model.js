import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {timestams: true})

export const Comment = mongoose.model("Comment", commentSchema)