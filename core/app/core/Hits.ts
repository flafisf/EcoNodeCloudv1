import { Entity } from './Entity'

class Article extends Entity
{
    constructor()
    {
        super('Hits');
    }

    private hits : Partial<Article>;
    private nbHits: number = 0;
    private nbPages: number = 0;
    private hitsPerPage: number = 0;
    private exhaustiveNbHits : boolean = false;
    private query : string = '';
    private params : string = '';
    private processingTimeMS : number = 0;

    getNameClass() : string {
        return this.name;
    }
}