/// <reference path="IEntity.ts" />

export class Entity implements IEntity
{
    name : string;
   
    constructor(name:string)
    {
        this.name = name;
    }
}