import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="top-bar">
      <h1>My Store</h1>
      <app-button variant="secondary">🛒 Checkout</app-button>
    </div>
  `,
  styles: [`
    .top-bar {
      background-color: #1976d2;
      color: white;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
      font-size: 1.5em;
    }
  `]
})
export class TopBarComponent {}