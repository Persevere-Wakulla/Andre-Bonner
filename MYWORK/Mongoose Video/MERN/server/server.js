// https://mongoosejs.com/docs/index.html

import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import Characters from './models/characters.js'

const app = express()

// ? MIDDLEWARE
app.use(cors())
app.use(express.json())

//TODO: grab our data form our Database
app.get('/', async (req, res) => {
    //? grab data
    const characterData = await Characters.find()
    console.log(characterData);
    res.json(characterData)
})

app.post('/', async (req,res)  => {
    const data = req.body
    console.log(data)
    // Create data
    Characters.create(data)
    res.json({message: 'data successful'})
})

//TODO:1ST-CONNECT TO DB/COLLECTION
mongoose.connect('mongodb://127.0.0.1/Dragon-Ball-Z').then( () => {
    console.log('DB has been connected')
    app.listen(3000, () => {
        console.log('Listening on 3000 http://localhost:3000')
    })
})