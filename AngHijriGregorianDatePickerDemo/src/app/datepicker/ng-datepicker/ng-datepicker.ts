import { Component } from '@angular/core';
import { HijriGregorianDatepickerModule } from 'angular-hijri-gregorian-datepicker';

@Component({
  selector: 'app-ng-datepicker',
  standalone: true,
  imports: [HijriGregorianDatepickerModule],
  templateUrl: './ng-datepicker.html',
  styleUrl: './ng-datepicker.css',
})
export class NgDatepicker {

  selectedDate : any = '';

  onDateSelect(event : any){
    console.log("Selected Date =>", event);
    this.selectedDate = event;
  }

}
