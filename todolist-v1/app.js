// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();

  if(currentDay === 6 || currentDay === 0){
    res.send(`Yay its the weekend and app is running on ${port}`);
  }else{
    res.send(__dirname + 'index.html');
  }
});



app.listen(port, () => console.log(`application is running on ${port}`));
