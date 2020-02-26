import { Document, Model, model, Types, Schema, Query } from "mongoose"

class NotesFactoryDB {
   
	dbConnection : string;
	dbName: string;

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

