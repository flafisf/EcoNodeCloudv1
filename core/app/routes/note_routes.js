module.exports = function(app, db)
{ 
	app.post('/notes', (req, res) => 
	{
		// creando una nota aqui
		// creating a note here.
		console.log(req.body);

		db.collection.inserOne(req);

		res.send('Hello\n');
	});
};
