import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  http = inject(HttpClient);
  notificationCounter$ = new BehaviorSubject<number>(5);
  valueRSubject$ = new ReplaySubject<number>(1);
  hasFetched = false;

  
getNotification() {
  return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
}
setNotificationCount(value:number) {
  this.notificationCounter$.next(this.notificationCounter$.value + value)
}

// Replay Subject Example
getProductsData() {
  if (this.hasFetched) {
    return this.valueRSubject$.asObservable();
  }
     this.http.get('https://fakestoreapi.com/products').subscribe(
      (res:any) => {
        this.valueRSubject$.next(res);
        this.hasFetched = true;
      }
    )
  return this.valueRSubject$.asObservable();
}

}
