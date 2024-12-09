import mongoose from "mongoose";

const contactPostSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        collection: 'ContactPosts'
    }
);
export const Post = mongoose.model('ContactPosts', contactPostSchema);