// If using CommonJs will need to change these to require()

import express from 'express'
import mongoose from 'mongoose'
import fs from 'fs'
import pug from 'pug'
import path from 'path'
import cors from 'cors'


const app = express()


const port = 3000
const dirName = import.meta.dirname
const fileName = import.meta.dirname

// Middleware
app.use(express.json())
app.use(express.static(path.join(dirName, 'public')))
app.use(express.static(path.join(dirName, 'views')))
app.use(cors())
// Routes

// When a user goes to this enpoint I am sending either an html file, html, json, etc....

app.get('/', (req, res) => {
    // sending a file
    return res.sendFile(path.join(dirName, 'public', 'adminPage.html'))
})
app.post('/student', (req, res) => {
    res.sendFile(path.join(dirName, 'public', 'taskBoard.html'))
})

app.get('/admin', (req,res) => {
    // sending  html
    res.send('<h1>Welcome Admin</h1>')
})

app.get('/json', (req,res) => {
    // sending Json to use from a fetch request
    res.json({"message": 'Hello World'})
})


