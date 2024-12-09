// ejs.co--ejs with express
import mongoose from 'mongoose';
import express from 'express'
import bodyParser from 'body-parser'
// import cors from 'cors'
// const express = require("express");
const app = express();
const PORT = 3001;

// need views folder to play with ejs
app.set('view engine', 'ejs');
// css you need middleware
app.use(express.static("public"))
// add this line and you will receive any type of form data
app.use(bodyParser.urlencoded({ extended: true }))
//todo: npm install body-parser - allows us to parse the body data and replace express with bodyParser...import first, then change to bodyParser

let plNames = ['c', 'c++', 'java', 'python'];


app.get("/", (req, res) => {
    // render: WILL LOAD THE EJS FILE...then file name but dont put in ejs
    res.status(200).render("index", { pageTitle: "home page", plNames: plNames })
});

app.post("/", (req, res) => {
    // post...form...it has to grab the name property in the input
    // const plName = req.body.plName;
    // console.log(req.body);
    // it says "undefined" because there is no middleware returned
    // add this line and you will receive any type of form data
    // app.use(express.urlencoded({extended: true}))
    console.log(req.body.plName);
    // now that your getting the data from the..."plName"-value of the name property...now you can push the values/data of the inputs in the array[plnames]
    plNames.push(req.body.plName);
    console.log(req.body);
    // res.status(201).send("data is created")
    // now re-direct back to the home page instead of the testing the data to see if it is created
    res.redirect("/");
});

app.get("/contact", (req, res) => {
    res.status(200).render("contact", { pageTitle: "contact page" })
});

mongoose
.connect('mongodb://127.0.0.1/EJS')
.then(() => {
    console.log('App connected to Database');

    app.listen(PORT, () => {
        console.log(`server is running at http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});