export class User{
    public name : string;
    public role : number;//1:contributeur 2:Owner 3: Admin
    
constructor(name:string,role:number)
    {
    this.name=name;
    this.role=role;
    }

SetRole(IdRole:number){
    if(IdRole==1)this.role=1;
    if(IdRole==2)this.role=2;
    if(IdRole==3)this.role=3;
    }
}