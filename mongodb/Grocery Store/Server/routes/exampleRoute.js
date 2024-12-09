//! Lesson 10 add
import express from 'express';
import { Book } from '../models/bookModel.js'

const router = express.Router();


router.get('/books', (req,res) => {
    res.json({message: 'These are books'})
});


//! Route for Save a new Book(lesson 5)
router.post('/', async (request, response) => {
    try {
        console.log(request.body);
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const  book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//! Route for Get all Books from Database (lesson 6)
router.get('/', async (request, response) => {
    
    try{
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        })
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//!Route for Get One book from database by id
router.get('/:id', async (request, response) => {
    //? copy the _id from a book in postman then place it in the url(http://localhost:3000/books/66d9db183ef5f6b6ddbc3c6b)
    
    
    try{
        
        const { id } = request.params;
        
        const book = await Book.findById(id);

        return response.status(200).json(book)
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//! Route for update a book
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;
        
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' })
        }

        return response.status(200).send({ message: 'Book updated successfully' })
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});


//! Route for Delete a book
router.delete('/:id', async (request,response) => {
    try{
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' })
        }

        return response.status(200).send({ message: 'Book deleted successfully' })

    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

export default router;