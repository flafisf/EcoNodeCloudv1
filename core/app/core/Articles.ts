import { Entity } from './Entity'

class Article extends Entity
{
    constructor()
    {
        super('Article');
    }

    private created_at : Date;
    private title : string = '';
    private url : string = '';
    private author: string;
    private points : string;
    private comment_text: string;
    private num_comments: number;
    private story_id : number;
    private story_title: string;
    private story_url : string;
    private parent_id : number;
    private created_at_i : number;
    private _tags : Array<string>;
    private objectId:string;
    private highlightId : number; // id de enlace a entidad highlight




    

    getNameClass() : string {
        return this.name;
    }
}
