var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
app.use(cors())
app.use(function (req, res, next) {
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'Origin,X-Requested-With,Content-type,Accept');

    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    console.log("get  ")

    res.send({'status':"hello api"})


});
app.get('/login', function (req, res) {
    console.log("get login  ")

    res.send({"status":"hello login"})


});


app.listen(4500, () => { console.log(`listening ${4500}`) })