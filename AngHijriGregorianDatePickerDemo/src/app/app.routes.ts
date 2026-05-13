import { Routes } from '@angular/router';
import { NgDatepicker } from './datepicker/ng-datepicker/ng-datepicker';

export const routes: Routes = [
    // Default route
    {
        path:'',
        redirectTo: 'datepicker',
        pathMatch: 'full'
    },

    {
        path: 'datepicker',
        component: NgDatepicker
    }
];
