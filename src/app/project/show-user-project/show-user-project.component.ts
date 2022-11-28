import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project/Project';
import { Token } from 'src/app/models/User/Token';
import { ProjectService } from 'src/app/services/project.service';
import { TokenDecodeService } from 'src/app/services/token-decode.service';

@Component({
  selector: 'app-show-user-project',
  templateUrl: './show-user-project.component.html',
  styleUrls: ['./show-user-project.component.scss']
})
export class ShowUserProjectComponent implements OnInit {

  projects : Project[] = []

  token : Token = new Token(localStorage.getItem("token")!)
  decodeToken : string = this._tokenDecode.decode(this.token)!

  constructor(private _projectService : ProjectService, private _tokenDecode : TokenDecodeService) { }

  ngOnInit(): void {
    console.log(this.decodeToken)
    console.log(JSON.parse(JSON.stringify(this.decodeToken)))

    this._projectService.getUserProject(this.decodeToken).subscribe({
      next : (res) => {
        this.projects = res
      }
    })
  }

}

