const express = require('express');
var router = express.Router();

let {mongoose} = require("./db/mongoose.js");
let {ToDo} = require("./models/todo.js");

var Client = require('node-rest-client').Client;
var client = new Client();



client.get("http://localhost:3003/rest/catalog",(data) => {
  console.log(data);

});


router.use((req,res,next) => {  //middleware for all routes

   console.log(`Requested ${req.path} at time ${new Date()}`);
   next();

});



router.use("/delete",(req,res,next) => { //middleware at some selective routes

  console.log(`Requested delete ${req.path} at time ${new Date()}`);
  next();

});

router.post("/todos",(req,res) => {

    console.log(req.params.name);
    console.log(req.body);
    let todo = new ToDo({
    Name : req.body.Name,
    Age : req.body.Age
  });

  todo.save().then(() => {
  res.send("saves successfully");

});
});

router.use((req,res,next) => {
  console.log("middle middleware ");
  next();

});

router.post("/todos/:name",(req,res) => {

    console.log(req.params.name);
    console.log(req.body);
    let todo = new ToDo({
    Name : req.body.Name,
    Age : req.body.Age
  });

  todo.save().then(() => {
  res.send("saves successfully");

});

});

router.delete("/delete",(req,res,next) => {


  console.log("deleting");
  ToDo.remove().then((data) => {
  res.send(data);
  next();

  });

});


router.use((req,res,next) => {
  console.log("last middleware ");
  next();

});

router.get("/",(req,res) => {

  res.render("index.html");
});


router.get("/rest/catalog",(req,res) => {
  ToDo.find().then((data) => {
    res.send(data);

  });

  });

router.get("*",(req,res,next) => {

    res.send("Invalid URL");
    next();

  });

router.use((req,res,next) => {
    console.log("Wraping up ");
    next();

  });


module.exports = router;
