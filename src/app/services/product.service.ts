import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [
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
}