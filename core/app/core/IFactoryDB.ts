export interface IFactory
{
    readonly dbName : string;
    readonly dbConnection: string;
    readonly dbPort : number;

    create(o:any) : boolean;
    read() : boolean;
    update(o:any) : boolean;
    delete(o:any) : boolean;

}