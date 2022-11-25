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

  user:User=new User(0,'Rumata76','ndihopaul@hotmail.com','1234',new Date,2);

  constructor() { }

  ngOnInit(): void {
    this.menu=[
      {title:"Accueil",MinRole:0,url:"", children : [
        { title : "Show Projects",MinRole:1, url : "/ShowProjects"},
      ], isVisible:true},

      {title : "Mon Profil",MinRole:1, url : "/user/userconnected", children : [
        { title : "My Contribution",MinRole: 1 , url : ""},
        { title : "Add Project",MinRole:1, url : "/AddProject"},
        { title : "My Projects",MinRole:1, url : "/ShowUserProjects"},
      ], isVisible : true},

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
