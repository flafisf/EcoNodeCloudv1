import { Entity } from './Entity'

class Highlight extends Entity
{
    constructor()
    {
        super('Highlight');
    }

    private highlightId: number = 0;



    getNameClass() : string {
        return this.name;
    }
}