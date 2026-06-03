import { Routes } from '@angular/router';
import { MyToaster } from './toast-template/my-toaster/my-toaster';

export const routes: Routes = [

    // Default route
    {
        path: '',
        redirectTo: 'toaster',
        pathMatch: 'full'
    },

    {
        path: 'toaster',
        component: MyToaster
    },

    {
        path: '**',
        redirectTo: 'toaster'
    }

];
