import mongoose from "mongoose";
import express, { request, response } from "express"
import cors from 'cors'
import { PORT } from "./config.js"
import blogsRoute from './routes/blogsRoute.js';
import subscriberRoute from './routes/subscriberRoute.js'
import contactPostRoute from './routes/contactPostRoute.js'
import visitorsRoute from './routes/visitorsRoute.js'

const app = express()


app.use(express.json())


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
    console.log(request)
    return response.status(234).send(`<h1 style="color:red">Hello from the Server...Welcome to Newstand</h1> <h3>watch the video: MERN STACK TUTORIAL - BOOK STORE PROJECT and do the following lessons with MongoDB COMPASS and Postman apps if you forget anything or want to refresh your knowledge of the concepts...</h3> <p>Remake the Newsstand app on the tablets</p>`)
});

app.use('/visitorsblog', visitorsRoute)
app.use('/blog', blogsRoute)
app.use('/subscribe', subscriberRoute)
app.use('/contact-post', contactPostRoute)

mongoose
    .connect('mongodb://127.0.0.1/Newsstand')
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT} http://localhost:${PORT}`);

        });
    })
    .catch((error) => {
        console.log(error);
    });