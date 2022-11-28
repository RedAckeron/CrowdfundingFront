export class Step {
  id : number;
  idProject : number;
  amount : number;
  reward : string;

  constructor(
    id : number,
    idProject : number,
    amount : number,
    reward : string
    ){
      this.id = id
      this.idProject = idProject
      this.amount = amount
      this.reward = reward
  }
}
