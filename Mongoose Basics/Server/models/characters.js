import mongoose from "mongoose";
// Creating my schema so I can connect to the collection as well as layout of what future Chars should represent

// Schema represent OBJ
const characterSchema = new mongoose.Schema({
    name: String,
    image: String,
    details: String,
    // age: Number,
    // hobbies: {
    //     type: String
    // }

})

const Characters = mongoose.model('characters', characterSchema)

export default Characters