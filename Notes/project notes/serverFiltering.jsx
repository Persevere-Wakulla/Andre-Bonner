// server.js / router.js (blogsRoute.js)
//1
router.get('/', async (request, response) => {

    try {
        // const blogs = await Blog.find({created: {eq}});(=)
        // const blogs = await Blog.find({created: {gte}});(>=)
        // const blogs = await Blog.find({created: {lte}});(<=)
        // const blogs = await Blog.find({created: {lt}});(<)
        // const blogs = await Blog.find({created: {gt}});(>)
        const blogs = await Blog.find({ created: { eq } });
        return response.status(200).json({
            count: blogs.length,
            data: blogs,
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//2
router.get('/', async (request, response) => {

    try {
        const today = Date.now()
        console.log(today)
        
        const threeDaysPrior = ((((1000 * 60) * 60) * 24) * 3)
        
        console.dir(new Date(today));
        console.dir(new Date(today - threeDaysPrior));
        const blogs = await Blog.find()
            .where('createdAt')
            .gte();

        return response.status(200).json({
            count: blogs.length,
            data: blogs,
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//? map in js manipulating data in mongoDB
//! const blogsWithHourCalcuation = blogs.map(x => {
    //* changes the value of publishYear
//!     x.publishYear *= 2;
//?     // return {x}
//!     return x
//! })
//! console.dir(blogsWithHourCalcuation)
 
//? create properties...change data
// const blogsWithHourCalcuation = blogs.map(x => {
    // return {
        // ...x,
        // formattedCreatedAt: 3343
    // }
// })
// console.dir(blogsWithHourCalcuation)

//?
// router.get('/', async (request, response) => {

//     try {
    //! current date
//         const today = Date.now()
    //! variable that holds the value of the current date subtracting from the formula for 72 hours(3 days)    
//         const threeDaysPrior = today - ((((1000 * 60) * 60) * 24) * 3)
        

//         const blogs = await Blog.find()
    //! .where(key/property in schema)
//             .where('createdAt')
    //! .greater than equal to(variable)
//             .gte(threeDaysPrior)
    //! .lean() change the node from a model format to a json like format
//             .lean();

//         const blogsWithHourCalcuation = blogs.map(x => {
//             return {
    //! copy arr
//                 ...x,
    //! added property ... changed value: Tue Sep 17 2024 07:35:49 GMT-0400 (Eastern Daylight Time) mins 
//                 formattedCreatedAt: `${new Date(x.createdAt)} mins`
//             }
//         })
//         console.dir(blogsWithHourCalcuation)
//         return response.status(200).json({
//             count: blogs.length,
    //! filtered data
//             data: blogsWithHourCalcuation,
//         })
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// });
// todo: filter the dat in the database to only show/fetch the last three days of data in the collection
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
            console.log(minutes);
            console.log(hours);
            console.log(days);
            //! note: don't use toPrecision() nor toFixed() for currencies projects
            if (minutes < 60) {
                // to fixed takes away numbers after decimal
                // return `${minutes.toFixed(0)} minutes ago`
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