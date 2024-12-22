import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="'button ' + variant"
      (click)="onClick.emit()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .button {
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    .primary {
      background-color: #1976d2;
      color: white;
    }
    .secondary {
      background-color: white;
      color: #1976d2;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Output() onClick = new EventEmitter<void>();
}