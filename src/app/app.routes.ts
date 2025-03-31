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
    path: 'register',
    loadComponent: () => import('./features/components/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/components/dashboard/dashboard.component').then((m => m.DashboardComponent))
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
