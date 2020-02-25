import express = require("express");
import bodyParser = require('body-parser');

const app: express.Application = express();

app.use(bodyParser.urlencoded({extended:true}));

app.post('/', function(req, res) {
	res.send(req.body);
});

app.listen(3000, function() {
     console.log('We are live on port 3000!');
});
