export class User{
    id : number;
    email : string;
    roles:JSON;
    password:string;
    constructor(id=0,email='',roles=JSON,password=''){
        this.id=id;
        this.email=email;
        this.roles=roles;
        this.password=password;
        
    }
    
}
