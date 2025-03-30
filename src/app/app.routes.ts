import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./features/components/home/home.component").then(m => m.HomeComponent)
  }
];
