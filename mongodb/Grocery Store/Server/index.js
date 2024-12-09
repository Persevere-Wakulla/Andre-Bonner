import express from 'express';
import mongoose from 'mongoose';
import { Item } from './model/Item.js';
import { PORT } from './config.js';
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(cors())
// How to filter data in a DB
// ? 1. Grab Data/ GO into our DB
// ? 2. Apply DB Operators/Code to Filter
// ? 3. Return the res/data back

app.get('/', async (req, res) => {
  const allItems = await Item.find();
  return res.json(allItems);
});

//! Method 1. use DB Queries
// * https://www.mongodb.com/docs/manual/reference/operator/query/
// * Common Comparison Operators
/* 
$eq = equals
$gt = greater than
$gte = greater than or equals
$lt = less than
$lt = less than or equals
$ne = not equal
*/
// PRICE of above 500
app.get('/expensive', async (req, res) => {
  const filtered = await Item.find({ price: { $gte: 500 }, quantity: {$lt: 50} });
  return res.json(filtered);
});
// Custom price
app.get('/price/:price', async (req,res) => {
      const {price} = req.params;
      const filter = await Item.find({price: {$lte: price}});
      return res.json(filter);
      
})
// ! Method 2. Use JS Methods
app.get('/jsexpensive', async (req, res) => {
  const items = await Item.find();
  // price >= 500
  const filter = items.filter((item) => item.price >= 500);
  return res.json(filter);
});
// ? Exercises
// Find products with prices under $100
app.get('/underadollar', async (req, res) =>{
  const filter = await Item.find({price: {$lt: 100}});
  return res.json(filter);
})
// Find products with quantity greater than 20
app.get('/twentyplus', async (req, res) =>{
  const filter = await Item.find({price: {$gt: 20}});
  return res.json(filter);
})
// Find products with discount percentage less than five and quantity greater than 20
app.get('/twoproperties', async (req, res) =>{
  const filter = await Item.find({price: {$gt: 20}, discount_percentage: {$lt: 5}});
  return res.json(filter);
})

mongoose
    .connect('mongodb://127.0.0.1/superMarketData')
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT} http://localhost:${PORT}`);

        });
    })
    .catch((error) => {
        console.log(error);
    });

//! Method 1. use DB Queries
// * https://www.mongodb.com/docs/manual/reference/operator/query/
// Find by quantity
// app.get('/quantity/:quantity', async (req, res) => {
//   const searchAmount = req.params.quantity;
// Finding items that have a quantity great than 20
//   const filter = await Item.find({ quantity: { $lt: searchAmount } });
//   return res.json(filter);
// });

// * Common Comparison Operators
/* 
$eq = equals
$gt = greater than
$gte = greater than or equals
$lt = less than
$lt = less than or equals
$ne = not equal
*/

// ! Method 2. Use JS Methods
// app.get('/price/:price', async (req, res) => {
//   const priceSearch = req.params.price;
//   const items = await Item.find()
//   const filter = items.filter(i => i.price < priceSearch)
//   return res.json(filter)

// });
