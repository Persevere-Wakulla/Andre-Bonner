// https://mongoosejs.com/docs/index.html
import mongoose from 'mongoose'
import express from 'express'
import Characters from './models/characters.js'
import cors from 'cors'

const app = express()

// Getting Data
// Create a Scheme
// Create a model 
// in our get find data from that model

// Middleware
app.use(cors())
app.use(express.json())



// Grab our data from our DB
app.get('/', async (req,res) => {
    // Grab Data
    const characterData = await Characters.find({})
    console.log(characterData)
    res.json(characterData)
})

app.post('/', async (req,res)  => {
    const data = req.body
    console.log(data)
    // Create data
    Characters.create(data)
    res.json({message: 'data sucessfull'})
})


// Connect to DB DB/Collection
mongoose.connect('mongodb://127.0.0.1/adventuretime').then(() => {
    console.log('DB has been connect')
    app.listen(3000, () => {
        console.log('Listetning on 3000 http://localhost:3000')
    })
})


