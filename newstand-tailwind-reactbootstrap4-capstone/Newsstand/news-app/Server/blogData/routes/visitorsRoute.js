import express from "express";
import { VBlog } from "../models/visitorsblogModel.js";

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        console.log(request.body);
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.email ||
            !request.body.phone ||
            !request.body.occupation ||
            !request.body.publishYear ||
            !request.body.blogInfo ||
            !request.body.image
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, email, phone, occupation, publishYear, blogInfo',
            });
        }
        const newBlog = {
            title: request.body.title,
            author: request.body.author,
            email: request.body.email,
            phone: request.body.phone,
            occupation: request.body.occupation,
            publishYear: request.body.publishYear,
            blogInfo: request.body.blogInfo,
            image: request.body.image

        };
        const blog = await VBlog.create(newBlog);

        return response.status(201).send(blog);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});
router.get('/', async (request, response) => {

    try {        
        const blogs = await VBlog.find({})           
 
        return response.status(200).json({
            count: blogs.length,
            data: blogs,
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//read via id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const blog = await VBlog.findById(id);

        return response.status(200).json(blog)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//update
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.email ||
            !request.body.phone ||
            !request.body.occupation ||
            !request.body.publishYear ||
            !request.body.blogInfo

        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, email, phone, occupation, publishYear, blogInfo',
            });
        }

        const { id } = request.params;

        const result = await VBlog.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Blog not found' })
        }

        return response.status(200).send({ message: 'Blog updated successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});
//delete
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await VBlog.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Blog not found' })
        }

        return response.status(200).send({ message: 'Blog deleted successfully' })

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

export default router;