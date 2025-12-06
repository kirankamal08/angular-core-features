import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl,Form, FormBuilder, Validators,FormArray} from '@angular/forms';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';  
import { ReversePipe } from './core/pipes/reverse.pipe';
import { HighlightDirective } from './core/directives/highlight.directive';
import { of,map,mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,ReversePipe,HighlightDirective,RouterLink,RouterLinkActive,FeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-core-features';
  form!:FormGroup;
  myName:string = "Kiran kamal";
  fruits = ['Apple', 'Banana', 'Mango'];
  parentData : string = "Data from App Component to Feedback Component"
  constructor(private fb:FormBuilder,private http:HttpClient) {
  }

  ngOnInit() {
    this.testRxjs();
    this.getChildData();
  }


  update() {
    this.myName = 'Typescript';  // Pipe re-runs
    if(!this.fruits.includes('Avacado')) {
      //this.fruits = [...this.fruits,'Avacado'];
      this.fruits.push('KIIIII');
    }
  }

  stop(event: Event) { console.log("KIRAN KAMAL"); }


  testRxjs() {
    console.log("nzbfnsfbnsdfbsndbfdsn");
    const urlObservable = of(
      "https://api.github.com/users/kirankamal08",
      "https://api.github.com/users/kirankamal08/repos",
      "https://api.github.com/repos/kirankamal08/Theory-Content/commits"
    );
   // const fileObservable = urlObservable.pipe(map((url:any) => this.http.get(url)));
    const fileObservable = urlObservable.pipe(
      mergeMap((url) => this.http.get(url))
    );
    fileObservable.subscribe({
        next: (data) => {
          console.log('Received file data:', data);
        },
        error: (err) => {
          console.error('Something went wrong:', err);
        },
        complete: () => {
          console.log('All files fetched!');
      }
    });
//     const obs$ = of(1, 2, 3);
// obs$.subscribe(value => console.log(value));
  }
  getChildData(event?:any) {
    console.log(event);
  }
  
}
