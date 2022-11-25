import { Step } from "../Step/Step";

export class Project {
    id : number;
    idOwner : number;
    title : string;
    description : string;
    goal : number;
    beginDate : Date;
    endDate : Date;
    isValidate : boolean;
    steps : Step[];
    constructor(
      id : number,
      idOwner : number,
      title : string,
      description : string,
      goal : number,
      beginDate : Date,
      endDate : Date,
      isValidate : boolean,
      steps : Step[]
      ){
        this.id = id;
        this.idOwner = idOwner;
        this.title = title;
        this.description = description;
        this.goal = goal;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.isValidate = isValidate;
        this.steps = steps;
    }
  }
