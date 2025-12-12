import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChild(AddTaskComponent) addTaskCompoentent!: AddTaskComponent;
  @ViewChildren(TaskListComponent) taksLists!:QueryList<TaskListComponent>;
  constructor() {}

  ngOnInit() {
  
  }

  ngAfterViewInit() {
    // using @ViewChild to access child component properties
    const input = (this.addTaskCompoentent as any).newTask;
    if (input) input.nativeElement.focus();

    // Using @ViewChildren to access multiple child components
    this.taksLists.forEach((taskList) => {
      taskList.highlightAll();
    })
  }

  ngAfterViewChecked() {
  //  console.log("Board Component: ngAfterViewChecked -> view checked");
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

  onDelete() {
  console.log('Delete key pressed!');
  this.taskList = this.taskList.pop();
  // Perform deletion logic here
}
}
