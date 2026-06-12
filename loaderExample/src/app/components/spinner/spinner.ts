import { Component } from '@angular/core';
import { spinnerService } from '../spinner';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
})
export class Spinner {

  constructor(
    public loaderService : spinnerService,
    private http : HttpClient
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http
    .get('https://jsonplaceholder.typicode.com/users')
    .pipe(delay(3000))
    .subscribe(res => {
      console.log(res);
    });
  }

}
