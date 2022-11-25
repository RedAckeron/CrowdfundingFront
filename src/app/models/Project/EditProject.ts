export class EditProject {
  id : number;
  title : string;
  description : string;
  goal : number;
  constructor(
    id : number,
    title : string,
    description : string,
    goal : number,
    ){
      this.id = id;
      this.title = title;
      this.description = description;
      this.goal = goal;
  }
}
