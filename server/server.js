const express = require('express');
var app = express();
const bodyParser = require('body-parser');

var routing = require("./routing");


app.use(express.static('views'));
app.use(bodyParser.json());


console.log(`Project Dir ${__filename}`);
console.log(`Project Dir ${__dirname}`);


app.use('/', routing);

app.listen(3003);
