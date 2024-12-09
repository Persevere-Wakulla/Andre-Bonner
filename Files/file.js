// npm init
// type in package json needs to be 'CommonJs'
const path = require('path')
const fs = require('fs')
const { Console } = require('console')
// Type needs to be module
// import path from 'path'
// import { fileURLToPath } from 'url'
// Read directorys/Read what files are in directory

// __dirname - read the current directory
// __filename - read the current file

// const dirname = import.meta.dirname
console.log(__dirname)
console.log(__filename)

// Create file paths/absolute paths
const imageFolder = path.join(__dirname, 'Images','Animals')

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
fs.writeFile(path.join(__dirname,'test.txt'), 'Hello World from JS',(err => {
    if (err) return console.log(err)
    return console.log('File has been written')
}))
// Append adds to the file
fs.appendFile(path.join(__dirname,'test.txt'),'\nI"ve Added to this file', (err => {
    if (err) return console.log(err)
    return console.log('File has been added to')
}))
// Delete
// setTimeout(() => {
//     fs.unlink(path.join(__dirname,'test.txt'), err => {
//         if (err) return console.log(err)
//         return console.log('File has been erased!');
//     })
// } ,2000)
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
writeContent(__dirname, 'pizza.text', 'Peperonni is the best!')

// Activities
// Write/Append to a file Your info
// Loop through Animals folder
// write to a file every image to that file
// function to return a random animal
// Video, first PCC exercise for Backend

//! Write
writeContent(__dirname, 'myinfo.txt', 'My name is Dre The Dev...')

//! Append
function appendContent(path, filename, content) {
    return fs.appendFile(`${path}/${filename}`, content, (err => {
        if(err) return console.log(err);
        return console.log('Content Apended');
    }))
}

appendContent(__dirname, 'myinfo.txt', '\nI"m currently employed by Persevere and learning Node.js')

//! Loop

function loopContent(imageFolder) {
    for(let i = 0; i < imageFolder.length; i++){

        return fs.writeFile(__dirname, 'myinfo.txt', 'This is an image of ${imageFolder}'
            (err => {
            if (err) return console.log(err)
            return console.log(
                `${imageFolder} is the animal`
            );
        }))
    }
};
console.log(loopContent());
