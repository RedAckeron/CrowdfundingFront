import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu:Link[]=[];

  user:User=new User('Bob',0);
  
  constructor() { }

  ngOnInit(): void {
    this.menu=[
      {title:"Accueil",url:"/home",isVisible:true},
      {title:"Visiteur",url:"/demo/demo1",isVisible:true},
      {title:"Contributeur",url:"/demo/demo1",isVisible:true},
      {title:"Project Owner",url:"/demo/demo1",isVisible:true},
      {title : "Administrateur", url : "/exercice", children : [
        { title : "Edit User", url : "/exercice/exo1"},
        { title : "Edit Project", url : "/exercice/exo2"}
      ], isVisible : false}
    
    ]
  }
  
  toggleMenu(index : number){
    
    let currentState = this.menu[index].isVisible;
    this.menu.forEach(link => link.isVisible = false);
    this.menu[index].isVisible = !currentState;
  }
}
