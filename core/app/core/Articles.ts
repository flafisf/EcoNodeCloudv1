import { Entity } from './Entity'

class Article extends Entity
{
    constructor()
    {
        super('Article');

        this.title = '';
    }

    private title : string

    getNameClass() : string {
        return this.name;
    }
}