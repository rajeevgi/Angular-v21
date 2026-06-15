import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-pattern',
  standalone: true,
  imports: [],
  templateUrl: './ng-pattern.html',
  styleUrl: './ng-pattern.css',
})
export class NgPattern {
  allowNumberAndDecimal(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'];

    if (allowedKeys.includes(event.key)) {
      return;
    }

    const input = event.target as HTMLInputElement;

    // Allow digits
    if (/^[0-9]$/.test(event.key)) {
      return;
    }

    // Allow one decimal point
    if (event.key === '.' && !input.value.includes('.')) {
      return;
    }

    event.preventDefault();
  }
}
