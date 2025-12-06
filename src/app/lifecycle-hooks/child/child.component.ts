import { AfterContentChecked, AfterContentInit, AfterViewChecked, 
  AfterViewInit, Component, ContentChild, contentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, 
  ViewChild} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
    
  @Input() message: string = "";
  @Output() sendDataToParent = new EventEmitter();
  @ContentChild('projectedContent') projected! : ElementRef
  @ViewChild('viewElement') viewEl!: ElementRef;
  counter = 0;

  constructor() {
    console.log("Child: Constructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("Child: ngOnChanges", changes['message'].currentValue);
    console.log("Child: ngOnChanges", changes);
  }

  ngOnInit() {
    console.log("Child: ngOnInit");
  }

  ngDoCheck() {
    console.log("Child: ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("Child: ngAfterContentInit");
    console.log('Projected content:', this.projected?.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("Child: ngAfterContentChecked");
        console.log('Projected content checked:', this.projected?.nativeElement.textContent);

  }

  ngAfterViewInit() {
    console.log("Child: ngAfterViewInit");
    console.log('View Element:', this.viewEl.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("Child: ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("Child: ngOnDestroy");
  }
  sendToParent() {
    this.counter++;
    this.sendDataToParent.emit(`Child clicked ${this.counter} times`);
  }
}
