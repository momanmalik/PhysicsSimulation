const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const app = express();
// const stroage = require(__dirname + "/public/js/storage.js")

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/index.html")
})


app.post("/", function(req,res){
  const settings = {
    num: Number(req.body.numberOfBalls),
    acceleration: Number(req.body.acceleration),
    velocity: Number(req.body.velocity),
    friction: Number(req.body.friction)
  }

  res.render("playground",{settings: settings})

})

app.post("/default", function(req,res){
  const defaultSettings = {
    num: 50,
    velocity: 2,
    acceleration: 1,
    friction: 0.9
  }
  res.render("playground",{settings: defaultSettings})

})

app.post("/refresh", function(req,res){
  console.log(req.body)
  res.redirect(307, "/");
})

app.post("/playground", function(req,res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000,function(req,res){
  console.log("server up on port 3000")
})
