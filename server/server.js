const express = require('express');
const bodyParser = require('body-parser');
let {mongoose} = require("./db/mongoose.js");
let {ToDo} = require("./models/todo.js");

var Client = require('node-rest-client').Client;
var client = new Client();

var app = express();

app.use(express.static('views'));
app.use(bodyParser.json());

console.log(`Project Dir ${__filename}`);
console.log(`Project Dir ${__dirname}`);


client.get("http://localhost:3003/rest/catalog",(data) => {
  console.log(data);

});

app.use((req,res,next) => {  //middleware for all routes

   console.log(`Requested ${req.path} at time ${new Date()}`);
   next();

});

app.use("/delete",(req,res,next) => { //middleware at some selective routes

  console.log(`Requested delete ${req.path} at time ${new Date()}`);
  next();

});

app.post("/todos",(req,res) => {

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

app.use((req,res,next) => {
  console.log("middle middleware ");
  next();

});

app.post("/todos/:name",(req,res) => {

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

app.delete("/delete",(req,res,next) => {


  console.log("deleting");
  ToDo.remove().then((data) => {
    res.send(data);


  });
  next();

});


app.use((req,res,next) => {
  console.log("last middleware ");
  next();

});

app.get("/",(req,res) => {

  res.render("index.html");
});


app.get("/rest/catalog",(req,res) => {
  ToDo.find().then((data) => {
    res.send(data);

  });

  });

app.get("*",(req,res,next) => {

    res.send("Invalid URL");
    next();

  });

app.use((req,res,next) => {
    console.log("wrapping up ");

  });

app.listen(3003);
