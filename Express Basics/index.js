// https://expressjs.com/en/4x/api.html#express
import express from 'express'
import path from 'path'
//! ADD FOR MODULES -- IMPORTS...BASED ON OLDER VERSION 
import { fileURLToPath } from 'url'

//! chapter 1 and 2 BASICS AND READ WRITE FILES
import  os  from 'os'
import fs from 'fs'
// Creates your server
const app = express();

//! add //dirname/filename with module
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename) 

//? operating system
// console.log(os);
//? functions
console.log(path);
//? Express (Folder)
console.log(path.dirname);

//? index.js (Current File)
console.log(path.basename(filename));
//? .js
console.log(path.extname(filename));

//? object w/ all the values(root, dir, base, ext, name)
console.log(path.parse(filename));

// fs.mkdir('./new', (err) =>{
//     if (err) throw err;
//     console.log('Directory created');
// })















// API Stuff
const port = 3000
// Post, Put, Get, Delete

// 192.168.45.1:3000
app.get('/', (req, res) => {
    res.json({name: 'Andre Bonner', age : 36})
})

app.get('/fish', (req,res) => {
    res.json({name: 'bass', weight : '5lbs', color: 'red'})

})

app.get('/fish/pic', (req,res) => {
    // !NEWER VERSION...DONT HAVE(import.meta.dirname)
    // res.sendFile(path.join(import.meta.dirname, 'images', 'yellow-port.jpg'))
    // res.download(path.join(import.meta.dirname, 'images', 'yellow-port.jpg'))
    // res.download(path.join(dirname, 'images', 'yellow-port.jpg' ))
    res.send(path.join(dirname, 'images', 'yellow-port.jpg'))

})

app.get('/html', (req,res) => {
    res.send('<h1>Hello</h1>')
})


//! one way
app.get('^/$|/page', (req,res) => {
    res.sendFile(path.join(dirname, 'index.html'))
})
//! another way
app.get('/page', (req,res) => {
    res.sendFile(path.join(dirname, 'index.html'))
})

app.get('/node', (req,res) => {
    console.log(123)
    res.redirect('https://expressjs.com/en/4x/api.html#express')
})


// Exercises
// Create a simple API on something


// Images
// Create an endpoint that when you go to it, it give the user a random image from that folder

//todo: VIDEO-CHAPTER 6 INTRO TO EXPRESS JS FRAMEWORK
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(dirname,  'ServerPages', 'new-page.html'));
});


//!catch-all...a '/' followed by anything will send you to this page

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, 'ServerPages', '/new-page.html'); //! 302 by default
});

//! ROUTE HANDLERS
app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    //! chain calling the next function
    next()
}, (req, res) => {
    res.send('Hello World');
})

//todo: chaining route handlers
//! these route handlers work similarly to MIDDLEWARE(NEXT TUTORIAL)
//? next() joins the functions together
const one = (req, res, next) => {
    console.log('one');
    next();
}
//? joined by next()
const two = (req, res, next) => {
    console.log('two');
    next();
}
//? last in chain...take away next... and use res.send('')
const three = (req, res) => {
    console.log('three');
    res.send('finished!')
}

//? use the chain in a route
app.get('/chain(.html)?' , [one, two, three]);


//!this is a custom 404 page...express will send a 404 status code and tell you it will not find what it is  looking for...even if your not supplying anything
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(dirname, 'ServerPages','404.html'))
})
// Run our server
app.listen(port, () => {
    console.log(`Your SERVER is running on port ${port} http://localhost:${port} Dre the Dev$$$`);
});




// app.get('/', (req, res) => {
//     res.json({ greeting: 'Hello', time: Date.now() })
// })
// app.get('/fish', (req, res) => {
//     res.sendFile(path.join(import.meta.dirname, 'images', 'yellow-port.jpg'))
// })

// app.get('/fish/d', (req,res) => {
//     res.download(path.join(import.meta.dirname, 'images', 'yellow-port.jpg'))

// })

// app.get('/node', (req,res) => {
//     res.redirect('https://expressjs.com/en/4x/api.html#res.redirect')
// })

// app.listen(3000, () => {
//     console.log(`Listening on port 3000: http://localhost:3000/`)
// })
