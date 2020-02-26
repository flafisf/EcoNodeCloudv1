import { Document, Model, model, Types, Schema, Query } from "mongoose"
import { IEntity } from './IEntity'

export class FactoryDB implements IEntity
{
   
	protected dbConnection : string = '';
  protected dbName: string = '';
  
  protected mong : Document.connection = null;

  constructor(dbConnection : string, dbName: string)
  {
    this.dbConnection = dbConnection;
    this.dbName = dbName;
  }

  connect() : any
  {
    mong.connect(this.dbConnection + this.dbName, {useNewUrlParser:true});
  
	  return mong.connection;
  }
       
  create(o : any) { 
       
  }
}

