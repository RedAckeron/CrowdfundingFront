export class NewProject {
  idOwner : number;
  title : string;
  description : string;
  goal : number;
  beginDate : Date;
  endDate : Date;
  isValidate : boolean;
  constructor(
    idOwner : number,
    title : string,
    description : string,
    goal : number,
    beginDate : Date,
    endDate : Date,
    isValidate : boolean,
    ){
      this.idOwner = idOwner;
      this.title = title;
      this.description = description;
      this.goal = goal;
      this.beginDate = beginDate;
      this.endDate = endDate;
      this.isValidate = isValidate;
  }
}
