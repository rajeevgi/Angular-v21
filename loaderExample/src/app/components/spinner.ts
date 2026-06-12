// looder.ts service

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class spinnerService {
  private requestcount = 0;

  isLoading = signal(false);

  show() {
    this.requestcount++;
    if (this.requestcount > 0) {
      this.isLoading.set(true);
    }
  }

  hide() {
    this.requestcount--;
    if(this.requestcount <= 0){
      this.isLoading.set(false);
    }
  }
}
