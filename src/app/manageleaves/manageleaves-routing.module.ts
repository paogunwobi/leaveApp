import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageleavesComponent } from './manageleaves.component';

const routes: Routes = [{ path: '', component: ManageleavesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageleavesRoutingModule { }
