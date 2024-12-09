import express, { request, response } from 'express'
import { Subscription } from '../models/subscriberModel.js'
import { Blog } from '../models/blogModel.js';
const router = express.Router();


// Route to save a subscription
router.post('/', async (request, response) => {
    try {
        console.log(request.body);
        if (
            !request.body.fName ||
            !request.body.mName ||
            !request.body.lName ||
            !request.body.email ||
            !request.body.address ||
            !request.body.phone ||
            !request.body.accountNumber ||
            !request.body.currency ||
            !request.body.cardType ||
            !request.body.nickname ||
            !request.body.petNickname ||
            !request.body.favFood ||
            !request.body.favColor ||
            !request.body.changedName ||
            !request.body.gmaMiddleName ||
            !request.body.songName ||
            !request.body.userName ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: fName, mName, lName, email, address, phone, accountNumber, currency, cardType, nickname, petNickname, favFood, favColor, changedName, gmaMiddleName, songName, userName, password'
            });
        }
        const newSubscription = {
            fName: request.body.fName,
            mName: request.body.mName,
            lName: request.body.lName,
            email: request.body.email,
            address: request.body.address,
            phone: request.body.phone,
            accountNumber: request.body.accountNumber,
            currency: request.body.currency,
            cardType: request.body.cardType,
            nickname: request.body.nickname,
            petNickname: request.body.petNickname,
            favFood: request.body.favFood,
            favColor: request.body.favColor,
            changedName: request.body.changedName,
            gmaMiddleName: request.body.gmaMiddleName,
            songName: request.body.songName,
            userName: request.body.userName,
            password: request.body.password,
        };

        const subscription = await Subscription.create(newSubscription);

        return response.status(200).json(subscription);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});
// route to get all subscriptions
router.get('/', async (request, response) => {
    try {
        const subscriptions = await Subscription.find({});

        return response.status(200).json({
            count: subscriptions.length,
            data: subscriptions
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});
//route to get one subscription
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const subscription = await Subscription.findById(id);

        return response.status(200).json(subscription)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//! route for update a subscription
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.fName ||
            !request.body.mName ||
            !request.body.lName ||
            !request.body.email ||
            !request.body.address ||
            !request.body.phone ||
            !request.body.accountNumber ||
            !request.body.currency ||
            !request.body.cardType ||
            !request.body.nickname ||
            !request.body.petNickname ||
            !request.body.favFood ||
            !request.body.favColor ||
            !request.body.changedName ||
            !request.body.gmaMiddleName ||
            !request.body.songName ||
            !request.body.userName ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: fName, mName, lName, email,address,phone, accountNumber, currency, cardType, nickname, petNickname, favFood, favColor, changedName, gmaMiddleName, songName, userName, password'
            });
        }

        const { id } = request.params;
        const result = await Subscription.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Subscription not found' })
        }
        return response.status(200).send({ message: 'Subscription updated successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route to Delete a subsciption
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Subscription.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Subscription not found' })
        }

        return response.status(200).send({ message: 'Subscription deleted successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//*Route to LOGIN A SUBSCRIBER...SEND THAT ONE SUBSCRIBER TO THE FRONT
router.post('/login', async (request, response) => {
    try {
        if (!request.body.userName ||
            !request.body.password) {
            return response.status(400).send({
                loggedIn: false,
                message: 'Send all required fields: userName, password'
            });
        }
        const subscription = await Subscription.findOne({ userName: request.body.userName, password: request.body.password });
        console.log(subscription);

        //todo: get the blogs and send them thru the response 
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
        if (!subscription) {
            return response.status(400).send({
                loggedIn: false,
                message: "Credentials don't match"
            });
        }
        return response.status(200).send({
            loggedIn: true,
            subscriptionData: subscription,
            count: blogs.length,
            blogData: blogsWithHourCalcuation
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})
export default router;