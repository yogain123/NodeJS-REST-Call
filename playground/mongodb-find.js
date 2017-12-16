const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require("mongodb");
 MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) => {
   if(err)
   {
     return console.log("Error Occured Unable to connect to mongo db server");
   }
   console.log("Connected to mongodb Server");

   db.collection("Todos").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
   })

   db.close();
 })
