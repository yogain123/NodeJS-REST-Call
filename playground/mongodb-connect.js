const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Error Occured Unable to connect to mongo db server");
  }
  console.log("Connected to mongodb Server");

  var myobj = {
    name: "Company Inc",
    address: "Highway 90"
  };
  let myobjusers = {
    "name": "yogendra",
    "age": 2334
  };

  db.collection("Todos").insertOne(myobj, (err, res) => {

    if (err) {
      return console.log("error occured while inserting");
    }

    console.log(JSON.stringify(res.ops, undefined, 3));

  })


  db.collection("Users").insertOne(myobjusers, (err, res) => {

    if (err) {
      return console.log("error occured while inserting");
    }

    console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 3));

  })

  db.close();
})
