//todo: video- nodeJS 7 Hours FULL COURSE(Chapter 1-2 Basics and Read and Write Files)

//! 1st way
// const fs = require('fs');
import fs from 'fs'
fs.mkdir('./new', (err) =>{
    if (err) throw err;
    console.log('Directory created');
})
// fs.readFile('./myinfo.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// //! reads before the read file function (async/sync)
// console.log('Hello...');

// //! exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err} `)
//     process.exit(1)
// })

//! 2nd Way(includes path && callback Hell...)
// const fs = require('fs');
// const path = require('path');

// fs.readFile(path.join( __dirname, './myinfo.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


// //! reads before the read file function (async/sync)
// console.log('Hello...');

// //!write
// fs.writeFile(path.join( __dirname, './reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

    //!append
    // fs.appendFile(path.join( __dirname, './reply.txt'), '\n\nYes,it is', (err) => {
    //     if (err) throw err;
    //     console.log('Append complete');
    // })

    //!rename
//     fs.rename(path.join( __dirname, './reply.txt'), path.join( __dirname, './newreply.txt'), (err) => {
//         if (err) throw err;
//         console.log('Rename complete');
//     })
// })

// fs.appendFile(path.join( __dirname, './videotest.txt'), 'Testing text', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
// })
// //! exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err} `)
//     process.exit(1)
// })

//!3rd way with async await && try/catch

// const fsPromises = require('fs').promises;
// const path = require('path');

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join( __dirname, './myinfo.txt'), 'utf-8');
//         console.log(data);

//         //? write to the 
//         await fsPromises.writeFile(path.join( __dirname, './promiseWrite.txt'), data);

//         //? add the text to the end
//         await fsPromises.appendFile(path.join( __dirname, './promiseWrite.txt'), '\n\nNice to meet you.');

//         // ? add new file to the end
//         await fsPromises.rename(path.join( __dirname, './promiseWrite.txt'), path.join( __dirname, './promiseComplete.txt'));

//         const newData = await fsPromises.readFile(path.join( __dirname, './promiseComplete.txt'), 'utf-8');
//         console.log(newData);

//     } catch (err) {
//         console.error(err);
//     }
// }

// fileOps();