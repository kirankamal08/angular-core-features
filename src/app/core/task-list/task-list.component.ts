import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCardComponent,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: any; 
  @Output() deleteRequest = new EventEmitter();
  constructor() {}
  ngOnInit() {
    console.log("tasks coming from parent", this.tasks);
  }

  onDelete($event:any) {
    this.deleteRequest.emit($event);
  }
}
