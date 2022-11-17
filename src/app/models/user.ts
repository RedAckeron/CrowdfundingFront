export class User{
    public name : string;
    public role : number;//1:contributeur 2:Owner 3: Admin
    constructor(name:string,role:number)
    {
    this.name=name;
    this.role=role;
    }
}