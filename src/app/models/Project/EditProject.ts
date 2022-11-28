import { Step } from "../Step/Step";

export class EditProject {
  id : number;
  title : string;
  description : string;
  goal : number;
  steps : Step[];
  constructor(
    id : number,
    title : string,
    description : string,
    goal : number,
    steps : Step[]
    ){
      this.id = id;
      this.title = title;
      this.description = description;
      this.goal = goal;
      this.steps=steps
  }
}
