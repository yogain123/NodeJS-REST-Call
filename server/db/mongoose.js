const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp").then(() => {
  console.log("CONNECTION SUCCESS");

},(error) => {
  console.log("ERROR "+error);
});
