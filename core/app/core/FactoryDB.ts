
import { Document, Model, model, Types, Schema, Query } from "mongoose"
import { IFactoryDB } from "./IFactoryDB";

export class FactoryDB implements IFactoryDB
{
   
	dbConnection : string = '';
  dbName: string = '';
  dbPort: number = 27017;
   
  constructor(dbConnection : string, dbName: string)
  {
    this.dbConnection = dbConnection;
    this.dbName = dbName;
  }

  connect() : boolean
  {
    //mong.connect(this.dbConnection + this.dbName, {useNewUrlParser:true});
  
	  return false; // mong.connection;
  }
       
  create(o : any) : boolean 
  { 
       return true;
  }

  read() : boolean
  {
    return true;
  }

  update(o:any)
  {
      return true;
  }

  delete(o:any)
  {
    return true;
  }




}

