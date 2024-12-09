import mongoose from "mongoose";

//! THE ONLY THINGS THAT WILL BE IN THE SCHEMA
const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        occupation: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        blogInfo: {
            type: String,
            required: true,
        },
        image: String,
        category: String,
        //to add an algorithm to the date created turn into a number //! DevDocs-JavaScript/Date
        createdAt: {
            type: Number,
            default: Date.now()
        },
    },
    {
        // timestamps: true,
        collection: 'Blog'
    }
);
//! HAS TO MATCH THE NAME OF THE COLLECTION IN THE DATABASE
export const Blog = mongoose.model('Blog', blogSchema);
