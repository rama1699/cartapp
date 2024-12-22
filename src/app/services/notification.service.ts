import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifyOnSale(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  notifyShared(): void {
    window.alert('The product has been shared');
  }
}