// https://mongoosejs.com/docs/api/model.html
import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import CharacterModel from './models/Characters.js'
const app = express()


// Create,  Read, Update, Delete 

app.use(cors())
app.use(express.json())

// GET
app.get('/', async (req, res) => {
    const data = await CharacterModel.find({})
    return res.json(data)
})


// PUT
app.put('/', async (req,res) => {
    // MAKE SURE YOU AWAIT YOU DINGUS!
    // Update item by id
    await CharacterModel.findByIdAndUpdate('66cdc022814462405cddaea5', {details: 'yo'})
    // updateOne
    // console.log(req.body)
    // await CharacterModel.updateOne(req.body, {name: 'Finn the Cool Guy'}) //What do you, What of that model do you want to update
    // Read inputs/Body of fetch

})


// })
// POST
app.post('/', async (req, res) => {
    return res.json({ message: 'done' })
})

// DELETE
app.delete('/',  async (req,res) => {
    // findByIdAndDelete
    // await CharacterModel.findByIdAndDelete('66cdc022814462405cddaea5')
    // deleteOne
    await CharacterModel.deleteOne(req.body)

})


mongoose.connect('mongodb://127.0.0.1:27017/adventuretime').then(() => {
    console.log('Connected to DB');
    app.listen(3000, () => {
        console.log('Server Connected')
    })
})
