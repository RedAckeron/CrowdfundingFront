import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.scss']
})
export class AddStepComponent implements OnInit {
registerForm : FormGroup;
  constructor(private _builder : FormBuilder) {     
    this.registerForm = this._builder.group({});
    }

  ngOnInit(): void {
  }

}
