const mongoose = require('mongoose');

let ToDo = mongoose.model("hello-world",{
  Name : {type : String, required : true, minlength : 1, trim:true},
  Age : {type : Number, default : 0}
});

module.exports = {
  ToDo
};
