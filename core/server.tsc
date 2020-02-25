const express = require('express');
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const url_db = 'mongodb://172.17.0.2:27017/notes --username core --pasword .123.456';

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));

mongo.connect(url_db, 
              { useNewUrlParser:true,
		useUnifiedTopology:true
              },
	      (err, client) => {
	         if(err) 
	           return console.log(err)

	        const dbs = client.db('notes');

		const collection = dbs.collection('notes');

	         require('./app/routes')(app, collection);

                 app.listen(port, () => { console.log('We are live on ' + port); });
	      
	      });
