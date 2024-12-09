import express, { request, response } from 'express'
import { Post } from '../models/contactPostModel.js';

const router = express.Router();

// Route to save a Contact post...router.Post()
router.post('/', async (request, response) => {
    try {
        console.log(request.body)
        if (
            !request.body.email ||
            !request.body.message
        ) {
            return response.status(400).send({
                message: 'Send all required fields: email, message'
            });
        }
        const newContactPost = {
            email: request.body.email,
            message: request.body.message
        };

        const contactPost = await Post.create(newContactPost);

        return response.status(201).send(contactPost);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})
// route to get all contact posts...router.Get()
router.get('/', async (request, response) => {
    try {
        const contactPosts = await Post.find({});

        return response.status(200).json({
            count: contactPosts.length,
            data: contactPosts
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});
// Route to get one Contact Post...router.Get()
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const contactPost = await Post.findById(id);

        return response.status(200).json(contactPost)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})
//Route for updating a Contact Post...router.Put()
router.put('/:id', async (request, response) =>{
    try{
        if (!request.body.email ||
            !request.body.message) {
                return response.status(400).send({
                    message: 'Send all required fields: email, message'
                });
        }
        const { id } = request.params;

        const result = await Post.findByIdAndUpdate(id, request.body);
       
        if (!result) {
            return response.status(404).json({ message: 'Contact post not found' })
        }

        return response.status(200).send({ message: 'Contact post updated successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route to Delete a Contact Post...router.Delete()
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Post.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Contact Post not found' })
        }

        return response.status(200).send({ message: 'Contact Post deleted successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

export default router