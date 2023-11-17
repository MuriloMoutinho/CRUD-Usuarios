import { Routes } from '@angular/router';
import { privateAuthGuard } from './core/guards/private-auth/private-auth.guard';
import { openAuthGuard } from './core/guards/open-auth/open-auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./ui/pages/login/login.component').then((m) => m.LoginComponent),
    canActivate: [openAuthGuard],
  },
  {
    path: '',
    loadComponent: () =>
      import('./ui/pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [privateAuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./ui/pages/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
    canActivate: [privateAuthGuard],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./ui/pages/admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [privateAuthGuard],
  },
];
