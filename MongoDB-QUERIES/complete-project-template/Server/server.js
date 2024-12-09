import mongoose from "mongoose";
import express, { request, response } from "express"
import { PORT } from "./config.js"
import { Book } from "./models/bookModel.js";
//! Lesson 10 add
import booksRoute from './routes/booksRoute.js';
import cors from 'cors'


//? HTTP MEANS HYPERTEXT-TRANSFER-PROTOCOL
//? IT IS TRANSFERING DATA FROM THE BROWSER TO THE SERVER VIA GET, POST, 
//todo: create server
const app = express()

// app.listen(PORT, () => {
    //     console.log(`App is listening to port: ${PORT}`);
    // });
    //! Middleware for parsing request body
    app.use(express.json())
    
    //! Lesson 11 CORS policy in Node js and Express js
    //! One of the most important topics in Web Development: CORS policy- Cross-Origin Resource Sharing
    //? MIDDLEWARE FOR HANDLING CORS POLICY
    //* OPTION 1: Allow All Origins with Default of cors(*)
    app.use(cors())
    //* OPTION 2: Allow Custom Origins
    // app.use(
    //     cors({
    //         origin: 'http://localhost:5173',
    //         methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //         allowedHeaders: ['Content-Type'],
    //     })
    // )
//! localhost:3000...on the browser..f12...network
app.get('/', (request, response) => {
    //? app.get sent a request for (http://localhost:3000/)...returned response based on the status...
    console.log(request)
    return response.status(234).send(`<h1 style="color:red">Hello from the Server...Welcome to MERN Stack Tutorial</h1> <h3>watch the video: MERN STACK TUTORIAL - BOOK STORE PROJECT and do the following lessons with MongoDB COMPASS and Postman apps</h3>`)
});

//! LESSON 10 : Refactor Node js with express Router
//! Lesson 10 add
app.use('/books', booksRoute)

//! cut, pasted and changed in routes/booksRoute.js
// app.get('/books', (req,res) => {
//     res.json({message: 'These are books'})
// })


// //! route for Save a new Book(lesson 5)
// app.post('/books', async (request, response) => {
//     try {
//         console.log(request.body);
//         if(
//             !request.body.title ||
//             !request.body.author ||
//             !request.body.publishYear
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: title, author, publishYear',
//             });
//         }
//         const newBook = {
//             title: request.body.title,
//             author: request.body.author,
//             publishYear: request.body.publishYear,
//         };

//         const  book = await Book.create(newBook);

//         return response.status(201).send(book);
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// })

// //! Route for Get all Books from Database (lesson 6)
// app.get('/books', async (request, response) => {

//     try{
//         const books = await Book.find({});

//         return response.status(200).json({
//             count: books.length,
//             data: books
//         })
//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// })

// //!Route for Get One book from database by id
// app.get('/books/:id', async (request, response) => {
//     //? copy the _id from a book in postman then place it in the url(http://localhost:3000/books/66d9db183ef5f6b6ddbc3c6b)
    
    
//     try{
        
//         const { id } = request.params;
        
//         const book = await Book.findById(id);

//         return response.status(200).json(book)
//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// })

// //! Route for update a book
// app.put('/books/:id', async (request, response) => {
//     try{
//         if(
//             !request.body.title ||
//             !request.body.author ||
//             !request.body.publishYear
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: title, author, publishYear',
//             });
//         }

//         const { id } = request.params;
        
//         const result = await Book.findByIdAndUpdate(id, request.body);

//         if (!result) {
//             return response.status(404).json({ message: 'Book not found' })
//         }

//         return response.status(200).send({ message: 'Book updated successfully' })
//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// })


// //! Route for Delete a book
// app.delete('/books/:id', async (request,response) => {
//     try{
//         const { id } = request.params;

//         const result = await Book.findByIdAndDelete(id);

//         if (!result) {
//             return response.status(404).json({ message: 'Book not found' })
//         }

//         return response.status(200).send({ message: 'Book deleted successfully' })

//     }catch(error){
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// })

mongoose
    .connect('mongodb://127.0.0.1/Merchandise')
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT} http://localhost:${PORT}`);

        });
    })
    .catch((error) => {
        console.log(error);
    });