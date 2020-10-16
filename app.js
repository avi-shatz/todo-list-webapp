// jshint esversion:8
const date = require(__dirname + "/date.js")
const express = require("express");
const https = require("https"); // native node module
const app = express();
require('dotenv').config(); // config .env file

const items = [];
const workItems = [];

// use body parser with express
app.use(express.urlencoded({
  extended: true
}));

// get the server know public folder
app.use(express.static("public"));

// use ejs - Embedded JavaScript templatinge as app view engine.
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  const currentDate = date.getDate();

  res.render("list", {
    title: currentDate,
    listItems: items
  });

});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;

  if (req.body.button !== "Work List") {
    items.push(newItem);
    res.redirect("/");
  } else {
    workItems.push(newItem);
    res.redirect("/work");
  }
});

app.get("/work", (req, res) => {
  res.render("list", {
    title: "Work List",
    listItems: workItems
  });
});

app.get("/about", (req, res) => {
  res.render("about", {});
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
