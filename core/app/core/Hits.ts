import { Entity } from './Entity'

class Article extends Entity
{
    constructor()
    {
        super('Hits');
    }

    private hits : Partial<Article>;
    private nbHits: number;
    private nbPages: number;
    private hitsPerPage: number;
    private exhaustiveNbHits : boolean;
    private query : string;
    private params : string;
    private processingTimeMS : number;

    getNameClass() : string {
        return this.name;
    }
}