export class User {
  Id : number;
  NickName : string;
  Email : string;
  Password : string;
  Birthdate : Date;
  IdRole : number;

  constructor(Id : number, NickName : string, Email : string, Password : string, Birthdate : Date, IdRole : number){
      this.Id = Id;
      this.NickName = NickName;
      this.Email = Email;
      this.Password = Password;
      this.Birthdate = Birthdate;
      this.IdRole = IdRole;
  }

SetRole(IdRole:number){
    if(IdRole==0)this.IdRole=0;
    if(IdRole==1)this.IdRole=1;
    if(IdRole==2)this.IdRole=2;
    if(IdRole==3)this.IdRole=3;
    }
}
