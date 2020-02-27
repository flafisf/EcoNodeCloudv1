import { Entity } from './Entity'

class Article extends Entity
{
    constructor()
    {
        super('Article');
    }

    private created_at : Date = new Date();
    private title : string = '';
    private url : string = '';
    private author: string = '';
    private points : string = '';
    private comment_text: string = '';
    private num_comments: number = 0;
    private story_id : number = 0;
    private story_title: string = '';
    private story_url : string = '';
    private parent_id : number = 0;
    private created_at_i : number =0;
    private _tags : Array<string> = new Array(100);
    private objectId:string  = '';
    private highlightId : number = 0; // id de enlace a entidad highlight

    getNameClass() : string {
        return this.name;
    }
}
