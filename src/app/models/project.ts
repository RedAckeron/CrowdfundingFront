
export class Project {
  id : number;
  idOwner : number;
  title : string;
  description : string;
  goal : number;
  beginDate : Date;
  endDate : Date;
  isValidate : boolean;

  constructor(
    id : number,
    idOwner : number,
    title : string,
    description : string,
    goal : number,
    beginDate : Date,
    endDate : Date,
    isValidate : boolean,
    ){
      this.id = id
      this.idOwner = idOwner;
      this.title = title;
      this.description = description;
      this.goal = goal;
      this.beginDate = beginDate;
      this.endDate = endDate;
      this.isValidate = isValidate;
  }
}
