import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl,Form, FormBuilder, Validators,FormArray} from '@angular/forms';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';  
import { ReversePipe } from './core/pipes/reverse.pipe';
import { HighlightDirective } from './core/directives/highlight.directive';
import { of,map,mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotificationServiceService } from './core/services/notification-service.service';
import { HeaderComponentComponent } from './core/layout/header-component/header-component.component';
import { FooterComponentComponent } from './core/layout/footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,ReversePipe,HighlightDirective,RouterLink,RouterLinkActive,FeedbackComponent,HeaderComponentComponent,FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-core-features';
  form!:FormGroup;
  myName:string = "Kiran kamal";
  fruits = ['Apple', 'Banana', 'Mango'];
  parentData : string = "Data from App Component to Feedback Component"
  httpNotification = inject(NotificationServiceService)
  constructor(private fb:FormBuilder,private http:HttpClient) {}

  ngOnInit() {
    this.testRxjs();
    this.getChildData();
    this.httpNotification.notificationCounter$.subscribe(count => console.log("Notification count value in app component",count));
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
  }
  getChildData(event?:any) {
    console.log(event);
  }
  
}
