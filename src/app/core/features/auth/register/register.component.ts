import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  FormGroupName,
  FormArrayName,
} from '@angular/forms';
import { AutofocusDirective } from '../../../directives/autofocus.directive';
import { ButtonDisabledIfInvalidDirective } from '../../../directives/button-disabled-if-invalid.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,AutofocusDirective,CommonModule,ButtonDisabledIfInvalidDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  RegForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    // this.RegForm = new FormGroup({
    //   personalInfo: new FormGroup({
    //     fullname: new FormControl('', [Validators.required]),
    //     email: new FormControl('', [Validators.required]),
    //     password: new FormControl('', [Validators.required]),
    //     confirmPassword: new FormControl('', [Validators.required]),
    //   }),
    //   addressInfo: new FormGroup({
    //     city: new FormControl('', [Validators.required]),
    //     state: new FormControl('', [Validators.required]),
    //     country: new FormControl('', [Validators.required]),
    //   }),
    // });

    this.RegForm = this.fb.group({
      personalInfo: this.fb.group({
        fullname: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        phoneNumbers: this.fb.array([this.creatPhoneNumArr()]),
      }),
      // addressInfo: this.fb.group({
      //   city: ['', [Validators.required]],
      //   state: ['', [Validators.required]],
      //   country: ['', [Validators.required]],
      // }),
    });
  }

  creatPhoneNumArr(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required]],
      type: ['mobile'],
    });
  }

  get phoneNumbersF(): FormArray {
    return this.RegForm.get('personalInfo.phoneNumbers') as FormArray;  
  }

  addPhone() {
    this.phoneNumbersF.push(this.creatPhoneNumArr());
  }
  removePhone(index: number) {
    this.phoneNumbersF.removeAt(index);
  }

  onSubmmit() {
    if (this.RegForm.valid) {
      this.RegForm.controls['fullname'].value;
    }
  }
}
