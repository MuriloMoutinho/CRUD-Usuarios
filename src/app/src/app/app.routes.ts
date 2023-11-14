import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {
        path: "login",
 //       component: LoginComponent
    //    {path: 'admin', loadChildren: () => import('./admin/routes')},

    //  {path: 'admin', loadComponent: () => import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},

    }
];
