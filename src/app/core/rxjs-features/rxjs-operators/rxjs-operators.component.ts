import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, catchError, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, fromEvent, mergeMap, of, Subject, switchMap, throwError } from 'rxjs';
import { not } from 'rxjs/internal/util/not';
import { NotificationServiceService } from '../../services/notification-service.service';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent {
  // Injecting services
  http = inject(HttpClient);
  httpNotification = inject(NotificationServiceService);


  searchControl = new FormControl('');
  @ViewChild('btn') btn!:ElementRef<HTMLButtonElement>;
  id$ = of(1,5,8,10,12);
  idMerge$ = of(1,2,3);
 // constructor(private http:HttpClient) {}

  ngOnInit() {
   // Use of switchMap() Operator
    this.searchControl.valueChanges.pipe(
      debounceTime(700),
      filter((searchTerm): searchTerm is string => searchTerm !== null),
      distinctUntilChanged(),
      switchMap(searchTerm => {
      return this.fetchResults(searchTerm).pipe
      (
        catchError(err => {
          console.error('Error for ID:', err);
          return throwError(() => new Error('The API request has some problem'));
        })
      );
      })
      ).subscribe(result => {console.log('search result', result);});

      // mergeMap Exmaple
      this.id$.pipe(
        mergeMap(id => this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`).pipe(delay(2000)))
      ).subscribe(result => {
        console.log("mergeMap result", result);
      })

      // concatMap Example
      this.idMerge$.pipe(
        concatMap(id => this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).pipe(delay(id * 2000)))
      ).subscribe(result => console.log("concatMap result", result))
      this.fetchNotification();
      this.httpNotification.setNotificationCount(2);
      console.log("Notification count set to 2");
      this.httpNotification.notificationCounter$.subscribe(count => console.log("Notification count value in rxjs component",count));
      
      // Fetching Replay Subject Data
      this.httpNotification.getProductsData().subscribe(products => {
        console.log("Products data from Replay Subject", products);
      })
    } 


  // Use of exhaustMap() Operator
  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      exhaustMap(() => {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(delay(1000))
      })
    ).subscribe(result => {
      console.log('bored api result', result);
    })
  }

  fetchResults(value:string) {
   const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${value}`;
    return this.http.get(apiUrl);
  }
  
  searchKeyPressed($event: any) {
    console.log('searchKeyPressed', $event.target.value);
  }

  testBtnClicked() {

  }
  
  fetchNotification() {
    this.httpNotification.getNotification().subscribe((res:any) => {
      console.log("notification result", res);
  });
}
}
