import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <h2 class="product-name">{{ product.name }}</h2>
      <p *ngIf="product.description" class="description">Description: {{ product.description }}</p>
      <button class="share-button" (click)="onShare()">Share</button>
      <button 
        *ngIf="product.price > 700" 
        class="notify-button" 
        (click)="onNotify()">
        Notify Me
      </button>
    </div>
  `,
  styles: [`
    .product-card {
      padding: 16px;
    }
    .product-name {
      color: #1976d2;
      font-size: 16px;
      margin: 0 0 8px 0;
    }
    .description {
      color: #666;
      margin: 8px 0;
    }
    .share-button, .notify-button {
      background-color: #1976d2;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 8px;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private notificationService: NotificationService) {}

  onShare(): void {
    this.notificationService.notifyShared();
  }

  onNotify(): void {
    this.notificationService.notifyOnSale();
  }
}