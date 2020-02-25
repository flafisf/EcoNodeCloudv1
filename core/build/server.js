"use strict";
var express = require('express');
var mongo = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var url_db = 'mongodb://172.17.0.2:27017/notes --username core --pasword .123.456';
var app = express();
var port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
