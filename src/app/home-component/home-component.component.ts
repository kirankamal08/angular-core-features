import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NotificationServiceService } from '../core/services/notification-service.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLinkActive],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  httpNotification = inject(NotificationServiceService)
  ngOnInit() {
    this.httpNotification.getProductsData().subscribe(products => {
      console.log("Products data in home component", products);
    })
  }

}
