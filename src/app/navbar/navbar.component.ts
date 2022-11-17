import { NgIf } from '@angular/common';
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
      {title:"Accueil",MinRole:0,url:"",isVisible:true},
      
      {title : "Contributor",MinRole:1, url : "/User", children : [
        { title : "Add Project",MinRole: 1 , url : "/AddProject"},
        { title : "My Contribution",MinRole: 1 , url : "/exercice/exo1"},
        { title : "Show all project",MinRole: 1 , url : "/exercice/exo2"}
      ], isVisible : false},
      
      {title : "Project Owner",MinRole:2, url : "/exercice", children : [
        { title : "My Project",MinRole:2, url : "/exercice/exo1"},
        { title : "Edit Project",MinRole:2, url : "/exercice/exo2"}
      ], isVisible : false},
      
      {title : "Administrateur",MinRole:3, url : "/Admin", children : [
        { title : "Edit User",MinRole:3, url : "/AdminEditUser"},
        { title : "Edit Project",MinRole:3, url : "/AdminEditProject"}
      ], isVisible : false}
    ]
  }
  
  toggleMenu(index : number){
    
    let currentState = this.menu[index].isVisible;
    this.menu.forEach(link => link.isVisible = false);
    this.menu[index].isVisible = !currentState;
  }
}
