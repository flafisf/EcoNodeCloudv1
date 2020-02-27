
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
       
  create(o: object | null): boolean
  { 
       return true;
  }

  read() : boolean
  {
    return true;
  }

  update(o: object | null) : boolean
  {
      return true;
  }

  delete(o: object | null) : boolean
  {
    return true;
  }

  commit() 
  {
        // realizar commit
  }

  rollBack()
  {
    // vuelta atrás
  }



}

