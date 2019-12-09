import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from '../../../shared/models/signup.model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  model: Signup = new Signup();

  @ViewChild('#f', {static: false}) form: any;

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {
    window.alert('form submitted');
  }
}
