import { FactoryDB } from "FactoryDB";
import { IEntity } from "IEntity";

export class Entity extends IEntity
{
    private mongo : FactoryDB.GetInstance;

    constructor(dbConnection: string)
    {
        super();
    }
}