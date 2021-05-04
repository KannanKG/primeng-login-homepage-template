import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth-routing.module').then(m => m.AuthRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
