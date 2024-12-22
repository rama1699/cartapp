import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="product-list">
      <h2>Products</h2>
      <app-product-card
        *ngFor="let product of products"
        [product]="product"
      ></app-product-card>
    </div>
  `,
  styles: [`
    .product-list {
      padding: 16px;
    }
    h2 {
      margin-bottom: 16px;
    }
  `]
})
export class ProductListComponent {
  products: Product[] = [
    {
      name: 'Phone XL',
      description: 'A large phone with one of the best screens',
      price: 799
    },
    {
      name: 'Phone Mini',
      description: 'A great phone with one of the best cameras',
      price: 699
    },
    {
      name: 'Phone Standard',
      price: 299
    }
  ];
}