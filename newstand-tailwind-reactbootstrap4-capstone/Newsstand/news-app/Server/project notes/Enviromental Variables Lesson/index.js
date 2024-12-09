import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
// ENV - secret info that you don't want users to have
// API Keys
// DB Strings
// ETC....
dotenv.config(); //Allows us to read our created .env file
const app = express();

mongoose.connect(process.env.DB_STRING).then(() => {
  console.log('connected properly');
});

const portEnv = process.env.PORT;
app.listen(portEnv, () => {
  console.log(`I am on ${portEnv}`);
});
