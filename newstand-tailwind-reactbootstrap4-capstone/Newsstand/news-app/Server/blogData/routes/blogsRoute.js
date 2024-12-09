import express, { response } from 'express';
import { Blog } from '../models/blogModel.js'

const router = express.Router();


//! Finish..
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

        const blog = await Blog.create(newBlog);

        return response.status(201).send(blog);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});
//* for visitors only....
// router.get('/visitorsblogs', async (request, response) => {
//     try {
//         const today = Date.now()
//         console.log(today);

//         const oldNews = today + ((((1000 * 60) * 60) * 24) * 10)
//         console.log(oldNews);
                

//         const blogs = await Blog.find()
//             .where('createdAt')
//             .gte(oldNews)
//             .lean();

//         // const blogsWithHourCalcuation = blogs.map(x => {

//         //     let minutes = ((today - x.createdAt) / 1000) / 60
//         //     let hours = (((today - x.createdAt) / 1000) / 60) / 60
//         //     let days = ((((today - x.createdAt) / 1000) / 60) / 60) / 24
//         //     if (minutes < 60) {
//         //         return {
//         //             ...x,
//         //             formattedCreatedAt: `${minutes.toFixed(0)} mins ago`
//         //         }
//         //     }
//         //     if (hours <= 12) {
//         //         return {
//         //             ...x,
//         //             formattedCreatedAt: `${hours.toFixed(0)} hours ago`
//         //         }
//         //     }
//         //     if (hours > 12) {
//         //         return {
//         //             ...x,
//         //             formattedCreatedAt: `today`
//         //         }
//         //     }
//         //     if (days > 1) {
//         //         return {
//         //             ...x,
//         //             formattedCreatedAt: `${days.toFixed(0)} day ago`
//         //         }
//         //     }

//         // })
//         // console.dir(blogsWithHourCalcuation)
//         return response.status(200).json({
//             count: blogs.length,
//             data: blogs,
//         })
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// })

//* for subscribers only 
router.get('/', async (request, response) => {

    try {
        const today = Date.now()

        const threeDaysPrior = today - ((((1000 * 60) * 60) * 24) * 3)


        const blogs = await Blog.find()
            .where('createdAt')
            .gte(threeDaysPrior)
            .lean();

        const blogsWithHourCalcuation = blogs.map(x => {

            let minutes = ((today - x.createdAt) / 1000) / 60
            let hours = (((today - x.createdAt) / 1000) / 60) / 60
            let days = ((((today - x.createdAt) / 1000) / 60) / 60) / 24
            if (minutes < 60) {
                return {
                    ...x,
                    formattedCreatedAt: `${minutes.toFixed(0)} mins ago`
                }
            }
            if (hours <= 12) {
                return {
                    ...x,
                    formattedCreatedAt: `${hours.toFixed(0)} hours ago`
                }
            }
            if (hours > 12) {
                return {
                    ...x,
                    formattedCreatedAt: `today`
                }
            }
            if (days > 1) {
                return {
                    ...x,
                    formattedCreatedAt: `${days.toFixed(0)} day ago`
                }
            }

        })
        console.dir(blogsWithHourCalcuation)
        return response.status(200).json({
            count: blogs.length,
            data: blogsWithHourCalcuation,
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

        const blog = await Blog.findById(id);

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

        const result = await Blog.findByIdAndUpdate(id, request.body);

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

        const result = await Blog.findByIdAndDelete(id);

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