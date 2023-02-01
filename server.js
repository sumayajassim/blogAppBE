// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// PORT Configuration
const port = 4000;

// Initailze Express
const app = express();

// Look for all the static files in public folder (css, JS, Images, Audio, Videos).
app.use(express.static("public"));

// Require Express-EJS-Layouts
const expressLayouts = require("express-ejs-layouts");

// Look in to views folder for a file named layout.ejs
app.use(expressLayouts);

// Import Routes
const indexRoute = require('./routes/index');
const articleRoute = require('./routes/articles');

// Mount Routes
app.use('/', indexRoute);
app.use('/', articleRoute);

// Node.js to look in a folder views for all the ejs files.
app.set("view engine", "ejs");

mongoose.set('strictQuery', false);
// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/blogapp", 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected Successfully")
    }
)

// Listen to specific port for incomming requests
app.listen(port, () => {
    console.log(`Blog App is running on ${port}`);
})

app.get("/a", (req, res) => {
    res.render("home/another");
})
