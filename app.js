// jshint esversion:8
const express = require("express");
const https = require("https"); // native node module
const app = express();
require('dotenv').config(); // config .env file

// use body parser with express
app.use(express.urlencoded({
  extended: true
}));

// get the server know public folder
app.use(express.static("public"));

// use ejs - Embedded JavaScript templatinge as app view engine.
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("list", {});
});

app.post("/", (req, res) => {

});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
