import mongoose from "mongoose";

//! THE ONLY THINGS THAT WILL BE IN THE SCHEMA
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: 'Books'
    }
);
//! HAS TO MATCH THE NAME OF THE COLLECTION IN THE DATABASE
export const Book = mongoose.model('Book', bookSchema);
