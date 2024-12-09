// npm init
// type in package json needs to be 'CommonJs'
// const path = require('path')
// const fs = require('fs')
// Type needs to be module
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
// Read directorys/Read what files are in directory

// __dirname - read the current directory
// __filename - read the current file

// const dirname = import.meta.dirname
//dirname/filename with module 
const filename = fileURLToPath(import.meta.url); 
const dirname = path.dirname(filename); 


console.log(dirname)

console.log(filename)

// Create file paths/absolute paths
const imageFolder = path.join(dirname, 'Images','Animals')

console.log(imageFolder)
const folder = fs.statSync(imageFolder)

console.log('is Directory?', folder.isDirectory())
console.log('is File?', folder.isFile())

//Read, Create,Write, Delete Files
// Read
fs.readdir(imageFolder, 'utf-8', (data, err) => {
    if (err) return console.log(err)
    return console.log(data)
})
// Creating
// need to provide where you want create, also what create
// Creates and Overides
fs.writeFile(path.join(dirname,'test.txt'), 'Hello World from JS',(err => {
    if (err) return console.log(err)
    return console.log('File has been written')
}))
// Append adds to the file
fs.appendFile(path.join(dirname,'test.txt'),'\nI"ve Added to this file', (err => {
    if (err) return console.log(err)
    return console.log('File has been added to')
}))
// Delete
setTimeout(() => {
    fs.unlink(path.join(dirname,'test.txt'), err => {
        if (err) return console.log(err)
        return console.log('File has been erased!');
    })
} ,2000)
// Need to provide the path/file you edit, create, delete.....


function writeContent(path, filename, content) {

    // Need to provide path and name of file, content, Callback for err
    return fs.writeFile(`${path}/${filename}`, content, (err => {
        if (err) return console.log(err)
        return console.log(
            'Content Written'
        );
    }))
}
writeContent(dirname, 'pizza.text', 'Peperonni is the best!')

// Activities
// Write/Append to a file Your info
// Loop through Animals folder
// write to a file every image to that file
// function to return a random animal
// Video, first PCC exercise for Backend


