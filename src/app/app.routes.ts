import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./features/components/home/home.component").then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '**', redirectTo: '', pathMatch:'full'
  }
];
