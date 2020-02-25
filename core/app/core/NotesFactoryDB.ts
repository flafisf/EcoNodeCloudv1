import mongo = require('mongodb');

class NotesFactoryDB {
   
	dbConnection : string;
	mongo : mongodb.MongoClient = null;
        err: boolean;
  constructor(dbConnection : string)
  {
	this.dbConnection = dbConnection;
  }
 
  connect(dbName : string) : boolean
  {
  }
  create(o : any) { 
       
  }
}

