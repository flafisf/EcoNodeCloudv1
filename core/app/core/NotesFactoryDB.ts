import mong = require('mongoose');

class NotesFactoryDB {
   
	dbConnection : string;
	//err: boolean;
  constructor(dbConnection : string)
  {
	  this.dbConnection = dbConnection;
  }
 
  connect(dbName : string) : any
  {
		mong.connect(this.dbConnection + dbName, {useNewUrlParser:true});
		return mong.connection;
  }
       
  create(o : any) { 
       
  }
}

