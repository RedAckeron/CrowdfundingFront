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

  user:User={name:'test',role:1};
  
  constructor() { }

  ngOnInit(): void {
    this.menu=[
      {title:"Accueil",url:"/home"},
      {title:"Contributeur",url:"/demo/demo1"},
      {title:"Project Owner",url:"/demo/demo1"}
    ]
  }

}
