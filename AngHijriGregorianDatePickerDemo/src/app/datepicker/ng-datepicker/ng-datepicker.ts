import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HijriGregorianDatepickerComponent,
  HijriGregorianDatepickerModule,
} from 'angular-hijri-gregorian-datepicker';

@Component({
  selector: 'app-ng-datepicker',
  standalone: true,
  imports: [HijriGregorianDatepickerModule, FormsModule],
  templateUrl: './ng-datepicker.html',
  styleUrl: './ng-datepicker.css',
})
export class NgDatepicker {
  selectedDate: any = '';
  selectedCal: 'greg' | 'umAlQura' = 'greg';

  @ViewChild('pikcer')
  picker!: HijriGregorianDatepickerComponent;

  onDateSelect(event: any) {
    console.log('EVENT => ', event);

    // detect current mode from component
    const currentMode = this.picker.mode;

    console.log('CURRENT MODE => ', currentMode);

    // Gregorian
    if (currentMode === 'greg') {
      this.selectedDate = event.gD;
    }

    // Hijri
    else {
      this.selectedDate = event.uD;
    }
  }

  // confirm button click
  onSubmit(event: any) {
    console.log('Confirmed =>', event);
  }
}
