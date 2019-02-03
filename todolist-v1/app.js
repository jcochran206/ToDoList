// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.get("/", function(req, res){

  var today = new Date();

  if(today.getDay() === 6 || today.getDay() === 0){
    res.send("Yay its the weekend");
  }else{
    res.send(`not the weekend ${port}`);
  }
});



app.listen(port, () => console.log(`application is running on ${port}`));
