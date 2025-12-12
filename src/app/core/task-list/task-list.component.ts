import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
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
 @ViewChildren(TaskCardComponent) taskLists!:QueryList<TaskCardComponent>;

  constructor() {}
  ngOnInit() {
    console.log("tasks coming from parent", this.tasks);
  }

  ngAfterViewInit() {
    // console.log("All TaskCard children:", this.taskLists.toArray());
    // this.taskLists.changes.subscribe(cards => {
    //   console.log("Child Card components changed:", cards.length);
    // });
    //   this.highlightAll();
    // this.taskLists.forEach(() => {

    // })
  }

  ngAfterViewChecked() {
    console.log("TaskList component: ngAfterViewChecked -> view checked");
  }

  highlightAll() {
   // this.taskLists.forEach((taskcard) => taskcard.highlight())
  }

  onDelete($event:any) {
    this.deleteRequest.emit($event);
  }
}
