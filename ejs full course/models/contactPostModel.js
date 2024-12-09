import mongoose from "mongoose";

const contactPostSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
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
        collection: 'Contact'
    }
);
export const Post = mongoose.model('Contact', contactPostSchema);