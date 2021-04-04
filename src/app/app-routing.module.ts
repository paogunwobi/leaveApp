import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'mydashboard', loadChildren: () => import('./mydashboard/mydashboard.module').then(m => m.MydashboardModule) },
  { path: 'manageleaves', loadChildren: () => import('./manageleaves/manageleaves.module').then(m => m.ManageleavesModule) },
  { path: 'managestaffs', loadChildren: () => import('./managestaffs/managestaffs.module').then(m => m.ManagestaffsModule) },
  { path: 'myprofile', loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofileModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
