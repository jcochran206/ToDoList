// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);


//   switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

  res.render("list", {kindOfDay : day, newListItems: items});
});

app.post("/", function(req, res){
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(port, () => console.log(`application is running on ${port}`));
