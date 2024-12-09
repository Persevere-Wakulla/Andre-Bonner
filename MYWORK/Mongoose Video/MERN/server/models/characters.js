import mongoose from "mongoose"


//todo: Creating my schema so I can connect to the collection as well as layout of what future Chars should represent

//? SCHEMA represent OBJ
const characterSchema = new mongoose.Schema({
    id: String,
    name: String,
    image:String,
    race: String,
    gender: String,
    bio: String,
    health: String,
    attack: String,
    defense:String,
    kiRestoreSpeed: String,
    abilities: Array,
    img: String
    //! age: Number
    //! hobbies: {
        //! type: String
    //! }
})

const Characters = mongoose.model('Characters', characterSchema)

export default Characters