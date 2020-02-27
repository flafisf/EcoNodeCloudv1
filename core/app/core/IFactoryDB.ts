export interface IFactoryDB
{
    readonly dbName : string;
    readonly dbConnection: string;
    readonly dbPort : number;

    create(o:object | null) : boolean;
    read() : boolean;
    update(o:object | null) : boolean;
    delete(o:object | null) : boolean;
    commit() : void;
    rollBack() : void;
}