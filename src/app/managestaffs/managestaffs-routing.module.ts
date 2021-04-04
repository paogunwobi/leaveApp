import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagestaffsComponent } from './managestaffs.component';

const routes: Routes = [{ path: '', component: ManagestaffsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagestaffsRoutingModule { }
