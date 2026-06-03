import { Component } from '@angular/core';
import { Toaster } from '../toastService/toaster';

@Component({
  selector: 'app-my-toaster',
  imports: [],
  templateUrl: './my-toaster.html',
  styleUrl: './my-toaster.css',
})
export class MyToaster {

  constructor(
    private toaster : Toaster
  ){}

  showSuccess(){
    this.toaster.success('This is a success message', 'Success');
  }
  
  showError(){
    this.toaster.error('This is an error message', 'Error');
  }

  showInfo(){
    this.toaster.info('This is an info message', 'Info');
  }

  showWarning(){
    this.toaster.warning('This is a warning message', 'Warning');
  }


}
