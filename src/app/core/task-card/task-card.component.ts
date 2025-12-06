import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() task:any;
  @Output() delete = new EventEmitter<number>();

  previousTaskValue: any;
  constructor() {
    console.log("TaskCard component constructor called")
  }
  ngOnInit() {
    console.log("this is an each taks", this.task)
  }
  ngOnChanges(changes:SimpleChange) {
    console.log("ngOnChanges calles", changes)
  }

  ngDoCheck() {
    if (this.previousTaskValue !== this.task) {
      console.log("Task value changed from", this.previousTaskValue, "to", this.task);
    }
    this.previousTaskValue = this.task;
  }

  ngOnDestroy() {
    console.log("TaskCard component is being destroyed for task:", this.task);
  }
}
