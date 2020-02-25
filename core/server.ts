const express = require('express');
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const url_db = 'mongodb://172.17.0.2:27017/notes --username core --pasword .123.456';

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));

