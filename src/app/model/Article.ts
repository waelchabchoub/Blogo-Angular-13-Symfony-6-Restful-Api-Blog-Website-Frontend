import { User } from "./User";

export class Article{
    id : number;
    author:User;
    name : string;
    content:string;
    constructor(id=0,author=new User,name='',content=''){
        this.id=id;
        this.author=author;
        this.name=name;
        this.content=content;
    }

}
