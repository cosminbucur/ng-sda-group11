import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Language } from 'src/app/shared/models/language.model';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  public registrationForm: FormGroup;

  public languages: Language[] = [
    { value: 'ro', viewValue: 'Romanian' },
    { value: 'en', viewValue: 'English' },
    { value: 'ge', viewValue: 'German' }
  ];

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        language: new FormControl('')
      }
    );
  }

  public onSubmit(): void {
    console.log('submit');
  }

  public onCancel(): void {
    console.log('cancel');
  }

}
