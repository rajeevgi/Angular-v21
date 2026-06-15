import { Routes } from '@angular/router';
import { NgPattern } from './ng-pattern/ng-pattern';

export const routes: Routes = [

    // Default route
    {
        path:'',
        redirectTo: 'pattern',
        pathMatch: 'full'
    },

    {
        path: 'pattern',
        component: NgPattern
    },

    {
        path: '**',
        redirectTo: 'pattern'
    }
];
