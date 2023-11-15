import { Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: FormLoginComponent,
  },
  //    {path: 'admin', loadChildren: () => import('./admin/routes')},

  //  {path: 'admin', loadComponent: () => import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},
];
