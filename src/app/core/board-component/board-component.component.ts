import { Component } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-board-component',
  standalone: true,
  imports: [AddTaskComponent,CommonModule, TaskListComponent],
  templateUrl: './board-component.component.html',
  styleUrl: './board-component.component.css'
})
export class BoardComponentComponent {
  constructor() {

  }

  ngOnInit() {
  
  }

  ngAfterViewInit() {
    console.log("TaskList: ngAfterViewInit -> child components loaded");
    console.log("TaskCard count:", this.taskList.length);
  }

  ngAfterViewChecked() {
    console.log("TaskList: ngAfterViewChecked -> view checked");
  }



  taskList: any[] = [
    'Sample Task 1',
    'Sample Task 2'
  ];

  getNewTask($event:any) {
    this.taskList.push($event);
  }

  deleteTask($event:any) {
    this.taskList = this.taskList.filter(task => task !== $event)
  }
}
