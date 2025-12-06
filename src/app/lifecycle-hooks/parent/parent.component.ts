import { Component, SimpleChange } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMessage = "I wish you have a beautifull day today and always";
  showChild = true;
  childData:any;
  projectedMessage = "Initial projected text";


  
    constructor() {
      console.log("Parent: Constructor");
    }

    dataFromChild(value:Event) {
     this.childData = value;
    }
    
  
    // ngOnChanges(changes: SimpleChange) {
    //   console.log("Parent: ngOnChanges", changes);
    // }
  
    // ngOnInit() {
    //   console.log("Parent: ngOnInit");
    // }
  
    // ngDoCheck() {
    //   console.log("Parent: ngDoCheck");
    // }
  
    // ngAfterContentInit() {
    //   console.log("Parent: ngAfterContentInit");
    // }
  
    // ngAfterContentChecked() {
    //   console.log("Parent: ngAfterContentChecked");
    // }
  
    // ngAfterViewInit() {
    //   console.log("Parent: ngAfterViewInit");
    // }
  
    // ngAfterViewChecked() {
    //   console.log("Parent: ngAfterViewChecked");
    // }
  
    // ngOnDestroy() {
    //   console.log("Parent: ngOnDestroy");
    // }

  toggleChild() {
    console.log(this.showChild);
    this.showChild = !this.showChild;
  }

  changeProjected() {
    this.projectedMessage = "Updated projected text " + Math.random();
  }

}
