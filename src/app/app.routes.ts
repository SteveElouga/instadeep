import {Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

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
    path: 'reset-password',
    loadComponent: () => import('./features/components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'reset-email-sent',
    loadComponent: () => import('./features/components/verify-email/verify-email.component').then(m => m.VerifyEmailComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/components/dashboard/dashboard.component').then((m => m.DashboardComponent)),
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    children: [
      {
        path: '',
        loadComponent: () => import('./features/components/dashboard-home/dashboard-home.component').then(m => m.DashboardHomeComponent)
      },
      {
        path: 'blogs',
        loadComponent: () => import('./features/components/blogs-management/blogs-management.component').then(m => m.BlogsManagementComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('./features/components/users-management/users-management.component').then(m => m.UsersManagementComponent)
      },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
