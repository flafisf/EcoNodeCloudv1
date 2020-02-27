import { Entity } from './Entity'

class Highlight extends Entity
{
    constructor()
    {
        super('Highlight');
    }

    private highlightId: number;
    

    getNameClass() : string {
        return this.name;
    }
}