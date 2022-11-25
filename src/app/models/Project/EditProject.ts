export class EditProject {
  title : string;
  description : string;
  goal : number;
  constructor(
    title : string,
    description : string,
    goal : number,
    ){
      this.title = title;
      this.description = description;
      this.goal = goal;
  }
}
