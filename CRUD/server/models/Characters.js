import mongoose from "mongoose";

const characterSchema = mongoose.Schema({
    name: String,
    image: String,
    details: String
})


const CharacterModel = mongoose.model('character',characterSchema)

export default CharacterModel