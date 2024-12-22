import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-product-alert',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div *ngIf="showNotify">
      <app-button variant="secondary" (onClick)="onNotify()">
        Notify Me
      </app-button>
    </div>
  `
})
export class ProductAlertComponent {
  @Input() product!: Product;

  get showNotify(): boolean {
    return this.product.price > 700;
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
}