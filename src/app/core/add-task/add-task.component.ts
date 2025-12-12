import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() newtaskCreated = new EventEmitter();
  @ViewChild('newTask') newTask!:ElementRef;
  constructor() {}
  ngOnInit() {

  }
  CreateNewTask($taskname:any) {
   // console.log("new task to be created", $taskname);
    this.newtaskCreated.emit($taskname)
  }

}
