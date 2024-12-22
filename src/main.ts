import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TopBarComponent } from './app/components/top-bar/top-bar.component';
import { ProductListComponent } from './app/components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopBarComponent, ProductListComponent],
  template: `
    <div class="app-container">
      <app-top-bar></app-top-bar>
      <app-product-list></app-product-list>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
  `]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);