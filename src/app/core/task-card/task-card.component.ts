import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() task:any;
  @Output() delete = new EventEmitter<number>();
  isHighlighted:boolean = false;

  previousTaskValue: any;
  constructor() {
   // console.log("TaskCard component constructor called")
  }
  ngOnInit() {
   // console.log("TaskCard component, this is an each taks", this.task)
  }
  ngOnChanges(changes:SimpleChange) {
   // console.log("TaskCard component, ngOnChanges calls", changes)
  }

  ngDoCheck() {
    if (this.previousTaskValue !== this.task) {
     // console.log("TaskCard component, Task value changed from", this.previousTaskValue, "to", this.task);
    }
    this.previousTaskValue = this.task;
  }

  highlight() {
    // setTimeout(() => {
    //  this.isHighlighted = true;
  //  }, 5000);
}


  ngOnDestroy() {
   // console.log("TaskCard component is being destroyed for task:", this.task);
  }
}
