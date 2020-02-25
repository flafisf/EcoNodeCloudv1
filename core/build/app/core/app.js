"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function (req, res) {
    res.send(req.body);
});
app.listen(3000, function () {
    console.log('We are live on port 3000!');
});
