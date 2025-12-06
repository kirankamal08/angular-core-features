import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbackForm!: FormGroup;
  feedbackFormData: any = null;
  @Input() messageToChild!:string;
  @Output() messageFromChild = new EventEmitter();

  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      empcode:['',[Validators.required]],
      skills: this.fb.array([this.createSkillsArr()])
    })
    this.dataEmit();
  }

  createSkillsArr(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required]
    })
  } 

  get employeeSkillArr() : FormArray {
    return this.feedbackForm.get('skills') as FormArray;
  }

  removeSkill(index:number) {
    this.employeeSkillArr.removeAt(index);
  }

  addSkills() {
    this.employeeSkillArr.push(this.createSkillsArr());
  }

  onSubmit() {
    if(this.feedbackForm.valid) {
      this.feedbackFormData = this.feedbackForm.value;
      console.log("form value", this.feedbackFormData);
    } else {
      console.log("form is not valid");
    }
  }
  dataEmit() {
    this.messageFromChild.emit({info:'success', data:'Data from child component to parent component'});
  }
}
